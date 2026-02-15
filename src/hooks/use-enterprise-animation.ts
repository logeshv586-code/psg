import { useState, useEffect, useRef, RefObject } from 'react';

interface AnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
  rootMargin?: string;
}

export const useIntersectionObserver = (options: AnimationOptions = {}) => {
  const { threshold = 0.1, triggerOnce = true, delay = 0, rootMargin = '0px' } = options;
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          if (triggerOnce && element) {
            observer.unobserve(element);
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, triggerOnce, delay, rootMargin]);

  return [elementRef, isVisible] as const;
};

export const useEnterpriseAnimation = (options: AnimationOptions = {}) => {
  const [elementRef, isVisible] = useIntersectionObserver(options);
  
  const getAnimationClass = (baseClass: string = '') => {
    return `${baseClass} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-1000 ease-out`;
  };

  const getStaggeredAnimation = (delay: number = 0) => {
    return `${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-1000 ease-out`;
  };

  return {
    ref: elementRef,
    isVisible,
    getAnimationClass,
    getStaggeredAnimation,
  };
};

export const useParallax = (speed: number = 0.5) => {
  const [offsetY, setOffsetY] = useState(0);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxStyle = {
    transform: `translateY(${offsetY * speed}px)`,
  };

  return { ref: elementRef, style: parallaxStyle };
};

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
};

export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return scrollProgress;
};