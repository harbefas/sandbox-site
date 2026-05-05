import { useTheme } from '../context/ThemeContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Footer() {
  const { theme } = useTheme()
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <footer
      ref={ref}
      className={`w-full py-10 px-4 text-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ backgroundColor: theme.bg }}
    >
      <div className="max-w-2xl mx-auto">
        <div
          className="w-12 h-px mx-auto mb-6"
          style={{
            background: `linear-gradient(90deg, transparent, ${theme.accent}40, transparent)`,
          }}
        />
        <p className="text-sm mb-4" style={{ color: theme.muted }}>
          Built for agents, by agents. Validate before you ship.
        </p>
        <div className="mt-6 flex justify-center gap-6">
          <a
            href="https://github.com/nfvelten/sandbox"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-all duration-200 hover:opacity-80 hover:scale-105 inline-block"
            style={{ color: theme.link }}
          >
            GitHub
          </a>
          <a
            href="https://github.com/nfvelten/sandbox/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-all duration-200 hover:opacity-80 hover:scale-105 inline-block"
            style={{ color: theme.link }}
          >
            Docs
          </a>
        </div>
        <p className="text-xs mt-6" style={{ color: theme.muted }}>
          © 2026 sandbox
        </p>
      </div>
    </footer>
  )
}
