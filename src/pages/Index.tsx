import { useEffect, useRef, useState } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { StorySection } from "@/components/sections/StorySection";
import { ParallaxSection } from "@/components/sections/ParallaxSection";
import { ConfessionSection } from "@/components/sections/ConfessionSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { ChoiceSection } from "@/components/sections/ChoiceSection";
import { LetterSection } from "@/components/sections/LetterSection";
import { FinaleSection } from "@/components/sections/FinaleSection";
import { FloatingHearts } from "@/components/Particles";
import { CursorTrail } from "@/components/CursorTrail";

const Index = () => {
  const storyRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    document.title = "Para Ti — Uma Carta do Coração ❤️";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Uma experiência romântica e cinematográfica feita com amor — só para ti.");
    const t = setTimeout(() => setLoaded(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const scrollToStory = () => {
    storyRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (!loaded) {
    return (
      <div className="fixed inset-0 z-[200] flex items-center justify-center bg-romance">
        <div className="text-center">
          <div className="mx-auto mb-4 h-16 w-16 animate-pulse-glow rounded-full bg-crimson" style={{ clipPath: "path('M32 56 C18 44 4 32 4 18 C4 8 12 4 18 4 C24 4 28 8 32 14 C36 8 40 4 46 4 C52 4 60 8 60 18 C60 32 46 44 32 56Z')" }} />
          <p className="font-script text-3xl text-crimson">A preparar algo especial…</p>
        </div>
      </div>
    );
  }

  return (
    <main className="cursor-romance relative">
      <FloatingHearts count={15} />
      <CursorTrail />

      <HeroSection onEnter={scrollToStory} />
      <div ref={storyRef}>
        <StorySection />
      </div>
      <ParallaxSection />
      <ConfessionSection />
      <TimelineSection />
      <ChoiceSection />
      <LetterSection />
      <FinaleSection />
    </main>
  );
};

export default Index;
