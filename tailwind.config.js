/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          silver: '#F0F0F2',
          platinum: '#E5E4E2',
          pearl: '#FBFBFC',
          titanium: '#8E9094',
          graphite: '#3E3E42',
          blue: '#0062FF',
          blueLight: '#E6F0FF',
          copper: '#C87D55',
          copperLight: '#F2E3D8',
          dark: '#121212',
          chrome: '#EFEFEF',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 8px 32px 0 rgba(0, 0, 0, 0.04)',
        'luxury-glow': '0 0 50px rgba(0, 98, 255, 0.12)',
        'chrome-glow': '0 0 60px rgba(229, 228, 226, 0.5)',
        'card-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.06), 0 0 30px rgba(0, 98, 255, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up': 'fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-medium': 'floatMedium 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(1.5deg)' },
        },
        floatMedium: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(-1deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        }
      }
    },
  },
  plugins: [],
}
