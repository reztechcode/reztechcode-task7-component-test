/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: { 
          primary: "#1e293b",              
          secondary: "#475569",               
          neutral: "#3d4451",              
          "base-100": "#ffffff",            
          "base-input": "#f3f4f6", // Warna latar belakang input
          "base-content": "#1f2937", // Warna teks input
        },
      },
      "light",
      "dark",
      "cupcake",
    ],
  },
}
