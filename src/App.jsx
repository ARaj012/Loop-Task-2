import { ThemeProvider } from './context/ThemeContext'
import ScrollProgress from './components/layout/ScrollProgress'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import Process from './components/sections/Process'
import Testimonials from './components/sections/Testimonials'
import Pricing from './components/sections/Pricing'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <ThemeProvider>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Process />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
