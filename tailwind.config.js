module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./*.html"],
  theme: {
    extend: {
      colors: {
        // Apple-inspired Primary Colors - Space Gray System
        primary: {
          DEFAULT: "#1D1D1F", // Apple Deep Space Gray
          50: "#FFFFFF", // Pure White
          100: "#F5F5F7", // Apple Light Gray
          200: "#E8E8ED", // Apple Border Gray
          300: "#D2D2D7", // Apple Medium Light Gray
          400: "#A1A1A6", // Apple Medium Gray
          500: "#86868B", // Apple Text Secondary
          600: "#6E6E73", // Apple Dark Secondary
          700: "#515154", // Apple Darker Gray
          800: "#2C2C2E", // Apple Dark Gray
          900: "#1D1D1F", // Apple Deep Space Gray
        },
        // Apple Blue System
        secondary: {
          DEFAULT: "#007AFF", // Apple Blue
          50: "#E6F3FF", // Light Apple Blue
          100: "#CCE7FF", // Lighter Apple Blue
          500: "#007AFF", // Apple Blue
          600: "#0056CC", // Darker Apple Blue
          700: "#004499", // Deep Apple Blue
        },
        // Apple Accent System
        accent: {
          DEFAULT: "#007AFF", // Apple Blue
          50: "#E6F3FF", // Light Apple Blue
          100: "#CCE7FF", // Lighter Apple Blue
          400: "#339FFF", // Medium Apple Blue
          500: "#007AFF", // Apple Blue
          600: "#0056CC", // Darker Apple Blue
        },
        // Apple Background System
        background: "#FFFFFF", // Pure White
        surface: {
          DEFAULT: "#F5F5F7", // Apple Light Gray Background
          100: "#F2F2F7", // Apple System Light
          secondary: "#FAFAFA", // Apple Secondary Background
        },
        // Apple Text System
        text: {
          primary: "#1D1D1F", // Apple Deep Space Gray
          secondary: "#86868B", // Apple Secondary Text
          muted: "#A1A1A6", // Apple Tertiary Text
          light: "#FFFFFF", // Pure White Text
        },
        // Apple Status Colors
        success: {
          DEFAULT: "#30D158", // Apple Green
          50: "#E8F7ED", // Light Apple Green
          100: "#D1EFDA", // Lighter Apple Green
          500: "#30D158", // Apple Green
        },
        warning: {
          DEFAULT: "#FF9F0A", // Apple Orange
          50: "#FFF4E6", // Light Apple Orange
          100: "#FFE9CC", // Lighter Apple Orange
        },
        error: {
          DEFAULT: "#FF453A", // Apple Red
          50: "#FFE8E6", // Light Apple Red
          100: "#FFD1CC", // Lighter Apple Red
          500: "#FF453A", // Apple Red
        },
        // Apple Border System
        border: {
          DEFAULT: "#D2D2D7", // Apple Separator
          light: "#E8E8ED", // Apple Light Separator
        },
      },
      fontFamily: {
        display: ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        body: ['SF Pro Text', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        sans: ['SF Pro Text', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'serif'],
      },
      fontSize: {
        'display-xl': ['3.5rem', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.025em' }],
        'display-lg': ['3rem', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.025em' }],
        'display-md': ['2.25rem', { lineHeight: '1.2', fontWeight: '600', letterSpacing: '-0.022em' }],
        'display-sm': ['1.875rem', { lineHeight: '1.2', fontWeight: '600', letterSpacing: '-0.022em' }],
        'hero': ['4rem', { lineHeight: '1.05', fontWeight: '700', letterSpacing: '-0.025em' }],
        'title': ['2.5rem', { lineHeight: '1.1', fontWeight: '600', letterSpacing: '-0.022em' }],
      },
      boxShadow: {
        'credential': '0 2px 8px 0 rgba(29, 29, 31, 0.08)',
        'cta': '0 4px 24px 0 rgba(0, 122, 255, 0.2)',
        'apple': '0 4px 16px 0 rgba(29, 29, 31, 0.12)',
        'apple-lg': '0 8px 32px 0 rgba(29, 29, 31, 0.16)',
        'apple-xl': '0 16px 48px 0 rgba(29, 29, 31, 0.2)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      transitionDuration: {
        '250': '250ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-in-out': 'ease-in-out',
        'bounce': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      backdropBlur: {
        'apple': '20px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}