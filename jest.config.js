module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ['**/*.test.js'],
  transform: {
    '^.+\\.vue$': 'vue-jest'
  }
}