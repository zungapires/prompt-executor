import { motion } from "framer-motion";
import { Stars } from "../Particles";

const lines = [
  "Eu não quero te perder.",
  "Só queria entender o que está acontecendo contigo.",
  "Se eu fiz algo errado, me diz…",
  "Mas não desaparece de mim sem explicação.",
  "Porque o meu coração ainda continua aqui, esperando por ti.",
];

export const ConfessionSection = () => {
  return (
    <section className="relative overflow-hidden bg-night py-40">
      <Stars count={60} />
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 font-script text-3xl md:text-5xl text-rose"
        >
          O que eu realmente queria te dizer…
        </motion.h2>

        <div className="space-y-10">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.4, delay: i * 0.15 }}
              className="font-serif-display text-2xl md:text-4xl leading-relaxed text-night-foreground"
              style={{ textShadow: "0 0 40px hsl(345 80% 70% / 0.4)" }}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};
