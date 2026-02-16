import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';
import Layout from '@/components/layout/Layout';

interface PolicySection {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface PolicyViewerProps {
  title: string;
  lastUpdated?: string;
  intro?: React.ReactNode;
  sections: PolicySection[];
}

const PolicyViewer = ({ title, lastUpdated, intro, sections }: PolicyViewerProps) => {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      );
      
      const current = sectionElements.find(element => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= window.innerHeight / 2;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <Layout>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />

      <section className="relative bg-muted/30 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] dark:bg-grid-slate-800/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 pb-2"
          >
            {title}
          </motion.h1>
          
          {intro && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-lg text-muted-foreground mb-4 leading-relaxed"
            >
              {intro}
            </motion.div>
          )}

          {lastUpdated && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-sm font-medium text-muted-foreground uppercase tracking-widest"
            >
              Last Updated: {lastUpdated}
            </motion.p>
          )}
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-12 relative">
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-4">
              <h3 className="font-semibold mb-6 text-sm text-muted-foreground uppercase tracking-wider">
                Contents
              </h3>
              <nav className="space-y-1 border-l border-muted">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={cn(
                      "group flex items-center w-full text-left px-4 py-2.5 text-sm transition-all duration-200 border-l-2 -ml-[1px]",
                      activeSection === section.id
                        ? "border-primary text-primary font-medium bg-primary/5 rounded-r-md"
                        : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/30"
                    )}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          <main className="flex-1 max-w-3xl mx-auto lg:mx-0">
            <div className="space-y-16">
              {sections.map((section, index) => (
                <motion.section
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="scroll-mt-28 relative"
                >
                  <div className="absolute -left-4 top-0 w-1 h-8 bg-primary/20 rounded-full hidden lg:block" />
                  <h2 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-3 text-foreground">
                    <span className="text-primary/40 text-lg font-mono">{(index + 1).toString().padStart(2, '0')}</span>
                    {section.title}
                  </h2>
                  <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                    {section.content}
                  </div>
                </motion.section>
              ))}
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default PolicyViewer;
