import heroImage from '../assets/hero.png'
import './Landing.css'

const navLinks = [
  { label: 'Product', href: '#' },
  { label: 'Customers', href: '#' },
  { label: 'Pricing', href: '#' },
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

const logoNames = ['Acme Corp', 'Horizon', 'Meridian', 'Stratum', 'Vertex', 'Capsule']

const featureCards = [
  { icon: '🔗', title: 'Multi-agent routing', desc: 'Route tasks to the right agent automatically.' },
  { icon: '🧠', title: 'Shared memory', desc: 'Agents share context across every run.' },
  { icon: '🛡️', title: 'Human-in-the-loop', desc: 'Set escalation rules for any workflow.' },
  { icon: '📊', title: 'Live analytics', desc: 'Monitor quality, cost, and speed in real time.' },
  { icon: '🔌', title: 'Native integrations', desc: 'Connect your CRM, inbox, and data warehouse.' },
  { icon: '⚡', title: 'Sub-second latency', desc: 'Agents respond in milliseconds, not minutes.' },
]

const steps = [
  {
    n: '01',
    title: 'Connect your stack',
    desc: 'Plug in your existing tools via OAuth or API key. Works with what you already use.',
  },
  {
    n: '02',
    title: 'Design your workflows',
    desc: 'Drag, drop, and configure agents in the visual builder. No code required to start.',
  },
  {
    n: '03',
    title: 'Ship with confidence',
    desc: 'Go live with guardrails, rollback, and full observability baked in.',
  },
]

const testimonials = [
  {
    quote: 'Relay cut our ops overhead by 60% in the first month.',
    name: 'Sarah K.',
    title: 'Head of Ops at Acme',
    initial: 'S',
  },
  {
    quote: 'The guardrail system is the only reason our board approved AI in prod.',
    name: 'James T.',
    title: 'CTO at Horizon',
    initial: 'J',
  },
  {
    quote: 'We shipped 4 agent workflows before lunch on day one.',
    name: 'Priya M.',
    title: 'Founder at Capsule',
    initial: 'P',
  },
]

export function Landing() {
  return (
    <>
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
            <a href="#" className="navbtn">
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

        <div className="bottom">
          {features.map((feature) => (
            <div className="card" key={feature.title}>
              <strong>{feature.title}</strong>
              {feature.body}
            </div>
          ))}
        </div>
      </main>

      <section className="logos-section">
        <div className="section-inner">
          <p className="logos-heading">Trusted by teams moving fast</p>
          <div className="logos-row">
            {logoNames.map((name) => (
              <span key={name} className="logo-mark">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="section-inner">
          <div className="section-header">
            <h2 className="section-h2">Everything you need to run AI at scale</h2>
            <p className="section-sub">One platform. Zero coordination tax.</p>
          </div>
          <div className="features-grid">
            {featureCards.map((card) => (
              <div key={card.title} className="feature-card">
                <span className="feature-icon">{card.icon}</span>
                <strong className="feature-title">{card.title}</strong>
                <p className="feature-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="how-section">
        <div className="section-inner">
          <h2 className="section-h2">Up and running in minutes</h2>
          <div className="steps-row">
            {steps.map((step) => (
              <div key={step.n} className="step">
                <span className="step-num">{step.n}</span>
                <strong className="step-title">{step.title}</strong>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="section-inner">
          <div className="testimonials-row">
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card">
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-author">
                  <div className="avatar">{t.initial}</div>
                  <div className="author-info">
                    <strong>{t.name}</strong>
                    <span>{t.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="section-inner cta-inner">
          <h2 className="cta-h2">The fastest teams are already building.</h2>
          <p className="cta-sub">Join them before your competitors do.</p>
          <div className="actions">
            <a className="btn primary" href="#">
              Start building&nbsp; →
            </a>
            <a className="btn secondary" href="#">
              Book a demo
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
