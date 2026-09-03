import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { processSteps } from '../../data/content'
import Reveal from '../ui/Reveal'

export default function Process() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.7', 'end 0.4'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="process" className="py-24 sm:py-32 px-5 sm:px-8 bg-surface dark:bg-surface-dark">
      <div className="max-w-4xl mx-auto">
        <Reveal className="max-w-xl">
          <p className="text-xs font-medium tracking-wide uppercase text-ember">Process</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-medium tracking-tight">
            From first login to fewer meetings in a week.
          </h2>
        </Reveal>

        <div ref={ref} className="mt-16 relative pl-10 sm:pl-14">
          <div className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-[2px] bg-border dark:bg-border-dark" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[7px] sm:left-[11px] top-2 w-[2px] bg-gradient-to-b from-cobalt to-ember"
          />

          <div className="space-y-14">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.05} className="relative">
                <span className="absolute -left-10 sm:-left-14 top-0.5 flex h-4 w-4 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-canvas dark:bg-canvas-dark border-2 border-cobalt">
                  <span className="h-1.5 w-1.5 rounded-full bg-cobalt" />
                </span>
                <p className="text-xs font-mono text-ink-faint dark:text-ink-dark-faint">
                  Step {i + 1}
                </p>
                <h3 className="mt-1 font-display text-xl font-medium">{step.title}</h3>
                <p className="mt-1.5 text-sm text-ink-soft dark:text-ink-dark-soft max-w-md">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
