import { useTheme } from '../context/ThemeContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  {
    step: '01',
    title: 'Initialize',
    description: 'Run sandbox init to generate a .sandbox.yml tailored to your stack. Auto-detects React, Vue, Astro, and more.',
    code: 'sandbox init',
  },
  {
    step: '02',
    title: 'Configure',
    description: 'Add scenarios with steps, mocks, and capture targets. One file defines your entire validation pipeline.',
    code: 'scenarios:\n  login:\n    steps:\n      - "navigate: /login"\n      - "type: #email, alice@example.com"\n      - screenshot',
  },
  {
    step: '03',
    title: 'Verify',
    description: 'Run sandbox verify --scenario login. The tool spins up your dev server, mocks APIs, drives Chromium, and saves screenshots.',
    code: 'sandbox verify --scenario login',
  },
  {
    step: '04',
    title: 'Report',
    description: 'Open the generated HTML report to inspect screenshots, timing, and status. Pass or fail — no guesswork.',
    code: '.sandbox/outputs/login/report.html',
  },
]

export default function HowItWorks() {
  const { theme } = useTheme()
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 px-4 overflow-hidden"
      style={{ backgroundColor: theme.bg1 }}
    >
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full blur-[120px]"
        style={{ backgroundColor: `${theme.accent}06` }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <h2
          className={`text-3xl font-bold tracking-tight mb-14 text-center transition-all duration-700 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ color: theme.fg }}
        >
          How it works
        </h2>

        <div className="flex flex-col gap-6">
          {steps.map((s, i) => (
            <StepCard
              key={s.step}
              step={s}
              index={i}
              sectionVisible={sectionVisible}
              theme={theme}
              isLast={i === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function StepCard({
  step,
  index,
  sectionVisible,
  theme,
  isLast,
}: {
  step: (typeof steps)[0]
  index: number
  sectionVisible: boolean
  theme: { accent: string; fg: string; muted: string; bg: string; bg2: string; border: string }
  isLast: boolean
}) {
  return (
    <div
      className={`group relative flex flex-col md:flex-row gap-5 items-start transition-all duration-700 ${
        sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: `${index * 120}ms`,
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      <div className="flex flex-col items-center shrink-0">
        <span
          className="text-2xl font-bold font-mono w-14 h-14 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
          style={{
            color: theme.accent,
            backgroundColor: `${theme.accent}12`,
            border: `1px solid ${theme.accent}25`,
            boxShadow: `0 0 20px ${theme.accent}10`,
          }}
        >
          {step.step}
        </span>
        {!isLast && (
          <div
            className="w-px flex-1 mt-3 hidden md:block"
            style={{
              background: `linear-gradient(180deg, ${theme.accent}30, transparent)`,
              minHeight: '40px',
            }}
          />
        )}
      </div>

      <div className="flex-1 pb-2">
        <h3 className="text-lg font-semibold mb-1.5" style={{ color: theme.fg }}>
          {step.title}
        </h3>
        <p className="text-sm mb-3 leading-relaxed" style={{ color: theme.muted }}>
          {step.description}
        </p>
        <pre
          className="text-sm font-mono rounded-xl p-4 overflow-x-auto transition-all duration-300 group-hover:shadow-lg"
          style={{
            backgroundColor: theme.bg2,
            color: theme.fg,
            border: `1px solid ${theme.border}`,
          }}
        >
          {step.code}
        </pre>
      </div>
    </div>
  )
}
