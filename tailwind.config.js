module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        'primary-hover': 'rgb(var(--color-primary-hover) / <alpha-value>)',
        'secondary-hover': 'rgb(var(--color-secondary-hover) / <alpha-value>)',
        'primary-soft': 'rgb(var(--color-primary-soft) / <alpha-value>)',
        canvas: 'rgb(var(--color-canvas) / <alpha-value>)',
        'canvas-soft': 'rgb(var(--color-canvas-soft) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        'ink-secondary': 'rgb(var(--color-ink-secondary) / <alpha-value>)',
        'ink-mute': 'rgb(var(--color-ink-mute) / <alpha-value>)',
        hairline: 'rgb(var(--color-hairline) / <alpha-value>)',
        'semantic-success': 'rgb(var(--color-semantic-success) / <alpha-value>)'
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
      },
      letterSpacing: {
        tightest: '-.05em',
        tighter: '-.02em'
      }
    }
  }
};
