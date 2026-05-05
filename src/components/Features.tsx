import { useTheme } from '../context/ThemeContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

const features = [
  {
    title: 'Scenario-Based Testing',
    description: 'Define validation scenarios in a single .sandbox.yml file. Navigate, interact, wait for elements, and capture screenshots — all declaratively.',
    icon: '📋',
  },
  {
    title: 'API Mocking',
    description: 'Inject mock responses for any API endpoint. Test UI states without relying on live backends or seed data.',
    icon: '🔌',
  },
  {
    title: 'Screenshot Capture',
    description: 'Real Chromium browser automation captures pixel-perfect screenshots at any step. Catch visual regressions before they ship.',
    icon: '📸',
  },
  {
    title: 'Dev Server Integration',
    description: 'Automatically spins up your dev server, waits for readiness, proxies traffic, and tears everything down cleanly.',
    icon: '⚡',
  },
  {
    title: 'TUI Progress',
    description: 'Watch every step unfold in a clean terminal UI. See mocks injected, pages loaded, screenshots saved, and reports generated in real time.',
    icon: '✨',
  },
  {
    title: 'HTML Reports',
    description: 'Every run produces a self-contained HTML report with timestamps, screenshots, and pass/fail status. Share or archive them.',
    icon: '📊',
  },
]

export default function Features() {
  const { theme } = useTheme()
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 px-4 overflow-hidden"
      style={{ backgroundColor: theme.bg }}
    >
      <div
        className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px]"
        style={{ backgroundColor: `${theme.accent}06` }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <h2
          className={`text-3xl font-bold tracking-tight mb-14 text-center transition-all duration-700 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ color: theme.fg }}
        >
          What it does
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={i}
              sectionVisible={sectionVisible}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  feature,
  index,
  sectionVisible,
  theme,
}: {
  feature: (typeof features)[0]
  index: number
  sectionVisible: boolean
  theme: { accent: string; fg: string; muted: string; bg1: string; border: string }
}) {
  return (
    <div
      className={`group relative p-6 rounded-2xl card-lift cursor-default transition-all duration-700 ${
        sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        backgroundColor: theme.bg1,
        border: `1px solid ${theme.border}`,
        transitionDelay: `${index * 100}ms`,
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: `0 0 40px ${theme.accent}12, inset 0 0 0 1px ${theme.accent}20`,
        }}
      />

      <div className="relative z-10">
        <div
          className="text-3xl mb-4 transition-transform duration-300 group-hover:scale-110 inline-block"
        >
          {feature.icon}
        </div>
        <h3 className="text-lg font-semibold mb-2" style={{ color: theme.fg }}>
          {feature.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: theme.muted }}>
          {feature.description}
        </p>
      </div>
    </div>
  )
}
