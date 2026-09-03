import { Waypoints } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border dark:border-border-dark px-5 sm:px-8 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2 font-display font-medium">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cobalt text-white">
            <Waypoints size={15} strokeWidth={2.25} />
          </span>
          Loop
        </a>
        <p className="text-xs text-ink-faint dark:text-ink-dark-faint">
          © 2026 Loop. A concept project — not a real product.
        </p>
        <div className="flex items-center gap-5 text-xs text-ink-soft dark:text-ink-dark-soft">
          <a href="#features" className="hover:text-cobalt transition-colors">Product</a>
          <a href="#pricing" className="hover:text-cobalt transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-cobalt transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}
