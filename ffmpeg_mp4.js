const  NodeMediaServer  = require('node-media-server');
const numCPUs = require('os').cpus().length;

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 60,
    ping_timeout: 30
  },
  http: {
    port: 8000,
    mediaroot: './media',
    allow_origin: '*'
  },
  
  // 多核模式下无效，控制台提示 NodeTransServer does not work in cluster mode
  // cluster: {
  //   num: numCPUs
  // },

  // Record to MP4
  trans: {
    ffmpeg: '/Users/chenli/ffmpeg/bin/ffmpeg', // 软件可执行路径
    tasks: [
      {
        app: 'live',
        mp4: true,
        mp4Flags: '[movflags=frag_keyframe+empty_moov]',
      }
    ]
  }
};

var nms = new NodeMediaServer(config)
nms.run();