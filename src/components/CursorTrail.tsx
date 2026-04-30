import { useEffect, useState } from "react";

export const CursorTrail = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    let id = 0;
    let last = 0;
    const handler = (e: MouseEvent) => {
      const now = Date.now();
      if (now - last < 60) return;
      last = now;
      const newHeart = { id: id++, x: e.clientX, y: e.clientY };
      setHearts((prev) => [...prev.slice(-15), newHeart]);
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, 1200);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100]">
      {hearts.map((h) => (
        <svg
          key={h.id}
          className="absolute"
          style={{
            left: h.x - 8,
            top: h.y - 8,
            width: 16,
            height: 16,
            color: "hsl(345 80% 65%)",
            animation: "float-up 1.2s ease-out forwards",
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
