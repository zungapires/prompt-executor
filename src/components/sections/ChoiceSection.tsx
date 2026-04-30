import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export const ChoiceSection = () => {
  const [answered, setAnswered] = useState<"yes" | "no" | null>(null);
  const [confetti, setConfetti] = useState<
    Array<{ id: number; left: number; delay: number; color: string }>
  >([]);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [dodgeCount, setDodgeCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const noBtnRef = useRef<HTMLButtonElement>(null);

  const dodge = () => {
    const container = containerRef.current;
    const btn = noBtnRef.current;
    if (!container || !btn) return;

    const cRect = container.getBoundingClientRect();
    const bRect = btn.getBoundingClientRect();

    // Center of button (without offset)
    const baseCenterX = bRect.left + bRect.width / 2 - noPos.x;
    const baseCenterY = bRect.top + bRect.height / 2 - noPos.y;

    // Safe range so the button stays inside the container
    const margin = 12;
    const minX = cRect.left + bRect.width / 2 + margin - baseCenterX;
    const maxX = cRect.right - bRect.width / 2 - margin - baseCenterX;
    const minY = cRect.top + bRect.height / 2 + margin - baseCenterY;
    const maxY = cRect.bottom - bRect.height / 2 - margin - baseCenterY;

    const rand = (a: number, b: number) => a + Math.random() * (b - a);
    setNoPos({ x: rand(minX, maxX), y: rand(minY, maxY) });
    setDodgeCount((c) => c + 1);
  };

  // Reset position if user resizes
  useEffect(() => {
    const onResize = () => setNoPos({ x: 0, y: 0 });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleYes = () => {
    setAnswered("yes");
    const colors = [
      "hsl(345 80% 65%)",
      "hsl(280 60% 75%)",
      "hsl(40 80% 70%)",
      "hsl(350 80% 80%)",
    ];
    setConfetti(
      Array.from({ length: 70 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        color: colors[i % colors.length],
      }))
    );
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-blush/40 to-background py-32">
      <div
        ref={containerRef}
        className="container relative mx-auto max-w-3xl px-6 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 font-serif-display text-4xl md:text-6xl text-gradient-romance"
        >
          Ainda dá para nós, Shewlsea?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto mb-16 max-w-xl font-serif-display text-lg italic text-muted-foreground"
        >
          Se a tua resposta for a mesma de antes, o meu coração vai sorrir.
          E se não for… também está tudo bem. Eu só preciso de uma resposta.
        </motion.p>

        <AnimatePresence mode="wait">
          {answered === null ? (
            <motion.div
              key="choice"
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative flex min-h-[220px] flex-wrap items-center justify-center gap-6 sm:gap-10"
            >
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleYes}
                className="animate-pulse-glow rounded-full bg-gradient-to-r from-crimson to-rose px-10 py-5 sm:px-12 sm:py-6 font-sans-soft text-xl sm:text-2xl font-semibold text-primary-foreground shadow-deep"
              >
                SIM, ainda dá ❤️
              </motion.button>

              <motion.button
                ref={noBtnRef}
                animate={{ x: noPos.x, y: noPos.y }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                onMouseEnter={dodge}
                onTouchStart={(e) => {
                  e.preventDefault();
                  dodge();
                }}
                onPointerDown={(e) => {
                  // On touch devices, dodge before click registers
                  if (e.pointerType !== "mouse") {
                    e.preventDefault();
                    dodge();
                  }
                }}
                onClick={() => {
                  // Fallback: only triggers if somehow caught
                  dodge();
                }}
                className="rounded-full border-2 border-muted-foreground/40 bg-background px-10 py-5 sm:px-12 sm:py-6 font-sans-soft text-xl sm:text-2xl font-medium text-muted-foreground"
              >
                Não 💔
              </motion.button>

              {dodgeCount >= 3 && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap font-script text-lg text-crimson"
                >
                  o "não" está a fugir de ti… 💕
                </motion.p>
              )}
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
                "Eu sabia que o teu coração ainda tinha um lugarzinho para mim, Shewlsea ❤️"
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
