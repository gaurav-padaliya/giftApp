import { motion } from 'framer-motion';
import { config } from '../config';

const Section4SpecialQualities = () => {
  const qualities = config.specialQualities;

  return (
    <div className="min-h-screen py-20 px-4">
      <motion.h2
        className="text-4xl md:text-5xl font-cursive text-white text-center mb-16 glow-text"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Why You're So Special 💫
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {qualities.map((quality, index) => (
          <motion.div
            key={index}
            className="glassmorphism rounded-2xl p-6 text-center cursor-pointer group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px rgba(255, 107, 157, 0.6)',
            }}
          >
            <motion.div
              className="text-6xl mb-4"
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            >
              {quality.emoji}
            </motion.div>

            <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-gradient transition-colors">
              {quality.title}
            </h3>

            <p className="text-white/80 text-lg font-light">
              {quality.description}
            </p>

            {/* Sparkle effect on hover */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                  style={{
                    left: `${20 + (i % 3) * 30}%`,
                    top: `${20 + Math.floor(i / 3) * 60}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1,
                    delay: i * 0.1,
                    repeat: Infinity,
                  }}
                >
                  ✨
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Section4SpecialQualities;
