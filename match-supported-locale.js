function matchSupportedLocale(
  acceptsLocales,
  supportedLocales,
  defaultLocale
) {
  return (
    firstExactMatch(acceptsLocales, supportedLocales) ||
    firstLanguageMatch(acceptsLocales, supportedLocales) ||
    defaultLocale
  );
}

function firstExactMatch(acceptsLocales, supportedLocales) {
  return (
    acceptsLocales.find((al) =>
      supportedLocales.includes(al)
    ) || false
  );
}

function firstLanguageMatch(
  acceptsLocales,
  supportedLocales
) {
  for (acceptedLang of languagesFor(acceptsLocales)) {
    const matchingSupportedLocale = supportedLocales.find(
      (sl) => languageFor(sl) === acceptedLang
    );

    if (matchingSupportedLocale) {
      return matchingSupportedLocale;
    }
  }

  return false;
}

function languagesFor(locales) {
  return locales.map((loc) => languageFor(loc));
}

function languageFor(locale) {
  return locale.split('-')[0];
}

module.exports = matchSupportedLocale;
