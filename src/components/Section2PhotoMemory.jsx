import { motion } from 'framer-motion';
import { useState } from 'react';
import { config } from '../config';

const Section2PhotoMemory = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const photos = config.photos;

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-4xl w-full">
        <motion.h2
          className="text-4xl md:text-5xl font-cursive text-white text-center mb-12 glow-text"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Every Moment With You ✨
        </motion.h2>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Sparkles around photo */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-yellow-300 rounded-full"
              style={{
                left: `${10 + (i % 4) * 25}%`,
                top: `${10 + Math.floor(i / 4) * 35}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            >
              ✨
            </motion.div>
          ))}

          {/* Photo frame */}
          <div className="relative glassmorphism rounded-3xl p-4 md:p-8 glow">
            <motion.div
              className="relative overflow-hidden rounded-2xl"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <motion.img
                key={currentPhoto}
                src={photos[currentPhoto]}
                alt="Beautiful memory"
                className="w-full h-96 md:h-[500px] object-cover rounded-2xl"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            {/* Navigation arrows */}
            {photos.length > 1 && (
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <motion.button
                  onClick={prevPhoto}
                  className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ←
                </motion.button>
                <motion.button
                  onClick={nextPhoto}
                  className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  →
                </motion.button>
              </div>
            )}

            {/* Photo indicators */}
            {photos.length > 1 && (
              <div className="flex justify-center gap-2 mt-6">
                {photos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPhoto(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentPhoto
                        ? 'bg-white w-8'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section2PhotoMemory;
