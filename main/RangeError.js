var ebjs = require('ebjs');

ebjs.define(RangeError,16,function*(buff,data){
  
  yield buff.pack(String,data.message);
  
},function*(buff){
  
  return new RangeError(yield buff.unpack(String));
  
});
