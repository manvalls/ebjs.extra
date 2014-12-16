var ebjs = require('ebjs');

ebjs.define(EvalError,15,function*(data){
  
  yield this.pack(String,data.message);
  
},function*(){
  
  return new EvalError(yield this.unpack(String));
  
});

