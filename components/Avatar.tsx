export default function Avatar() {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
      {/* Background Circle */}
      <circle cx="200" cy="200" r="190" fill="#18181B" />
      
      {/* Subtle Grid Pattern for Cyber Vibe */}
      <g stroke="#27272A" strokeWidth="1" opacity="0.5">
        <line x1="50" y1="0" x2="50" y2="400" />
        <line x1="100" y1="0" x2="100" y2="400" />
        <line x1="150" y1="0" x2="150" y2="400" />
        <line x1="250" y1="0" x2="250" y2="400" />
        <line x1="300" y1="0" x2="300" y2="400" />
        <line x1="350" y1="0" x2="350" y2="400" />
        
        <line x1="0" y1="50" x2="400" y2="50" />
        <line x1="0" y1="100" x2="400" y2="100" />
        <line x1="0" y1="150" x2="400" y2="150" />
        <line x1="0" y1="250" x2="400" y2="250" />
        <line x1="0" y1="300" x2="400" y2="300" />
        <line x1="0" y1="350" x2="400" y2="350" />
      </g>

      {/* Shoulders/Body */}
      <path d="M100 400C100 320 140 280 200 280C260 280 300 320 300 400" fill="#27272A" stroke="#3F3F46" strokeWidth="4" />
      
      {/* Neck */}
      <rect x="175" y="230" width="50" height="60" fill="#E4E4E7" />
      
      {/* Head */}
      <rect x="140" y="100" width="120" height="150" rx="40" fill="#F4F4F5" />
      
      {/* Hair (Minimalist) */}
      <path d="M130 140C130 90 160 80 200 80C240 80 270 90 270 140C270 160 260 170 250 170C240 170 240 150 240 150C240 150 220 120 200 120C180 120 160 150 160 150C160 150 160 170 150 170C140 170 130 160 130 140Z" fill="#09090B" />
      
      {/* Glasses (Cyber/Minimalist) */}
      <rect x="145" y="160" width="45" height="30" rx="8" fill="none" stroke="#10B981" strokeWidth="4" />
      <rect x="210" y="160" width="45" height="30" rx="8" fill="none" stroke="#10B981" strokeWidth="4" />
      <line x1="190" y1="175" x2="210" y2="175" stroke="#10B981" strokeWidth="4" />
      <line x1="130" y1="175" x2="145" y2="175" stroke="#10B981" strokeWidth="4" />
      <line x1="255" y1="175" x2="270" y2="175" stroke="#10B981" strokeWidth="4" />
      
      {/* Eyes (Reflections in glasses) */}
      <circle cx="167" cy="175" r="4" fill="#10B981" opacity="0.8" />
      <circle cx="232" cy="175" r="4" fill="#10B981" opacity="0.8" />

      {/* Mouth */}
      <path d="M185 215Q200 225 215 215" stroke="#A1A1AA" strokeWidth="3" strokeLinecap="round" fill="none" />
      
      {/* Cyber Accents */}
      <circle cx="200" cy="40" r="4" fill="#10B981" className="animate-pulse" />
      <line x1="200" y1="44" x2="200" y2="80" stroke="#10B981" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
    </svg>
  );
}
