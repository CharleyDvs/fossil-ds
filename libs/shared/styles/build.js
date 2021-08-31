const StyleDictionary = require('style-dictionary')
const path = require('path')

const buildDictionary = (confObj) => {
  const styleDictionary = StyleDictionary.extend(confObj)

  styleDictionary.buildAllPlatforms()
}

const buildPath = path.join(__dirname, 'lib/')

const configurationOutputs = [
  {
    source: [
      path.join(__dirname, 'src/map/*.json'),
      path.join(__dirname, 'src/tokens/spacing/spacing.json'),
    ],
    platforms: {
      scss: {
        transformGroup: 'scss',
        buildPath,
        files: [
          {
            destination: 'scss/_map.scss',
            format: 'scss/map-deep',
          },
        ],
      },
    },
  },
  {
    source: [path.join(__dirname, 'src/tokens/**/*.json')],
    platforms: {
      css: {
        transformGroup: 'css',
        buildPath,
        files: [
          {
            destination: 'css/variables.css',
            format: 'css/variables',
          },
        ],
      },
      scss: {
        transformGroup: 'scss',
        buildPath,
        files: [
          {
            destination: 'scss/_variables.scss',
            format: 'scss/variables',
          },
        ],
      },
      js: {
        transformGroup: 'js',
        buildPath,
        files: [
          {
            destination: 'js/variables.js',
            format: 'javascript/module',
          },
        ],
      },
      ts: {
        transformGroup: 'js',
        buildPath: path.resolve(__dirname) + '/',
        files: [
          {
            destination: 'variables.d.ts',
            format: 'typescript/module-declarations',
          },
        ],
      },
    },
  },
]

configurationOutputs.forEach((confObj) => buildDictionary(confObj))
