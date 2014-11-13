var ebjs = require('ebjs');

ebjs.define(Function,13,function*(buff,data){
  
  var str = data.toString(),
      body = str.match(/{(.*)}/)[1] || '',
      args = str.match(/\((.*?)\)/)[1].split(','),
      i;
  
  for(i = 0;i < args.length;i++) args[i] = args[i].trim();
  args.push(body);
  console.log(body,args);
  
  yield buff.pack(Array,args);
  
},function*(buff){
  
  var args = yield buff.unpack(Array);
  console.log(args);
  return Function.apply(this,args);
  
});

