import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { config } from '../config';

const Section3AppreciationStory = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [hearts, setHearts] = useState([]);
  const storyText = config.appreciationStory;

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < storyText.length) {
        setDisplayedText(storyText.slice(0, index + 1));

        // Add floating hearts randomly while typing
        if (Math.random() > 0.95) {
          const newHeart = {
            id: Date.now() + Math.random(),
            x: Math.random() * 100,
            y: Math.random() * 100,
          };
          setHearts((prev) => [...prev, newHeart]);

          // Remove heart after animation
          setTimeout(() => {
            setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
          }, 2000);
        }

        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 40);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4 relative">
      {/* Floating heart reactions */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-4xl pointer-events-none"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
          }}
          initial={{ opacity: 0, scale: 0, y: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0], y: -100 }}
          transition={{ duration: 2 }}
        >
          💖
        </motion.div>
      ))}

      <div className="max-w-3xl w-full">
        <motion.div
          className="glassmorphism rounded-3xl p-8 md:p-12 glow"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-2xl md:text-3xl text-white leading-relaxed font-light text-center whitespace-pre-line"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {displayedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="ml-1"
            >
              |
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Decorative hearts */}
        <div className="flex justify-center gap-4 mt-8">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="text-3xl"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            >
              💕
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3AppreciationStory;
