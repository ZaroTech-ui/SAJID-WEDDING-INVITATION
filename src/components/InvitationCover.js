import React from 'react';
import { motion } from 'framer-motion';

const InvitationCover = ({ onOpen }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 islamic-pattern opacity-10" />
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 border-4 border-gold opacity-20 rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 border-4 border-gold opacity-20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Crescent Moon */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-10 right-10"
      >
        <svg width="100" height="100" viewBox="0 0 100 100" className="text-gold">
          <path
            d="M50 10 A 30 30 0 1 0 50 90 A 25 25 0 1 1 50 10"
            fill="currentColor"
          />
        </svg>
      </motion.div>

      {/* Main Invitation Card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-2xl w-full mx-4"
      >
        {/* Card Container */}
        <div className="relative bg-ivory rounded-3xl shadow-2xl overflow-hidden border-8 border-gold">
          {/* Decorative Corners */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t-8 border-l-8 border-gold opacity-50" />
          <div className="absolute top-0 right-0 w-32 h-32 border-t-8 border-r-8 border-gold opacity-50" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-b-8 border-l-8 border-gold opacity-50" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-8 border-r-8 border-gold opacity-50" />

          {/* Card Content */}
          <div className="relative z-10 p-12 md:p-16 text-center">
            {/* Bismillah */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-8"
            >
              <p className="text-3xl md:text-4xl text-gold arabic-text mb-3">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
            </motion.div>

            {/* Wedding Invitation Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mb-8"
            >
              <p className="text-xl md:text-2xl text-emerald-900 font-light mb-4">
                You are cordially invited to the wedding of
              </p>
            </motion.div>

            {/* Couple Names */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="mb-8"
            >
              {/* Mobile Layout - Stacked */}
              <div className="block md:hidden">
                <h1 className="text-5xl font-playfair text-emerald-950 mb-4">
                  Sajid
                </h1>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl text-gold">❤️</span>
                </div>
                <h1 className="text-5xl font-playfair text-emerald-950">
                  Raziya
                </h1>
              </div>
              
              {/* Desktop Layout - With Dividers */}
              <div className="hidden md:block">
                <h1 className="text-7xl font-playfair text-emerald-950 mb-4">
                  Sajid
                </h1>
                <div className="flex items-center justify-center mb-4">
                  <div className="w-20 h-px bg-gold" />
                  <span className="text-5xl text-gold mx-4">❤️</span>
                  <div className="w-20 h-px bg-gold" />
                </div>
                <h1 className="text-7xl font-playfair text-emerald-950">
                  Raziya
                </h1>
              </div>
            </motion.div>

            {/* Date */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="mb-10"
            >
              <p className="text-xl md:text-2xl text-gold font-semibold mb-2">
                7th May 2026
              </p>
              <p className="text-lg text-emerald-800">
                Thursday at 10:30 AM
              </p>
            </motion.div>

            {/* Open Invitation Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpen}
              className="bg-gradient-to-r from-emerald-950 to-emerald-900 text-gold px-12 py-5 rounded-full text-xl md:text-2xl font-semibold shadow-2xl hover:shadow-gold transition-all duration-300 border-2 border-gold"
            >
              Open Invitation
            </motion.button>

            {/* Decorative Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="mt-8"
            >
              <p className="text-sm text-emerald-700 italic">
                Click to view full invitation
              </p>
            </motion.div>
          </div>

          {/* Islamic Pattern Overlay */}
          <div className="absolute inset-0 islamic-pattern opacity-5 pointer-events-none" />
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gold opacity-20 blur-3xl -z-10 animate-pulse" />
      </motion.div>

      {/* Bottom Decorative Crescent Moons */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-6">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 0.6, scale: 1, rotate: 0 }}
            transition={{ delay: 2 + i * 0.2, duration: 0.6, type: "spring" }}
          >
            <svg className="w-8 h-8" viewBox="0 0 120 120" fill="none">
              <path 
                d="M60 15 A 35 35 0 1 0 60 105 A 30 30 0 1 1 60 15" 
                fill="url(#goldGradientCover)"
              />
              <defs>
                <linearGradient id="goldGradientCover" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFD700" />
                  <stop offset="50%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#B8860B" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InvitationCover;
