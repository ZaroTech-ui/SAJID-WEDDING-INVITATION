import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          {/* Enhanced 3D-style Crescent Moon SVG */}
          <svg className="w-28 h-28 mx-auto" viewBox="0 0 120 120" fill="none">
            {/* Shadow/3D effect */}
            <path 
              d="M60 15 A 35 35 0 1 0 60 105 A 30 30 0 1 1 60 15" 
              fill="#B8860B" 
              opacity="0.3"
              transform="translate(3, 3)"
            />
            {/* Main crescent */}
            <path 
              d="M60 15 A 35 35 0 1 0 60 105 A 30 30 0 1 1 60 15" 
              fill="url(#goldGradient)"
            />
            {/* Highlight */}
            <path 
              d="M60 20 A 32 32 0 1 0 60 100 A 28 28 0 1 1 60 20" 
              fill="url(#highlightGradient)"
              opacity="0.4"
            />
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="50%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#B8860B" />
              </linearGradient>
              <linearGradient id="highlightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#FFD700" opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-playfair text-gold mb-4"
        >
          Sajid ❤️ Raziya
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex space-x-2 justify-center"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-gold rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
