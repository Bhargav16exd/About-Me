export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Geist Mono"', 'monospace'],
        display: ['"Syne"', 'sans-serif'],
      },
      colors: {
        bg:        '#0a0a0a',
        bg1:       '#111111',
        bg2:       '#161616',
        bg3:       '#1c1c1c',
        line:      '#1e1e1e',
        line2:     '#2a2a2a',
        muted:     '#444444',
        subtle:    '#666666',
        secondary: '#888888',
        primary:   '#ededed',
      },
    },
  },
  plugins: [],
}
