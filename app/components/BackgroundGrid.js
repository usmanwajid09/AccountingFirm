export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden opacity-[0.04] w-full h-full">
      {/* 1. Infinite repeating coordinate grid */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hud-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#00f5d4" strokeWidth="0.8" />
            <circle cx="60" cy="60" r="1.5" fill="#00f5d4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hud-grid)" />
      </svg>

      {/* 2. Abstract HUD overlays */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" fill="none" stroke="currentColor">
        {/* Top Left radar circle */}
        <circle cx="150" cy="150" r="100" stroke="#00f5d4" strokeWidth="0.5" />
        <circle cx="150" cy="150" r="220" stroke="#00f5d4" strokeWidth="0.5" strokeDasharray="4, 6" />
        <line x1="150" y1="20" x2="150" y2="280" stroke="#00f5d4" strokeWidth="0.5" />
        <line x1="20" y1="150" x2="280" y2="150" stroke="#00f5d4" strokeWidth="0.5" />

        {/* Bottom Right HUD rings */}
        <circle cx="1770" cy="930" r="180" stroke="#0ae885" strokeWidth="0.5" />
        <circle cx="1770" cy="930" r="300" stroke="#0ae885" strokeWidth="0.5" strokeDasharray="8, 8" />
        <path d="M 1550 930 A 220 220 0 0 1 1770 710" stroke="#00f5d4" strokeWidth="1.5" />
        <path d="M 1770 1150 A 220 220 0 0 1 1990 930" stroke="#00f5d4" strokeWidth="1.5" />

        {/* Center horizontal axis */}
        <line x1="0" y1="540" x2="1920" y2="540" stroke="#00f5d4" strokeWidth="0.5" strokeDasharray="20, 20" />
      </svg>
    </div>
  );
}
