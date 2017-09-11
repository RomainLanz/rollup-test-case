class TestCase {
  constructor (options) {
    const defaultOptions = {
      moreKey: 'testing',
    }

    this.$options = {
      ...options,
      ...defaultOptions,
      evenMoreKey: 'testing',
    }
  }
}