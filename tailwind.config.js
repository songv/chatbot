// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // For the best performance and to avoid false positives,
    // be as specific as possible with your content configuration.
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary': '#FFF', // white
      'secondary': '#00CFC8', // teal
      'tertiary': '#03fff6', // light teal
      'quaternary': '#0d4d58', // muted teal
      'quinary': '#000', // black
      'senary': '#333', // charcoal black
      'septenary': '#666', // gray
      'octenary': '#e9e9e9', // light gray
      'nonary': '#00FF9C', // green
      'denary': '#AEFFD0', // light green
      'undenary': '#0a0a0a', // darker charcoal black
      'duodenary': '#adfbf8', // even lighter teal
      'tridenary': '#083138', // dark teal
      'quadenary': '#2A7A5D', // dark green
      'quidenary': '#0a0a0a' // darker charcoal black
    },
    fontFamily: {
      primary: ['Barlow', 'Arial', 'Helvetica', 'sans-serif'],
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      xxl: '1.4rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'sm': '1rem',
      }
    }
  }
};