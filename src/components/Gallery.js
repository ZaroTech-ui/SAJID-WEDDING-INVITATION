import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState(null);

  // Placeholder images - replace with actual wedding photos
  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800', alt: 'Wedding Photo 1' },
    { id: 2, url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800', alt: 'Wedding Photo 2' },
    { id: 3, url: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800', alt: 'Wedding Photo 3' },
    { id: 4, url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800', alt: 'Wedding Photo 4' },
    { id: 5, url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800', alt: 'Wedding Photo 5' },
    { id: 6, url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800', alt: 'Wedding Photo 6' },
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 relative overflow-hidden">
      <div className="absolute inset-0 islamic-pattern opacity-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-playfair text-gold mb-4">
            Our Memories
          </h2>
          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <p className="text-xl text-ivory">Capturing moments of love and joy</p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="break-inside-avoid"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-2xl border-4 border-gold shadow-2xl cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-gold text-xl font-playfair">View</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Note for adding photos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-ivory text-lg italic">
            More beautiful moments to be captured on our special day
          </p>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 text-gold hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <HiX className="w-10 h-10" />
            </motion.button>
            
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] rounded-2xl border-4 border-gold shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
