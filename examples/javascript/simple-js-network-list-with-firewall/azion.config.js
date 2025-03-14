export default {
  build: {
    entry: "main.js",
    preset: "javascript",
    worker: true,
  },
  networkList: [
    {
      id: 1111,
      listType: "ip_cidr",
      listContent: ["127.0.0.0/8"],
    },
  ],
};
