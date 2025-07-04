/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Tema Oscuro Neón (predeterminado)
        'dark-neon-bg': '#1a1a1a',
        'dark-neon-gradient': '#2c3e50',
        'dark-neon-accent': '#00d4ff',
        'dark-neon-secondary': '#ff6b6b',
        'dark-neon-text': '#e0e0e0',
        // Tema Claro Moderno
        'light-modern-bg': '#f5f6fa',
        'light-modern-gradient': '#dfe6e9',
        'light-modern-accent': '#0984e3',
        'light-modern-secondary': '#636e72',
        'light-modern-text': '#2d3436',
        // Tema Remedios Clásico
        'remedios-bg': '#ffffff',
        'remedios-gradient': '#e6e6e6',
        'remedios-accent': '#1a3c34',
        'remedios-secondary': '#8b5a2b',
        'remedios-text': '#333333',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 1s ease-out',
        'pulse-glow': 'pulseGlow 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0, 212, 255, 0.5)' },
          '50%': { boxShadow: '0 0 15px rgba(0, 212, 255, 0.8)' },
        },
      },
    },
  },
  plugins: [],
};