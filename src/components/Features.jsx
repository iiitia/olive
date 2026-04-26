// Features.jsx — Health Benefits section matching oliveapp.com screenshots
import { useState, useEffect, useRef } from 'react'

function useCountUp(target, duration = 1200, trigger = true) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    if (!trigger) return
    setVal(0)
    let start = null
    function step(ts) {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(eased * target))
      if (p < 1) ref.current = requestAnimationFrame(step)
    }
    ref.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(ref.current)
  }, [target, trigger])
  return val
}

function useIntersection(threshold = 0.3) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

const COMPARISON_ROWS = [
  { label: 'Detailed Product Breakdown', olive: true, carrot: true, b: true },
  { label: 'Comprehensive Water Data', olive: true, carrot: false, b: false },
  { label: 'Seed Oil Free Dining Map', olive: true, carrot: false, b: false },
  { label: 'Seed Oil Flagging', olive: true, carrot: false, b: true },
  { label: 'Certified Lab-Testing Data', olive: true, carrot: false, b: false },
  { label: 'AI Personalized Insights', olive: true, carrot: true, b: false },
]

const BENEFIT_BULLETS = [
  'Olive breaks down every ingredient into clear, actionable information.',
  'Olive scores products out of 100 based on additives, seed oils, processing level, and detected toxins.',
  'Our ranking system is designed by registered holistic health experts, ensuring you and your family make informed decisions and improve health outcomes.',
]

const FILTER_TAGS = [
  { label: 'High Fibre', good: true }, { label: 'No MSG', good: true },
  { label: 'Cholesterol-Free', good: true }, { label: 'Rich in Antioxidants', good: true },
  { label: 'Gluten-Free', good: true }, { label: 'Non-GMO', good: true },
  { label: 'Artificial Colors', good: false }, { label: 'Sodium Nitrite', good: false },
  { label: 'Carrageenan', good: null }, { label: 'Sodium Benzoate', good: false },
  { label: 'Palm Oil', good: false }, { label: 'Saccharin', good: false },
  { label: 'Aspartame', good: false }, { label: 'Potassium Bromate', good: false },
  { label: 'Xanthan Gum', good: null },
]

function CheckIcon({ good }) {
  if (good === true) return (
    <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center shrink-0">
      <svg viewBox="0 0 12 12" className="w-3 h-3"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/></svg>
    </div>
  )
  return (
    <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center shrink-0">
      <svg viewBox="0 0 12 12" className="w-3 h-3"><path d="M3 3l6 6M9 3l-6 6" stroke="white" strokeWidth="1.8" strokeLinecap="round"/></svg>
    </div>
  )
}

export default function Features() {
  const [sectionRef, visible] = useIntersection(0.2)
  const score = useCountUp(96, 1400, visible)

  return (
    <section id="features" ref={sectionRef} className="bg-white overflow-hidden">

      {/* ── Health Benefits ── */}
      <div className="py-20 md:py-28 bg-[#3a7d2d] text-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-6">
                Health Benefits of Using Olive
              </h2>
              <p className="text-green-200 text-lg mb-8 leading-relaxed">
                Olive proactively flags harmful ingredients and offers personalized recommendations,
                empowering you to make better choices for your family&apos;s health.
              </p>
              <button className="flex items-center gap-2 bg-white text-[#3a7d2d] font-semibold px-6 py-3 rounded-full hover:bg-green-50 transition-colors shadow-md">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#3a7d2d]" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download for iOS
              </button>
            </div>
            <div className="relative">
              {/* Stacked product images */}
              <div className="relative h-56 flex items-end justify-center">
                {['🍦','🍓','🧁'].map((e, i) => (
                  <div
                    key={i}
                    className="absolute bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center shadow-xl"
                    style={{
                      width: i === 1 ? 160 : 120,
                      height: i === 1 ? 160 : 120,
                      left: `${15 + i * 25}%`,
                      bottom: i === 1 ? 0 : 16,
                      transform: `rotate(${(i - 1) * 8}deg)`,
                      zIndex: i === 1 ? 10 : 5,
                    }}
                  >
                    <span className="text-5xl">{e}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Achieve Nutritional Clarity ── */}
      <div className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-black text-olive-900 mb-8">
                Achieve Nutritional Clarity
              </h2>
              <ul className="space-y-4">
                {BENEFIT_BULLETS.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center shrink-0 mt-0.5">
                      <svg viewBox="0 0 12 12" className="w-3.5 h-3.5"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/></svg>
                    </div>
                    <p className="text-gray-600 text-[15px] leading-relaxed">{b}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Score card with animated counter */}
            <div className="bg-[#eef5ec] rounded-3xl p-6">
              {/* Product image stack */}
              <div className="relative h-40 mb-4 flex items-center justify-center">
                {['🍓','🍦','🍒'].map((e, i) => (
                  <div
                    key={i}
                    className="absolute bg-white rounded-2xl shadow-lg flex items-center justify-center"
                    style={{
                      width: i === 1 ? 120 : 90,
                      height: i === 1 ? 120 : 90,
                      left: `${10 + i * 28}%`,
                      transform: `rotate(${(i - 1) * 10}deg)`,
                      zIndex: i === 1 ? 10 : 5,
                    }}
                  >
                    <span className="text-4xl">{e}</span>
                  </div>
                ))}
              </div>

              {/* Score card */}
              <div className="bg-white rounded-2xl p-4 shadow-sm mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-2xl">🍓</div>
                  <div>
                    <p className="font-bold text-[15px] text-gray-900">Straus Ice Cream</p>
                    <p className="text-[13px] text-gray-500">
                      <span className="font-black text-gray-900">{score}/100</span>
                      <span className="ml-2 text-gray-400">Excellent</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Positives / Negatives */}
              <div className="grid grid-cols-2 gap-3">
                {[['✅ Positives', ['Organic Milk', 'No Additives', 'Clean Label']], ['❌ Negatives', ['High Sugar', 'Full Fat']]].map(([heading, items]) => (
                  <div key={heading} className="bg-white rounded-xl p-3 shadow-sm">
                    <p className="text-[11px] font-semibold text-gray-700 mb-2">{heading}</p>
                    <div className="flex flex-wrap gap-1">
                      {items.map(t => (
                        <span key={t} className="bg-gray-100 text-[9px] text-gray-500 rounded-full px-2 py-0.5">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Proactive Ingredient Filtering ── */}
      <div className="py-20 md:py-28 bg-[#f9f9f9]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-black text-olive-900 mb-8">
                Proactive Ingredient Filtering
              </h2>
              <ul className="space-y-4">
                {[
                  'Olive flags harmful additives and controversial ingredients before they become mainstream concerns.',
                  'Keeps you ahead of potential food safety concerns.',
                  'Gives busy parents the confidence to make safer food choices every time.',
                ].map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center shrink-0 mt-0.5">
                      <svg viewBox="0 0 12 12" className="w-3.5 h-3.5"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/></svg>
                    </div>
                    <p className="text-gray-600 text-[15px] leading-relaxed">{b}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tag cloud — diagonal sliding rows matching reference */}
            <div className="bg-[#fce4ec] rounded-3xl relative overflow-hidden h-[340px]">
              <style>{`
                @keyframes slide-lft { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
                @keyframes slide-rgt { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
                .tagrow { display: flex; gap: 10px; white-space: nowrap; width: max-content; }
                .tagwrap { overflow: hidden; }
                .anim-l { animation: slide-lft 18s linear infinite; }
                .anim-r { animation: slide-rgt 18s linear infinite; }
              `}</style>
              <div style={{
                position:'absolute', top:'-40px', left:'-80px', right:'-80px', bottom:'-40px',
                transform:'rotate(-15deg)',
                display:'flex', flexDirection:'column', justifyContent:'center', gap:'10px',
              }}>
                {[
                  { dir:'l', dur:'18s', tags:[{l:'High Fibre',g:true},{l:'Cholesterol-Free',g:true},{l:'Rich in Antioxidants',g:true},{l:'Non-GMO',g:true},{l:'Gluten-Free',g:true},{l:'Sodium Nitrite',g:false}] },
                  { dir:'r', dur:'20s', tags:[{l:'Gluten-Free',g:true},{l:'Artificial Colors',g:false},{l:'Carrageenan',g:false},{l:'Sodium Benzoate',g:false},{l:'Palm Oil',g:false},{l:'Aspartame',g:false}] },
                  { dir:'l', dur:'22s', tags:[{l:'Saccharin',g:false},{l:'Potassium Bromate',g:false},{l:'Xanthan Gum',g:null},{l:'High Fibre',g:true},{l:'Non-GMO',g:true},{l:'Cholesterol-Free',g:true}] },
                  { dir:'r', dur:'16s', tags:[{l:'Artificial Colors',g:false},{l:'Rich in Antioxidants',g:true},{l:'Palm Oil',g:false},{l:'Gluten-Free',g:true},{l:'Sodium Benzoate',g:false},{l:'Saccharin',g:false}] },
                  { dir:'l', dur:'19s', tags:[{l:'Xanthan Gum',g:null},{l:'Non-GMO',g:true},{l:'Aspartame',g:false},{l:'Cholesterol-Free',g:true},{l:'Potassium Bromate',g:false},{l:'High Fibre',g:true}] },
                ].map((row, ri) => (
                  <div key={ri} className="tagwrap">
                    <div className={`tagrow ${row.dir==='l'?'anim-l':'anim-r'}`} style={{ animationDuration: row.dur }}>
                      {[...row.tags, ...row.tags].map((tag, i) => (
                        <div key={i} className="inline-flex items-center gap-2 bg-white/80 rounded-full px-3 py-1.5 shadow-sm" style={{ fontSize:'12px', fontWeight:500, color:'#222' }}>
                          <span style={{
                            width:18, height:18, borderRadius:'50%', background:'#1a1a2e',
                            display:'inline-flex', alignItems:'center', justifyContent:'center',
                            color:'white', fontSize:9, fontWeight:700, flexShrink:0,
                          }}>
                            {tag.g === true ? '✓' : tag.g === false ? '✕' : '−'}
                          </span>
                          {tag.l}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Comparison Table ── */}
      <div className="py-20 md:py-28 bg-[#3a7d2d] text-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-black text-center mb-4">
            Olive Food Scanner App vs. The Rest
          </h2>
          <div className="flex justify-center mb-10">
            <button className="flex items-center gap-2 bg-white text-[#3a7d2d] font-semibold px-6 py-3 rounded-full hover:bg-green-50 transition-colors shadow-md">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#3a7d2d]">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download for iOS
            </button>
          </div>

          {/* Header row */}
          <div className="grid grid-cols-4 gap-4 mb-4 px-4">
            <div />
            {[['🫒', 'Olive'], ['🥕', 'Yuka'], ['🅱️', 'Buycott']].map(([icon, name]) => (
              <div key={name} className="flex flex-col items-center gap-1">
                <span className="text-3xl">{icon}</span>
                <span className="text-xs text-green-200 font-medium">{name}</span>
              </div>
            ))}
          </div>

          {/* Rows */}
          {COMPARISON_ROWS.map((row, i) => (
            <div key={row.label} className={`grid grid-cols-4 gap-4 px-4 py-4 items-center ${i < COMPARISON_ROWS.length - 1 ? 'border-b border-white/20' : ''}`}>
              <span className="text-sm text-white/90">{row.label}</span>
              {[row.olive, row.carrot, row.b].map((has, j) => (
                <div key={j} className="flex justify-center">
                  {has ? (
                    <div className="w-7 h-7 rounded-full bg-[#b5cc7a] flex items-center justify-center">
                      <svg viewBox="0 0 12 12" className="w-4 h-4"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/></svg>
                    </div>
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-red-500 flex items-center justify-center">
                      <svg viewBox="0 0 12 12" className="w-4 h-4"><path d="M3 3l6 6M9 3l-6 6" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── 100% Independent ── */}
      <div className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-display font-black text-5xl md:text-7xl leading-tight" style={{ color: '#f9a8c4' }}>
              100% Independent.<br />Always.
            </h2>
          </div>
          <div>
            <p className="text-gray-700 text-xl leading-relaxed">
              We{' '}
              <span className="font-bold" style={{ color: '#f9a8c4' }}>never monetize</span>
              {' '}through brand deals, affiliate links, or ads — so{' '}
              <span className="font-bold text-[#3a7d2d]">you can trust</span>{' '}our{' '}
              <span className="font-bold text-[#b5a000]">recommendations</span>{' '}are always aligned with our users.
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}
