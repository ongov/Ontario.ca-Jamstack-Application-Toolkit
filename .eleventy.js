const localeStrings = require('./src/_data/localeStrings.json');

const fs = require('fs');
const matter = require('gray-matter');
const markdownIt = require('markdown-it');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    'src/assets': 'jamstack-toolkit/assets',
  });

  const md = new markdownIt({
    html: true,
  });

  eleventyConfig.addFilter('markdown', (content) => {
    return md.render(content);
  });

  eleventyConfig.addFilter('localeString', function (key) {
    // Solution for accessing page front matter from https://stackoverflow.com/a/67746326

    var page = this.ctx.page;
    var str = fs.readFileSync(page.inputPath, 'utf8');
    var data = matter(str).data;
    var lang = data.lang || 'en';

    if (key.includes('.')) {
      var keyArr = key.split('.');
      var localeString = localeStrings[keyArr.shift()];
      if (keyArr.length > 0) {
        keyArr.forEach((key) => {
          localeString = localeString[key];
        });
      }
    } else {
      var localeString = localeStrings[key];
    }
    return `${localeString[lang]}`;
  });

  // Return your Object options:
  return {
    pathPrefix: '/',
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
