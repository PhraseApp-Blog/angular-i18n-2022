/*******************************************************
 * ⚠️ This server is for testing production builds in a
 * developmment environment. It has not been checked for
 * security. Please do not use in production!
 *******************************************************/
const path = require('path');
const express = require('express');

const port = 8080;
const rootDir = path.join(__dirname, 'dist/azcadea');

const locales = ['en-CA', 'ar'];
const defaultLocale = 'en-CA';

const server = express();

server.use(express.static(rootDir));

locales.forEach((locale) => {
  server.get(`/${locale}/*`, (req, res) => {
    res.sendFile(
      path.resolve(rootDir, locale, 'index.html')
    );
  });
});

server.get('/', (req, res) =>
  res.redirect(`/${defaultLocale}`)
);

server.listen(port, () =>
  console.log(`App running at port ${port}…`)
);
