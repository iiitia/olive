// Navbar.jsx — matches reference screenshot exactly
import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Solutions',   href: '#',              hasDropdown: true },
  { label: 'Features',    href: '#features',       hasDropdown: false },
  { label: 'Pricing',     href: '#pricing',        hasDropdown: false },
  { label: 'Blog',        href: '#',              hasDropdown: true },
  { label: 'Restaurants', href: '#',              hasDropdown: false },
  { label: 'Food',        href: '#',              hasDropdown: true },
]

// Full inline wordmark: mascot sits as the "O", then "live" follows in the same green
// viewBox is wide enough to fit the character + "live" text rendered as SVG paths
function OliveLogo({ size = 44 }) {
  // We render the whole wordmark as one SVG so the mascot IS the O
  // Mascot occupies x=0..52, then "live" text follows from x=50 onward
  return (
    <svg
      viewBox="0 0 210 60"
      height={size}
      aria-label="Olive"
      style={{ display: 'block' }}
    >
      {/* ── Mascot (the "O") centered at cx=26, cy=36, body r≈22 ── */}
      {/* Stem */}
      <path d="M26 14 Q30 5 37 3" stroke="#5aad40" strokeWidth="2.8" fill="none" strokeLinecap="round"/>
      {/* Leaf */}
      <ellipse cx="38" cy="3.5" rx="7" ry="3.5" fill="#5aad40" transform="rotate(-18 38 3.5)"/>
      {/* Body */}
      <ellipse cx="26" cy="36" rx="22" ry="22" fill="#5aad40"/>
      {/* Inner shine */}
      <ellipse cx="18" cy="27" rx="7" ry="9" fill="#7dc95e" opacity="0.45"/>
      {/* Eyes white */}
      <circle cx="20" cy="34" r="4.5" fill="white"/>
      <circle cx="32" cy="34" r="4.5" fill="white"/>
      {/* Pupils */}
      <circle cx="21" cy="34" r="2.4" fill="#1a2e1a"/>
      <circle cx="33" cy="34" r="2.4" fill="#1a2e1a"/>
      {/* Eye shine */}
      <circle cx="22" cy="33" r="1" fill="white"/>
      <circle cx="34" cy="33" r="1" fill="white"/>
      {/* Smile */}
      <path d="M20 41 Q26 47 32 41" stroke="#1a2e1a" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
      {/* Cheeks */}
      <circle cx="13" cy="40" r="4" fill="#ffaaaa" opacity="0.38"/>
      <circle cx="39" cy="40" r="4" fill="#ffaaaa" opacity="0.38"/>

      {/* ── "live" text — bold rounded, same green, baseline-aligned with body ── */}
      <text
        x="54"
        y="52"
        fontFamily="'Nunito', 'Poppins', 'Fredoka One', Arial Rounded MT Bold, Arial, sans-serif"
        fontSize="40"
        fontWeight="900"
        fill="#5aad40"
        letterSpacing="-0.5"
      >live</text>
    </svg>
  )
}

function ChevronDown() {
  return (
    <svg viewBox="0 0 12 12" className="w-3 h-3 opacity-40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M2 4l4 4 4-4" />
    </svg>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-5 lg:px-8 h-[68px] flex items-center justify-between gap-4">

        {/* Logo — mascot is the "O" in Olive */}
        <a href="#" className="flex items-center shrink-0" aria-label="Olive home">
          <OliveLogo size={46} />
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-7 flex-1 justify-center">
          {NAV_LINKS.map(({ label, href, hasDropdown }) => (
            <li key={label}>
              <a
                href={href}
                className="flex items-center gap-1 text-gray-700 font-medium text-[14px]
                           hover:text-[#3a7d2d] transition-colors duration-150 whitespace-nowrap"
              >
                {label}
                {hasDropdown && <ChevronDown />}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-5 shrink-0">
          <button
            type="button"
            className="text-gray-600 font-medium text-[14px] hover:text-[#3a7d2d] transition-colors cursor-pointer"
          >
            Sign in
          </button>

          <button
            type="button"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                       bg-[#1e3d1a] text-white font-semibold text-[14px]
                       hover:bg-[#2d5227] transition-all duration-200
                       shadow-sm hover:shadow-md active:scale-95 cursor-pointer"
          >
            Get Olive
            <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-gray-100 transition-colors"
        >
          <span className={`w-5 h-0.5 bg-gray-700 rounded transition-all duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`w-5 h-0.5 bg-gray-700 rounded transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`w-5 h-0.5 bg-gray-700 rounded transition-all duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-5 py-5 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}
              className="text-gray-700 font-medium text-base hover:text-[#3a7d2d] transition-colors">
              {label}
            </a>
          ))}
          <hr className="border-gray-100" />
          <button className="text-gray-700 font-medium text-left hover:text-[#3a7d2d] transition-colors">Sign in</button>
          <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full self-start bg-[#1e3d1a] text-white font-semibold text-sm hover:bg-[#2d5227] transition-all">
            Get Olive →
          </button>
        </div>
      )}
    </header>
  )
}
