module.exports = {
  build: {
    polyfills: true,
    memoryFS: {
      injectionDirs: ["files/"],
      removePathPrefix: "files/",
    },
  },
};
