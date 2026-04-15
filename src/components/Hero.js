import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'In the Name of Allah, The Most Gracious, The Most Merciful';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950" />
      
      {/* Mosque Silhouette */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute bottom-0 left-0 right-0 h-1/2"
      >
        <svg viewBox="0 0 1200 400" className="w-full h-full" fill="currentColor" opacity="0.3">
          <path d="M600 50 L620 100 L650 100 L625 120 L635 150 L600 130 L565 150 L575 120 L550 100 L580 100 Z" className="text-gold" />
          <ellipse cx="600" cy="150" rx="80" ry="100" className="text-gold opacity-50" />
          <rect x="560" y="150" width="80" height="250" className="text-emerald-950" />
          <circle cx="520" cy="200" r="30" className="text-gold opacity-50" />
          <circle cx="680" cy="200" r="30" className="text-gold opacity-50" />
          <rect x="490" y="200" width="20" height="200" className="text-emerald-950" />
          <rect x="690" y="200" width="20" height="200" className="text-emerald-950" />
        </svg>
      </motion.div>

      {/* Floating Lanterns */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-10 bg-gold opacity-20 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Crescent Moon */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-20 right-20"
      >
        <svg width="80" height="80" viewBox="0 0 100 100" className="text-gold">
          <path
            d="M50 10 A 30 30 0 1 0 50 90 A 25 25 0 1 1 50 10"
            fill="currentColor"
          />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <p className="text-gold text-xl md:text-2xl mb-4 arabic-text">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
          <p className="text-ivory text-lg md:text-xl font-light min-h-[60px]">
            {text}
            <span className="animate-pulse">|</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Mobile Layout - Stacked */}
          <div className="block md:hidden">
            <h1 className="text-6xl font-playfair text-gold mb-3 tracking-wide">
              Sajid
            </h1>
            <div className="text-5xl mb-3">❤️</div>
            <h1 className="text-6xl font-playfair text-gold mb-4 tracking-wide">
              Raziya
            </h1>
          </div>
          
          {/* Desktop Layout - Inline */}
          <h1 className="hidden md:block text-8xl font-playfair text-gold mb-4 tracking-wide">
            Sajid <span className="text-7xl">❤️</span> Raziya
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <p className="text-ivory text-2xl md:text-3xl font-light">
            Together in Faith, United in Love
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-12"
        >
          <p className="text-gold text-lg mb-2">7th May 2026</p>
          <p className="text-ivory text-sm">Guntur, Andhra Pradesh</p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <HiChevronDown className="text-gold text-4xl" />
        </motion.div>
      </motion.div>

      {/* Islamic Pattern Overlay */}
      <div className="absolute inset-0 islamic-pattern opacity-30" />
    </section>
  );
};

export default Hero;
