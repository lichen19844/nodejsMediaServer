const NodeMediaServer  = require('node-media-server');

//获取配置
var appConfig=require('./module/config.js');

// md5加密
var md5 = require('md5');

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
    allow_origin: '*'
  },
  auth: {
    play: true, //表示拉流的时候是开启鉴权验证
    publish: true,  //表示推流的时候开启鉴权验证
    secret: appConfig.secret
  }
};

var nms = new NodeMediaServer(config)
nms.run();


//生成推流地址 -演示，和本例代码无关，仅仅是生成后给OBS和VLC用

var streamName="lichen";
var expireDate=parseInt((Date.now()+1000000)/1000);

var HashValue=md5(`/live/${streamName}-${expireDate}-${appConfig.secret}`);

var sign=`${expireDate}-${HashValue}`;

var rtmpUrl=`rtmp://192.168.3.6/live/${streamName}?sign=${sign}`;
var httpUrl = `http://192.168.3.6:8000/live/${streamName}.flv?sign=${sign}`;

console.log('rtmpUrl', rtmpUrl);
console.log('httpUrl', httpUrl);


