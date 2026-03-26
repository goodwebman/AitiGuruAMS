const customTemplate = require('./svgr-template.cjs');

module.exports = {
  filenameCase: 'kebab',
  template: customTemplate,
  typescript: true,
  prettier: true,
  icon: true,

  prettierConfig: {
    arrowParens: 'always',
    bracketSameLine: false,
    bracketSpacing: true,
    singleQuote: true,
    trailingComma: 'es5',
    printWidth: 110,
  },

  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            inlineStyles: { onlyMatchedOnce: false },
            cleanupIds: false,
            removeDoctype: false,
            removeViewBox: false,
          },
        },
      },
    ],
  },

  
};