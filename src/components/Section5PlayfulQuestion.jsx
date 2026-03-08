import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Confetti from 'react-confetti';
import { config } from '../config';

const Section5PlayfulQuestion = () => {
  const [showSetup, setShowSetup] = useState(true);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noButtonAttempts, setNoButtonAttempts] = useState(0);
  const [yesButtonCount, setYesButtonCount] = useState(1);

  const handleSetupClick = () => {
    setShowSetup(false);
    setTimeout(() => setShowQuestion(true), 500);
  };

  const handleYesClick = () => {
    setShowConfetti(true);
  };

  const handleNoHover = () => {
    // Move the NO button to a random position
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 100;
    const randomX = Math.random() * maxX - maxX / 2;
    const randomY = Math.random() * maxY - maxY / 2;

    setNoButtonPosition({ x: randomX, y: randomY });
    setNoButtonAttempts((prev) => prev + 1);

    // After 3 attempts, start multiplying YES buttons
    if (noButtonAttempts >= 2) {
      setYesButtonCount((prev) => Math.min(prev + 1, 5));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={500}
          gravity={0.3}
        />
      )}

      {/* Raining hearts when YES is clicked */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-50px',
              }}
              animate={{
                y: [0, window.innerHeight + 50],
                rotate: [0, 360],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: i * 0.1,
                ease: 'linear',
              }}
            >
              ❤️
            </motion.div>
          ))}
        </div>
      )}

      <div className="max-w-3xl w-full text-center">
        <AnimatePresence mode="wait">
          {/* Setup question */}
          {showSetup && (
            <motion.div
              key="setup"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h2
                className="text-4xl md:text-5xl font-cursive text-white mb-8 glow-text"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                {config.question.setup}
              </motion.h2>

              <motion.button
                onClick={handleSetupClick}
                className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-xl shadow-2xl glow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Yes, ask me! 💭
              </motion.button>
            </motion.div>
          )}

          {/* Main question */}
          {showQuestion && !showConfetti && (
            <motion.div
              key="question"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h2
                className="text-5xl md:text-7xl font-cursive text-white mb-12 glow-text"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                {config.question.mainQuestion}
              </motion.h2>

              <div className="flex flex-col md:flex-row gap-6 justify-center items-center relative">
                {/* YES buttons (can multiply) */}
                <div className="flex flex-wrap gap-4 justify-center">
                  {[...Array(yesButtonCount)].map((_, i) => (
                    <motion.button
                      key={i}
                      onClick={handleYesClick}
                      className="px-12 py-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-bold text-2xl shadow-2xl glow"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      YES ❤️
                    </motion.button>
                  ))}
                </div>

                {/* NO button (runs away) */}
                <motion.button
                  onMouseEnter={handleNoHover}
                  onTouchStart={handleNoHover}
                  className="px-8 py-4 bg-gray-500 text-white rounded-full font-semibold text-xl"
                  animate={{
                    x: noButtonPosition.x,
                    y: noButtonPosition.y,
                    scale: Math.max(0.3, 1 - noButtonAttempts * 0.1),
                    opacity: Math.max(0.3, 1 - noButtonAttempts * 0.1),
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {config.question.noButtonTexts[
                    Math.min(noButtonAttempts, config.question.noButtonTexts.length - 1)
                  ]}
                </motion.button>
              </div>

              {noButtonAttempts > 2 && (
                <motion.p
                  className="text-white text-xl mt-8 font-light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  You know you want to click YES... 💕
                </motion.p>
              )}
            </motion.div>
          )}

          {/* Success message */}
          {showConfetti && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="glassmorphism rounded-3xl p-12"
            >
              <motion.div
                className="text-8xl mb-6"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              >
                🥰
              </motion.div>

              <h2 className="text-4xl md:text-6xl font-cursive text-white glow-text mb-4">
                {config.question.yesResponse}
              </h2>

              <motion.p
                className="text-2xl text-white/90 font-light"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                I love you so much! 💖✨
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Section5PlayfulQuestion;
