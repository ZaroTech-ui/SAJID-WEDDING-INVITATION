import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Invitation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} className="py-20 px-4 bg-ivory relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 islamic-pattern opacity-20" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Bismillah Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-4xl md:text-5xl text-gold arabic-text mb-4">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </motion.div>

        {/* Main Invitation Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="glass rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-gold relative overflow-hidden glow-hover"
        >
          {/* Decorative Corners */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-gold rounded-tl-3xl" />
          <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-gold rounded-tr-3xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-gold rounded-bl-3xl" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-gold rounded-br-3xl" />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-playfair text-emerald-950 text-center mb-8">
              Wedding Invitation
            </h2>

            {/* Bride & Groom Details */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Groom */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-center"
              >
                <div className="mb-4">
                  <svg className="w-16 h-16 mx-auto text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-playfair text-emerald-950 mb-2">Sajid M.S.</h3>
                <p className="text-lg text-emerald-900">Software Engineer</p>
                <p className="text-md text-emerald-800">Meta, California, USA</p>
              </motion.div>

              {/* Bride */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-center"
              >
                <div className="mb-4">
                  <svg className="w-16 h-16 mx-auto text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-playfair text-emerald-950 mb-2">Raziya B.B.A.</h3>
                <p className="text-lg text-emerald-900">Fashion Designing</p>
                <p className="text-md text-emerald-800 opacity-0">-</p>
              </motion.div>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center mb-12">
              <div className="h-px bg-gold flex-1 max-w-xs" />
              <svg className="w-8 h-8 mx-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <div className="h-px bg-gold flex-1 max-w-xs" />
            </div>

            {/* Wedding Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-6"
            >
              {/* Nikkah */}
              <div className="bg-white bg-opacity-50 rounded-2xl p-6 border border-gold">
                <h4 className="text-2xl font-playfair text-gold mb-4 text-center">Nikkah Ceremony</h4>
                <div className="space-y-2 text-center">
                  <p className="text-xl text-emerald-950 font-semibold">Thursday, 7th May 2026</p>
                  <p className="text-lg text-emerald-900">10:30 AM</p>
                  <div className="mt-4">
                    <p className="text-lg text-gold font-bold">'A' Convention</p>
                    <p className="text-md text-emerald-800 mt-2">
                      Amaravathi Road<br />
                      Opp. Hindu College of Pharmacy<br />
                      Guntur, Andhra Pradesh
                    </p>
                  </div>
                </div>
              </div>

              {/* Reception */}
              <div className="bg-white bg-opacity-50 rounded-2xl p-6 border border-gold">
                <h4 className="text-2xl font-playfair text-gold mb-4 text-center">Reception</h4>
                <div className="space-y-2 text-center">
                  <p className="text-xl text-emerald-950 font-semibold">Sunday, 10th May 2026</p>
                  <p className="text-lg text-emerald-900">7:30 PM</p>
                  <div className="mt-4">
                    <p className="text-lg text-gold font-bold">Vijaya Lakshmi Kalyanamandapam</p>
                    <p className="text-md text-emerald-800 mt-2">
                      Guntur – Chennai Highway<br />
                      Martur, Bapatla District<br />
                      Andhra Pradesh
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-12 text-center"
            >
              <p className="text-lg italic text-emerald-900">
                "And among His signs is that He created for you mates from among yourselves,<br />
                that you may dwell in tranquility with them, and He has put love and mercy between your hearts."
              </p>
              <p className="text-md text-gold mt-2">- Quran 30:21</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Invitation;
