const StyleDictionary = require('style-dictionary')
const path = require('path')

const buildDictionary = (obj) => {
  const styleDictionary = StyleDictionary.extend(obj)

  styleDictionary.buildAllPlatforms()
}

const buildPath = path.join(__dirname, 'lib/')

buildDictionary({
  source: [path.join(__dirname, 'src/map/*.json')],
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
})

buildDictionary({
  source: [path.join(__dirname, 'src/tokens/**/*.json')],
  platforms: {
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
  },
})

buildDictionary({
  source: [path.join(__dirname, 'src/tokens/**/*.json')],
  platforms: {
    js: {
      transformGroup: 'js',
      buildPath,
      files: [
        {
          destination: 'js/variables.js',
          format: 'javascript/module',
        },
        {
          destination: 'variables.d.ts',
          format: 'typescript/module-declarations',
        },
      ],
    },
  },
})
