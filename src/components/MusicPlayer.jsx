import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Howl } from 'howler';
import { config } from '../config';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const soundRef = useRef(null);

  useEffect(() => {
    // Initialize first song
    if (config.music.length > 0) {
      soundRef.current = new Howl({
        src: [config.music[currentSong].url],
        html5: true,
        loop: config.music.length === 1, // Loop if only one song
        volume: 0.5,
        onend: () => {
          // Play next song when current ends (if multiple songs)
          if (config.music.length > 1) {
            const nextIndex = (currentSong + 1) % config.music.length;
            setCurrentSong(nextIndex);
          }
        },
        onload: () => {
          // Autoplay when loaded
          soundRef.current.play();
          setIsPlaying(true);
        },
      });
    }

    return () => {
      if (soundRef.current) {
        soundRef.current.unload();
      }
    };
  }, [currentSong]);

  const togglePlay = () => {
    if (!soundRef.current) return;

    if (isPlaying) {
      soundRef.current.pause();
    } else {
      soundRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    if (soundRef.current) {
      soundRef.current.stop();
    }
    setCurrentSong((prev) => (prev + 1) % config.music.length);
    setIsPlaying(false);
  };

  const prevSong = () => {
    if (soundRef.current) {
      soundRef.current.stop();
    }
    setCurrentSong((prev) => (prev - 1 + config.music.length) % config.music.length);
    setIsPlaying(false);
  };

  if (!config.music || config.music.length === 0) {
    return null;
  }

  return (
    <motion.div
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 glassmorphism rounded-2xl p-3 md:p-4 shadow-2xl glow z-50"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
    >
      <div className="flex items-center gap-2 md:gap-3">
        {/* Music icon animation */}
        <motion.div
          className="text-2xl md:text-3xl"
          animate={{
            rotate: isPlaying ? [0, 10, -10, 0] : 0,
          }}
          transition={{
            duration: 0.5,
            repeat: isPlaying ? Infinity : 0,
          }}
        >
          🎵
        </motion.div>

        <div className="flex flex-col">
          <span className="text-white text-xs md:text-sm font-semibold max-w-[120px] md:max-w-none truncate">
            {config.music[currentSong]?.name || 'Music'}
          </span>
          <div className="flex items-center gap-1 md:gap-2 mt-1">
            {config.music.length > 1 && (
              <motion.button
                onClick={prevSong}
                className="text-white/80 hover:text-white text-lg"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                ⏮
              </motion.button>
            )}

            <motion.button
              onClick={togglePlay}
              className="bg-white/20 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-white hover:bg-white/30 transition-colors text-sm md:text-base"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isPlaying ? '⏸' : '▶️'}
            </motion.button>

            {config.music.length > 1 && (
              <motion.button
                onClick={nextSong}
                className="text-white/80 hover:text-white text-lg"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                ⏭
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MusicPlayer;
