import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TextPromptProps {
  isVisible: boolean;
}

const TextPrompt: React.FC<TextPromptProps> = ({ isVisible }) => {
  const [pulseEffect, setPulseEffect] = useState(false);
  
  // Start pulse effect after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setPulseEffect(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 1.5, 
            ease: "easeOut",
            opacity: { duration: 1.5 }
          }}
          className="absolute z-10 pointer-events-none"
        >
          <div className="relative">
            {/* Blur effect behind text */}
            <motion.div 
              initial={{ opacity: 0, scale: 1.3 }}
              animate={{ opacity: 0.15, scale: 1.5 }}
              exit={{ opacity: 0, scale: 1.8 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute inset-0 blur-xl bg-white/10 rounded-full w-48 h-16"
              style={{ 
                transform: 'translate(-50%, -50%)',
                left: '50%',
                top: '50%',
              }}
            ></motion.div>
            
            {/* Text with glow effect */}
            <p 
              className={`text-white text-2xl md:text-3xl font-light tracking-wider relative z-10 ${
                pulseEffect ? 'pulse-text' : ''
              }`}
              style={{ 
                textShadow: pulseEffect ? undefined : '0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.5)'
              }}
            >
              click anywhere
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TextPrompt;