// Testimonials.jsx — Real Mothers Real Results + Pricing sections
import { useState } from 'react'

const TESTIMONIALS = [
  {
    name: 'Megan L.',
    rating: 5,
    text: "Olive has completely changed the way I shop for my family. I feel confident knowing exactly what's in our food before it ever hits our pantry.",
    avatar: 'https://i.pravatar.cc/60?img=47',
  },
  {
    name: 'Tina B.',
    rating: 5,
    text: "Meal planning used to be stressful. Now I scan, get recommendations, and feel great about what my kids are eating. It's that easy.",
    avatar: 'https://i.pravatar.cc/60?img=32',
  },
  {
    name: 'Rachel M.',
    rating: 5,
    text: "After just a week of using Olive, I feel more in control of my family's nutrition than ever before. An absolute game changer.",
    avatar: 'https://i.pravatar.cc/60?img=11',
  },
]

const FAQS = [
  'What is the Food Scanner App and how does it work?',
  'How does Olive ensure the accuracy of the Food Scanner App results?',
  'Which products can I scan with the Food Scanner App?',
  'Is the Food Scanner App available for Android?',
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="w-4 h-4 fill-amber-400">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [openFaq, setOpenFaq] = useState(null)
  const [billing, setBilling] = useState('yearly')

  return (
    <>
      {/* ── Real Mothers Real Results ── */}
      <section id="community" className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&q=80"
                alt="Mother with children"
                className="w-full h-[420px] object-cover rounded-3xl grayscale"
                onError={e => { e.target.style.background = '#eee'; e.target.alt = '' }}
              />
              {/* Floating review card */}
              <div className="absolute -top-4 right-0 md:-right-8 bg-white rounded-2xl shadow-xl p-4 max-w-[260px]">
                <p className="text-[12px] text-gray-600 leading-relaxed mb-2">
                  &ldquo;{TESTIMONIALS[0].text}&rdquo;
                </p>
                <p className="font-semibold text-[12px] text-gray-900">{TESTIMONIALS[0].name}</p>
                <StarRating count={TESTIMONIALS[0].rating} />
              </div>
            </div>

            {/* Text + reviews */}
            <div>
              <h2 className="font-display text-5xl md:text-6xl font-black text-olive-900 leading-tight mb-2">
                Real Mothers<br />Real Results
              </h2>
              <a href="#" className="text-gray-500 text-sm flex items-center gap-1 mb-8 hover:text-olive-600 transition-colors">
                read all 3,147+ reviews
                <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </a>

              {/* Testimonial cards */}
              <div className="space-y-4">
                {TESTIMONIALS.slice(1).map((t) => (
                  <div key={t.name} className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                    <p className="text-[13px] text-gray-600 leading-relaxed mb-3">&ldquo;{t.text}&rdquo;</p>
                    <div className="flex items-center gap-2">
                      <img src={t.avatar} alt={t.name} className="w-8 h-8 rounded-full object-cover" onError={e => { e.target.style.display = 'none' }} />
                      <div>
                        <p className="font-semibold text-[12px] text-gray-900">{t.name}</p>
                        <StarRating count={t.rating} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="py-20 md:py-28 bg-[#f9f9f9]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h2 className="font-display text-4xl md:text-5xl font-black text-olive-900 text-center mb-2">
            Healthy Choices<br />Honest Pricing
          </h2>

          {/* Toggle */}
          <div className="flex justify-center mt-8 mb-12">
            <div className="bg-gray-200 p-1 rounded-full flex gap-1">
              {['monthly', 'yearly'].map((b) => (
                <button
                  key={b}
                  onClick={() => setBilling(b)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 capitalize ${billing === b ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Monthly */}
            <div className={`rounded-3xl p-8 border-2 transition-all duration-300 ${billing === 'monthly' ? 'border-olive-300 bg-white shadow-lg' : 'border-transparent bg-white'}`}>
              <div className="flex items-start gap-3 mb-6">
                <span className="text-4xl">🫒</span>
                <div>
                  <p className="text-gray-500 font-medium text-sm">Monthly</p>
                  <p className="font-black text-4xl text-gray-900">$14.99 <span className="text-lg font-medium text-gray-400">/monthly</span></p>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {['Unlimited Scans', 'Unlimited Database Searches', 'Comprehensive Lab-Testing Data'].map(f => (
                  <li key={f} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#3a7d2d] flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 12 12" className="w-3 h-3"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/></svg>
                    </div>
                    <span className="text-gray-600 text-[15px]">{f}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-[#1e3d1a] text-white font-semibold py-3.5 rounded-2xl hover:bg-[#2d5227] transition-colors">
                Subscribe
              </button>
            </div>

            {/* Yearly */}
            <div className={`rounded-3xl p-8 border-2 transition-all duration-300 ${billing === 'yearly' ? 'border-olive-300 bg-[#3a7d2d] shadow-xl shadow-olive-900/20' : 'border-transparent bg-[#3a7d2d]'}`}>
              <div className="mb-6">
                <p className="text-green-300 font-medium text-sm mb-1">Yearly</p>
                <p className="font-black text-4xl text-white">
                  $69.99
                  <span className="text-lg font-medium text-green-300 line-through ml-2">$179.88</span>
                  <span className="text-lg font-medium text-green-300"> /yearly</span>
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                {['Everything in monthly plan', 'Get 7 months free', '60% Savings'].map(f => (
                  <li key={f} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 12 12" className="w-3 h-3"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/></svg>
                    </div>
                    <span className="text-green-100 text-[15px]">{f}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-white text-[#3a7d2d] font-semibold py-3.5 rounded-2xl hover:bg-green-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-20 md:py-28 bg-[#f5f0e8]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-black text-olive-900">
              Frequently Asked Questions by Parents
            </h2>
            <span className="text-4xl mt-2 inline-block">🫒</span>
            <div className="mt-6">
              <button className="flex items-center gap-2 bg-[#1e3d1a] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#2d5227] transition-colors mx-auto">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download for iOS
              </button>
            </div>
          </div>

          <div className="space-y-px">
            {FAQS.map((q, i) => (
              <div key={q} className="border-b border-gray-200">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left gap-4 hover:text-olive-700 transition-colors"
                >
                  <span className="text-[15px] text-gray-800 font-medium">{q}</span>
                  <div className={`w-7 h-7 rounded-full border-2 border-gray-900 flex items-center justify-center shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-45' : ''}`}>
                    <svg viewBox="0 0 12 12" className="w-3 h-3"><path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                  </div>
                </button>
                {openFaq === i && (
                  <div className="pb-4 text-gray-500 text-sm leading-relaxed">
                    Olive uses a comprehensive database and expert nutritional guidelines to analyze every product&apos;s ingredients, scoring them 0–100 based on safety, processing level, and detected toxins.
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative overflow-hidden">
        <div className="relative bg-[#1e3d1a] text-white py-20 px-5 text-center">
          <div className="absolute inset-0 opacity-30">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=60"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-black mb-6">
              Keep your family safe with Olive
            </h2>
            <ul className="space-y-2 mb-8 text-left max-w-xs mx-auto">
              {['Effortless food scanning', 'Peace of mind for parents', 'Healthy product recommendations'].map(b => (
                <li key={b} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#3a7d2d] flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 12 12" className="w-3 h-3"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/></svg>
                  </div>
                  <span className="text-[15px]">{b}</span>
                </li>
              ))}
            </ul>
            <button className="flex items-center gap-2 bg-white text-[#1e3d1a] font-semibold px-8 py-4 rounded-full hover:bg-green-50 transition-colors mx-auto shadow-lg">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#1e3d1a]">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download for iOS
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
