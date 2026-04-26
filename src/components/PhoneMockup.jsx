// PhoneMockup.jsx — fully self-contained, zero broken images
// Uses picsum.photos with fixed seeds for reliable placeholder images
// + beautiful styled product cards as fallback if images still fail

import { useState, useEffect, useRef } from 'react'

// ─── Product data with reliable image URLs ────────────────────────────────────
// picsum.photos/seed/[name]/[w]/[h] always returns the same image for that seed
const PRODUCTS = [
  {
    id: 1,
    name: 'Strawberry Vanilla\nSparkling Tonic',
    brand: 'Olipop',
    score: 100,
    label: 'Excellent',
    dotColor: '#22c55e',
    cardBg: '#fde8ea',
    cardEmoji: '🍓',
    // picsum seed "olipop" → consistent pink-ish photo
    carouselImg: 'https://picsum.photos/seed/olipop/400/320',
    thumbImg:    'https://picsum.photos/seed/olipop/120/120',
    oliverSays: '"This drink\'s high score is thanks to its simple and wholesome ingredients like strawberry juice and natural fibers, with no harmful additives or processed sugars — making it a great choice for your kids while still feeling like a treat!"',
    breakdown: [{ label: 'Seed Oils', value: 'None', good: true }],
  },
  {
    id: 2,
    name: 'Cacao-nectar Bar,\nOregon Peppermint',
    brand: "Honey Mama's",
    score: 85,
    label: 'Excellent',
    dotColor: '#22c55e',
    cardBg: '#e8f0d8',
    cardEmoji: '🍫',
    carouselImg: 'https://picsum.photos/seed/honeymama/400/320',
    thumbImg:    'https://picsum.photos/seed/honeymama/120/120',
    oliverSays: '"This treat scored well mainly because it uses wholesome ingredients like raw local honey and organic coconut, but it still has processed sugars from the honey, which can be a concern. It\'s a nice occasional treat — just keep in mind the sugar content for your kids!"',
    breakdown: [{ label: 'Seed Oils', value: 'None', good: true }],
  },
  {
    id: 3,
    name: 'Fig and Olive Crackers,\nFig and Olive',
    brand: 'Lesley Stowe',
    score: 46,
    label: 'Avoid',
    dotColor: '#ef4444',
    cardBg: '#f5e8d8',
    cardEmoji: '🫒',
    carouselImg: 'https://picsum.photos/seed/figolive/400/320',
    thumbImg:    'https://picsum.photos/seed/figolive/120/120',
    oliverSays: '"This product\'s low score mainly comes from the processed sugars, like honey and brown sugar, which can impact your family\'s health. Additionally, there are several additives that aren\'t ideal — making this a choice to consider more carefully."',
    breakdown: [{ label: 'Seed Oils', value: 'None', good: true }],
  },
  {
    id: 4,
    name: 'Organic Whole Milk\nYogurt, Plain',
    brand: 'Stonyfield Farm',
    score: 92,
    label: 'Excellent',
    dotColor: '#22c55e',
    cardBg: '#e0f0f8',
    cardEmoji: '🥛',
    carouselImg: 'https://picsum.photos/seed/stonyfield/400/320',
    thumbImg:    'https://picsum.photos/seed/stonyfield/120/120',
    oliverSays: '"Great choice! This yogurt uses simple, clean ingredients — organic whole milk and live cultures. No added sugars, no artificial additives. The high protein and probiotics make it excellent for your family\'s gut health. Highly recommended!"',
    breakdown: [{ label: 'Seed Oils', value: 'None', good: true }],
  },
]

// ─── Animated score counter ───────────────────────────────────────────────────
function AnimatedScore({ score, dotColor, label, productId }) {
  const [count, setCount] = useState(0)
  const raf = useRef(null)

  useEffect(() => {
    setCount(0)
    let t0 = null
    const dur = 650

    function frame(ts) {
      if (!t0) t0 = ts
      const p = Math.min((ts - t0) / dur, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(ease * score))
      if (p < 1) raf.current = requestAnimationFrame(frame)
    }

    raf.current = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(raf.current)
  }, [productId, score])

  return (
    <div className="flex items-center gap-2 mt-2">
      <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: dotColor }} />
      <span className="font-black text-[18px] text-gray-900 leading-none tabular-nums">
        {count}/100
      </span>
      <span className="text-[12.5px] text-gray-400">{label}</span>
    </div>
  )
}

// ─── Reliable image with emoji fallback ──────────────────────────────────────
function ProductImage({ src, alt, emoji, bg, className, imgClass }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`${className} overflow-hidden`} style={{ background: failed ? bg : undefined }}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          className={imgClass || 'w-full h-full object-cover'}
          onError={() => setFailed(true)}
          crossOrigin="anonymous"
        />
      ) : (
        <div
          className="w-full h-full flex items-center justify-center"
          style={{ background: bg }}
        >
          <span style={{ fontSize: className?.includes('h-[190px]') ? '64px' : '32px' }}>
            {emoji}
          </span>
        </div>
      )}
    </div>
  )
}

// ─── Oliver mascot SVG ────────────────────────────────────────────────────────
function OliverIcon() {
  return (
    <svg viewBox="0 0 44 50" className="w-8 h-8 shrink-0" aria-hidden="true">
      <path d="M22 13 Q25 6 31 3" stroke="#3a7d2d" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
      <ellipse cx="32" cy="3.5" rx="5.5" ry="2.8" fill="#5aad40" transform="rotate(-20 32 3.5)"/>
      <ellipse cx="22" cy="32" rx="15" ry="16" fill="#3a7d2d"/>
      <ellipse cx="15" cy="24" rx="5" ry="6.5" fill="#4eab3c" opacity="0.3"/>
      <circle cx="16.5" cy="29.5" r="3.5" fill="white"/>
      <circle cx="27.5" cy="29.5" r="3.5" fill="white"/>
      <circle cx="17.5" cy="29.5" r="1.9" fill="#111"/>
      <circle cx="28.5" cy="29.5" r="1.9" fill="#111"/>
      <circle cx="18.2" cy="28.7" r="0.75" fill="white"/>
      <circle cx="29.2" cy="28.7" r="0.75" fill="white"/>
      <path d="M16.5 35.5 Q22 40 27.5 35.5" stroke="#1a2e1a" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <circle cx="12" cy="35" r="3" fill="#ffaaaa" opacity="0.4"/>
      <circle cx="32" cy="35" r="3" fill="#ffaaaa" opacity="0.4"/>
    </svg>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function PhoneMockup({ currentProduct, onProductChange }) {
  const [transitioning, setTransitioning] = useState(false)
  const [visible, setVisible] = useState(true)
  const [dir, setDir] = useState(1)

  const current = currentProduct ?? 0
  const total   = PRODUCTS.length
  const product = PRODUCTS[current]
  const prevIdx = (current - 1 + total) % total
  const nextIdx = (current + 1) % total

  function navigate(direction) {
    if (transitioning) return
    setTransitioning(true)
    setDir(direction)
    setVisible(false)
    setTimeout(() => {
      onProductChange?.((current + direction + total) % total)
      setVisible(true)
      setTransitioning(false)
    }, 200)
  }

  function goTo(idx) {
    if (transitioning || idx === current) return
    navigate(idx > current ? 1 : -1)
    // override target
    setTimeout(() => onProductChange?.(idx), 0)
  }

  const fade = {
    transition: 'opacity 0.2s ease, transform 0.2s ease',
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateX(0)' : `translateX(${dir > 0 ? '14px' : '-14px'})`,
  }

  return (
    // Outer wrapper: centers phone + positions ghost cards
    <div className="relative w-full flex justify-center items-end">

      {/* ══ LEFT GHOST CARDS ══ */}
      {/* Near-left */}
      <div
        className="hidden md:block absolute bottom-0 cursor-pointer"
        style={{ left: 'calc(50% - 240px)', width: 96, height: 120, zIndex: 2 }}
        onClick={() => navigate(-1)}
      >
        <div className="w-full h-full rounded-2xl overflow-hidden"
             style={{ opacity: 0.55, filter: 'blur(1px)' }}>
          <ProductImage
            src={PRODUCTS[prevIdx].carouselImg}
            alt=""
            emoji={PRODUCTS[prevIdx].cardEmoji}
            bg={PRODUCTS[prevIdx].cardBg}
            className="w-full h-full"
            imgClass="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Far-left */}
      <div
        className="hidden lg:block absolute bottom-0 cursor-pointer"
        style={{ left: 'calc(50% - 330px)', width: 75, height: 95, zIndex: 1 }}
        onClick={() => navigate(-1)}
      >
        <div className="w-full h-full rounded-2xl overflow-hidden"
             style={{ opacity: 0.35, filter: 'blur(2px)' }}>
          <ProductImage
            src={PRODUCTS[(current - 2 + total) % total].carouselImg}
            alt=""
            emoji={PRODUCTS[(current - 2 + total) % total].cardEmoji}
            bg={PRODUCTS[(current - 2 + total) % total].cardBg}
            className="w-full h-full"
            imgClass="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ══════════════════════════════════════════
            IPHONE FRAME
        ══════════════════════════════════════════ */}
      <div
        className="relative z-10 w-[310px] sm:w-[350px] shrink-0"
        style={{
          boxShadow: '0 32px 80px rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.08)',
          borderRadius: '44px',
        }}
      >
        {/* Outer ring — simulates metal frame */}
        <div
          className="bg-white"
          style={{
            borderRadius: '44px',
            border: '1px solid rgba(0,0,0,0.1)',
            overflow: 'hidden',
          }}
        >
          {/* ── Dynamic island ── */}
          <div className="bg-white flex justify-center items-center pt-3.5 pb-1">
            <div
              className="flex items-center justify-end pr-2.5 bg-black"
              style={{ width: 120, height: 28, borderRadius: 14 }}
            >
              <div className="w-3 h-3 rounded-full bg-[#1c1c1c]" />
            </div>
          </div>

          {/* ── CAROUSEL / IMAGE ZONE ── */}
          <div className="relative bg-[#ebebeb] overflow-hidden" style={{ height: 210 }}>

            {/* Blurred left peek — prev product */}
            <div
              className="absolute inset-y-0 left-0 cursor-pointer overflow-hidden"
              style={{ width: 75, zIndex: 5 }}
              onClick={() => navigate(-1)}
            >
              <ProductImage
                src={PRODUCTS[prevIdx].carouselImg}
                alt=""
                emoji={PRODUCTS[prevIdx].cardEmoji}
                bg={PRODUCTS[prevIdx].cardBg}
                className="w-full h-full"
                imgClass="w-full h-full object-cover"
              />
              {/* blur overlay */}
              <div className="absolute inset-0" style={{ backdropFilter: 'blur(3px)', background: 'rgba(235,235,235,0.4)' }} />
            </div>

            {/* Centre card — current product */}
            <div
              className="absolute inset-y-2 cursor-pointer overflow-hidden rounded-2xl shadow-md"
              style={{ left: 78, right: 78, zIndex: 10, ...fade }}
              onClick={() => navigate(1)}
            >
              <ProductImage
                src={product.carouselImg}
                alt={product.brand}
                emoji={product.cardEmoji}
                bg={product.cardBg}
                className="w-full h-[190px] rounded-2xl"
                imgClass="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Blurred right peek — next product */}
            <div
              className="absolute inset-y-0 right-0 cursor-pointer overflow-hidden"
              style={{ width: 75, zIndex: 5 }}
              onClick={() => navigate(1)}
            >
              <ProductImage
                src={PRODUCTS[nextIdx].carouselImg}
                alt=""
                emoji={PRODUCTS[nextIdx].cardEmoji}
                bg={PRODUCTS[nextIdx].cardBg}
                className="w-full h-full"
                imgClass="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ backdropFilter: 'blur(3px)', background: 'rgba(235,235,235,0.4)' }} />
            </div>

            {/* Dot indicators */}
            <div className="absolute bottom-2.5 inset-x-0 flex justify-center gap-1.5 z-20">
              {PRODUCTS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={e => { e.stopPropagation(); goTo(i) }}
                  style={{
                    height: 5,
                    width: i === current ? 20 : 5,
                    borderRadius: 999,
                    background: i === current ? '#555' : '#bbb',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>
          </div>

          {/* ── CARDS AREA (scrollable content) ── */}
          <div className="bg-[#f4f4f4] px-3 pt-3 pb-1 flex flex-col gap-2.5">

            {/* ── Product info card ── */}
            <div
              className="bg-white rounded-2xl border border-gray-100 shadow-sm"
              style={{ padding: '12px 14px', ...fade }}
            >
              <div className="flex items-start gap-3">

                {/* Thumbnail */}
                <div
                  className="shrink-0 rounded-xl overflow-hidden"
                  style={{ width: 68, height: 76 }}
                >
                  <ProductImage
                    src={product.thumbImg}
                    alt=""
                    emoji={product.cardEmoji}
                    bg={product.cardBg}
                    className="w-full h-full"
                    imgClass="w-full h-full object-cover"
                  />
                </div>

                {/* Text block */}
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-[13.5px] text-gray-900 leading-[1.3]">
                    {product.name.split('\n').map((line, i, arr) => (
                      <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                    ))}
                  </p>
                  <p className="text-[11.5px] text-gray-400 mt-0.5">{product.brand}</p>
                  <AnimatedScore
                    key={product.id}
                    productId={product.id}
                    score={product.score}
                    dotColor={product.dotColor}
                    label={product.label}
                  />
                </div>

                {/* Action icons */}
                <div className="flex gap-2.5 shrink-0 pt-0.5">
                  <button
                    type="button"
                    aria-label="Save"
                    className="text-gray-300 hover:text-red-400 transition-colors bg-transparent border-none cursor-pointer"
                  >
                    <svg viewBox="0 0 24 24" className="w-[20px] h-[20px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label="Share"
                    className="text-gray-300 hover:text-blue-400 transition-colors bg-transparent border-none cursor-pointer"
                  >
                    <svg viewBox="0 0 24 24" className="w-[20px] h-[20px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                      <polyline points="16 6 12 2 8 6"/>
                      <line x1="12" y1="2" x2="12" y2="15"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* ── Oliver Says card ── */}
            <div
              className="bg-white rounded-2xl border border-gray-100 shadow-sm"
              style={{ padding: '12px 14px', ...fade }}
            >
              <div className="flex items-center gap-2 mb-2">
                <OliverIcon />
                <span className="font-bold text-[13px] text-gray-900">Oliver Says:</span>
              </div>
              <p className="text-[11px] text-gray-500 leading-[1.7]">
                {product.oliverSays}
              </p>
            </div>

            {/* ── Breakdown ── */}
            <div style={fade}>
              <p className="font-bold text-[13.5px] text-gray-900 mb-2 px-0.5">
                Breakdown
              </p>
              {product.breakdown.map(row => (
                <div
                  key={row.label}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm mb-1.5 flex items-center justify-between"
                  style={{ padding: '10px 14px' }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[15px]">🌿</span>
                    <span className="text-[12px] text-gray-600 font-medium">{row.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="text-[10.5px] font-semibold rounded-full"
                      style={{
                        padding: '3px 12px',
                        background: row.good ? '#e6f4e0' : '#fee2e2',
                        color:      row.good ? '#3a7d2d' : '#dc2626',
                      }}
                    >
                      {row.value}
                    </span>
                    <span
                      className="w-3.5 h-3.5 rounded-full"
                      style={{ background: row.good ? '#22c55e' : '#ef4444' }}
                    />
                    <svg viewBox="0 0 20 20" className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M5 8l5 5 5-5"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Home indicator ── */}
          <div className="bg-[#f4f4f4] flex justify-center py-3">
            <div className="w-24 h-[5px] rounded-full bg-gray-200" />
          </div>
        </div>
      </div>

      {/* ══ RIGHT GHOST CARDS ══ */}
      {/* Near-right */}
      <div
        className="hidden md:block absolute bottom-0 cursor-pointer"
        style={{ right: 'calc(50% - 240px)', width: 96, height: 120, zIndex: 2 }}
        onClick={() => navigate(1)}
      >
        <div className="w-full h-full rounded-2xl overflow-hidden"
             style={{ opacity: 0.55, filter: 'blur(1px)' }}>
          <ProductImage
            src={PRODUCTS[nextIdx].carouselImg}
            alt=""
            emoji={PRODUCTS[nextIdx].cardEmoji}
            bg={PRODUCTS[nextIdx].cardBg}
            className="w-full h-full"
            imgClass="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Far-right */}
      <div
        className="hidden lg:block absolute bottom-0 cursor-pointer"
        style={{ right: 'calc(50% - 330px)', width: 75, height: 95, zIndex: 1 }}
        onClick={() => navigate(1)}
      >
        <div className="w-full h-full rounded-2xl overflow-hidden"
             style={{ opacity: 0.35, filter: 'blur(2px)' }}>
          <ProductImage
            src={PRODUCTS[(current + 2) % total].carouselImg}
            alt=""
            emoji={PRODUCTS[(current + 2) % total].cardEmoji}
            bg={PRODUCTS[(current + 2) % total].cardBg}
            className="w-full h-full"
            imgClass="w-full h-full object-cover"
          />
        </div>
      </div>

    </div>
  )
}
