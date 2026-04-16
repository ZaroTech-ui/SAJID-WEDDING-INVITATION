import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import ScrollProgress from './components/ScrollProgress';
import Invitation from './components/Invitation';
import Countdown from './components/Countdown';
import Location from './components/Location';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import FloatingParticles from './components/FloatingParticles';
import InvitationCover from './components/InvitationCover';

function App() {
  const [loading, setLoading] = useState(true);
  const [showCover, setShowCover] = useState(true);
  const audioRef = useRef(null);
  const wasPlayingRef = useRef(false);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    // Initialize and play background music
    audioRef.current = new Audio('/music/Tu Hi To Jannat Meri Instrumental.m4r');
    audioRef.current.loop = true;
    audioRef.current.volume = 0;

    const playMusic = async () => {
      try {
        await audioRef.current.play();
        wasPlayingRef.current = true;
        // Fade in the music
        let volume = 0;
        const fadeInterval = setInterval(() => {
          if (volume < 0.4) {
            volume += 0.02;
            audioRef.current.volume = Math.min(volume, 0.4);
          } else {
            clearInterval(fadeInterval);
          }
        }, 100);
      } catch (error) {
        // If autoplay fails, try again on first user interaction
        const playOnInteraction = async () => {
          try {
            await audioRef.current.play();
            wasPlayingRef.current = true;
            let volume = 0;
            const fadeInterval = setInterval(() => {
              if (volume < 0.4) {
                volume += 0.02;
                audioRef.current.volume = Math.min(volume, 0.4);
              } else {
                clearInterval(fadeInterval);
              }
            }, 100);
            // Remove listener after successful play
            document.removeEventListener('click', playOnInteraction);
            document.removeEventListener('touchstart', playOnInteraction);
          } catch (err) {
            console.log('Music playback failed:', err);
          }
        };
        
        document.addEventListener('click', playOnInteraction, { once: true });
        document.addEventListener('touchstart', playOnInteraction, { once: true });
      }
    };

    // Start playing after a short delay
    const timer = setTimeout(() => {
      playMusic();
    }, 1000);

    // Handle page visibility change (when user switches tabs or opens external links)
    const handleVisibilityChange = () => {
      if (audioRef.current) {
        if (document.hidden) {
          // Page is hidden (user opened Google Maps or switched tab)
          if (!audioRef.current.paused) {
            wasPlayingRef.current = true;
            audioRef.current.pause();
          }
        } else {
          // Page is visible again (user returned from Google Maps)
          if (wasPlayingRef.current) {
            audioRef.current.play().catch(err => {
              console.log('Resume playback failed:', err);
            });
          }
        }
      }
    };

    // Handle window blur/focus (when user navigates away/back)
    const handleBlur = () => {
      if (audioRef.current && !audioRef.current.paused) {
        wasPlayingRef.current = true;
        audioRef.current.pause();
      }
    };

    const handleFocus = () => {
      if (audioRef.current && wasPlayingRef.current) {
        audioRef.current.play().catch(err => {
          console.log('Resume playback failed:', err);
        });
      }
    };

    // Add event listeners
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);

    return () => {
      clearTimeout(timer);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      // Remove event listeners
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

  const handleOpenInvitation = () => {
    setShowCover(false);
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : showCover ? (
          <motion.div
            key="cover"
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
          >
            <InvitationCover onOpen={handleOpenInvitation} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <ScrollProgress />
            <FloatingParticles />
            
            <Hero />
            <Invitation />
            <Countdown />
            <Location />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
