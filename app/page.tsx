"use client";

import React, { useState, useEffect } from "react";
import { Language } from "@/config/translations";
import { IntroAnimation } from "@/components/IntroAnimation";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Invitation } from "@/components/Invitation";
import { WeddingEvent } from "@/components/WeddingEvent";
import { Venue } from "@/components/Venue";
import { Countdown } from "@/components/Countdown";
import { Footer } from "@/components/Footer";
import { AudioPlayer } from "@/components/AudioPlayer";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [lang, setLang] = useState<Language>("gu");
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  // Sync lang attribute on html tag
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const handleStartAudio = () => {
    setIsPlayingMusic(true);
  };

  const handleToggleMusic = () => {
    setIsPlayingMusic((prev) => !prev);
  };

  return (
    <main className="relative min-h-screen bg-[#F5EFE3] overflow-x-hidden">
      {/* Cinematic Fullscreen Opening Sequence */}
      <AnimatePresence>
        {showIntro && (
          <IntroAnimation
            key="intro-animation"
            onComplete={() => setShowIntro(false)}
            lang={lang}
            onLanguageChange={setLang}
            onStartAudio={handleStartAudio}
          />
        )}
      </AnimatePresence>

      {/* Main Website Structure */}
      <Navigation
        lang={lang}
        onLanguageChange={setLang}
        isPlayingMusic={isPlayingMusic}
        onToggleMusic={handleToggleMusic}
      />

      {/* Section 01: Hero */}
      <Hero lang={lang} />

      {/* Section 02: Shubh Lagna */}
      <Invitation lang={lang} />

      {/* Section 03: Wedding Celebration */}
      <WeddingEvent lang={lang} />

      {/* Section 04: Venue */}
      <Venue lang={lang} />

      {/* Section 05: Countdown */}
      <Countdown lang={lang} />

      {/* Section 06: Closing & Footer */}
      <Footer lang={lang} />

      {/* Ambient Wedding Audio Engine */}
      <AudioPlayer
        isPlaying={isPlayingMusic}
        onToggle={handleToggleMusic}
        lang={lang}
      />
    </main>
  );
}
