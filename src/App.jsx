import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingHearts from './components/FloatingHearts';
import Section1Landing from './components/Section1Landing';
import Section2PhotoMemory from './components/Section2PhotoMemory';
import Section2_5BeautyAppreciation from './components/Section2_5BeautyAppreciation';
import Section3AppreciationStory from './components/Section3AppreciationStory';
import Section4SpecialQualities from './components/Section4SpecialQualities';
import Section5PlayfulQuestion from './components/Section5PlayfulQuestion';
import Section7SurpriseEnding from './components/Section7SurpriseEnding';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleContinue = () => {
    setShowLanding(false);
    setTimeout(() => setShowContent(true), 500);
  };

  return (
    <div className="relative min-h-screen">
      {/* Floating hearts background - always visible */}
      <FloatingHearts />

      {/* Music Player - shows after landing */}
      {showContent && <MusicPlayer />}

      <AnimatePresence mode="wait">
        {showLanding ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Section1Landing onContinue={handleContinue} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            {/* All sections in scrollable view */}
            <Section2PhotoMemory />
            <Section2_5BeautyAppreciation />
            <Section3AppreciationStory />
            <Section4SpecialQualities />
            <Section5PlayfulQuestion />
            <Section7SurpriseEnding />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
