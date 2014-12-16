var ebjs = require('ebjs');

ebjs.define(Function,13,function*(data){
  
  var str = data.toString(),
      body = str.match(/{(.*)}/)[1] || '',
      args = str.match(/\((.*?)\)/)[1].split(','),
      i;
  
  for(i = 0;i < args.length;i++) args[i] = args[i].trim();
  args.push(body);
  
  yield this.pack(Array,args);
  
},function*(){
  
  var args = yield this.unpack(Array);
  
  return Function.apply(this,args);
  
});

