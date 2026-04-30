import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

export const ChoiceSection = () => {
  const [answered, setAnswered] = useState(false);
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number; color: string }>>([]);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNoHover = () => {
    const maxX = 200;
    const maxY = 80;
    setNoPos({
      x: (Math.random() - 0.5) * maxX * 2,
      y: (Math.random() - 0.5) * maxY * 2,
    });
  };

  const handleYes = () => {
    setAnswered(true);
    const colors = ["hsl(345 80% 65%)", "hsl(280 60% 75%)", "hsl(40 80% 70%)", "hsl(350 80% 80%)"];
    setConfetti(
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        color: colors[i % colors.length],
      }))
    );
  };

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-gradient-to-b from-background via-blush/40 to-background py-32">
      <div className="container mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 font-serif-display text-4xl md:text-6xl text-gradient-romance"
        >
          Ainda posso continuar te amando?
        </motion.h2>

        <AnimatePresence mode="wait">
          {!answered ? (
            <motion.div
              key="choice"
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-8"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleYes}
                className="animate-pulse-glow rounded-full bg-gradient-to-r from-crimson to-rose px-12 py-6 font-sans-soft text-2xl font-semibold text-primary-foreground shadow-deep"
              >
                SIM ❤️
              </motion.button>

              <motion.button
                animate={{ x: noPos.x, y: noPos.y }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onMouseEnter={handleNoHover}
                onTouchStart={handleNoHover}
                onClick={handleNoHover}
                className="rounded-full border-2 border-muted-foreground/40 bg-background px-12 py-6 font-sans-soft text-2xl font-medium text-muted-foreground"
              >
                NÃO 💔
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="answered"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="glass shadow-glow rounded-3xl p-12"
            >
              <div className="mb-4 text-6xl">💖</div>
              <p className="font-serif-display text-2xl md:text-3xl italic text-crimson">
                "Sabia que o teu coração ainda tinha espaço para mim ❤️"
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Confetti */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {confetti.map((c) => (
          <div
            key={c.id}
            className="animate-fall absolute top-0"
            style={{
              left: `${c.left}%`,
              animationDelay: `${c.delay}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill={c.color}>
              <path d="M12 21s-7-4.5-9.5-9C.8 8.5 3 4 7 4c2 0 3.5 1 5 3 1.5-2 3-3 5-3 4 0 6.2 4.5 4.5 8C19 16.5 12 21 12 21z" />
            </svg>
          </div>
        ))}
      </div>
    </section>
  );
};
