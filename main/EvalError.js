var ebjs = require('ebjs');

ebjs.define(EvalError,15,function*(buff,data){
  
  yield buff.pack(String,data.message);
  
},function*(buff){
  
  return new EvalError(yield buff.unpack(String));
  
});

