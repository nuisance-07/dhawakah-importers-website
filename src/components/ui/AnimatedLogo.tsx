"use client";

import { motion } from "framer-motion";

export default function AnimatedLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        {/* Background sun/glow */}
        <circle cx="100" cy="100" r="80" fill="url(#sunGlow)" opacity="0.3" />
        
        {/* Waves Animation */}
        <motion.g
          animate={{ x: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          <path d="M-50 140 Q 0 120 50 140 T 150 140 T 250 140" stroke="#B8860B" strokeWidth="3" fill="none"/>
          <path d="M-50 155 Q 0 175 50 155 T 150 155 T 250 155" stroke="#DAA520" strokeWidth="4" fill="none" opacity="0.8"/>
          <path d="M-50 170 Q 0 150 50 170 T 150 170 T 250 170" stroke="#FFD700" strokeWidth="3" fill="none" opacity="0.6"/>
        </motion.g>

        {/* Ship Animation */}
        <motion.g
          animate={{ y: [-3, 3, -3], rotate: [-1, 1, -1] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          style={{ transformOrigin: "100px 120px" }}
        >
          {/* Ship Hull */}
          <path d="M30 110 L170 110 L155 140 L45 140 Z" fill="#111" stroke="#DAA520" strokeWidth="2"/>
          <path d="M30 110 L20 100 L40 110 Z" fill="#DAA520" />
          
          {/* Containers */}
          <rect x="55" y="85" width="20" height="25" fill="#8B0000" stroke="#DAA520" strokeWidth="1"/>
          <rect x="78" y="85" width="20" height="25" fill="#000080" stroke="#DAA520" strokeWidth="1"/>
          <rect x="101" y="85" width="20" height="25" fill="#006400" stroke="#DAA520" strokeWidth="1"/>
          <rect x="124" y="85" width="20" height="25" fill="#8B0000" stroke="#DAA520" strokeWidth="1"/>
          
          <rect x="65" y="60" width="20" height="25" fill="#000080" stroke="#DAA520" strokeWidth="1"/>
          <rect x="88" y="60" width="20" height="25" fill="#8B0000" stroke="#DAA520" strokeWidth="1"/>
          <rect x="111" y="60" width="20" height="25" fill="#006400" stroke="#DAA520" strokeWidth="1"/>

          {/* Bridge */}
          <rect x="145" y="70" width="20" height="40" fill="#333" stroke="#DAA520" strokeWidth="1.5"/>
          <rect x="150" y="60" width="10" height="10" fill="#DAA520"/>
          <path d="M150 75 L160 75" stroke="#FFF" strokeWidth="2"/>
          <path d="M150 85 L160 85" stroke="#FFF" strokeWidth="2"/>
        </motion.g>

        {/* Airplane Animation */}
        <motion.g
          animate={{ x: [-20, 20, -20], y: [10, -10, 10], rotate: [-2, 2, -2] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        >
          {/* Airplane Body */}
          <path d="M40 50 Q 80 40 120 20 Q 130 15 135 25 Q 120 40 40 60 Z" fill="#FFF" stroke="#DAA520" strokeWidth="2"/>
          {/* Wings */}
          <path d="M80 40 L110 10 L115 15 L95 40 Z" fill="#E5E5E5" stroke="#DAA520" strokeWidth="1.5"/>
          <path d="M70 45 L50 70 L55 75 L80 48 Z" fill="#CCC" stroke="#DAA520" strokeWidth="1.5"/>
          {/* Tail */}
          <path d="M45 55 L30 35 L35 30 L55 50 Z" fill="#E5E5E5" stroke="#DAA520" strokeWidth="1.5"/>
        </motion.g>

        <defs>
          <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#DAA520" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
