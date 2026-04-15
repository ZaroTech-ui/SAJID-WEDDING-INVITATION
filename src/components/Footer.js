import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiPhone, HiHeart, HiMail } from 'react-icons/hi';
import { FaWhatsapp, FaCode } from 'react-icons/fa';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer ref={ref} className="relative py-16 px-4 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 islamic-pattern opacity-10" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Decorative Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center">
            <div className="h-px bg-gold flex-1 max-w-xs" />
            {/* Enhanced Crescent Moon */}
            <svg className="w-12 h-12 mx-4" viewBox="0 0 120 120" fill="none">
              <path 
                d="M60 15 A 35 35 0 1 0 60 105 A 30 30 0 1 1 60 15" 
                fill="url(#goldGradientFooter)"
              />
              <defs>
                <linearGradient id="goldGradientFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFD700" />
                  <stop offset="50%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#B8860B" />
                </linearGradient>
              </defs>
            </svg>
            <div className="h-px bg-gold flex-1 max-w-xs" />
          </div>
        </motion.div>

        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-playfair text-gold mb-6">
            Your Presence is Our Greatest Gift
          </h3>
          <p className="text-xl text-ivory leading-relaxed max-w-2xl mx-auto">
            We request your presence and blessings on this auspicious occasion as we embark on our journey of love, faith, and togetherness.
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {/* Groom's Family */}
          <div className="glass rounded-2xl p-6 border border-gold text-center">
            <h4 className="text-xl font-playfair text-gold mb-4">Groom's Family</h4>
            <div className="space-y-3 text-ivory">
              <p className="text-lg font-semibold">Mr. Shaik Kabir Basha</p>
              <p className="text-lg font-semibold">Mrs. Nurjahan</p>
            </div>
          </div>

          {/* Bride's Family */}
          <div className="glass rounded-2xl p-6 border border-gold text-center">
            <h4 className="text-xl font-playfair text-gold mb-4">Bride's Family</h4>
            <div className="space-y-3 text-ivory">
              <p className="text-lg font-semibold">Mr. K. Peer Muhammad</p>
              <p className="text-lg font-semibold">Mrs. K. Nurjahan</p>
            </div>
          </div>
        </motion.div>

        {/* Islamic Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mb-8"
        >
          <p className="text-2xl text-gold arabic-text mb-3">
            ما شاء الله
          </p>
          <p className="text-lg text-ivory italic">
            "What Allah wills, will be"
          </p>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center border-t border-gold pt-8 mb-8"
        >
          <div className="flex items-center justify-center mb-4">
            <HiHeart className="text-gold text-2xl animate-pulse" />
          </div>
          <p className="text-ivory text-lg mb-2">
            Sajid & Raziya
          </p>
          <p className="text-gold text-sm">
            7th May 2026
          </p>
          <p className="text-ivory text-xs mt-6 opacity-70">
            With love and blessings from both families
          </p>
        </motion.div>

        {/* Developer Section - Zaro Tech */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="border-t border-gold pt-8"
        >
          {/* Zaro Tech Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-center mb-6"
          >
            <div className="flex items-center justify-center mb-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <FaCode className="text-gold text-3xl" />
              </motion.div>
            </div>
            <h4 className="text-2xl font-playfair text-gold mb-2">
              Website Developed by
            </h4>
            <motion.p
              className="text-3xl font-bold text-ivory mb-3"
              whileHover={{ scale: 1.05, color: "#D4AF37" }}
              transition={{ duration: 0.3 }}
            >
              Zaro Tech
            </motion.p>
            <motion.a
              href="mailto:contactzarotech@gmail.com"
              className="inline-flex items-center text-ivory hover:text-gold transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiMail className="mr-2 text-xl" />
              <span className="text-lg">contactzarotech@gmail.com</span>
            </motion.a>
          </motion.div>

          {/* Developers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto"
          >
            {/* Developer 1 - Siddhartha */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-5 border-2 border-gold text-center"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.6, duration: 0.6 }}
              >
                <p className="text-lg font-semibold text-gold mb-2">Developer</p>
                <p className="text-xl text-ivory font-bold mb-3">SIDDHARTHA</p>
                <motion.a
                  href="https://wa.me/917997793530"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaWhatsapp className="mr-2 text-2xl" />
                  <span className="font-semibold">7997793530</span>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Developer 2 - Anil */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-5 border-2 border-gold text-center"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.8, duration: 0.6 }}
              >
                <p className="text-lg font-semibold text-gold mb-2">Developer</p>
                <p className="text-xl text-ivory font-bold mb-3">ANIL</p>
                <motion.a
                  href="https://wa.me/917675957378"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaWhatsapp className="mr-2 text-2xl" />
                  <span className="font-semibold">7675957378</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 2, duration: 0.8 }}
            className="text-center mt-6"
          >
            <p className="text-sm text-ivory opacity-70">
              © 2026 Zaro Tech. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
