import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { config } from '../config';

const Section1Landing = ({ onContinue }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showButton, setShowButton] = useState(false);
  const mainText = config.landing.mainText;

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < mainText.length) {
        setDisplayedText(mainText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowButton(true), 500);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundSize: '200% 200%',
        }}
      />

      {/* Sparkles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-cursive text-white mb-6 glow-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {displayedText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            |
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-white/90 mb-12 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: showButton ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {config.landing.subText}
        </motion.p>

        {showButton && (
          <motion.button
            onClick={onContinue}
            className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg shadow-2xl hover:scale-110 transition-transform glow"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {config.landing.buttonText} ✨
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default Section1Landing;
