import { Quote } from 'lucide-react'
import { testimonials } from '../../data/content'
import Reveal from '../ui/Reveal'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal className="max-w-xl">
          <p className="text-xs font-medium tracking-wide uppercase text-cobalt">Stories</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-medium tracking-tight">
            Teams that traded meetings for momentum.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="h-full p-6 rounded-xl2 border border-border dark:border-border-dark bg-surface dark:bg-surface-dark flex flex-col">
                <Quote size={22} className="text-ember" strokeWidth={2} />
                <p className="mt-4 text-[15px] leading-relaxed text-ink dark:text-ink-dark-DEFAULT flex-1">
                  "{t.quote}"
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cobalt-soft dark:bg-cobalt/15 text-cobalt font-display text-sm font-medium">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-ink-faint dark:text-ink-dark-faint">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
