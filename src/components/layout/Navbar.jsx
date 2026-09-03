import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Waypoints } from 'lucide-react'
import { navLinks } from '../../data/content'
import { useTheme } from '../../context/ThemeContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/80 dark:bg-surface-dark/80 backdrop-blur-md border-b border-border dark:border-border-dark'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 h-16">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-medium">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cobalt text-white">
            <Waypoints size={17} strokeWidth={2.25} />
          </span>
          Loop
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft dark:text-ink-dark-soft hover:text-ink dark:hover:text-ink-dark-DEFAULT transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-ink-soft dark:text-ink-dark-soft hover:bg-canvas dark:hover:bg-canvas-dark transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-ink dark:bg-ink-dark-DEFAULT text-white dark:text-ink text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Get started
          </a>
        </div>

        <div className="flex md:hidden items-center gap-1">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-ink-soft dark:text-ink-dark-soft"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="p-2 rounded-lg text-ink dark:text-ink-dark-DEFAULT"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-surface dark:bg-surface-dark border-b border-border dark:border-border-dark"
          >
            <div className="px-5 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-ink-soft dark:text-ink-dark-soft py-1"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 px-4 py-2.5 rounded-lg bg-ink dark:bg-ink-dark-DEFAULT text-white dark:text-ink text-sm font-medium text-center"
              >
                Get started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
