/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        body:['Montserrat ']
      },
      screens: {
        'md': '920px', // Modifier la taille 'sm' existante
        'xl': '1440px', // Modifier la taille 'xl' existante
        '3xl': '1920px', // Ajouter une nouvelle taille personnalisée
      },
    },
  },
  plugins: [],
}