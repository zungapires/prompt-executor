import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Typewriter } from "../Typewriter";
import { Petals, Stars } from "../Particles";

interface Props {
  onEnter: () => void;
}

export const HeroSection = ({ onEnter }: Props) => {
  const [phase, setPhase] = useState(0);
  const lines = [
    "Olá, Shewlsea…",
    "Existe algo que o meu coração precisava muito te dizer.",
    "Então transformei tudo o que sinto numa pequena experiência — feita só para ti.",
  ];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-romance">
      <div className="absolute inset-0 bg-glow opacity-60" />
      <Stars count={50} />
      <Petals count={20} />

      {/* Soft ambient orbs */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-rose/30 blur-3xl animate-drift" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-lilac/30 blur-3xl animate-drift" style={{ animationDelay: "3s" }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="mb-8 inline-block"
        >
          <svg width="60" height="60" viewBox="0 0 24 24" className="text-crimson animate-pulse-glow rounded-full">
            <path d="M12 21s-7-4.5-9.5-9C.8 8.5 3 4 7 4c2 0 3.5 1 5 3 1.5-2 3-3 5-3 4 0 6.2 4.5 4.5 8C19 16.5 12 21 12 21z" fill="currentColor" />
          </svg>
        </motion.div>

        <div className="min-h-[180px] md:min-h-[220px] flex flex-col items-center justify-center gap-6">
          {lines.slice(0, phase + 1).map((line, i) => (
            <div key={i} className="font-serif-display text-2xl md:text-4xl leading-tight text-foreground">
              {i === phase ? (
                <Typewriter text={line} speed={55} onDone={() => setTimeout(() => setPhase((p) => Math.min(p + 1, lines.length)), 800)} />
              ) : (
                <span>{line}</span>
              )}
            </div>
          ))}
        </div>

        {phase >= lines.length && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            onClick={onEnter}
            className="animate-pulse-glow mt-12 rounded-full bg-gradient-to-r from-crimson via-primary to-rose px-10 py-5 font-sans-soft text-lg font-medium text-primary-foreground shadow-deep transition-all"
          >
            Entrar no meu coração ❤️
          </motion.button>
        )}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/60"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </motion.div>
    </section>
  );
};
