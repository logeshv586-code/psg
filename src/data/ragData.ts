import { 
  Search, Wand2, MessageCircle, Layers, Database, Workflow, Brain, Cpu, Users, Languages, Mic, Book, Shield, ShoppingCart, Briefcase 
} from 'lucide-react';

export const ragTypes = [
  { key: 'basic_rag', title: 'Basic RAG', icon: Search, short: 'Embed, retrieve Top‑K, answer with citations.', works: ['Split text to chunks', 'Embed into vectors', 'Search Top‑K', 'Generate with context'], canDo: ['FAQs', 'General Q&A'], query: 'Explain basic RAG workflow' },
  { key: 'hybrid_rag', title: 'Hybrid RAG', icon: Wand2, short: 'Combine keyword and vector search for recall and precision.', works: ['BM25 + vector search', 'Weighted scoring', 'Deduplicate and rank'], canDo: ['Docs with exact terms', 'Codebases'], query: 'How does hybrid RAG improve retrieval?' },
  { key: 'conversational_rag', title: 'Conversational RAG', icon: MessageCircle, short: 'Keep dialogue state and memory across turns.', works: ['Track session state', 'Retrieve per turn', 'Memory summarization'], canDo: ['Assistants', 'Support chat'], query: 'What is conversational RAG?' },
  { key: 'multimodal_rag', title: 'Multimodal RAG', icon: Layers, short: 'Retrieve text, images, audio, or video together.', works: ['Embed multiple modalities', 'Cross-modal retrieval'], canDo: ['Product search', 'Media Q&A'], query: 'When use multimodal RAG?' },
  { key: 'structured_rag', title: 'Structured RAG', icon: Database, short: 'Query tables, SQL, and structured stores.', works: ['Schema-aware retrieval', 'SQL + text context'], canDo: ['Reports', 'Dashboards'], query: 'How does structured RAG work?' },
  { key: 'kg_rag', title: 'Knowledge Graph RAG', icon: Workflow, short: 'Use relationships in graphs for precise answers.', works: ['Graph traversal', 'Path‑aware context'], canDo: ['Compliance', 'Entity relations'], query: 'Why graph‑based RAG?' },
  { key: 'agentic_rag', title: 'Agentic RAG', icon: Brain, short: 'Plan actions and call tools with retrieval.', works: ['Planner + tools', 'Iterative retrieval'], canDo: ['Research', 'Automation'], query: 'What is agentic RAG?' },
  { key: 'realtime_rag', title: 'Real‑time RAG', icon: Cpu, short: 'Ingest new data and answer on fresh content.', works: ['Streaming ingestion', 'Ephemeral cache'], canDo: ['News', 'Ops alerts'], query: 'How to keep RAG real‑time?' },
  { key: 'personalized_rag', title: 'Personalized RAG', icon: Users, short: 'Use user profile and preferences in retrieval.', works: ['User context features', 'Scoped indexing'], canDo: ['Portals', 'Learning'], query: 'How to personalize RAG?' },
  { key: 'xl_rag', title: 'Cross‑lingual RAG', icon: Languages, short: 'Retrieve and answer across languages.', works: ['Multilingual embeddings', 'Optional translation'], canDo: ['Global sites', 'Support'], query: 'How to make RAG multilingual?' },
  { key: 'voice_rag', title: 'Voice RAG', icon: Mic, short: 'Voice in/out with retrieval and citations.', works: ['STT to query', 'TTS to speak'], canDo: ['Hotline', 'Kiosk'], query: 'Show voice RAG example' },
  { key: 'citation_rag', title: 'Citation RAG', icon: Book, short: 'Always show sources and evidence.', works: ['Chunk‑level ids', 'Inline references'], canDo: ['Knowledge pages', 'Audits'], query: 'How to ensure citations?' },
  { key: 'guardrails_rag', title: 'Guardrailed RAG', icon: Shield, short: 'Restrict topics and enforce policies.', works: ['Topic allow/deny', 'Safety checks'], canDo: ['Enterprise', 'Healthcare'], query: 'How to add guardrails?' }
];

export const assistantTypes = [
  { key: 'faq', title: 'FAQ Bot', icon: MessageCircle, short: 'Answers common questions with citations.', canDo: ['Website', 'Portals'], query: 'List top FAQs for PSG' },
  { key: 'support', title: 'Customer Support', icon: Users, short: 'Troubleshooting with guided flows.', canDo: ['Support', 'Warranty'], query: 'Help with a service issue' },
  { key: 'sales', title: 'Sales Assistant', icon: ShoppingCart, short: 'Qualify leads and suggest offerings.', canDo: ['Lead capture', 'Quotes'], query: 'Recommend a service package' },
  { key: 'hr', title: 'HR Assistant', icon: Briefcase, short: 'Policies and careers guidance.', canDo: ['Benefits', 'Hiring'], query: 'Show careers and apply steps' },
  { key: 'internal_search', title: 'Internal Search', icon: Search, short: 'Find internal docs quickly.', canDo: ['Confluence', 'Shared drive'], query: 'Locate SOP for procurement' },
  { key: 'doc_qa', title: 'Document Q&A', icon: Book, short: 'Ask questions across PDFs and docs.', canDo: ['Contracts', 'Manuals'], query: 'Summarize latest brochure' },
  { key: 'data_analyst', title: 'Data Analyst', icon: Cpu, short: 'Explain metrics and trends.', canDo: ['Reports', 'KPIs'], query: 'Analyze quarterly numbers' },
  { key: 'compliance', title: 'Compliance Advisor', icon: Shield, short: 'Policy, audit, and risk checks.', canDo: ['ISO', 'Regulatory'], query: 'What are key compliance steps?' }
];
