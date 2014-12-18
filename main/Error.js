var ebjs = require('ebjs');

function* packer(data){
  yield this.pack(String,data.message);
}

function* unpacker(Constructor){
  return new Constructor(yield this.unpack(String));
}

ebjs.define(Error,          14,packer,unpacker);
ebjs.define(EvalError,      15,packer,unpacker);
ebjs.define(RangeError,     16,packer,unpacker);
ebjs.define(ReferenceError, 17,packer,unpacker);
ebjs.define(SyntaxError,    18,packer,unpacker);
ebjs.define(TypeError,      19,packer,unpacker);
ebjs.define(URIError,       20,packer,unpacker);
