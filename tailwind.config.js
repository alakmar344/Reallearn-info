export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      maxWidth: {
        prose: '72ch',
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        volt: {
          DEFAULT: '#c5f82a',
          deep: '#9dbd0a',
          soft: '#e4fba0',
        },
        blueprint: {
          paper: '#edeef1',
          card: '#ffffff',
          ink: '#131315',
        },
      },
    },
    // Blueprint geometry: soft technical rounding like the reference
    borderRadius: {
      none: '0px',
      DEFAULT: '10px',
      sm: '8px',
      md: '10px',
      lg: '14px',
      xl: '18px',
      '2xl': '22px',
      '3xl': '28px',
      full: '999px',
    },
  },
  plugins: [],
}
