import { motion } from 'framer-motion';
import { config } from '../config';

const Section7SurpriseEnding = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: i * 0.1,
              repeat: Infinity,
            }}
          >
            {i % 3 === 0 ? '💖' : i % 3 === 1 ? '✨' : '🌟'}
          </motion.div>
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              left: `${20 + (i % 3) * 30}%`,
              top: `${20 + Math.floor(i / 3) * 30}%`,
              width: '150px',
              height: '150px',
              background: i % 2 === 0
                ? 'radial-gradient(circle, rgba(255,107,157,0.3) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(167,139,250,0.3) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <motion.div
          className="glassmorphism rounded-3xl p-8 md:p-16 text-center glow"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Crown/Trophy animation */}
          <motion.div
            className="text-8xl md:text-9xl mb-8"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            👑
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-cursive text-white leading-relaxed glow-text whitespace-pre-line"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {config.ending.message}
          </motion.h2>

          {/* Decorative hearts */}
          <div className="flex justify-center gap-6 mt-12">
            {['💗', '💖', '💕', '💓', '💝'].map((heart, i) => (
              <motion.div
                key={i}
                className="text-4xl"
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              >
                {heart}
              </motion.div>
            ))}
          </div>

          {/* Women's Day Message */}
          {config.ending.womensDay && (
            <motion.div
              className="mt-10 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.p
                className="text-3xl md:text-4xl font-cursive text-white glow-text"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                {config.ending.womensDay}
              </motion.p>
            </motion.div>
          )}

          {/* Signature */}
          <motion.p
            className="text-xl md:text-2xl text-white/80 mt-8 font-cursive"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Always and forever,
            <br />
            <span className="text-gradient text-2xl md:text-3xl">
              The person who loves you most ❤️
            </span>
          </motion.p>
        </motion.div>

        {/* Bottom sparkles */}
        <div className="flex justify-center gap-8 mt-8">
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              className="text-3xl"
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
        </div>
      </div>
    </div>
  );
};

export default Section7SurpriseEnding;
