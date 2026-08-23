export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      maxWidth: {
        prose: '68ch',
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      // Sharper geometry across every rounded-* utility
      borderRadius: {
        lg: '8px',
        xl: '10px',
        '2xl': '14px',
        '3xl': '18px',
      },
    },
  },
  plugins: [],
}
