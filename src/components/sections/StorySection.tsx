import { motion } from "framer-motion";
import { CharacterDoll } from "../CharacterDoll";

const messages = [
  "Lembras-te de quando, no início, eu te propus que tivéssemos algo entre nós?",
  "Fomos sendo conduzidos, devagar, até uma concordância… e tu, por acaso, acabaste por aceitar.",
  "Aquele 'sim' tornou-se uma das coisas mais bonitas que já me aconteceram.",
  "Mas ultimamente tenho sentido a tua distância — e o silêncio dói mais do que qualquer resposta.",
  "Por isso eu só queria perguntar-te de novo, com o coração na mão: ainda dá para nós?",
  "Se a tua resposta for a mesma de antes, vou ser o homem mais feliz do mundo.",
  "E se não for… também está tudo bem. Eu só preciso de uma resposta — qualquer que ela seja é melhor do que o silêncio.",
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
