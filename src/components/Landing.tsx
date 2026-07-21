import heroImage from '../assets/hero.png'
import './Landing.css'

const navLinks = [
  { label: 'Product', href: '#' },
  { label: 'Customers', href: '#' },
  { label: 'Pricing', href: '#pricing' },
]

const features = [
  {
    title: 'One orchestration layer',
    body: 'Connect agents, systems, and people in one place.',
  },
  {
    title: 'Built-in guardrails',
    body: 'Control permissions, handoffs, and escalation.',
  },
  {
    title: 'Measure every run',
    body: 'Track quality, cost, speed, and business impact.',
  },
]

const pricingTiers = [
  {
    title: 'Starter',
    price: '$299',
    billing: 'per month',
    description: 'Perfect for teams just getting started with AI orchestration.',
    ctaText: 'Get started',
  },
  {
    title: 'Professional',
    price: '$999',
    billing: 'per month',
    description: 'For growing teams needing advanced control and monitoring.',
    ctaText: 'Get started',
    featured: true,
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    billing: "Let's talk",
    description: 'Dedicated support, custom integrations, and SLA guarantees.',
    ctaText: 'Contact sales',
  },
]

export function Landing() {
  return (
    <main
      className="hero"
      style={{
        backgroundImage: `
          linear-gradient(90deg, rgba(4, 9, 15, 0.97) 0%, rgba(4, 9, 15, 0.86) 27%, rgba(4, 9, 15, 0.4) 48%, rgba(4, 9, 15, 0.1) 78%),
          linear-gradient(180deg, rgba(3, 8, 13, 0.1) 0%, rgba(3, 8, 13, 0.05) 58%, rgba(3, 8, 13, 0.78) 100%),
          url("${heroImage}")
        `,
      }}
    >
      <nav>
        <div className="brand">
          <div className="logo">R</div>
          Relay
        </div>
        <div className="links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="https://bubble.io" className="navbtn" target="_blank" rel="noopener noreferrer">
            Book a demo
          </a>
        </div>
      </nav>

      <section className="content">
        <div className="copy">
          <div className="pill">
            <span className="dot" />
            AI orchestration for ambitious teams
          </div>
          <h1>Move faster than the market.</h1>
          <p className="sub">
            Deploy coordinated AI agents across sales, success, and
            operations—with shared context, human guardrails, and measurable
            outcomes.
          </p>
          <div className="actions">
            <a className="btn primary" href="#">
              Start building&nbsp; →
            </a>
            <a className="btn secondary" href="#">
              Watch the demo
            </a>
          </div>
        </div>
      </section>

      <section className="pricing" id="pricing">
        <div className="pricing-container">
          <div className="pricing-header">
            <h2>Simple, transparent pricing</h2>
            <p className="pricing-subtext">Choose the plan that fits your needs.</p>
          </div>
          <div className="pricing-tiers">
            {pricingTiers.map((tier) => (
              <div
                className={`pricing-card ${tier.featured ? 'featured' : ''}`}
                key={tier.title}
              >
                <div className="tier-title">{tier.title}</div>
                <div className="tier-price">{tier.price}</div>
                <div className="tier-billing">{tier.billing}</div>
                <p className="tier-description">{tier.description}</p>
                <a href="#" className="btn pricing-btn">
                  {tier.ctaText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bottom">
        {features.map((feature) => (
          <div className="card" key={feature.title}>
            <strong>{feature.title}</strong>
            {feature.body}
          </div>
        ))}
      </div>
    </main>
  )
}
