// HowItWorks.jsx — matches the oliveapp.com screenshot design
import { useState } from 'react'

const STEPS = [
  {
    title: 'Scan & Detect',
    description: 'When you open Olive, simply scan the barcode to instantly detect product ingredients. Olive\'s intuitive design means busy parents can quickly assess any product in seconds.',
    visual: (
      <div className="relative w-full h-48 flex items-center justify-center bg-[#f0f5ee] rounded-xl overflow-hidden">
        {/* Scanner corners */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gray-400 rounded-tl-md" />
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gray-400 rounded-tr-md" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gray-400 rounded-bl-md" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gray-400 rounded-br-md" />
        {/* Scan line animation */}
        <div className="absolute left-8 right-8 h-0.5 bg-gray-700 animate-scan-line" style={{
          animation: 'scanLine 2s ease-in-out infinite',
          top: '50%',
        }} />
        {/* Avocado */}
        <div className="relative flex flex-col items-center">
          <span className="text-7xl drop-shadow-md" style={{ filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.15))' }}>🥑</span>
          <div className="mt-1 bg-white/70 rounded px-2 py-0.5 text-[9px] text-gray-500 font-mono">4629 37521</div>
        </div>
        {/* Sparkles */}
        <span className="absolute top-6 right-10 text-xs opacity-60">✦</span>
        <span className="absolute bottom-8 left-10 text-xs opacity-40">✦</span>
      </div>
    ),
  },
  {
    title: 'Data Analysis & Validation',
    description: 'After scanning, our food scanner app compares product data with an extensive, up-to-date food database. Using expert nutritional guidelines, Olive analyzes ingredients for safety and quality.',
    visual: (
      <div className="relative w-full h-48 flex flex-col items-center justify-center bg-[#f0f5ee] rounded-xl overflow-hidden gap-3">
        {/* Product images row */}
        <div className="flex gap-2 items-end">
          {['🥤','🧂','🥗'].map((e, i) => (
            <div key={i} className={`bg-white rounded-xl shadow flex items-center justify-center transition-transform ${i === 1 ? 'w-16 h-16 scale-110 shadow-lg' : 'w-12 h-12 opacity-60'}`}>
              <span className="text-2xl">{e}</span>
            </div>
          ))}
        </div>
        {/* Safe badge */}
        <div className="flex items-center gap-2 bg-[#3a7d2d] text-white rounded-full px-4 py-1.5 shadow-md">
          <svg viewBox="0 0 20 20" className="w-4 h-4 fill-white"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
          <span className="text-sm font-semibold">Safe to consume</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Actionable Insights & Recommendations',
    description: 'Once analyzed, Olive provides tailored insights and healthier product suggestions. Olive proactively flags harmful ingredients and offers personalized recommendations, empowering you to make better choices for your family\'s health.',
    visual: (
      <div className="relative w-full h-48 bg-[#f0f5ee] rounded-xl overflow-hidden flex items-center justify-center p-3">
        <div className="w-full bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* Header bar */}
          <div className="bg-gray-100 px-3 py-2 text-[10px] font-semibold text-gray-600">Chhola (Chickpea Curry)</div>
          {/* Product cards */}
          <div className="flex gap-2 p-2">
            {['🍛','🧆','🥗'].map((e, i) => (
              <div key={i} className={`flex-1 aspect-square rounded-lg flex items-center justify-center ${i === 1 ? 'bg-red-100 ring-2 ring-red-300' : 'bg-gray-100'}`}>
                <span className="text-xl">{e}</span>
              </div>
            ))}
          </div>
          {/* Score rows */}
          {[['Protein', 82], ['Fiber', 91], ['Low Sugar', 95]].map(([label, val]) => (
            <div key={label} className="flex items-center gap-2 px-3 py-1">
              <span className="text-[9px] text-gray-500 w-16">{label}</span>
              <div className="flex-1 bg-gray-100 rounded-full h-1.5">
                <div className="bg-[#3a7d2d] h-1.5 rounded-full" style={{ width: `${val}%` }} />
              </div>
            </div>
          ))}
          <div className="px-3 py-1.5 text-[9px] text-gray-400 italic">Veggie Spaghetti Squash</div>
        </div>
      </div>
    ),
  },
]

export default function HowItWorks() {
  const [active, setActive] = useState(1)

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-black text-olive-900">
            How the Olive Food Scanner App Works
          </h2>
          <span className="text-3xl mt-2 inline-block">🥑</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className={`rounded-2xl p-5 cursor-pointer transition-all duration-300 border-2 ${
                active === i
                  ? 'border-olive-300 bg-[#f0f5ee] shadow-lg shadow-olive-100/60 -translate-y-1'
                  : 'border-transparent bg-[#f7f8f6] hover:bg-[#f0f5ee] hover:border-olive-200'
              }`}
              onClick={() => setActive(i)}
            >
              {/* Visual */}
              {step.visual}

              <h3 className="font-display font-bold text-[1.05rem] text-olive-900 mt-4 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scanLine {
          0%, 100% { top: 30%; }
          50% { top: 70%; }
        }
      `}</style>
    </section>
  )
}
