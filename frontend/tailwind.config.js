/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {extend: {
    container: {
        center: true,
        padding: '2rem',
    },
    screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '976px',
        'xl': '1200px',
        '2xl': '1440px',
    },
    colors: {
        primary: {
            //Main dark blue (theme color)
            LMS_Purple: '#4753e2',
            //Light purple color
        
        
        },
        LMS_Purple: '#4753e2',
        black: '#000000',
        white: '#ffffff',
    },
    fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
    },
    fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
    },
    borderRadius: {
        //Border-radius for cards
        card: '10px',
        //Border-radius for buttons
        button: '40px',
    },
    boxShadow: {
        'outer': '0px 4px 20px 0px rgba(0, 0, 0, 0.40)',
        'signup': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        'explore_players': '0px 5px 5px 0px rgba(0, 0, 0, 0.25)',
    },
},
},
  plugins: [],
}

