
import { motion, HTMLMotionProps } from "framer-motion";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

// Motion Button - correctly wrapping the Button component
const MotionButtonComponent = motion(Button);

export const MotionButton = React.forwardRef<HTMLButtonElement, ButtonProps & HTMLMotionProps<"button">>(
  ({ className, ...props }, ref) => {
    return (
      <MotionButtonComponent
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(className)}
        {...props}
      />
    );
  }
);
MotionButton.displayName = "MotionButton";

// Motion Card Wrapper
export const MotionCard = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Motion Section Wrapper (for larger blocks)
export const MotionSection = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

// Interactive Item (for list items or grid items)
export const MotionItem = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.03 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
