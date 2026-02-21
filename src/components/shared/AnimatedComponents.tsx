import React from 'react';
import { useEnterpriseAnimation } from '@/hooks/use-enterprise-animation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  animationType?: 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'scale-in' | 'slide-in-up';
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: 'lift' | 'scale' | 'glow' | 'shimmer' | 'border-glow';
  animationDelay?: number;
}

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'custom';
  size?: 'sm' | 'md' | 'lg';
  animationType?: 'scale' | 'lift' | 'glow';
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  id,
  className = '',
  animationType = 'fade-in-up',
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
}) => {
  const { ref, getAnimationClass } = useEnterpriseAnimation({
    delay,
    threshold,
    triggerOnce,
  });

  const animationClasses = {
    'fade-in-up': 'animate-fade-in-up',
    'fade-in-left': 'animate-fade-in-left',
    'fade-in-right': 'animate-fade-in-right',
    'scale-in': 'animate-scale-in',
    'slide-in-up': 'animate-slide-in-up',
  };

  return (
    <section id={id} ref={ref} className={`${className} ${getAnimationClass(animationClasses[animationType])}`}>
      {children}
    </section>
  );
};

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  hoverEffect = 'lift',
  animationDelay = 0,
}) => {
  const hoverClasses = {
    lift: 'hover-lift',
    scale: 'hover-scale',
    glow: 'hover-glow',
    shimmer: 'hover-shimmer',
    'border-glow': 'hover-border-glow',
  };

  return (
    <div 
      className={`interactive-card ${hoverClasses[hoverEffect]} ${className}`}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {children}
    </div>
  );
};

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  animationType = 'scale',
}) => {
  const baseClasses = 'interactive-button focus-enterprise font-medium transition-all duration-300 ease-out';
  
  const variantClasses = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    accent: 'bg-accent text-accent-foreground hover:bg-accent/90',
    outline: 'border border-border bg-transparent hover:bg-accent/10',
    custom: '',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const animationClasses = {
    scale: 'hover:scale-105',
    lift: 'hover:-translate-y-1',
    glow: 'hover-glow',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${animationClasses[animationType]} ${className}`}
    >
      {children}
    </button>
  );
};

export const AnimatedText: React.FC<{
  children: React.ReactNode;
  className?: string;
  animationType?: 'typewriter' | 'fade-in' | 'slide-in';
  delay?: number;
}> = ({ children, className = '', animationType = 'fade-in', delay = 0 }) => {
  const { ref, isVisible } = useEnterpriseAnimation({ delay });

  const animationStyles = {
    typewriter: isVisible ? 'animate-[typewriter_2s_ease-out_forwards]' : 'opacity-0',
    'fade-in': isVisible ? 'opacity-100' : 'opacity-0',
    'slide-in': isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0',
  };

  return (
    <span ref={ref} className={`${animationStyles[animationType]} transition-all duration-1000 ease-out ${className}`}>
      {children}
    </span>
  );
};

export const StaggeredList: React.FC<{
  items: (string | React.ReactNode)[];
  className?: string;
  itemClassName?: string;
  animationType?: 'fade-in-left' | 'fade-in-right' | 'fade-in-up';
  staggerDelay?: number;
}> = ({ items, className = '', itemClassName = '', animationType = 'fade-in-left', staggerDelay = 100 }) => {
  const { ref, isVisible } = useEnterpriseAnimation();

  const animationClasses = {
    'fade-in-left': 'animate-fade-in-left',
    'fade-in-right': 'animate-fade-in-right',
    'fade-in-up': 'animate-fade-in-up',
  };

  return (
    <ul ref={ref} className={className}>
      {items.map((item, index) => (
        <li
          key={index}
          className={`${itemClassName} ${isVisible ? animationClasses[animationType] : 'opacity-0 translate-y-8'} transition-all duration-1000 ease-out`}
          style={{ animationDelay: `${index * staggerDelay}ms` }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default {
  AnimatedSection,
  AnimatedCard,
  AnimatedButton,
  AnimatedText,
  StaggeredList,
};