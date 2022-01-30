module.exports = {
    moduleFileExtensions: [
      'js',
      'jsx',
      'json',
      'vue',
      'ts',
      'tsx'
    ],
    transform: {
      '^.+\\.js$': 'babel-jest',
      '^.+\\.vue$': 'vue-jest',
      '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
      "\\.js$": "<rootDir>/node_modules/babel-jest"
    },
    snapshotSerializers: [
      'jest-serializer-vue'
    ],
    testMatch: [
        "**/test/**/test.spec.{j,t}s?(x)"
    ],
    testURL: 'http://localhost/',
    watchPlugins: [
      'jest-watch-typeahead/filename',
      'jest-watch-typeahead/testname'
    ],
    globals: {
      'js-jest': {
        babelConfig: true
      }
    }
  }