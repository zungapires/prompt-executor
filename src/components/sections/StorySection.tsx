import { motion } from "framer-motion";
import { CharacterDoll } from "../CharacterDoll";

const messages = [
  "Ultimamente tenho sentido a tua distância…",
  "As tuas respostas ficaram diferentes…",
  "E mesmo tentando entender, continuo aqui porque te amo muito.",
  "Não fiz esta página para te pressionar…",
  "Fiz porque tu és importante para mim.",
];

export const StorySection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blush/40 via-background to-background py-32">
      <div className="container mx-auto grid gap-16 px-6 lg:grid-cols-[300px_1fr] lg:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="sticky top-24 mx-auto h-fit"
        >
          <CharacterDoll variant="boy" className="h-72 w-auto drop-shadow-2xl" holdHeart />
          <div className="mt-4 text-center font-script text-2xl text-crimson">
            …com saudade
          </div>
        </motion.div>

        <div className="space-y-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif-display text-4xl md:text-6xl text-gradient-romance"
          >
            A história por trás disto…
          </motion.h2>

          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, delay: i * 0.1 }}
              className="glass shadow-soft rounded-3xl p-8 md:p-10"
            >
              <p className="font-serif-display text-2xl md:text-3xl italic leading-relaxed text-foreground/90">
                "{msg}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
