// Footer.jsx — site footer with brand blurb, nav links, and social icons

const FOOTER_LINKS = {
  Product:  ['Features', 'How it works', 'Pricing', 'Changelog'],
  Company:  ['About', 'Blog', 'Careers', 'Press'],
  Legal:    ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
}

const SOCIAL_ICONS = [
  {
    label: 'X (Twitter)',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.258 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    label: 'LinkedIn',
    path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
    isStroke: true,
  },
  {
    label: 'Instagram',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z',
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#eef5ec] border-t border-olive-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">

        {/* Top row: brand + link columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <svg viewBox="0 0 210 60" height="38" aria-label="Olive" style={{ display: 'block' }}>
                <path d="M26 14 Q30 5 37 3" stroke="#5aad40" strokeWidth="2.8" fill="none" strokeLinecap="round"/>
                <ellipse cx="38" cy="3.5" rx="7" ry="3.5" fill="#5aad40" transform="rotate(-18 38 3.5)"/>
                <ellipse cx="26" cy="36" rx="22" ry="22" fill="#5aad40"/>
                <ellipse cx="18" cy="27" rx="7" ry="9" fill="#7dc95e" opacity="0.45"/>
                <circle cx="20" cy="34" r="4.5" fill="white"/>
                <circle cx="32" cy="34" r="4.5" fill="white"/>
                <circle cx="21" cy="34" r="2.4" fill="#1a2e1a"/>
                <circle cx="33" cy="34" r="2.4" fill="#1a2e1a"/>
                <circle cx="22" cy="33" r="1" fill="white"/>
                <circle cx="34" cy="33" r="1" fill="white"/>
                <path d="M20 41 Q26 47 32 41" stroke="#1a2e1a" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
                <circle cx="13" cy="40" r="4" fill="#ffaaaa" opacity="0.38"/>
                <circle cx="39" cy="40" r="4" fill="#ffaaaa" opacity="0.38"/>
                <text x="54" y="52" fontFamily="'Nunito','Poppins',Arial,sans-serif" fontSize="40" fontWeight="900" fill="#5aad40" letterSpacing="-0.5">live</text>
              </svg>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed max-w-xs mb-6">
              The safest way to shop for groceries — transparent, local, and always fresh.
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5">
              {SOCIAL_ICONS.map(({ label, path, isStroke }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-olive-200
                             flex items-center justify-center text-olive-600
                             hover:bg-olive-700 hover:text-white hover:border-olive-700
                             transition-all duration-200"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill={isStroke ? 'none' : 'currentColor'} stroke={isStroke ? 'currentColor' : 'none'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h4 className="font-bold text-xs text-olive-900 mb-4 uppercase tracking-[0.12em]">
                {group}
              </h4>
              <ul className="space-y-2.5" role="list">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-olive-700 transition-colors duration-150"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-olive-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Olive, Inc. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 flex items-center gap-1">
            Made with <span className="text-olive-500 text-sm">♥</span> for conscious shoppers everywhere
          </p>
        </div>
      </div>
    </footer>
  )
}
