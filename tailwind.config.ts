import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#060817',
        neon: {
          cyan: '#14f1ff',
          purple: '#8b5cf6',
          blue: '#3b82f6',
          pink: '#ec4899'
        }
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(135deg, #8b5cf6, #14f1ff, #3b82f6, #ec4899)'
      },
      boxShadow: {
        glow: '0 0 30px rgba(20,241,255,0.35)'
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
} satisfies Config;
