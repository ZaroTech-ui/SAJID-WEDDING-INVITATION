import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';

const MusicToggle = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio('/music/Tu Hi To Jannat Meri Instrumental.m4r');
    audioRef.current.loop = true;
    audioRef.current.volume = 0;

    // Attempt to autoplay
    const playAudio = async () => {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        fadeIn();
      } catch (error) {
        console.log('Autoplay prevented. Click button to play music.');
        setIsMuted(true);
      }
    };

    playAudio();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const fadeIn = () => {
    if (audioRef.current) {
      let volume = 0;
      const interval = setInterval(() => {
        if (volume < 0.3) {
          volume += 0.01;
          audioRef.current.volume = Math.min(volume, 0.3);
        } else {
          clearInterval(interval);
        }
      }, 50);
    }
  };

  const toggleMute = async () => {
    if (audioRef.current) {
      if (isMuted || !isPlaying) {
        // Play music
        try {
          await audioRef.current.play();
          setIsPlaying(true);
          fadeIn();
          setIsMuted(false);
        } catch (error) {
          console.error('Error playing audio:', error);
        }
      } else {
        // Pause music
        audioRef.current.pause();
        audioRef.current.volume = 0;
        setIsPlaying(false);
        setIsMuted(true);
      }
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      onClick={toggleMute}
      className="fixed top-6 right-6 z-40 bg-emerald-950 text-gold p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 glow-hover"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={isMuted || !isPlaying ? "Play Music" : "Pause Music"}
    >
      {isMuted || !isPlaying ? (
        <HiVolumeOff className="w-6 h-6" />
      ) : (
        <HiVolumeUp className="w-6 h-6" />
      )}
    </motion.button>
  );
};

export default MusicToggle;
