import { useState } from 'react'
import { Check } from 'lucide-react'
import { pricingTiers } from '../../data/content'
import Reveal from '../ui/Reveal'

export default function Pricing() {
  const [yearly, setYearly] = useState(true)

  return (
    <section id="pricing" className="py-24 sm:py-32 px-5 sm:px-8 bg-surface dark:bg-surface-dark">
      <div className="max-w-6xl mx-auto">
        <Reveal className="max-w-xl mx-auto text-center">
          <p className="text-xs font-medium tracking-wide uppercase text-ember">Pricing</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-medium tracking-tight">
            Simple pricing, no seat-count anxiety.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 flex items-center justify-center gap-3">
          <span className={`text-sm ${!yearly ? 'text-ink dark:text-ink-dark-DEFAULT font-medium' : 'text-ink-faint dark:text-ink-dark-faint'}`}>
            Monthly
          </span>
          <button
            onClick={() => setYearly((y) => !y)}
            aria-label="Toggle yearly pricing"
            className="relative h-7 w-12 rounded-full bg-canvas dark:bg-canvas-dark border border-border dark:border-border-dark transition-colors"
          >
            <span
              className={`absolute top-0.5 h-5 w-5 rounded-full bg-cobalt transition-transform duration-300 ${
                yearly ? 'translate-x-[22px]' : 'translate-x-0.5'
              }`}
            />
          </button>
          <span className={`text-sm ${yearly ? 'text-ink dark:text-ink-dark-DEFAULT font-medium' : 'text-ink-faint dark:text-ink-dark-faint'}`}>
            Yearly
            <span className="ml-1.5 text-xs text-ember font-medium">save ~22%</span>
          </span>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {pricingTiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.08}>
              <div
                className={`h-full p-7 rounded-xl2 border transition-all duration-300 ${
                  tier.highlighted
                    ? 'border-cobalt bg-canvas dark:bg-canvas-dark shadow-[0_20px_50px_-15px_rgba(52,87,213,0.3)] md:scale-105'
                    : 'border-border dark:border-border-dark bg-canvas dark:bg-canvas-dark'
                }`}
              >
                {tier.highlighted && (
                  <span className="inline-block mb-3 px-2.5 py-1 rounded-full bg-cobalt text-white text-[11px] font-medium">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-xl font-medium">{tier.name}</h3>
                <p className="mt-1 text-sm text-ink-soft dark:text-ink-dark-soft">{tier.description}</p>
                <p className="mt-5 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-medium">
                    ${yearly ? tier.yearly : tier.monthly}
                  </span>
                  <span className="text-sm text-ink-faint dark:text-ink-dark-faint">/mo per seat</span>
                </p>
                <a
                  href="#contact"
                  className={`mt-6 block text-center px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    tier.highlighted
                      ? 'bg-cobalt text-white hover:bg-cobalt-dark'
                      : 'border border-border dark:border-border-dark hover:bg-surface dark:hover:bg-surface-dark'
                  }`}
                >
                  {tier.cta}
                </a>
                <ul className="mt-6 space-y-2.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-ink-soft dark:text-ink-dark-soft">
                      <Check size={16} className="text-cobalt mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
