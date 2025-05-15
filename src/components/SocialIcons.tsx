import React from 'react';
import { motion } from 'framer-motion';

interface SocialIconProps {
  icon?: React.ReactNode;
  href?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, href }) => (
  <motion.div
    className="relative"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    {/* Outer glow */}
    <div className="absolute inset-0 rounded-full bg-blue-400/30 blur-xl transform scale-150" />
    
    {/* Inner glow */}
    <div className="absolute inset-0 rounded-full bg-blue-300/20 blur-md" />
    
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative w-12 h-12 rounded-full flex items-center justify-center
                  border border-blue-300/40 bg-black/40 backdrop-blur-sm
                  transform-gpu hover:scale-110 transition-transform duration-300
                  shadow-[0_0_30px_rgba(59,130,246,0.3),inset_0_0_15px_rgba(59,130,246,0.2)]
                  ${href ? 'cursor-pointer' : 'cursor-default'}`}
    >
      {icon}
    </motion.a>
  </motion.div>
);

const SocialIcons = () => {
  return (
    <motion.div 
      className="flex gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.5, duration: 0.8 }}
    >
      <SocialIcon
        icon={<img src="https://i.imgur.com/M0Cbph1.png" alt="Icon 1" className="w-6 h-6" />}
        href="https://twitter.com"
      />
      <SocialIcon
        icon={<img src="https://i.imgur.com/M0Cbph1.png" alt="Twitter" className="w-6 h-6" />}
        href="https://twitter.com"
      />
      <SocialIcon
        icon={<img src="https://i.imgur.com/M0Cbph1.png" alt="Icon 3" className="w-6 h-6" />}
        href="https://twitter.com"
      />
    </motion.div>
  );
};

export default SocialIcons;
