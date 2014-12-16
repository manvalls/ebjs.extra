var ebjs = require('ebjs');

ebjs.define(Date,11,function*(data){
  
  yield this.pack(Number,data.getTime());
  
},function*(){
  
  return new Date(yield this.unpack(Number));
  
});

