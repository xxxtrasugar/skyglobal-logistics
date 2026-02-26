/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // <--- Perhatikan ada simbol @ dan /postcss
    autoprefixer: {},
  },
};

export default config;