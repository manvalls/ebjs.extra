var ebjs = require('ebjs');

ebjs.define(URIError,20,function*(data){
  
  yield this.pack(String,data.message);
  
},function*(){
  
  return new URIError(yield this.unpack(String));
  
});
