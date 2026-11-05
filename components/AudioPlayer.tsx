"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

interface AudioPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
  lang?: "gu" | "en";
}

/**
 * Traditional Indian Wedding Audio Engine
 * Supports local audio file (/music/wedding-shehnai.mp3) with an acoustic
 * Web Audio API Tanpura & Shehnai harmonic drone synthesizer fallback.
 */
export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  isPlaying,
  onToggle,
  lang = "gu",
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const synthNodesRef = useRef<{
    gainNode: GainNode | null;
    oscillators: OscillatorNode[];
    intervalId: NodeJS.Timeout | null;
  }>({
    gainNode: null,
    oscillators: [],
    intervalId: null,
  });

  const [hasCustomFile, setHasCustomFile] = useState<boolean>(false);
  const [isSynthActive, setIsSynthActive] = useState<boolean>(false);

  // Initialize Web Audio Synth for serene Indian wedding ambiance (Raga Bilawal / Yaman notes)
  const startIndianWeddingSynth = useCallback(() => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      // Master gain node
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 3);
      masterGain.connect(ctx.destination);
      synthNodesRef.current.gainNode = masterGain;

      // Base Tanpura Drone (Sa - Pa - Sa' in D / 146.83 Hz)
      const baseFreq = 146.83; // D3
      const droneFreqs = [baseFreq, baseFreq * 1.4983, baseFreq * 2]; // Sa, Pa, high Sa

      const oscs: OscillatorNode[] = [];
      droneFreqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        osc.type = idx === 0 ? "sawtooth" : "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Lowpass filter for warm acoustic timbre
        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(380 + idx * 80, ctx.currentTime);

        oscGain.gain.setValueAtTime(0.06 / (idx + 1), ctx.currentTime);

        osc.connect(filter);
        filter.connect(oscGain);
        oscGain.connect(masterGain);
        osc.start();
        oscs.push(osc);
      });

      // Shehnai / Santoor Melodic Phrase Generator (Sa, Re, Ga, Ma, Pa, Dha, Ni)
      // Traditional Gujarati Wedding Auspicious Scale
      const scaleNotes = [
        baseFreq * 2,       // Sa (293.66)
        baseFreq * 2 * 1.122, // Re
        baseFreq * 2 * 1.26,  // Ga
        baseFreq * 2 * 1.414, // Ma
        baseFreq * 2 * 1.498, // Pa
        baseFreq * 2 * 1.68,  // Dha
        baseFreq * 2 * 1.88,  // Ni
        baseFreq * 4,       // High Sa
      ];

      let noteIndex = 0;
      const melodyInterval = setInterval(() => {
        if (!audioCtxRef.current || audioCtxRef.current.state !== "running") return;
        const now = audioCtxRef.current.currentTime;

        const melodyOsc = audioCtxRef.current.createOscillator();
        const melodyGain = audioCtxRef.current.createGain();
        const bandpass = audioCtxRef.current.createBiquadFilter();

        // Santoor/Flute bell-like tone
        melodyOsc.type = "triangle";
        const chosenFreq = scaleNotes[noteIndex % scaleNotes.length];
        noteIndex = (noteIndex + (Math.random() > 0.4 ? 1 : 2)) % scaleNotes.length;

        melodyOsc.frequency.setValueAtTime(chosenFreq, now);

        // Gentle portamento / meend
        melodyOsc.frequency.exponentialRampToValueAtTime(
          chosenFreq * (Math.random() > 0.6 ? 1.05 : 0.98),
          now + 1.2
        );

        bandpass.type = "bandpass";
        bandpass.frequency.setValueAtTime(chosenFreq * 1.2, now);
        bandpass.Q.setValueAtTime(3, now);

        melodyGain.gain.setValueAtTime(0.001, now);
        melodyGain.gain.linearRampToValueAtTime(0.05, now + 0.3);
        melodyGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);

        melodyOsc.connect(bandpass);
        bandpass.connect(melodyGain);
        if (synthNodesRef.current.gainNode) {
          melodyGain.connect(synthNodesRef.current.gainNode);
        }

        melodyOsc.start(now);
        melodyOsc.stop(now + 2.3);
      }, 1400);

      synthNodesRef.current.oscillators = oscs;
      synthNodesRef.current.intervalId = melodyInterval;
      setIsSynthActive(true);
    } catch {
      // AudioContext not allowed or unsupported
    }
  }, []);

  const stopIndianWeddingSynth = useCallback(() => {
    if (synthNodesRef.current.intervalId) {
      clearInterval(synthNodesRef.current.intervalId);
      synthNodesRef.current.intervalId = null;
    }
    if (synthNodesRef.current.gainNode && audioCtxRef.current) {
      try {
        const ctx = audioCtxRef.current;
        synthNodesRef.current.gainNode.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 1);
        setTimeout(() => {
          synthNodesRef.current.oscillators.forEach((osc) => {
            try {
              osc.stop();
              osc.disconnect();
            } catch {
              // already stopped
            }
          });
          synthNodesRef.current.oscillators = [];
        }, 1100);
      } catch {
        // cleanup error
      }
    }
    setIsSynthActive(false);
  }, []);

  // Handle Play / Pause logic
  useEffect(() => {
    const audio = audioRef.current;
    if (isPlaying) {
      if (hasCustomFile && audio) {
        audio
          .play()
          .then(() => setIsSynthActive(false))
          .catch(() => {
            startIndianWeddingSynth();
          });
      } else {
        startIndianWeddingSynth();
      }
    } else {
      if (audio) {
        audio.pause();
      }
      stopIndianWeddingSynth();
    }
  }, [isPlaying, hasCustomFile, startIndianWeddingSynth, stopIndianWeddingSynth]);

  // Check if custom audio asset is present
  useEffect(() => {
    const audio = new Audio("/music/wedding-shehnai.mp3");
    audio.addEventListener("canplaythrough", () => {
      setHasCustomFile(true);
    });
    audio.addEventListener("error", () => {
      setHasCustomFile(false);
    });
  }, []);

  const activeAudio = isPlaying && (isSynthActive || hasCustomFile);

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/wedding-shehnai.mp3"
        loop
        preload="none"
        aria-hidden="true"
      />

      {/* Floating Music Widget */}
      <button
        onClick={onToggle}
        type="button"
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-full shadow-2xl backdrop-blur-md border transition-all duration-500 cursor-pointer ${
          activeAudio
            ? "bg-[#702C35]/95 text-[#DFBD7A] border-[#C19A59] shadow-[#702C35]/30 ring-2 ring-[#C19A59]/40"
            : "bg-[#F5EFE3]/95 text-[#702C35] border-[#C19A59]/40 shadow-stone-800/20 hover:border-[#C19A59]"
        }`}
        title={activeAudio ? (lang === "gu" ? "સંગીત બંધ કરો" : "Mute wedding instrumental") : (lang === "gu" ? "મંગલ સંગીત શરૂ કરો" : "Play traditional wedding music")}
        aria-label={activeAudio ? "Mute music" : "Play music"}
      >
        {activeAudio ? (
          <>
            {/* Animated Soundwave EQ Bars */}
            <div className="flex items-end gap-0.5 h-4 w-4" aria-hidden="true">
              <span className="w-0.5 bg-[#DFBD7A] rounded-full animate-pulse h-3"></span>
              <span className="w-0.5 bg-[#DFBD7A] rounded-full animate-bounce h-4"></span>
              <span className="w-0.5 bg-[#DFBD7A] rounded-full animate-pulse h-2"></span>
              <span className="w-0.5 bg-[#DFBD7A] rounded-full animate-bounce h-3.5"></span>
            </div>
            <Volume2 className="w-4 h-4 text-[#DFBD7A]" />
            <span className="text-xs font-medium tracking-wider uppercase font-sans-en hidden sm:inline">
              {lang === "gu" ? "મંગલ શરણાઈ" : "Shehnai"}
            </span>
          </>
        ) : (
          <>
            <Music className="w-4 h-4 text-[#C19A59]" />
            <VolumeX className="w-4 h-4 text-[#702C35]/70" />
            <span className="text-xs font-medium tracking-wider uppercase font-sans-en hidden sm:inline">
              {lang === "gu" ? "સંગીત" : "Music"}
            </span>
          </>
        )}
      </button>
    </>
  );
};
