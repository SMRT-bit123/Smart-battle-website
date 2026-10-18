import React from 'react';

interface SmartBattleLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const SmartBattleLogo: React.FC<SmartBattleLogoProps> = ({
  className = '',
  size = 44,
  showText = false,
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* 
        Exact SMART BATTLE Circular Esports Logo
        Recreated faithfully from the official SMART BATTLE emblem:
        - Outer electric cyan neon glowing circular border
        - Deep black/navy circular emblem disc
        - Stylized athletic white "S" and electric cyan-blue "B" monogram
        - Centered cyan gamepad controller with button accents
        - "SMART" in bold crisp white
        - "BATTLE" in bold electric cyan
      */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105 drop-shadow-[0_0_12px_rgba(0,210,255,0.35)]"
        role="img"
        aria-label="SMART BATTLE Logo"
      >
        <defs>
          {/* Neon Ring Gradient */}
          <linearGradient id="neonRing" x1="10" y1="20" x2="190" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00f5ff" />
            <stop offset="50%" stopColor="#0099ff" />
            <stop offset="100%" stopColor="#00d2ff" />
          </linearGradient>

          {/* Disc Background Gradient */}
          <radialGradient id="discBg" cx="100" cy="90" r="95" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#08142b" />
            <stop offset="65%" stopColor="#030712" />
            <stop offset="100%" stopColor="#010308" />
          </radialGradient>

          {/* Electric Blue "B" Gradient */}
          <linearGradient id="blueB" x1="80" y1="35" x2="175" y2="125" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="35%" stopColor="#00d2ff" />
            <stop offset="70%" stopColor="#0084ff" />
            <stop offset="100%" stopColor="#0055d4" />
          </linearGradient>

          {/* 3D Depth Shadow for B */}
          <linearGradient id="shadowB" x1="100" y1="50" x2="160" y2="130" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#003580" />
            <stop offset="100%" stopColor="#001844" />
          </linearGradient>

          {/* Gamepad Gradient */}
          <linearGradient id="gamepadGrad" x1="70" y1="95" x2="130" y2="135" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00f5ff" />
            <stop offset="50%" stopColor="#00b4d8" />
            <stop offset="100%" stopColor="#0077b6" />
          </linearGradient>

          {/* Controller Shadow */}
          <filter id="padGlow" x="60" y="90" width="80" height="50" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#00d2ff" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* 1. Outer Circular Base Disc */}
        <circle cx="100" cy="100" r="95" fill="url(#discBg)" />

        {/* 2. Neon Cyan Outer Ring (with double border accent) */}
        <circle
          cx="100"
          cy="100"
          r="93"
          stroke="url(#neonRing)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle
          cx="100"
          cy="100"
          r="89.5"
          stroke="#00f0ff"
          strokeWidth="0.8"
          opacity="0.3"
        />

        {/* Subtle internal cyan ambient glow behind the monogram */}
        <circle cx="105" cy="80" r="55" fill="#00b4d8" opacity="0.08" />

        {/* ======================================================== */}
        {/* 3. THE "B" MONOGRAM (Electric Blue Gradient with 3D Cut) */}
        {/* ======================================================== */}
        <g id="letter-B">
          {/* 3D Shadow layer behind B */}
          <path
            d="M 80 57
               L 125 51
               C 152 51, 166 63, 163 80
               C 161 91, 153 97, 142 101
               C 158 104, 171 116, 168 132
               C 164 149, 148 159, 122 160
               L 80 160
               L 80 57 Z"
            fill="url(#shadowB)"
            transform="translate(4, 4) scale(0.92)"
          />

          {/* Main Blue "B" Body */}
          <path
            d="M 78 54
               L 128 48
               C 155 48, 170 61, 167 79
               C 165 91, 156 98, 143 102
               C 160 106, 172 118, 169 135
               C 165 153, 148 163, 120 164
               L 75 164
               L 83 140
               L 118 140
               C 134 140, 144 134, 146 123
               C 147 113, 139 107, 124 107
               L 95 107
               L 102 87
               L 124 87
               C 137 87, 144 82, 146 73
               C 147 64, 140 59, 126 59
               L 90 62
               Z"
            fill="url(#blueB)"
            transform="translate(1, -2) scale(0.96)"
          />

          {/* Upper Cutout Hole in "B" */}
          <path
            d="M 106 68
               L 126 66
               C 135 66, 142 70, 141 77
               C 140 83, 134 87, 125 87
               L 101 87
               Z"
            fill="#050a18"
            transform="translate(1, -2) scale(0.96)"
          />

          {/* Lower Cutout Hole in "B" */}
          <path
            d="M 100 112
               L 125 112
               C 135 112, 143 117, 142 125
               C 140 134, 132 139, 121 139
               L 93 139
               Z"
            fill="#050a18"
            transform="translate(1, -2) scale(0.96)"
          />
        </g>

        {/* ======================================================== */}
        {/* 4. THE "S" MONOGRAM (Crisp White with Dynamic Cuts)     */}
        {/* ======================================================== */}
        <g id="letter-S">
          {/* Subtle Dark Shadow under S */}
          <path
            d="M 116 27
               L 45 42
               C 33 44, 28 53, 30 64
               C 32 75, 41 81, 57 85
               L 83 91
               C 96 94, 101 99, 99 107
               C 97 116, 88 122, 73 124
               L 25 125
               L 20 144
               L 72 144
               C 99 144, 118 132, 122 112
               C 125 96, 115 86, 96 82
               L 72 76
               C 58 73, 53 69, 54 62
               C 56 55, 63 51, 75 50
               L 119 46
               Z"
            fill="#081022"
            transform="translate(3, 3)"
            opacity="0.8"
          />

          {/* Main Pure White "S" Shape */}
          <path
            d="M 117 24
               L 44 38
               C 32 40, 27 50, 29 61
               C 31 72, 40 78, 56 82
               L 84 88
               C 97 91, 102 96, 100 105
               C 98 114, 88 120, 73 122
               L 24 123
               L 19 142
               L 72 142
               C 100 142, 119 130, 123 110
               C 126 94, 116 84, 96 80
               L 70 74
               C 56 71, 51 67, 52 59
               C 54 52, 62 48, 75 47
               L 121 42
               Z"
            fill="#FFFFFF"
          />

          {/* Metallic Silver Bevel Accent along lower edge of S */}
          <path
            d="M 19 142
               L 72 142
               C 100 142, 119 130, 123 110
               L 118 110
               C 114 126, 97 137, 72 137
               L 24 137
               Z"
            fill="#cbd5e1"
            opacity="0.9"
          />

          {/* Angular Sharp Slice at the top wing tip of S */}
          <polygon
            points="117,24 125,41 106,37"
            fill="#f1f5f9"
          />
        </g>

        {/* ======================================================== */}
        {/* 5. THE GAMEPAD CONTROLLER (Centered beneath Monogram)    */}
        {/* ======================================================== */}
        <g id="gamepad" filter="url(#padGlow)" transform="translate(68, 96)">
          {/* Controller Body Shell */}
          <path
            d="M 16 7
               C 22 2, 42 2, 48 7
               C 56 8, 64 16, 62 26
               C 60 36, 52 40, 46 36
               C 42 33, 40 27, 36 27
               C 32 27, 30 33, 26 36
               C 20 40, 12 36, 10 26
               C 8 16, 16 8, 16 7 Z"
            fill="url(#gamepadGrad)"
            stroke="#00f5ff"
            strokeWidth="1.2"
          />

          {/* Upper Bridge / Bumpers */}
          <path
            d="M 22 5 L 42 5"
            stroke="#e0f2fe"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Left D-PAD (Dark Cross on left grip) */}
          <g transform="translate(18, 16)">
            <rect x="3" y="0" width="3" height="9" rx="1" fill="#040814" />
            <rect x="0" y="3" width="9" height="3" rx="1" fill="#040814" />
            <circle cx="4.5" cy="4.5" r="1.2" fill="#00d2ff" />
          </g>

          {/* Right Action Buttons (4 Dots on right grip) */}
          <g transform="translate(42, 16)">
            <circle cx="4.5" cy="1.5" r="1.4" fill="#FFFFFF" />
            <circle cx="1.5" cy="4.5" r="1.4" fill="#FFFFFF" />
            <circle cx="7.5" cy="4.5" r="1.4" fill="#FFFFFF" />
            <circle cx="4.5" cy="7.5" r="1.4" fill="#FFFFFF" />
          </g>

          {/* Dual Thumbsticks in Lower Center */}
          <circle cx="27" cy="24" r="3.2" fill="#030712" stroke="#00d2ff" strokeWidth="0.8" />
          <circle cx="37" cy="24" r="3.2" fill="#030712" stroke="#00d2ff" strokeWidth="0.8" />
        </g>

        {/* ======================================================== */}
        {/* 6. TYPOGRAPHY: "SMART" (White) & "BATTLE" (Cyan)         */}
        {/* ======================================================== */}
        <g id="brand-text">
          {/* "SMART" in bold, heavy geometric sans-serif (White) */}
          <text
            x="100"
            y="157"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="'Outfit', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="21"
            letterSpacing="2.5"
            style={{ textTransform: 'uppercase' }}
          >
            SMART
          </text>

          {/* "BATTLE" in bold geometric sans-serif (Electric Cyan) */}
          <text
            x="100"
            y="178"
            textAnchor="middle"
            fill="#00e5ff"
            fontFamily="'Outfit', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="19.5"
            letterSpacing="3"
            style={{ textTransform: 'uppercase' }}
          >
            BATTLE
          </text>
        </g>
      </svg>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-extrabold tracking-wider text-white text-base sm:text-lg uppercase">
            SMART BATTLE
          </span>
          <span className="text-[9px] font-semibold tracking-widest text-cyan-400 uppercase mt-0.5">
            Esports Arena
          </span>
        </div>
      )}
    </div>
  );
};
