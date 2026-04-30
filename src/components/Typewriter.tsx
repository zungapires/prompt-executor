import { useEffect, useState } from "react";

interface Props {
  text: string;
  speed?: number;
  onDone?: () => void;
  className?: string;
}

export const Typewriter = ({ text, speed = 60, onDone, className }: Props) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        onDone?.();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, onDone]);

  return (
    <span className={className}>
      {displayed}
      <span className="ml-1 inline-block h-[0.9em] w-[2px] animate-pulse bg-current align-middle" />
    </span>
  );
};
