export function MahvionLogo({ height = 96 }: { height?: number }) {
  return (
    <svg
      viewBox="0 0 200 210"
      style={{ height, width: 'auto', display: 'block' }}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Mahvion — Automate. Analyze. Scale."
    >
      <defs>
        {/* Orb fill */}
        <radialGradient id="ml-orb" cx="38%" cy="32%" r="68%">
          <stop offset="0%"   stopColor="#f0f4ff" stopOpacity="0.95" />
          <stop offset="18%"  stopColor="#a78bfa" />
          <stop offset="42%"  stopColor="#38bdf8" />
          <stop offset="72%"  stopColor="#0369a1" />
          <stop offset="100%" stopColor="#071e38" />
        </radialGradient>

        {/* Soft ambient glow behind orb */}
        <radialGradient id="ml-ambient" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#38bdf8" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </radialGradient>

        {/* Hand fill — dark blue tinted */}
        <linearGradient id="ml-hand" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#0f2d50" />
          <stop offset="100%" stopColor="#071828" />
        </linearGradient>

        {/* Wordmark gradient */}
        <linearGradient id="ml-word" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#ffffff" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>

        {/* Blur filters */}
        <filter id="ml-glow-lg" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
        <filter id="ml-glow-sm" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <filter id="ml-glow-text" x="-10%" y="-40%" width="120%" height="180%">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ── Ambient glow behind orb ─────────────────────────── */}
      <circle cx="100" cy="72" r="62" fill="url(#ml-ambient)" filter="url(#ml-glow-lg)" />

      {/* ── Halo rings ──────────────────────────────────────── */}
      <circle cx="100" cy="72" r="52" fill="none" stroke="#38bdf8" strokeWidth="0.5" opacity="0.18" />
      <circle cx="100" cy="72" r="58" fill="none" stroke="#38bdf8" strokeWidth="0.3" opacity="0.09" />

      {/* ── Circuit lines — LEFT ─────────────────────────────── */}
      <polyline points="60,66 32,66 32,52"       fill="none" stroke="#38bdf8" strokeWidth="0.9" strokeLinecap="round" opacity="0.65" />
      <circle cx="32" cy="52" r="2"  fill="#38bdf8" opacity="0.8" />
      <circle cx="32" cy="66" r="1.2" fill="#38bdf8" opacity="0.45" />

      <polyline points="62,57 40,42 38,32"        fill="none" stroke="#38bdf8" strokeWidth="0.7" strokeLinecap="round" opacity="0.45" />
      <circle cx="38" cy="32" r="1.8" fill="#38bdf8" opacity="0.6" />

      <polyline points="60,80 26,80 24,92"        fill="none" stroke="#06b6d4" strokeWidth="0.65" strokeLinecap="round" opacity="0.38" />
      <circle cx="24" cy="92" r="1.4" fill="#06b6d4" opacity="0.55" />

      {/* ── Circuit lines — RIGHT ────────────────────────────── */}
      <polyline points="140,66 168,66 168,52"     fill="none" stroke="#38bdf8" strokeWidth="0.9" strokeLinecap="round" opacity="0.65" />
      <circle cx="168" cy="52" r="2"  fill="#38bdf8" opacity="0.8" />
      <circle cx="168" cy="66" r="1.2" fill="#38bdf8" opacity="0.45" />

      <polyline points="138,57 160,42 162,32"      fill="none" stroke="#38bdf8" strokeWidth="0.7" strokeLinecap="round" opacity="0.45" />
      <circle cx="162" cy="32" r="1.8" fill="#38bdf8" opacity="0.6" />

      <polyline points="140,80 174,80 176,92"     fill="none" stroke="#06b6d4" strokeWidth="0.65" strokeLinecap="round" opacity="0.38" />
      <circle cx="176" cy="92" r="1.4" fill="#06b6d4" opacity="0.55" />

      {/* ── Circuit lines — TOP ──────────────────────────────── */}
      <line x1="100" y1="34" x2="100" y2="14"   stroke="#38bdf8" strokeWidth="0.65" opacity="0.38" strokeLinecap="round" />
      <circle cx="100" cy="14" r="1.6" fill="#38bdf8" opacity="0.55" />
      <line x1="88"  y1="36"  x2="70"  y2="16"  stroke="#38bdf8" strokeWidth="0.55" opacity="0.28" strokeLinecap="round" />
      <circle cx="70" cy="16" r="1.3" fill="#38bdf8" opacity="0.4" />
      <line x1="112" y1="36"  x2="130" y2="16"  stroke="#38bdf8" strokeWidth="0.55" opacity="0.28" strokeLinecap="round" />
      <circle cx="130" cy="16" r="1.3" fill="#38bdf8" opacity="0.4" />

      {/* ── Hand silhouette ──────────────────────────────────── */}
      {/* Thumb (left) */}
      <path
        d="M 68 110 Q 63 104 65 95 Q 67 87 73 85 Q 79 83 80 90 L 80 108 Z"
        fill="url(#ml-hand)" stroke="#1a4a7a" strokeWidth="0.6" opacity="0.95"
      />
      {/* Index finger */}
      <path
        d="M 80 108 L 80 76 Q 80 70 85 70 Q 90 70 90 76 L 90 108 Z"
        fill="url(#ml-hand)" stroke="#1a4a7a" strokeWidth="0.6" opacity="0.95"
      />
      {/* Middle finger */}
      <path
        d="M 90 108 L 90 73 Q 90 67 95 67 Q 100 67 100 73 L 100 108 Z"
        fill="url(#ml-hand)" stroke="#1a4a7a" strokeWidth="0.6" opacity="0.95"
      />
      {/* Ring finger */}
      <path
        d="M 100 108 L 100 74 Q 100 68 105 68 Q 110 68 110 74 L 110 108 Z"
        fill="url(#ml-hand)" stroke="#1a4a7a" strokeWidth="0.6" opacity="0.95"
      />
      {/* Pinky */}
      <path
        d="M 110 108 L 110 78 Q 110 73 115 73 Q 120 73 120 78 L 120 96 Q 121 105 125 110 Z"
        fill="url(#ml-hand)" stroke="#1a4a7a" strokeWidth="0.6" opacity="0.95"
      />
      {/* Palm base joining all fingers */}
      <path
        d="M 63 110 Q 65 118 72 122 Q 85 127 100 127 Q 115 127 128 122 Q 135 118 137 110 L 125 110 L 110 108 L 100 108 L 90 108 L 80 108 L 68 110 Z"
        fill="url(#ml-hand)" stroke="#1a4a7a" strokeWidth="0.5" opacity="0.95"
      />
      {/* Subtle sheen on palm */}
      <path
        d="M 78 112 Q 90 108 100 108 Q 112 108 122 112"
        fill="none" stroke="#38bdf8" strokeWidth="1" strokeLinecap="round" opacity="0.18"
      />

      {/* ── Orb shadow/depth behind ──────────────────────────── */}
      <circle cx="100" cy="74" r="42" fill="#071e38" filter="url(#ml-glow-sm)" opacity="0.6" />

      {/* ── Main orb ─────────────────────────────────────────── */}
      <circle cx="100" cy="72" r="38" fill="url(#ml-orb)" />

      {/* Globe latitude lines */}
      <ellipse cx="100" cy="72" rx="38" ry="13"  fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="0.7" />
      <ellipse cx="100" cy="72" rx="38" ry="24"  fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="0.7" />

      {/* Globe longitude lines */}
      <ellipse cx="100" cy="72" rx="13"  ry="38" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="0.7" />
      <ellipse cx="100" cy="72" rx="24"  ry="38" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="0.7" />

      {/* Specular highlight */}
      <ellipse cx="88" cy="60" rx="11" ry="7" fill="white" opacity="0.18" filter="url(#ml-glow-sm)" />
      <ellipse cx="85" cy="57" rx="5"  ry="3" fill="white" opacity="0.28" />

      {/* Violet core glow */}
      <circle cx="100" cy="70" r="9" fill="#a78bfa" opacity="0.35" filter="url(#ml-glow-sm)" />

      {/* ── Wordmark ─────────────────────────────────────────── */}
      <text
        x="100" y="152"
        textAnchor="middle"
        fontFamily="Inter, system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="27"
        fill="url(#ml-word)"
        letterSpacing="5"
        filter="url(#ml-glow-text)"
      >
        MAHVION
      </text>

      {/* ── Tagline ──────────────────────────────────────────── */}
      <line x1="14"  y1="168" x2="48"  y2="168" stroke="#22c55e" strokeWidth="1"   opacity="0.8" strokeLinecap="round" />
      <circle cx="50" cy="168" r="1.5" fill="#22c55e" opacity="0.8" />
      <text
        x="100" y="172"
        textAnchor="middle"
        fontFamily="Inter, system-ui, -apple-system, sans-serif"
        fontWeight="500"
        fontSize="8.5"
        fill="#06b6d4"
        letterSpacing="2.2"
        opacity="0.9"
      >
        AUTOMATE. ANALYZE. SCALE.
      </text>
      <circle cx="150" cy="168" r="1.5" fill="#22c55e" opacity="0.8" />
      <line x1="152" y1="168" x2="186" y2="168" stroke="#22c55e" strokeWidth="1"   opacity="0.8" strokeLinecap="round" />
    </svg>
  );
}
