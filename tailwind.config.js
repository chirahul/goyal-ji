/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        // v10 tokens (mapped to CSS variables in src/styles.css)
        ink:   { DEFAULT: '#14110F', soft: '#2A2520', mute: '#6B635C' },
        paper: { DEFAULT: '#F5EFE6', 2: '#EFE7DA', line: '#E0D5C2' },
        gold:  { DEFAULT: '#B8893D', soft: 'rgba(184,137,61,0.12)' },
        dark:  '#0E0B09',
        // Goyal orange — saturated v10 ramp; the old 50–950 numeric keys
        // below are kept until Phase 3 finishes migrating every section.
        goyal: {
          50:  '#FCEFE7',
          100: '#F8DAC9',
          200: '#fad0c3',
          300: '#ED8E63',
          400: '#ed7d5a',
          500: '#D94B17',  // primary brand orange (was #e05a2d)
          600: '#B83A0F',  // hover/pressed (was #c7421a)
          700: '#8E2C09',  // (was #a33515)
          800: '#862e14',
          900: '#6d2812',
          950: '#3E1304',  // deepest (was #2d0e05)
        },
      },
      fontFamily: {
        // v10 type stack
        display: ['Fraunces', 'Georgia', 'serif'],
        deva:    ['"Tiro Devanagari Hindi"', 'serif'],
        sans:    ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // v10 fluid type tokens
        'display':  ['clamp(48px, 9vw, 112px)',  { lineHeight: '0.96', letterSpacing: '-0.03em' }],
        'deva':     ['clamp(28px, 4vw, 56px)',   { lineHeight: '1.05' }],
        'h1':       ['clamp(36px, 6vw, 72px)',   { lineHeight: '1.0',  letterSpacing: '-0.02em' }],
        'h2':       ['clamp(28px, 4vw, 48px)',   { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'h3':       ['clamp(18px, 1.5vw, 22px)', { lineHeight: '1.3' }],
        'stat':     ['clamp(56px, 8vw, 96px)',   { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'micro':    ['12px', { lineHeight: '1.4', letterSpacing: '0.16em' }],
      },
      maxWidth: {
        'editorial': '72ch',
      },
    },
  },
  plugins: [],
};
