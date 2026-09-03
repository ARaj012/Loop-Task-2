import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, PlayCircle } from 'lucide-react'
import AnimatedCounter from '../ui/AnimatedCounter'

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, 160])
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, -120])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const headline = 'Work in sync, not in sync meetings.'
  const words = headline.split(' ')

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Parallax gradient orbs */}
      <motion.div
        style={{ y: orb1Y }}
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-cobalt/20 dark:bg-cobalt/25 blur-3xl animate-float"
      />
      <motion.div
        style={{ y: orb2Y }}
        className="pointer-events-none absolute top-40 right-[-6rem] h-[28rem] w-[28rem] rounded-full bg-ember/20 dark:bg-ember/25 blur-3xl animate-float"
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative max-w-5xl mx-auto px-5 sm:px-8 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border dark:border-border-dark bg-surface/60 dark:bg-surface-dark/60 backdrop-blur text-xs font-medium text-ink-soft dark:text-ink-dark-soft mb-6"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cobalt" />
          Now with async standups
        </motion.span>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight font-medium">
          {words.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={wordVariants}
              className={`inline-block mr-[0.28em] ${
                i === words.length - 2 || i === words.length - 1 ? 'text-gradient italic' : ''
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 text-base sm:text-lg text-ink-soft dark:text-ink-dark-soft max-w-2xl mx-auto"
        >
          Loop replaces status meetings with live docs, async updates, and timelines that keep
          themselves current — so your team ships instead of syncing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cobalt text-white text-sm font-medium hover:bg-cobalt-dark transition-colors"
          >
            Start free trial
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#process"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border dark:border-border-dark text-sm font-medium hover:bg-surface dark:hover:bg-surface-dark transition-colors"
          >
            <PlayCircle size={16} />
            See how it works
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-16 flex items-center justify-center gap-8 sm:gap-14 flex-wrap"
        >
          <div className="text-center">
            <p className="font-display text-2xl sm:text-3xl font-medium">
              <AnimatedCounter value={12400} suffix="+" />
            </p>
            <p className="text-xs text-ink-faint dark:text-ink-dark-faint mt-1">Teams onboard</p>
          </div>
          <div className="text-center">
            <p className="font-display text-2xl sm:text-3xl font-medium">
              <AnimatedCounter value={38} suffix="%" />
            </p>
            <p className="text-xs text-ink-faint dark:text-ink-dark-faint mt-1">Fewer meetings</p>
          </div>
          <div className="text-center">
            <p className="font-display text-2xl sm:text-3xl font-medium">
              <AnimatedCounter value={99} suffix=".9%" />
            </p>
            <p className="text-xs text-ink-faint dark:text-ink-dark-faint mt-1">Uptime</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
