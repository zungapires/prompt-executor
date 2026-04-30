import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CharacterDoll } from "../CharacterDoll";
import { Stars } from "../Particles";

const phrases = [
  "Eu ainda escolho você.",
  "Mesmo nos silêncios…",
  "Mesmo quando dói não entender.",
  "Porque amar você nunca foi difícil para mim.",
];

export const ParallaxSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const moonY = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);
  const cloudsX = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);
  const boyX = useTransform(scrollYProgress, [0.2, 0.7], ["-30%", "0%"]);
  const girlX = useTransform(scrollYProgress, [0.2, 0.7], ["30%", "0%"]);

  return (
    <section ref={ref} className="relative min-h-[150vh] overflow-hidden bg-gradient-to-b from-[#1a1030] via-[#3a1a45] to-[#5a2a55]">
      <Stars count={80} />

      {/* Moon */}
      <motion.div style={{ y: moonY }} className="absolute right-[10%] top-[15%]">
        <div className="relative h-32 w-32 md:h-44 md:w-44 rounded-full bg-gradient-to-br from-[#fff8e0] to-[#f4c8a8] shadow-[0_0_80px_rgba(255,220,180,0.6)]">
          <div className="absolute inset-0 rounded-full opacity-40 mix-blend-overlay" style={{ background: "radial-gradient(circle at 30% 30%, transparent 40%, rgba(0,0,0,0.3))" }} />
        </div>
      </motion.div>

      {/* Clouds */}
      <motion.div style={{ x: cloudsX }} className="absolute left-[5%] top-[25%] h-20 w-48 rounded-full bg-white/15 blur-2xl" />
      <motion.div style={{ x: useTransform(scrollYProgress, [0, 1], ["20%", "-10%"]) }} className="absolute right-[20%] top-[45%] h-16 w-40 rounded-full bg-white/10 blur-2xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-32">
        <div className="space-y-32">
          {phrases.map((phrase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2 }}
              className="text-center"
            >
              <p className="font-serif-display text-3xl md:text-5xl italic text-white/95"
                 style={{ textShadow: "0 0 30px hsl(345 80% 70% / 0.5)" }}>
                {phrase}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Two characters meeting */}
        <div className="mt-32 flex items-end justify-center gap-2 md:gap-8">
          <motion.div style={{ x: boyX }}>
            <CharacterDoll variant="boy" className="h-48 md:h-64 w-auto" holdHeart />
          </motion.div>
          <motion.div style={{ x: girlX }}>
            <CharacterDoll variant="girl" className="h-48 md:h-64 w-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
