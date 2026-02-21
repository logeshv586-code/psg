
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
    response: "Prime Source Global (PSG) is a diversified company committed to 'Pioneering Solutions Globally'. We operate across multiple sectors including General Trading, HVAC Trading, Timber, Advanced Healthcare Supplies, IT, Tourism, and Environmental Consultancy.",
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
    response: "PSG offers specialized services in: 1. General Trading (Steel Pipes), 2. HVAC Trading, 3. Timber, 4. Advanced Healthcare Supplies, 5. IT, 6. Tourism, and 7. Environmental Consultancy.",
    category: 'services'
  },
  {
    id: 'general_trading',
    keywords: ['general trading', 'trading', 'steel', 'pipes', 'seamless', 'welded', 'galvanized'],
    response: "Our General Trading division supplies high-quality steel pipes, including seamless, welded, and galvanized options for industrial applications.",
    category: 'services'
  },
  {
    id: 'hvac',
    keywords: ['hvac', 'ac', 'air conditioning', 'mep', 'valves', 'pumps', 'fire fighting', 'plumbing', 'electrical'],
    response: "Our HVAC Trading division offers comprehensive solutions including Valves, HVAC systems, Fire Fighting equipment, Plumbing, and Electrical systems.",
    category: 'services'
  },
  {
    id: 'timber',
    keywords: ['timber', 'wood', 'plywood', 'mdf', 'construction materials', 'hardware'],
    response: "Our Timber division provides premium Timber & Wood Products (Teak, Meranti, Mahogany, etc.), Plywood, MDF, and Hardware Solutions for construction and interiors.",
    category: 'services'
  },
  {
    id: 'healthcare',
    keywords: ['health', 'healthcare', 'medical', 'transcription', 'coding', 'summarization', 'supplies', 'advanced healthcare'],
    response: "Our Advanced Healthcare Supplies division includes Medical Transcription, Medical Coding, and Medical Summarization to improve operational efficiency in healthcare.",
    category: 'services'
  },
  {
    id: 'environmental',
    keywords: ['environmental', 'consultancy', 'sustainability', 'green', 'emissions', 'eia'],
    response: "Our Environmental Consultancy helps businesses with Management Support (EIA/ESIA Reports), Sustainability Reporting (GRI Standards, GHG Emissions), and Organizational Strategy for sustainable practices.",
    category: 'services'
  },
  {
    id: 'it',
    keywords: ['software', 'it', 'app', 'web', 'ai', 'development', 'technology', 'blockchain', 'iot'],
    response: "Our IT division offers App & Web Development, AI/ML solutions, IoT, Blockchain, and IT Consulting including Cloud Strategy and Salesforce Integration.",
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
