import React, { useState, useRef, useEffect } from 'react';
import { ThumbsUp, ThumbsDown, Copy, Send, LayoutGrid, X, Minus, Mic, Bot, Trash2 } from 'lucide-react';
import { motion, useMotionValue } from 'framer-motion';
import Robot3D from './Robot3D';
import MiniRobot from './MiniRobot';
import WaitingRobot from './WaitingRobot';
import { chatbotData } from '../../data/chatbotData';

const INITIAL_MESSAGES = [
  {
    id: 1,
    role: 'bot',
    content: 'Hello! I am the Prime Source Global assistant. How can I help you today?',
  }
];

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const constraintsRef = useRef(null);
  const robotRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Separate motion values for robot and chat window
  const robotX = useMotionValue(0);
  const robotY = useMotionValue(0);
  const chatX = useMotionValue(0);
  const chatY = useMotionValue(0);

  // Speech Recognition Refs
  const recognitionRef = useRef<any>(null);
  const [isListening, setIsListening] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<BlobPart[]>([]);
  const streamRef = useRef<MediaStream | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  useEffect(() => {
    const w = typeof window !== 'undefined' ? (window as any) : null;
    const SR = w && (w.SpeechRecognition || w.webkitSpeechRecognition);
    if (SR) {
      const r = new SR();
      r.continuous = false;
      r.lang = 'en-US';
      r.onresult = (e: any) => {
        const t = Array.from(e.results).map((x: any) => x[0].transcript).join(' ');
        setInputValue((prev) => (prev ? prev + ' ' + t : t));
      };
      r.onend = () => setIsListening(false);
      recognitionRef.current = r;
    }
  }, []);

  const sendAudio = async (blob: Blob) => {
    const fd = new FormData();
    fd.append('file', blob, 'speech.webm');
    try {
      // Assuming localhost:8000 is the backend, but likely need to handle this gracefully if not available
      const resp = await fetch('http://localhost:8000/transcribe', { method: 'POST', body: fd });
      if (!resp.ok) throw new Error('fail');
      const data = await resp.json();
      const t = (data && data.text) || '';
      if (t) setInputValue((prev) => (prev ? prev + ' ' + t : t));
    } catch (e) {
      console.warn("Audio transcription failed or backend unavailable", e);
      const r = recognitionRef.current;
      if (r) {
        r.start();
        setIsListening(true);
      }
    }
  };

  const startListen = async () => {
    const w = typeof window !== 'undefined' ? (window as any) : null;
    if (!w || !w.navigator || !w.MediaRecorder) {
      const r = recognitionRef.current;
      if (r) {
        r.start();
        setIsListening(true);
      } else {
        setIsListening(true);
      }
      return;
    }
    try {
      const stream = await w.navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const mr = new w.MediaRecorder(stream);
      audioChunksRef.current = [];
      mr.ondataavailable = (e: any) => {
        if (e.data && e.data.size > 0) audioChunksRef.current.push(e.data);
      };
      mr.onstop = async () => {
        const blob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        audioChunksRef.current = [];
        if (streamRef.current) {
          streamRef.current.getTracks().forEach((t: any) => t.stop());
          streamRef.current = null;
        }
        await sendAudio(blob);
        setIsListening(false);
      };
      mediaRecorderRef.current = mr;
      mr.start();
      setIsListening(true);
    } catch (e) {
      setIsListening(false);
      console.error("Microphone access denied or error", e);
    }
  };

  const stopListen = () => {
    const w = typeof window !== 'undefined' ? (window as any) : null;
    const mr = mediaRecorderRef.current;
    if (w && mr && mr.state !== 'inactive') {
      mr.stop();
      mediaRecorderRef.current = null;
      return;
    }
    const r = recognitionRef.current;
    if (r) {
      r.stop();
      setIsListening(false);
    } else {
      setIsListening(false);
    }
  };

  const toggleListening = () => {
    if (isListening) {
      stopListen();
    } else {
      startListen();
    }
  };

  const findResponse = (text: string) => {
    const lowerText = text.toLowerCase();

    // Check for keyword matches
    const match = chatbotData.find(item =>
      item.keywords.some(keyword => lowerText.includes(keyword))
    );

    if (match) {
      return match.response;
    }

    // Fallback to default
    const defaultResponse = chatbotData.find(item => item.id === 'default');
    return defaultResponse ? defaultResponse.response : "I'm sorry, I didn't understand that.";
  };

  const handleClearChat = () => {
    setMessages(INITIAL_MESSAGES);
  };

  const handleSend = async (textOverride?: string) => {
    const text = (textOverride ?? inputValue).trim();
    if (!text) return;
    const userMsg = {
      id: Date.now(),
      role: 'user',
      content: text,
    };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);
    try {
      // Simulate backend delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      const responseText = findResponse(text);

      const botMsg = {
        id: Date.now() + 1,
        role: 'bot',
        content: responseText,
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error('Error:', error);
      const errorMsg = {
        id: Date.now() + 1,
        role: 'bot',
        content: "Sorry, I encountered an error while processing your request.",
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRobotClick = () => {
    if (isDragging) return;

    if (!isOpen && robotRef.current) {
      const robotRect = robotRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const isSmallScreen = windowWidth < 640;
      // Dimensions match the CSS classes: w-[320px] max-w-[calc(100vw-2rem)] and h-[450px] max-h-[calc(100vh-6rem)] for mobile, sm:w-[380px] and sm:h-[600px]
      const chatWidth = isSmallScreen ? Math.min(windowWidth - 32, 320) : 380;
      const chatHeight = isSmallScreen ? Math.min(windowHeight - 96, 450) : 600;

      // Calculate desired top-left position to center the chat window on the robot center
      const robotCenterX = robotRect.left + robotRect.width / 2;
      const robotCenterY = robotRect.top + robotRect.height / 2;

      let targetX = robotCenterX - chatWidth / 2;
      let targetY = robotCenterY - chatHeight / 2;

      // Clamp to screen edges (with padding)
      const padding = 20;

      targetX = Math.max(padding, Math.min(targetX, windowWidth - chatWidth - padding));
      targetY = Math.max(padding, Math.min(targetY, windowHeight - chatHeight - padding));

      chatX.set(targetX);
      chatY.set(targetY);
    }

    setIsOpen(true);
  };

  return (
    <>
      <div ref={constraintsRef} className="fixed inset-4 pointer-events-none z-[900]" />

      <motion.div
        ref={robotRef}
        drag
        dragConstraints={constraintsRef}
        dragMomentum={false}
        dragElastic={0}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setTimeout(() => setIsDragging(false), 100)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{ x: robotX, y: robotY }}
        className="fixed bottom-24 right-4 sm:bottom-32 sm:right-8 z-[999] cursor-grab active:cursor-grabbing"
        animate={{
          scale: isOpen ? 0 : 1,
          opacity: isOpen ? 0 : 1,
          pointerEvents: isOpen ? 'none' : 'auto'
        }}
        transition={{ duration: 0.3 }}
        onClick={handleRobotClick}
      >
        <Robot3D notificationCount={1} />
      </motion.div>

      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragMomentum={false}
        dragElastic={0}
        style={{ x: chatX, y: chatY }}
        className="fixed top-0 left-0 z-[1000]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{
          scale: isOpen ? 1 : 0.9,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none'
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <div className="w-[320px] max-w-[calc(100vw-2rem)] sm:w-[380px] h-[450px] max-h-[calc(100vh-6rem)] sm:max-h-none sm:h-[600px] bg-[#09090b] text-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-zinc-800 ring-1 ring-black/5 font-sans cursor-default">

          <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-[#8CC63F] text-[#172033] border-b border-[#7ab332]/50">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 flex items-center justify-center">
                <div className="scale-[0.65]">
                  <MiniRobot />
                </div>
              </div>
              <div>
                <h3 className="text-[15px] font-bold">Chat with AI Bot</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#172033] rounded-full"></span>
                  <span className="text-[11px] text-[#172033]/80 font-medium">Online</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={handleClearChat}
                className="p-2 hover:bg-[#172033]/10 rounded-full text-[#172033]/70 hover:text-[#172033] transition"
                title="Clear Chat"
              >
                <Trash2 className="w-5 h-5" />
              </button>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-[#172033]/10 rounded-full text-[#172033]/70 hover:text-[#172033] transition" title="Close">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent perspective-[1000px] bg-white">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end animate-user-message-in' : 'justify-start animate-message-in'}`}
              >
                {msg.role === 'user' ? (
                  <div className="bg-[#8CC63F] text-[#172033] px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[85%] text-[14px] font-medium leading-relaxed shadow-sm">
                    {msg.content}
                  </div>
                ) : (
                  <div className="flex gap-3 max-w-[90%] animate-fade-in">
                    <div className="w-10 h-10 flex-shrink-0 -ml-1 flex items-center justify-center">
                      <div className="scale-[0.6]">
                        <MiniRobot />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="bg-slate-50 p-3 rounded-2xl rounded-tl-sm border border-gray-200 text-slate-700 text-[14px] leading-6 font-normal shadow-sm">
                        {msg.content}
                      </div>
                      <div className="flex items-center gap-1">
                        <button className="p-1.5 rounded-full hover:bg-gray-100 transition text-gray-400 hover:text-[#172033]">
                          <ThumbsUp className="w-3.5 h-3.5" />
                        </button>
                        <button className="p-1.5 rounded-full hover:bg-gray-100 transition text-gray-400 hover:text-[#172033]">
                          <ThumbsDown className="w-3.5 h-3.5" />
                        </button>
                        <button className="p-1.5 rounded-full hover:bg-gray-100 transition text-gray-400 hover:text-[#172033]">
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start animate-message-in">
                <div className="flex gap-3 max-w-[90%] animate-fade-in">
                  <div className="flex flex-col gap-2">
                    <div className="bg-white p-4 rounded-2xl rounded-tl-md border border-gray-200 shadow-sm flex items-center gap-5">
                      <div className="scale-75 origin-left">
                        <WaitingRobot />
                      </div>
                      <span className="text-slate-500 text-sm tracking-wide animate-pulse">Request from PSG is coming...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 sm:p-4 bg-white border-t border-gray-200">
            <div className="flex items-center gap-1.5 bg-gray-50 p-1 sm:p-1.5 pl-2 sm:pl-3 pr-1 sm:pr-1.5 rounded-[24px] border border-gray-200 focus-within:border-gray-300 transition duration-300">
              <button className="p-1.5 hover:bg-gray-200 rounded-full text-gray-500 transition flex-shrink-0">
                <LayoutGrid className="w-5 h-5" strokeWidth={1.5} />
              </button>

              <input
                type="text"
                placeholder="Type message..."
                className="flex-1 bg-transparent text-slate-900 placeholder-gray-400 outline-none text-[14px] min-w-0"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button
                onClick={toggleListening}
                className={`px-2.5 py-1.5 rounded-full border flex-shrink-0 transition-all ${isListening ? 'border-[#8CC63F] bg-[#8CC63F] text-[#172033]' : 'border-gray-300 bg-white text-gray-500'}`}
              >
                <div className="flex items-center gap-1.5">
                  <Mic className="w-3.5 h-3.5" />
                  <span className="text-xs font-medium">{isListening ? 'On' : 'Voice'}</span>
                </div>
              </button>

              <button
                onClick={() => handleSend()}
                disabled={!inputValue.trim()}
                className={`p-2 rounded-full transition-all duration-300 flex-shrink-0 ${inputValue.trim() ? 'bg-[#172033] text-white' : 'bg-transparent text-gray-400'}`}
              >
                <Send className={`w-4 h-4 transition-transform duration-300 ${inputValue.trim() ? 'rotate-0' : 'rotate-0'}`} fill={inputValue.trim() ? "currentColor" : "none"} />
              </button>
            </div>
            <div className="text-center mt-2 text-[10px] text-gray-400">
              AI can make mistakes.
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Chatbot;
