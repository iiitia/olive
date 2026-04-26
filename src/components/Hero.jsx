// Hero.jsx — matches reference screenshot exactly
// - Trust avatars + "Trusted by thousands of healthy families"
// - Giant Nunito Black headline
// - Subtitle paragraph
// - iOS button (dark pill) + "Join the Olive Community →" ghost link
// - PhoneMockup below, edge-to-edge, ghost cards on sides

import PhoneMockup from './PhoneMockup'

const AVATAR_URLS = [
  'https://i.pravatar.cc/40?img=11',
  'https://i.pravatar.cc/40?img=32',
  'https://i.pravatar.cc/40?img=47',
  'https://i.pravatar.cc/40?img=58',
]

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-white shrink-0" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53
               0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87
               -1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65
               .03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68
               4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13
               1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

export default function Hero({ currentProduct, onProductChange }) {
  function handleDownload() {
    alert('Download for iOS — Coming soon!')
  }

  function handleCommunity(e) {
    e.preventDefault()
    document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#eef5ec] flex flex-col items-center"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(58,125,45,0.07) 1px, transparent 1px)',
        backgroundSize: '26px 26px',
      }}
    >
      {/* ── Static top content: trust + headline + CTAs ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 pt-8 pb-6 w-full max-w-[800px] mx-auto">

        {/* Trust bar */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="flex -space-x-1.5" aria-label="Community members">
            {AVATAR_URLS.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                width={32}
                height={32}
                className="w-8 h-8 rounded-full border-2 border-[#eef5ec] object-cover"
                onError={e => { e.target.style.display = 'none' }}
              />
            ))}
            {/* +13k badge */}
            <div className="w-8 h-8 rounded-full border-2 border-[#eef5ec] bg-[#c2d98a]
                            flex items-center justify-center text-[8px] font-black text-[#2d4a1a]">
              13k+
            </div>
          </div>
          <p className="text-gray-500 text-[13px] font-medium">
            Trusted by thousands of healthy families
          </p>
        </div>

        {/* ── Headline — compact, semibold, tight line-height ── */}
        <h1
          className="font-display font-bold text-[#1e3d1a] leading-[1.08] tracking-[-0.3px] mb-4"
          style={{ fontSize: 'clamp(2rem, 5.5vw, 3.4rem)' }}
        >
          The Safest Way to<br />
          Shop for Groceries
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 text-[0.9rem] leading-[1.6] max-w-[400px] mb-6">
          Use the Olive Food Scanner App to Instantly Eliminate
          Harmful Ingredients from Your Family&apos;s Diet and Get
          Expert-Backed Food Insights
        </p>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-4">

          {/* Primary — Download for iOS */}
          <button
            type="button"
            onClick={handleDownload}
            className="inline-flex items-center gap-2 bg-[#1e3d1a] text-white font-semibold
                       text-[13.5px] px-5 py-[11px] rounded-full
                       hover:bg-[#2d5227] hover:-translate-y-0.5
                       transition-all duration-200 shadow-md hover:shadow-lg
                       active:scale-95 cursor-pointer"
          >
            <AppleIcon />
            Download for iOS
          </button>

          {/* Ghost — Join the Olive Community */}
          <a
            href="#community"
            onClick={handleCommunity}
            className="inline-flex items-center gap-1.5 text-[#1e3d1a] font-semibold
                       text-[13.5px] hover:gap-3 transition-all duration-200"
          >
            Join the Olive Community
            <svg
              viewBox="0 0 16 16"
              className="w-3.5 h-3.5 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── Phone mockup — full width with side ghost cards ── */}
      <div className="relative z-10 w-full flex justify-center items-end px-4 pb-0">
        <PhoneMockup
          currentProduct={currentProduct}
          onProductChange={onProductChange}
        />
      </div>
    </section>
  )
}
