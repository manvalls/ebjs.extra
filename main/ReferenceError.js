var ebjs = require('ebjs');

ebjs.define(ReferenceError,17,function*(buff,data){
  
  yield buff.pack(String,data.message);
  
},function*(buff){
  
  return new ReferenceError(yield buff.unpack(String));
  
});
