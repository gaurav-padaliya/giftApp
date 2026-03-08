import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { config } from '../config';

const Section2_5BeautyAppreciation = () => {
  const [showLines, setShowLines] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noAttempts, setNoAttempts] = useState(0);

  const beautyLines = config.beautyLines || [
    "Your eyes hold galaxies I could get lost in forever",
    "Your smile is the most beautiful thing I've ever seen",
    "The way you laugh makes my heart skip a beat",
    "Your presence lights up every room you enter",
    "Everything about you is absolutely perfect"
  ];

  const handleContinueClick = () => {
    setShowLines(true);
    // Show lines one by one
    let lineIndex = 0;
    const interval = setInterval(() => {
      if (lineIndex < beautyLines.length) {
        setCurrentLine(lineIndex);
        lineIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowQuestion(true), 1000);
      }
    }, 2000);
  };

  const handleNoHover = () => {
    // Move the NO button to a random position
    const maxX = 300;
    const maxY = 200;
    const randomX = (Math.random() - 0.5) * maxX;
    const randomY = (Math.random() - 0.5) * maxY;

    setNoButtonPosition({ x: randomX, y: randomY });
    setNoAttempts((prev) => prev + 1);
  };

  const handleYesClick = () => {
    setShowThanks(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4 relative">
      <div className="max-w-4xl w-full text-center">
        <AnimatePresence mode="wait">
          {/* Initial Continue Button */}
          {!showLines && !showThanks && (
            <motion.div
              key="initial"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="text-5xl md:text-6xl mb-8"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                💖
              </motion.div>

              <motion.button
                onClick={handleContinueClick}
                className="px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-bold text-lg md:text-xl shadow-2xl glow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Continue ✨
              </motion.button>
            </motion.div>
          )}

          {/* Beauty Lines Appearing */}
          {showLines && !showQuestion && !showThanks && (
            <motion.div
              key="lines"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              {beautyLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{
                    opacity: index <= currentLine ? 1 : 0,
                    x: index <= currentLine ? 0 : -50,
                  }}
                  transition={{ duration: 0.8 }}
                >
                  {index <= currentLine && (
                    <div className="glassmorphism rounded-2xl p-4 md:p-6 glow">
                      <motion.p
                        className="text-lg md:text-2xl lg:text-3xl text-white font-light"
                        animate={{
                          opacity: [0.8, 1, 0.8],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      >
                        {line}
                      </motion.p>

                      {/* Sparkle effects */}
                      <div className="flex justify-center gap-3 mt-4">
                        {[...Array(3)].map((_, i) => (
                          <motion.span
                            key={i}
                            className="text-2xl"
                            animate={{
                              opacity: [0, 1, 0],
                              scale: [0, 1.5, 0],
                              rotate: [0, 180, 360],
                            }}
                            transition={{
                              duration: 2,
                              delay: i * 0.3,
                              repeat: Infinity,
                            }}
                          >
                            ✨
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Question: Do you love all these? */}
          {showQuestion && !showThanks && (
            <motion.div
              key="question"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h2
                className="text-2xl md:text-4xl lg:text-6xl font-cursive text-white mb-8 md:mb-12 glow-text px-4"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                Do you love all these? 💕
              </motion.h2>

              <div className="flex flex-col md:flex-row gap-6 justify-center items-center relative px-4">
                {/* YES button */}
                <motion.button
                  onClick={handleYesClick}
                  className="px-8 py-4 md:px-12 md:py-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-bold text-xl md:text-2xl shadow-2xl glow"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  YES ❤️
                </motion.button>

                {/* NO button (runs away) */}
                <motion.button
                  onMouseEnter={handleNoHover}
                  onTouchStart={handleNoHover}
                  className="px-6 py-3 md:px-10 md:py-5 bg-gray-500 text-white rounded-full font-semibold text-lg md:text-xl"
                  animate={{
                    x: noButtonPosition.x,
                    y: noButtonPosition.y,
                    scale: Math.max(0.4, 1 - noAttempts * 0.08),
                    opacity: Math.max(0.4, 1 - noAttempts * 0.08),
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  NO 🙈
                </motion.button>
              </div>

              {noAttempts > 2 && (
                <motion.p
                  className="text-white text-lg md:text-xl mt-8 font-light px-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Come on, you know you love them... 😊💕
                </motion.p>
              )}
            </motion.div>
          )}

          {/* Thanks Love message */}
          {showThanks && (
            <motion.div
              key="thanks"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="glassmorphism rounded-3xl p-12"
            >
              {/* Heart rain effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-3xl"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: '-50px',
                    }}
                    animate={{
                      y: [0, 800],
                      rotate: [0, 360],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      delay: i * 0.1,
                      ease: 'linear',
                    }}
                  >
                    💖
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="text-8xl mb-6"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                😍
              </motion.div>

              <h2 className="text-5xl md:text-7xl font-cursive text-white glow-text mb-4">
                Thanks Love! 💕
              </h2>

              <motion.p
                className="text-2xl text-white/90 font-light mt-6"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                You make my heart so happy! ✨
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Section2_5BeautyAppreciation;
