var ebjs = require('ebjs');

ebjs.define(Error,14,function*(data){
  
  yield this.pack(String,data.message);
  
},function*(){
  
  return new Error(yield this.unpack(String));
  
});

