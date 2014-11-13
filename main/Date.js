var ebjs = require('ebjs');

ebjs.define(Date,11,function*(buff,data){
  
  yield buff.pack(Number,data.getTime());
  
},function*(buff){
  
  return new Date(yield buff.unpack(Number));
  
});

