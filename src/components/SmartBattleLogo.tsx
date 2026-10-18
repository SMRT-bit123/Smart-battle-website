import React from 'react';

interface SmartBattleLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const SmartBattleLogo: React.FC<SmartBattleLogoProps> = ({
  className = '',
  size = 40,
  showText = false,
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Precision Esports Emblem SVG */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
        role="img"
        aria-label="SMART BATTLE Esports Logo"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="shieldGrad" x1="10" y1="5" x2="90" y2="95" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="50%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#090d16" />
          </linearGradient>

          <linearGradient id="cyberBlue" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="50%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>

          <linearGradient id="cyanAccent" x1="30" y1="20" x2="70" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>

          <linearGradient id="bladeGrad" x1="50" y1="10" x2="50" y2="90" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>

        {/* Outer Hexagonal Shield Outline */}
        <polygon
          points="50,4 92,20 84,72 50,96 16,72 8,20"
          fill="url(#shieldGrad)"
          stroke="#1e40af"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Inner Tactical Border */}
        <polygon
          points="50,11 85,25 78,67 50,88 22,67 15,25"
          fill="#070c18"
          stroke="url(#cyberBlue)"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        {/* Left Angular Wing */}
        <path
          d="M24,30 L42,30 L36,54 L20,44 Z"
          fill="url(#cyberBlue)"
          opacity="0.9"
        />
        <path
          d="M20,48 L34,57 L28,70 L18,60 Z"
          fill="url(#cyanAccent)"
          opacity="0.8"
        />

        {/* Right Angular Wing */}
        <path
          d="M76,30 L58,30 L64,54 L80,44 Z"
          fill="url(#cyberBlue)"
          opacity="0.9"
        />
        <path
          d="M80,48 L66,57 L72,70 L82,60 Z"
          fill="url(#cyanAccent)"
          opacity="0.8"
        />

        {/* Center Battle Core - Diamond & Sword Apex */}
        <polygon
          points="50,16 61,34 50,42 39,34"
          fill="#ffffff"
        />
        <polygon
          points="50,42 63,52 50,78 37,52"
          fill="url(#bladeGrad)"
          stroke="#38bdf8"
          strokeWidth="1"
        />

        {/* Tactical Crosshair / Apex Cut */}
        <line x1="50" y1="24" x2="50" y2="70" stroke="#070c18" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="39" y1="47" x2="61" y2="47" stroke="#070c18" strokeWidth="2.2" strokeLinecap="round" />

        {/* Core Power Accent */}
        <circle cx="50" cy="47" r="3.2" fill="#ffffff" />
        <circle cx="50" cy="47" r="1.5" fill="#1d4ed8" />
      </svg>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-extrabold tracking-wider text-white text-base sm:text-lg uppercase">
            SMART BATTLE
          </span>
          <span className="text-[9px] font-semibold tracking-widest text-blue-400 uppercase mt-0.5">
            Esports Arena
          </span>
        </div>
      )}
    </div>
  );
};
