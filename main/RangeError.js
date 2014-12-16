var ebjs = require('ebjs');

ebjs.define(RangeError,16,function*(data){
  
  yield this.pack(String,data.message);
  
},function*(){
  
  return new RangeError(yield this.unpack(String));
  
});
