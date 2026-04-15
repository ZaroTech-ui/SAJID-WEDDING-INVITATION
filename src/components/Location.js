import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiLocationMarker, HiCalendar, HiClock, HiMap } from 'react-icons/hi';

const Location = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const locations = [
    {
      title: "Nikkah Ceremony",
      date: "7th May 2026, Thursday",
      time: "10:30 AM",
      venue: "'A' Convention",
      address: "Amaravathi Road, Opp. Hindu College of Pharmacy, Guntur",
      googleMapsLink: "https://maps.google.com/?q=A+Convention+Amaravathi+Road+Hindu+College+of+Pharmacy+Guntur"
    },
    {
      title: "Reception",
      date: "10th May 2026, Sunday",
      time: "7:30 PM",
      venue: "Vijaya Lakshmi Kalyanamandapam",
      address: "Guntur – Chennai Highway, Martur, Bapatla District",
      googleMapsLink: "https://maps.google.com/?q=Vijaya+Lakshmi+Kalyanamandapam+Martur+Bapatla"
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-ivory relative overflow-hidden">
      <div className="absolute inset-0 islamic-pattern opacity-20" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-playfair text-emerald-950 mb-4">
            Venue Details
          </h2>
          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <p className="text-xl text-emerald-900">We look forward to celebrating with you</p>
        </motion.div>

        <div className="space-y-8">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              className="bg-white bg-opacity-60 backdrop-blur-md rounded-3xl overflow-hidden border-4 border-gold shadow-2xl hover:shadow-gold transition-all duration-300"
            >
              <div className="p-8 md:p-12">
                <h3 className="text-3xl md:text-4xl font-playfair text-gold mb-8 text-center">
                  {location.title}
                </h3>
                
                <div className="space-y-6">
                  {/* Venue Name and Address Combined */}
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <HiLocationMarker className="text-white text-2xl" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-emerald-800 font-bold mb-1 uppercase tracking-widest">Venue</p>
                      {location.venue && (
                        <p className="text-xl md:text-2xl text-gold font-bold leading-relaxed mb-1">{location.venue}</p>
                      )}
                      <p className="text-lg md:text-xl text-emerald-950 font-medium leading-relaxed">{location.address}</p>
                    </div>
                  </div>
                  
                  {/* Date with Calendar Icon */}
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <HiCalendar className="text-white text-2xl" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-emerald-800 font-bold mb-1 uppercase tracking-widest">Date</p>
                      <p className="text-lg md:text-xl text-emerald-950 font-medium">{location.date}</p>
                    </div>
                  </div>
                  
                  {/* Time with Clock Icon */}
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <HiClock className="text-white text-2xl" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-emerald-800 font-bold mb-1 uppercase tracking-widest">Time</p>
                      <p className="text-lg md:text-xl text-emerald-950 font-medium">{location.time}</p>
                    </div>
                  </div>
                </div>

                {/* Google Maps Button */}
                <motion.div
                  className="mt-8"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href={location.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-gradient-to-r from-emerald-950 to-emerald-900 text-gold px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gold"
                  >
                    <HiMap className="mr-3 text-2xl" />
                    Get Directions
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-emerald-900 italic">
            Your presence will make our day more special
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
