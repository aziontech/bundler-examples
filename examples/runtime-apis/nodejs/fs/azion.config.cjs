module.exports = {
  build: {
    preset: {
      name: "javascript",
    },
    memoryFS: {
      injectionDirs: ["files/"],
      removePathPrefix: "files/",
    },
  },
  rules: {
    request: [
      {
        name: "Execute Edge Function",
        match: "^\\/",
        behavior: {
          runFunction: {
            path: ".edge/worker.js",
          },
        },
      },
    ],
  },
};
