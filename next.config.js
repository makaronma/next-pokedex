const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public", // this is very imp
    disable: process.env.NODE_ENV === "development",
    register: true,
    scope: "/",
    sw: "service-worker.js",
  },
});
