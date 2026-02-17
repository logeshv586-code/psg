
export interface ChatbotResponse {
  id: string;
  keywords: string[];
  response: string;
  category: string;
}

export const chatbotData: ChatbotResponse[] = [
  {
    id: 'greeting',
    keywords: ['hello', 'hi', 'hey', 'greetings', 'morning', 'afternoon', 'evening'],
    response: "Hello! Welcome to Prime Source Global (PSG). I'm here to assist you. How can I help you today?",
    category: 'general'
  },
  {
    id: 'about',
    keywords: ['who are you', 'what is psg', 'about psg', 'what do you do', 'company overview'],
    response: "Prime Source Global (PSG) is a diversified company committed to 'Pioneering Solutions Globally'. We operate across multiple sectors including trading, travel and tourism, eHealth, environmental consulting, and software development.",
    category: 'general'
  },
  {
    id: 'mission',
    keywords: ['mission', 'goal', 'aim', 'purpose'],
    response: "Our mission is to drive innovation and excellence, delivering exceptional value while prioritizing sustainability and community impact.",
    category: 'general'
  },
  {
    id: 'vision',
    keywords: ['vision', 'future'],
    response: "Our vision is to create tailored solutions that cater to clients' unique needs, helping them thrive in a dynamic landscape through collaborative approaches and integrity.",
    category: 'general'
  },
  {
    id: 'services',
    keywords: ['services', 'what services', 'offerings', 'verticals', 'business areas'],
    response: "PSG offers specialized services in five main verticals: 1. Construction & Interior Supplies, 2. Environmental Consultancy, 3. Digital Health (eHealth), 4. Software Development & AI, and 5. Tourism.",
    category: 'services'
  },
  {
    id: 'construction',
    keywords: ['construction', 'interior', 'building materials', 'wood', 'timber', 'hardware', 'mep', 'plumbing', 'electrical'],
    response: "Our Construction & Interior Supplies vertical provides Timber & Wood Products (Teak, Meranti, Mahogany, etc.), Hardware Solutions, and MEP Solutions including Valves, HVAC, Fire Fighting, Electrical, and Plumbing systems.",
    category: 'services'
  },
  {
    id: 'environmental',
    keywords: ['environmental', 'consultancy', 'sustainability', 'green', 'emissions', 'eia'],
    response: "Our Environmental Consultancy helps businesses with Management Support (EIA/ESIA Reports), Sustainability Reporting (GRI Standards, GHG Emissions), and Organizational Strategy for sustainable practices.",
    category: 'services'
  },
  {
    id: 'ehealth',
    keywords: ['health', 'ehealth', 'medical', 'transcription', 'coding', 'summarization', 'healthcare'],
    response: "Our Digital Health (eHealth) services include Medical Transcription, Medical Coding, and Medical Summarization to improve operational efficiency in healthcare.",
    category: 'services'
  },
  {
    id: 'software',
    keywords: ['software', 'it', 'app', 'web', 'ai', 'development', 'technology', 'blockchain', 'iot'],
    response: "Our Software Development & AI division offers App & Web Development, AI/ML solutions, IoT, Blockchain, and IT Consulting including Cloud Strategy and Salesforce Integration.",
    category: 'services'
  },
  {
    id: 'tourism',
    keywords: ['tourism', 'travel', 'tour', 'visa', 'holiday', 'vacation', 'dubai', 'saudi'],
    response: "Our Tourism division provides customized tour packages for UAE and Saudi Arabia, including Solo, Romantic, and Group tours. We also offer end-to-end Visa Services for GCC countries.",
    category: 'services'
  },
  {
    id: 'contact',
    keywords: ['contact', 'email', 'phone', 'address', 'reach', 'location'],
    response: "You can reach us at Sales@psgbiz.com or call +971 7 258 6848 / +971 54 378 5531. We are located at Compass Building, Al Shuhada' Rd, Al Hamra Industrial Free Zone, Ras Al Khaimah, UAE.",
    category: 'contact'
  },
  {
    id: 'social',
    keywords: ['social', 'linkedin', 'instagram', 'facebook', 'twitter', 'youtube'],
    response: "Follow us on social media: LinkedIn (Prime Source Global), Instagram (@primesourceglobal), Facebook, X (@psgsales), and YouTube (@PrimeSourceGlobal).",
    category: 'contact'
  },
  {
    id: 'default',
    keywords: [],
    response: "I'm not sure about that. Could you please rephrase your question? You can ask about our services, contact info, or company details.",
    category: 'system'
  }
];
