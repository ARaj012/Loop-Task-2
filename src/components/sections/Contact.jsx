import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Send } from 'lucide-react'
import Reveal from '../ui/Reveal'

const initialState = { name: '', email: '', company: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.message.trim()) {
    errors.message = 'Tell us a little about your team.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'A few more details would help (10+ characters).'
  }
  return errors
}

export default function Contact() {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (touched[name]) {
      setErrors(validate({ ...values, [name]: value }))
    }
  }

  function handleBlur(e) {
    const { name } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors(validate(values))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    setTouched({ name: true, email: true, company: true, message: true })
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true)
    }
  }

  const fieldClass = (field) =>
    `w-full rounded-lg border bg-canvas dark:bg-canvas-dark px-4 py-2.5 text-sm outline-none transition-colors ${
      errors[field] && touched[field]
        ? 'border-red-400 focus:border-red-500'
        : 'border-border dark:border-border-dark focus:border-cobalt'
    }`

  return (
    <section id="contact" className="py-24 sm:py-32 px-5 sm:px-8">
      <div className="max-w-2xl mx-auto">
        <Reveal className="text-center">
          <p className="text-xs font-medium tracking-wide uppercase text-cobalt">Get started</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-medium tracking-tight">
            Tell us about your team.
          </h2>
          <p className="mt-3 text-sm text-ink-soft dark:text-ink-dark-soft">
            We'll get back to you within one business day with a tailored walkthrough.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-xl2 border border-cobalt/30 bg-cobalt-soft dark:bg-cobalt/10 p-8 text-center"
            >
              <CheckCircle2 className="mx-auto text-cobalt" size={32} />
              <p className="mt-3 font-display text-lg font-medium">Thanks — that's in.</p>
              <p className="mt-1 text-sm text-ink-soft dark:text-ink-dark-soft">
                We'll be in touch at {values.email}.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false)
                  setValues(initialState)
                  setTouched({})
                  setErrors({})
                }}
                className="mt-5 text-sm font-medium text-cobalt hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={fieldClass('name')}
                    placeholder="Jordan Lee"
                  />
                  {errors.name && touched.name && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={fieldClass('email')}
                    placeholder="jordan@company.com"
                  />
                  {errors.email && touched.email && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1.5">
                  Company <span className="text-ink-faint dark:text-ink-dark-faint font-normal">(optional)</span>
                </label>
                <input
                  id="company"
                  name="company"
                  value={values.company}
                  onChange={handleChange}
                  className={fieldClass('company')}
                  placeholder="Acme Inc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                  What's your team's biggest meeting headache?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${fieldClass('message')} resize-none`}
                  placeholder="We have three overlapping standups across time zones…"
                />
                {errors.message && touched.message && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cobalt text-white text-sm font-medium hover:bg-cobalt-dark transition-colors"
              >
                Send message
                <Send size={15} />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
