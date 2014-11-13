var ebjs = require('ebjs');

ebjs.define(TypeError,19,function*(buff,data){
  
  yield buff.pack(String,data.message);
  
},function*(buff){
  
  return new TypeError(yield buff.unpack(String));
  
});
