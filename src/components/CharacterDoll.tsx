import { motion } from "framer-motion";

interface Props {
  variant?: "boy" | "girl";
  className?: string;
  holdHeart?: boolean;
}

export const CharacterDoll = ({ variant = "boy", className, holdHeart = false }: Props) => {
  const isGirl = variant === "girl";
  const skin = "#f4d3b8";
  const hair = isGirl ? "#5a3a2a" : "#3a2418";
  const shirt = isGirl ? "hsl(345 75% 70%)" : "hsl(220 35% 45%)";

  return (
    <motion.svg
      className={className}
      viewBox="0 0 120 180"
      initial={{ y: 0 }}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Hair back (girl) */}
      {isGirl && <ellipse cx="60" cy="48" rx="28" ry="32" fill={hair} />}
      {/* Head */}
      <circle cx="60" cy="50" r="24" fill={skin} />
      {/* Hair front */}
      {isGirl ? (
        <path d="M36 42 Q60 22 84 42 Q82 32 60 28 Q38 32 36 42Z" fill={hair} />
      ) : (
        <path d="M38 42 Q44 28 60 28 Q76 28 82 42 Q78 36 60 36 Q42 36 38 42Z" fill={hair} />
      )}
      {/* Cheeks */}
      <circle cx="48" cy="56" r="3.5" fill="hsl(345 80% 78%)" opacity="0.7" />
      <circle cx="72" cy="56" r="3.5" fill="hsl(345 80% 78%)" opacity="0.7" />
      {/* Eyes */}
      <circle cx="51" cy="50" r="2.5" fill="#2a1a14" />
      <circle cx="69" cy="50" r="2.5" fill="#2a1a14" />
      <circle cx="52" cy="49" r="0.8" fill="#fff" />
      <circle cx="70" cy="49" r="0.8" fill="#fff" />
      {/* Smile */}
      <path d="M54 62 Q60 68 66 62" stroke="#5a2a2a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Body */}
      <path d="M40 80 Q40 76 60 76 Q80 76 80 80 L82 130 Q60 138 38 130 Z" fill={shirt} />
      {/* Arms */}
      <path d="M40 84 Q28 100 32 122" stroke={shirt} strokeWidth="9" fill="none" strokeLinecap="round" />
      <path d="M80 84 Q92 100 88 122" stroke={shirt} strokeWidth="9" fill="none" strokeLinecap="round" />
      {/* Hands */}
      <circle cx="32" cy="124" r="6" fill={skin} />
      <circle cx="88" cy="124" r="6" fill={skin} />
      {/* Legs */}
      <rect x="46" y="128" width="12" height="40" rx="6" fill="hsl(220 25% 25%)" />
      <rect x="62" y="128" width="12" height="40" rx="6" fill="hsl(220 25% 25%)" />
      {/* Shoes */}
      <ellipse cx="52" cy="172" rx="9" ry="5" fill="#1a1410" />
      <ellipse cx="68" cy="172" rx="9" ry="5" fill="#1a1410" />
      {/* Heart in hand */}
      {holdHeart && (
        <motion.g
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ transformOrigin: "88px 124px" }}
        >
          <path
            d="M88 116 C84 112 78 114 78 119 C78 124 88 132 88 132 C88 132 98 124 98 119 C98 114 92 112 88 116 Z"
            fill="hsl(350 80% 60%)"
          />
        </motion.g>
      )}
      {/* Skirt for girl */}
      {isGirl && (
        <path d="M38 122 L82 122 L92 142 L28 142 Z" fill="hsl(345 75% 78%)" />
      )}
    </motion.svg>
  );
};
