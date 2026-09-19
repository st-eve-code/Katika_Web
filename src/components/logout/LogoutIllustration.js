export default function LogoutIllustration() {
  return (
    <svg viewBox="0 0 400 220" className="w-full max-w-md mx-auto" fill="none">
      {/* Ground line */}
      <line x1="20" y1="200" x2="380" y2="200" stroke="#333" strokeWidth="1.5" />

      {/* Plant */}
      <rect x="40" y="170" width="30" height="30" rx="2" stroke="#555" strokeWidth="1.5" />
      <path d="M55 170 C55 140 40 130 30 120 M55 170 C55 140 70 130 80 115 M55 170 C55 150 55 140 55 120"
        stroke="#555" strokeWidth="1.5" strokeLinecap="round" />

      {/* Closed door */}
      <rect x="120" y="60" width="70" height="140" rx="2" stroke="#666" strokeWidth="1.5" />
      <rect x="132" y="90" width="46" height="16" rx="1" stroke="#666" strokeWidth="1" transform="rotate(-4 132 90)" fill="#1a1a1a" />
      <text x="140" y="101" fontSize="9" fill="#888" transform="rotate(-4 140 101)">CLOSE</text>

      {/* Person leaving through closed door */}
      <circle cx="105" cy="130" r="8" stroke="#777" strokeWidth="1.5" />
      <path d="M105 138 L105 175 M105 145 L90 160 M105 145 L120 155 M105 175 L95 200 M105 175 L115 200"
        stroke="#777" strokeWidth="1.5" strokeLinecap="round" />

      {/* Open door frame (bright, active exit) */}
      <rect x="250" y="45" width="80" height="155" rx="2" stroke="#fff" strokeWidth="2" />
      <rect x="330" y="45" width="60" height="155" rx="2" stroke="#444" strokeWidth="1.5" />

      {/* Steps */}
      <rect x="330" y="175" width="60" height="10" fill="#2a2a2a" />
      <rect x="335" y="160" width="50" height="15" fill="#242424" />
      <rect x="340" y="145" width="45" height="15" fill="#1e1e1e" />

      {/* Person walking out, arms raised */}
      <circle cx="270" cy="115" r="9" stroke="#fff" strokeWidth="1.5" />
      <path d="M270 124 L270 165 M270 130 L255 105 M270 130 L285 105 M270 165 L258 200 M270 165 L282 200"
        stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}