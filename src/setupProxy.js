const { createProxyMiddleware } = require("http-proxy-middleware");
const proxy = {
  target: "https://api.yelp.com",
  changeOrigin: true,
};
module.exports = function (app) {
  app.use("/v3/businesses/search", createProxyMiddleware(proxy));
};
