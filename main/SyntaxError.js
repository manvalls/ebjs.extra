var ebjs = require('ebjs');

ebjs.define(SyntaxError,18,function*(buff,data){
  
  yield buff.pack(String,data.message);
  
},function*(buff){
  
  return new SyntaxError(yield buff.unpack(String));
  
});
