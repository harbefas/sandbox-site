import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useTheme } from '../context/ThemeContext'

function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <button
      onClick={handleCopy}
      className="text-xs px-2 py-1 rounded-md transition-all duration-200 hover:scale-105"
      style={{
        backgroundColor: copied ? '#22c55e' : 'transparent',
        color: copied ? '#fff' : 'inherit',
      }}
    >
      {copied ? '✓ Copied' : 'Copy'}
    </button>
  )
}

function TerminalBlock({ label, code, delay }: { label?: string; code: string; delay: number }) {
  const { theme } = useTheme()
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {label && (
        <span className="text-xs font-medium mb-2 block" style={{ color: theme.muted }}>
          {label}
        </span>
      )}
      <div
        className="rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
        style={{
          backgroundColor: theme.bg1,
          border: `1px solid ${theme.border}`,
        }}
      >
        <div
          className="flex items-center gap-2 px-4 py-2.5"
          style={{
            backgroundColor: theme.bg2,
            borderBottom: `1px solid ${theme.border}`,
          }}
        >
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ff5f56' }} />
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ffbd2e' }} />
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#27c93f' }} />
          <span className="text-[10px] font-mono ml-2" style={{ color: theme.muted }}>
            bash
          </span>
          <div className="ml-auto">
            <CopyButton code={code} />
          </div>
        </div>
        <pre
          className="text-sm font-mono p-4 overflow-x-auto text-left"
          style={{ color: theme.fg }}
        >
          {code}
        </pre>
      </div>
    </div>
  )
}

export default function Install() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>()
  const { theme } = useTheme()

  return (
    <section
      ref={sectionRef}
      id="install"
      className="relative w-full py-20 px-4 overflow-hidden"
      style={{ backgroundColor: theme.bg }}
    >
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[150px]"
        style={{ backgroundColor: `${theme.accent}05` }}
      />

      <div className="max-w-2xl mx-auto relative z-10">
        <h2
          className={`text-3xl font-bold tracking-tight mb-10 text-center transition-all duration-700 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ color: theme.fg }}
        >
          Install
        </h2>

        <div className="flex flex-col gap-6">
          <TerminalBlock
            code="git clone https://github.com/nfvelten/sandbox\ncd sandbox && cargo install --path ."
            delay={0}
          />
          <TerminalBlock
            label="Initialize a project"
            code="sandbox init"
            delay={100}
          />
          <TerminalBlock
            label="Run a scenario"
            code="sandbox verify --scenario example"
            delay={200}
          />
        </div>
      </div>
    </section>
  )
}
