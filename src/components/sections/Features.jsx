import { FileText, GanttChartSquare, MessageCircle, Focus, Plug, BarChart3 } from 'lucide-react'
import { features } from '../../data/content'
import Reveal from '../ui/Reveal'

const ICONS = { FileText, GanttChartSquare, MessageCircle, Focus, Plug, BarChart3 }

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal className="max-w-xl">
          <p className="text-xs font-medium tracking-wide uppercase text-cobalt dark:text-cobalt">
            What's inside
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-medium tracking-tight">
            Everything a distributed team needs, nothing it doesn't.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const Icon = ICONS[f.icon]
            return (
              <Reveal key={f.title} delay={i * 0.06}>
                <div className="group h-full p-6 rounded-xl2 border border-border dark:border-border-dark bg-surface dark:bg-surface-dark transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(52,87,213,0.25)] hover:border-cobalt/30">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cobalt-soft dark:bg-cobalt/15 text-cobalt group-hover:scale-110 transition-transform duration-300">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-medium">{f.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft dark:text-ink-dark-soft leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
