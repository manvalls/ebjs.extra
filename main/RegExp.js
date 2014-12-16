var ebjs = require('ebjs');

ebjs.define(RegExp,12,function*(data){
  
  var flags = 0;
  
  if(data.multiline)  flags |= 1;
  if(data.global)     flags |= 2;
  if(data.ignoreCase) flags |= 4;
  if(data.sticky)     flags |= 8;
  if(data.unicode)    flags |= 16;
  
  yield this.pack(Number,flags);
  yield this.pack(String,data.source);
  yield this.pack(Number,data.lastIndex);
  
},function*(){
  
  var re,flags = '',fn;
  
  fn = yield this.unpack(Number);
  
  if(fn & 1)  flags += 'm';
  if(fn & 2)  flags += 'g';
  if(fn & 4)  flags += 'i';
  if(fn & 8)  flags += 'y';
  if(fn & 16) flags += 'u';
  
  re = new RegExp(yield this.unpack(String),flags);
  re.lastIndex = yield this.unpack(Number);
  
  return re;
  
});

