import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInVolume } from '../utils/audioContext';

interface AudioPlayerProps {
  onPlay: () => void;
}

const AudioPlayer = ({ onPlay }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0;
      audioRef.current.play();
      fadeInVolume(audioRef.current);
      setIsPlaying(true);
      onPlay();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            onClick={handleClick}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="fixed inset-0 bg-black/60 backdrop-blur-xl flex items-center justify-center cursor-pointer"
          >
            <motion.p 
              className="text-2xl tracking-wider text-blue-200"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ 
                textShadow: '0 0 15px rgba(191,219,254,0.5), 0 0 30px rgba(191,219,254,0.3)'
              }}
            >
              click
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
      <audio
        ref={audioRef}
        src="https://cdn.discordapp.com/attachments/1265416586638917735/1372427212053024868/SpotiDownloader.com_-_ion_een_kno_uu_-_xaviersobased.mp3?ex=6826bbf1&is=68256a71&hm=db1102e569abb0abbe0efb1360ca444db1f0e4c46924f424a896474cb572b829&"
        loop
      />
    </div>
  );
};

export default AudioPlayer;