var ebjs = require('ebjs');

ebjs.define(Error,14,function*(buff,data){
  
  yield buff.pack(String,data.message);
  
},function*(buff){
  
  return new Error(yield buff.unpack(String));
  
});

