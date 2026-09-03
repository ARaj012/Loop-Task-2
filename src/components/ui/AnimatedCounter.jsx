import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

export default function AnimatedCounter({ value, suffix = '', prefix = '', duration = 1.8 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = useState(0)

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: duration * 1000, bounce: 0 })

  useEffect(() => {
    if (isInView) motionValue.set(value)
  }, [isInView, value, motionValue])

  useEffect(() => {
    return springValue.on('change', (latest) => setDisplay(Math.round(latest)))
  }, [springValue])

  return (
    <motion.span ref={ref} className="font-mono tabular-nums">
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </motion.span>
  )
}
