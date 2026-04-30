import { useEffect, useState } from "react";

export const FloatingHearts = ({ count = 20 }: { count?: number }) => {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number; duration: number; size: number; opacity: number }>>([]);

  useEffect(() => {
    setHearts(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 8 + Math.random() * 12,
        size: 12 + Math.random() * 20,
        opacity: 0.4 + Math.random() * 0.5,
      }))
    );
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {hearts.map((h) => (
        <svg
          key={h.id}
          className="animate-float-up absolute"
          style={{
            left: `${h.left}%`,
            bottom: 0,
            width: h.size,
            height: h.size,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            opacity: h.opacity,
            color: `hsl(${340 + Math.random() * 20} 75% ${60 + Math.random() * 20}%)`,
          }}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 21s-7-4.5-9.5-9C.8 8.5 3 4 7 4c2 0 3.5 1 5 3 1.5-2 3-3 5-3 4 0 6.2 4.5 4.5 8C19 16.5 12 21 12 21z" />
        </svg>
      ))}
    </div>
  );
};

export const Petals = ({ count = 15 }: { count?: number }) => {
  const [petals, setPetals] = useState<Array<{ id: number; left: number; delay: number; duration: number; size: number }>>([]);
  useEffect(() => {
    setPetals(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 15,
        duration: 12 + Math.random() * 10,
        size: 14 + Math.random() * 16,
      }))
    );
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="animate-fall absolute"
          style={{
            left: `${p.left}%`,
            top: 0,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        >
          <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="hsl(345 80% 80%)" opacity="0.7">
            <path d="M12 2c2 4 6 6 6 10s-3 8-6 10c-3-2-6-6-6-10s4-6 6-10z" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export const Stars = ({ count = 40 }: { count?: number }) => {
  const [stars, setStars] = useState<Array<{ id: number; top: number; left: number; size: number; delay: number; duration: number }>>([]);
  useEffect(() => {
    setStars(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 1 + Math.random() * 3,
        delay: Math.random() * 4,
        duration: 2 + Math.random() * 3,
      }))
    );
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((s) => (
        <div
          key={s.id}
          className="animate-twinkle absolute rounded-full bg-white"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            boxShadow: `0 0 ${s.size * 2}px hsl(40 80% 80%)`,
          }}
        />
      ))}
    </div>
  );
};
