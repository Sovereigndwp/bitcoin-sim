/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        // Bitcoin-inspired color palette
        'bg-primary': '#0f0f0f',
        'bg-secondary': '#1a1a1a',
        'bg-card': '#1e1e1e',
        'bg-hover': '#2a2a2a',
        
        'accent-orange': '#f7931a',
        'accent-orange-light': '#ffb347',
        'accent-orange-dark': '#e87308',
        
        'text-primary': '#f4f4f4',
        'text-secondary': '#a0a0a0',
        'text-muted': '#666666',
        
        'border-default': '#333333',
        'border-accent': '#f7931a',
        
        'success': '#10b981',
        'warning': '#f59e0b',
        'error': '#ef4444',
        'info': '#3b82f6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(247, 147, 26, 0.4)' },
          '100%': { boxShadow: '0 0 30px rgba(247, 147, 26, 0.6), 0 0 60px rgba(247, 147, 26, 0.3)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-bitcoin': 'linear-gradient(45deg, #f7931a, #ffb347)',
        'gradient-dark': 'linear-gradient(135deg, #0f0f0f, #1a1a1a)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
