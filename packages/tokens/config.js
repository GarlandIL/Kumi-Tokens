module.exports = {
  source: ['src/tokens.json'],
  hooks: {
    filters: {
      // Keep all tokens that are NOT in the "dark" group
      removeDark: token => token.path[0] !== 'dark',
      // Keep only tokens that ARE in the "dark" group, and strip the "dark" prefix from their path
      darkOnly: token => token.path[0] === 'dark',
    },
  },
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/css/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          filter: 'removeDark',
          options: {
            outputReferences: true,   // keep var() references for aliases
          },
        },
        {
          destination: 'dark.css',
          format: 'css/variables',
          filter: 'darkOnly',
          options: {
            outputReferences: true,
            selector: '[data-theme="dark"]',
          },
        },
      ],
    },
    js: {
      transformGroup: 'js',
      buildPath: 'dist/js/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6',
          filter: 'removeDark',
        },
      ],
    },
    json: {
      transformGroup: 'js',
      buildPath: 'dist/json/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json/flat',
        },
      ],
    },
  },
};