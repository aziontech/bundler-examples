module.exports = {
  build: {
    preset: "next",
    polyfills: true,
    memoryFS: {
      injectionDirs: ["data"],
      removePathPrefix: "",
    },
  },
};
