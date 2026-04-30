import { motion } from "framer-motion";

const moments = [
  { icon: "✨", title: "Quando nos conhecemos", text: "Aquele instante em que tudo começou a fazer sentido." },
  { icon: "💬", title: "A nossa primeira conversa", text: "Horas que pareceram minutos. Sorrisos que ficaram." },
  { icon: "🌙", title: "Primeiro momento especial", text: "Aquele detalhe que só nós dois entendemos." },
  { icon: "☀️", title: "Os dias mais felizes", text: "Quando rir contigo era a coisa mais fácil do mundo." },
  { icon: "💞", title: "Memórias que ficam", text: "Tudo o que vivemos continua aqui, intacto." },
];

export const TimelineSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-blush/30 to-background py-32">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center font-serif-display text-4xl md:text-6xl text-gradient-romance"
        >
          A nossa linha do tempo
        </motion.h2>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-rose/60 to-transparent md:block" />

          <div className="space-y-12 md:space-y-20">
            {moments.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.9 }}
                className={`relative flex flex-col gap-4 md:flex-row md:items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="md:w-1/2">
                  <div className="glass shadow-soft hover:shadow-glow group rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2">
                    <div className="mb-3 text-4xl transition-transform group-hover:scale-110">{m.icon}</div>
                    <h3 className="mb-2 font-serif-display text-2xl font-semibold text-crimson">{m.title}</h3>
                    <p className="font-serif-display text-lg italic text-muted-foreground">{m.text}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex md:w-0 md:justify-center">
                  <div className="animate-pulse-glow h-5 w-5 rounded-full bg-gradient-to-br from-crimson to-rose ring-4 ring-background" />
                </div>

                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
