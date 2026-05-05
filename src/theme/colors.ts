export interface ThemeColors {
  name: string
  label: string
  bg: string
  fg: string
  bg1: string
  bg2: string
  accent: string
  muted: string
  link: string
  green: string
  red: string
  border: string
}

export const sandboxDark: ThemeColors = {
  name: 'sandbox-dark',
  label: 'Dark',
  bg: '#0c0f14',
  fg: '#dce2ec',
  bg1: '#151921',
  bg2: '#1e2330',
  accent: '#06b6d4',
  muted: '#6b7a8f',
  link: '#22d3ee',
  green: '#22c55e',
  red: '#ef4444',
  border: '#1e2330',
}

export const sandboxLight: ThemeColors = {
  name: 'sandbox-light',
  label: 'Light',
  bg: '#f4f6f8',
  fg: '#1e293b',
  bg1: '#e8ecf1',
  bg2: '#dde3eb',
  accent: '#0891b2',
  muted: '#64748b',
  link: '#0e7490',
  green: '#16a34a',
  red: '#dc2626',
  border: '#dde3eb',
}

export const themes = [sandboxDark, sandboxLight]
