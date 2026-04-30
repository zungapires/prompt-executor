import { motion } from "framer-motion";
import { Stars } from "../Particles";
import { CharacterDoll } from "../CharacterDoll";

export const FinaleSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-night flex items-center justify-center">
      <Stars count={100} />

      {/* Moon glow */}
      <div className="absolute left-1/2 top-[20%] h-40 w-40 -translate-x-1/2 rounded-full bg-gradient-to-br from-[#fff8e0] to-[#f4c8a8] shadow-[0_0_120px_rgba(255,220,180,0.5)]" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-32 text-center">
        <div className="mb-12 flex items-end justify-center gap-2 md:gap-4">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <CharacterDoll variant="boy" className="h-44 md:h-56 w-auto" holdHeart />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <CharacterDoll variant="girl" className="h-44 md:h-56 w-auto" />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.5 }}
          className="font-script text-3xl md:text-5xl text-rose"
          style={{ textShadow: "0 0 40px hsl(345 80% 70% / 0.6)" }}
        >
          "O amor verdadeiro sempre encontra uma forma de falar."
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 2 }}
          className="mt-16 space-y-3 text-night-foreground/70 font-serif-display italic"
        >
          <p className="text-2xl">❤️ Fim ❤️</p>
          <p className="font-script text-xl md:text-2xl text-rose">
            Desenvolvido por Zunga Pires, com amor para Shewlsea ❤️
          </p>
        </motion.div>
      </div>
    </section>
  );
};
