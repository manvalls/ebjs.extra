var ebjs = require('ebjs');

ebjs.define(TypeError,19,function*(data){
  
  yield this.pack(String,data.message);
  
},function*(){
  
  return new TypeError(yield this.unpack(String));
  
});
