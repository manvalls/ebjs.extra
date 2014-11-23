var ebjs = require('ebjs');

ebjs.define(RegExp,12,function*(buff,data){
  
  var flags = 0;
  
  if(data.multiline)  flags |= 1;
  if(data.global)     flags |= 2;
  if(data.ignoreCase) flags |= 4;
  if(data.sticky)     flags |= 8;
  if(data.unicode)    flags |= 16;
  
  yield buff.pack(Number,flags);
  yield buff.pack(String,data.source);
  yield buff.pack(Number,data.lastIndex);
  
},function*(buff){
  
  var re,flags = '',fn;
  
  fn = yield buff.unpack(Number);
  
  if(fn & 1)  flags += 'm';
  if(fn & 2)  flags += 'g';
  if(fn & 4)  flags += 'i';
  if(fn & 8)  flags += 'y';
  if(fn & 16) flags += 'u';
  
  re = new RegExp(yield buff.unpack(String),flags);
  re.lastIndex = yield buff.unpack(Number);
  
  return re;
  
});

