var ebjs = require('ebjs');

ebjs.define(URIError,20,function*(buff,data){
  
  yield buff.pack(String,data.message);
  
},function*(buff){
  
  return new URIError(yield buff.unpack(String));
  
});
