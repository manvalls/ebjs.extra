var ebjs = require('ebjs');

ebjs.define(SyntaxError,18,function*(data){
  
  yield this.pack(String,data.message);
  
},function*(){
  
  return new SyntaxError(yield this.unpack(String));
  
});
