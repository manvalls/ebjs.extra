var ebjs = require('ebjs');

ebjs.define(ReferenceError,17,function*(data){
  
  yield this.pack(String,data.message);
  
},function*(){
  
  return new ReferenceError(yield this.unpack(String));
  
});
