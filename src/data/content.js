export const navLinks = [
  { label: 'Product', href: '#features' },
  { label: 'How it works', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Stories', href: '#testimonials' },
]

export const stats = [
  { value: 12400, suffix: '+', label: 'Teams onboard' },
  { value: 38, suffix: '%', label: 'Fewer meetings' },
  { value: 99, suffix: '.9%', label: 'Uptime' },
  { value: 4, suffix: '.9/5', label: 'Average rating' },
]

export const features = [
  {
    title: 'Live docs',
    description: 'Write, comment, and resolve threads in real time — no more "did you see my message" pings.',
    icon: 'FileText',
  },
  {
    title: 'Smart timelines',
    description: 'Auto-generated project timelines that update themselves as tasks move.',
    icon: 'GanttChartSquare',
  },
  {
    title: 'Async standups',
    description: 'Daily check-ins that take 90 seconds to record and zero minutes to attend live.',
    icon: 'MessageCircle',
  },
  {
    title: 'Focus mode',
    description: 'Mute every channel except what matters, on a schedule your calendar already knows.',
    icon: 'Focus',
  },
  {
    title: 'Deep integrations',
    description: 'Connects to the tools your team already lives in — no migration required.',
    icon: 'Plug',
  },
  {
    title: 'Insight reports',
    description: 'Weekly digest of what shipped, what stalled, and what needs your eyes.',
    icon: 'BarChart3',
  },
]

export const processSteps = [
  {
    title: 'Connect your tools',
    description: 'Link your calendar, chat, and repos in under five minutes. No IT ticket required.',
  },
  {
    title: 'Set your rhythm',
    description: 'Loop learns your team\'s working hours and quiet hours, and respects both.',
  },
  {
    title: 'Replace the standing meetings',
    description: 'Swap recurring syncs for async updates your team can catch up on anytime.',
  },
  {
    title: 'Watch the calendar clear',
    description: 'Most teams cut recurring meetings by a third within the first month.',
  },
]

export const testimonials = [
  {
    quote:
      'We went from four standing meetings a week to one. The team actually has focus time now.',
    name: 'Priya Nair',
    role: 'Engineering Lead, Fintra',
  },
  {
    quote:
      'Loop is the first tool where adoption wasn\'t a fight. People just started using it on day two.',
    name: 'Marcus Webb',
    role: 'Head of Ops, Fieldstone',
  },
  {
    quote:
      'The async standups alone saved us five hours a week as a twelve-person team.',
    name: 'Aiko Tanaka',
    role: 'Product Manager, Northlight',
  },
]

export const pricingTiers = [
  {
    name: 'Starter',
    monthly: 0,
    yearly: 0,
    description: 'For small teams getting off the ground.',
    features: ['Up to 5 members', 'Live docs', '3 project timelines', 'Community support'],
    cta: 'Start free',
    highlighted: false,
  },
  {
    name: 'Team',
    monthly: 18,
    yearly: 14,
    description: 'For growing teams that need async workflows.',
    features: [
      'Unlimited members',
      'Async standups',
      'Unlimited timelines',
      'Focus mode scheduling',
      'Priority support',
    ],
    cta: 'Start free trial',
    highlighted: true,
  },
  {
    name: 'Scale',
    monthly: 34,
    yearly: 27,
    description: 'For orgs that need control and reporting.',
    features: [
      'Everything in Team',
      'Insight reports',
      'SSO & audit logs',
      'Dedicated success manager',
      '99.9% uptime SLA',
    ],
    cta: 'Talk to sales',
    highlighted: false,
  },
]
