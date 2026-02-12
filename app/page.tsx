"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Cute cat SVG component - happy state
function HappyCat({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="100" cy="130" rx="55" ry="50" fill="#f5f5f5" stroke="#ccc" strokeWidth="2"/>
      {/* Head */}
      <circle cx="100" cy="80" r="45" fill="#f5f5f5" stroke="#ccc" strokeWidth="2"/>
      {/* Left ear */}
      <polygon points="65,50 55,15 85,40" fill="#f5f5f5" stroke="#ccc" strokeWidth="2"/>
      <polygon points="68,48 60,22 82,42" fill="#ffb6c1" />
      {/* Right ear */}
      <polygon points="135,50 145,15 115,40" fill="#f5f5f5" stroke="#ccc" strokeWidth="2"/>
      <polygon points="132,48 140,22 118,42" fill="#ffb6c1" />
      {/* Eyes - happy (closed crescents) */}
      <path d="M 78 78 Q 83 70 88 78" fill="none" stroke="#444" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M 112 78 Q 117 70 122 78" fill="none" stroke="#444" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Blush */}
      <ellipse cx="72" cy="90" rx="10" ry="6" fill="#ffb6c1" opacity="0.5"/>
      <ellipse cx="128" cy="90" rx="10" ry="6" fill="#ffb6c1" opacity="0.5"/>
      {/* Mouth - happy smile */}
      <path d="M 92 95 Q 100 105 108 95" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="round"/>
      {/* Bow */}
      <circle cx="100" cy="55" r="4" fill="#e91e63"/>
      <ellipse cx="88" cy="53" rx="10" ry="6" fill="#e91e63" transform="rotate(-15 88 53)"/>
      <ellipse cx="112" cy="53" rx="10" ry="6" fill="#e91e63" transform="rotate(15 112 53)"/>
      {/* Tail */}
      <path d="M 155 130 Q 175 100 160 80" fill="none" stroke="#ccc" strokeWidth="4" strokeLinecap="round"/>
      {/* Little paws */}
      <ellipse cx="75" cy="170" rx="15" ry="8" fill="#f5f5f5" stroke="#ccc" strokeWidth="1.5"/>
      <ellipse cx="125" cy="170" rx="15" ry="8" fill="#f5f5f5" stroke="#ccc" strokeWidth="1.5"/>
    </svg>
  );
}

// Sad cat SVG
function SadCat({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="100" cy="130" rx="55" ry="50" fill="#f0f0f0" stroke="#ccc" strokeWidth="2"/>
      {/* Head */}
      <circle cx="100" cy="80" r="45" fill="#f0f0f0" stroke="#ccc" strokeWidth="2"/>
      {/* Ears */}
      <polygon points="65,50 55,15 85,40" fill="#f0f0f0" stroke="#ccc" strokeWidth="2"/>
      <polygon points="68,48 60,22 82,42" fill="#d0d0d0"/>
      <polygon points="135,50 145,15 115,40" fill="#f0f0f0" stroke="#ccc" strokeWidth="2"/>
      <polygon points="132,48 140,22 118,42" fill="#d0d0d0"/>
      {/* Sad droopy ears effect */}
      {/* Eyes - sad (big round with tears) */}
      <circle cx="83" cy="75" r="8" fill="white" stroke="#444" strokeWidth="1.5"/>
      <circle cx="83" cy="77" r="4" fill="#444"/>
      <circle cx="85" cy="74" r="2" fill="white"/>
      <circle cx="117" cy="75" r="8" fill="white" stroke="#444" strokeWidth="1.5"/>
      <circle cx="117" cy="77" r="4" fill="#444"/>
      <circle cx="119" cy="74" r="2" fill="white"/>
      {/* Tears */}
      <path d="M 75 83 Q 73 95 76 100" fill="none" stroke="#64b5f6" strokeWidth="2" strokeLinecap="round"/>
      <path d="M 125 83 Q 127 95 124 100" fill="none" stroke="#64b5f6" strokeWidth="2" strokeLinecap="round"/>
      {/* Blush */}
      <ellipse cx="72" cy="92" rx="8" ry="5" fill="#ffb6c1" opacity="0.4"/>
      <ellipse cx="128" cy="92" rx="8" ry="5" fill="#ffb6c1" opacity="0.4"/>
      {/* Mouth - sad */}
      <path d="M 90 100 Q 100 92 110 100" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="round"/>
      {/* Droopy bow */}
      <circle cx="100" cy="55" r="3" fill="#999"/>
      <ellipse cx="89" cy="55" rx="8" ry="5" fill="#999" transform="rotate(-5 89 55)"/>
      <ellipse cx="111" cy="55" rx="8" ry="5" fill="#999" transform="rotate(5 111 55)"/>
      {/* Tail droopy */}
      <path d="M 155 135 Q 170 145 165 160" fill="none" stroke="#ccc" strokeWidth="4" strokeLinecap="round"/>
      {/* Little paws */}
      <ellipse cx="75" cy="170" rx="15" ry="8" fill="#f0f0f0" stroke="#ccc" strokeWidth="1.5"/>
      <ellipse cx="125" cy="170" rx="15" ry="8" fill="#f0f0f0" stroke="#ccc" strokeWidth="1.5"/>
      {/* "No!" text above */}
      <text x="70" y="30" fontSize="16" fontWeight="bold" fill="#e91e63" fontFamily="Bubblegum Sans, cursive">No!</text>
      <text x="115" y="30" fontSize="16" fontWeight="bold" fill="#e91e63" fontFamily="Bubblegum Sans, cursive">No!</text>
    </svg>
  );
}

// Celebration characters SVG — ocean theme with dolphins & sea creatures
function CelebrationCharacters({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 250" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Water background shimmer */}
      <ellipse cx="200" cy="230" rx="190" ry="20" fill="#b3e5fc" opacity="0.3"/>

      {/* Left dolphin — jumping */}
      <g transform="translate(60, 30)">
        {/* Body */}
        <path d="M 10 80 Q 30 20 70 15 Q 110 10 120 40 Q 130 65 110 85 Q 80 110 40 100 Q 15 95 10 80Z" fill="#5c9dc4" />
        {/* Belly */}
        <path d="M 30 80 Q 50 60 80 55 Q 110 52 115 65 Q 105 85 70 95 Q 40 98 30 80Z" fill="#b3e5fc" />
        {/* Eye */}
        <circle cx="85" cy="35" r="5" fill="white"/>
        <circle cx="87" cy="34" r="3" fill="#1a237e"/>
        <circle cx="88" cy="33" r="1" fill="white"/>
        {/* Smile */}
        <path d="M 95 42 Q 108 38 118 43" fill="none" stroke="#1a237e" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Snout */}
        <path d="M 115 35 Q 135 30 140 35" fill="#5c9dc4" stroke="#4a8ab5" strokeWidth="1"/>
        {/* Dorsal fin */}
        <path d="M 55 18 Q 50 -5 70 10 Q 75 15 65 20Z" fill="#4a8ab5"/>
        {/* Tail */}
        <path d="M 10 80 Q -5 70 -10 55 Q -5 65 5 60" fill="#4a8ab5"/>
        <path d="M 10 80 Q -5 90 -10 105 Q -5 95 5 100" fill="#4a8ab5"/>
        {/* Flipper */}
        <path d="M 70 70 Q 55 85 65 95 Q 75 85 70 70Z" fill="#4a8ab5"/>
        {/* Blush */}
        <ellipse cx="95" cy="48" rx="8" ry="4" fill="#f48fb1" opacity="0.5"/>
        {/* Heart above */}
        <text x="75" y="0" fontSize="16" fill="#e91e63">♥</text>
      </g>

      {/* Right dolphin — jumping the other way */}
      <g transform="translate(210, 20) scale(-1,1) translate(-130,0)">
        {/* Body */}
        <path d="M 10 80 Q 30 20 70 15 Q 110 10 120 40 Q 130 65 110 85 Q 80 110 40 100 Q 15 95 10 80Z" fill="#7bafd4" />
        {/* Belly */}
        <path d="M 30 80 Q 50 60 80 55 Q 110 52 115 65 Q 105 85 70 95 Q 40 98 30 80Z" fill="#e1f5fe" />
        {/* Eye */}
        <circle cx="85" cy="35" r="5" fill="white"/>
        <circle cx="87" cy="34" r="3" fill="#1a237e"/>
        <circle cx="88" cy="33" r="1" fill="white"/>
        {/* Smile */}
        <path d="M 95 42 Q 108 38 118 43" fill="none" stroke="#1a237e" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Snout */}
        <path d="M 115 35 Q 135 30 140 35" fill="#7bafd4" stroke="#6a9ec3" strokeWidth="1"/>
        {/* Dorsal fin */}
        <path d="M 55 18 Q 50 -5 70 10 Q 75 15 65 20Z" fill="#6a9ec3"/>
        {/* Tail */}
        <path d="M 10 80 Q -5 70 -10 55 Q -5 65 5 60" fill="#6a9ec3"/>
        <path d="M 10 80 Q -5 90 -10 105 Q -5 95 5 100" fill="#6a9ec3"/>
        {/* Flipper */}
        <path d="M 70 70 Q 55 85 65 95 Q 75 85 70 70Z" fill="#6a9ec3"/>
        {/* Blush */}
        <ellipse cx="95" cy="48" rx="8" ry="4" fill="#f48fb1" opacity="0.5"/>
      </g>

      {/* Heart between dolphins */}
      <text x="185" y="55" fontSize="24" fill="#e91e63" textAnchor="middle">♥</text>
      <text x="175" y="35" fontSize="14" fill="#f06292">♥</text>
      <text x="200" y="40" fontSize="12" fill="#f48fb1">♥</text>

      {/* Little sea turtle */}
      <g transform="translate(300, 160)">
        {/* Shell */}
        <ellipse cx="20" cy="15" rx="18" ry="14" fill="#66bb6a"/>
        <ellipse cx="20" cy="15" rx="14" ry="10" fill="#81c784"/>
        {/* Shell pattern */}
        <path d="M 12 8 L 20 15 L 28 8" fill="none" stroke="#4caf50" strokeWidth="1.5"/>
        <path d="M 10 18 L 20 15 L 30 18" fill="none" stroke="#4caf50" strokeWidth="1.5"/>
        {/* Head */}
        <ellipse cx="40" cy="14" rx="7" ry="6" fill="#66bb6a"/>
        <circle cx="42" cy="12" r="2" fill="#1a237e"/>
        <circle cx="42.5" cy="11.5" r="0.8" fill="white"/>
        {/* Flippers */}
        <ellipse cx="10" cy="6" rx="8" ry="4" fill="#66bb6a" transform="rotate(-30 10 6)"/>
        <ellipse cx="30" cy="6" rx="8" ry="4" fill="#66bb6a" transform="rotate(30 30 6)"/>
        <ellipse cx="8" cy="24" rx="6" ry="3" fill="#66bb6a" transform="rotate(20 8 24)"/>
        <ellipse cx="32" cy="24" rx="6" ry="3" fill="#66bb6a" transform="rotate(-20 32 24)"/>
        {/* Smile */}
        <path d="M 41 16 Q 44 18 46 16" fill="none" stroke="#2e7d32" strokeWidth="1" strokeLinecap="round"/>
      </g>

      {/* Jellyfish */}
      <g transform="translate(30, 150)">
        {/* Bell */}
        <ellipse cx="20" cy="15" rx="16" ry="12" fill="#ce93d8" opacity="0.7"/>
        <ellipse cx="20" cy="15" rx="12" ry="8" fill="#e1bee7" opacity="0.5"/>
        {/* Tentacles */}
        <path d="M 10 25 Q 8 40 12 50" fill="none" stroke="#ce93d8" strokeWidth="1.5" opacity="0.6"/>
        <path d="M 16 27 Q 14 42 17 52" fill="none" stroke="#ce93d8" strokeWidth="1.5" opacity="0.6"/>
        <path d="M 24 27 Q 26 42 23 52" fill="none" stroke="#ce93d8" strokeWidth="1.5" opacity="0.6"/>
        <path d="M 30 25 Q 32 40 28 50" fill="none" stroke="#ce93d8" strokeWidth="1.5" opacity="0.6"/>
        {/* Eyes */}
        <circle cx="15" cy="13" r="2" fill="#4a148c"/>
        <circle cx="25" cy="13" r="2" fill="#4a148c"/>
        <path d="M 17 18 Q 20 21 23 18" fill="none" stroke="#4a148c" strokeWidth="1" strokeLinecap="round"/>
      </g>

      {/* Starfish */}
      <g transform="translate(155, 195)">
        <polygon points="20,0 24,14 38,14 26,22 30,36 20,28 10,36 14,22 2,14 16,14" fill="#ffab91" stroke="#ff8a65" strokeWidth="1"/>
        <circle cx="20" cy="17" r="3" fill="#ffcc80"/>
        {/* Happy face */}
        <circle cx="18" cy="15" r="1" fill="#bf360c"/>
        <circle cx="22" cy="15" r="1" fill="#bf360c"/>
        <path d="M 18 19 Q 20 21 22 19" fill="none" stroke="#bf360c" strokeWidth="0.8" strokeLinecap="round"/>
      </g>

      {/* Small fish */}
      <g transform="translate(340, 100)">
        <ellipse cx="15" cy="10" rx="12" ry="7" fill="#ffb74d"/>
        <polygon points="0,10 -8,4 -8,16" fill="#ffa726"/>
        <circle cx="20" cy="8" r="2" fill="white"/>
        <circle cx="21" cy="8" r="1.2" fill="#1a237e"/>
        <path d="M 16 13 Q 18 15 21 13" fill="none" stroke="#e65100" strokeWidth="0.8" strokeLinecap="round"/>
        {/* Stripes */}
        <path d="M 10 5 Q 12 10 10 15" fill="none" stroke="#ffa726" strokeWidth="1" opacity="0.5"/>
        <path d="M 15 4 Q 17 10 15 16" fill="none" stroke="#ffa726" strokeWidth="1" opacity="0.5"/>
      </g>

      {/* Bubbles */}
      <circle cx="100" cy="120" r="4" fill="none" stroke="#b3e5fc" strokeWidth="1" opacity="0.6"/>
      <circle cx="110" cy="105" r="3" fill="none" stroke="#b3e5fc" strokeWidth="1" opacity="0.5"/>
      <circle cx="95" cy="135" r="2.5" fill="none" stroke="#b3e5fc" strokeWidth="1" opacity="0.4"/>
      <circle cx="280" cy="110" r="4" fill="none" stroke="#b3e5fc" strokeWidth="1" opacity="0.6"/>
      <circle cx="290" cy="95" r="3" fill="none" stroke="#b3e5fc" strokeWidth="1" opacity="0.5"/>
      <circle cx="270" cy="125" r="2" fill="none" stroke="#b3e5fc" strokeWidth="1" opacity="0.4"/>

      {/* Sparkles */}
      <text x="140" y="25" fontSize="14" fill="#ffd700">✨</text>
      <text x="245" y="20" fontSize="12" fill="#ffd700">✨</text>
      <text x="80" y="140" fontSize="10" fill="#ffd700">✨</text>
      <text x="330" y="80" fontSize="11" fill="#ffd700">✨</text>
    </svg>
  );
}

// Floating hearts background
function FloatingHearts() {
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
    size: 12 + Math.random() * 20,
    opacity: 0.1 + Math.random() * 0.2,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-pink-400"
          style={{
            left: `${heart.left}%`,
            fontSize: heart.size,
            opacity: heart.opacity,
          }}
          animate={{
            y: [typeof window !== 'undefined' ? window.innerHeight : 800, -100],
            rotate: [0, 360],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear",
          }}
        >
          ♥
        </motion.div>
      ))}
    </div>
  );
}

// Confetti component for celebration
function Confetti() {
  const pieces = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 2 + Math.random() * 3,
    color: ['#e91e63', '#f06292', '#4dd0e1', '#26c6da', '#00bcd4', '#80deea', '#ffd700', '#ff9800', '#b2ebf2'][Math.floor(Math.random() * 9)],
    size: 6 + Math.random() * 10,
    shape: Math.random() > 0.5 ? 'circle' : 'rect',
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.left}%`,
            width: piece.size,
            height: piece.shape === 'rect' ? piece.size * 0.6 : piece.size,
            backgroundColor: piece.color,
            borderRadius: piece.shape === 'circle' ? '50%' : '2px',
          }}
          initial={{ y: -20, opacity: 1, rotate: 0 }}
          animate={{
            y: [typeof window !== 'undefined' ? -20 : -20, typeof window !== 'undefined' ? window.innerHeight + 20 : 820],
            rotate: [0, 720],
            opacity: [1, 0.7],
          }}
          transition={{
            duration: piece.duration,
            repeat: Infinity,
            delay: piece.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

// ---- TYPEWRITER LOVE LETTER ----
function TypewriterLetter() {
  const fullText = `My dearest Valentine,

From the moment you came into my life, everything changed for the better. Your smile lights up my darkest days, your laugh is my favorite sound, and your love is the greatest gift I've ever received.

Every moment with you feels like a beautiful dream I never want to wake up from. You make me want to be a better person, and I fall more in love with you every single day.

Thank you for choosing me. Thank you for being you.

Forever yours ♥`;

  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayed(fullText.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative rounded-2xl p-6 shadow-xl"
      style={{
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(10px)',
        border: '2px solid #f8bbd0',
      }}
    >
      {/* Decorative stamp */}
      <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full flex items-center justify-center text-2xl"
        style={{ background: '#e91e63', boxShadow: '0 2px 8px rgba(233,30,99,0.4)' }}>
        💌
      </div>
      <p
        className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap"
        style={{ fontFamily: "'Quicksand', sans-serif", color: '#5d4037' }}
      >
        {displayed}
        {!done && (
          <span className="inline-block w-0.5 h-4 ml-0.5 align-middle" style={{ background: '#c2185b', animation: 'blink 0.8s infinite' }} />
        )}
      </p>
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}

// ---- REASONS I LOVE YOU CAROUSEL ----
const loveReasons = [
  { emoji: "😊", text: "Your smile makes everything better" },
  { emoji: "🤣", text: "You always know how to make me laugh" },
  { emoji: "🫂", text: "Your hugs feel like home" },
  { emoji: "✨", text: "You believe in me when I don't believe in myself" },
  { emoji: "🍳", text: "The way you get excited about little things" },
  { emoji: "💪", text: "Your strength inspires me every day" },
  { emoji: "🎵", text: "How you sing along to every song in the car" },
  { emoji: "🌙", text: "Late night conversations about everything and nothing" },
  { emoji: "👀", text: "The way you look at me" },
  { emoji: "💝", text: "Simply because you're you" },
];

function ReasonsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % loveReasons.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const reason = loveReasons[index];

  return (
    <div
      className="rounded-2xl p-5 shadow-xl text-center"
      style={{
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(10px)',
        border: '2px solid #f8bbd0',
      }}
    >
      <p className="text-xs font-semibold uppercase tracking-widest mb-3"
        style={{ fontFamily: "'Quicksand', sans-serif", color: '#e91e63' }}>
        Reasons I Love You
      </p>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-4xl">{reason.emoji}</span>
          <p className="text-base sm:text-lg font-semibold"
            style={{ fontFamily: "'Bubblegum Sans', cursive", color: '#5d4037' }}>
            {reason.text}
          </p>
        </motion.div>
      </AnimatePresence>
      {/* Progress dots */}
      <div className="flex justify-center gap-1.5 mt-3">
        {loveReasons.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="w-2 h-2 rounded-full transition-all duration-300 cursor-pointer"
            style={{
              background: i === index ? '#e91e63' : '#f8bbd0',
              transform: i === index ? 'scale(1.3)' : 'scale(1)',
            }}
          />
        ))}
      </div>
    </div>
  );
}

const noButtonTexts = [
  { text: "No", emoji: "" },
  { text: "Are you positive?", emoji: "😢" },
  { text: "Really really sure?", emoji: "🥺" },
  { text: "Think again!", emoji: "😭" },
  { text: "I will be very sad...", emoji: "😿" },
  { text: "You're breaking my heart!", emoji: "💔" },
  { text: "Last chance!", emoji: "😭" },
  { text: "Pretty please?", emoji: "🙏" },
  { text: "Don't do this...", emoji: "😢" },
  { text: "I'm gonna cry...", emoji: "😭" },
];

export default function ValentinePage() {
  const [noCount, setNoCount] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [isHoveringNo, setIsHoveringNo] = useState(false);
  const noBtnRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track flee position in a ref so mouse moves don't trigger re-renders
  const noPosRef = useRef({ x: 0, y: 0 });
  const targetPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const fleeInitializedRef = useRef(false);

  const RUN_AWAY_THRESHOLD = 5;
  const shouldRunAway = noCount >= RUN_AWAY_THRESHOLD;

  // ---- SIZING ----
  // Yes: starts at 1.1rem / 14px 36px → grows massively
  const yesFontSize = Math.min(1.1 + noCount * 0.55, 5.5);
  const yesPadV = Math.min(14 + noCount * 8, 48);
  const yesPadH = Math.min(36 + noCount * 22, 140);

  // No: starts at 1rem / 10px 28px → shrinks to ~0.55rem / 4px 10px
  const noFontSize = Math.max(1 - noCount * 0.09, 0.55);
  const noPadV = Math.max(10 - noCount * 1.5, 4);
  const noPadH = Math.max(28 - noCount * 4, 10);

  const handleNoClick = useCallback(() => {
    if (shouldRunAway) return;
    setNoCount((prev) => Math.min(prev + 1, noButtonTexts.length - 1));
  }, [shouldRunAway]);

  const handleYesClick = useCallback(() => {
    setAccepted(true);
  }, []);

  // ---- SMOOTH FLEE via requestAnimationFrame ----
  // When flee activates, place the button at center of screen initially
  useEffect(() => {
    if (shouldRunAway && !fleeInitializedRef.current && noBtnRef.current) {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const btn = noBtnRef.current;
      const bw = btn.offsetWidth;
      const bh = btn.offsetHeight;
      // Start at center
      noPosRef.current = { x: vw / 2 - bw / 2, y: vh / 2 - bh / 2 + 100 };
      targetPosRef.current = { ...noPosRef.current };
      btn.style.left = noPosRef.current.x + 'px';
      btn.style.top = noPosRef.current.y + 'px';
      fleeInitializedRef.current = true;
    }
  }, [shouldRunAway]);

  // Smooth animation loop — lerp current position toward target
  useEffect(() => {
    if (!shouldRunAway) return;

    const animate = () => {
      const btn = noBtnRef.current;
      if (!btn) return;

      const lerp = 0.12; // smoothing factor
      noPosRef.current.x += (targetPosRef.current.x - noPosRef.current.x) * lerp;
      noPosRef.current.y += (targetPosRef.current.y - noPosRef.current.y) * lerp;

      btn.style.left = noPosRef.current.x + 'px';
      btn.style.top = noPosRef.current.y + 'px';

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [shouldRunAway]);

  // Mouse move: compute flee target (no React state, no re-renders)
  useEffect(() => {
    if (!shouldRunAway) return;

    const getRandomSpot = (bw: number, bh: number, avoidX: number, avoidY: number) => {
      const pad = 40;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      // Pick random spots until we find one far from the cursor
      for (let i = 0; i < 20; i++) {
        const rx = pad + Math.random() * (vw - bw - pad * 2);
        const ry = pad + Math.random() * (vh - bh - pad * 2);
        const d = Math.sqrt((rx + bw / 2 - avoidX) ** 2 + (ry + bh / 2 - avoidY) ** 2);
        if (d > 250) return { x: rx, y: ry };
      }
      // Fallback: opposite quadrant of cursor
      return {
        x: avoidX < vw / 2 ? vw - bw - pad : pad,
        y: avoidY < vh / 2 ? vh - bh - pad : pad,
      };
    };

    const handleMouseMove = (e: MouseEvent) => {
      const btn = noBtnRef.current;
      if (!btn) return;

      const bw = btn.offsetWidth;
      const bh = btn.offsetHeight;
      const cx = noPosRef.current.x + bw / 2;
      const cy = noPosRef.current.y + bh / 2;

      const dx = cx - e.clientX;
      const dy = cy - e.clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const fleeRadius = 200;

      if (dist < fleeRadius && dist > 0) {
        // Check if we're near any edge (cornered)
        const pad = 40;
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const nearLeft = noPosRef.current.x < pad + 20;
        const nearRight = noPosRef.current.x > vw - bw - pad - 20;
        const nearTop = noPosRef.current.y < pad + 20;
        const nearBottom = noPosRef.current.y > vh - bh - pad - 20;
        const isNearEdge = (nearLeft || nearRight) && (nearTop || nearBottom);

        // If cornered or very close, teleport to a random safe spot
        if (isNearEdge || dist < 60) {
          const spot = getRandomSpot(bw, bh, e.clientX, e.clientY);
          targetPosRef.current = spot;
          // Jump instantly for teleport (skip lerp)
          noPosRef.current = { ...spot };
          return;
        }

        // Normal flee: push away with random angle jitter
        const baseAngle = Math.atan2(dy, dx);
        // Add random jitter: ±60 degrees so direction is unpredictable
        const jitter = (Math.random() - 0.5) * (Math.PI * 0.65);
        const angle = baseAngle + jitter;

        const strength = ((fleeRadius - dist) / fleeRadius) * 320;

        let newX = noPosRef.current.x + Math.cos(angle) * strength;
        let newY = noPosRef.current.y + Math.sin(angle) * strength;

        // Clamp within viewport
        newX = Math.max(pad, Math.min(vw - bw - pad, newX));
        newY = Math.max(pad, Math.min(vh - bh - pad, newY));

        targetPosRef.current = { x: newX, y: newY };
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [shouldRunAway]);

  const currentNoText = noButtonTexts[Math.min(noCount, noButtonTexts.length - 1)];

  return (
    <div
      ref={containerRef}
      className={`relative min-h-screen flex items-center justify-center ${!accepted ? 'overflow-hidden' : 'overflow-y-auto'}`}
      style={{
        background: accepted
          ? "linear-gradient(180deg, #e0f7fa 0%, #b2ebf2 25%, #80deea 50%, #b2ebf2 75%, #e0f7fa 100%)"
          : "linear-gradient(135deg, #fce4ec 0%, #f8bbd0 50%, #f48fb1 100%)",
      }}
    >
      <FloatingHearts />

      <AnimatePresence mode="wait">
        {!accepted ? (
          /* === QUESTION SCREEN === */
          <motion.div
            key="question"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, y: -50 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex flex-col items-center gap-4 px-6"
          >
            {/* Title */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-center"
              style={{ fontFamily: "'Bubblegum Sans', cursive", color: '#c2185b' }}
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Will you be my Valentine?{" "}
              <motion.span
                className="inline-block"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                💕
              </motion.span>
            </motion.h1>

            {/* Cat Character */}
            <motion.div
              className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52"
              animate={noCount > 0 || isHoveringNo ? {} : { y: [0, -10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <AnimatePresence mode="wait">
                {noCount > 0 || isHoveringNo ? (
                  <motion.div
                    key="sad"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={noCount > 2 ? "wiggle-animation" : ""}
                  >
                    <SadCat className="w-full h-full drop-shadow-lg" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="happy"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <HappyCat className="w-full h-full drop-shadow-lg" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Buttons — stacked vertically so growth doesn't cause overlap */}
            <div className="flex flex-col items-center gap-4 mt-2">
              {/* YES Button */}
              <motion.button
                onClick={handleYesClick}
                className="rounded-xl font-bold text-white shadow-lg cursor-pointer select-none"
                style={{
                  fontFamily: "'Bubblegum Sans', cursive",
                  fontSize: `${yesFontSize}rem`,
                  padding: `${yesPadV}px ${yesPadH}px`,
                  backgroundColor: '#4caf50',
                }}
                whileHover={{ scale: 1.06, backgroundColor: '#43a047' }}
                whileTap={{ scale: 0.95 }}
                layout
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                Yes
              </motion.button>

              {/* NO Button — inline when clickable, fixed+fleeing after threshold */}
              {!shouldRunAway && (
                <motion.button
                  ref={noBtnRef}
                  onClick={handleNoClick}
                  onMouseEnter={() => setIsHoveringNo(true)}
                  onMouseLeave={() => setIsHoveringNo(false)}
                  className="rounded-xl font-bold text-white shadow-lg cursor-pointer select-none whitespace-nowrap"
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    fontSize: `${noFontSize}rem`,
                    padding: `${noPadV}px ${noPadH}px`,
                    backgroundColor: noCount > 0 ? '#d32f2f' : '#ef5350',
                  }}
                  layout
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  {currentNoText.text} {currentNoText.emoji}
                </motion.button>
              )}
            </div>
          </motion.div>
        ) : (
          /* === CELEBRATION SCREEN === */
          <motion.div
            key="celebration"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 flex flex-col items-center gap-8 px-6 py-10 max-h-screen overflow-y-auto"
            style={{ scrollbarWidth: 'none' }}
          >
            <Confetti />

            {/* Celebration Title */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-center"
              style={{ fontFamily: "'Bubblegum Sans', cursive", color: '#c2185b' }}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Knew you would say yes!{" "}
              <motion.span
                className="inline-block"
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                🎉
              </motion.span>
            </motion.h1>

            {/* Celebration Characters */}
            <motion.div
              className="w-52 h-36 sm:w-72 sm:h-48"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <CelebrationCharacters className="w-full h-full drop-shadow-xl" />
              </motion.div>
            </motion.div>

            {/* Sub text */}
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-center"
              style={{ fontFamily: "'Bubblegum Sans', cursive", color: '#ad1457' }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              You just made me the happiest person!{" "}
              <motion.span
                className="inline-block"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                💕
              </motion.span>
            </motion.p>

            {/* Love Letter with typewriter effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="w-full max-w-md"
            >
              <TypewriterLetter />
            </motion.div>

            {/* Reasons I Love You carousel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="w-full max-w-md"
            >
              <ReasonsCarousel />
            </motion.div>

            {/* Extra floating hearts for celebration */}
            <div className="fixed inset-0 pointer-events-none z-0">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute text-lg sm:text-xl"
                  style={{
                    left: `${Math.random() * 90 + 5}%`,
                    top: `${Math.random() * 90 + 5}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.2, 0.5],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                  }}
                >
                  {['🐬', '🐠', '🐙', '🦀', '🫧', '🐚', '💕', '✨', '🌊'][Math.floor(Math.random() * 9)]}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Flee button — rendered as fixed overlay, completely outside normal layout */}
      {shouldRunAway && !accepted && (
        <button
          ref={noBtnRef}
          className="fixed rounded-xl font-bold text-white shadow-lg cursor-pointer select-none whitespace-nowrap"
          style={{
            fontFamily: "'Quicksand', sans-serif",
            fontSize: `${noFontSize}rem`,
            padding: `${noPadV}px ${noPadH}px`,
            backgroundColor: '#d32f2f',
            zIndex: 50,
            top: 0,
            left: 0,
            transition: 'none',
          }}
        >
          {currentNoText.text} {currentNoText.emoji}
        </button>
      )}
    </div>
  );
}