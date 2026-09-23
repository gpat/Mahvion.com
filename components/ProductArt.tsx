import type { LucideIcon } from 'lucide-react';
import { Car, Stethoscope, ShieldCheck, Building2, Target } from 'lucide-react';

export const productIcons: Record<string, LucideIcon> = { Car, Stethoscope, ShieldCheck, Building2, Target };

/* Industry-specific SVG line art for each product */
function VehicleLines() {
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      {/* Road perspective lines */}
      <line x1="200" y1="260" x2="50"  y2="80"  stroke="white" strokeWidth="1.5" strokeDasharray="8 6" opacity="0.5"/>
      <line x1="200" y1="260" x2="350" y2="80"  stroke="white" strokeWidth="1.5" strokeDasharray="8 6" opacity="0.5"/>
      <line x1="200" y1="260" x2="200" y2="60"  stroke="white" strokeWidth="1"   strokeDasharray="10 8" opacity="0.35"/>
      {/* Speedometer arcs */}
      <path d="M 200 180 m -90 0 a 90 90 0 0 1 180 0" stroke="white" strokeWidth="1.5" opacity="0.3" fill="none"/>
      <path d="M 200 180 m -60 0 a 60 60 0 0 1 120 0" stroke="white" strokeWidth="1" opacity="0.2" fill="none"/>
      {/* VIN grid */}
      {[0,1,2,3].map(r => [0,1,2,3,4,5].map(c => (
        <rect key={`${r}-${c}`} x={10+c*65} y={10+r*30} width="55" height="22" rx="3"
          stroke="white" strokeWidth="0.5" opacity="0.12" fill="none"/>
      )))}
    </svg>
  );
}

function MedscribeLines() {
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      {/* ECG heartbeat line */}
      <polyline
        points="0,130 60,130 80,130 95,60 110,200 125,130 145,130 165,100 185,160 200,130 400,130"
        stroke="white" strokeWidth="2" opacity="0.45" fill="none" strokeLinecap="round" strokeLinejoin="round"
      />
      {/* Medical cross */}
      <rect x="178" y="40"  width="44" height="14" rx="7" fill="white" opacity="0.12"/>
      <rect x="192" y="26"  width="14" height="44" rx="7" fill="white" opacity="0.12"/>
      {/* Horizontal ruled lines (note lines) */}
      {[170,188,206,224,242].map(y => (
        <line key={y} x1="20" y1={y} x2="380" y2={y} stroke="white" strokeWidth="0.5" opacity="0.12"/>
      ))}
      {/* Waveform dots */}
      {[60,95,110,125,145,165,185,200].map((x, i) => (
        <circle key={i} cx={x} cy={i % 2 === 0 ? 130 : (i < 4 ? 60 : 100)} r="3" fill="white" opacity="0.3"/>
      ))}
    </svg>
  );
}

function InsuranceLines() {
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      {/* Shield outline */}
      <path d="M200 20 L330 70 L330 160 Q330 230 200 260 Q70 230 70 160 L70 70 Z"
        stroke="white" strokeWidth="1.5" opacity="0.18" fill="none"/>
      <path d="M200 45 L305 85 L305 158 Q305 215 200 238 Q95 215 95 158 L95 85 Z"
        stroke="white" strokeWidth="1" opacity="0.1" fill="none"/>
      {/* Network nodes */}
      {[[200,130],[120,90],[280,90],[100,180],[300,180],[200,220]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="6" fill="white" opacity="0.2"/>
      ))}
      {/* Network lines */}
      {[[200,130,120,90],[200,130,280,90],[200,130,100,180],[200,130,300,180],[200,130,200,220]].map(([x1,y1,x2,y2],i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="1" opacity="0.15" strokeDasharray="4 3"/>
      ))}
      {/* Check mark */}
      <polyline points="165,130 190,155 240,105" stroke="white" strokeWidth="3" opacity="0.3"
        fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function RealEstateLines() {
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      {/* Blueprint grid */}
      {[0,1,2,3,4,5,6,7,8].map(c => (
        <line key={`v${c}`} x1={c*50} y1="0" x2={c*50} y2="260" stroke="white" strokeWidth="0.4" opacity="0.1"/>
      ))}
      {[0,1,2,3,4,5].map(r => (
        <line key={`h${r}`} x1="0" y1={r*52} x2="400" y2={r*52} stroke="white" strokeWidth="0.4" opacity="0.1"/>
      ))}
      {/* Building silhouette */}
      <rect x="130" y="60"  width="140" height="180" stroke="white" strokeWidth="1.5" opacity="0.25" fill="none"/>
      <rect x="155" y="30"  width="90"  height="50"  stroke="white" strokeWidth="1"   opacity="0.2"  fill="none"/>
      <rect x="175" y="10"  width="50"  height="30"  stroke="white" strokeWidth="1"   opacity="0.15" fill="none"/>
      {/* Windows grid */}
      {[0,1,2,3].map(r => [0,1,2].map(c => (
        <rect key={`w${r}${c}`} x={145+c*38} y={80+r*40} width="22" height="22" rx="2"
          stroke="white" strokeWidth="0.8" opacity="0.18" fill="none"/>
      )))}
      {/* Door */}
      <rect x="183" y="198" width="34" height="42" rx="2" stroke="white" strokeWidth="1" opacity="0.25" fill="none"/>
    </svg>
  );
}

function LeadLines() {
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      {/* Incoming lead sources */}
      {[40, 90, 140, 190].map((y, i) => (
        <g key={y}>
          <circle cx="30" cy={y} r="9" stroke="white" strokeWidth="1" opacity="0.35" />
          <path d={`M42 ${y} C 110 ${y}, 120 130, 170 130`} stroke="white" strokeWidth="1" opacity={0.18 + i * 0.04} />
        </g>
      ))}
      {/* Funnel */}
      <path d="M170 70 L290 70 L250 130 L250 200 L210 220 L210 130 Z" stroke="white" strokeWidth="1.2" opacity="0.35" fill="none" />
      <line x1="185" y1="95" x2="275" y2="95" stroke="white" strokeWidth="1" opacity="0.2" />
      <line x1="200" y1="115" x2="262" y2="115" stroke="white" strokeWidth="1" opacity="0.2" />
      {/* Closed deal */}
      <path d="M250 180 L330 180" stroke="white" strokeWidth="1" opacity="0.3" />
      <circle cx="350" cy="180" r="16" stroke="white" strokeWidth="1.2" opacity="0.4" />
      <path d="M342 180 L348 186 L359 174" stroke="white" strokeWidth="1.5" opacity="0.5" />
    </svg>
  );
}

export const lineArt: Record<string, React.ComponentType> = {
  'vehicle-erp': VehicleLines,
  'medscribe': MedscribeLines,
  'insurance': InsuranceLines,
  'real-estate': RealEstateLines,
  'lead-crm': LeadLines,
};

/* Gradient accent colors per product for the article background glow */
export const glowColor: Record<string, string> = {
  'vehicle-erp':  'rgba(99,102,241,0.12)',
  'medscribe':    'rgba(16,185,129,0.10)',
  'insurance':    'rgba(245,158,11,0.10)',
  'real-estate':  'rgba(236,72,153,0.10)',
  'lead-crm':     'rgba(14,165,233,0.10)',
};
