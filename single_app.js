const  NodeMediaServer  = require('node-media-server');

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 60,
    ping_timeout: 30
  },
  http: {
    port: 8008,
    allow_origin: '*'
  },
  auth: {
    api : true,
    api_user: 'admin',
    api_pass: 'admin123456',
  },
  https: {
    port: 8443,
    key:'./ssl/2_app.lichen.pro.key',
    cert:'./ssl/1_app.lichen.pro_bundle.crt',
  }
};

var nms = new NodeMediaServer(config)
nms.run();