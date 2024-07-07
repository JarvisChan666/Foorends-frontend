export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    '@fullhuman/postcss-purgecss': {
      content: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.tsx'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    }
  }
};