module.exports = {
  darkMode:'classes',
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],

  images: {
    domains: ['localhost'],
  },
}
