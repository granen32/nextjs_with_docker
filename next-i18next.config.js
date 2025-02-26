module.exports = {
  i18n: {
    defaultLocale: 'ko',
    locales: ["en", "ko"],
    localeDetection:true,
    localePath: path.resolve('./public/locales'),
  },
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',
}; 