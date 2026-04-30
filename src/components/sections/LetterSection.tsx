import { motion } from "framer-motion";

export const LetterSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-cream to-blush/40 py-32">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(hsl(345 80% 80%) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      <motion.div
        initial={{ opacity: 0, y: 60, rotateX: 15 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
        className="container mx-auto max-w-2xl px-6"
        style={{ perspective: 1000 }}
      >
        <div className="relative rounded-3xl bg-cream p-10 md:p-16 shadow-deep" style={{ backgroundImage: "linear-gradient(180deg, hsl(35 60% 97%), hsl(35 50% 94%))" }}>
          {/* Wax seal */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-crimson to-[#7a1530] shadow-deep">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="hsl(35 50% 94%)">
                <path d="M12 21s-7-4.5-9.5-9C.8 8.5 3 4 7 4c2 0 3.5 1 5 3 1.5-2 3-3 5-3 4 0 6.2 4.5 4.5 8C19 16.5 12 21 12 21z" />
              </svg>
            </div>
          </div>

          <h2 className="mb-8 text-center font-script text-4xl md:text-5xl text-crimson">Para ti, Shewlsea…</h2>

          <div className="space-y-5 font-serif-display text-xl md:text-2xl italic leading-relaxed text-foreground/90">
            <p>Independentemente da tua resposta…</p>
            <p>Tu continuas a ser alguém muito especial para mim.</p>
            <p>Só te peço uma coisa: não me deixes no silêncio.</p>
            <p>Uma resposta — seja ela qual for — é tudo o que o meu coração precisa para descansar.</p>
            <p>Obrigado por leres até aqui. Significa mais do que imaginas.</p>
          </div>

          <div className="mt-10 text-right">
            <p className="font-serif-display text-lg text-muted-foreground">Com todo o amor,</p>
            <p className="mt-2 font-script text-4xl text-crimson">— Zunga Pires ❤️</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
