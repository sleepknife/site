import React, { useState } from 'react';
import AudioPlayer from './AudioPlayer';
import { motion, AnimatePresence } from 'framer-motion';
import SocialIcons from './SocialIcons';

const LandingScreen: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://cdn.discordapp.com/attachments/1265416586638917735/1372656307856998410/youtube_NbWvx6eNozw_1920x1080_h264.mp4?ex=6827914e&is=68263fce&hm=75c63ec4a55ba6d9a770695f741a46bbda9274f0df97eb6cf4bae23ee2426ab8&"
          type="video/mp4"
        />
      </video>
      
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-white z-10"
          >
            <motion.h1 
              className="text-6xl font-light mb-2 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 1 }}
              style={{
                textShadow: '0 0 15px rgba(59,130,246,0.5), 0 0 30px rgba(59,130,246,0.3)',
              }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-300 to-white">
                @sleepknife
              </span>
            </motion.h1>
            <motion.p 
              className="text-lg text-blue-200 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3, duration: 1 }}
            >
              placeholder text
            </motion.p>
            
            <SocialIcons />
          </motion.div>
        )}
      </AnimatePresence>
      
      <AudioPlayer onPlay={() => setShowContent(true)} />
    </div>
  );
};

export default LandingScreen;