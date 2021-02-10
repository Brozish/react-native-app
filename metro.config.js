module.exports = {
  resetCache: true,

  maxWorkers: 6,

  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false
      }
    })
  }
}
