import { useTheme } from '../context/ThemeContext'
import { sandboxLight, sandboxDark } from '../theme/colors'

export default function Hero() {
  const { theme, isDark, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(isDark ? sandboxLight : sandboxDark)
  }

  return (
    <section className="relative flex flex-col items-center pt-28 pb-20 px-4 text-center overflow-hidden min-h-[85vh] justify-center">
      <div
        className="pointer-events-none absolute -inset-40 animate-pulse-glow"
        style={{
          background: `radial-gradient(ellipse 50% 35% at 50% 40%, ${theme.accent}18 0%, ${theme.accent}06 40%, transparent 70%)`,
        }}
      />

      <div
        className="pointer-events-none absolute top-20 left-[15%] w-72 h-72 rounded-full animate-float-slow blur-[100px]"
        style={{ backgroundColor: `${theme.accent}10` }}
      />
      <div
        className="pointer-events-none absolute bottom-32 right-[10%] w-64 h-64 rounded-full animate-float blur-[90px]"
        style={{ backgroundColor: `${theme.accent}08` }}
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, ${isDark ? 'rgba(255,255,255,0.025)' : 'rgba(0,0,0,0.018)'} 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${theme.accent}30, transparent)`,
        }}
      />

      <div className="relative mb-8 hero-entrance">
        <div className="animate-float">
          <svg width="88" height="88" viewBox="0 0 80 80" fill="none" className="w-[88px] h-[88px]">
            <rect x="12" y="16" width="56" height="48" rx="4" stroke={theme.accent} strokeWidth="3" fill="none" />
            <rect x="20" y="28" width="40" height="28" rx="2" stroke={theme.fg} strokeWidth="2" fill="none" />
            <circle cx="40" cy="42" r="8" stroke={theme.accent} strokeWidth="2" fill="none" />
            <path d="M36 42l3 3 5-6" stroke={theme.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 16l6-8h36l6 8" stroke={theme.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <h1
        className="text-6xl sm:text-7xl font-bold tracking-tight mb-5 relative z-10 hero-entrance hero-entrance-delay-1"
        style={{
          color: theme.fg,
          textShadow: isDark ? `0 0 40px ${theme.accent}20` : 'none',
        }}
      >
        sandbox
      </h1>

      <p
        className="text-lg sm:text-xl mb-8 max-w-xl relative z-10 hero-entrance hero-entrance-delay-2 leading-relaxed"
        style={{ color: theme.muted }}
      >
        Visual validation engine for AI agents. Spin up your dev server, mock APIs, capture screenshots, and validate every front-end change — from a single config file.
      </p>

      <div className="flex gap-4 mb-8 relative z-10 hero-entrance hero-entrance-delay-3">
        <a
          href="#install"
          className="px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
          style={{
            backgroundColor: theme.accent,
            color: isDark ? '#0c0f14' : '#fff',
            boxShadow: `0 4px 24px ${theme.accent}50`,
          }}
        >
          Install
        </a>
        <a
          href="https://github.com/nfvelten/sandbox"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: theme.bg1,
            color: theme.fg,
            border: `1px solid ${theme.border}`,
          }}
        >
          GitHub
        </a>
      </div>

      <button
        onClick={toggleTheme}
        className="text-xs px-4 py-2 rounded-full transition-all hover:scale-105 mb-8 relative z-10 hero-entrance hero-entrance-delay-4"
        style={{
          backgroundColor: theme.bg1,
          color: theme.muted,
          border: `1px solid ${theme.border}`,
        }}
      >
        {isDark ? '◐ Light mode' : '◑ Dark mode'}
      </button>

      <div className="flex gap-2 flex-wrap justify-center relative z-10 hero-entrance hero-entrance-delay-5">
        {['Rust', 'Chromium', 'Screenshot diff', 'API mocking'].map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-110 cursor-default"
            style={{
              backgroundColor: `${theme.bg1}80`,
              color: theme.muted,
              border: `1px solid ${theme.border}`,
              backdropFilter: 'blur(8px)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hero-entrance hero-entrance-delay-6"
        style={{ color: theme.muted }}
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
