/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // src klasörü içindeki tüm html ve js dosyaları
    "./*.{html,js}", // kök dizindeki tüm html ve js dosyaları
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
