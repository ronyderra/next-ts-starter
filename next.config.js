const pjson = require('./package.json');
const withSass = require('@zeit/next-sass');
const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript(
  withSass({
    assetPrefix: process.env.NODE_ENV === 'production' ? `/${pjson.name}` : '',
  }),
);
