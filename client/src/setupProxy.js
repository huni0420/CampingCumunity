const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
  app.use(
    '/v1',
    createProxyMiddleware({
      target: 'https://openapi.naver.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/user',
    createProxyMiddleware({
      target: 'https://kapi.kakao.com/v1',
      changeOrigin: true,
    })
  );
};