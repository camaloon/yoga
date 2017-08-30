/*!
 * BSD License
 * 
 * For yoga software
 * 
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 * 
 *  * Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 * 
 *  * Neither the name Facebook nor the names of its contributors may be used to
 *    endorse or promote products derived from this software without specific
 *    prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Yoga"] = factory();
	else
		root["Yoga"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, Buffer) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, wrapper) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
    return wrapper;
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if (typeof module == "object" && module.exports) module.exports = wrapper;else (root.nbind = root.nbind || {}).init = wrapper;
})(this, function (Module, cb) {
  if (typeof Module == "function") {
    cb = Module;Module = {};
  }Module.onRuntimeInitialized = function (init, cb) {
    return function () {
      if (init) init.apply(this, arguments);try {
        Module.ccall("nbind_init");
      } catch (err) {
        cb(err);return;
      }cb(null, { bind: Module._nbind_value, reflect: Module.NBind.reflect, queryType: Module.NBind.queryType, toggleLightGC: Module.toggleLightGC, lib: Module });
    };
  }(Module.onRuntimeInitialized, cb);var Module;if (!Module) Module = (typeof Module !== "undefined" ? Module : null) || {};var moduleOverrides = {};for (var key in Module) {
    if (Module.hasOwnProperty(key)) {
      moduleOverrides[key] = Module[key];
    }
  }var ENVIRONMENT_IS_WEB = false;var ENVIRONMENT_IS_WORKER = false;var ENVIRONMENT_IS_NODE = false;var ENVIRONMENT_IS_SHELL = false;if (Module["ENVIRONMENT"]) {
    if (Module["ENVIRONMENT"] === "WEB") {
      ENVIRONMENT_IS_WEB = true;
    } else if (Module["ENVIRONMENT"] === "WORKER") {
      ENVIRONMENT_IS_WORKER = true;
    } else if (Module["ENVIRONMENT"] === "NODE") {
      ENVIRONMENT_IS_NODE = true;
    } else if (Module["ENVIRONMENT"] === "SHELL") {
      ENVIRONMENT_IS_SHELL = true;
    } else {
      throw new Error("The provided Module['ENVIRONMENT'] value is not valid. It must be one of: WEB|WORKER|NODE|SHELL.");
    }
  } else {
    ENVIRONMENT_IS_WEB = typeof window === "object";ENVIRONMENT_IS_WORKER = typeof importScripts === "function";ENVIRONMENT_IS_NODE = typeof process === "object" && "function" === "function" && !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER;ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
  }if (ENVIRONMENT_IS_NODE) {
    if (!Module["print"]) Module["print"] = console.log;if (!Module["printErr"]) Module["printErr"] = console.warn;var nodeFS;var nodePath;Module["read"] = function shell_read(filename, binary) {
      if (!nodeFS) nodeFS = {}("");if (!nodePath) nodePath = {}("");filename = nodePath["normalize"](filename);var ret = nodeFS["readFileSync"](filename);return binary ? ret : ret.toString();
    };Module["readBinary"] = function readBinary(filename) {
      var ret = Module["read"](filename, true);if (!ret.buffer) {
        ret = new Uint8Array(ret);
      }assert(ret.buffer);return ret;
    };Module["load"] = function load(f) {
      globalEval(read(f));
    };if (!Module["thisProgram"]) {
      if (process["argv"].length > 1) {
        Module["thisProgram"] = process["argv"][1].replace(/\\/g, "/");
      } else {
        Module["thisProgram"] = "unknown-program";
      }
    }Module["arguments"] = process["argv"].slice(2);if (true) {
      module["exports"] = Module;
    }process["on"]("uncaughtException", function (ex) {
      if (!(ex instanceof ExitStatus)) {
        throw ex;
      }
    });Module["inspect"] = function () {
      return "[Emscripten Module object]";
    };
  } else if (ENVIRONMENT_IS_SHELL) {
    if (!Module["print"]) Module["print"] = print;if (typeof printErr != "undefined") Module["printErr"] = printErr;if (typeof read != "undefined") {
      Module["read"] = read;
    } else {
      Module["read"] = function shell_read() {
        throw "no read() available";
      };
    }Module["readBinary"] = function readBinary(f) {
      if (typeof readbuffer === "function") {
        return new Uint8Array(readbuffer(f));
      }var data = read(f, "binary");assert(typeof data === "object");return data;
    };if (typeof scriptArgs != "undefined") {
      Module["arguments"] = scriptArgs;
    } else if (typeof arguments != "undefined") {
      Module["arguments"] = arguments;
    }if (typeof quit === "function") {
      Module["quit"] = function (status, toThrow) {
        quit(status);
      };
    }
  } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
    Module["read"] = function shell_read(url) {
      var xhr = new XMLHttpRequest();xhr.open("GET", url, false);xhr.send(null);return xhr.responseText;
    };if (ENVIRONMENT_IS_WORKER) {
      Module["readBinary"] = function readBinary(url) {
        var xhr = new XMLHttpRequest();xhr.open("GET", url, false);xhr.responseType = "arraybuffer";xhr.send(null);return new Uint8Array(xhr.response);
      };
    }Module["readAsync"] = function readAsync(url, onload, onerror) {
      var xhr = new XMLHttpRequest();xhr.open("GET", url, true);xhr.responseType = "arraybuffer";xhr.onload = function xhr_onload() {
        if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
          onload(xhr.response);
        } else {
          onerror();
        }
      };xhr.onerror = onerror;xhr.send(null);
    };if (typeof arguments != "undefined") {
      Module["arguments"] = arguments;
    }if (typeof console !== "undefined") {
      if (!Module["print"]) Module["print"] = function shell_print(x) {
        console.log(x);
      };if (!Module["printErr"]) Module["printErr"] = function shell_printErr(x) {
        console.warn(x);
      };
    } else {
      var TRY_USE_DUMP = false;if (!Module["print"]) Module["print"] = TRY_USE_DUMP && typeof dump !== "undefined" ? function (x) {
        dump(x);
      } : function (x) {};
    }if (ENVIRONMENT_IS_WORKER) {
      Module["load"] = importScripts;
    }if (typeof Module["setWindowTitle"] === "undefined") {
      Module["setWindowTitle"] = function (title) {
        document.title = title;
      };
    }
  } else {
    throw "Unknown runtime environment. Where are we?";
  }function globalEval(x) {
    eval.call(null, x);
  }if (!Module["load"] && Module["read"]) {
    Module["load"] = function load(f) {
      globalEval(Module["read"](f));
    };
  }if (!Module["print"]) {
    Module["print"] = function () {};
  }if (!Module["printErr"]) {
    Module["printErr"] = Module["print"];
  }if (!Module["arguments"]) {
    Module["arguments"] = [];
  }if (!Module["thisProgram"]) {
    Module["thisProgram"] = "./this.program";
  }if (!Module["quit"]) {
    Module["quit"] = function (status, toThrow) {
      throw toThrow;
    };
  }Module.print = Module["print"];Module.printErr = Module["printErr"];Module["preRun"] = [];Module["postRun"] = [];for (var key in moduleOverrides) {
    if (moduleOverrides.hasOwnProperty(key)) {
      Module[key] = moduleOverrides[key];
    }
  }moduleOverrides = undefined;var Runtime = { setTempRet0: function (value) {
      tempRet0 = value;return value;
    }, getTempRet0: function () {
      return tempRet0;
    }, stackSave: function () {
      return STACKTOP;
    }, stackRestore: function (stackTop) {
      STACKTOP = stackTop;
    }, getNativeTypeSize: function (type) {
      switch (type) {case "i1":case "i8":
          return 1;case "i16":
          return 2;case "i32":
          return 4;case "i64":
          return 8;case "float":
          return 4;case "double":
          return 8;default:
          {
            if (type[type.length - 1] === "*") {
              return Runtime.QUANTUM_SIZE;
            } else if (type[0] === "i") {
              var bits = parseInt(type.substr(1));assert(bits % 8 === 0);return bits / 8;
            } else {
              return 0;
            }
          }}
    }, getNativeFieldSize: function (type) {
      return Math.max(Runtime.getNativeTypeSize(type), Runtime.QUANTUM_SIZE);
    }, STACK_ALIGN: 16, prepVararg: function (ptr, type) {
      if (type === "double" || type === "i64") {
        if (ptr & 7) {
          assert((ptr & 7) === 4);ptr += 4;
        }
      } else {
        assert((ptr & 3) === 0);
      }return ptr;
    }, getAlignSize: function (type, size, vararg) {
      if (!vararg && (type == "i64" || type == "double")) return 8;if (!type) return Math.min(size, 8);return Math.min(size || (type ? Runtime.getNativeFieldSize(type) : 0), Runtime.QUANTUM_SIZE);
    }, dynCall: function (sig, ptr, args) {
      if (args && args.length) {
        return Module["dynCall_" + sig].apply(null, [ptr].concat(args));
      } else {
        return Module["dynCall_" + sig].call(null, ptr);
      }
    }, functionPointers: [], addFunction: function (func) {
      for (var i = 0; i < Runtime.functionPointers.length; i++) {
        if (!Runtime.functionPointers[i]) {
          Runtime.functionPointers[i] = func;return 2 * (1 + i);
        }
      }throw "Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.";
    }, removeFunction: function (index) {
      Runtime.functionPointers[(index - 2) / 2] = null;
    }, warnOnce: function (text) {
      if (!Runtime.warnOnce.shown) Runtime.warnOnce.shown = {};if (!Runtime.warnOnce.shown[text]) {
        Runtime.warnOnce.shown[text] = 1;Module.printErr(text);
      }
    }, funcWrappers: {}, getFuncWrapper: function (func, sig) {
      assert(sig);if (!Runtime.funcWrappers[sig]) {
        Runtime.funcWrappers[sig] = {};
      }var sigCache = Runtime.funcWrappers[sig];if (!sigCache[func]) {
        if (sig.length === 1) {
          sigCache[func] = function dynCall_wrapper() {
            return Runtime.dynCall(sig, func);
          };
        } else if (sig.length === 2) {
          sigCache[func] = function dynCall_wrapper(arg) {
            return Runtime.dynCall(sig, func, [arg]);
          };
        } else {
          sigCache[func] = function dynCall_wrapper() {
            return Runtime.dynCall(sig, func, Array.prototype.slice.call(arguments));
          };
        }
      }return sigCache[func];
    }, getCompilerSetting: function (name) {
      throw "You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work";
    }, stackAlloc: function (size) {
      var ret = STACKTOP;STACKTOP = STACKTOP + size | 0;STACKTOP = STACKTOP + 15 & -16;return ret;
    }, staticAlloc: function (size) {
      var ret = STATICTOP;STATICTOP = STATICTOP + size | 0;STATICTOP = STATICTOP + 15 & -16;return ret;
    }, dynamicAlloc: function (size) {
      var ret = HEAP32[DYNAMICTOP_PTR >> 2];var end = (ret + size + 15 | 0) & -16;HEAP32[DYNAMICTOP_PTR >> 2] = end;if (end >= TOTAL_MEMORY) {
        var success = enlargeMemory();if (!success) {
          HEAP32[DYNAMICTOP_PTR >> 2] = ret;return 0;
        }
      }return ret;
    }, alignMemory: function (size, quantum) {
      var ret = size = Math.ceil(size / (quantum ? quantum : 16)) * (quantum ? quantum : 16);return ret;
    }, makeBigInt: function (low, high, unsigned) {
      var ret = unsigned ? +(low >>> 0) + +(high >>> 0) * +4294967296 : +(low >>> 0) + +(high | 0) * +4294967296;return ret;
    }, GLOBAL_BASE: 8, QUANTUM_SIZE: 4, __dummy__: 0 };Module["Runtime"] = Runtime;var ABORT = 0;var EXITSTATUS = 0;function assert(condition, text) {
    if (!condition) {
      abort("Assertion failed: " + text);
    }
  }function getCFunc(ident) {
    var func = Module["_" + ident];if (!func) {
      try {
        func = eval("_" + ident);
      } catch (e) {}
    }assert(func, "Cannot call unknown function " + ident + " (perhaps LLVM optimizations or closure removed it?)");return func;
  }var cwrap, ccall;(function () {
    var JSfuncs = { "stackSave": function () {
        Runtime.stackSave();
      }, "stackRestore": function () {
        Runtime.stackRestore();
      }, "arrayToC": function (arr) {
        var ret = Runtime.stackAlloc(arr.length);writeArrayToMemory(arr, ret);return ret;
      }, "stringToC": function (str) {
        var ret = 0;if (str !== null && str !== undefined && str !== 0) {
          var len = (str.length << 2) + 1;ret = Runtime.stackAlloc(len);stringToUTF8(str, ret, len);
        }return ret;
      } };var toC = { "string": JSfuncs["stringToC"], "array": JSfuncs["arrayToC"] };ccall = function ccallFunc(ident, returnType, argTypes, args, opts) {
      var func = getCFunc(ident);var cArgs = [];var stack = 0;if (args) {
        for (var i = 0; i < args.length; i++) {
          var converter = toC[argTypes[i]];if (converter) {
            if (stack === 0) stack = Runtime.stackSave();cArgs[i] = converter(args[i]);
          } else {
            cArgs[i] = args[i];
          }
        }
      }var ret = func.apply(null, cArgs);if (returnType === "string") ret = Pointer_stringify(ret);if (stack !== 0) {
        if (opts && opts.async) {
          EmterpreterAsync.asyncFinalizers.push(function () {
            Runtime.stackRestore(stack);
          });return;
        }Runtime.stackRestore(stack);
      }return ret;
    };var sourceRegex = /^function\s*[a-zA-Z$_0-9]*\s*\(([^)]*)\)\s*{\s*([^*]*?)[\s;]*(?:return\s*(.*?)[;\s]*)?}$/;function parseJSFunc(jsfunc) {
      var parsed = jsfunc.toString().match(sourceRegex).slice(1);return { arguments: parsed[0], body: parsed[1], returnValue: parsed[2] };
    }var JSsource = null;function ensureJSsource() {
      if (!JSsource) {
        JSsource = {};for (var fun in JSfuncs) {
          if (JSfuncs.hasOwnProperty(fun)) {
            JSsource[fun] = parseJSFunc(JSfuncs[fun]);
          }
        }
      }
    }cwrap = function cwrap(ident, returnType, argTypes) {
      argTypes = argTypes || [];var cfunc = getCFunc(ident);var numericArgs = argTypes.every(function (type) {
        return type === "number";
      });var numericRet = returnType !== "string";if (numericRet && numericArgs) {
        return cfunc;
      }var argNames = argTypes.map(function (x, i) {
        return "$" + i;
      });var funcstr = "(function(" + argNames.join(",") + ") {";var nargs = argTypes.length;if (!numericArgs) {
        ensureJSsource();funcstr += "var stack = " + JSsource["stackSave"].body + ";";for (var i = 0; i < nargs; i++) {
          var arg = argNames[i],
              type = argTypes[i];if (type === "number") continue;var convertCode = JSsource[type + "ToC"];funcstr += "var " + convertCode.arguments + " = " + arg + ";";funcstr += convertCode.body + ";";funcstr += arg + "=(" + convertCode.returnValue + ");";
        }
      }var cfuncname = parseJSFunc(function () {
        return cfunc;
      }).returnValue;funcstr += "var ret = " + cfuncname + "(" + argNames.join(",") + ");";if (!numericRet) {
        var strgfy = parseJSFunc(function () {
          return Pointer_stringify;
        }).returnValue;funcstr += "ret = " + strgfy + "(ret);";
      }if (!numericArgs) {
        ensureJSsource();funcstr += JSsource["stackRestore"].body.replace("()", "(stack)") + ";";
      }funcstr += "return ret})";return eval(funcstr);
    };
  })();Module["ccall"] = ccall;Module["cwrap"] = cwrap;function setValue(ptr, value, type, noSafe) {
    type = type || "i8";if (type.charAt(type.length - 1) === "*") type = "i32";switch (type) {case "i1":
        HEAP8[ptr >> 0] = value;break;case "i8":
        HEAP8[ptr >> 0] = value;break;case "i16":
        HEAP16[ptr >> 1] = value;break;case "i32":
        HEAP32[ptr >> 2] = value;break;case "i64":
        tempI64 = [value >>> 0, (tempDouble = value, +Math_abs(tempDouble) >= +1 ? tempDouble > +0 ? (Math_min(+Math_floor(tempDouble / +4294967296), +4294967295) | 0) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / +4294967296) >>> 0 : 0)], HEAP32[ptr >> 2] = tempI64[0], HEAP32[ptr + 4 >> 2] = tempI64[1];break;case "float":
        HEAPF32[ptr >> 2] = value;break;case "double":
        HEAPF64[ptr >> 3] = value;break;default:
        abort("invalid type for setValue: " + type);}
  }Module["setValue"] = setValue;function getValue(ptr, type, noSafe) {
    type = type || "i8";if (type.charAt(type.length - 1) === "*") type = "i32";switch (type) {case "i1":
        return HEAP8[ptr >> 0];case "i8":
        return HEAP8[ptr >> 0];case "i16":
        return HEAP16[ptr >> 1];case "i32":
        return HEAP32[ptr >> 2];case "i64":
        return HEAP32[ptr >> 2];case "float":
        return HEAPF32[ptr >> 2];case "double":
        return HEAPF64[ptr >> 3];default:
        abort("invalid type for setValue: " + type);}return null;
  }Module["getValue"] = getValue;var ALLOC_NORMAL = 0;var ALLOC_STACK = 1;var ALLOC_STATIC = 2;var ALLOC_DYNAMIC = 3;var ALLOC_NONE = 4;Module["ALLOC_NORMAL"] = ALLOC_NORMAL;Module["ALLOC_STACK"] = ALLOC_STACK;Module["ALLOC_STATIC"] = ALLOC_STATIC;Module["ALLOC_DYNAMIC"] = ALLOC_DYNAMIC;Module["ALLOC_NONE"] = ALLOC_NONE;function allocate(slab, types, allocator, ptr) {
    var zeroinit, size;if (typeof slab === "number") {
      zeroinit = true;size = slab;
    } else {
      zeroinit = false;size = slab.length;
    }var singleType = typeof types === "string" ? types : null;var ret;if (allocator == ALLOC_NONE) {
      ret = ptr;
    } else {
      ret = [typeof _malloc === "function" ? _malloc : Runtime.staticAlloc, Runtime.stackAlloc, Runtime.staticAlloc, Runtime.dynamicAlloc][allocator === undefined ? ALLOC_STATIC : allocator](Math.max(size, singleType ? 1 : types.length));
    }if (zeroinit) {
      var ptr = ret,
          stop;assert((ret & 3) == 0);stop = ret + (size & ~3);for (; ptr < stop; ptr += 4) {
        HEAP32[ptr >> 2] = 0;
      }stop = ret + size;while (ptr < stop) {
        HEAP8[ptr++ >> 0] = 0;
      }return ret;
    }if (singleType === "i8") {
      if (slab.subarray || slab.slice) {
        HEAPU8.set(slab, ret);
      } else {
        HEAPU8.set(new Uint8Array(slab), ret);
      }return ret;
    }var i = 0,
        type,
        typeSize,
        previousType;while (i < size) {
      var curr = slab[i];if (typeof curr === "function") {
        curr = Runtime.getFunctionIndex(curr);
      }type = singleType || types[i];if (type === 0) {
        i++;continue;
      }if (type == "i64") type = "i32";setValue(ret + i, curr, type);if (previousType !== type) {
        typeSize = Runtime.getNativeTypeSize(type);previousType = type;
      }i += typeSize;
    }return ret;
  }Module["allocate"] = allocate;function getMemory(size) {
    if (!staticSealed) return Runtime.staticAlloc(size);if (!runtimeInitialized) return Runtime.dynamicAlloc(size);return _malloc(size);
  }Module["getMemory"] = getMemory;function Pointer_stringify(ptr, length) {
    if (length === 0 || !ptr) return "";var hasUtf = 0;var t;var i = 0;while (1) {
      t = HEAPU8[ptr + i >> 0];hasUtf |= t;if (t == 0 && !length) break;i++;if (length && i == length) break;
    }if (!length) length = i;var ret = "";if (hasUtf < 128) {
      var MAX_CHUNK = 1024;var curr;while (length > 0) {
        curr = String.fromCharCode.apply(String, HEAPU8.subarray(ptr, ptr + Math.min(length, MAX_CHUNK)));ret = ret ? ret + curr : curr;ptr += MAX_CHUNK;length -= MAX_CHUNK;
      }return ret;
    }return Module["UTF8ToString"](ptr);
  }Module["Pointer_stringify"] = Pointer_stringify;function AsciiToString(ptr) {
    var str = "";while (1) {
      var ch = HEAP8[ptr++ >> 0];if (!ch) return str;str += String.fromCharCode(ch);
    }
  }Module["AsciiToString"] = AsciiToString;function stringToAscii(str, outPtr) {
    return writeAsciiToMemory(str, outPtr, false);
  }Module["stringToAscii"] = stringToAscii;var UTF8Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;function UTF8ArrayToString(u8Array, idx) {
    var endPtr = idx;while (u8Array[endPtr]) ++endPtr;if (endPtr - idx > 16 && u8Array.subarray && UTF8Decoder) {
      return UTF8Decoder.decode(u8Array.subarray(idx, endPtr));
    } else {
      var u0, u1, u2, u3, u4, u5;var str = "";while (1) {
        u0 = u8Array[idx++];if (!u0) return str;if (!(u0 & 128)) {
          str += String.fromCharCode(u0);continue;
        }u1 = u8Array[idx++] & 63;if ((u0 & 224) == 192) {
          str += String.fromCharCode((u0 & 31) << 6 | u1);continue;
        }u2 = u8Array[idx++] & 63;if ((u0 & 240) == 224) {
          u0 = (u0 & 15) << 12 | u1 << 6 | u2;
        } else {
          u3 = u8Array[idx++] & 63;if ((u0 & 248) == 240) {
            u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | u3;
          } else {
            u4 = u8Array[idx++] & 63;if ((u0 & 252) == 248) {
              u0 = (u0 & 3) << 24 | u1 << 18 | u2 << 12 | u3 << 6 | u4;
            } else {
              u5 = u8Array[idx++] & 63;u0 = (u0 & 1) << 30 | u1 << 24 | u2 << 18 | u3 << 12 | u4 << 6 | u5;
            }
          }
        }if (u0 < 65536) {
          str += String.fromCharCode(u0);
        } else {
          var ch = u0 - 65536;str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
        }
      }
    }
  }Module["UTF8ArrayToString"] = UTF8ArrayToString;function UTF8ToString(ptr) {
    return UTF8ArrayToString(HEAPU8, ptr);
  }Module["UTF8ToString"] = UTF8ToString;function stringToUTF8Array(str, outU8Array, outIdx, maxBytesToWrite) {
    if (!(maxBytesToWrite > 0)) return 0;var startIdx = outIdx;var endIdx = outIdx + maxBytesToWrite - 1;for (var i = 0; i < str.length; ++i) {
      var u = str.charCodeAt(i);if (u >= 55296 && u <= 57343) u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;if (u <= 127) {
        if (outIdx >= endIdx) break;outU8Array[outIdx++] = u;
      } else if (u <= 2047) {
        if (outIdx + 1 >= endIdx) break;outU8Array[outIdx++] = 192 | u >> 6;outU8Array[outIdx++] = 128 | u & 63;
      } else if (u <= 65535) {
        if (outIdx + 2 >= endIdx) break;outU8Array[outIdx++] = 224 | u >> 12;outU8Array[outIdx++] = 128 | u >> 6 & 63;outU8Array[outIdx++] = 128 | u & 63;
      } else if (u <= 2097151) {
        if (outIdx + 3 >= endIdx) break;outU8Array[outIdx++] = 240 | u >> 18;outU8Array[outIdx++] = 128 | u >> 12 & 63;outU8Array[outIdx++] = 128 | u >> 6 & 63;outU8Array[outIdx++] = 128 | u & 63;
      } else if (u <= 67108863) {
        if (outIdx + 4 >= endIdx) break;outU8Array[outIdx++] = 248 | u >> 24;outU8Array[outIdx++] = 128 | u >> 18 & 63;outU8Array[outIdx++] = 128 | u >> 12 & 63;outU8Array[outIdx++] = 128 | u >> 6 & 63;outU8Array[outIdx++] = 128 | u & 63;
      } else {
        if (outIdx + 5 >= endIdx) break;outU8Array[outIdx++] = 252 | u >> 30;outU8Array[outIdx++] = 128 | u >> 24 & 63;outU8Array[outIdx++] = 128 | u >> 18 & 63;outU8Array[outIdx++] = 128 | u >> 12 & 63;outU8Array[outIdx++] = 128 | u >> 6 & 63;outU8Array[outIdx++] = 128 | u & 63;
      }
    }outU8Array[outIdx] = 0;return outIdx - startIdx;
  }Module["stringToUTF8Array"] = stringToUTF8Array;function stringToUTF8(str, outPtr, maxBytesToWrite) {
    return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
  }Module["stringToUTF8"] = stringToUTF8;function lengthBytesUTF8(str) {
    var len = 0;for (var i = 0; i < str.length; ++i) {
      var u = str.charCodeAt(i);if (u >= 55296 && u <= 57343) u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;if (u <= 127) {
        ++len;
      } else if (u <= 2047) {
        len += 2;
      } else if (u <= 65535) {
        len += 3;
      } else if (u <= 2097151) {
        len += 4;
      } else if (u <= 67108863) {
        len += 5;
      } else {
        len += 6;
      }
    }return len;
  }Module["lengthBytesUTF8"] = lengthBytesUTF8;var UTF16Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-16le") : undefined;function demangle(func) {
    var __cxa_demangle_func = Module["___cxa_demangle"] || Module["__cxa_demangle"];if (__cxa_demangle_func) {
      try {
        var s = func.substr(1);var len = lengthBytesUTF8(s) + 1;var buf = _malloc(len);stringToUTF8(s, buf, len);var status = _malloc(4);var ret = __cxa_demangle_func(buf, 0, 0, status);if (getValue(status, "i32") === 0 && ret) {
          return Pointer_stringify(ret);
        }
      } catch (e) {} finally {
        if (buf) _free(buf);if (status) _free(status);if (ret) _free(ret);
      }return func;
    }Runtime.warnOnce("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");return func;
  }function demangleAll(text) {
    var regex = /__Z[\w\d_]+/g;return text.replace(regex, function (x) {
      var y = demangle(x);return x === y ? x : x + " [" + y + "]";
    });
  }function jsStackTrace() {
    var err = new Error();if (!err.stack) {
      try {
        throw new Error(0);
      } catch (e) {
        err = e;
      }if (!err.stack) {
        return "(no stack trace available)";
      }
    }return err.stack.toString();
  }function stackTrace() {
    var js = jsStackTrace();if (Module["extraStackTrace"]) js += "\n" + Module["extraStackTrace"]();return demangleAll(js);
  }Module["stackTrace"] = stackTrace;var HEAP, buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;function updateGlobalBufferViews() {
    Module["HEAP8"] = HEAP8 = new Int8Array(buffer);Module["HEAP16"] = HEAP16 = new Int16Array(buffer);Module["HEAP32"] = HEAP32 = new Int32Array(buffer);Module["HEAPU8"] = HEAPU8 = new Uint8Array(buffer);Module["HEAPU16"] = HEAPU16 = new Uint16Array(buffer);Module["HEAPU32"] = HEAPU32 = new Uint32Array(buffer);Module["HEAPF32"] = HEAPF32 = new Float32Array(buffer);Module["HEAPF64"] = HEAPF64 = new Float64Array(buffer);
  }var STATIC_BASE, STATICTOP, staticSealed;var STACK_BASE, STACKTOP, STACK_MAX;var DYNAMIC_BASE, DYNAMICTOP_PTR;STATIC_BASE = STATICTOP = STACK_BASE = STACKTOP = STACK_MAX = DYNAMIC_BASE = DYNAMICTOP_PTR = 0;staticSealed = false;function abortOnCannotGrowMemory() {
    abort("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value " + TOTAL_MEMORY + ", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or (4) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ");
  }function enlargeMemory() {
    abortOnCannotGrowMemory();
  }var TOTAL_STACK = Module["TOTAL_STACK"] || 5242880;var TOTAL_MEMORY = Module["TOTAL_MEMORY"] || 134217728;if (TOTAL_MEMORY < TOTAL_STACK) Module.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was " + TOTAL_MEMORY + "! (TOTAL_STACK=" + TOTAL_STACK + ")");if (Module["buffer"]) {
    buffer = Module["buffer"];
  } else {
    {
      buffer = new ArrayBuffer(TOTAL_MEMORY);
    }
  }updateGlobalBufferViews();function getTotalMemory() {
    return TOTAL_MEMORY;
  }HEAP32[0] = 1668509029;HEAP16[1] = 25459;if (HEAPU8[2] !== 115 || HEAPU8[3] !== 99) throw "Runtime error: expected the system to be little-endian!";Module["HEAP"] = HEAP;Module["buffer"] = buffer;Module["HEAP8"] = HEAP8;Module["HEAP16"] = HEAP16;Module["HEAP32"] = HEAP32;Module["HEAPU8"] = HEAPU8;Module["HEAPU16"] = HEAPU16;Module["HEAPU32"] = HEAPU32;Module["HEAPF32"] = HEAPF32;Module["HEAPF64"] = HEAPF64;function callRuntimeCallbacks(callbacks) {
    while (callbacks.length > 0) {
      var callback = callbacks.shift();if (typeof callback == "function") {
        callback();continue;
      }var func = callback.func;if (typeof func === "number") {
        if (callback.arg === undefined) {
          Module["dynCall_v"](func);
        } else {
          Module["dynCall_vi"](func, callback.arg);
        }
      } else {
        func(callback.arg === undefined ? null : callback.arg);
      }
    }
  }var __ATPRERUN__ = [];var __ATINIT__ = [];var __ATMAIN__ = [];var __ATEXIT__ = [];var __ATPOSTRUN__ = [];var runtimeInitialized = false;var runtimeExited = false;function preRun() {
    if (Module["preRun"]) {
      if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];while (Module["preRun"].length) {
        addOnPreRun(Module["preRun"].shift());
      }
    }callRuntimeCallbacks(__ATPRERUN__);
  }function ensureInitRuntime() {
    if (runtimeInitialized) return;runtimeInitialized = true;callRuntimeCallbacks(__ATINIT__);
  }function preMain() {
    callRuntimeCallbacks(__ATMAIN__);
  }function exitRuntime() {
    callRuntimeCallbacks(__ATEXIT__);runtimeExited = true;
  }function postRun() {
    if (Module["postRun"]) {
      if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];while (Module["postRun"].length) {
        addOnPostRun(Module["postRun"].shift());
      }
    }callRuntimeCallbacks(__ATPOSTRUN__);
  }function addOnPreRun(cb) {
    __ATPRERUN__.unshift(cb);
  }Module["addOnPreRun"] = addOnPreRun;function addOnInit(cb) {
    __ATINIT__.unshift(cb);
  }Module["addOnInit"] = addOnInit;function addOnPreMain(cb) {
    __ATMAIN__.unshift(cb);
  }Module["addOnPreMain"] = addOnPreMain;function addOnExit(cb) {
    __ATEXIT__.unshift(cb);
  }Module["addOnExit"] = addOnExit;function addOnPostRun(cb) {
    __ATPOSTRUN__.unshift(cb);
  }Module["addOnPostRun"] = addOnPostRun;function intArrayFromString(stringy, dontAddNull, length) {
    var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;var u8array = new Array(len);var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);if (dontAddNull) u8array.length = numBytesWritten;return u8array;
  }Module["intArrayFromString"] = intArrayFromString;function intArrayToString(array) {
    var ret = [];for (var i = 0; i < array.length; i++) {
      var chr = array[i];if (chr > 255) {
        chr &= 255;
      }ret.push(String.fromCharCode(chr));
    }return ret.join("");
  }Module["intArrayToString"] = intArrayToString;function writeStringToMemory(string, buffer, dontAddNull) {
    Runtime.warnOnce("writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!");var lastChar, end;if (dontAddNull) {
      end = buffer + lengthBytesUTF8(string);lastChar = HEAP8[end];
    }stringToUTF8(string, buffer, Infinity);if (dontAddNull) HEAP8[end] = lastChar;
  }Module["writeStringToMemory"] = writeStringToMemory;function writeArrayToMemory(array, buffer) {
    HEAP8.set(array, buffer);
  }Module["writeArrayToMemory"] = writeArrayToMemory;function writeAsciiToMemory(str, buffer, dontAddNull) {
    for (var i = 0; i < str.length; ++i) {
      HEAP8[buffer++ >> 0] = str.charCodeAt(i);
    }if (!dontAddNull) HEAP8[buffer >> 0] = 0;
  }Module["writeAsciiToMemory"] = writeAsciiToMemory;if (!Math["imul"] || Math["imul"](4294967295, 5) !== -5) Math["imul"] = function imul(a, b) {
    var ah = a >>> 16;var al = a & 65535;var bh = b >>> 16;var bl = b & 65535;return al * bl + (ah * bl + al * bh << 16) | 0;
  };Math.imul = Math["imul"];if (!Math["fround"]) {
    var froundBuffer = new Float32Array(1);Math["fround"] = function (x) {
      froundBuffer[0] = x;return froundBuffer[0];
    };
  }Math.fround = Math["fround"];if (!Math["clz32"]) Math["clz32"] = function (x) {
    x = x >>> 0;for (var i = 0; i < 32; i++) {
      if (x & 1 << 31 - i) return i;
    }return 32;
  };Math.clz32 = Math["clz32"];if (!Math["trunc"]) Math["trunc"] = function (x) {
    return x < 0 ? Math.ceil(x) : Math.floor(x);
  };Math.trunc = Math["trunc"];var Math_abs = Math.abs;var Math_cos = Math.cos;var Math_sin = Math.sin;var Math_tan = Math.tan;var Math_acos = Math.acos;var Math_asin = Math.asin;var Math_atan = Math.atan;var Math_atan2 = Math.atan2;var Math_exp = Math.exp;var Math_log = Math.log;var Math_sqrt = Math.sqrt;var Math_ceil = Math.ceil;var Math_floor = Math.floor;var Math_pow = Math.pow;var Math_imul = Math.imul;var Math_fround = Math.fround;var Math_round = Math.round;var Math_min = Math.min;var Math_clz32 = Math.clz32;var Math_trunc = Math.trunc;var runDependencies = 0;var runDependencyWatcher = null;var dependenciesFulfilled = null;function getUniqueRunDependency(id) {
    return id;
  }function addRunDependency(id) {
    runDependencies++;if (Module["monitorRunDependencies"]) {
      Module["monitorRunDependencies"](runDependencies);
    }
  }Module["addRunDependency"] = addRunDependency;function removeRunDependency(id) {
    runDependencies--;if (Module["monitorRunDependencies"]) {
      Module["monitorRunDependencies"](runDependencies);
    }if (runDependencies == 0) {
      if (runDependencyWatcher !== null) {
        clearInterval(runDependencyWatcher);runDependencyWatcher = null;
      }if (dependenciesFulfilled) {
        var callback = dependenciesFulfilled;dependenciesFulfilled = null;callback();
      }
    }
  }Module["removeRunDependency"] = removeRunDependency;Module["preloadedImages"] = {};Module["preloadedAudios"] = {};var ASM_CONSTS = [function ($0, $1, $2, $3, $4, $5, $6, $7) {
    {
      return _nbind.callbackSignatureList[$0].apply(this, arguments);
    }
  }];function _emscripten_asm_const_iiiiiiii(code, a0, a1, a2, a3, a4, a5, a6) {
    return ASM_CONSTS[code](a0, a1, a2, a3, a4, a5, a6);
  }function _emscripten_asm_const_iiiii(code, a0, a1, a2, a3) {
    return ASM_CONSTS[code](a0, a1, a2, a3);
  }function _emscripten_asm_const_iiidddddd(code, a0, a1, a2, a3, a4, a5, a6, a7) {
    return ASM_CONSTS[code](a0, a1, a2, a3, a4, a5, a6, a7);
  }function _emscripten_asm_const_iiididi(code, a0, a1, a2, a3, a4, a5) {
    return ASM_CONSTS[code](a0, a1, a2, a3, a4, a5);
  }function _emscripten_asm_const_iiii(code, a0, a1, a2) {
    return ASM_CONSTS[code](a0, a1, a2);
  }function _emscripten_asm_const_iiiid(code, a0, a1, a2, a3) {
    return ASM_CONSTS[code](a0, a1, a2, a3);
  }function _emscripten_asm_const_iiiiii(code, a0, a1, a2, a3, a4) {
    return ASM_CONSTS[code](a0, a1, a2, a3, a4);
  }STATIC_BASE = Runtime.GLOBAL_BASE;STATICTOP = STATIC_BASE + 12400;__ATINIT__.push({ func: function () {
      __GLOBAL__sub_I_nbind_cc();
    } }, { func: function () {
      __GLOBAL__sub_I_common_cc();
    } }, { func: function () {
      __GLOBAL__sub_I_Binding_cc();
    } });allocate([1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 192, 127, 0, 0, 192, 127, 0, 0, 192, 127, 3, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 3, 0, 0, 0, 0, 0, 192, 127, 3, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 128, 191, 0, 0, 128, 191, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 244, 3, 0, 0, 244, 3, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 63, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 154, 16, 0, 0, 164, 16, 0, 0, 172, 16, 0, 0, 116, 16, 0, 0, 130, 16, 0, 0, 142, 16, 0, 0, 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 192, 127, 3, 0, 0, 0, 40, 44, 0, 0, 41, 44, 0, 0, 42, 44, 0, 0, 41, 44, 0, 0, 42, 44, 0, 0, 44, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 4, 0, 0, 0, 2, 0, 0, 0, 5, 0, 0, 0, 45, 44, 0, 0, 41, 44, 0, 0, 41, 44, 0, 0, 41, 44, 0, 0, 41, 44, 0, 0, 41, 44, 0, 0, 41, 44, 0, 0, 46, 44, 0, 0, 41, 44, 0, 0, 41, 44, 0, 0, 42, 44, 0, 0, 47, 44, 0, 0, 46, 44, 0, 0, 208, 4, 0, 0, 3, 0, 0, 0, 48, 44, 0, 0, 224, 4, 0, 0, 49, 44, 0, 0, 2, 0, 0, 0, 50, 44, 0, 0, 224, 4, 0, 0, 49, 44, 0, 0, 46, 44, 0, 0, 224, 4, 0, 0, 46, 44, 0, 0, 224, 4, 0, 0, 49, 44, 0, 0, 41, 44, 0, 0, 42, 44, 0, 0, 41, 44, 0, 0, 51, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 6, 0, 0, 0, 7, 0, 0, 0, 2, 0, 0, 0, 8, 0, 0, 0, 45, 44, 0, 0, 42, 44, 0, 0, 41, 44, 0, 0, 51, 44, 0, 0, 42, 44, 0, 0, 42, 44, 0, 0, 46, 44, 0, 0, 41, 44, 0, 0, 46, 44, 0, 0, 42, 44, 0, 0, 41, 44, 0, 0, 46, 44, 0, 0, 42, 44, 0, 0, 46, 44, 0, 0, 108, 5, 0, 0, 3, 0, 0, 0, 116, 5, 0, 0, 1, 0, 0, 0, 50, 44, 0, 0, 46, 44, 0, 0, 224, 4, 0, 0, 136, 5, 0, 0, 2, 0, 0, 0, 52, 44, 0, 0, 47, 44, 0, 0, 42, 44, 0, 0, 46, 44, 0, 0, 42, 44, 0, 0, 47, 44, 0, 0, 46, 44, 0, 0, 136, 5, 0, 0, 136, 5, 0, 0, 188, 5, 0, 0, 42, 44, 0, 0, 41, 44, 0, 0, 2, 0, 0, 0, 51, 44, 0, 0, 188, 5, 0, 0, 217, 16, 0, 0, 208, 5, 0, 0, 2, 0, 0, 0, 44, 44, 0, 0, 228, 5, 0, 0, 41, 44, 0, 0, 41, 44, 0, 0, 2, 0, 0, 0, 40, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 9, 0, 0, 0, 10, 0, 0, 0, 2, 0, 0, 0, 11, 0, 0, 0, 228, 5, 0, 0, 2, 0, 0, 0, 53, 44, 0, 0, 32, 6, 0, 0, 203, 21, 0, 0, 54, 44, 0, 0, 67, 44, 0, 0, 68, 44, 0, 0, 69, 44, 0, 0, 70, 44, 0, 0, 71, 44, 0, 0, 49, 44, 0, 0, 42, 44, 0, 0, 72, 44, 0, 0, 73, 44, 0, 0, 74, 44, 0, 0, 75, 44, 0, 0, 76, 44, 0, 0, 41, 44, 0, 0, 0, 0, 0, 0, 46, 44, 0, 0, 216, 21, 0, 0, 47, 44, 0, 0, 221, 21, 0, 0, 77, 44, 0, 0, 226, 21, 0, 0, 208, 4, 0, 0, 238, 21, 0, 0, 148, 6, 0, 0, 251, 21, 0, 0, 78, 44, 0, 0, 14, 22, 0, 0, 79, 44, 0, 0, 23, 22, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 156, 6, 0, 0, 1, 0, 0, 0, 48, 44, 0, 0, 46, 44, 0, 0, 80, 44, 0, 0, 216, 6, 0, 0, 49, 44, 0, 0, 224, 6, 0, 0, 232, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 12, 0, 0, 0, 13, 0, 0, 0, 2, 0, 0, 0, 14, 0, 0, 0, 2, 0, 0, 0, 240, 6, 0, 0, 7, 0, 0, 0, 80, 44, 0, 0, 7, 0, 0, 0, 216, 6, 0, 0, 1, 0, 0, 0, 69, 44, 0, 0, 46, 44, 0, 0, 80, 44, 0, 0, 224, 6, 0, 0, 46, 44, 0, 0, 80, 44, 0, 0, 216, 6, 0, 0, 46, 44, 0, 0, 80, 44, 0, 0, 67, 44, 0, 0, 67, 44, 0, 0, 78, 44, 0, 0, 67, 44, 0, 0, 78, 44, 0, 0, 67, 44, 0, 0, 80, 44, 0, 0, 78, 44, 0, 0, 67, 44, 0, 0, 80, 44, 0, 0, 224, 6, 0, 0, 78, 44, 0, 0, 67, 44, 0, 0, 80, 44, 0, 0, 49, 44, 0, 0, 92, 7, 0, 0, 49, 44, 0, 0, 2, 0, 0, 0, 80, 44, 0, 0, 46, 44, 0, 0, 49, 44, 0, 0, 49, 44, 0, 0, 49, 44, 0, 0, 49, 44, 0, 0, 78, 44, 0, 0, 80, 44, 0, 0, 208, 4, 0, 0, 46, 44, 0, 0, 208, 4, 0, 0, 208, 4, 0, 0, 208, 4, 0, 0, 208, 4, 0, 0, 208, 4, 0, 0, 46, 44, 0, 0, 216, 6, 0, 0, 208, 4, 0, 0, 172, 7, 0, 0, 2, 0, 0, 0, 81, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 15, 0, 0, 0, 16, 0, 0, 0, 2, 0, 0, 0, 17, 0, 0, 0, 45, 44, 0, 0, 49, 44, 0, 0, 220, 7, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 90, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 9, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 2, 0, 0, 0, 98, 44, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 111, 117, 108, 100, 32, 110, 111, 116, 32, 97, 108, 108, 111, 99, 97, 116, 101, 32, 109, 101, 109, 111, 114, 121, 32, 102, 111, 114, 32, 108, 105, 115, 116, 0, 67, 111, 117, 108, 100, 32, 110, 111, 116, 32, 97, 108, 108, 111, 99, 97, 116, 101, 32, 109, 101, 109, 111, 114, 121, 32, 102, 111, 114, 32, 105, 116, 101, 109, 115, 0, 67, 111, 117, 108, 100, 32, 110, 111, 116, 32, 101, 120, 116, 101, 110, 100, 32, 97, 108, 108, 111, 99, 97, 116, 105, 111, 110, 32, 102, 111, 114, 32, 105, 116, 101, 109, 115, 0, 37, 115, 10, 0, 67, 111, 117, 108, 100, 32, 110, 111, 116, 32, 97, 108, 108, 111, 99, 97, 116, 101, 32, 109, 101, 109, 111, 114, 121, 32, 102, 111, 114, 32, 110, 111, 100, 101, 0, 67, 97, 110, 110, 111, 116, 32, 114, 101, 115, 101, 116, 32, 97, 32, 110, 111, 100, 101, 32, 119, 104, 105, 99, 104, 32, 115, 116, 105, 108, 108, 32, 104, 97, 115, 32, 99, 104, 105, 108, 100, 114, 101, 110, 32, 97, 116, 116, 97, 99, 104, 101, 100, 0, 67, 97, 110, 110, 111, 116, 32, 114, 101, 115, 101, 116, 32, 97, 32, 110, 111, 100, 101, 32, 115, 116, 105, 108, 108, 32, 97, 116, 116, 97, 99, 104, 101, 100, 32, 116, 111, 32, 97, 32, 112, 97, 114, 101, 110, 116, 0, 67, 111, 117, 108, 100, 32, 110, 111, 116, 32, 97, 108, 108, 111, 99, 97, 116, 101, 32, 109, 101, 109, 111, 114, 121, 32, 102, 111, 114, 32, 99, 111, 110, 102, 105, 103, 0, 67, 97, 110, 110, 111, 116, 32, 115, 101, 116, 32, 109, 101, 97, 115, 117, 114, 101, 32, 102, 117, 110, 99, 116, 105, 111, 110, 58, 32, 78, 111, 100, 101, 115, 32, 119, 105, 116, 104, 32, 109, 101, 97, 115, 117, 114, 101, 32, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 99, 97, 110, 110, 111, 116, 32, 104, 97, 118, 101, 32, 99, 104, 105, 108, 100, 114, 101, 110, 46, 0, 67, 104, 105, 108, 100, 32, 97, 108, 114, 101, 97, 100, 121, 32, 104, 97, 115, 32, 97, 32, 112, 97, 114, 101, 110, 116, 44, 32, 105, 116, 32, 109, 117, 115, 116, 32, 98, 101, 32, 114, 101, 109, 111, 118, 101, 100, 32, 102, 105, 114, 115, 116, 46, 0, 67, 97, 110, 110, 111, 116, 32, 97, 100, 100, 32, 99, 104, 105, 108, 100, 58, 32, 78, 111, 100, 101, 115, 32, 119, 105, 116, 104, 32, 109, 101, 97, 115, 117, 114, 101, 32, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 99, 97, 110, 110, 111, 116, 32, 104, 97, 118, 101, 32, 99, 104, 105, 108, 100, 114, 101, 110, 46, 0, 79, 110, 108, 121, 32, 108, 101, 97, 102, 32, 110, 111, 100, 101, 115, 32, 119, 105, 116, 104, 32, 99, 117, 115, 116, 111, 109, 32, 109, 101, 97, 115, 117, 114, 101, 32, 102, 117, 110, 99, 116, 105, 111, 110, 115, 115, 104, 111, 117, 108, 100, 32, 109, 97, 110, 117, 97, 108, 108, 121, 32, 109, 97, 114, 107, 32, 116, 104, 101, 109, 115, 101, 108, 118, 101, 115, 32, 97, 115, 32, 100, 105, 114, 116, 121, 0, 67, 97, 110, 110, 111, 116, 32, 103, 101, 116, 32, 108, 97, 121, 111, 117, 116, 32, 112, 114, 111, 112, 101, 114, 116, 105, 101, 115, 32, 111, 102, 32, 109, 117, 108, 116, 105, 45, 101, 100, 103, 101, 32, 115, 104, 111, 114, 116, 104, 97, 110, 100, 115, 0, 32, 32, 0, 60, 100, 105, 118, 32, 0, 108, 97, 121, 111, 117, 116, 61, 34, 0, 119, 105, 100, 116, 104, 58, 32, 37, 103, 59, 32, 0, 104, 101, 105, 103, 104, 116, 58, 32, 37, 103, 59, 32, 0, 116, 111, 112, 58, 32, 37, 103, 59, 32, 0, 108, 101, 102, 116, 58, 32, 37, 103, 59, 0, 34, 32, 0, 115, 116, 121, 108, 101, 61, 34, 0, 102, 108, 101, 120, 45, 100, 105, 114, 101, 99, 116, 105, 111, 110, 58, 32, 37, 115, 59, 32, 0, 106, 117, 115, 116, 105, 102, 121, 45, 99, 111, 110, 116, 101, 110, 116, 58, 32, 37, 115, 59, 32, 0, 97, 108, 105, 103, 110, 45, 105, 116, 101, 109, 115, 58, 32, 37, 115, 59, 32, 0, 97, 108, 105, 103, 110, 45, 99, 111, 110, 116, 101, 110, 116, 58, 32, 37, 115, 59, 32, 0, 97, 108, 105, 103, 110, 45, 115, 101, 108, 102, 58, 32, 37, 115, 59, 32, 0, 37, 115, 58, 32, 37, 103, 59, 32, 0, 102, 108, 101, 120, 45, 103, 114, 111, 119, 0, 102, 108, 101, 120, 45, 115, 104, 114, 105, 110, 107, 0, 112, 120, 0, 37, 0, 37, 115, 58, 32, 37, 103, 37, 115, 59, 32, 0, 102, 108, 101, 120, 45, 98, 97, 115, 105, 115, 0, 102, 108, 101, 120, 0, 102, 108, 101, 120, 87, 114, 97, 112, 58, 32, 37, 115, 59, 32, 0, 111, 118, 101, 114, 102, 108, 111, 119, 58, 32, 37, 115, 59, 32, 0, 100, 105, 115, 112, 108, 97, 121, 58, 32, 37, 115, 59, 32, 0, 109, 97, 114, 103, 105, 110, 0, 112, 97, 100, 100, 105, 110, 103, 0, 98, 111, 114, 100, 101, 114, 0, 119, 105, 100, 116, 104, 0, 104, 101, 105, 103, 104, 116, 0, 109, 97, 120, 45, 119, 105, 100, 116, 104, 0, 109, 97, 120, 45, 104, 101, 105, 103, 104, 116, 0, 109, 105, 110, 45, 119, 105, 100, 116, 104, 0, 109, 105, 110, 45, 104, 101, 105, 103, 104, 116, 0, 112, 111, 115, 105, 116, 105, 111, 110, 58, 32, 37, 115, 59, 32, 0, 37, 115, 58, 32, 97, 117, 116, 111, 59, 32, 0, 108, 101, 102, 116, 0, 114, 105, 103, 104, 116, 0, 116, 111, 112, 0, 98, 111, 116, 116, 111, 109, 0, 104, 97, 115, 45, 99, 117, 115, 116, 111, 109, 45, 109, 101, 97, 115, 117, 114, 101, 61, 34, 116, 114, 117, 101, 34, 0, 62, 0, 10, 0, 60, 47, 100, 105, 118, 62, 0, 37, 115, 45, 37, 115, 0, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 0, 37, 115, 37, 100, 46, 123, 91, 115, 107, 105, 112, 112, 101, 100, 93, 32, 0, 119, 109, 58, 32, 37, 115, 44, 32, 104, 109, 58, 32, 37, 115, 44, 32, 97, 119, 58, 32, 37, 102, 32, 97, 104, 58, 32, 37, 102, 32, 61, 62, 32, 100, 58, 32, 40, 37, 102, 44, 32, 37, 102, 41, 32, 37, 115, 10, 0, 42, 0, 37, 115, 37, 100, 46, 123, 37, 115, 0, 119, 109, 58, 32, 37, 115, 44, 32, 104, 109, 58, 32, 37, 115, 44, 32, 97, 119, 58, 32, 37, 102, 32, 97, 104, 58, 32, 37, 102, 32, 37, 115, 10, 0, 37, 115, 37, 100, 46, 125, 37, 115, 0, 119, 109, 58, 32, 37, 115, 44, 32, 104, 109, 58, 32, 37, 115, 44, 32, 100, 58, 32, 40, 37, 102, 44, 32, 37, 102, 41, 32, 37, 115, 10, 0, 79, 117, 116, 32, 111, 102, 32, 99, 97, 99, 104, 101, 32, 101, 110, 116, 114, 105, 101, 115, 33, 0, 97, 118, 97, 105, 108, 97, 98, 108, 101, 87, 105, 100, 116, 104, 32, 105, 115, 32, 105, 110, 100, 101, 102, 105, 110, 105, 116, 101, 32, 115, 111, 32, 119, 105, 100, 116, 104, 77, 101, 97, 115, 117, 114, 101, 77, 111, 100, 101, 32, 109, 117, 115, 116, 32, 98, 101, 32, 89, 71, 77, 101, 97, 115, 117, 114, 101, 77, 111, 100, 101, 85, 110, 100, 101, 102, 105, 110, 101, 100, 0, 97, 118, 97, 105, 108, 97, 98, 108, 101, 72, 101, 105, 103, 104, 116, 32, 105, 115, 32, 105, 110, 100, 101, 102, 105, 110, 105, 116, 101, 32, 115, 111, 32, 104, 101, 105, 103, 104, 116, 77, 101, 97, 115, 117, 114, 101, 77, 111, 100, 101, 32, 109, 117, 115, 116, 32, 98, 101, 32, 89, 71, 77, 101, 97, 115, 117, 114, 101, 77, 111, 100, 101, 85, 110, 100, 101, 102, 105, 110, 101, 100, 0, 109, 101, 97, 115, 117, 114, 101, 0, 115, 116, 114, 101, 116, 99, 104, 0, 109, 117, 108, 116, 105, 108, 105, 110, 101, 45, 115, 116, 114, 101, 116, 99, 104, 0, 97, 98, 115, 45, 109, 101, 97, 115, 117, 114, 101, 0, 97, 98, 115, 45, 108, 97, 121, 111, 117, 116, 0, 69, 120, 112, 101, 99, 116, 32, 99, 117, 115, 116, 111, 109, 32, 98, 97, 115, 101, 108, 105, 110, 101, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 116, 111, 32, 110, 111, 116, 32, 114, 101, 116, 117, 114, 110, 32, 78, 97, 78, 0, 76, 65, 89, 95, 85, 78, 68, 69, 70, 73, 78, 69, 68, 0, 76, 65, 89, 95, 69, 88, 65, 67, 84, 76, 89, 0, 76, 65, 89, 95, 65, 84, 95, 77, 79, 83, 84, 0, 85, 78, 68, 69, 70, 73, 78, 69, 68, 0, 69, 88, 65, 67, 84, 76, 89, 0, 65, 84, 95, 77, 79, 83, 84, 0, 105, 110, 105, 116, 105, 97, 108, 0, 103, 101, 116, 73, 110, 115, 116, 97, 110, 99, 101, 67, 111, 117, 110, 116, 0, 83, 105, 122, 101, 0, 76, 97, 121, 111, 117, 116, 0, 86, 97, 108, 117, 101, 0, 67, 111, 110, 102, 105, 103, 0, 99, 114, 101, 97, 116, 101, 0, 100, 101, 115, 116, 114, 111, 121, 0, 115, 101, 116, 69, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 70, 101, 97, 116, 117, 114, 101, 69, 110, 97, 98, 108, 101, 100, 0, 105, 115, 69, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 70, 101, 97, 116, 117, 114, 101, 69, 110, 97, 98, 108, 101, 100, 0, 78, 111, 100, 101, 0, 99, 114, 101, 97, 116, 101, 68, 101, 102, 97, 117, 108, 116, 0, 99, 114, 101, 97, 116, 101, 87, 105, 116, 104, 67, 111, 110, 102, 105, 103, 0, 114, 101, 115, 101, 116, 0, 99, 111, 112, 121, 83, 116, 121, 108, 101, 0, 115, 101, 116, 80, 111, 115, 105, 116, 105, 111, 110, 84, 121, 112, 101, 0, 115, 101, 116, 80, 111, 115, 105, 116, 105, 111, 110, 0, 115, 101, 116, 80, 111, 115, 105, 116, 105, 111, 110, 80, 101, 114, 99, 101, 110, 116, 0, 115, 101, 116, 65, 108, 105, 103, 110, 67, 111, 110, 116, 101, 110, 116, 0, 115, 101, 116, 65, 108, 105, 103, 110, 73, 116, 101, 109, 115, 0, 115, 101, 116, 65, 108, 105, 103, 110, 83, 101, 108, 102, 0, 115, 101, 116, 70, 108, 101, 120, 68, 105, 114, 101, 99, 116, 105, 111, 110, 0, 115, 101, 116, 70, 108, 101, 120, 87, 114, 97, 112, 0, 115, 101, 116, 74, 117, 115, 116, 105, 102, 121, 67, 111, 110, 116, 101, 110, 116, 0, 115, 101, 116, 77, 97, 114, 103, 105, 110, 0, 115, 101, 116, 77, 97, 114, 103, 105, 110, 80, 101, 114, 99, 101, 110, 116, 0, 115, 101, 116, 77, 97, 114, 103, 105, 110, 65, 117, 116, 111, 0, 115, 101, 116, 79, 118, 101, 114, 102, 108, 111, 119, 0, 115, 101, 116, 68, 105, 115, 112, 108, 97, 121, 0, 115, 101, 116, 70, 108, 101, 120, 0, 115, 101, 116, 70, 108, 101, 120, 66, 97, 115, 105, 115, 0, 115, 101, 116, 70, 108, 101, 120, 66, 97, 115, 105, 115, 80, 101, 114, 99, 101, 110, 116, 0, 115, 101, 116, 70, 108, 101, 120, 71, 114, 111, 119, 0, 115, 101, 116, 70, 108, 101, 120, 83, 104, 114, 105, 110, 107, 0, 115, 101, 116, 87, 105, 100, 116, 104, 0, 115, 101, 116, 87, 105, 100, 116, 104, 80, 101, 114, 99, 101, 110, 116, 0, 115, 101, 116, 87, 105, 100, 116, 104, 65, 117, 116, 111, 0, 115, 101, 116, 72, 101, 105, 103, 104, 116, 0, 115, 101, 116, 72, 101, 105, 103, 104, 116, 80, 101, 114, 99, 101, 110, 116, 0, 115, 101, 116, 72, 101, 105, 103, 104, 116, 65, 117, 116, 111, 0, 115, 101, 116, 77, 105, 110, 87, 105, 100, 116, 104, 0, 115, 101, 116, 77, 105, 110, 87, 105, 100, 116, 104, 80, 101, 114, 99, 101, 110, 116, 0, 115, 101, 116, 77, 105, 110, 72, 101, 105, 103, 104, 116, 0, 115, 101, 116, 77, 105, 110, 72, 101, 105, 103, 104, 116, 80, 101, 114, 99, 101, 110, 116, 0, 115, 101, 116, 77, 97, 120, 87, 105, 100, 116, 104, 0, 115, 101, 116, 77, 97, 120, 87, 105, 100, 116, 104, 80, 101, 114, 99, 101, 110, 116, 0, 115, 101, 116, 77, 97, 120, 72, 101, 105, 103, 104, 116, 0, 115, 101, 116, 77, 97, 120, 72, 101, 105, 103, 104, 116, 80, 101, 114, 99, 101, 110, 116, 0, 115, 101, 116, 65, 115, 112, 101, 99, 116, 82, 97, 116, 105, 111, 0, 115, 101, 116, 66, 111, 114, 100, 101, 114, 0, 115, 101, 116, 80, 97, 100, 100, 105, 110, 103, 0, 115, 101, 116, 80, 97, 100, 100, 105, 110, 103, 80, 101, 114, 99, 101, 110, 116, 0, 103, 101, 116, 80, 111, 115, 105, 116, 105, 111, 110, 84, 121, 112, 101, 0, 103, 101, 116, 80, 111, 115, 105, 116, 105, 111, 110, 0, 103, 101, 116, 65, 108, 105, 103, 110, 67, 111, 110, 116, 101, 110, 116, 0, 103, 101, 116, 65, 108, 105, 103, 110, 73, 116, 101, 109, 115, 0, 103, 101, 116, 65, 108, 105, 103, 110, 83, 101, 108, 102, 0, 103, 101, 116, 70, 108, 101, 120, 68, 105, 114, 101, 99, 116, 105, 111, 110, 0, 103, 101, 116, 70, 108, 101, 120, 87, 114, 97, 112, 0, 103, 101, 116, 74, 117, 115, 116, 105, 102, 121, 67, 111, 110, 116, 101, 110, 116, 0, 103, 101, 116, 77, 97, 114, 103, 105, 110, 0, 103, 101, 116, 70, 108, 101, 120, 66, 97, 115, 105, 115, 0, 103, 101, 116, 70, 108, 101, 120, 71, 114, 111, 119, 0, 103, 101, 116, 70, 108, 101, 120, 83, 104, 114, 105, 110, 107, 0, 103, 101, 116, 87, 105, 100, 116, 104, 0, 103, 101, 116, 72, 101, 105, 103, 104, 116, 0, 103, 101, 116, 77, 105, 110, 87, 105, 100, 116, 104, 0, 103, 101, 116, 77, 105, 110, 72, 101, 105, 103, 104, 116, 0, 103, 101, 116, 77, 97, 120, 87, 105, 100, 116, 104, 0, 103, 101, 116, 77, 97, 120, 72, 101, 105, 103, 104, 116, 0, 103, 101, 116, 65, 115, 112, 101, 99, 116, 82, 97, 116, 105, 111, 0, 103, 101, 116, 66, 111, 114, 100, 101, 114, 0, 103, 101, 116, 79, 118, 101, 114, 102, 108, 111, 119, 0, 103, 101, 116, 68, 105, 115, 112, 108, 97, 121, 0, 103, 101, 116, 80, 97, 100, 100, 105, 110, 103, 0, 105, 110, 115, 101, 114, 116, 67, 104, 105, 108, 100, 0, 114, 101, 109, 111, 118, 101, 67, 104, 105, 108, 100, 0, 103, 101, 116, 67, 104, 105, 108, 100, 67, 111, 117, 110, 116, 0, 103, 101, 116, 80, 97, 114, 101, 110, 116, 0, 103, 101, 116, 67, 104, 105, 108, 100, 0, 115, 101, 116, 77, 101, 97, 115, 117, 114, 101, 70, 117, 110, 99, 0, 117, 110, 115, 101, 116, 77, 101, 97, 115, 117, 114, 101, 70, 117, 110, 99, 0, 109, 97, 114, 107, 68, 105, 114, 116, 121, 0, 105, 115, 68, 105, 114, 116, 121, 0, 99, 97, 108, 99, 117, 108, 97, 116, 101, 76, 97, 121, 111, 117, 116, 0, 103, 101, 116, 67, 111, 109, 112, 117, 116, 101, 100, 76, 101, 102, 116, 0, 103, 101, 116, 67, 111, 109, 112, 117, 116, 101, 100, 82, 105, 103, 104, 116, 0, 103, 101, 116, 67, 111, 109, 112, 117, 116, 101, 100, 84, 111, 112, 0, 103, 101, 116, 67, 111, 109, 112, 117, 116, 101, 100, 66, 111, 116, 116, 111, 109, 0, 103, 101, 116, 67, 111, 109, 112, 117, 116, 101, 100, 87, 105, 100, 116, 104, 0, 103, 101, 116, 67, 111, 109, 112, 117, 116, 101, 100, 72, 101, 105, 103, 104, 116, 0, 103, 101, 116, 67, 111, 109, 112, 117, 116, 101, 100, 76, 97, 121, 111, 117, 116, 0, 103, 101, 116, 67, 111, 109, 112, 117, 116, 101, 100, 77, 97, 114, 103, 105, 110, 0, 103, 101, 116, 67, 111, 109, 112, 117, 116, 101, 100, 66, 111, 114, 100, 101, 114, 0, 103, 101, 116, 67, 111, 109, 112, 117, 116, 101, 100, 80, 97, 100, 100, 105, 110, 103, 0, 73, 110, 116, 54, 52, 0, 1, 1, 1, 2, 2, 4, 4, 4, 4, 8, 8, 4, 8, 118, 111, 105, 100, 0, 98, 111, 111, 108, 0, 115, 116, 100, 58, 58, 115, 116, 114, 105, 110, 103, 0, 99, 98, 70, 117, 110, 99, 116, 105, 111, 110, 32, 38, 0, 99, 111, 110, 115, 116, 32, 99, 98, 70, 117, 110, 99, 116, 105, 111, 110, 32, 38, 0, 69, 120, 116, 101, 114, 110, 97, 108, 0, 66, 117, 102, 102, 101, 114, 0, 78, 66, 105, 110, 100, 0, 98, 105, 110, 100, 95, 118, 97, 108, 117, 101, 0, 114, 101, 102, 108, 101, 99, 116, 0, 113, 117, 101, 114, 121, 84, 121, 112, 101, 0, 108, 97, 108, 108, 111, 99, 0, 108, 114, 101, 115, 101, 116, 0, 78, 66, 105, 110, 100, 73, 68, 0, 123, 114, 101, 116, 117, 114, 110, 40, 95, 110, 98, 105, 110, 100, 46, 99, 97, 108, 108, 98, 97, 99, 107, 83, 105, 103, 110, 97, 116, 117, 114, 101, 76, 105, 115, 116, 91, 36, 48, 93, 46, 97, 112, 112, 108, 121, 40, 116, 104, 105, 115, 44, 97, 114, 103, 117, 109, 101, 110, 116, 115, 41, 41, 59, 125, 0, 95, 110, 98, 105, 110, 100, 95, 110, 101, 119, 0, 17, 0, 10, 0, 17, 17, 17, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 15, 10, 17, 17, 17, 3, 10, 7, 0, 1, 19, 9, 11, 11, 0, 0, 9, 6, 11, 0, 0, 11, 0, 6, 17, 0, 0, 0, 17, 17, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 10, 10, 17, 17, 17, 0, 10, 0, 0, 2, 0, 9, 11, 0, 0, 0, 9, 0, 11, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 0, 0, 0, 0, 9, 12, 0, 0, 0, 0, 0, 12, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 4, 13, 0, 0, 0, 0, 9, 14, 0, 0, 0, 0, 0, 14, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 15, 0, 0, 0, 0, 9, 16, 0, 0, 0, 0, 0, 16, 0, 0, 16, 0, 0, 18, 0, 0, 0, 18, 18, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 0, 0, 0, 18, 18, 18, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 10, 0, 0, 0, 0, 9, 11, 0, 0, 0, 0, 0, 11, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 0, 0, 0, 0, 9, 12, 0, 0, 0, 0, 0, 12, 0, 0, 12, 0, 0, 45, 43, 32, 32, 32, 48, 88, 48, 120, 0, 40, 110, 117, 108, 108, 41, 0, 45, 48, 88, 43, 48, 88, 32, 48, 88, 45, 48, 120, 43, 48, 120, 32, 48, 120, 0, 105, 110, 102, 0, 73, 78, 70, 0, 110, 97, 110, 0, 78, 65, 78, 0, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 46, 0, 84, 33, 34, 25, 13, 1, 2, 3, 17, 75, 28, 12, 16, 4, 11, 29, 18, 30, 39, 104, 110, 111, 112, 113, 98, 32, 5, 6, 15, 19, 20, 21, 26, 8, 22, 7, 40, 36, 23, 24, 9, 10, 14, 27, 31, 37, 35, 131, 130, 125, 38, 42, 43, 60, 61, 62, 63, 67, 71, 74, 77, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 99, 100, 101, 102, 103, 105, 106, 107, 108, 114, 115, 116, 121, 122, 123, 124, 0, 73, 108, 108, 101, 103, 97, 108, 32, 98, 121, 116, 101, 32, 115, 101, 113, 117, 101, 110, 99, 101, 0, 68, 111, 109, 97, 105, 110, 32, 101, 114, 114, 111, 114, 0, 82, 101, 115, 117, 108, 116, 32, 110, 111, 116, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 98, 108, 101, 0, 78, 111, 116, 32, 97, 32, 116, 116, 121, 0, 80, 101, 114, 109, 105, 115, 115, 105, 111, 110, 32, 100, 101, 110, 105, 101, 100, 0, 79, 112, 101, 114, 97, 116, 105, 111, 110, 32, 110, 111, 116, 32, 112, 101, 114, 109, 105, 116, 116, 101, 100, 0, 78, 111, 32, 115, 117, 99, 104, 32, 102, 105, 108, 101, 32, 111, 114, 32, 100, 105, 114, 101, 99, 116, 111, 114, 121, 0, 78, 111, 32, 115, 117, 99, 104, 32, 112, 114, 111, 99, 101, 115, 115, 0, 70, 105, 108, 101, 32, 101, 120, 105, 115, 116, 115, 0, 86, 97, 108, 117, 101, 32, 116, 111, 111, 32, 108, 97, 114, 103, 101, 32, 102, 111, 114, 32, 100, 97, 116, 97, 32, 116, 121, 112, 101, 0, 78, 111, 32, 115, 112, 97, 99, 101, 32, 108, 101, 102, 116, 32, 111, 110, 32, 100, 101, 118, 105, 99, 101, 0, 79, 117, 116, 32, 111, 102, 32, 109, 101, 109, 111, 114, 121, 0, 82, 101, 115, 111, 117, 114, 99, 101, 32, 98, 117, 115, 121, 0, 73, 110, 116, 101, 114, 114, 117, 112, 116, 101, 100, 32, 115, 121, 115, 116, 101, 109, 32, 99, 97, 108, 108, 0, 82, 101, 115, 111, 117, 114, 99, 101, 32, 116, 101, 109, 112, 111, 114, 97, 114, 105, 108, 121, 32, 117, 110, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 73, 110, 118, 97, 108, 105, 100, 32, 115, 101, 101, 107, 0, 67, 114, 111, 115, 115, 45, 100, 101, 118, 105, 99, 101, 32, 108, 105, 110, 107, 0, 82, 101, 97, 100, 45, 111, 110, 108, 121, 32, 102, 105, 108, 101, 32, 115, 121, 115, 116, 101, 109, 0, 68, 105, 114, 101, 99, 116, 111, 114, 121, 32, 110, 111, 116, 32, 101, 109, 112, 116, 121, 0, 67, 111, 110, 110, 101, 99, 116, 105, 111, 110, 32, 114, 101, 115, 101, 116, 32, 98, 121, 32, 112, 101, 101, 114, 0, 79, 112, 101, 114, 97, 116, 105, 111, 110, 32, 116, 105, 109, 101, 100, 32, 111, 117, 116, 0, 67, 111, 110, 110, 101, 99, 116, 105, 111, 110, 32, 114, 101, 102, 117, 115, 101, 100, 0, 72, 111, 115, 116, 32, 105, 115, 32, 100, 111, 119, 110, 0, 72, 111, 115, 116, 32, 105, 115, 32, 117, 110, 114, 101, 97, 99, 104, 97, 98, 108, 101, 0, 65, 100, 100, 114, 101, 115, 115, 32, 105, 110, 32, 117, 115, 101, 0, 66, 114, 111, 107, 101, 110, 32, 112, 105, 112, 101, 0, 73, 47, 79, 32, 101, 114, 114, 111, 114, 0, 78, 111, 32, 115, 117, 99, 104, 32, 100, 101, 118, 105, 99, 101, 32, 111, 114, 32, 97, 100, 100, 114, 101, 115, 115, 0, 66, 108, 111, 99, 107, 32, 100, 101, 118, 105, 99, 101, 32, 114, 101, 113, 117, 105, 114, 101, 100, 0, 78, 111, 32, 115, 117, 99, 104, 32, 100, 101, 118, 105, 99, 101, 0, 78, 111, 116, 32, 97, 32, 100, 105, 114, 101, 99, 116, 111, 114, 121, 0, 73, 115, 32, 97, 32, 100, 105, 114, 101, 99, 116, 111, 114, 121, 0, 84, 101, 120, 116, 32, 102, 105, 108, 101, 32, 98, 117, 115, 121, 0, 69, 120, 101, 99, 32, 102, 111, 114, 109, 97, 116, 32, 101, 114, 114, 111, 114, 0, 73, 110, 118, 97, 108, 105, 100, 32, 97, 114, 103, 117, 109, 101, 110, 116, 0, 65, 114, 103, 117, 109, 101, 110, 116, 32, 108, 105, 115, 116, 32, 116, 111, 111, 32, 108, 111, 110, 103, 0, 83, 121, 109, 98, 111, 108, 105, 99, 32, 108, 105, 110, 107, 32, 108, 111, 111, 112, 0, 70, 105, 108, 101, 110, 97, 109, 101, 32, 116, 111, 111, 32, 108, 111, 110, 103, 0, 84, 111, 111, 32, 109, 97, 110, 121, 32, 111, 112, 101, 110, 32, 102, 105, 108, 101, 115, 32, 105, 110, 32, 115, 121, 115, 116, 101, 109, 0, 78, 111, 32, 102, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 115, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 66, 97, 100, 32, 102, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 0, 78, 111, 32, 99, 104, 105, 108, 100, 32, 112, 114, 111, 99, 101, 115, 115, 0, 66, 97, 100, 32, 97, 100, 100, 114, 101, 115, 115, 0, 70, 105, 108, 101, 32, 116, 111, 111, 32, 108, 97, 114, 103, 101, 0, 84, 111, 111, 32, 109, 97, 110, 121, 32, 108, 105, 110, 107, 115, 0, 78, 111, 32, 108, 111, 99, 107, 115, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 82, 101, 115, 111, 117, 114, 99, 101, 32, 100, 101, 97, 100, 108, 111, 99, 107, 32, 119, 111, 117, 108, 100, 32, 111, 99, 99, 117, 114, 0, 83, 116, 97, 116, 101, 32, 110, 111, 116, 32, 114, 101, 99, 111, 118, 101, 114, 97, 98, 108, 101, 0, 80, 114, 101, 118, 105, 111, 117, 115, 32, 111, 119, 110, 101, 114, 32, 100, 105, 101, 100, 0, 79, 112, 101, 114, 97, 116, 105, 111, 110, 32, 99, 97, 110, 99, 101, 108, 101, 100, 0, 70, 117, 110, 99, 116, 105, 111, 110, 32, 110, 111, 116, 32, 105, 109, 112, 108, 101, 109, 101, 110, 116, 101, 100, 0, 78, 111, 32, 109, 101, 115, 115, 97, 103, 101, 32, 111, 102, 32, 100, 101, 115, 105, 114, 101, 100, 32, 116, 121, 112, 101, 0, 73, 100, 101, 110, 116, 105, 102, 105, 101, 114, 32, 114, 101, 109, 111, 118, 101, 100, 0, 68, 101, 118, 105, 99, 101, 32, 110, 111, 116, 32, 97, 32, 115, 116, 114, 101, 97, 109, 0, 78, 111, 32, 100, 97, 116, 97, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 68, 101, 118, 105, 99, 101, 32, 116, 105, 109, 101, 111, 117, 116, 0, 79, 117, 116, 32, 111, 102, 32, 115, 116, 114, 101, 97, 109, 115, 32, 114, 101, 115, 111, 117, 114, 99, 101, 115, 0, 76, 105, 110, 107, 32, 104, 97, 115, 32, 98, 101, 101, 110, 32, 115, 101, 118, 101, 114, 101, 100, 0, 80, 114, 111, 116, 111, 99, 111, 108, 32, 101, 114, 114, 111, 114, 0, 66, 97, 100, 32, 109, 101, 115, 115, 97, 103, 101, 0, 70, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 32, 105, 110, 32, 98, 97, 100, 32, 115, 116, 97, 116, 101, 0, 78, 111, 116, 32, 97, 32, 115, 111, 99, 107, 101, 116, 0, 68, 101, 115, 116, 105, 110, 97, 116, 105, 111, 110, 32, 97, 100, 100, 114, 101, 115, 115, 32, 114, 101, 113, 117, 105, 114, 101, 100, 0, 77, 101, 115, 115, 97, 103, 101, 32, 116, 111, 111, 32, 108, 97, 114, 103, 101, 0, 80, 114, 111, 116, 111, 99, 111, 108, 32, 119, 114, 111, 110, 103, 32, 116, 121, 112, 101, 32, 102, 111, 114, 32, 115, 111, 99, 107, 101, 116, 0, 80, 114, 111, 116, 111, 99, 111, 108, 32, 110, 111, 116, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 80, 114, 111, 116, 111, 99, 111, 108, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 0, 83, 111, 99, 107, 101, 116, 32, 116, 121, 112, 101, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 0, 78, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 0, 80, 114, 111, 116, 111, 99, 111, 108, 32, 102, 97, 109, 105, 108, 121, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 0, 65, 100, 100, 114, 101, 115, 115, 32, 102, 97, 109, 105, 108, 121, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 32, 98, 121, 32, 112, 114, 111, 116, 111, 99, 111, 108, 0, 65, 100, 100, 114, 101, 115, 115, 32, 110, 111, 116, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 78, 101, 116, 119, 111, 114, 107, 32, 105, 115, 32, 100, 111, 119, 110, 0, 78, 101, 116, 119, 111, 114, 107, 32, 117, 110, 114, 101, 97, 99, 104, 97, 98, 108, 101, 0, 67, 111, 110, 110, 101, 99, 116, 105, 111, 110, 32, 114, 101, 115, 101, 116, 32, 98, 121, 32, 110, 101, 116, 119, 111, 114, 107, 0, 67, 111, 110, 110, 101, 99, 116, 105, 111, 110, 32, 97, 98, 111, 114, 116, 101, 100, 0, 78, 111, 32, 98, 117, 102, 102, 101, 114, 32, 115, 112, 97, 99, 101, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 83, 111, 99, 107, 101, 116, 32, 105, 115, 32, 99, 111, 110, 110, 101, 99, 116, 101, 100, 0, 83, 111, 99, 107, 101, 116, 32, 110, 111, 116, 32, 99, 111, 110, 110, 101, 99, 116, 101, 100, 0, 67, 97, 110, 110, 111, 116, 32, 115, 101, 110, 100, 32, 97, 102, 116, 101, 114, 32, 115, 111, 99, 107, 101, 116, 32, 115, 104, 117, 116, 100, 111, 119, 110, 0, 79, 112, 101, 114, 97, 116, 105, 111, 110, 32, 97, 108, 114, 101, 97, 100, 121, 32, 105, 110, 32, 112, 114, 111, 103, 114, 101, 115, 115, 0, 79, 112, 101, 114, 97, 116, 105, 111, 110, 32, 105, 110, 32, 112, 114, 111, 103, 114, 101, 115, 115, 0, 83, 116, 97, 108, 101, 32, 102, 105, 108, 101, 32, 104, 97, 110, 100, 108, 101, 0, 82, 101, 109, 111, 116, 101, 32, 73, 47, 79, 32, 101, 114, 114, 111, 114, 0, 81, 117, 111, 116, 97, 32, 101, 120, 99, 101, 101, 100, 101, 100, 0, 78, 111, 32, 109, 101, 100, 105, 117, 109, 32, 102, 111, 117, 110, 100, 0, 87, 114, 111, 110, 103, 32, 109, 101, 100, 105, 117, 109, 32, 116, 121, 112, 101, 0, 78, 111, 32, 101, 114, 114, 111, 114, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 0, 0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE);var tempDoublePtr = STATICTOP;STATICTOP += 16;function _atexit(func, arg) {
    __ATEXIT__.unshift({ func: func, arg: arg });
  }function ___cxa_atexit() {
    return _atexit.apply(null, arguments);
  }Module["_i64Subtract"] = _i64Subtract;Module["_i64Add"] = _i64Add;Module["_memset"] = _memset;function __decorate(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;return c > 3 && r && Object.defineProperty(target, key, r), r;
  }function _defineHidden(value) {
    return function (target, key) {
      Object.defineProperty(target, key, { configurable: false, enumerable: false, value: value, writable: true });
    };
  }var _nbind = {};function __nbind_register_primitive(id, size, flags) {
    var spec = { flags: 1024 | flags, id: id, ptrSize: size };_nbind.makeType(_nbind.constructType, spec);
  }Module["_bitshift64Shl"] = _bitshift64Shl;function _abort() {
    Module["abort"]();
  }function __nbind_free_external(num) {
    _nbind.externalList[num].dereference(num);
  }function _YGWrapToString() {
    Module["printErr"]("missing function: YGWrapToString");abort(-1);
  }function __nbind_reference_external(num) {
    _nbind.externalList[num].reference();
  }function _llvm_stackrestore(p) {
    var self = _llvm_stacksave;var ret = self.LLVM_SAVEDSTACKS[p];self.LLVM_SAVEDSTACKS.splice(p, 1);Runtime.stackRestore(ret);
  }function _YGFlexDirectionToString() {
    Module["printErr"]("missing function: YGFlexDirectionToString");abort(-1);
  }function _YGJustifyToString() {
    Module["printErr"]("missing function: YGJustifyToString");abort(-1);
  }function __nbind_register_pool(pageSize, usedPtr, rootPtr, pagePtr) {
    _nbind.Pool.pageSize = pageSize;_nbind.Pool.usedPtr = usedPtr / 4;_nbind.Pool.rootPtr = rootPtr;_nbind.Pool.pagePtr = pagePtr / 4;HEAP32[usedPtr / 4] = 16909060;if (HEAP8[usedPtr] == 1) _nbind.bigEndian = true;HEAP32[usedPtr / 4] = 0;_nbind.makeTypeKindTbl = (_a = {}, _a[1024] = _nbind.PrimitiveType, _a[64] = _nbind.Int64Type, _a[2048] = _nbind.BindClass, _a[3072] = _nbind.BindClassPtr, _a[4096] = _nbind.SharedClassPtr, _a[5120] = _nbind.ArrayType, _a[6144] = _nbind.ArrayType, _a[7168] = _nbind.CStringType, _a[9216] = _nbind.CallbackType, _a[10240] = _nbind.BindType, _a);_nbind.makeTypeNameTbl = { "Buffer": _nbind.BufferType, "External": _nbind.ExternalType, "Int64": _nbind.Int64Type, "_nbind_new": _nbind.CreateValueType, "bool": _nbind.BooleanType, "cbFunction &": _nbind.CallbackType, "const cbFunction &": _nbind.CallbackType, "const std::string &": _nbind.StringType, "std::string": _nbind.StringType };Module["toggleLightGC"] = _nbind.toggleLightGC;_nbind.callUpcast = Module["dynCall_ii"];var globalScope = _nbind.makeType(_nbind.constructType, { flags: 2048, id: 0, name: "" });globalScope.proto = Module;_nbind.BindClass.list.push(globalScope);var _a;
  }function _emscripten_set_main_loop_timing(mode, value) {
    Browser.mainLoop.timingMode = mode;Browser.mainLoop.timingValue = value;if (!Browser.mainLoop.func) {
      return 1;
    }if (mode == 0) {
      Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setTimeout() {
        var timeUntilNextTick = Math.max(0, Browser.mainLoop.tickStartTime + value - _emscripten_get_now()) | 0;setTimeout(Browser.mainLoop.runner, timeUntilNextTick);
      };Browser.mainLoop.method = "timeout";
    } else if (mode == 1) {
      Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_rAF() {
        Browser.requestAnimationFrame(Browser.mainLoop.runner);
      };Browser.mainLoop.method = "rAF";
    } else if (mode == 2) {
      if (!window["setImmediate"]) {
        var setImmediates = [];var emscriptenMainLoopMessageId = "setimmediate";function Browser_setImmediate_messageHandler(event) {
          if (event.source === window && event.data === emscriptenMainLoopMessageId) {
            event.stopPropagation();setImmediates.shift()();
          }
        }window.addEventListener("message", Browser_setImmediate_messageHandler, true);window["setImmediate"] = function Browser_emulated_setImmediate(func) {
          setImmediates.push(func);if (ENVIRONMENT_IS_WORKER) {
            if (Module["setImmediates"] === undefined) Module["setImmediates"] = [];Module["setImmediates"].push(func);window.postMessage({ target: emscriptenMainLoopMessageId });
          } else window.postMessage(emscriptenMainLoopMessageId, "*");
        };
      }Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setImmediate() {
        window["setImmediate"](Browser.mainLoop.runner);
      };Browser.mainLoop.method = "immediate";
    }return 0;
  }function _emscripten_get_now() {
    abort();
  }function _emscripten_set_main_loop(func, fps, simulateInfiniteLoop, arg, noSetTiming) {
    Module["noExitRuntime"] = true;assert(!Browser.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");Browser.mainLoop.func = func;Browser.mainLoop.arg = arg;var browserIterationFunc;if (typeof arg !== "undefined") {
      browserIterationFunc = function () {
        Module["dynCall_vi"](func, arg);
      };
    } else {
      browserIterationFunc = function () {
        Module["dynCall_v"](func);
      };
    }var thisMainLoopId = Browser.mainLoop.currentlyRunningMainloop;Browser.mainLoop.runner = function Browser_mainLoop_runner() {
      if (ABORT) return;if (Browser.mainLoop.queue.length > 0) {
        var start = Date.now();var blocker = Browser.mainLoop.queue.shift();blocker.func(blocker.arg);if (Browser.mainLoop.remainingBlockers) {
          var remaining = Browser.mainLoop.remainingBlockers;var next = remaining % 1 == 0 ? remaining - 1 : Math.floor(remaining);if (blocker.counted) {
            Browser.mainLoop.remainingBlockers = next;
          } else {
            next = next + .5;Browser.mainLoop.remainingBlockers = (8 * remaining + next) / 9;
          }
        }console.log('main loop blocker "' + blocker.name + '" took ' + (Date.now() - start) + " ms");Browser.mainLoop.updateStatus();if (thisMainLoopId < Browser.mainLoop.currentlyRunningMainloop) return;setTimeout(Browser.mainLoop.runner, 0);return;
      }if (thisMainLoopId < Browser.mainLoop.currentlyRunningMainloop) return;Browser.mainLoop.currentFrameNumber = Browser.mainLoop.currentFrameNumber + 1 | 0;if (Browser.mainLoop.timingMode == 1 && Browser.mainLoop.timingValue > 1 && Browser.mainLoop.currentFrameNumber % Browser.mainLoop.timingValue != 0) {
        Browser.mainLoop.scheduler();return;
      } else if (Browser.mainLoop.timingMode == 0) {
        Browser.mainLoop.tickStartTime = _emscripten_get_now();
      }if (Browser.mainLoop.method === "timeout" && Module.ctx) {
        Module.printErr("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!");Browser.mainLoop.method = "";
      }Browser.mainLoop.runIter(browserIterationFunc);if (thisMainLoopId < Browser.mainLoop.currentlyRunningMainloop) return;if (typeof SDL === "object" && SDL.audio && SDL.audio.queueNewAudioData) SDL.audio.queueNewAudioData();Browser.mainLoop.scheduler();
    };if (!noSetTiming) {
      if (fps && fps > 0) _emscripten_set_main_loop_timing(0, 1e3 / fps);else _emscripten_set_main_loop_timing(1, 1);Browser.mainLoop.scheduler();
    }if (simulateInfiniteLoop) {
      throw "SimulateInfiniteLoop";
    }
  }var Browser = { mainLoop: { scheduler: null, method: "", currentlyRunningMainloop: 0, func: null, arg: 0, timingMode: 0, timingValue: 0, currentFrameNumber: 0, queue: [], pause: function () {
        Browser.mainLoop.scheduler = null;Browser.mainLoop.currentlyRunningMainloop++;
      }, resume: function () {
        Browser.mainLoop.currentlyRunningMainloop++;var timingMode = Browser.mainLoop.timingMode;var timingValue = Browser.mainLoop.timingValue;var func = Browser.mainLoop.func;Browser.mainLoop.func = null;_emscripten_set_main_loop(func, 0, false, Browser.mainLoop.arg, true);_emscripten_set_main_loop_timing(timingMode, timingValue);Browser.mainLoop.scheduler();
      }, updateStatus: function () {
        if (Module["setStatus"]) {
          var message = Module["statusMessage"] || "Please wait...";var remaining = Browser.mainLoop.remainingBlockers;var expected = Browser.mainLoop.expectedBlockers;if (remaining) {
            if (remaining < expected) {
              Module["setStatus"](message + " (" + (expected - remaining) + "/" + expected + ")");
            } else {
              Module["setStatus"](message);
            }
          } else {
            Module["setStatus"]("");
          }
        }
      }, runIter: function (func) {
        if (ABORT) return;if (Module["preMainLoop"]) {
          var preRet = Module["preMainLoop"]();if (preRet === false) {
            return;
          }
        }try {
          func();
        } catch (e) {
          if (e instanceof ExitStatus) {
            return;
          } else {
            if (e && typeof e === "object" && e.stack) Module.printErr("exception thrown: " + [e, e.stack]);throw e;
          }
        }if (Module["postMainLoop"]) Module["postMainLoop"]();
      } }, isFullscreen: false, pointerLock: false, moduleContextCreatedCallbacks: [], workers: [], init: function () {
      if (!Module["preloadPlugins"]) Module["preloadPlugins"] = [];if (Browser.initted) return;Browser.initted = true;try {
        new Blob();Browser.hasBlobConstructor = true;
      } catch (e) {
        Browser.hasBlobConstructor = false;console.log("warning: no blob constructor, cannot create blobs with mimetypes");
      }Browser.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : !Browser.hasBlobConstructor ? console.log("warning: no BlobBuilder") : null;Browser.URLObject = typeof window != "undefined" ? window.URL ? window.URL : window.webkitURL : undefined;if (!Module.noImageDecoding && typeof Browser.URLObject === "undefined") {
        console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");Module.noImageDecoding = true;
      }var imagePlugin = {};imagePlugin["canHandle"] = function imagePlugin_canHandle(name) {
        return !Module.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(name);
      };imagePlugin["handle"] = function imagePlugin_handle(byteArray, name, onload, onerror) {
        var b = null;if (Browser.hasBlobConstructor) {
          try {
            b = new Blob([byteArray], { type: Browser.getMimetype(name) });if (b.size !== byteArray.length) {
              b = new Blob([new Uint8Array(byteArray).buffer], { type: Browser.getMimetype(name) });
            }
          } catch (e) {
            Runtime.warnOnce("Blob constructor present but fails: " + e + "; falling back to blob builder");
          }
        }if (!b) {
          var bb = new Browser.BlobBuilder();bb.append(new Uint8Array(byteArray).buffer);b = bb.getBlob();
        }var url = Browser.URLObject.createObjectURL(b);var img = new Image();img.onload = function img_onload() {
          assert(img.complete, "Image " + name + " could not be decoded");var canvas = document.createElement("canvas");canvas.width = img.width;canvas.height = img.height;var ctx = canvas.getContext("2d");ctx.drawImage(img, 0, 0);Module["preloadedImages"][name] = canvas;Browser.URLObject.revokeObjectURL(url);if (onload) onload(byteArray);
        };img.onerror = function img_onerror(event) {
          console.log("Image " + url + " could not be decoded");if (onerror) onerror();
        };img.src = url;
      };Module["preloadPlugins"].push(imagePlugin);var audioPlugin = {};audioPlugin["canHandle"] = function audioPlugin_canHandle(name) {
        return !Module.noAudioDecoding && name.substr(-4) in { ".ogg": 1, ".wav": 1, ".mp3": 1 };
      };audioPlugin["handle"] = function audioPlugin_handle(byteArray, name, onload, onerror) {
        var done = false;function finish(audio) {
          if (done) return;done = true;Module["preloadedAudios"][name] = audio;if (onload) onload(byteArray);
        }function fail() {
          if (done) return;done = true;Module["preloadedAudios"][name] = new Audio();if (onerror) onerror();
        }if (Browser.hasBlobConstructor) {
          try {
            var b = new Blob([byteArray], { type: Browser.getMimetype(name) });
          } catch (e) {
            return fail();
          }var url = Browser.URLObject.createObjectURL(b);var audio = new Audio();audio.addEventListener("canplaythrough", function () {
            finish(audio);
          }, false);audio.onerror = function audio_onerror(event) {
            if (done) return;console.log("warning: browser could not fully decode audio " + name + ", trying slower base64 approach");function encode64(data) {
              var BASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var PAD = "=";var ret = "";var leftchar = 0;var leftbits = 0;for (var i = 0; i < data.length; i++) {
                leftchar = leftchar << 8 | data[i];leftbits += 8;while (leftbits >= 6) {
                  var curr = leftchar >> leftbits - 6 & 63;leftbits -= 6;ret += BASE[curr];
                }
              }if (leftbits == 2) {
                ret += BASE[(leftchar & 3) << 4];ret += PAD + PAD;
              } else if (leftbits == 4) {
                ret += BASE[(leftchar & 15) << 2];ret += PAD;
              }return ret;
            }audio.src = "data:audio/x-" + name.substr(-3) + ";base64," + encode64(byteArray);finish(audio);
          };audio.src = url;Browser.safeSetTimeout(function () {
            finish(audio);
          }, 1e4);
        } else {
          return fail();
        }
      };Module["preloadPlugins"].push(audioPlugin);function pointerLockChange() {
        Browser.pointerLock = document["pointerLockElement"] === Module["canvas"] || document["mozPointerLockElement"] === Module["canvas"] || document["webkitPointerLockElement"] === Module["canvas"] || document["msPointerLockElement"] === Module["canvas"];
      }var canvas = Module["canvas"];if (canvas) {
        canvas.requestPointerLock = canvas["requestPointerLock"] || canvas["mozRequestPointerLock"] || canvas["webkitRequestPointerLock"] || canvas["msRequestPointerLock"] || function () {};canvas.exitPointerLock = document["exitPointerLock"] || document["mozExitPointerLock"] || document["webkitExitPointerLock"] || document["msExitPointerLock"] || function () {};canvas.exitPointerLock = canvas.exitPointerLock.bind(document);document.addEventListener("pointerlockchange", pointerLockChange, false);document.addEventListener("mozpointerlockchange", pointerLockChange, false);document.addEventListener("webkitpointerlockchange", pointerLockChange, false);document.addEventListener("mspointerlockchange", pointerLockChange, false);if (Module["elementPointerLock"]) {
          canvas.addEventListener("click", function (ev) {
            if (!Browser.pointerLock && Module["canvas"].requestPointerLock) {
              Module["canvas"].requestPointerLock();ev.preventDefault();
            }
          }, false);
        }
      }
    }, createContext: function (canvas, useWebGL, setInModule, webGLContextAttributes) {
      if (useWebGL && Module.ctx && canvas == Module.canvas) return Module.ctx;var ctx;var contextHandle;if (useWebGL) {
        var contextAttributes = { antialias: false, alpha: false };if (webGLContextAttributes) {
          for (var attribute in webGLContextAttributes) {
            contextAttributes[attribute] = webGLContextAttributes[attribute];
          }
        }contextHandle = GL.createContext(canvas, contextAttributes);if (contextHandle) {
          ctx = GL.getContext(contextHandle).GLctx;
        }
      } else {
        ctx = canvas.getContext("2d");
      }if (!ctx) return null;if (setInModule) {
        if (!useWebGL) assert(typeof GLctx === "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");Module.ctx = ctx;if (useWebGL) GL.makeContextCurrent(contextHandle);Module.useWebGL = useWebGL;Browser.moduleContextCreatedCallbacks.forEach(function (callback) {
          callback();
        });Browser.init();
      }return ctx;
    }, destroyContext: function (canvas, useWebGL, setInModule) {}, fullscreenHandlersInstalled: false, lockPointer: undefined, resizeCanvas: undefined, requestFullscreen: function (lockPointer, resizeCanvas, vrDevice) {
      Browser.lockPointer = lockPointer;Browser.resizeCanvas = resizeCanvas;Browser.vrDevice = vrDevice;if (typeof Browser.lockPointer === "undefined") Browser.lockPointer = true;if (typeof Browser.resizeCanvas === "undefined") Browser.resizeCanvas = false;if (typeof Browser.vrDevice === "undefined") Browser.vrDevice = null;var canvas = Module["canvas"];function fullscreenChange() {
        Browser.isFullscreen = false;var canvasContainer = canvas.parentNode;if ((document["fullscreenElement"] || document["mozFullScreenElement"] || document["msFullscreenElement"] || document["webkitFullscreenElement"] || document["webkitCurrentFullScreenElement"]) === canvasContainer) {
          canvas.exitFullscreen = document["exitFullscreen"] || document["cancelFullScreen"] || document["mozCancelFullScreen"] || document["msExitFullscreen"] || document["webkitCancelFullScreen"] || function () {};canvas.exitFullscreen = canvas.exitFullscreen.bind(document);if (Browser.lockPointer) canvas.requestPointerLock();Browser.isFullscreen = true;if (Browser.resizeCanvas) Browser.setFullscreenCanvasSize();
        } else {
          canvasContainer.parentNode.insertBefore(canvas, canvasContainer);canvasContainer.parentNode.removeChild(canvasContainer);if (Browser.resizeCanvas) Browser.setWindowedCanvasSize();
        }if (Module["onFullScreen"]) Module["onFullScreen"](Browser.isFullscreen);if (Module["onFullscreen"]) Module["onFullscreen"](Browser.isFullscreen);Browser.updateCanvasDimensions(canvas);
      }if (!Browser.fullscreenHandlersInstalled) {
        Browser.fullscreenHandlersInstalled = true;document.addEventListener("fullscreenchange", fullscreenChange, false);document.addEventListener("mozfullscreenchange", fullscreenChange, false);document.addEventListener("webkitfullscreenchange", fullscreenChange, false);document.addEventListener("MSFullscreenChange", fullscreenChange, false);
      }var canvasContainer = document.createElement("div");canvas.parentNode.insertBefore(canvasContainer, canvas);canvasContainer.appendChild(canvas);canvasContainer.requestFullscreen = canvasContainer["requestFullscreen"] || canvasContainer["mozRequestFullScreen"] || canvasContainer["msRequestFullscreen"] || (canvasContainer["webkitRequestFullscreen"] ? function () {
        canvasContainer["webkitRequestFullscreen"](Element["ALLOW_KEYBOARD_INPUT"]);
      } : null) || (canvasContainer["webkitRequestFullScreen"] ? function () {
        canvasContainer["webkitRequestFullScreen"](Element["ALLOW_KEYBOARD_INPUT"]);
      } : null);if (vrDevice) {
        canvasContainer.requestFullscreen({ vrDisplay: vrDevice });
      } else {
        canvasContainer.requestFullscreen();
      }
    }, requestFullScreen: function (lockPointer, resizeCanvas, vrDevice) {
      Module.printErr("Browser.requestFullScreen() is deprecated. Please call Browser.requestFullscreen instead.");Browser.requestFullScreen = function (lockPointer, resizeCanvas, vrDevice) {
        return Browser.requestFullscreen(lockPointer, resizeCanvas, vrDevice);
      };return Browser.requestFullscreen(lockPointer, resizeCanvas, vrDevice);
    }, nextRAF: 0, fakeRequestAnimationFrame: function (func) {
      var now = Date.now();if (Browser.nextRAF === 0) {
        Browser.nextRAF = now + 1e3 / 60;
      } else {
        while (now + 2 >= Browser.nextRAF) {
          Browser.nextRAF += 1e3 / 60;
        }
      }var delay = Math.max(Browser.nextRAF - now, 0);setTimeout(func, delay);
    }, requestAnimationFrame: function requestAnimationFrame(func) {
      if (typeof window === "undefined") {
        Browser.fakeRequestAnimationFrame(func);
      } else {
        if (!window.requestAnimationFrame) {
          window.requestAnimationFrame = window["requestAnimationFrame"] || window["mozRequestAnimationFrame"] || window["webkitRequestAnimationFrame"] || window["msRequestAnimationFrame"] || window["oRequestAnimationFrame"] || Browser.fakeRequestAnimationFrame;
        }window.requestAnimationFrame(func);
      }
    }, safeCallback: function (func) {
      return function () {
        if (!ABORT) return func.apply(null, arguments);
      };
    }, allowAsyncCallbacks: true, queuedAsyncCallbacks: [], pauseAsyncCallbacks: function () {
      Browser.allowAsyncCallbacks = false;
    }, resumeAsyncCallbacks: function () {
      Browser.allowAsyncCallbacks = true;if (Browser.queuedAsyncCallbacks.length > 0) {
        var callbacks = Browser.queuedAsyncCallbacks;Browser.queuedAsyncCallbacks = [];callbacks.forEach(function (func) {
          func();
        });
      }
    }, safeRequestAnimationFrame: function (func) {
      return Browser.requestAnimationFrame(function () {
        if (ABORT) return;if (Browser.allowAsyncCallbacks) {
          func();
        } else {
          Browser.queuedAsyncCallbacks.push(func);
        }
      });
    }, safeSetTimeout: function (func, timeout) {
      Module["noExitRuntime"] = true;return setTimeout(function () {
        if (ABORT) return;if (Browser.allowAsyncCallbacks) {
          func();
        } else {
          Browser.queuedAsyncCallbacks.push(func);
        }
      }, timeout);
    }, safeSetInterval: function (func, timeout) {
      Module["noExitRuntime"] = true;return setInterval(function () {
        if (ABORT) return;if (Browser.allowAsyncCallbacks) {
          func();
        }
      }, timeout);
    }, getMimetype: function (name) {
      return { "jpg": "image/jpeg", "jpeg": "image/jpeg", "png": "image/png", "bmp": "image/bmp", "ogg": "audio/ogg", "wav": "audio/wav", "mp3": "audio/mpeg" }[name.substr(name.lastIndexOf(".") + 1)];
    }, getUserMedia: function (func) {
      if (!window.getUserMedia) {
        window.getUserMedia = navigator["getUserMedia"] || navigator["mozGetUserMedia"];
      }window.getUserMedia(func);
    }, getMovementX: function (event) {
      return event["movementX"] || event["mozMovementX"] || event["webkitMovementX"] || 0;
    }, getMovementY: function (event) {
      return event["movementY"] || event["mozMovementY"] || event["webkitMovementY"] || 0;
    }, getMouseWheelDelta: function (event) {
      var delta = 0;switch (event.type) {case "DOMMouseScroll":
          delta = event.detail;break;case "mousewheel":
          delta = event.wheelDelta;break;case "wheel":
          delta = event["deltaY"];break;default:
          throw "unrecognized mouse wheel event: " + event.type;}return delta;
    }, mouseX: 0, mouseY: 0, mouseMovementX: 0, mouseMovementY: 0, touches: {}, lastTouches: {}, calculateMouseEvent: function (event) {
      if (Browser.pointerLock) {
        if (event.type != "mousemove" && "mozMovementX" in event) {
          Browser.mouseMovementX = Browser.mouseMovementY = 0;
        } else {
          Browser.mouseMovementX = Browser.getMovementX(event);Browser.mouseMovementY = Browser.getMovementY(event);
        }if (typeof SDL != "undefined") {
          Browser.mouseX = SDL.mouseX + Browser.mouseMovementX;Browser.mouseY = SDL.mouseY + Browser.mouseMovementY;
        } else {
          Browser.mouseX += Browser.mouseMovementX;Browser.mouseY += Browser.mouseMovementY;
        }
      } else {
        var rect = Module["canvas"].getBoundingClientRect();var cw = Module["canvas"].width;var ch = Module["canvas"].height;var scrollX = typeof window.scrollX !== "undefined" ? window.scrollX : window.pageXOffset;var scrollY = typeof window.scrollY !== "undefined" ? window.scrollY : window.pageYOffset;if (event.type === "touchstart" || event.type === "touchend" || event.type === "touchmove") {
          var touch = event.touch;if (touch === undefined) {
            return;
          }var adjustedX = touch.pageX - (scrollX + rect.left);var adjustedY = touch.pageY - (scrollY + rect.top);adjustedX = adjustedX * (cw / rect.width);adjustedY = adjustedY * (ch / rect.height);var coords = { x: adjustedX, y: adjustedY };if (event.type === "touchstart") {
            Browser.lastTouches[touch.identifier] = coords;Browser.touches[touch.identifier] = coords;
          } else if (event.type === "touchend" || event.type === "touchmove") {
            var last = Browser.touches[touch.identifier];if (!last) last = coords;Browser.lastTouches[touch.identifier] = last;Browser.touches[touch.identifier] = coords;
          }return;
        }var x = event.pageX - (scrollX + rect.left);var y = event.pageY - (scrollY + rect.top);x = x * (cw / rect.width);y = y * (ch / rect.height);Browser.mouseMovementX = x - Browser.mouseX;Browser.mouseMovementY = y - Browser.mouseY;Browser.mouseX = x;Browser.mouseY = y;
      }
    }, asyncLoad: function (url, onload, onerror, noRunDep) {
      var dep = !noRunDep ? getUniqueRunDependency("al " + url) : "";Module["readAsync"](url, function (arrayBuffer) {
        assert(arrayBuffer, 'Loading data file "' + url + '" failed (no arrayBuffer).');onload(new Uint8Array(arrayBuffer));if (dep) removeRunDependency(dep);
      }, function (event) {
        if (onerror) {
          onerror();
        } else {
          throw 'Loading data file "' + url + '" failed.';
        }
      });if (dep) addRunDependency(dep);
    }, resizeListeners: [], updateResizeListeners: function () {
      var canvas = Module["canvas"];Browser.resizeListeners.forEach(function (listener) {
        listener(canvas.width, canvas.height);
      });
    }, setCanvasSize: function (width, height, noUpdates) {
      var canvas = Module["canvas"];Browser.updateCanvasDimensions(canvas, width, height);if (!noUpdates) Browser.updateResizeListeners();
    }, windowedWidth: 0, windowedHeight: 0, setFullscreenCanvasSize: function () {
      if (typeof SDL != "undefined") {
        var flags = HEAPU32[SDL.screen + Runtime.QUANTUM_SIZE * 0 >> 2];flags = flags | 8388608;HEAP32[SDL.screen + Runtime.QUANTUM_SIZE * 0 >> 2] = flags;
      }Browser.updateResizeListeners();
    }, setWindowedCanvasSize: function () {
      if (typeof SDL != "undefined") {
        var flags = HEAPU32[SDL.screen + Runtime.QUANTUM_SIZE * 0 >> 2];flags = flags & ~8388608;HEAP32[SDL.screen + Runtime.QUANTUM_SIZE * 0 >> 2] = flags;
      }Browser.updateResizeListeners();
    }, updateCanvasDimensions: function (canvas, wNative, hNative) {
      if (wNative && hNative) {
        canvas.widthNative = wNative;canvas.heightNative = hNative;
      } else {
        wNative = canvas.widthNative;hNative = canvas.heightNative;
      }var w = wNative;var h = hNative;if (Module["forcedAspectRatio"] && Module["forcedAspectRatio"] > 0) {
        if (w / h < Module["forcedAspectRatio"]) {
          w = Math.round(h * Module["forcedAspectRatio"]);
        } else {
          h = Math.round(w / Module["forcedAspectRatio"]);
        }
      }if ((document["fullscreenElement"] || document["mozFullScreenElement"] || document["msFullscreenElement"] || document["webkitFullscreenElement"] || document["webkitCurrentFullScreenElement"]) === canvas.parentNode && typeof screen != "undefined") {
        var factor = Math.min(screen.width / w, screen.height / h);w = Math.round(w * factor);h = Math.round(h * factor);
      }if (Browser.resizeCanvas) {
        if (canvas.width != w) canvas.width = w;if (canvas.height != h) canvas.height = h;if (typeof canvas.style != "undefined") {
          canvas.style.removeProperty("width");canvas.style.removeProperty("height");
        }
      } else {
        if (canvas.width != wNative) canvas.width = wNative;if (canvas.height != hNative) canvas.height = hNative;if (typeof canvas.style != "undefined") {
          if (w != wNative || h != hNative) {
            canvas.style.setProperty("width", w + "px", "important");canvas.style.setProperty("height", h + "px", "important");
          } else {
            canvas.style.removeProperty("width");canvas.style.removeProperty("height");
          }
        }
      }
    }, wgetRequests: {}, nextWgetRequestHandle: 0, getNextWgetRequestHandle: function () {
      var handle = Browser.nextWgetRequestHandle;Browser.nextWgetRequestHandle++;return handle;
    } };var SYSCALLS = { varargs: 0, get: function (varargs) {
      SYSCALLS.varargs += 4;var ret = HEAP32[SYSCALLS.varargs - 4 >> 2];return ret;
    }, getStr: function () {
      var ret = Pointer_stringify(SYSCALLS.get());return ret;
    }, get64: function () {
      var low = SYSCALLS.get(),
          high = SYSCALLS.get();if (low >= 0) assert(high === 0);else assert(high === -1);return low;
    }, getZero: function () {
      assert(SYSCALLS.get() === 0);
    } };function ___syscall6(which, varargs) {
    SYSCALLS.varargs = varargs;try {
      var stream = SYSCALLS.getStreamFromFD();FS.close(stream);return 0;
    } catch (e) {
      if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);return -e.errno;
    }
  }function ___syscall54(which, varargs) {
    SYSCALLS.varargs = varargs;try {
      return 0;
    } catch (e) {
      if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);return -e.errno;
    }
  }Module["_bitshift64Lshr"] = _bitshift64Lshr;function _typeModule(self) {
    var structureList = [[0, 1, "X"], [1, 1, "const X"], [128, 1, "X *"], [256, 1, "X &"], [384, 1, "X &&"], [512, 1, "std::shared_ptr<X>"], [640, 1, "std::unique_ptr<X>"], [5120, 1, "std::vector<X>"], [6144, 2, "std::array<X, Y>"], [9216, -1, "std::function<X (Y)>"]];function applyStructure(outerName, outerFlags, innerName, innerFlags, param, flip) {
      if (outerFlags == 1) {
        var ref = innerFlags & 896;if (ref == 128 || ref == 256 || ref == 384) outerName = "X const";
      }var name;if (flip) {
        name = innerName.replace("X", outerName).replace("Y", param);
      } else {
        name = outerName.replace("X", innerName).replace("Y", param);
      }return name.replace(/([*&]) (?=[*&])/g, "$1");
    }function reportProblem(problem, id, kind, structureType, place) {
      throw new Error(problem + " type " + kind.replace("X", id + "?") + (structureType ? " with flag " + structureType : "") + " in " + place);
    }function getComplexType(id, constructType, getType, queryType, place, kind, prevStructure, depth) {
      if (kind === void 0) {
        kind = "X";
      }if (depth === void 0) {
        depth = 1;
      }var result = getType(id);if (result) return result;var query = queryType(id);var structureType = query.placeholderFlag;var structure = structureList[structureType];if (prevStructure && structure) {
        kind = applyStructure(prevStructure[2], prevStructure[0], kind, structure[0], "?", true);
      }var problem;if (structureType == 0) problem = "Unbound";if (structureType >= 10) problem = "Corrupt";if (depth > 20) problem = "Deeply nested";if (problem) reportProblem(problem, id, kind, structureType, place || "?");var subId = query.paramList[0];var subType = getComplexType(subId, constructType, getType, queryType, place, kind, structure, depth + 1);var srcSpec;var spec = { flags: structure[0], id: id, name: "", paramList: [subType] };var argList = [];var structureParam = "?";switch (query.placeholderFlag) {case 1:
          srcSpec = subType.spec;break;case 2:
          if ((subType.flags & 15360) == 1024 && subType.spec.ptrSize == 1) {
            spec.flags = 7168;break;
          };case 3:case 6:case 5:
          srcSpec = subType.spec;if ((subType.flags & 15360) != 2048) {}break;case 8:
          structureParam = "" + query.paramList[1];spec.paramList.push(query.paramList[1]);break;case 9:
          for (var _i = 0, _a = query.paramList[1]; _i < _a.length; _i++) {
            var paramId = _a[_i];var paramType = getComplexType(paramId, constructType, getType, queryType, place, kind, structure, depth + 1);argList.push(paramType.name);spec.paramList.push(paramType);
          }structureParam = argList.join(", ");break;default:
          break;}spec.name = applyStructure(structure[2], structure[0], subType.name, subType.flags, structureParam);if (srcSpec) {
        for (var _b = 0, _c = Object.keys(srcSpec); _b < _c.length; _b++) {
          var key = _c[_b];spec[key] = spec[key] || srcSpec[key];
        }spec.flags |= srcSpec.flags;
      }return makeType(constructType, spec);
    }function makeType(constructType, spec) {
      var flags = spec.flags;var refKind = flags & 896;var kind = flags & 15360;if (!spec.name && kind == 1024) {
        if (spec.ptrSize == 1) {
          spec.name = (flags & 16 ? "" : (flags & 8 ? "un" : "") + "signed ") + "char";
        } else {
          spec.name = (flags & 8 ? "u" : "") + (flags & 32 ? "float" : "int") + (spec.ptrSize * 8 + "_t");
        }
      }if (spec.ptrSize == 8 && !(flags & 32)) kind = 64;if (kind == 2048) {
        if (refKind == 512 || refKind == 640) {
          kind = 4096;
        } else if (refKind) kind = 3072;
      }return constructType(kind, spec);
    }var Type = function () {
      function Type(spec) {
        this.id = spec.id;this.name = spec.name;this.flags = spec.flags;this.spec = spec;
      }Type.prototype.toString = function () {
        return this.name;
      };return Type;
    }();var output = { Type: Type, getComplexType: getComplexType, makeType: makeType, structureList: structureList };self.output = output;return self.output || output;
  }function __nbind_register_type(id, namePtr) {
    var name = _nbind.readAsciiString(namePtr);var spec = { flags: 10240, id: id, name: name };_nbind.makeType(_nbind.constructType, spec);
  }function __nbind_register_callback_signature(typeListPtr, typeCount) {
    var typeList = _nbind.readTypeIdList(typeListPtr, typeCount);var num = _nbind.callbackSignatureList.length;_nbind.callbackSignatureList[num] = _nbind.makeJSCaller(typeList);return num;
  }function __extends(Class, Parent) {
    for (var key in Parent) if (Parent.hasOwnProperty(key)) Class[key] = Parent[key];function Base() {
      this.constructor = Class;
    }Base.prototype = Parent.prototype;Class.prototype = new Base();
  }function __nbind_register_class(idListPtr, policyListPtr, superListPtr, upcastListPtr, superCount, destructorPtr, namePtr) {
    var name = _nbind.readAsciiString(namePtr);var policyTbl = _nbind.readPolicyList(policyListPtr);var idList = HEAPU32.subarray(idListPtr / 4, idListPtr / 4 + 2);var spec = { flags: 2048 | (policyTbl["Value"] ? 2 : 0), id: idList[0], name: name };var bindClass = _nbind.makeType(_nbind.constructType, spec);bindClass.ptrType = _nbind.getComplexType(idList[1], _nbind.constructType, _nbind.getType, _nbind.queryType);bindClass.destroy = _nbind.makeMethodCaller(bindClass.ptrType, { boundID: spec.id, flags: 0, name: "destroy", num: 0, ptr: destructorPtr, title: bindClass.name + ".free", typeList: ["void", "uint32_t", "uint32_t"] });if (superCount) {
      bindClass.superIdList = Array.prototype.slice.call(HEAPU32.subarray(superListPtr / 4, superListPtr / 4 + superCount));bindClass.upcastList = Array.prototype.slice.call(HEAPU32.subarray(upcastListPtr / 4, upcastListPtr / 4 + superCount));
    }Module[bindClass.name] = bindClass.makeBound(policyTbl);_nbind.BindClass.list.push(bindClass);
  }function _removeAccessorPrefix(name) {
    var prefixMatcher = /^[Gg]et_?([A-Z]?([A-Z]?))/;return name.replace(prefixMatcher, function (match, initial, second) {
      return second ? initial : initial.toLowerCase();
    });
  }function __nbind_register_function(boundID, policyListPtr, typeListPtr, typeCount, ptr, direct, signatureType, namePtr, num, flags) {
    var bindClass = _nbind.getType(boundID);var policyTbl = _nbind.readPolicyList(policyListPtr);var typeList = _nbind.readTypeIdList(typeListPtr, typeCount);var specList;if (signatureType == 5) {
      specList = [{ direct: ptr, name: "__nbindConstructor", ptr: 0, title: bindClass.name + " constructor", typeList: ["uint32_t"].concat(typeList.slice(1)) }, { direct: direct, name: "__nbindValueConstructor", ptr: 0, title: bindClass.name + " value constructor", typeList: ["void", "uint32_t"].concat(typeList.slice(1)) }];
    } else {
      var name = _nbind.readAsciiString(namePtr);var title = (bindClass.name && bindClass.name + ".") + name;if (signatureType == 3 || signatureType == 4) {
        name = _removeAccessorPrefix(name);
      }specList = [{ boundID: boundID, direct: direct, name: name, ptr: ptr, title: title, typeList: typeList }];
    }for (var _i = 0, specList_1 = specList; _i < specList_1.length; _i++) {
      var spec = specList_1[_i];spec.signatureType = signatureType;spec.policyTbl = policyTbl;spec.num = num;spec.flags = flags;bindClass.addMethod(spec);
    }
  }function _nbind_value(name, proto) {
    if (!_nbind.typeNameTbl[name]) _nbind.throwError("Unknown value type " + name);Module["NBind"].bind_value(name, proto);_defineHidden(_nbind.typeNameTbl[name].proto.prototype.__nbindValueConstructor)(proto.prototype, "__nbindValueConstructor");
  }Module["_nbind_value"] = _nbind_value;function __nbind_get_value_object(num, ptr) {
    var obj = _nbind.popValue(num);if (!obj.fromJS) {
      throw new Error("Object " + obj + " has no fromJS function");
    }obj.fromJS(function () {
      obj.__nbindValueConstructor.apply(this, Array.prototype.concat.apply([ptr], arguments));
    });
  }function _emscripten_memcpy_big(dest, src, num) {
    HEAPU8.set(HEAPU8.subarray(src, src + num), dest);return dest;
  }Module["_memcpy"] = _memcpy;function _YGEdgeToString() {
    Module["printErr"]("missing function: YGEdgeToString");abort(-1);
  }var cttz_i8 = allocate([8, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 6, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 7, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 6, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0], "i8", ALLOC_STATIC);Module["_llvm_cttz_i32"] = _llvm_cttz_i32;Module["___udivmoddi4"] = ___udivmoddi4;Module["___udivdi3"] = ___udivdi3;function _YGOverflowToString() {
    Module["printErr"]("missing function: YGOverflowToString");abort(-1);
  }function ___setErrNo(value) {
    if (Module["___errno_location"]) HEAP32[Module["___errno_location"]() >> 2] = value;return value;
  }Module["_sbrk"] = _sbrk;function _llvm_stacksave() {
    var self = _llvm_stacksave;if (!self.LLVM_SAVEDSTACKS) {
      self.LLVM_SAVEDSTACKS = [];
    }self.LLVM_SAVEDSTACKS.push(Runtime.stackSave());return self.LLVM_SAVEDSTACKS.length - 1;
  }function _YGAlignToString() {
    Module["printErr"]("missing function: YGAlignToString");abort(-1);
  }Module["___uremdi3"] = ___uremdi3;Module["_llvm_bswap_i32"] = _llvm_bswap_i32;function _YGPositionTypeToString() {
    Module["printErr"]("missing function: YGPositionTypeToString");abort(-1);
  }function ___syscall140(which, varargs) {
    SYSCALLS.varargs = varargs;try {
      var stream = SYSCALLS.getStreamFromFD(),
          offset_high = SYSCALLS.get(),
          offset_low = SYSCALLS.get(),
          result = SYSCALLS.get(),
          whence = SYSCALLS.get();var offset = offset_low;FS.llseek(stream, offset, whence);HEAP32[result >> 2] = stream.position;if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;return 0;
    } catch (e) {
      if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);return -e.errno;
    }
  }function ___syscall146(which, varargs) {
    SYSCALLS.varargs = varargs;try {
      var stream = SYSCALLS.get(),
          iov = SYSCALLS.get(),
          iovcnt = SYSCALLS.get();var ret = 0;if (!___syscall146.buffer) {
        ___syscall146.buffers = [null, [], []];___syscall146.printChar = function (stream, curr) {
          var buffer = ___syscall146.buffers[stream];assert(buffer);if (curr === 0 || curr === 10) {
            (stream === 1 ? Module["print"] : Module["printErr"])(UTF8ArrayToString(buffer, 0));buffer.length = 0;
          } else {
            buffer.push(curr);
          }
        };
      }for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAP32[iov + i * 8 >> 2];var len = HEAP32[iov + (i * 8 + 4) >> 2];for (var j = 0; j < len; j++) {
          ___syscall146.printChar(stream, HEAPU8[ptr + j]);
        }ret += len;
      }return ret;
    } catch (e) {
      if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);return -e.errno;
    }
  }function __nbind_finish() {
    for (var _i = 0, _a = _nbind.BindClass.list; _i < _a.length; _i++) {
      var bindClass = _a[_i];bindClass.finish();
    }
  }function _YGDisplayToString() {
    Module["printErr"]("missing function: YGDisplayToString");abort(-1);
  }var ___dso_handle = STATICTOP;STATICTOP += 16;(function (_nbind) {
    var typeIdTbl = {};_nbind.typeNameTbl = {};var Pool = function () {
      function Pool() {}Pool.lalloc = function (size) {
        size = size + 7 & ~7;var used = HEAPU32[Pool.usedPtr];if (size > Pool.pageSize / 2 || size > Pool.pageSize - used) {
          var NBind = _nbind.typeNameTbl["NBind"].proto;return NBind.lalloc(size);
        } else {
          HEAPU32[Pool.usedPtr] = used + size;return Pool.rootPtr + used;
        }
      };Pool.lreset = function (used, page) {
        var topPage = HEAPU32[Pool.pagePtr];if (topPage) {
          var NBind = _nbind.typeNameTbl["NBind"].proto;NBind.lreset(used, page);
        } else {
          HEAPU32[Pool.usedPtr] = used;
        }
      };return Pool;
    }();_nbind.Pool = Pool;function constructType(kind, spec) {
      var construct = kind == 10240 ? _nbind.makeTypeNameTbl[spec.name] || _nbind.BindType : _nbind.makeTypeKindTbl[kind];var bindType = new construct(spec);typeIdTbl[spec.id] = bindType;_nbind.typeNameTbl[spec.name] = bindType;return bindType;
    }_nbind.constructType = constructType;function getType(id) {
      return typeIdTbl[id];
    }_nbind.getType = getType;function queryType(id) {
      var placeholderFlag = HEAPU8[id];var paramCount = _nbind.structureList[placeholderFlag][1];id /= 4;if (paramCount < 0) {
        ++id;paramCount = HEAPU32[id] + 1;
      }var paramList = Array.prototype.slice.call(HEAPU32.subarray(id + 1, id + 1 + paramCount));if (placeholderFlag == 9) {
        paramList = [paramList[0], paramList.slice(1)];
      }return { paramList: paramList, placeholderFlag: placeholderFlag };
    }_nbind.queryType = queryType;function getTypes(idList, place) {
      return idList.map(function (id) {
        return typeof id == "number" ? _nbind.getComplexType(id, constructType, getType, queryType, place) : _nbind.typeNameTbl[id];
      });
    }_nbind.getTypes = getTypes;function readTypeIdList(typeListPtr, typeCount) {
      return Array.prototype.slice.call(HEAPU32, typeListPtr / 4, typeListPtr / 4 + typeCount);
    }_nbind.readTypeIdList = readTypeIdList;function readAsciiString(ptr) {
      var endPtr = ptr;while (HEAPU8[endPtr++]);return String.fromCharCode.apply("", HEAPU8.subarray(ptr, endPtr - 1));
    }_nbind.readAsciiString = readAsciiString;function readPolicyList(policyListPtr) {
      var policyTbl = {};if (policyListPtr) {
        while (1) {
          var namePtr = HEAPU32[policyListPtr / 4];if (!namePtr) break;policyTbl[readAsciiString(namePtr)] = true;policyListPtr += 4;
        }
      }return policyTbl;
    }_nbind.readPolicyList = readPolicyList;function getDynCall(typeList, name) {
      var mangleMap = { float32_t: "d", float64_t: "d", int64_t: "d", uint64_t: "d", "void": "v" };var signature = typeList.map(function (type) {
        return mangleMap[type.name] || "i";
      }).join("");var dynCall = Module["dynCall_" + signature];if (!dynCall) {
        throw new Error("dynCall_" + signature + " not found for " + name + "(" + typeList.map(function (type) {
          return type.name;
        }).join(", ") + ")");
      }return dynCall;
    }_nbind.getDynCall = getDynCall;function addMethod(obj, name, func, arity) {
      var overload = obj[name];if (obj.hasOwnProperty(name) && overload) {
        if (overload.arity || overload.arity === 0) {
          overload = _nbind.makeOverloader(overload, overload.arity);obj[name] = overload;
        }overload.addMethod(func, arity);
      } else {
        func.arity = arity;obj[name] = func;
      }
    }_nbind.addMethod = addMethod;function throwError(message) {
      throw new Error(message);
    }_nbind.throwError = throwError;_nbind.bigEndian = false;_a = _typeModule(_typeModule), _nbind.Type = _a.Type, _nbind.makeType = _a.makeType, _nbind.getComplexType = _a.getComplexType, _nbind.structureList = _a.structureList;var BindType = function (_super) {
      __extends(BindType, _super);function BindType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;_this.heap = HEAPU32;_this.ptrSize = 4;return _this;
      }BindType.prototype.needsWireRead = function (policyTbl) {
        return !!this.wireRead || !!this.makeWireRead;
      };BindType.prototype.needsWireWrite = function (policyTbl) {
        return !!this.wireWrite || !!this.makeWireWrite;
      };return BindType;
    }(_nbind.Type);_nbind.BindType = BindType;var PrimitiveType = function (_super) {
      __extends(PrimitiveType, _super);function PrimitiveType(spec) {
        var _this = _super.call(this, spec) || this;var heapTbl = spec.flags & 32 ? { 32: HEAPF32, 64: HEAPF64 } : spec.flags & 8 ? { 8: HEAPU8, 16: HEAPU16, 32: HEAPU32 } : { 8: HEAP8, 16: HEAP16, 32: HEAP32 };_this.heap = heapTbl[spec.ptrSize * 8];_this.ptrSize = spec.ptrSize;return _this;
      }PrimitiveType.prototype.needsWireWrite = function (policyTbl) {
        return !!policyTbl && !!policyTbl["Strict"];
      };PrimitiveType.prototype.makeWireWrite = function (expr, policyTbl) {
        return policyTbl && policyTbl["Strict"] && function (arg) {
          if (typeof arg == "number") return arg;throw new Error("Type mismatch");
        };
      };return PrimitiveType;
    }(BindType);_nbind.PrimitiveType = PrimitiveType;function pushCString(str, policyTbl) {
      if (str === null || str === undefined) {
        if (policyTbl && policyTbl["Nullable"]) {
          return 0;
        } else throw new Error("Type mismatch");
      }if (policyTbl && policyTbl["Strict"]) {
        if (typeof str != "string") throw new Error("Type mismatch");
      } else str = str.toString();var length = Module.lengthBytesUTF8(str) + 1;var result = _nbind.Pool.lalloc(length);Module.stringToUTF8Array(str, HEAPU8, result, length);return result;
    }_nbind.pushCString = pushCString;function popCString(ptr) {
      if (ptr === 0) return null;return Module.Pointer_stringify(ptr);
    }_nbind.popCString = popCString;var CStringType = function (_super) {
      __extends(CStringType, _super);function CStringType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;_this.wireRead = popCString;_this.wireWrite = pushCString;_this.readResources = [_nbind.resources.pool];_this.writeResources = [_nbind.resources.pool];return _this;
      }CStringType.prototype.makeWireWrite = function (expr, policyTbl) {
        return function (arg) {
          return pushCString(arg, policyTbl);
        };
      };return CStringType;
    }(BindType);_nbind.CStringType = CStringType;var BooleanType = function (_super) {
      __extends(BooleanType, _super);function BooleanType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;_this.wireRead = function (arg) {
          return !!arg;
        };return _this;
      }BooleanType.prototype.needsWireWrite = function (policyTbl) {
        return !!policyTbl && !!policyTbl["Strict"];
      };BooleanType.prototype.makeWireRead = function (expr) {
        return "!!(" + expr + ")";
      };BooleanType.prototype.makeWireWrite = function (expr, policyTbl) {
        return policyTbl && policyTbl["Strict"] && function (arg) {
          if (typeof arg == "boolean") return arg;throw new Error("Type mismatch");
        } || expr;
      };return BooleanType;
    }(BindType);_nbind.BooleanType = BooleanType;var Wrapper = function () {
      function Wrapper() {}Wrapper.prototype.persist = function () {
        this.__nbindState |= 1;
      };return Wrapper;
    }();_nbind.Wrapper = Wrapper;function makeBound(policyTbl, bindClass) {
      var Bound = function (_super) {
        __extends(Bound, _super);function Bound(marker, flags, ptr, shared) {
          var _this = _super.call(this) || this;if (!(_this instanceof Bound)) {
            return new (Function.prototype.bind.apply(Bound, Array.prototype.concat.apply([null], arguments)))();
          }var nbindFlags = flags;var nbindPtr = ptr;var nbindShared = shared;if (marker !== _nbind.ptrMarker) {
            var wirePtr = _this.__nbindConstructor.apply(_this, arguments);nbindFlags = 4096 | 512;nbindShared = HEAPU32[wirePtr / 4];nbindPtr = HEAPU32[wirePtr / 4 + 1];
          }var spec = { configurable: true, enumerable: false, value: null, writable: false };var propTbl = { "__nbindFlags": nbindFlags, "__nbindPtr": nbindPtr };if (nbindShared) {
            propTbl["__nbindShared"] = nbindShared;_nbind.mark(_this);
          }for (var _i = 0, _a = Object.keys(propTbl); _i < _a.length; _i++) {
            var key = _a[_i];spec.value = propTbl[key];Object.defineProperty(_this, key, spec);
          }_defineHidden(0)(_this, "__nbindState");return _this;
        }Bound.prototype.free = function () {
          bindClass.destroy.call(this, this.__nbindShared, this.__nbindFlags);this.__nbindState |= 2;disableMember(this, "__nbindShared");disableMember(this, "__nbindPtr");
        };return Bound;
      }(Wrapper);__decorate([_defineHidden()], Bound.prototype, "__nbindConstructor", void 0);__decorate([_defineHidden()], Bound.prototype, "__nbindValueConstructor", void 0);__decorate([_defineHidden(policyTbl)], Bound.prototype, "__nbindPolicies", void 0);return Bound;
    }_nbind.makeBound = makeBound;function disableMember(obj, name) {
      function die() {
        throw new Error("Accessing deleted object");
      }Object.defineProperty(obj, name, { configurable: false, enumerable: false, get: die, set: die });
    }_nbind.ptrMarker = {};var BindClass = function (_super) {
      __extends(BindClass, _super);function BindClass(spec) {
        var _this = _super.call(this, spec) || this;_this.wireRead = function (arg) {
          return _nbind.popValue(arg, _this.ptrType);
        };_this.wireWrite = function (arg) {
          return pushPointer(arg, _this.ptrType, true);
        };_this.pendingSuperCount = 0;_this.ready = false;_this.methodTbl = {};if (spec.paramList) {
          _this.classType = spec.paramList[0].classType;_this.proto = _this.classType.proto;
        } else _this.classType = _this;return _this;
      }BindClass.prototype.makeBound = function (policyTbl) {
        var Bound = _nbind.makeBound(policyTbl, this);this.proto = Bound;this.ptrType.proto = Bound;return Bound;
      };BindClass.prototype.addMethod = function (spec) {
        var overloadList = this.methodTbl[spec.name] || [];overloadList.push(spec);this.methodTbl[spec.name] = overloadList;
      };BindClass.prototype.registerMethods = function (src, staticOnly) {
        var setter;for (var _i = 0, _a = Object.keys(src.methodTbl); _i < _a.length; _i++) {
          var name = _a[_i];var overloadList = src.methodTbl[name];for (var _b = 0, overloadList_1 = overloadList; _b < overloadList_1.length; _b++) {
            var spec = overloadList_1[_b];var target = void 0;var caller = void 0;target = this.proto.prototype;if (staticOnly && spec.signatureType != 1) continue;switch (spec.signatureType) {case 1:
                target = this.proto;case 5:
                caller = _nbind.makeCaller(spec);_nbind.addMethod(target, spec.name, caller, spec.typeList.length - 1);break;case 4:
                setter = _nbind.makeMethodCaller(src.ptrType, spec);break;case 3:
                Object.defineProperty(target, spec.name, { configurable: true, enumerable: false, get: _nbind.makeMethodCaller(src.ptrType, spec), set: setter });break;case 2:
                caller = _nbind.makeMethodCaller(src.ptrType, spec);_nbind.addMethod(target, spec.name, caller, spec.typeList.length - 1);break;default:
                break;}
          }
        }
      };BindClass.prototype.registerSuperMethods = function (src, firstSuper, visitTbl) {
        if (visitTbl[src.name]) return;visitTbl[src.name] = true;var superNum = 0;var nextFirst;for (var _i = 0, _a = src.superIdList || []; _i < _a.length; _i++) {
          var superId = _a[_i];var superClass = _nbind.getType(superId);if (superNum++ < firstSuper || firstSuper < 0) {
            nextFirst = -1;
          } else {
            nextFirst = 0;
          }this.registerSuperMethods(superClass, nextFirst, visitTbl);
        }this.registerMethods(src, firstSuper < 0);
      };BindClass.prototype.finish = function () {
        if (this.ready) return this;this.ready = true;this.superList = (this.superIdList || []).map(function (superId) {
          return _nbind.getType(superId).finish();
        });var Bound = this.proto;if (this.superList.length) {
          var Proto = function () {
            this.constructor = Bound;
          };Proto.prototype = this.superList[0].proto.prototype;Bound.prototype = new Proto();
        }if (Bound != Module) Bound.prototype.__nbindType = this;this.registerSuperMethods(this, 1, {});return this;
      };BindClass.prototype.upcastStep = function (dst, ptr) {
        if (dst == this) return ptr;for (var i = 0; i < this.superList.length; ++i) {
          var superPtr = this.superList[i].upcastStep(dst, _nbind.callUpcast(this.upcastList[i], ptr));if (superPtr) return superPtr;
        }return 0;
      };return BindClass;
    }(_nbind.BindType);BindClass.list = [];_nbind.BindClass = BindClass;function popPointer(ptr, type) {
      return ptr ? new type.proto(_nbind.ptrMarker, type.flags, ptr) : null;
    }_nbind.popPointer = popPointer;function pushPointer(obj, type, tryValue) {
      if (!(obj instanceof _nbind.Wrapper)) {
        if (tryValue) {
          return _nbind.pushValue(obj);
        } else throw new Error("Type mismatch");
      }var ptr = obj.__nbindPtr;var objType = obj.__nbindType.classType;var classType = type.classType;if (obj instanceof type.proto) {
        while (objType != classType) {
          ptr = _nbind.callUpcast(objType.upcastList[0], ptr);objType = objType.superList[0];
        }
      } else {
        ptr = objType.upcastStep(classType, ptr);if (!ptr) throw new Error("Type mismatch");
      }return ptr;
    }_nbind.pushPointer = pushPointer;function pushMutablePointer(obj, type) {
      var ptr = pushPointer(obj, type);if (obj.__nbindFlags & 1) {
        throw new Error("Passing a const value as a non-const argument");
      }return ptr;
    }var BindClassPtr = function (_super) {
      __extends(BindClassPtr, _super);function BindClassPtr(spec) {
        var _this = _super.call(this, spec) || this;_this.classType = spec.paramList[0].classType;_this.proto = _this.classType.proto;var isConst = spec.flags & 1;var isValue = (_this.flags & 896) == 256 && spec.flags & 2;var push = isConst ? pushPointer : pushMutablePointer;var pop = isValue ? _nbind.popValue : popPointer;_this.makeWireWrite = function (expr, policyTbl) {
          return policyTbl["Nullable"] ? function (arg) {
            return arg ? push(arg, _this) : 0;
          } : function (arg) {
            return push(arg, _this);
          };
        };_this.wireRead = function (arg) {
          return pop(arg, _this);
        };_this.wireWrite = function (arg) {
          return push(arg, _this);
        };return _this;
      }return BindClassPtr;
    }(_nbind.BindType);_nbind.BindClassPtr = BindClassPtr;function popShared(ptr, type) {
      var shared = HEAPU32[ptr / 4];var unsafe = HEAPU32[ptr / 4 + 1];return unsafe ? new type.proto(_nbind.ptrMarker, type.flags, unsafe, shared) : null;
    }_nbind.popShared = popShared;function pushShared(obj, type) {
      if (!(obj instanceof type.proto)) throw new Error("Type mismatch");return obj.__nbindShared;
    }function pushMutableShared(obj, type) {
      if (!(obj instanceof type.proto)) throw new Error("Type mismatch");if (obj.__nbindFlags & 1) {
        throw new Error("Passing a const value as a non-const argument");
      }return obj.__nbindShared;
    }var SharedClassPtr = function (_super) {
      __extends(SharedClassPtr, _super);function SharedClassPtr(spec) {
        var _this = _super.call(this, spec) || this;_this.readResources = [_nbind.resources.pool];_this.classType = spec.paramList[0].classType;_this.proto = _this.classType.proto;var isConst = spec.flags & 1;var push = isConst ? pushShared : pushMutableShared;_this.wireRead = function (arg) {
          return popShared(arg, _this);
        };_this.wireWrite = function (arg) {
          return push(arg, _this);
        };return _this;
      }return SharedClassPtr;
    }(_nbind.BindType);_nbind.SharedClassPtr = SharedClassPtr;_nbind.externalList = [0];var firstFreeExternal = 0;var External = function () {
      function External(data) {
        this.refCount = 1;this.data = data;
      }External.prototype.register = function () {
        var num = firstFreeExternal;if (num) {
          firstFreeExternal = _nbind.externalList[num];
        } else num = _nbind.externalList.length;_nbind.externalList[num] = this;return num;
      };External.prototype.reference = function () {
        ++this.refCount;
      };External.prototype.dereference = function (num) {
        if (--this.refCount == 0) {
          if (this.free) this.free();_nbind.externalList[num] = firstFreeExternal;firstFreeExternal = num;
        }
      };return External;
    }();_nbind.External = External;function popExternal(num) {
      var obj = _nbind.externalList[num];obj.dereference(num);return obj.data;
    }function pushExternal(obj) {
      var external = new External(obj);external.reference();return external.register();
    }var ExternalType = function (_super) {
      __extends(ExternalType, _super);function ExternalType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;_this.wireRead = popExternal;_this.wireWrite = pushExternal;return _this;
      }return ExternalType;
    }(_nbind.BindType);_nbind.ExternalType = ExternalType;_nbind.callbackSignatureList = [];var CallbackType = function (_super) {
      __extends(CallbackType, _super);function CallbackType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;_this.wireWrite = function (func) {
          if (typeof func != "function") _nbind.throwError("Type mismatch");return new _nbind.External(func).register();
        };return _this;
      }return CallbackType;
    }(_nbind.BindType);_nbind.CallbackType = CallbackType;_nbind.valueList = [0];var firstFreeValue = 0;function pushValue(value) {
      var num = firstFreeValue;if (num) {
        firstFreeValue = _nbind.valueList[num];
      } else num = _nbind.valueList.length;_nbind.valueList[num] = value;return num * 2 + 1;
    }_nbind.pushValue = pushValue;function popValue(num, type) {
      if (!num) _nbind.throwError("Value type JavaScript class is missing or not registered");if (num & 1) {
        num >>= 1;var obj = _nbind.valueList[num];_nbind.valueList[num] = firstFreeValue;firstFreeValue = num;return obj;
      } else if (type) {
        return _nbind.popShared(num, type);
      } else throw new Error("Invalid value slot " + num);
    }_nbind.popValue = popValue;var valueBase = 0x10000000000000000;function push64(num) {
      if (typeof num == "number") return num;return pushValue(num) * 4096 + valueBase;
    }function pop64(num) {
      if (num < valueBase) return num;return popValue((num - valueBase) / 4096);
    }var CreateValueType = function (_super) {
      __extends(CreateValueType, _super);function CreateValueType() {
        return _super !== null && _super.apply(this, arguments) || this;
      }CreateValueType.prototype.makeWireWrite = function (expr) {
        return "(_nbind.pushValue(new " + expr + "))";
      };return CreateValueType;
    }(_nbind.BindType);_nbind.CreateValueType = CreateValueType;var Int64Type = function (_super) {
      __extends(Int64Type, _super);function Int64Type() {
        var _this = _super !== null && _super.apply(this, arguments) || this;_this.wireWrite = push64;_this.wireRead = pop64;return _this;
      }return Int64Type;
    }(_nbind.BindType);_nbind.Int64Type = Int64Type;function pushArray(arr, type) {
      if (!arr) return 0;var length = arr.length;if ((type.size || type.size === 0) && length < type.size) {
        throw new Error("Type mismatch");
      }var ptrSize = type.memberType.ptrSize;var result = _nbind.Pool.lalloc(4 + length * ptrSize);HEAPU32[result / 4] = length;var heap = type.memberType.heap;var ptr = (result + 4) / ptrSize;var wireWrite = type.memberType.wireWrite;var num = 0;if (wireWrite) {
        while (num < length) {
          heap[ptr++] = wireWrite(arr[num++]);
        }
      } else {
        while (num < length) {
          heap[ptr++] = arr[num++];
        }
      }return result;
    }_nbind.pushArray = pushArray;function popArray(ptr, type) {
      if (ptr === 0) return null;var length = HEAPU32[ptr / 4];var arr = new Array(length);var heap = type.memberType.heap;ptr = (ptr + 4) / type.memberType.ptrSize;var wireRead = type.memberType.wireRead;var num = 0;if (wireRead) {
        while (num < length) {
          arr[num++] = wireRead(heap[ptr++]);
        }
      } else {
        while (num < length) {
          arr[num++] = heap[ptr++];
        }
      }return arr;
    }_nbind.popArray = popArray;var ArrayType = function (_super) {
      __extends(ArrayType, _super);function ArrayType(spec) {
        var _this = _super.call(this, spec) || this;_this.wireRead = function (arg) {
          return popArray(arg, _this);
        };_this.wireWrite = function (arg) {
          return pushArray(arg, _this);
        };_this.readResources = [_nbind.resources.pool];_this.writeResources = [_nbind.resources.pool];_this.memberType = spec.paramList[0];if (spec.paramList[1]) _this.size = spec.paramList[1];return _this;
      }return ArrayType;
    }(_nbind.BindType);_nbind.ArrayType = ArrayType;function pushString(str, policyTbl) {
      if (str === null || str === undefined) {
        if (policyTbl && policyTbl["Nullable"]) {
          str = "";
        } else throw new Error("Type mismatch");
      }if (policyTbl && policyTbl["Strict"]) {
        if (typeof str != "string") throw new Error("Type mismatch");
      } else str = str.toString();var length = Module.lengthBytesUTF8(str);var result = _nbind.Pool.lalloc(4 + length + 1);HEAPU32[result / 4] = length;Module.stringToUTF8Array(str, HEAPU8, result + 4, length + 1);return result;
    }_nbind.pushString = pushString;function popString(ptr) {
      if (ptr === 0) return null;var length = HEAPU32[ptr / 4];return Module.Pointer_stringify(ptr + 4, length);
    }_nbind.popString = popString;var StringType = function (_super) {
      __extends(StringType, _super);function StringType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;_this.wireRead = popString;_this.wireWrite = pushString;_this.readResources = [_nbind.resources.pool];_this.writeResources = [_nbind.resources.pool];return _this;
      }StringType.prototype.makeWireWrite = function (expr, policyTbl) {
        return function (arg) {
          return pushString(arg, policyTbl);
        };
      };return StringType;
    }(_nbind.BindType);_nbind.StringType = StringType;function makeArgList(argCount) {
      return Array.apply(null, Array(argCount)).map(function (dummy, num) {
        return "a" + (num + 1);
      });
    }function anyNeedsWireWrite(typeList, policyTbl) {
      return typeList.reduce(function (result, type) {
        return result || type.needsWireWrite(policyTbl);
      }, false);
    }function anyNeedsWireRead(typeList, policyTbl) {
      return typeList.reduce(function (result, type) {
        return result || !!type.needsWireRead(policyTbl);
      }, false);
    }function makeWireRead(convertParamList, policyTbl, type, expr) {
      var paramNum = convertParamList.length;if (type.makeWireRead) {
        return type.makeWireRead(expr, convertParamList, paramNum);
      } else if (type.wireRead) {
        convertParamList[paramNum] = type.wireRead;return "(convertParamList[" + paramNum + "](" + expr + "))";
      } else return expr;
    }function makeWireWrite(convertParamList, policyTbl, type, expr) {
      var wireWrite;var paramNum = convertParamList.length;if (type.makeWireWrite) {
        wireWrite = type.makeWireWrite(expr, policyTbl, convertParamList, paramNum);
      } else wireWrite = type.wireWrite;if (wireWrite) {
        if (typeof wireWrite == "string") {
          return wireWrite;
        } else {
          convertParamList[paramNum] = wireWrite;return "(convertParamList[" + paramNum + "](" + expr + "))";
        }
      } else return expr;
    }function buildCallerFunction(dynCall, ptrType, ptr, num, policyTbl, needsWireWrite, prefix, returnType, argTypeList, mask, err) {
      var argList = makeArgList(argTypeList.length);var convertParamList = [];var callExpression = makeWireRead(convertParamList, policyTbl, returnType, "dynCall(" + [prefix].concat(argList.map(function (name, index) {
        return makeWireWrite(convertParamList, policyTbl, argTypeList[index], name);
      })).join(",") + ")");var resourceSet = _nbind.listResources([returnType], argTypeList);var sourceCode = "function(" + argList.join(",") + "){" + (mask ? "this.__nbindFlags&mask&&err();" : "") + resourceSet.makeOpen() + "var r=" + callExpression + ";" + resourceSet.makeClose() + "return r;" + "}";return eval("(" + sourceCode + ")");
    }function buildJSCallerFunction(returnType, argTypeList) {
      var argList = makeArgList(argTypeList.length);var convertParamList = [];var callExpression = makeWireWrite(convertParamList, null, returnType, "_nbind.externalList[num].data(" + argList.map(function (name, index) {
        return makeWireRead(convertParamList, null, argTypeList[index], name);
      }).join(",") + ")");var resourceSet = _nbind.listResources(argTypeList, [returnType]);resourceSet.remove(_nbind.resources.pool);var sourceCode = "function(" + ["dummy", "num"].concat(argList).join(",") + "){" + resourceSet.makeOpen() + "var r=" + callExpression + ";" + resourceSet.makeClose() + "return r;" + "}";return eval("(" + sourceCode + ")");
    }_nbind.buildJSCallerFunction = buildJSCallerFunction;function makeJSCaller(idList) {
      var argCount = idList.length - 1;var typeList = _nbind.getTypes(idList, "callback");var returnType = typeList[0];var argTypeList = typeList.slice(1);var needsWireRead = anyNeedsWireRead(argTypeList, null);var needsWireWrite = returnType.needsWireWrite(null);if (!needsWireWrite && !needsWireRead) {
        switch (argCount) {case 0:
            return function (dummy, num) {
              return _nbind.externalList[num].data();
            };case 1:
            return function (dummy, num, a1) {
              return _nbind.externalList[num].data(a1);
            };case 2:
            return function (dummy, num, a1, a2) {
              return _nbind.externalList[num].data(a1, a2);
            };case 3:
            return function (dummy, num, a1, a2, a3) {
              return _nbind.externalList[num].data(a1, a2, a3);
            };default:
            break;}
      }return buildJSCallerFunction(returnType, argTypeList);
    }_nbind.makeJSCaller = makeJSCaller;function makeMethodCaller(ptrType, spec) {
      var argCount = spec.typeList.length - 1;var typeIdList = spec.typeList.slice(0);typeIdList.splice(1, 0, "uint32_t", spec.boundID);var typeList = _nbind.getTypes(typeIdList, spec.title);var returnType = typeList[0];var argTypeList = typeList.slice(3);var needsWireRead = returnType.needsWireRead(spec.policyTbl);var needsWireWrite = anyNeedsWireWrite(argTypeList, spec.policyTbl);var ptr = spec.ptr;var num = spec.num;var dynCall = _nbind.getDynCall(typeList, spec.title);var mask = ~spec.flags & 1;function err() {
        throw new Error("Calling a non-const method on a const object");
      }if (!needsWireRead && !needsWireWrite) {
        switch (argCount) {case 0:
            return function () {
              return this.__nbindFlags & mask ? err() : dynCall(ptr, num, _nbind.pushPointer(this, ptrType));
            };case 1:
            return function (a1) {
              return this.__nbindFlags & mask ? err() : dynCall(ptr, num, _nbind.pushPointer(this, ptrType), a1);
            };case 2:
            return function (a1, a2) {
              return this.__nbindFlags & mask ? err() : dynCall(ptr, num, _nbind.pushPointer(this, ptrType), a1, a2);
            };case 3:
            return function (a1, a2, a3) {
              return this.__nbindFlags & mask ? err() : dynCall(ptr, num, _nbind.pushPointer(this, ptrType), a1, a2, a3);
            };default:
            break;}
      }return buildCallerFunction(dynCall, ptrType, ptr, num, spec.policyTbl, needsWireWrite, "ptr,num,pushPointer(this,ptrType)", returnType, argTypeList, mask, err);
    }_nbind.makeMethodCaller = makeMethodCaller;function makeCaller(spec) {
      var argCount = spec.typeList.length - 1;var typeList = _nbind.getTypes(spec.typeList, spec.title);var returnType = typeList[0];var argTypeList = typeList.slice(1);var needsWireRead = returnType.needsWireRead(spec.policyTbl);var needsWireWrite = anyNeedsWireWrite(argTypeList, spec.policyTbl);var direct = spec.direct;var dynCall;var ptr = spec.ptr;if (spec.direct && !needsWireRead && !needsWireWrite) {
        dynCall = _nbind.getDynCall(typeList, spec.title);switch (argCount) {case 0:
            return function () {
              return dynCall(direct);
            };case 1:
            return function (a1) {
              return dynCall(direct, a1);
            };case 2:
            return function (a1, a2) {
              return dynCall(direct, a1, a2);
            };case 3:
            return function (a1, a2, a3) {
              return dynCall(direct, a1, a2, a3);
            };default:
            break;}ptr = 0;
      }var prefix;if (ptr) {
        var typeIdList = spec.typeList.slice(0);typeIdList.splice(1, 0, "uint32_t");typeList = _nbind.getTypes(typeIdList, spec.title);prefix = "ptr,num";
      } else {
        ptr = direct;prefix = "ptr";
      }dynCall = _nbind.getDynCall(typeList, spec.title);return buildCallerFunction(dynCall, null, ptr, spec.num, spec.policyTbl, needsWireWrite, prefix, returnType, argTypeList);
    }_nbind.makeCaller = makeCaller;function makeOverloader(func, arity) {
      var callerList = [];function call() {
        return callerList[arguments.length].apply(this, arguments);
      }call.addMethod = function (_func, _arity) {
        callerList[_arity] = _func;
      };call.addMethod(func, arity);return call;
    }_nbind.makeOverloader = makeOverloader;var Resource = function () {
      function Resource(open, close) {
        var _this = this;this.makeOpen = function () {
          return Object.keys(_this.openTbl).join("");
        };this.makeClose = function () {
          return Object.keys(_this.closeTbl).join("");
        };this.openTbl = {};this.closeTbl = {};if (open) this.openTbl[open] = true;if (close) this.closeTbl[close] = true;
      }Resource.prototype.add = function (other) {
        for (var _i = 0, _a = Object.keys(other.openTbl); _i < _a.length; _i++) {
          var key = _a[_i];this.openTbl[key] = true;
        }for (var _b = 0, _c = Object.keys(other.closeTbl); _b < _c.length; _b++) {
          var key = _c[_b];this.closeTbl[key] = true;
        }
      };Resource.prototype.remove = function (other) {
        for (var _i = 0, _a = Object.keys(other.openTbl); _i < _a.length; _i++) {
          var key = _a[_i];delete this.openTbl[key];
        }for (var _b = 0, _c = Object.keys(other.closeTbl); _b < _c.length; _b++) {
          var key = _c[_b];delete this.closeTbl[key];
        }
      };return Resource;
    }();_nbind.Resource = Resource;function listResources(readList, writeList) {
      var result = new Resource();for (var _i = 0, readList_1 = readList; _i < readList_1.length; _i++) {
        var bindType = readList_1[_i];for (var _a = 0, _b = bindType.readResources || []; _a < _b.length; _a++) {
          var resource = _b[_a];result.add(resource);
        }
      }for (var _c = 0, writeList_1 = writeList; _c < writeList_1.length; _c++) {
        var bindType = writeList_1[_c];for (var _d = 0, _e = bindType.writeResources || []; _d < _e.length; _d++) {
          var resource = _e[_d];result.add(resource);
        }
      }return result;
    }_nbind.listResources = listResources;_nbind.resources = { pool: new Resource("var used=HEAPU32[_nbind.Pool.usedPtr],page=HEAPU32[_nbind.Pool.pagePtr];", "_nbind.Pool.lreset(used,page);") };var ExternalBuffer = function (_super) {
      __extends(ExternalBuffer, _super);function ExternalBuffer(buf, ptr) {
        var _this = _super.call(this, buf) || this;_this.ptr = ptr;return _this;
      }ExternalBuffer.prototype.free = function () {
        _free(this.ptr);
      };return ExternalBuffer;
    }(_nbind.External);function getBuffer(buf) {
      if (buf instanceof ArrayBuffer) {
        return new Uint8Array(buf);
      } else if (buf instanceof DataView) {
        return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
      } else return buf;
    }function pushBuffer(buf, policyTbl) {
      if (buf === null || buf === undefined) {
        if (policyTbl && policyTbl["Nullable"]) buf = [];
      }if (typeof buf != "object") throw new Error("Type mismatch");var b = buf;var length = b.byteLength || b.length;if (!length && length !== 0 && b.byteLength !== 0) throw new Error("Type mismatch");var result = _nbind.Pool.lalloc(8);var data = _malloc(length);var ptr = result / 4;HEAPU32[ptr++] = length;HEAPU32[ptr++] = data;HEAPU32[ptr++] = new ExternalBuffer(buf, data).register();HEAPU8.set(getBuffer(buf), data);return result;
    }var BufferType = function (_super) {
      __extends(BufferType, _super);function BufferType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;_this.wireWrite = pushBuffer;_this.readResources = [_nbind.resources.pool];_this.writeResources = [_nbind.resources.pool];return _this;
      }BufferType.prototype.makeWireWrite = function (expr, policyTbl) {
        return function (arg) {
          return pushBuffer(arg, policyTbl);
        };
      };return BufferType;
    }(_nbind.BindType);_nbind.BufferType = BufferType;function commitBuffer(num, data, length) {
      var buf = _nbind.externalList[num].data;var NodeBuffer = Buffer;if (typeof Buffer != "function") NodeBuffer = function () {};if (buf instanceof Array) {} else {
        var src = HEAPU8.subarray(data, data + length);if (buf instanceof NodeBuffer) {
          var srcBuf = void 0;if (typeof Buffer.from == "function" && Buffer.from.length >= 3) {
            srcBuf = Buffer.from(src);
          } else srcBuf = new Buffer(src);srcBuf.copy(buf);
        } else getBuffer(buf).set(src);
      }
    }_nbind.commitBuffer = commitBuffer;var dirtyList = [];var gcTimer = 0;function sweep() {
      for (var _i = 0, dirtyList_1 = dirtyList; _i < dirtyList_1.length; _i++) {
        var obj = dirtyList_1[_i];if (!(obj.__nbindState & (1 | 2))) {
          obj.free();
        }
      }dirtyList = [];gcTimer = 0;
    }_nbind.mark = function (obj) {};function toggleLightGC(enable) {
      if (enable) {
        _nbind.mark = function (obj) {
          dirtyList.push(obj);if (!gcTimer) gcTimer = setTimeout(sweep, 0);
        };
      } else {
        _nbind.mark = function (obj) {};
      }
    }_nbind.toggleLightGC = toggleLightGC;
  })(_nbind);Module["requestFullScreen"] = function Module_requestFullScreen(lockPointer, resizeCanvas, vrDevice) {
    Module.printErr("Module.requestFullScreen is deprecated. Please call Module.requestFullscreen instead.");Module["requestFullScreen"] = Module["requestFullscreen"];Browser.requestFullScreen(lockPointer, resizeCanvas, vrDevice);
  };Module["requestFullscreen"] = function Module_requestFullscreen(lockPointer, resizeCanvas, vrDevice) {
    Browser.requestFullscreen(lockPointer, resizeCanvas, vrDevice);
  };Module["requestAnimationFrame"] = function Module_requestAnimationFrame(func) {
    Browser.requestAnimationFrame(func);
  };Module["setCanvasSize"] = function Module_setCanvasSize(width, height, noUpdates) {
    Browser.setCanvasSize(width, height, noUpdates);
  };Module["pauseMainLoop"] = function Module_pauseMainLoop() {
    Browser.mainLoop.pause();
  };Module["resumeMainLoop"] = function Module_resumeMainLoop() {
    Browser.mainLoop.resume();
  };Module["getUserMedia"] = function Module_getUserMedia() {
    Browser.getUserMedia();
  };Module["createContext"] = function Module_createContext(canvas, useWebGL, setInModule, webGLContextAttributes) {
    return Browser.createContext(canvas, useWebGL, setInModule, webGLContextAttributes);
  };if (ENVIRONMENT_IS_NODE) {
    _emscripten_get_now = function _emscripten_get_now_actual() {
      var t = process["hrtime"]();return t[0] * 1e3 + t[1] / 1e6;
    };
  } else if (typeof dateNow !== "undefined") {
    _emscripten_get_now = dateNow;
  } else if (typeof self === "object" && self["performance"] && typeof self["performance"]["now"] === "function") {
    _emscripten_get_now = function () {
      return self["performance"]["now"]();
    };
  } else if (typeof performance === "object" && typeof performance["now"] === "function") {
    _emscripten_get_now = function () {
      return performance["now"]();
    };
  } else {
    _emscripten_get_now = Date.now;
  }__ATEXIT__.push(function () {
    var fflush = Module["_fflush"];if (fflush) fflush(0);var printChar = ___syscall146.printChar;if (!printChar) return;var buffers = ___syscall146.buffers;if (buffers[1].length) printChar(1, 10);if (buffers[2].length) printChar(2, 10);
  });DYNAMICTOP_PTR = allocate(1, "i32", ALLOC_STATIC);STACK_BASE = STACKTOP = Runtime.alignMemory(STATICTOP);STACK_MAX = STACK_BASE + TOTAL_STACK;DYNAMIC_BASE = Runtime.alignMemory(STACK_MAX);HEAP32[DYNAMICTOP_PTR >> 2] = DYNAMIC_BASE;staticSealed = true;function invoke_viiiii(index, a1, a2, a3, a4, a5) {
    try {
      Module["dynCall_viiiii"](index, a1, a2, a3, a4, a5);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_vid(index, a1, a2) {
    try {
      Module["dynCall_vid"](index, a1, a2);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_fiff(index, a1, a2, a3) {
    try {
      return Module["dynCall_fiff"](index, a1, a2, a3);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_vi(index, a1) {
    try {
      Module["dynCall_vi"](index, a1);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_vii(index, a1, a2) {
    try {
      Module["dynCall_vii"](index, a1, a2);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_ii(index, a1) {
    try {
      return Module["dynCall_ii"](index, a1);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_viddi(index, a1, a2, a3, a4) {
    try {
      Module["dynCall_viddi"](index, a1, a2, a3, a4);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_vidd(index, a1, a2, a3) {
    try {
      Module["dynCall_vidd"](index, a1, a2, a3);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_iiii(index, a1, a2, a3) {
    try {
      return Module["dynCall_iiii"](index, a1, a2, a3);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_diii(index, a1, a2, a3) {
    try {
      return Module["dynCall_diii"](index, a1, a2, a3);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_di(index, a1) {
    try {
      return Module["dynCall_di"](index, a1);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_iid(index, a1, a2) {
    try {
      return Module["dynCall_iid"](index, a1, a2);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_iii(index, a1, a2) {
    try {
      return Module["dynCall_iii"](index, a1, a2);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_viiddi(index, a1, a2, a3, a4, a5) {
    try {
      Module["dynCall_viiddi"](index, a1, a2, a3, a4, a5);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_viiiiii(index, a1, a2, a3, a4, a5, a6) {
    try {
      Module["dynCall_viiiiii"](index, a1, a2, a3, a4, a5, a6);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_dii(index, a1, a2) {
    try {
      return Module["dynCall_dii"](index, a1, a2);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_i(index) {
    try {
      return Module["dynCall_i"](index);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_iiiiii(index, a1, a2, a3, a4, a5) {
    try {
      return Module["dynCall_iiiiii"](index, a1, a2, a3, a4, a5);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_viiid(index, a1, a2, a3, a4) {
    try {
      Module["dynCall_viiid"](index, a1, a2, a3, a4);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_viififi(index, a1, a2, a3, a4, a5, a6) {
    try {
      Module["dynCall_viififi"](index, a1, a2, a3, a4, a5, a6);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_viii(index, a1, a2, a3) {
    try {
      Module["dynCall_viii"](index, a1, a2, a3);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_v(index) {
    try {
      Module["dynCall_v"](index);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_viid(index, a1, a2, a3) {
    try {
      Module["dynCall_viid"](index, a1, a2, a3);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_idd(index, a1, a2) {
    try {
      return Module["dynCall_idd"](index, a1, a2);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_viiii(index, a1, a2, a3, a4) {
    try {
      Module["dynCall_viiii"](index, a1, a2, a3, a4);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }Module.asmGlobalArg = { "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array, "NaN": NaN, "Infinity": Infinity };Module.asmLibraryArg = { "abort": abort, "assert": assert, "enlargeMemory": enlargeMemory, "getTotalMemory": getTotalMemory, "abortOnCannotGrowMemory": abortOnCannotGrowMemory, "invoke_viiiii": invoke_viiiii, "invoke_vid": invoke_vid, "invoke_fiff": invoke_fiff, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viddi": invoke_viddi, "invoke_vidd": invoke_vidd, "invoke_iiii": invoke_iiii, "invoke_diii": invoke_diii, "invoke_di": invoke_di, "invoke_iid": invoke_iid, "invoke_iii": invoke_iii, "invoke_viiddi": invoke_viiddi, "invoke_viiiiii": invoke_viiiiii, "invoke_dii": invoke_dii, "invoke_i": invoke_i, "invoke_iiiiii": invoke_iiiiii, "invoke_viiid": invoke_viiid, "invoke_viififi": invoke_viififi, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viid": invoke_viid, "invoke_idd": invoke_idd, "invoke_viiii": invoke_viiii, "_emscripten_asm_const_iiiii": _emscripten_asm_const_iiiii, "_emscripten_asm_const_iiidddddd": _emscripten_asm_const_iiidddddd, "_YGDisplayToString": _YGDisplayToString, "__nbind_finish": __nbind_finish, "__nbind_reference_external": __nbind_reference_external, "_emscripten_asm_const_iiiiiiii": _emscripten_asm_const_iiiiiiii, "_removeAccessorPrefix": _removeAccessorPrefix, "_typeModule": _typeModule, "__nbind_register_pool": __nbind_register_pool, "__decorate": __decorate, "_llvm_stackrestore": _llvm_stackrestore, "___cxa_atexit": ___cxa_atexit, "_YGAlignToString": _YGAlignToString, "__extends": __extends, "_YGOverflowToString": _YGOverflowToString, "__nbind_get_value_object": __nbind_get_value_object, "_emscripten_set_main_loop_timing": _emscripten_set_main_loop_timing, "__nbind_register_primitive": __nbind_register_primitive, "__nbind_register_type": __nbind_register_type, "_YGWrapToString": _YGWrapToString, "_emscripten_memcpy_big": _emscripten_memcpy_big, "_YGJustifyToString": _YGJustifyToString, "___setErrNo": ___setErrNo, "__nbind_register_class": __nbind_register_class, "_emscripten_asm_const_iiiid": _emscripten_asm_const_iiiid, "_abort": _abort, "_nbind_value": _nbind_value, "_llvm_stacksave": _llvm_stacksave, "_YGPositionTypeToString": _YGPositionTypeToString, "___syscall54": ___syscall54, "_defineHidden": _defineHidden, "_emscripten_set_main_loop": _emscripten_set_main_loop, "_emscripten_get_now": _emscripten_get_now, "__nbind_register_callback_signature": __nbind_register_callback_signature, "_emscripten_asm_const_iiiiii": _emscripten_asm_const_iiiiii, "__nbind_register_function": __nbind_register_function, "__nbind_free_external": __nbind_free_external, "_emscripten_asm_const_iiii": _emscripten_asm_const_iiii, "_emscripten_asm_const_iiididi": _emscripten_asm_const_iiididi, "_YGEdgeToString": _YGEdgeToString, "___syscall6": ___syscall6, "_atexit": _atexit, "___syscall140": ___syscall140, "___syscall146": ___syscall146, "_YGFlexDirectionToString": _YGFlexDirectionToString, "DYNAMICTOP_PTR": DYNAMICTOP_PTR, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "cttz_i8": cttz_i8, "___dso_handle": ___dso_handle }; // EMSCRIPTEN_START_ASM
  var asm = function (global, env, buffer) {
    "use asm";
    var a = new global.Int8Array(buffer);var b = new global.Int16Array(buffer);var c = new global.Int32Array(buffer);var d = new global.Uint8Array(buffer);var e = new global.Uint16Array(buffer);var f = new global.Uint32Array(buffer);var g = new global.Float32Array(buffer);var h = new global.Float64Array(buffer);var i = env.DYNAMICTOP_PTR | 0;var j = env.tempDoublePtr | 0;var k = env.ABORT | 0;var l = env.STACKTOP | 0;var m = env.STACK_MAX | 0;var n = env.cttz_i8 | 0;var o = env.___dso_handle | 0;var p = 0;var q = 0;var r = 0;var s = 0;var t = global.NaN,
        u = global.Infinity;var v = 0,
        w = 0,
        x = 0,
        y = 0,
        z = 0.0;var A = 0;var B = global.Math.floor;var C = global.Math.abs;var D = global.Math.sqrt;var E = global.Math.pow;var F = global.Math.cos;var G = global.Math.sin;var H = global.Math.tan;var I = global.Math.acos;var J = global.Math.asin;var K = global.Math.atan;var L = global.Math.atan2;var M = global.Math.exp;var N = global.Math.log;var O = global.Math.ceil;var P = global.Math.imul;var Q = global.Math.min;var R = global.Math.max;var S = global.Math.clz32;var T = global.Math.fround;var U = env.abort;var V = env.assert;var W = env.enlargeMemory;var X = env.getTotalMemory;var Y = env.abortOnCannotGrowMemory;var Z = env.invoke_viiiii;var _ = env.invoke_vid;var $ = env.invoke_fiff;var aa = env.invoke_vi;var ba = env.invoke_vii;var ca = env.invoke_ii;var da = env.invoke_viddi;var ea = env.invoke_vidd;var fa = env.invoke_iiii;var ga = env.invoke_diii;var ha = env.invoke_di;var ia = env.invoke_iid;var ja = env.invoke_iii;var ka = env.invoke_viiddi;var la = env.invoke_viiiiii;var ma = env.invoke_dii;var na = env.invoke_i;var oa = env.invoke_iiiiii;var pa = env.invoke_viiid;var qa = env.invoke_viififi;var ra = env.invoke_viii;var sa = env.invoke_v;var ta = env.invoke_viid;var ua = env.invoke_idd;var va = env.invoke_viiii;var wa = env._emscripten_asm_const_iiiii;var xa = env._emscripten_asm_const_iiidddddd;var ya = env._YGDisplayToString;var za = env.__nbind_finish;var Aa = env.__nbind_reference_external;var Ba = env._emscripten_asm_const_iiiiiiii;var Ca = env._removeAccessorPrefix;var Da = env._typeModule;var Ea = env.__nbind_register_pool;var Fa = env.__decorate;var Ga = env._llvm_stackrestore;var Ha = env.___cxa_atexit;var Ia = env._YGAlignToString;var Ja = env.__extends;var Ka = env._YGOverflowToString;var La = env.__nbind_get_value_object;var Ma = env._emscripten_set_main_loop_timing;var Na = env.__nbind_register_primitive;var Oa = env.__nbind_register_type;var Pa = env._YGWrapToString;var Qa = env._emscripten_memcpy_big;var Ra = env._YGJustifyToString;var Sa = env.___setErrNo;var Ta = env.__nbind_register_class;var Ua = env._emscripten_asm_const_iiiid;var Va = env._abort;var Wa = env._nbind_value;var Xa = env._llvm_stacksave;var Ya = env._YGPositionTypeToString;var Za = env.___syscall54;var _a = env._defineHidden;var $a = env._emscripten_set_main_loop;var ab = env._emscripten_get_now;var bb = env.__nbind_register_callback_signature;var cb = env._emscripten_asm_const_iiiiii;var db = env.__nbind_register_function;var eb = env.__nbind_free_external;var fb = env._emscripten_asm_const_iiii;var gb = env._emscripten_asm_const_iiididi;var hb = env._YGEdgeToString;var ib = env.___syscall6;var jb = env._atexit;var kb = env.___syscall140;var lb = env.___syscall146;var mb = env._YGFlexDirectionToString;var nb = T(0);const ob = T(0);
    // EMSCRIPTEN_START_FUNCS
    function Nd(b, e, f, h, i, k, m, n, o, p) {
      b = b | 0;e = T(e);f = T(f);h = h | 0;i = i | 0;k = k | 0;m = T(m);n = T(n);o = o | 0;p = p | 0;var q = 0,
          r = ob,
          s = ob,
          u = ob,
          v = 0,
          w = 0,
          x = 0,
          y = 0,
          z = 0,
          A = 0,
          B = 0,
          D = ob,
          E = ob,
          F = ob,
          G = ob,
          H = ob,
          I = ob,
          J = ob,
          K = 0,
          L = 0,
          M = ob,
          N = 0,
          O = 0,
          P = ob,
          Q = 0,
          R = 0,
          S = 0,
          U = 0,
          V = ob,
          W = 0,
          X = 0,
          Y = ob,
          Z = ob,
          _ = ob,
          $ = ob,
          aa = ob,
          ba = 0,
          ca = 0,
          da = 0,
          ea = 0,
          fa = 0,
          ga = 0,
          ha = 0,
          ia = 0,
          ja = 0,
          ka = 0,
          la = 0,
          ma = 0,
          na = 0,
          oa = 0,
          pa = 0,
          qa = ob,
          ra = ob,
          sa = 0,
          ta = ob,
          ua = ob,
          va = 0,
          wa = 0,
          xa = 0,
          ya = 0,
          za = 0,
          Aa = 0,
          Ba = 0,
          Ca = 0,
          Da = 0,
          Ea = 0,
          Fa = 0,
          Ga = 0,
          Ha = 0,
          Ia = 0,
          Ja = 0,
          Ka = 0,
          La = 0,
          Ma = 0,
          Na = 0,
          Oa = 0,
          Pa = 0,
          Qa = 0,
          Ra = ob,
          Sa = ob,
          Ta = 0,
          Ua = 0,
          Va = 0,
          Wa = 0,
          Xa = 0,
          Ya = ob,
          Za = 0,
          _a = 0,
          $a = 0,
          ab = 0,
          bb = ob,
          cb = 0,
          db = 0,
          eb = 0,
          fb = 0,
          gb = ob,
          hb = ob,
          ib = 0,
          jb = ob,
          kb = 0,
          lb = 0,
          mb = 0,
          nb = 0,
          pb = 0,
          qb = 0,
          rb = 0,
          sb = 0,
          tb = 0,
          ub = ob,
          vb = 0,
          wb = ob,
          xb = 0,
          yb = ob,
          zb = ob,
          Ab = 0,
          Bb = 0,
          Cb = 0,
          Db = 0,
          Eb = ob,
          Fb = ob,
          Gb = 0,
          Hb = 0,
          Jb = 0,
          Kb = 0,
          Lb = 0,
          Mb = 0,
          Nb = 0,
          Ob = 0,
          Pb = 0,
          Qb = 0,
          Rb = 0,
          Sb = 0,
          Tb = 0,
          Ub = ob,
          Vb = ob,
          Xb = ob,
          Yb = ob,
          _b = 0,
          $b = 0,
          ac = 0,
          bc = 0,
          cc = 0;cc = l;l = l + 32 | 0;v = cc + 8 | 0;q = cc;S = cc + 16 | 0;Q = ((g[j >> 2] = e, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040;if (!((i | 0) == 0 | Q ^ 1)) {
        c[q >> 2] = 3943;hc(b, 5, 2741, q);
      }U = ((g[j >> 2] = f, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040;if (!((k | 0) == 0 | U ^ 1)) {
        c[v >> 2] = 4023;hc(b, 5, 2741, v);
      }Sb = c[b >> 2] | 0;Sb = (Sb | 0) == 0 ? h | 0 ? h : 1 : Sb;c[b + 496 >> 2] = Sb;Tb = (Sb | 0) == 2;Rb = Tb ? 3 : 2;X = b + 96 | 0;z = (c[X >> 2] | 0) == 0;a: do if (z) {
        q = c[1068 + (Rb << 2) >> 2] | 0;if (c[b + 60 + (q << 3) + 4 >> 2] | 0) {
          q = b + 60 + (q << 3) | 0;break;
        }if ((q | 2 | 0) == 3 ? c[b + 120 >> 2] | 0 : 0) {
          q = b + 116 | 0;break;
        }switch (q | 0) {case 0:case 2:case 4:case 5:
            {
              if (c[b + 112 >> 2] | 0) {
                q = b + 108 | 0;break a;
              }break;
            }default:
            {}}if (!(c[b + 128 >> 2] | 0)) {
          q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
        } else {
          q = b + 124 | 0;break;
        }
      } else q = b + 92 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 3:
          {
            u = T(0.0);break;
          }case 2:
          {
            u = T(T(T(g[q >> 2]) * m) / T(100.0));break;
          }case 1:
          {
            u = T(g[q >> 2]);break;
          }default:
          u = T(t);}g[b + 440 >> 2] = u;ca = b + 104 | 0;w = (c[ca >> 2] | 0) == 0;b: do if (w) {
        q = c[1084 + (Rb << 2) >> 2] | 0;if (c[b + 60 + (q << 3) + 4 >> 2] | 0) {
          q = b + 60 + (q << 3) | 0;break;
        }if ((q | 2 | 0) == 3 ? c[b + 120 >> 2] | 0 : 0) {
          q = b + 116 | 0;break;
        }switch (q | 0) {case 0:case 2:case 4:case 5:
            {
              if (c[b + 112 >> 2] | 0) {
                q = b + 108 | 0;break b;
              }break;
            }default:
            {}}if (!(c[b + 128 >> 2] | 0)) {
          q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
        } else {
          q = b + 124 | 0;break;
        }
      } else q = b + 100 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 3:
          {
            u = T(0.0);break;
          }case 2:
          {
            u = T(T(T(g[q >> 2]) * m) / T(100.0));break;
          }case 1:
          {
            u = T(g[q >> 2]);break;
          }default:
          u = T(t);}g[b + 444 >> 2] = u;W = b + 72 | 0;x = (c[W >> 2] | 0) == 0;do if (x) {
        if (!(c[b + 120 >> 2] | 0)) {
          q = (c[b + 128 >> 2] | 0) == 0 ? 1036 : b + 124 | 0;break;
        } else {
          q = b + 116 | 0;break;
        }
      } else q = b + 68 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 3:
          {
            u = T(0.0);break;
          }case 2:
          {
            u = T(T(T(g[q >> 2]) * m) / T(100.0));break;
          }case 1:
          {
            u = T(g[q >> 2]);break;
          }default:
          u = T(t);}g[b + 428 >> 2] = u;ba = b + 88 | 0;v = (c[ba >> 2] | 0) == 0;do if (v) {
        if (!(c[b + 120 >> 2] | 0)) {
          q = (c[b + 128 >> 2] | 0) == 0 ? 1036 : b + 124 | 0;break;
        } else {
          q = b + 116 | 0;break;
        }
      } else q = b + 84 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 3:
          {
            u = T(0.0);break;
          }case 2:
          {
            u = T(T(T(g[q >> 2]) * m) / T(100.0));break;
          }case 1:
          {
            u = T(g[q >> 2]);break;
          }default:
          u = T(t);}g[b + 436 >> 2] = u;_b = b + 312 | 0;L = (c[_b >> 2] | 0) == 0;if (!L ? (D = T(g[b + 308 >> 2]), D >= T(0.0)) : 0) u = D;else {
        q = c[1068 + (Rb << 2) >> 2] | 0;c: do if (!(c[b + 276 + (q << 3) + 4 >> 2] | 0)) {
          if ((q | 2 | 0) == 3 ? c[b + 336 >> 2] | 0 : 0) {
            q = b + 332 | 0;break;
          }switch (q | 0) {case 0:case 2:case 4:case 5:
              {
                if (c[b + 328 >> 2] | 0) {
                  q = b + 324 | 0;break c;
                }break;
              }default:
              {}}if (!(c[b + 344 >> 2] | 0)) {
            q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
          } else {
            q = b + 340 | 0;break;
          }
        } else q = b + 276 + (q << 3) | 0; while (0);u = T(Fl(T(g[q >> 2]), T(0.0)));
      }g[b + 464 >> 2] = u;$b = b + 320 | 0;N = (c[$b >> 2] | 0) == 0;if (!N ? (E = T(g[b + 316 >> 2]), E >= T(0.0)) : 0) u = E;else {
        q = c[1084 + (Rb << 2) >> 2] | 0;d: do if (!(c[b + 276 + (q << 3) + 4 >> 2] | 0)) {
          if ((q | 2 | 0) == 3 ? c[b + 336 >> 2] | 0 : 0) {
            q = b + 332 | 0;break;
          }switch (q | 0) {case 0:case 2:case 4:case 5:
              {
                if (c[b + 328 >> 2] | 0) {
                  q = b + 324 | 0;break d;
                }break;
              }default:
              {}}if (!(c[b + 344 >> 2] | 0)) {
            q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
          } else {
            q = b + 340 | 0;break;
          }
        } else q = b + 276 + (q << 3) | 0; while (0);u = T(Fl(T(g[q >> 2]), T(0.0)));
      }g[b + 468 >> 2] = u;ac = b + 288 | 0;O = (c[ac >> 2] | 0) == 0;do if (O) {
        if (!(c[b + 336 >> 2] | 0)) {
          q = (c[b + 344 >> 2] | 0) == 0 ? 1036 : b + 340 | 0;break;
        } else {
          q = b + 332 | 0;break;
        }
      } else q = b + 284 | 0; while (0);g[b + 452 >> 2] = T(Fl(T(g[q >> 2]), T(0.0)));bc = b + 304 | 0;R = (c[bc >> 2] | 0) == 0;do if (R) {
        if (!(c[b + 336 >> 2] | 0)) {
          q = (c[b + 344 >> 2] | 0) == 0 ? 1036 : b + 340 | 0;break;
        } else {
          q = b + 332 | 0;break;
        }
      } else q = b + 300 | 0; while (0);g[b + 460 >> 2] = T(Fl(T(g[q >> 2]), T(0.0)));Hb = b + 236 | 0;Cb = b + 240 | 0;y = c[Cb >> 2] | 0;switch (y | 0) {case 1:
          {
            u = T(g[Hb >> 2]);D = u;eb = 98;break;
          }case 2:
          {
            u = T(g[Hb >> 2]);D = T(T(u * m) / T(100.0));eb = 98;break;
          }default:
          eb = 102;}e: do if ((eb | 0) == 98) if (!(D >= T(0.0))) eb = 102;else switch (y | 0) {case 2:
          {
            u = T(T(u * m) / T(100.0));break e;
          }case 1:
          break e;default:
          {
            u = T(t);break e;
          }} while (0);if ((eb | 0) == 102) {
        q = c[1068 + (Rb << 2) >> 2] | 0;f: do if (!(c[b + 204 + (q << 3) + 4 >> 2] | 0)) {
          if ((q | 2 | 0) == 3 ? c[b + 264 >> 2] | 0 : 0) {
            q = b + 260 | 0;break;
          }switch (q | 0) {case 0:case 2:case 4:case 5:
              {
                if (c[b + 256 >> 2] | 0) {
                  q = b + 252 | 0;break f;
                }break;
              }default:
              {}}if (!(c[b + 272 >> 2] | 0)) {
            q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
          } else {
            q = b + 268 | 0;break;
          }
        } else q = b + 204 + (q << 3) | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
            {
              u = T(T(T(g[q >> 2]) * m) / T(100.0));break;
            }case 1:
            {
              u = T(g[q >> 2]);break;
            }default:
            u = T(t);}u = T(Fl(u, T(0.0)));
      }g[b + 488 >> 2] = u;Jb = b + 244 | 0;Gb = b + 248 | 0;A = c[Gb >> 2] | 0;switch (A | 0) {case 1:
          {
            u = T(g[Jb >> 2]);D = u;eb = 120;break;
          }case 2:
          {
            u = T(g[Jb >> 2]);D = T(T(u * m) / T(100.0));eb = 120;break;
          }default:
          eb = 124;}g: do if ((eb | 0) == 120) if (!(D >= T(0.0))) eb = 124;else switch (A | 0) {case 2:
          {
            u = T(T(u * m) / T(100.0));break g;
          }case 1:
          break g;default:
          {
            u = T(t);break g;
          }} while (0);if ((eb | 0) == 124) {
        q = c[1084 + (Rb << 2) >> 2] | 0;h: do if (!(c[b + 204 + (q << 3) + 4 >> 2] | 0)) {
          if ((q | 2 | 0) == 3 ? c[b + 264 >> 2] | 0 : 0) {
            q = b + 260 | 0;break;
          }switch (q | 0) {case 0:case 2:case 4:case 5:
              {
                if (c[b + 256 >> 2] | 0) {
                  q = b + 252 | 0;break h;
                }break;
              }default:
              {}}if (!(c[b + 272 >> 2] | 0)) {
            q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
          } else {
            q = b + 268 | 0;break;
          }
        } else q = b + 204 + (q << 3) | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
            {
              u = T(T(T(g[q >> 2]) * m) / T(100.0));break;
            }case 1:
            {
              u = T(g[q >> 2]);break;
            }default:
            u = T(t);}u = T(Fl(u, T(0.0)));
      }g[b + 492 >> 2] = u;Bb = b + 216 | 0;B = (c[Bb >> 2] | 0) == 0;do if (B) {
        if (!(c[b + 264 >> 2] | 0)) {
          q = (c[b + 272 >> 2] | 0) == 0 ? 1036 : b + 268 | 0;break;
        } else {
          q = b + 260 | 0;break;
        }
      } else q = b + 212 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
          {
            u = T(T(T(g[q >> 2]) * m) / T(100.0));break;
          }case 1:
          {
            u = T(g[q >> 2]);break;
          }default:
          u = T(t);}g[b + 476 >> 2] = T(Fl(u, T(0.0)));Db = b + 232 | 0;K = (c[Db >> 2] | 0) == 0;do if (K) {
        if (!(c[b + 264 >> 2] | 0)) {
          q = (c[b + 272 >> 2] | 0) == 0 ? 1036 : b + 268 | 0;break;
        } else {
          q = b + 260 | 0;break;
        }
      } else q = b + 228 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
          {
            u = T(T(T(g[q >> 2]) * m) / T(100.0));break;
          }case 1:
          {
            u = T(g[q >> 2]);break;
          }default:
          u = T(t);}g[b + 484 >> 2] = T(Fl(u, T(0.0)));h = c[b + 956 >> 2] | 0;if (h | 0) {
        switch (y | 0) {case 1:
            {
              D = T(g[Hb >> 2]);u = D;eb = 159;break;
            }case 2:
            {
              D = T(g[Hb >> 2]);u = T(T(D * e) / T(100.0));eb = 159;break;
            }default:
            eb = 163;}i: do if ((eb | 0) == 159) if (!(u >= T(0.0))) eb = 163;else switch (y | 0) {case 2:
            {
              D = T(T(D * e) / T(100.0));break i;
            }case 1:
            break i;default:
            {
              D = T(t);break i;
            }} while (0);if ((eb | 0) == 163) {
          do if (!(c[b + 208 >> 2] | 0)) {
            if (!(c[b + 256 >> 2] | 0)) {
              q = (c[b + 272 >> 2] | 0) == 0 ? 1036 : b + 268 | 0;break;
            } else {
              q = b + 252 | 0;break;
            }
          } else q = b + 204 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
              {
                u = T(T(T(g[q >> 2]) * e) / T(100.0));break;
              }case 1:
              {
                u = T(g[q >> 2]);break;
              }default:
              u = T(t);}D = T(Fl(u, T(0.0)));
        }if (!L ? (F = T(g[b + 308 >> 2]), F >= T(0.0)) : 0) u = F;else {
          do if (!(c[b + 280 >> 2] | 0)) {
            if (!(c[b + 328 >> 2] | 0)) {
              q = (c[b + 344 >> 2] | 0) == 0 ? 1036 : b + 340 | 0;break;
            } else {
              q = b + 324 | 0;break;
            }
          } else q = b + 276 | 0; while (0);u = T(Fl(T(g[q >> 2]), T(0.0)));
        }E = T(D + u);switch (A | 0) {case 1:
            {
              D = T(g[Jb >> 2]);u = D;eb = 183;break;
            }case 2:
            {
              D = T(g[Jb >> 2]);u = T(T(D * e) / T(100.0));eb = 183;break;
            }default:
            eb = 187;}j: do if ((eb | 0) == 183) if (!(u >= T(0.0))) eb = 187;else switch (A | 0) {case 2:
            {
              D = T(T(D * e) / T(100.0));break j;
            }case 1:
            break j;default:
            {
              D = T(t);break j;
            }} while (0);if ((eb | 0) == 187) {
          do if (!(c[b + 224 >> 2] | 0)) {
            if (!(c[b + 256 >> 2] | 0)) {
              q = (c[b + 272 >> 2] | 0) == 0 ? 1036 : b + 268 | 0;break;
            } else {
              q = b + 252 | 0;break;
            }
          } else q = b + 220 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
              {
                u = T(T(T(g[q >> 2]) * e) / T(100.0));break;
              }case 1:
              {
                u = T(g[q >> 2]);break;
              }default:
              u = T(t);}D = T(Fl(u, T(0.0)));
        }if (!N ? (H = T(g[b + 316 >> 2]), H >= T(0.0)) : 0) u = H;else {
          do if (!(c[b + 296 >> 2] | 0)) {
            if (!(c[b + 328 >> 2] | 0)) {
              q = (c[b + 344 >> 2] | 0) == 0 ? 1036 : b + 340 | 0;break;
            } else {
              q = b + 324 | 0;break;
            }
          } else q = b + 292 | 0; while (0);u = T(Fl(T(g[q >> 2]), T(0.0)));
        }F = T(E + T(D + u));do if (B) {
          if (!(c[b + 264 >> 2] | 0)) {
            q = (c[b + 272 >> 2] | 0) == 0 ? 1036 : b + 268 | 0;break;
          } else {
            q = b + 260 | 0;break;
          }
        } else q = b + 212 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
            {
              u = T(T(T(g[q >> 2]) * e) / T(100.0));break;
            }case 1:
            {
              u = T(g[q >> 2]);break;
            }default:
            u = T(t);}u = T(Fl(u, T(0.0)));do if (O) {
          if (!(c[b + 336 >> 2] | 0)) {
            q = (c[b + 344 >> 2] | 0) == 0 ? 1036 : b + 340 | 0;break;
          } else {
            q = b + 332 | 0;break;
          }
        } else q = b + 284 | 0; while (0);D = T(u + T(Fl(T(g[q >> 2]), T(0.0))));do if (K) {
          if (!(c[b + 264 >> 2] | 0)) {
            q = (c[b + 272 >> 2] | 0) == 0 ? 1036 : b + 268 | 0;break;
          } else {
            q = b + 260 | 0;break;
          }
        } else q = b + 228 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
            {
              u = T(T(T(g[q >> 2]) * e) / T(100.0));break;
            }case 1:
            {
              u = T(g[q >> 2]);break;
            }default:
            u = T(t);}u = T(Fl(u, T(0.0)));do if (R) {
          if (!(c[b + 336 >> 2] | 0)) {
            q = (c[b + 344 >> 2] | 0) == 0 ? 1036 : b + 340 | 0;break;
          } else {
            q = b + 332 | 0;break;
          }
        } else q = b + 300 | 0; while (0);G = T(D + T(u + T(Fl(T(g[q >> 2]), T(0.0)))));do if (z) {
          if (c[b + 64 >> 2] | 0) {
            q = b + 60 | 0;break;
          }if (!(c[b + 112 >> 2] | 0)) {
            q = (c[b + 128 >> 2] | 0) == 0 ? 1036 : b + 124 | 0;break;
          } else {
            q = b + 108 | 0;break;
          }
        } else q = b + 92 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 3:
            {
              D = T(0.0);break;
            }case 2:
            {
              D = T(T(T(g[q >> 2]) * e) / T(100.0));break;
            }case 1:
            {
              D = T(g[q >> 2]);break;
            }default:
            D = T(t);}do if (w) {
          if (c[b + 80 >> 2] | 0) {
            q = b + 76 | 0;break;
          }if (!(c[b + 112 >> 2] | 0)) {
            q = (c[b + 128 >> 2] | 0) == 0 ? 1036 : b + 124 | 0;break;
          } else {
            q = b + 108 | 0;break;
          }
        } else q = b + 100 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 3:
            {
              u = T(0.0);break;
            }case 2:
            {
              u = T(T(T(g[q >> 2]) * e) / T(100.0));break;
            }case 1:
            {
              u = T(g[q >> 2]);break;
            }default:
            u = T(t);}E = T(D + u);do if (x) {
          if (!(c[b + 120 >> 2] | 0)) {
            q = (c[b + 128 >> 2] | 0) == 0 ? 1036 : b + 124 | 0;break;
          } else {
            q = b + 116 | 0;break;
          }
        } else q = b + 68 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 3:
            {
              D = T(0.0);break;
            }case 2:
            {
              D = T(T(T(g[q >> 2]) * e) / T(100.0));break;
            }case 1:
            {
              D = T(g[q >> 2]);break;
            }default:
            D = T(t);}do if (v) {
          if (!(c[b + 120 >> 2] | 0)) {
            q = (c[b + 128 >> 2] | 0) == 0 ? 1036 : b + 124 | 0;break;
          } else {
            q = b + 116 | 0;break;
          }
        } else q = b + 84 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 3:
            {
              u = T(0.0);break;
            }case 2:
            {
              u = T(T(T(g[q >> 2]) * e) / T(100.0));break;
            }case 1:
            {
              u = T(g[q >> 2]);break;
            }default:
            u = T(t);}H = T(D + u);if (Q) D = e;else D = T(Fl(T(0.0), T(T(e - E) - F)));if (U) u = f;else u = T(Fl(T(0.0), T(T(f - H) - G)));if ((i | 0) == 1 & (k | 0) == 1) {
          E = T(e - E);q = b + 364 | 0;switch (c[b + 368 >> 2] | 0) {case 2:
              {
                D = T(T(T(g[q >> 2]) * m) / T(100.0));break;
              }case 1:
              {
                D = T(g[q >> 2]);break;
              }default:
              D = T(t);}q = b + 380 | 0;switch (c[b + 384 >> 2] | 0) {case 2:
              {
                u = T(T(T(g[q >> 2]) * m) / T(100.0));break;
              }case 1:
              {
                u = T(g[q >> 2]);break;
              }default:
              u = T(t);}bc = u < E & (u >= T(0.0) & ((g[j >> 2] = u, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041);E = bc ? u : E;bc = D >= T(0.0) & ((g[j >> 2] = D, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041 & E < D;E = bc ? D : E;switch (y | 0) {case 1:
              {
                u = T(g[Hb >> 2]);D = u;eb = 284;break;
              }case 2:
              {
                u = T(g[Hb >> 2]);D = T(T(u * m) / T(100.0));eb = 284;break;
              }default:
              eb = 288;}k: do if ((eb | 0) == 284) {
            if (!(D >= T(0.0))) {
              eb = 288;break;
            }switch (y | 0) {case 2:
                {
                  u = T(T(u * m) / T(100.0));break k;
                }case 1:
                break k;default:
                {
                  u = T(t);break k;
                }}
          } while (0);if ((eb | 0) == 288) {
            do if (!(c[b + 208 >> 2] | 0)) {
              if (!(c[b + 256 >> 2] | 0)) {
                q = (c[b + 272 >> 2] | 0) == 0 ? 1036 : b + 268 | 0;break;
              } else {
                q = b + 252 | 0;break;
              }
            } else q = b + 204 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
                {
                  u = T(T(T(g[q >> 2]) * m) / T(100.0));break;
                }case 1:
                {
                  u = T(g[q >> 2]);break;
                }default:
                u = T(t);}u = T(Fl(u, T(0.0)));
          }if (!(!L ? (s = T(g[b + 308 >> 2]), s >= T(0.0)) : 0)) {
            do if (!(c[b + 280 >> 2] | 0)) {
              if (!(c[b + 328 >> 2] | 0)) {
                q = (c[b + 344 >> 2] | 0) == 0 ? 1036 : b + 340 | 0;break;
              } else {
                q = b + 324 | 0;break;
              }
            } else q = b + 276 | 0; while (0);s = T(Fl(T(g[q >> 2]), T(0.0)));
          }D = T(u + s);switch (A | 0) {case 1:
              {
                s = T(g[Jb >> 2]);u = s;eb = 308;break;
              }case 2:
              {
                s = T(g[Jb >> 2]);u = T(T(s * m) / T(100.0));eb = 308;break;
              }default:
              eb = 312;}l: do if ((eb | 0) == 308) {
            if (!(u >= T(0.0))) {
              eb = 312;break;
            }switch (A | 0) {case 2:
                {
                  s = T(T(s * m) / T(100.0));break l;
                }case 1:
                break l;default:
                {
                  s = T(t);break l;
                }}
          } while (0);if ((eb | 0) == 312) {
            do if (!(c[b + 224 >> 2] | 0)) {
              if (!(c[b + 256 >> 2] | 0)) {
                q = (c[b + 272 >> 2] | 0) == 0 ? 1036 : b + 268 | 0;break;
              } else {
                q = b + 252 | 0;break;
              }
            } else q = b + 220 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
                {
                  s = T(T(T(g[q >> 2]) * m) / T(100.0));break;
                }case 1:
                {
                  s = T(g[q >> 2]);break;
                }default:
                s = T(t);}s = T(Fl(s, T(0.0)));
          }if (!(!N ? (r = T(g[b + 316 >> 2]), r >= T(0.0)) : 0)) {
            do if (!(c[b + 296 >> 2] | 0)) {
              if (!(c[b + 328 >> 2] | 0)) {
                q = (c[b + 344 >> 2] | 0) == 0 ? 1036 : b + 340 | 0;break;
              } else {
                q = b + 324 | 0;break;
              }
            } else q = b + 292 | 0; while (0);r = T(Fl(T(g[q >> 2]), T(0.0)));
          }g[b + 908 >> 2] = T(Fl(E, T(D + T(s + r))));u = T(f - H);q = b + 372 | 0;switch (c[b + 376 >> 2] | 0) {case 2:
              {
                s = T(T(T(g[q >> 2]) * n) / T(100.0));break;
              }case 1:
              {
                s = T(g[q >> 2]);break;
              }default:
              s = T(t);}q = b + 388 | 0;switch (c[b + 392 >> 2] | 0) {case 2:
              {
                r = T(T(T(g[q >> 2]) * n) / T(100.0));break;
              }case 1:
              {
                r = T(g[q >> 2]);break;
              }default:
              r = T(t);}bc = r < u & (r >= T(0.0) & ((g[j >> 2] = r, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041);u = bc ? r : u;bc = s >= T(0.0) & ((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041 & u < s;u = bc ? s : u;do if (B) {
            if (!(c[b + 264 >> 2] | 0)) {
              q = (c[b + 272 >> 2] | 0) == 0 ? 1036 : b + 268 | 0;break;
            } else {
              q = b + 260 | 0;break;
            }
          } else q = b + 212 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
              {
                r = T(T(T(g[q >> 2]) * m) / T(100.0));break;
              }case 1:
              {
                r = T(g[q >> 2]);break;
              }default:
              r = T(t);}r = T(Fl(r, T(0.0)));do if (O) {
            if (!(c[b + 336 >> 2] | 0)) {
              q = (c[b + 344 >> 2] | 0) == 0 ? 1036 : b + 340 | 0;break;
            } else {
              q = b + 332 | 0;break;
            }
          } else q = b + 284 | 0; while (0);s = T(r + T(Fl(T(g[q >> 2]), T(0.0))));do if (K) {
            if (!(c[b + 264 >> 2] | 0)) {
              q = (c[b + 272 >> 2] | 0) == 0 ? 1036 : b + 268 | 0;break;
            } else {
              q = b + 260 | 0;break;
            }
          } else q = b + 228 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
              {
                r = T(T(T(g[q >> 2]) * m) / T(100.0));break;
              }case 1:
              {
                r = T(g[q >> 2]);break;
              }default:
              r = T(t);}r = T(Fl(r, T(0.0)));do if (R) {
            if (!(c[b + 336 >> 2] | 0)) {
              q = (c[b + 344 >> 2] | 0) == 0 ? 1036 : b + 340 | 0;break;
            } else {
              q = b + 332 | 0;break;
            }
          } else q = b + 300 | 0; while (0);g[b + 912 >> 2] = T(Fl(u, T(s + T(r + T(Fl(T(g[q >> 2]), T(0.0)))))));l = cc;return;
        } else {
          Ib[h & 1](S, b, D, i, u, k);Yb = T(F + T(g[S >> 2]));u = T(e - E);u = (i | 2 | 0) == 2 ? Yb : u;q = b + 364 | 0;switch (c[b + 368 >> 2] | 0) {case 2:
              {
                s = T(T(T(g[q >> 2]) * e) / T(100.0));break;
              }case 1:
              {
                s = T(g[q >> 2]);break;
              }default:
              s = T(t);}q = b + 380 | 0;switch (c[b + 384 >> 2] | 0) {case 2:
              {
                r = T(T(T(g[q >> 2]) * e) / T(100.0));break;
              }case 1:
              {
                r = T(g[q >> 2]);break;
              }default:
              r = T(t);}q = r < u & (r >= T(0.0) & ((g[j >> 2] = r, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041);D = q ? r : u;q = s >= T(0.0) & ((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041 & D < s;D = q ? s : D;q = c[Cb >> 2] | 0;switch (q | 0) {case 1:
              {
                s = T(g[Hb >> 2]);r = s;eb = 371;break;
              }case 2:
              {
                s = T(g[Hb >> 2]);r = T(T(s * e) / T(100.0));eb = 371;break;
              }default:
              eb = 375;}m: do if ((eb | 0) == 371) {
            if (!(r >= T(0.0))) {
              eb = 375;break;
            }switch (q | 0) {case 2:
                {
                  s = T(T(s * e) / T(100.0));break m;
                }case 1:
                break m;default:
                {
                  s = T(t);break m;
                }}
          } while (0);if ((eb | 0) == 375) {
            do if (!(c[b + 208 >> 2] | 0)) {
              if (!(c[b + 256 >> 2] | 0)) {
                q = (c[b + 272 >> 2] | 0) == 0 ? 1036 : b + 268 | 0;break;
              } else {
                q = b + 252 | 0;break;
              }
            } else q = b + 204 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
                {
                  r = T(T(T(g[q >> 2]) * e) / T(100.0));break;
                }case 1:
                {
                  r = T(g[q >> 2]);break;
                }default:
                r = T(t);}s = T(Fl(r, T(0.0)));
          }if ((c[_b >> 2] | 0) != 0 ? (Y = T(g[b + 308 >> 2]), Y >= T(0.0)) : 0) r = Y;else {
            do if (!(c[b + 280 >> 2] | 0)) {
              if (!(c[b + 328 >> 2] | 0)) {
                q = (c[b + 344 >> 2] | 0) == 0 ? 1036 : b + 340 | 0;break;
              } else {
                q = b + 324 | 0;break;
              }
            } else q = b + 276 | 0; while (0);r = T(Fl(T(g[q >> 2]), T(0.0)));
          }u = T(s + r);q = c[Gb >> 2] | 0;switch (q | 0) {case 1:
              {
                s = T(g[Jb >> 2]);r = s;eb = 395;break;
              }case 2:
              {
                s = T(g[Jb >> 2]);r = T(T(s * e) / T(100.0));eb = 395;break;
              }default:
              eb = 399;}n: do if ((eb | 0) == 395) {
            if (!(r >= T(0.0))) {
              eb = 399;break;
            }switch (q | 0) {case 2:
                {
                  s = T(T(s * e) / T(100.0));break n;
                }case 1:
                break n;default:
                {
                  s = T(t);break n;
                }}
          } while (0);if ((eb | 0) == 399) {
            do if (!(c[b + 224 >> 2] | 0)) {
              if (!(c[b + 256 >> 2] | 0)) {
                q = (c[b + 272 >> 2] | 0) == 0 ? 1036 : b + 268 | 0;break;
              } else {
                q = b + 252 | 0;break;
              }
            } else q = b + 220 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
                {
                  r = T(T(T(g[q >> 2]) * e) / T(100.0));break;
                }case 1:
                {
                  r = T(g[q >> 2]);break;
                }default:
                r = T(t);}s = T(Fl(r, T(0.0)));
          }if ((c[$b >> 2] | 0) != 0 ? (_ = T(g[b + 316 >> 2]), _ >= T(0.0)) : 0) r = _;else {
            do if (!(c[b + 296 >> 2] | 0)) {
              if (!(c[b + 328 >> 2] | 0)) {
                q = (c[b + 344 >> 2] | 0) == 0 ? 1036 : b + 340 | 0;break;
              } else {
                q = b + 324 | 0;break;
              }
            } else q = b + 292 | 0; while (0);r = T(Fl(T(g[q >> 2]), T(0.0)));
          }g[b + 908 >> 2] = T(Fl(D, T(u + T(s + r))));Yb = T(G + T(g[S + 4 >> 2]));u = T(f - H);u = (k | 2 | 0) == 2 ? Yb : u;q = b + 372 | 0;switch (c[b + 376 >> 2] | 0) {case 2:
              {
                s = T(T(T(g[q >> 2]) * f) / T(100.0));break;
              }case 1:
              {
                s = T(g[q >> 2]);break;
              }default:
              s = T(t);}q = b + 388 | 0;switch (c[b + 392 >> 2] | 0) {case 2:
              {
                r = T(T(T(g[q >> 2]) * f) / T(100.0));break;
              }case 1:
              {
                r = T(g[q >> 2]);break;
              }default:
              r = T(t);}$b = r < u & (r >= T(0.0) & ((g[j >> 2] = r, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041);u = $b ? r : u;$b = s >= T(0.0) & ((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041 & u < s;u = $b ? s : u;do if (!(c[Bb >> 2] | 0)) {
            if (!(c[b + 264 >> 2] | 0)) {
              q = (c[b + 272 >> 2] | 0) == 0 ? 1036 : b + 268 | 0;break;
            } else {
              q = b + 260 | 0;break;
            }
          } else q = b + 212 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
              {
                r = T(T(T(g[q >> 2]) * e) / T(100.0));break;
              }case 1:
              {
                r = T(g[q >> 2]);break;
              }default:
              r = T(t);}r = T(Fl(r, T(0.0)));do if (!(c[ac >> 2] | 0)) {
            if (!(c[b + 336 >> 2] | 0)) {
              q = (c[b + 344 >> 2] | 0) == 0 ? 1036 : b + 340 | 0;break;
            } else {
              q = b + 332 | 0;break;
            }
          } else q = b + 284 | 0; while (0);s = T(r + T(Fl(T(g[q >> 2]), T(0.0))));do if (!(c[Db >> 2] | 0)) {
            if (!(c[b + 264 >> 2] | 0)) {
              q = (c[b + 272 >> 2] | 0) == 0 ? 1036 : b + 268 | 0;break;
            } else {
              q = b + 260 | 0;break;
            }
          } else q = b + 228 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
              {
                r = T(T(T(g[q >> 2]) * e) / T(100.0));break;
              }case 1:
              {
                r = T(g[q >> 2]);break;
              }default:
              r = T(t);}r = T(Fl(r, T(0.0)));do if (!(c[bc >> 2] | 0)) {
            if (!(c[b + 336 >> 2] | 0)) {
              q = (c[b + 344 >> 2] | 0) == 0 ? 1036 : b + 340 | 0;break;
            } else {
              q = b + 332 | 0;break;
            }
          } else q = b + 300 | 0; while (0);g[b + 912 >> 2] = T(Fl(u, T(s + T(r + T(Fl(T(g[q >> 2]), T(0.0)))))));l = cc;return;
        }
      }Pb = b + 948 | 0;Qb = Wb(c[Pb >> 2] | 0) | 0;if (!Qb) {
        B = c[Cb >> 2] | 0;switch (B | 0) {case 1:
            {
              s = T(g[Hb >> 2]);r = s;eb = 453;break;
            }case 2:
            {
              s = T(g[Hb >> 2]);r = T(T(s * m) / T(100.0));eb = 453;break;
            }default:
            eb = 457;}o: do if ((eb | 0) == 453) if (!(r >= T(0.0))) eb = 457;else switch (B | 0) {case 2:
            {
              s = T(T(s * m) / T(100.0));break o;
            }case 1:
            break o;default:
            {
              s = T(t);break o;
            }} while (0);if ((eb | 0) == 457) {
          do if (!(c[b + 208 >> 2] | 0)) {
            if (!(c[b + 256 >> 2] | 0)) {
              q = (c[b + 272 >> 2] | 0) == 0 ? 1036 : b + 268 | 0;break;
            } else {
              q = b + 252 | 0;break;
            }
          } else q = b + 204 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
              {
                r = T(T(T(g[q >> 2]) * m) / T(100.0));break;
              }case 1:
              {
                r = T(g[q >> 2]);break;
              }default:
              r = T(t);}s = T(Fl(r, T(0.0)));
        }x = (c[_b >> 2] | 0) == 0;if (!x ? (G = T(g[b + 308 >> 2]), G >= T(0.0)) : 0) r = G;else {
          do if (!(c[b + 280 >> 2] | 0)) {
            if (!(c[b + 328 >> 2] | 0)) {
              q = (c[b + 344 >> 2] | 0) == 0 ? 1036 : b + 340 | 0;break;
            } else {
              q = b + 324 | 0;break;
            }
          } else q = b + 276 | 0; while (0);r = T(Fl(T(g[q >> 2]), T(0.0)));
        }u = T(s + r);y = c[Gb >> 2] | 0;switch (y | 0) {case 1:
            {
              s = T(g[Jb >> 2]);r = s;eb = 477;break;
            }case 2:
            {
              s = T(g[Jb >> 2]);r = T(T(s * m) / T(100.0));eb = 477;break;
            }default:
            eb = 481;}p: do if ((eb | 0) == 477) if (!(r >= T(0.0))) eb = 481;else switch (y | 0) {case 2:
            {
              s = T(T(s * m) / T(100.0));break p;
            }case 1:
            break p;default:
            {
              s = T(t);break p;
            }} while (0);if ((eb | 0) == 481) {
          do if (!(c[b + 224 >> 2] | 0)) {
            if (!(c[b + 256 >> 2] | 0)) {
              q = (c[b + 272 >> 2] | 0) == 0 ? 1036 : b + 268 | 0;break;
            } else {
              q = b + 252 | 0;break;
            }
          } else q = b + 220 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
              {
                r = T(T(T(g[q >> 2]) * m) / T(100.0));break;
              }case 1:
              {
                r = T(g[q >> 2]);break;
              }default:
              r = T(t);}s = T(Fl(r, T(0.0)));
        }h = (c[$b >> 2] | 0) == 0;if (!h ? (I = T(g[b + 316 >> 2]), I >= T(0.0)) : 0) r = I;else {
          do if (!(c[b + 296 >> 2] | 0)) {
            if (!(c[b + 328 >> 2] | 0)) {
              q = (c[b + 344 >> 2] | 0) == 0 ? 1036 : b + 340 | 0;break;
            } else {
              q = b + 324 | 0;break;
            }
          } else q = b + 292 | 0; while (0);r = T(Fl(T(g[q >> 2]), T(0.0)));
        }D = T(u + T(s + r));z = (c[Bb >> 2] | 0) == 0;do if (z) {
          if (!(c[b + 264 >> 2] | 0)) {
            q = (c[b + 272 >> 2] | 0) == 0 ? 1036 : b + 268 | 0;break;
          } else {
            q = b + 260 | 0;break;
          }
        } else q = b + 212 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
            {
              r = T(T(T(g[q >> 2]) * m) / T(100.0));break;
            }case 1:
            {
              r = T(g[q >> 2]);break;
            }default:
            r = T(t);}r = T(Fl(r, T(0.0)));A = (c[ac >> 2] | 0) == 0;do if (A) {
          if (!(c[b + 336 >> 2] | 0)) {
            q = (c[b + 344 >> 2] | 0) == 0 ? 1036 : b + 340 | 0;break;
          } else {
            q = b + 332 | 0;break;
          }
        } else q = b + 284 | 0; while (0);s = T(r + T(Fl(T(g[q >> 2]), T(0.0))));v = (c[Db >> 2] | 0) == 0;do if (v) {
          if (!(c[b + 264 >> 2] | 0)) {
            q = (c[b + 272 >> 2] | 0) == 0 ? 1036 : b + 268 | 0;break;
          } else {
            q = b + 260 | 0;break;
          }
        } else q = b + 228 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
            {
              r = T(T(T(g[q >> 2]) * m) / T(100.0));break;
            }case 1:
            {
              r = T(g[q >> 2]);break;
            }default:
            r = T(t);}r = T(Fl(r, T(0.0)));w = (c[bc >> 2] | 0) == 0;do if (w) {
          if (!(c[b + 336 >> 2] | 0)) {
            q = (c[b + 344 >> 2] | 0) == 0 ? 1036 : b + 340 | 0;break;
          } else {
            q = b + 332 | 0;break;
          }
        } else q = b + 300 | 0; while (0);F = T(s + T(r + T(Fl(T(g[q >> 2]), T(0.0)))));do if (!(c[X >> 2] | 0)) {
          if (c[b + 64 >> 2] | 0) {
            q = b + 60 | 0;break;
          }if (!(c[b + 112 >> 2] | 0)) {
            q = (c[b + 128 >> 2] | 0) == 0 ? 1036 : b + 124 | 0;break;
          } else {
            q = b + 108 | 0;break;
          }
        } else q = b + 92 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 3:
            {
              s = T(0.0);break;
            }case 2:
            {
              s = T(T(T(g[q >> 2]) * m) / T(100.0));break;
            }case 1:
            {
              s = T(g[q >> 2]);break;
            }default:
            s = T(t);}do if (!(c[ca >> 2] | 0)) {
          if (c[b + 80 >> 2] | 0) {
            q = b + 76 | 0;break;
          }if (!(c[b + 112 >> 2] | 0)) {
            q = (c[b + 128 >> 2] | 0) == 0 ? 1036 : b + 124 | 0;break;
          } else {
            q = b + 108 | 0;break;
          }
        } else q = b + 100 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 3:
            {
              r = T(0.0);break;
            }case 2:
            {
              r = T(T(T(g[q >> 2]) * m) / T(100.0));break;
            }case 1:
            {
              r = T(g[q >> 2]);break;
            }default:
            r = T(t);}u = T(s + r);do if (!(c[W >> 2] | 0)) {
          if (!(c[b + 120 >> 2] | 0)) {
            q = (c[b + 128 >> 2] | 0) == 0 ? 1036 : b + 124 | 0;break;
          } else {
            q = b + 116 | 0;break;
          }
        } else q = b + 68 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 3:
            {
              s = T(0.0);break;
            }case 2:
            {
              s = T(T(T(g[q >> 2]) * m) / T(100.0));break;
            }case 1:
            {
              s = T(g[q >> 2]);break;
            }default:
            s = T(t);}do if (!(c[ba >> 2] | 0)) {
          if (!(c[b + 120 >> 2] | 0)) {
            q = (c[b + 128 >> 2] | 0) == 0 ? 1036 : b + 124 | 0;break;
          } else {
            q = b + 116 | 0;break;
          }
        } else q = b + 84 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 3:
            {
              r = T(0.0);break;
            }case 2:
            {
              r = T(T(T(g[q >> 2]) * m) / T(100.0));break;
            }case 1:
            {
              r = T(g[q >> 2]);break;
            }default:
            r = T(t);}E = T(s + r);u = T(e - u);u = (i | 2 | 0) == 2 ? D : u;q = b + 364 | 0;switch (c[b + 368 >> 2] | 0) {case 2:
            {
              s = T(T(T(g[q >> 2]) * m) / T(100.0));break;
            }case 1:
            {
              s = T(g[q >> 2]);break;
            }default:
            s = T(t);}q = b + 380 | 0;switch (c[b + 384 >> 2] | 0) {case 2:
            {
              r = T(T(T(g[q >> 2]) * m) / T(100.0));break;
            }case 1:
            {
              r = T(g[q >> 2]);break;
            }default:
            r = T(t);}bc = r < u & (r >= T(0.0) & ((g[j >> 2] = r, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041);D = bc ? r : u;bc = s >= T(0.0) & ((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041 & D < s;D = bc ? s : D;switch (B | 0) {case 1:
            {
              s = T(g[Hb >> 2]);r = s;eb = 573;break;
            }case 2:
            {
              s = T(g[Hb >> 2]);r = T(T(s * m) / T(100.0));eb = 573;break;
            }default:
            eb = 577;}q: do if ((eb | 0) == 573) {
          if (!(r >= T(0.0))) {
            eb = 577;break;
          }switch (B | 0) {case 2:
              {
                s = T(T(s * m) / T(100.0));break q;
              }case 1:
              break q;default:
              {
                s = T(t);break q;
              }}
        } while (0);if ((eb | 0) == 577) {
          do if (!(c[b + 208 >> 2] | 0)) {
            if (!(c[b + 256 >> 2] | 0)) {
              q = (c[b + 272 >> 2] | 0) == 0 ? 1036 : b + 268 | 0;break;
            } else {
              q = b + 252 | 0;break;
            }
          } else q = b + 204 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
              {
                r = T(T(T(g[q >> 2]) * m) / T(100.0));break;
              }case 1:
              {
                r = T(g[q >> 2]);break;
              }default:
              r = T(t);}s = T(Fl(r, T(0.0)));
        }if (!x ? (Z = T(g[b + 308 >> 2]), Z >= T(0.0)) : 0) r = Z;else {
          do if (!(c[b + 280 >> 2] | 0)) {
            if (!(c[b + 328 >> 2] | 0)) {
              q = (c[b + 344 >> 2] | 0) == 0 ? 1036 : b + 340 | 0;break;
            } else {
              q = b + 324 | 0;break;
            }
          } else q = b + 276 | 0; while (0);r = T(Fl(T(g[q >> 2]), T(0.0)));
        }u = T(s + r);switch (y | 0) {case 1:
            {
              s = T(g[Jb >> 2]);r = s;eb = 597;break;
            }case 2:
            {
              s = T(g[Jb >> 2]);r = T(T(s * m) / T(100.0));eb = 597;break;
            }default:
            eb = 601;}r: do if ((eb | 0) == 597) {
          if (!(r >= T(0.0))) {
            eb = 601;break;
          }switch (y | 0) {case 2:
              {
                s = T(T(s * m) / T(100.0));break r;
              }case 1:
              break r;default:
              {
                s = T(t);break r;
              }}
        } while (0);if ((eb | 0) == 601) {
          do if (!(c[b + 224 >> 2] | 0)) {
            if (!(c[b + 256 >> 2] | 0)) {
              q = (c[b + 272 >> 2] | 0) == 0 ? 1036 : b + 268 | 0;break;
            } else {
              q = b + 252 | 0;break;
            }
          } else q = b + 220 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
              {
                r = T(T(T(g[q >> 2]) * m) / T(100.0));break;
              }case 1:
              {
                r = T(g[q >> 2]);break;
              }default:
              r = T(t);}s = T(Fl(r, T(0.0)));
        }if (!h ? (aa = T(g[b + 316 >> 2]), aa >= T(0.0)) : 0) r = aa;else {
          do if (!(c[b + 296 >> 2] | 0)) {
            if (!(c[b + 328 >> 2] | 0)) {
              q = (c[b + 344 >> 2] | 0) == 0 ? 1036 : b + 340 | 0;break;
            } else {
              q = b + 324 | 0;break;
            }
          } else q = b + 292 | 0; while (0);r = T(Fl(T(g[q >> 2]), T(0.0)));
        }g[b + 908 >> 2] = T(Fl(D, T(u + T(s + r))));u = T(f - E);u = (k | 2 | 0) == 2 ? F : u;q = b + 372 | 0;switch (c[b + 376 >> 2] | 0) {case 2:
            {
              s = T(T(T(g[q >> 2]) * n) / T(100.0));break;
            }case 1:
            {
              s = T(g[q >> 2]);break;
            }default:
            s = T(t);}q = b + 388 | 0;switch (c[b + 392 >> 2] | 0) {case 2:
            {
              r = T(T(T(g[q >> 2]) * n) / T(100.0));break;
            }case 1:
            {
              r = T(g[q >> 2]);break;
            }default:
            r = T(t);}bc = r < u & (r >= T(0.0) & ((g[j >> 2] = r, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041);u = bc ? r : u;bc = s >= T(0.0) & ((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041 & u < s;u = bc ? s : u;do if (z) {
          if (!(c[b + 264 >> 2] | 0)) {
            q = (c[b + 272 >> 2] | 0) == 0 ? 1036 : b + 268 | 0;break;
          } else {
            q = b + 260 | 0;break;
          }
        } else q = b + 212 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
            {
              r = T(T(T(g[q >> 2]) * m) / T(100.0));break;
            }case 1:
            {
              r = T(g[q >> 2]);break;
            }default:
            r = T(t);}r = T(Fl(r, T(0.0)));do if (A) {
          if (!(c[b + 336 >> 2] | 0)) {
            q = (c[b + 344 >> 2] | 0) == 0 ? 1036 : b + 340 | 0;break;
          } else {
            q = b + 332 | 0;break;
          }
        } else q = b + 284 | 0; while (0);s = T(r + T(Fl(T(g[q >> 2]), T(0.0))));do if (v) {
          if (!(c[b + 264 >> 2] | 0)) {
            q = (c[b + 272 >> 2] | 0) == 0 ? 1036 : b + 268 | 0;break;
          } else {
            q = b + 260 | 0;break;
          }
        } else q = b + 228 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
            {
              r = T(T(T(g[q >> 2]) * m) / T(100.0));break;
            }case 1:
            {
              r = T(g[q >> 2]);break;
            }default:
            r = T(t);}r = T(Fl(r, T(0.0)));do if (w) {
          if (!(c[b + 336 >> 2] | 0)) {
            q = (c[b + 344 >> 2] | 0) == 0 ? 1036 : b + 340 | 0;break;
          } else {
            q = b + 332 | 0;break;
          }
        } else q = b + 300 | 0; while (0);g[b + 912 >> 2] = T(Fl(u, T(s + T(r + T(Fl(T(g[q >> 2]), T(0.0)))))));l = cc;return;
      }do if (!o) {
        h = (i | 0) == 2;if ((!(e <= T(0.0) & h) ? !(f <= T(0.0) & (k | 0) == 2) : 0) ? !((i | 0) == 1 & (k | 0) == 1) : 0) break;do if (!(c[W >> 2] | 0)) {
          if (!(c[b + 120 >> 2] | 0)) {
            q = (c[b + 128 >> 2] | 0) == 0 ? 1036 : b + 124 | 0;break;
          } else {
            q = b + 116 | 0;break;
          }
        } else q = b + 68 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 3:
            {
              s = T(0.0);break;
            }case 2:
            {
              s = T(T(T(g[q >> 2]) * m) / T(100.0));break;
            }case 1:
            {
              s = T(g[q >> 2]);break;
            }default:
            s = T(t);}do if (!(c[ba >> 2] | 0)) {
          if (!(c[b + 120 >> 2] | 0)) {
            q = (c[b + 128 >> 2] | 0) == 0 ? 1036 : b + 124 | 0;break;
          } else {
            q = b + 116 | 0;break;
          }
        } else q = b + 84 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 3:
            {
              r = T(0.0);break;
            }case 2:
            {
              r = T(T(T(g[q >> 2]) * m) / T(100.0));break;
            }case 1:
            {
              r = T(g[q >> 2]);break;
            }default:
            r = T(t);}E = T(s + r);do if (!(c[X >> 2] | 0)) {
          if (c[b + 64 >> 2] | 0) {
            q = b + 60 | 0;break;
          }if (!(c[b + 112 >> 2] | 0)) {
            q = (c[b + 128 >> 2] | 0) == 0 ? 1036 : b + 124 | 0;break;
          } else {
            q = b + 108 | 0;break;
          }
        } else q = b + 92 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 3:
            {
              s = T(0.0);break;
            }case 2:
            {
              s = T(T(T(g[q >> 2]) * m) / T(100.0));break;
            }case 1:
            {
              s = T(g[q >> 2]);break;
            }default:
            s = T(t);}do if (!(c[ca >> 2] | 0)) {
          if (c[b + 80 >> 2] | 0) {
            q = b + 76 | 0;break;
          }if (!(c[b + 112 >> 2] | 0)) {
            q = (c[b + 128 >> 2] | 0) == 0 ? 1036 : b + 124 | 0;break;
          } else {
            q = b + 108 | 0;break;
          }
        } else q = b + 100 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 3:
            {
              r = T(0.0);break;
            }case 2:
            {
              r = T(T(T(g[q >> 2]) * m) / T(100.0));break;
            }case 1:
            {
              r = T(g[q >> 2]);break;
            }default:
            r = T(t);}q = Q | e < T(0.0) & h;u = T(e - T(s + r));u = q ? T(0.0) : u;q = b + 364 | 0;switch (c[b + 368 >> 2] | 0) {case 2:
            {
              s = T(T(T(g[q >> 2]) * m) / T(100.0));break;
            }case 1:
            {
              s = T(g[q >> 2]);break;
            }default:
            s = T(t);}q = b + 380 | 0;switch (c[b + 384 >> 2] | 0) {case 2:
            {
              r = T(T(T(g[q >> 2]) * m) / T(100.0));break;
            }case 1:
            {
              r = T(g[q >> 2]);break;
            }default:
            r = T(t);}q = r < u & (r >= T(0.0) & ((g[j >> 2] = r, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041);D = q ? r : u;q = s >= T(0.0) & ((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041 & D < s;D = q ? s : D;q = c[Cb >> 2] | 0;switch (q | 0) {case 1:
            {
              s = T(g[Hb >> 2]);r = s;eb = 704;break;
            }case 2:
            {
              s = T(g[Hb >> 2]);r = T(T(s * m) / T(100.0));eb = 704;break;
            }default:
            eb = 708;}s: do if ((eb | 0) == 704) {
          if (!(r >= T(0.0))) {
            eb = 708;break;
          }switch (q | 0) {case 2:
              {
                s = T(T(s * m) / T(100.0));break s;
              }case 1:
              break s;default:
              {
                s = T(t);break s;
              }}
        } while (0);if ((eb | 0) == 708) {
          do if (!(c[b + 208 >> 2] | 0)) {
            if (!(c[b + 256 >> 2] | 0)) {
              q = (c[b + 272 >> 2] | 0) == 0 ? 1036 : b + 268 | 0;break;
            } else {
              q = b + 252 | 0;break;
            }
          } else q = b + 204 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
              {
                r = T(T(T(g[q >> 2]) * m) / T(100.0));break;
              }case 1:
              {
                r = T(g[q >> 2]);break;
              }default:
              r = T(t);}s = T(Fl(r, T(0.0)));
        }if ((c[_b >> 2] | 0) != 0 ? (J = T(g[b + 308 >> 2]), J >= T(0.0)) : 0) r = J;else {
          do if (!(c[b + 280 >> 2] | 0)) {
            if (!(c[b + 328 >> 2] | 0)) {
              q = (c[b + 344 >> 2] | 0) == 0 ? 1036 : b + 340 | 0;break;
            } else {
              q = b + 324 | 0;break;
            }
          } else q = b + 276 | 0; while (0);r = T(Fl(T(g[q >> 2]), T(0.0)));
        }u = T(s + r);q = c[Gb >> 2] | 0;switch (q | 0) {case 1:
            {
              s = T(g[Jb >> 2]);r = s;eb = 728;break;
            }case 2:
            {
              s = T(g[Jb >> 2]);r = T(T(s * m) / T(100.0));eb = 728;break;
            }default:
            eb = 732;}t: do if ((eb | 0) == 728) {
          if (!(r >= T(0.0))) {
            eb = 732;break;
          }switch (q | 0) {case 2:
              {
                s = T(T(s * m) / T(100.0));break t;
              }case 1:
              break t;default:
              {
                s = T(t);break t;
              }}
        } while (0);if ((eb | 0) == 732) {
          do if (!(c[b + 224 >> 2] | 0)) {
            if (!(c[b + 256 >> 2] | 0)) {
              q = (c[b + 272 >> 2] | 0) == 0 ? 1036 : b + 268 | 0;break;
            } else {
              q = b + 252 | 0;break;
            }
          } else q = b + 220 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
              {
                r = T(T(T(g[q >> 2]) * m) / T(100.0));break;
              }case 1:
              {
                r = T(g[q >> 2]);break;
              }default:
              r = T(t);}s = T(Fl(r, T(0.0)));
        }if ((c[$b >> 2] | 0) != 0 ? (P = T(g[b + 316 >> 2]), P >= T(0.0)) : 0) r = P;else {
          do if (!(c[b + 296 >> 2] | 0)) {
            if (!(c[b + 328 >> 2] | 0)) {
              q = (c[b + 344 >> 2] | 0) == 0 ? 1036 : b + 340 | 0;break;
            } else {
              q = b + 324 | 0;break;
            }
          } else q = b + 292 | 0; while (0);r = T(Fl(T(g[q >> 2]), T(0.0)));
        }g[b + 908 >> 2] = T(Fl(D, T(u + T(s + r))));u = T(f - E);q = U | f < T(0.0) & (k | 0) == 2;u = q ? T(0.0) : u;q = b + 372 | 0;switch (c[b + 376 >> 2] | 0) {case 2:
            {
              s = T(T(T(g[q >> 2]) * n) / T(100.0));break;
            }case 1:
            {
              s = T(g[q >> 2]);break;
            }default:
            s = T(t);}q = b + 388 | 0;switch (c[b + 392 >> 2] | 0) {case 2:
            {
              r = T(T(T(g[q >> 2]) * n) / T(100.0));break;
            }case 1:
            {
              r = T(g[q >> 2]);break;
            }default:
            r = T(t);}$b = r < u & (r >= T(0.0) & ((g[j >> 2] = r, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041);u = $b ? r : u;$b = s >= T(0.0) & ((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041 & u < s;u = $b ? s : u;do if (!(c[Bb >> 2] | 0)) {
          if (!(c[b + 264 >> 2] | 0)) {
            q = (c[b + 272 >> 2] | 0) == 0 ? 1036 : b + 268 | 0;break;
          } else {
            q = b + 260 | 0;break;
          }
        } else q = b + 212 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
            {
              r = T(T(T(g[q >> 2]) * m) / T(100.0));break;
            }case 1:
            {
              r = T(g[q >> 2]);break;
            }default:
            r = T(t);}r = T(Fl(r, T(0.0)));do if (!(c[ac >> 2] | 0)) {
          if (!(c[b + 336 >> 2] | 0)) {
            q = (c[b + 344 >> 2] | 0) == 0 ? 1036 : b + 340 | 0;break;
          } else {
            q = b + 332 | 0;break;
          }
        } else q = b + 284 | 0; while (0);s = T(r + T(Fl(T(g[q >> 2]), T(0.0))));do if (!(c[Db >> 2] | 0)) {
          if (!(c[b + 264 >> 2] | 0)) {
            q = (c[b + 272 >> 2] | 0) == 0 ? 1036 : b + 268 | 0;break;
          } else {
            q = b + 260 | 0;break;
          }
        } else q = b + 228 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
            {
              r = T(T(T(g[q >> 2]) * m) / T(100.0));break;
            }case 1:
            {
              r = T(g[q >> 2]);break;
            }default:
            r = T(t);}r = T(Fl(r, T(0.0)));do if (!(c[bc >> 2] | 0)) {
          if (!(c[b + 336 >> 2] | 0)) {
            q = (c[b + 344 >> 2] | 0) == 0 ? 1036 : b + 340 | 0;break;
          } else {
            q = b + 332 | 0;break;
          }
        } else q = b + 300 | 0; while (0);g[b + 912 >> 2] = T(Fl(u, T(s + T(r + T(Fl(T(g[q >> 2]), T(0.0)))))));l = cc;return;
      } while (0);fb = b + 508 | 0;a[fb >> 0] = 0;Mb = b + 4 | 0;q = c[Mb >> 2] | 0;u: do if (Tb) {
        switch (q | 0) {case 2:
            {
              q = 3;h = 3;eb = 786;break u;
            }case 3:
            break;default:
            {
              eb = 785;break u;
            }}q = 2;h = 3;eb = 786;
      } else eb = 785; while (0);if ((eb | 0) == 785) {
        h = q | 1;if ((h | 0) == 1) {
          Nb = q;tb = 1;Ob = Rb;
        } else eb = 786;
      }if ((eb | 0) == 786) {
        Nb = q;tb = h;Ob = 0;
      }Ab = (tb | 0) == 3;Kb = b + 8 | 0;cb = c[Kb >> 2] | 0;Lb = b + 28 | 0;db = (c[Lb >> 2] | 0) != 0;ub = Ab ? m : n;zb = Ab ? n : m;v: do if (Ab) {
        q = c[Cb >> 2] | 0;switch (q | 0) {case 1:
            {
              r = T(g[Hb >> 2]);s = r;break;
            }case 2:
            {
              r = T(g[Hb >> 2]);s = T(T(r * m) / T(100.0));break;
            }default:
            {
              eb = 795;break v;
            }}if (s >= T(0.0)) switch (q | 0) {case 2:
            {
              r = T(T(r * m) / T(100.0));eb = 810;break v;
            }case 1:
            {
              eb = 810;break v;
            }default:
            {
              r = T(t);eb = 810;break v;
            }} else eb = 795;
      } else eb = 795; while (0);if ((eb | 0) == 795) {
        q = c[1068 + (Nb << 2) >> 2] | 0;w: do if (!(c[b + 204 + (q << 3) + 4 >> 2] | 0)) {
          do if ((q | 2 | 0) == 3) {
            if (!(c[b + 264 >> 2] | 0)) break;q = b + 260 | 0;break w;
          } while (0);x: do switch (q | 0) {case 0:case 2:case 4:case 5:
              {
                if (!(c[b + 256 >> 2] | 0)) break x;q = b + 252 | 0;break w;
              }default:
              {}} while (0);if (!(c[b + 272 >> 2] | 0)) {
            q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
          } else {
            q = b + 268 | 0;break;
          }
        } else q = b + 204 + (q << 3) | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
            {
              r = T(T(T(g[q >> 2]) * m) / T(100.0));break;
            }case 1:
            {
              r = T(g[q >> 2]);break;
            }default:
            r = T(t);}r = T(Fl(r, T(0.0)));if (Ab) eb = 810;else eb = 813;
      }if ((eb | 0) == 810) if ((c[_b >> 2] | 0) != 0 ? (M = T(g[b + 308 >> 2]), M >= T(0.0)) : 0) {
        r = T(r + M);eb = 825;
      } else eb = 813;if ((eb | 0) == 813) {
        q = c[1068 + (Nb << 2) >> 2] | 0;y: do if (!(c[b + 276 + (q << 3) + 4 >> 2] | 0)) {
          do if ((q | 2 | 0) == 3) {
            if (!(c[b + 336 >> 2] | 0)) break;q = b + 332 | 0;break y;
          } while (0);z: do switch (q | 0) {case 0:case 2:case 4:case 5:
              {
                if (!(c[b + 328 >> 2] | 0)) break z;q = b + 324 | 0;break y;
              }default:
              {}} while (0);if (!(c[b + 344 >> 2] | 0)) {
            q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
          } else {
            q = b + 340 | 0;break;
          }
        } else q = b + 276 + (q << 3) | 0; while (0);r = T(r + T(Fl(T(g[q >> 2]), T(0.0))));if (Ab) eb = 825;else eb = 832;
      }A: do if ((eb | 0) == 825) {
        q = c[Gb >> 2] | 0;switch (q | 0) {case 1:
            {
              s = T(g[Jb >> 2]);u = s;break;
            }case 2:
            {
              s = T(g[Jb >> 2]);u = T(T(s * m) / T(100.0));break;
            }default:
            {
              eb = 832;break A;
            }}if (!(u >= T(0.0))) eb = 832;else switch (q | 0) {case 2:
            {
              s = T(T(s * m) / T(100.0));eb = 847;break A;
            }case 1:
            {
              eb = 847;break A;
            }default:
            {
              s = T(t);eb = 847;break A;
            }}
      } while (0);if ((eb | 0) == 832) {
        q = c[1084 + (Nb << 2) >> 2] | 0;B: do if (!(c[b + 204 + (q << 3) + 4 >> 2] | 0)) {
          do if ((q | 2 | 0) == 3) {
            if (!(c[b + 264 >> 2] | 0)) break;q = b + 260 | 0;break B;
          } while (0);C: do switch (q | 0) {case 0:case 2:case 4:case 5:
              {
                if (!(c[b + 256 >> 2] | 0)) break C;q = b + 252 | 0;break B;
              }default:
              {}} while (0);if (!(c[b + 272 >> 2] | 0)) {
            q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
          } else {
            q = b + 268 | 0;break;
          }
        } else q = b + 204 + (q << 3) | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
            {
              s = T(T(T(g[q >> 2]) * m) / T(100.0));break;
            }case 1:
            {
              s = T(g[q >> 2]);break;
            }default:
            s = T(t);}s = T(Fl(s, T(0.0)));if (Ab) eb = 847;else eb = 849;
      }if ((eb | 0) == 847) if ((c[$b >> 2] | 0) != 0 ? (V = T(g[b + 316 >> 2]), V >= T(0.0)) : 0) u = V;else eb = 849;if ((eb | 0) == 849) {
        q = c[1084 + (Nb << 2) >> 2] | 0;D: do if (!(c[b + 276 + (q << 3) + 4 >> 2] | 0)) {
          do if ((q | 2 | 0) == 3) {
            if (!(c[b + 336 >> 2] | 0)) break;q = b + 332 | 0;break D;
          } while (0);E: do switch (q | 0) {case 0:case 2:case 4:case 5:
              {
                if (!(c[b + 328 >> 2] | 0)) break E;q = b + 324 | 0;break D;
              }default:
              {}} while (0);if (!(c[b + 344 >> 2] | 0)) {
            q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
          } else {
            q = b + 340 | 0;break;
          }
        } else q = b + 276 + (q << 3) | 0; while (0);u = T(Fl(T(g[q >> 2]), T(0.0)));
      }bb = T(s + u);vb = Ob | 1;xb = (vb | 0) == 3;F: do if (xb) {
        q = c[Cb >> 2] | 0;switch (q | 0) {case 1:
            {
              s = T(g[Hb >> 2]);u = s;break;
            }case 2:
            {
              s = T(g[Hb >> 2]);u = T(T(s * m) / T(100.0));break;
            }default:
            {
              eb = 869;break F;
            }}if (u >= T(0.0)) switch (q | 0) {case 2:
            {
              s = T(T(s * m) / T(100.0));eb = 884;break F;
            }case 1:
            {
              eb = 884;break F;
            }default:
            {
              s = T(t);eb = 884;break F;
            }} else eb = 869;
      } else eb = 869; while (0);if ((eb | 0) == 869) {
        q = c[1068 + (Ob << 2) >> 2] | 0;G: do if (!(c[b + 204 + (q << 3) + 4 >> 2] | 0)) {
          do if ((q | 2 | 0) == 3) {
            if (!(c[b + 264 >> 2] | 0)) break;q = b + 260 | 0;break G;
          } while (0);H: do switch (q | 0) {case 0:case 2:case 4:case 5:
              {
                if (!(c[b + 256 >> 2] | 0)) break H;q = b + 252 | 0;break G;
              }default:
              {}} while (0);if (!(c[b + 272 >> 2] | 0)) {
            q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
          } else {
            q = b + 268 | 0;break;
          }
        } else q = b + 204 + (q << 3) | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
            {
              s = T(T(T(g[q >> 2]) * m) / T(100.0));break;
            }case 1:
            {
              s = T(g[q >> 2]);break;
            }default:
            s = T(t);}s = T(Fl(s, T(0.0)));if (xb) eb = 884;else eb = 886;
      }if ((eb | 0) == 884) if ((c[_b >> 2] | 0) != 0 ? ($ = T(g[b + 308 >> 2]), $ >= T(0.0)) : 0) u = $;else eb = 886;if ((eb | 0) == 886) {
        q = c[1068 + (Ob << 2) >> 2] | 0;I: do if (!(c[b + 276 + (q << 3) + 4 >> 2] | 0)) {
          do if ((q | 2 | 0) == 3) {
            if (!(c[b + 336 >> 2] | 0)) break;q = b + 332 | 0;break I;
          } while (0);J: do switch (q | 0) {case 0:case 2:case 4:case 5:
              {
                if (!(c[b + 328 >> 2] | 0)) break J;q = b + 324 | 0;break I;
              }default:
              {}} while (0);if (!(c[b + 344 >> 2] | 0)) {
            q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
          } else {
            q = b + 340 | 0;break;
          }
        } else q = b + 276 + (q << 3) | 0; while (0);u = T(Fl(T(g[q >> 2]), T(0.0)));
      }Ya = T(s + u);K: do if (Ab) {
        q = c[Cb >> 2] | 0;switch (q | 0) {case 1:
            {
              s = T(g[Hb >> 2]);u = s;break;
            }case 2:
            {
              s = T(g[Hb >> 2]);u = T(T(s * m) / T(100.0));break;
            }default:
            {
              eb = 906;break K;
            }}if (!(u >= T(0.0))) {
          eb = 906;break;
        }switch (q | 0) {case 2:
            {
              s = T(T(s * m) / T(100.0));eb = 921;break K;
            }case 1:
            {
              eb = 921;break K;
            }default:
            {
              s = T(t);eb = 921;break K;
            }}
      } else eb = 906; while (0);if ((eb | 0) == 906) {
        q = c[1068 + (Nb << 2) >> 2] | 0;L: do if (!(c[b + 204 + (q << 3) + 4 >> 2] | 0)) {
          do if ((q | 2 | 0) == 3) {
            if (!(c[b + 264 >> 2] | 0)) break;q = b + 260 | 0;break L;
          } while (0);M: do switch (q | 0) {case 0:case 2:case 4:case 5:
              {
                if (!(c[b + 256 >> 2] | 0)) break M;q = b + 252 | 0;break L;
              }default:
              {}} while (0);if (!(c[b + 272 >> 2] | 0)) {
            q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
          } else {
            q = b + 268 | 0;break;
          }
        } else q = b + 204 + (q << 3) | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
            {
              s = T(T(T(g[q >> 2]) * m) / T(100.0));break;
            }case 1:
            {
              s = T(g[q >> 2]);break;
            }default:
            s = T(t);}s = T(Fl(s, T(0.0)));if (Ab) eb = 921;else eb = 924;
      }do if ((eb | 0) == 921) {
        if (!(c[_b >> 2] | 0)) {
          eb = 924;break;
        }u = T(g[b + 308 >> 2]);if (!(u >= T(0.0))) {
          eb = 924;break;
        }s = T(s + u);eb = 936;
      } while (0);if ((eb | 0) == 924) {
        q = c[1068 + (Nb << 2) >> 2] | 0;N: do if (!(c[b + 276 + (q << 3) + 4 >> 2] | 0)) {
          do if ((q | 2 | 0) == 3) {
            if (!(c[b + 336 >> 2] | 0)) break;q = b + 332 | 0;break N;
          } while (0);O: do switch (q | 0) {case 0:case 2:case 4:case 5:
              {
                if (!(c[b + 328 >> 2] | 0)) break O;q = b + 324 | 0;break N;
              }default:
              {}} while (0);if (!(c[b + 344 >> 2] | 0)) {
            q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
          } else {
            q = b + 340 | 0;break;
          }
        } else q = b + 276 + (q << 3) | 0; while (0);s = T(s + T(Fl(T(g[q >> 2]), T(0.0))));if (Ab) eb = 936;else eb = 943;
      }P: do if ((eb | 0) == 936) {
        q = c[Gb >> 2] | 0;switch (q | 0) {case 1:
            {
              u = T(g[Jb >> 2]);D = u;break;
            }case 2:
            {
              u = T(g[Jb >> 2]);D = T(T(u * m) / T(100.0));break;
            }default:
            {
              eb = 943;break P;
            }}if (!(D >= T(0.0))) {
          eb = 943;break;
        }switch (q | 0) {case 2:
            {
              u = T(T(u * m) / T(100.0));eb = 958;break P;
            }case 1:
            {
              eb = 958;break P;
            }default:
            {
              u = T(t);eb = 958;break P;
            }}
      } while (0);if ((eb | 0) == 943) {
        q = c[1084 + (Nb << 2) >> 2] | 0;Q: do if (!(c[b + 204 + (q << 3) + 4 >> 2] | 0)) {
          do if ((q | 2 | 0) == 3) {
            if (!(c[b + 264 >> 2] | 0)) break;q = b + 260 | 0;break Q;
          } while (0);R: do switch (q | 0) {case 0:case 2:case 4:case 5:
              {
                if (!(c[b + 256 >> 2] | 0)) break R;q = b + 252 | 0;break Q;
              }default:
              {}} while (0);if (!(c[b + 272 >> 2] | 0)) {
            q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
          } else {
            q = b + 268 | 0;break;
          }
        } else q = b + 204 + (q << 3) | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
            {
              u = T(T(T(g[q >> 2]) * m) / T(100.0));break;
            }case 1:
            {
              u = T(g[q >> 2]);break;
            }default:
            u = T(t);}u = T(Fl(u, T(0.0)));if (Ab) eb = 958;else eb = 960;
      }do if ((eb | 0) == 958) {
        if (!(c[$b >> 2] | 0)) {
          eb = 960;break;
        }D = T(g[b + 316 >> 2]);if (!(D >= T(0.0))) eb = 960;
      } while (0);if ((eb | 0) == 960) {
        q = c[1084 + (Nb << 2) >> 2] | 0;S: do if (!(c[b + 276 + (q << 3) + 4 >> 2] | 0)) {
          do if ((q | 2 | 0) == 3) {
            if (!(c[b + 336 >> 2] | 0)) break;q = b + 332 | 0;break S;
          } while (0);T: do switch (q | 0) {case 0:case 2:case 4:case 5:
              {
                if (!(c[b + 328 >> 2] | 0)) break T;q = b + 324 | 0;break S;
              }default:
              {}} while (0);if (!(c[b + 344 >> 2] | 0)) {
            q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
          } else {
            q = b + 340 | 0;break;
          }
        } else q = b + 276 + (q << 3) | 0; while (0);D = T(Fl(T(g[q >> 2]), T(0.0)));
      }hb = T(s + T(u + D));U: do if (xb) {
        q = c[Cb >> 2] | 0;switch (q | 0) {case 1:
            {
              s = T(g[Hb >> 2]);u = s;break;
            }case 2:
            {
              s = T(g[Hb >> 2]);u = T(T(s * m) / T(100.0));break;
            }default:
            {
              eb = 980;break U;
            }}if (!(u >= T(0.0))) {
          eb = 980;break;
        }switch (q | 0) {case 2:
            {
              s = T(T(s * m) / T(100.0));eb = 995;break U;
            }case 1:
            {
              eb = 995;break U;
            }default:
            {
              s = T(t);eb = 995;break U;
            }}
      } else eb = 980; while (0);if ((eb | 0) == 980) {
        q = c[1068 + (Ob << 2) >> 2] | 0;V: do if (!(c[b + 204 + (q << 3) + 4 >> 2] | 0)) {
          do if ((q | 2 | 0) == 3) {
            if (!(c[b + 264 >> 2] | 0)) break;q = b + 260 | 0;break V;
          } while (0);W: do switch (q | 0) {case 0:case 2:case 4:case 5:
              {
                if (!(c[b + 256 >> 2] | 0)) break W;q = b + 252 | 0;break V;
              }default:
              {}} while (0);if (!(c[b + 272 >> 2] | 0)) {
            q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
          } else {
            q = b + 268 | 0;break;
          }
        } else q = b + 204 + (q << 3) | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
            {
              s = T(T(T(g[q >> 2]) * m) / T(100.0));break;
            }case 1:
            {
              s = T(g[q >> 2]);break;
            }default:
            s = T(t);}s = T(Fl(s, T(0.0)));if (xb) eb = 995;else eb = 998;
      }do if ((eb | 0) == 995) {
        if (!(c[_b >> 2] | 0)) {
          eb = 998;break;
        }u = T(g[b + 308 >> 2]);if (!(u >= T(0.0))) {
          eb = 998;break;
        }s = T(s + u);eb = 1010;
      } while (0);if ((eb | 0) == 998) {
        q = c[1068 + (Ob << 2) >> 2] | 0;X: do if (!(c[b + 276 + (q << 3) + 4 >> 2] | 0)) {
          do if ((q | 2 | 0) == 3) {
            if (!(c[b + 336 >> 2] | 0)) break;q = b + 332 | 0;break X;
          } while (0);Y: do switch (q | 0) {case 0:case 2:case 4:case 5:
              {
                if (!(c[b + 328 >> 2] | 0)) break Y;q = b + 324 | 0;break X;
              }default:
              {}} while (0);if (!(c[b + 344 >> 2] | 0)) {
            q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
          } else {
            q = b + 340 | 0;break;
          }
        } else q = b + 276 + (q << 3) | 0; while (0);s = T(s + T(Fl(T(g[q >> 2]), T(0.0))));if (xb) eb = 1010;else eb = 1017;
      }Z: do if ((eb | 0) == 1010) {
        q = c[Gb >> 2] | 0;switch (q | 0) {case 1:
            {
              u = T(g[Jb >> 2]);D = u;break;
            }case 2:
            {
              u = T(g[Jb >> 2]);D = T(T(u * m) / T(100.0));break;
            }default:
            {
              eb = 1017;break Z;
            }}if (!(D >= T(0.0))) {
          eb = 1017;break;
        }switch (q | 0) {case 2:
            {
              u = T(T(u * m) / T(100.0));eb = 1032;break Z;
            }case 1:
            {
              eb = 1032;break Z;
            }default:
            {
              u = T(t);eb = 1032;break Z;
            }}
      } while (0);if ((eb | 0) == 1017) {
        q = c[1084 + (Ob << 2) >> 2] | 0;_: do if (!(c[b + 204 + (q << 3) + 4 >> 2] | 0)) {
          do if ((q | 2 | 0) == 3) {
            if (!(c[b + 264 >> 2] | 0)) break;q = b + 260 | 0;break _;
          } while (0);$: do switch (q | 0) {case 0:case 2:case 4:case 5:
              {
                if (!(c[b + 256 >> 2] | 0)) break $;q = b + 252 | 0;break _;
              }default:
              {}} while (0);if (!(c[b + 272 >> 2] | 0)) {
            q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
          } else {
            q = b + 268 | 0;break;
          }
        } else q = b + 204 + (q << 3) | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
            {
              u = T(T(T(g[q >> 2]) * m) / T(100.0));break;
            }case 1:
            {
              u = T(g[q >> 2]);break;
            }default:
            u = T(t);}u = T(Fl(u, T(0.0)));if (xb) eb = 1032;else eb = 1034;
      }do if ((eb | 0) == 1032) {
        if (!(c[$b >> 2] | 0)) {
          eb = 1034;break;
        }D = T(g[b + 316 >> 2]);if (!(D >= T(0.0))) eb = 1034;
      } while (0);if ((eb | 0) == 1034) {
        q = c[1084 + (Ob << 2) >> 2] | 0;aa: do if (!(c[b + 276 + (q << 3) + 4 >> 2] | 0)) {
          do if ((q | 2 | 0) == 3) {
            if (!(c[b + 336 >> 2] | 0)) break;q = b + 332 | 0;break aa;
          } while (0);ba: do switch (q | 0) {case 0:case 2:case 4:case 5:
              {
                if (!(c[b + 328 >> 2] | 0)) break ba;q = b + 324 | 0;break aa;
              }default:
              {}} while (0);if (!(c[b + 344 >> 2] | 0)) {
            q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
          } else {
            q = b + 340 | 0;break;
          }
        } else q = b + 276 + (q << 3) | 0; while (0);D = T(Fl(T(g[q >> 2]), T(0.0)));
      }jb = T(s + T(u + D));sa = Ab ? i : k;ib = Ab ? k : i;I = Ab ? hb : jb;J = Ab ? jb : hb;do if (!(c[X >> 2] | 0)) {
        if (c[b + 64 >> 2] | 0) {
          q = b + 60 | 0;break;
        }if (!(c[b + 112 >> 2] | 0)) {
          q = (c[b + 128 >> 2] | 0) == 0 ? 1036 : b + 124 | 0;break;
        } else {
          q = b + 108 | 0;break;
        }
      } else q = b + 92 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 3:
          {
            u = T(0.0);break;
          }case 2:
          {
            u = T(T(T(g[q >> 2]) * m) / T(100.0));break;
          }case 1:
          {
            u = T(g[q >> 2]);break;
          }default:
          u = T(t);}do if (!(c[ca >> 2] | 0)) {
        if (c[b + 80 >> 2] | 0) {
          q = b + 76 | 0;break;
        }if (!(c[b + 112 >> 2] | 0)) {
          q = (c[b + 128 >> 2] | 0) == 0 ? 1036 : b + 124 | 0;break;
        } else {
          q = b + 108 | 0;break;
        }
      } else q = b + 100 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 3:
          {
            s = T(0.0);break;
          }case 2:
          {
            s = T(T(T(g[q >> 2]) * m) / T(100.0));break;
          }case 1:
          {
            s = T(g[q >> 2]);break;
          }default:
          s = T(t);}H = T(u + s);do if (!(c[W >> 2] | 0)) {
        if (!(c[b + 120 >> 2] | 0)) {
          q = (c[b + 128 >> 2] | 0) == 0 ? 1036 : b + 124 | 0;break;
        } else {
          q = b + 116 | 0;break;
        }
      } else q = b + 68 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 3:
          {
            u = T(0.0);break;
          }case 2:
          {
            u = T(T(T(g[q >> 2]) * m) / T(100.0));break;
          }case 1:
          {
            u = T(g[q >> 2]);break;
          }default:
          u = T(t);}do if (!(c[ba >> 2] | 0)) {
        if (!(c[b + 120 >> 2] | 0)) {
          q = (c[b + 128 >> 2] | 0) == 0 ? 1036 : b + 124 | 0;break;
        } else {
          q = b + 116 | 0;break;
        }
      } else q = b + 84 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 3:
          {
            s = T(0.0);break;
          }case 2:
          {
            s = T(T(T(g[q >> 2]) * m) / T(100.0));break;
          }case 1:
          {
            s = T(g[q >> 2]);break;
          }default:
          s = T(t);}G = T(u + s);Va = b + 364 | 0;Ua = b + 368 | 0;switch (c[Ua >> 2] | 0) {case 2:
          {
            s = T(T(T(g[Va >> 2]) * m) / T(100.0));break;
          }case 1:
          {
            s = T(g[Va >> 2]);break;
          }default:
          s = T(t);}D = T(T(s - H) - I);Wa = b + 380 | 0;Xa = b + 384 | 0;switch (c[Xa >> 2] | 0) {case 2:
          {
            s = T(T(T(g[Wa >> 2]) * m) / T(100.0));break;
          }case 1:
          {
            s = T(g[Wa >> 2]);break;
          }default:
          s = T(t);}u = T(T(s - H) - I);_a = b + 372 | 0;Za = b + 376 | 0;switch (c[Za >> 2] | 0) {case 2:
          {
            s = T(T(T(g[_a >> 2]) * n) / T(100.0));break;
          }case 1:
          {
            s = T(g[_a >> 2]);break;
          }default:
          s = T(t);}F = T(T(s - G) - J);$a = b + 388 | 0;ab = b + 392 | 0;switch (c[ab >> 2] | 0) {case 2:
          {
            s = T(T(T(g[$a >> 2]) * n) / T(100.0));break;
          }case 1:
          {
            s = T(g[$a >> 2]);break;
          }default:
          s = T(t);}E = T(T(s - G) - J);Ra = Ab ? D : F;Sa = Ab ? u : E;e = T(e - H);s = T(e - I);if (((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) Fb = s;else Fb = T(Fl(T(Hl(s, u)), D));f = T(f - G);s = T(f - J);if (((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) Eb = s;else Eb = T(Fl(T(Hl(s, E)), F));J = Ab ? Fb : Eb;gb = Ab ? Eb : Fb;ca: do if ((sa | 0) == 1) {
        q = 0;v = 0;do {
          h = Zb(c[Pb >> 2] | 0, v) | 0;da: do if (q) {
            if (c[h + 24 >> 2] | 0) break;if (!(c[h + 944 >> 2] | 0)) break;s = T(g[h + 44 >> 2]);if (((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) {
              s = T(g[h + 40 >> 2]);if (s > T(0.0) & ((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041) {
                ra = s;eb = 1108;
              }
            } else {
              ra = s;eb = 1108;
            }if ((eb | 0) == 1108 ? (eb = 0, ra != T(0.0)) : 0) {
              q = 0;break ca;
            }s = T(g[h + 48 >> 2]);if (((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) {
              if (a[(c[h + 968 >> 2] | 0) + 2 >> 0] | 0) {
                q = 0;break ca;
              }s = T(g[h + 40 >> 2]);if (!(s < T(0.0) & ((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041)) break;s = T(-s);
            }if (s != T(0.0)) {
              q = 0;break ca;
            }
          } else {
            if (!(c[h + 944 >> 2] | 0)) {
              q = 0;break;
            }s = T(g[h + 44 >> 2]);if (((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) {
              s = T(g[h + 40 >> 2]);if (!(s > T(0.0) & ((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041)) {
                q = 0;break;
              }
            }if (!(s > T(0.0))) {
              q = 0;break;
            }s = T(g[h + 48 >> 2]);do if (((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) {
              if (a[(c[h + 968 >> 2] | 0) + 2 >> 0] | 0) break;s = T(g[h + 40 >> 2]);if (!(s < T(0.0) & ((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041)) {
                q = 0;break da;
              }qa = T(-s);eb = 1122;
            } else {
              qa = s;eb = 1122;
            } while (0);if ((eb | 0) == 1122 ? (eb = 0, !(qa > T(0.0))) : 0) {
              q = 0;break;
            }q = h;
          } while (0);v = v + 1 | 0;
        } while (v >>> 0 < Qb >>> 0);
      } else q = 0; while (0);la = Sb | 0 ? Sb : 1;ma = b + 32 | 0;ia = (g[j >> 2] = Fb, c[j >> 2] | 0) & 2147483647;na = b + 16 | 0;oa = ia >>> 0 > 2139095040;ka = (i | 0) != 1 | oa;ja = (g[j >> 2] = Eb, c[j >> 2] | 0) & 2147483647;pa = ja >>> 0 > 2139095040;fa = (k | 0) != 1 | pa;ja = ja >>> 0 < 2139095041;ia = ia >>> 0 < 2139095041;ga = q + 500 | 0;ha = q + 504 | 0;v = 0;k = 0;G = T(0.0);ea = 0;while (1) {
        da = Zb(c[Pb >> 2] | 0, ea) | 0;if ((c[da + 36 >> 2] | 0) == 1) {
          Od(da);a[da + 977 >> 0] = 1;a[da + 976 >> 0] = 0;s = G;h = k;Ta = v;
        } else {
          S = da + 380 | 0;U = da + 384 | 0;h = c[U >> 2] | 0;do if (h) {
            if ((h | 0) != (c[da + 368 >> 2] | 0)) {
              eb = 1132;break;
            }ra = T(g[S >> 2]);if (T(C(T(ra - T(g[da + 364 >> 2])))) < T(.0000999999974)) h = S;else eb = 1132;
          } else eb = 1132; while (0);if ((eb | 0) == 1132) {
            eb = 0;h = da + 348 | 0;
          }w = da + 984 | 0;c[w >> 2] = h;W = da + 388 | 0;X = da + 392 | 0;h = c[X >> 2] | 0;do if (h) {
            if ((h | 0) != (c[da + 376 >> 2] | 0)) {
              eb = 1136;break;
            }ra = T(g[W >> 2]);if (T(C(T(ra - T(g[da + 372 >> 2])))) < T(.0000999999974)) h = W;else eb = 1136;
          } else eb = 1136; while (0);if ((eb | 0) == 1136) {
            eb = 0;h = da + 356 | 0;
          }x = da + 988 | 0;c[x >> 2] = h;if (o) {
            Ta = c[da >> 2] | 0;Pd(da, (Ta | 0) == 0 ? la : Ta, J, gb, Fb);
          }do if ((c[da + 24 >> 2] | 0) == 1) {
            if (k | 0) c[k + 952 >> 2] = da;c[da + 952 >> 2] = 0;h = da;v = (v | 0) == 0 ? da : v;
          } else {
            if ((da | 0) == (q | 0)) {
              c[ga >> 2] = c[2188];g[ha >> 2] = T(0.0);h = k;break;
            }h = c[Mb >> 2] | 0;ea: do if (Tb) {
              switch (h | 0) {case 2:
                  {
                    ca = 3;break ea;
                  }case 3:
                  break;default:
                  {
                    eb = 1148;break ea;
                  }}ca = 2;
            } else eb = 1148; while (0);if ((eb | 0) == 1148) {
              eb = 0;ca = h;
            }ba = (ca | 1 | 0) == 3;s = ba ? Fb : Eb;fa: do switch (c[da + 56 >> 2] | 0) {case 0:case 3:
                {
                  ra = T(g[da + 40 >> 2]);if (!(ra > T(0.0) & ((g[j >> 2] = ra, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041)) {
                    h = 1116;break fa;
                  }h = a[(c[da + 968 >> 2] | 0) + 2 >> 0] | 0 ? 1116 : 1036;break;
                }default:
                h = da + 52 | 0;} while (0);switch (c[h + 4 >> 2] | 0) {case 2:
                {
                  E = T(T(s * T(g[h >> 2])) / T(100.0));break;
                }case 1:
                {
                  E = T(g[h >> 2]);break;
                }default:
                E = T(t);}w = c[w >> 2] | 0;y = c[w + 4 >> 2] | 0;ga: do switch (y | 0) {case 0:case 3:
                {
                  B = 0;break;
                }case 1:
                {
                  if (T(g[w >> 2]) < T(0.0)) B = 0;else eb = 1159;break;
                }case 2:
                {
                  if (T(g[w >> 2]) < T(0.0)) {
                    B = 0;break ga;
                  }B = ia;break;
                }default:
                eb = 1159;} while (0);if ((eb | 0) == 1159) {
              eb = 0;B = 1;
            }z = c[x >> 2] | 0;A = c[z + 4 >> 2] | 0;ha: do switch (A | 0) {case 0:case 3:
                {
                  L = 0;break;
                }case 1:
                {
                  if (T(g[z >> 2]) < T(0.0)) L = 0;else eb = 1164;break;
                }case 2:
                {
                  if (T(g[z >> 2]) < T(0.0)) {
                    L = 0;break ha;
                  }L = ja;break;
                }default:
                eb = 1164;} while (0);if ((eb | 0) == 1164) {
              eb = 0;L = 1;
            }do if (((g[j >> 2] = E, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) eb = 1245;else {
              if (((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) {
                eb = 1245;break;
              }x = da + 504 | 0;if ((c[x >> 2] & 2147483647) >>> 0 <= 2139095040) {
                if (!(a[c[da + 968 >> 2] >> 0] | 0)) break;if ((c[da + 500 >> 2] | 0) == (c[2188] | 0)) break;
              }ia: do if (ba) {
                h = da + 236 | 0;w = c[da + 240 >> 2] | 0;switch (w | 0) {case 1:
                    {
                      s = T(g[h >> 2]);u = s;break;
                    }case 2:
                    {
                      s = T(g[h >> 2]);u = T(T(Fb * s) / T(100.0));break;
                    }default:
                    {
                      eb = 1178;break ia;
                    }}if (!(u >= T(0.0))) {
                  eb = 1178;break;
                }switch (w | 0) {case 2:
                    {
                      s = T(T(Fb * s) / T(100.0));eb = 1193;break ia;
                    }case 1:
                    {
                      eb = 1193;break ia;
                    }default:
                    {
                      s = T(t);eb = 1193;break ia;
                    }}
              } else eb = 1178; while (0);if ((eb | 0) == 1178) {
                h = c[1068 + (ca << 2) >> 2] | 0;ja: do if (!(c[da + 204 + (h << 3) + 4 >> 2] | 0)) {
                  do if ((h | 2 | 0) == 3) {
                    if (!(c[da + 264 >> 2] | 0)) break;h = da + 260 | 0;break ja;
                  } while (0);ka: do switch (h | 0) {case 0:case 2:case 4:case 5:
                      {
                        if (!(c[da + 256 >> 2] | 0)) break ka;h = da + 252 | 0;break ja;
                      }default:
                      {}} while (0);if (!(c[da + 272 >> 2] | 0)) {
                    h = (h | 1 | 0) == 5 ? 1012 : 1036;break;
                  } else {
                    h = da + 268 | 0;break;
                  }
                } else h = da + 204 + (h << 3) | 0; while (0);switch (c[h + 4 >> 2] | 0) {case 2:
                    {
                      s = T(T(Fb * T(g[h >> 2])) / T(100.0));break;
                    }case 1:
                    {
                      s = T(g[h >> 2]);break;
                    }default:
                    s = T(t);}s = T(Fl(s, T(0.0)));if (ba) eb = 1193;else eb = 1196;
              }do if ((eb | 0) == 1193) {
                if (!(c[da + 312 >> 2] | 0)) {
                  eb = 1196;break;
                }u = T(g[da + 308 >> 2]);if (!(u >= T(0.0))) {
                  eb = 1196;break;
                }s = T(s + u);eb = 1208;
              } while (0);if ((eb | 0) == 1196) {
                h = c[1068 + (ca << 2) >> 2] | 0;la: do if (!(c[da + 276 + (h << 3) + 4 >> 2] | 0)) {
                  do if ((h | 2 | 0) == 3) {
                    if (!(c[da + 336 >> 2] | 0)) break;h = da + 332 | 0;break la;
                  } while (0);ma: do switch (h | 0) {case 0:case 2:case 4:case 5:
                      {
                        if (!(c[da + 328 >> 2] | 0)) break ma;h = da + 324 | 0;break la;
                      }default:
                      {}} while (0);if (!(c[da + 344 >> 2] | 0)) {
                    h = (h | 1 | 0) == 5 ? 1012 : 1036;break;
                  } else {
                    h = da + 340 | 0;break;
                  }
                } else h = da + 276 + (h << 3) | 0; while (0);s = T(s + T(Fl(T(g[h >> 2]), T(0.0))));if (ba) eb = 1208;else eb = 1215;
              }na: do if ((eb | 0) == 1208) {
                h = da + 244 | 0;w = c[da + 248 >> 2] | 0;switch (w | 0) {case 1:
                    {
                      u = T(g[h >> 2]);D = u;break;
                    }case 2:
                    {
                      u = T(g[h >> 2]);D = T(T(Fb * u) / T(100.0));break;
                    }default:
                    {
                      eb = 1215;break na;
                    }}if (!(D >= T(0.0))) {
                  eb = 1215;break;
                }switch (w | 0) {case 2:
                    {
                      u = T(T(Fb * u) / T(100.0));eb = 1230;break na;
                    }case 1:
                    {
                      eb = 1230;break na;
                    }default:
                    {
                      u = T(t);eb = 1230;break na;
                    }}
              } while (0);if ((eb | 0) == 1215) {
                h = c[1084 + (ca << 2) >> 2] | 0;oa: do if (!(c[da + 204 + (h << 3) + 4 >> 2] | 0)) {
                  do if ((h | 2 | 0) == 3) {
                    if (!(c[da + 264 >> 2] | 0)) break;h = da + 260 | 0;break oa;
                  } while (0);pa: do switch (h | 0) {case 0:case 2:case 4:case 5:
                      {
                        if (!(c[da + 256 >> 2] | 0)) break pa;h = da + 252 | 0;break oa;
                      }default:
                      {}} while (0);if (!(c[da + 272 >> 2] | 0)) {
                    h = (h | 1 | 0) == 5 ? 1012 : 1036;break;
                  } else {
                    h = da + 268 | 0;break;
                  }
                } else h = da + 204 + (h << 3) | 0; while (0);switch (c[h + 4 >> 2] | 0) {case 2:
                    {
                      u = T(T(Fb * T(g[h >> 2])) / T(100.0));break;
                    }case 1:
                    {
                      u = T(g[h >> 2]);break;
                    }default:
                    u = T(t);}u = T(Fl(u, T(0.0)));if (ba) eb = 1230;else eb = 1232;
              }do if ((eb | 0) == 1230) {
                eb = 0;if (!(c[da + 320 >> 2] | 0)) {
                  eb = 1232;break;
                }D = T(g[da + 316 >> 2]);if (!(D >= T(0.0))) eb = 1232;
              } while (0);if ((eb | 0) == 1232) {
                eb = 0;h = c[1084 + (ca << 2) >> 2] | 0;qa: do if (!(c[da + 276 + (h << 3) + 4 >> 2] | 0)) {
                  do if ((h | 2 | 0) == 3) {
                    if (!(c[da + 336 >> 2] | 0)) break;h = da + 332 | 0;break qa;
                  } while (0);ra: do switch (h | 0) {case 0:case 2:case 4:case 5:
                      {
                        if (!(c[da + 328 >> 2] | 0)) break ra;h = da + 324 | 0;break qa;
                      }default:
                      {}} while (0);if (!(c[da + 344 >> 2] | 0)) {
                    h = (h | 1 | 0) == 5 ? 1012 : 1036;break;
                  } else {
                    h = da + 340 | 0;break;
                  }
                } else h = da + 276 + (h << 3) | 0; while (0);D = T(Fl(T(g[h >> 2]), T(0.0)));
              }g[x >> 2] = T(Fl(E, T(s + T(u + D))));
            } while (0);do if ((eb | 0) == 1245) {
              eb = 0;K = ba ^ 1;if (!(K | B ^ 1)) {
                switch (y | 0) {case 2:
                    {
                      E = T(T(Fb * T(g[w >> 2])) / T(100.0));break;
                    }case 1:
                    {
                      E = T(g[w >> 2]);break;
                    }default:
                    E = T(t);}h = da + 236 | 0;w = c[da + 240 >> 2] | 0;switch (w | 0) {case 1:
                    {
                      u = T(g[h >> 2]);s = u;eb = 1252;break;
                    }case 2:
                    {
                      u = T(g[h >> 2]);s = T(T(Fb * u) / T(100.0));eb = 1252;break;
                    }default:
                    eb = 1256;}sa: do if ((eb | 0) == 1252) {
                  eb = 0;if (!(s >= T(0.0))) {
                    eb = 1256;break;
                  }switch (w | 0) {case 2:
                      {
                        u = T(T(Fb * u) / T(100.0));break sa;
                      }case 1:
                      break sa;default:
                      {
                        u = T(t);break sa;
                      }}
                } while (0);if ((eb | 0) == 1256) {
                  do if (!(c[da + 208 >> 2] | 0)) {
                    if (!(c[da + 256 >> 2] | 0)) {
                      h = (c[da + 272 >> 2] | 0) == 0 ? 1036 : da + 268 | 0;break;
                    } else {
                      h = da + 252 | 0;break;
                    }
                  } else h = da + 204 | 0; while (0);switch (c[h + 4 >> 2] | 0) {case 2:
                      {
                        s = T(T(Fb * T(g[h >> 2])) / T(100.0));break;
                      }case 1:
                      {
                        s = T(g[h >> 2]);break;
                      }default:
                      s = T(t);}u = T(Fl(s, T(0.0)));
                }if ((c[da + 312 >> 2] | 0) != 0 ? (ta = T(g[da + 308 >> 2]), ta >= T(0.0)) : 0) s = ta;else {
                  do if (!(c[da + 280 >> 2] | 0)) {
                    if (!(c[da + 328 >> 2] | 0)) {
                      h = (c[da + 344 >> 2] | 0) == 0 ? 1036 : da + 340 | 0;break;
                    } else {
                      h = da + 324 | 0;break;
                    }
                  } else h = da + 276 | 0; while (0);s = T(Fl(T(g[h >> 2]), T(0.0)));
                }D = T(u + s);h = da + 244 | 0;w = c[da + 248 >> 2] | 0;switch (w | 0) {case 1:
                    {
                      u = T(g[h >> 2]);s = u;eb = 1276;break;
                    }case 2:
                    {
                      u = T(g[h >> 2]);s = T(T(Fb * u) / T(100.0));eb = 1276;break;
                    }default:
                    eb = 1280;}ta: do if ((eb | 0) == 1276) {
                  eb = 0;if (!(s >= T(0.0))) {
                    eb = 1280;break;
                  }switch (w | 0) {case 2:
                      {
                        u = T(T(Fb * u) / T(100.0));break ta;
                      }case 1:
                      break ta;default:
                      {
                        u = T(t);break ta;
                      }}
                } while (0);if ((eb | 0) == 1280) {
                  eb = 0;do if (!(c[da + 224 >> 2] | 0)) {
                    if (!(c[da + 256 >> 2] | 0)) {
                      h = (c[da + 272 >> 2] | 0) == 0 ? 1036 : da + 268 | 0;break;
                    } else {
                      h = da + 252 | 0;break;
                    }
                  } else h = da + 220 | 0; while (0);switch (c[h + 4 >> 2] | 0) {case 2:
                      {
                        s = T(T(Fb * T(g[h >> 2])) / T(100.0));break;
                      }case 1:
                      {
                        s = T(g[h >> 2]);break;
                      }default:
                      s = T(t);}u = T(Fl(s, T(0.0)));
                }if ((c[da + 320 >> 2] | 0) != 0 ? (ua = T(g[da + 316 >> 2]), ua >= T(0.0)) : 0) s = ua;else {
                  do if (!(c[da + 296 >> 2] | 0)) {
                    if (!(c[da + 328 >> 2] | 0)) {
                      h = (c[da + 344 >> 2] | 0) == 0 ? 1036 : da + 340 | 0;break;
                    } else {
                      h = da + 324 | 0;break;
                    }
                  } else h = da + 292 | 0; while (0);s = T(Fl(T(g[h >> 2]), T(0.0)));
                }g[da + 504 >> 2] = T(Fl(E, T(D + T(u + s))));break;
              }if (!(ba | L ^ 1)) {
                switch (A | 0) {case 2:
                    {
                      D = T(T(Eb * T(g[z >> 2])) / T(100.0));break;
                    }case 1:
                    {
                      D = T(g[z >> 2]);break;
                    }default:
                    D = T(t);}do if (!(c[da + 216 >> 2] | 0)) {
                  if (!(c[da + 264 >> 2] | 0)) {
                    h = (c[da + 272 >> 2] | 0) == 0 ? 1036 : da + 268 | 0;break;
                  } else {
                    h = da + 260 | 0;break;
                  }
                } else h = da + 212 | 0; while (0);switch (c[h + 4 >> 2] | 0) {case 2:
                    {
                      s = T(T(Fb * T(g[h >> 2])) / T(100.0));break;
                    }case 1:
                    {
                      s = T(g[h >> 2]);break;
                    }default:
                    s = T(t);}s = T(Fl(s, T(0.0)));do if (!(c[da + 288 >> 2] | 0)) {
                  if (!(c[da + 336 >> 2] | 0)) {
                    h = (c[da + 344 >> 2] | 0) == 0 ? 1036 : da + 340 | 0;break;
                  } else {
                    h = da + 332 | 0;break;
                  }
                } else h = da + 284 | 0; while (0);u = T(s + T(Fl(T(g[h >> 2]), T(0.0))));do if (!(c[da + 232 >> 2] | 0)) {
                  if (!(c[da + 264 >> 2] | 0)) {
                    h = (c[da + 272 >> 2] | 0) == 0 ? 1036 : da + 268 | 0;break;
                  } else {
                    h = da + 260 | 0;break;
                  }
                } else h = da + 228 | 0; while (0);switch (c[h + 4 >> 2] | 0) {case 2:
                    {
                      s = T(T(Fb * T(g[h >> 2])) / T(100.0));break;
                    }case 1:
                    {
                      s = T(g[h >> 2]);break;
                    }default:
                    s = T(t);}s = T(Fl(s, T(0.0)));do if (!(c[da + 304 >> 2] | 0)) {
                  if (!(c[da + 336 >> 2] | 0)) {
                    h = (c[da + 344 >> 2] | 0) == 0 ? 1036 : da + 340 | 0;break;
                  } else {
                    h = da + 332 | 0;break;
                  }
                } else h = da + 300 | 0; while (0);g[da + 504 >> 2] = T(Fl(D, T(u + T(s + T(Fl(T(g[h >> 2]), T(0.0)))))));break;
              }N = (c[da + 96 >> 2] | 0) == 0;do if (N) {
                if (c[da + 64 >> 2] | 0) {
                  h = da + 60 | 0;break;
                }if (!(c[da + 112 >> 2] | 0)) {
                  h = (c[da + 128 >> 2] | 0) == 0 ? 1036 : da + 124 | 0;break;
                } else {
                  h = da + 108 | 0;break;
                }
              } else h = da + 92 | 0; while (0);switch (c[h + 4 >> 2] | 0) {case 3:
                  {
                    u = T(0.0);break;
                  }case 2:
                  {
                    u = T(T(Fb * T(g[h >> 2])) / T(100.0));break;
                  }case 1:
                  {
                    u = T(g[h >> 2]);break;
                  }default:
                  u = T(t);}O = (c[da + 104 >> 2] | 0) == 0;do if (O) {
                if (c[da + 80 >> 2] | 0) {
                  h = da + 76 | 0;break;
                }if (!(c[da + 112 >> 2] | 0)) {
                  h = (c[da + 128 >> 2] | 0) == 0 ? 1036 : da + 124 | 0;break;
                } else {
                  h = da + 108 | 0;break;
                }
              } else h = da + 100 | 0; while (0);switch (c[h + 4 >> 2] | 0) {case 3:
                  {
                    s = T(0.0);break;
                  }case 2:
                  {
                    s = T(T(Fb * T(g[h >> 2])) / T(100.0));break;
                  }case 1:
                  {
                    s = T(g[h >> 2]);break;
                  }default:
                  s = T(t);}D = T(u + s);Q = (c[da + 72 >> 2] | 0) == 0;do if (Q) {
                if (!(c[da + 120 >> 2] | 0)) {
                  h = (c[da + 128 >> 2] | 0) == 0 ? 1036 : da + 124 | 0;break;
                } else {
                  h = da + 116 | 0;break;
                }
              } else h = da + 68 | 0; while (0);switch (c[h + 4 >> 2] | 0) {case 3:
                  {
                    u = T(0.0);break;
                  }case 2:
                  {
                    u = T(T(Fb * T(g[h >> 2])) / T(100.0));break;
                  }case 1:
                  {
                    u = T(g[h >> 2]);break;
                  }default:
                  u = T(t);}R = (c[da + 88 >> 2] | 0) == 0;do if (R) {
                if (!(c[da + 120 >> 2] | 0)) {
                  h = (c[da + 128 >> 2] | 0) == 0 ? 1036 : da + 124 | 0;break;
                } else {
                  h = da + 116 | 0;break;
                }
              } else h = da + 84 | 0; while (0);switch (c[h + 4 >> 2] | 0) {case 3:
                  {
                    s = T(0.0);break;
                  }case 2:
                  {
                    s = T(T(Fb * T(g[h >> 2])) / T(100.0));break;
                  }case 1:
                  {
                    s = T(g[h >> 2]);break;
                  }default:
                  s = T(t);}E = T(u + s);if (B) {
                switch (y | 0) {case 2:
                    {
                      s = T(T(Fb * T(g[w >> 2])) / T(100.0));break;
                    }case 1:
                    {
                      s = T(g[w >> 2]);break;
                    }default:
                    s = T(t);}x = 1;F = T(D + s);
              } else {
                x = 0;F = T(t);
              }if (L) {
                switch (A | 0) {case 2:
                    {
                      s = T(T(Eb * T(g[z >> 2])) / T(100.0));break;
                    }case 1:
                    {
                      s = T(g[z >> 2]);break;
                    }default:
                    s = T(t);}h = 1;s = T(E + s);
              } else {
                h = 0;s = T(t);
              }w = c[ma >> 2] | 0;do if (ba & (w | 0) == 2) w = 2;else {
                if (((g[j >> 2] = F, c[j >> 2] | 0) & 2147483647) >>> 0 <= 2139095040) break;x = oa ? x : 2;F = oa ? F : Fb;
              } while (0);do if (!((w | 0) == 2 & K)) {
                if (((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 <= 2139095040) break;h = pa ? h : 2;s = pa ? s : Eb;
              } while (0);u = T(g[da + 396 >> 2]);y = ((g[j >> 2] = u, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040;do if (!y) if ((x | 0) == 1 & K) {
                h = 1;x = 1;s = T(T(F - D) / u);break;
              } else {
                eb = ba & (h | 0) == 1;ra = T(T(s - E) * u);h = eb ? 1 : h;x = eb ? 1 : x;F = eb ? ra : F;break;
              } while (0);w = da + 20 | 0;w = c[((c[w >> 2] | 0) == 0 ? na : w) >> 2] | 0;do if ((w | 0) != 5) {
                if (!(ka | (ba | B) | ((x | 0) == 1 | (w | 0) != 4))) {
                  F = T(T(Fb - D) / u);h = y ? h : 1;x = 1;s = y ? s : F;F = Fb;
                }if (fa | (L | K) | ((h | 0) == 1 | (w | 0) != 4)) break;ra = T(T(Eb - E) * u);h = 1;x = y ? x : 1;s = Eb;F = y ? F : ra;
              } while (0);switch (c[U >> 2] | 0) {case 2:
                  {
                    E = T(T(Fb * T(g[S >> 2])) / T(100.0));break;
                  }case 1:
                  {
                    E = T(g[S >> 2]);break;
                  }default:
                  E = T(t);}do if (N) {
                if (c[da + 64 >> 2] | 0) {
                  w = da + 60 | 0;break;
                }if (!(c[da + 112 >> 2] | 0)) {
                  w = (c[da + 128 >> 2] | 0) == 0 ? 1036 : da + 124 | 0;break;
                } else {
                  w = da + 108 | 0;break;
                }
              } else w = da + 92 | 0; while (0);switch (c[w + 4 >> 2] | 0) {case 3:
                  {
                    D = T(0.0);break;
                  }case 2:
                  {
                    D = T(T(Fb * T(g[w >> 2])) / T(100.0));break;
                  }case 1:
                  {
                    D = T(g[w >> 2]);break;
                  }default:
                  D = T(t);}do if (O) {
                if (c[da + 80 >> 2] | 0) {
                  w = da + 76 | 0;break;
                }if (!(c[da + 112 >> 2] | 0)) {
                  w = (c[da + 128 >> 2] | 0) == 0 ? 1036 : da + 124 | 0;break;
                } else {
                  w = da + 108 | 0;break;
                }
              } else w = da + 100 | 0; while (0);switch (c[w + 4 >> 2] | 0) {case 3:
                  {
                    u = T(0.0);break;
                  }case 2:
                  {
                    u = T(T(Fb * T(g[w >> 2])) / T(100.0));break;
                  }case 1:
                  {
                    u = T(g[w >> 2]);break;
                  }default:
                  u = T(t);}u = T(E + T(D + u));switch (x | 0) {case 2:case 1:
                  {
                    F = F < u | ((g[j >> 2] = u, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040 ? F : u;break;
                  }case 0:
                  {
                    eb = ((g[j >> 2] = u, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040;x = eb ? 0 : 2;F = eb ? F : u;break;
                  }default:
                  {}}switch (c[X >> 2] | 0) {case 2:
                  {
                    E = T(T(Eb * T(g[W >> 2])) / T(100.0));break;
                  }case 1:
                  {
                    E = T(g[W >> 2]);break;
                  }default:
                  E = T(t);}do if (Q) {
                if (!(c[da + 120 >> 2] | 0)) {
                  w = (c[da + 128 >> 2] | 0) == 0 ? 1036 : da + 124 | 0;break;
                } else {
                  w = da + 116 | 0;break;
                }
              } else w = da + 68 | 0; while (0);switch (c[w + 4 >> 2] | 0) {case 3:
                  {
                    D = T(0.0);break;
                  }case 2:
                  {
                    D = T(T(Fb * T(g[w >> 2])) / T(100.0));break;
                  }case 1:
                  {
                    D = T(g[w >> 2]);break;
                  }default:
                  D = T(t);}do if (R) {
                if (!(c[da + 120 >> 2] | 0)) {
                  w = (c[da + 128 >> 2] | 0) == 0 ? 1036 : da + 124 | 0;break;
                } else {
                  w = da + 116 | 0;break;
                }
              } else w = da + 84 | 0; while (0);switch (c[w + 4 >> 2] | 0) {case 3:
                  {
                    u = T(0.0);break;
                  }case 2:
                  {
                    u = T(T(Fb * T(g[w >> 2])) / T(100.0));break;
                  }case 1:
                  {
                    u = T(g[w >> 2]);break;
                  }default:
                  u = T(t);}u = T(E + T(D + u));switch (h | 0) {case 2:case 1:
                  {
                    s = s < u | ((g[j >> 2] = u, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040 ? s : u;break;
                  }case 0:
                  {
                    eb = ((g[j >> 2] = u, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040;h = eb ? 0 : 2;s = eb ? s : u;break;
                  }default:
                  {}}Md(da, F, s, Sb, x, h, Fb, Eb, 0, 4105, p) | 0;E = T(g[da + 908 + (c[1100 + (ca << 2) >> 2] << 2) >> 2]);ua: do if (ba) {
                h = da + 236 | 0;w = c[da + 240 >> 2] | 0;switch (w | 0) {case 1:
                    {
                      s = T(g[h >> 2]);u = s;break;
                    }case 2:
                    {
                      s = T(g[h >> 2]);u = T(T(Fb * s) / T(100.0));break;
                    }default:
                    {
                      eb = 1454;break ua;
                    }}if (!(u >= T(0.0))) {
                  eb = 1454;break;
                }switch (w | 0) {case 2:
                    {
                      s = T(T(Fb * s) / T(100.0));eb = 1469;break ua;
                    }case 1:
                    {
                      eb = 1469;break ua;
                    }default:
                    {
                      s = T(t);eb = 1469;break ua;
                    }}
              } else eb = 1454; while (0);if ((eb | 0) == 1454) {
                h = c[1068 + (ca << 2) >> 2] | 0;va: do if (!(c[da + 204 + (h << 3) + 4 >> 2] | 0)) {
                  do if ((h | 2 | 0) == 3) {
                    if (!(c[da + 264 >> 2] | 0)) break;h = da + 260 | 0;break va;
                  } while (0);wa: do switch (h | 0) {case 0:case 2:case 4:case 5:
                      {
                        if (!(c[da + 256 >> 2] | 0)) break wa;h = da + 252 | 0;break va;
                      }default:
                      {}} while (0);if (!(c[da + 272 >> 2] | 0)) {
                    h = (h | 1 | 0) == 5 ? 1012 : 1036;break;
                  } else {
                    h = da + 268 | 0;break;
                  }
                } else h = da + 204 + (h << 3) | 0; while (0);switch (c[h + 4 >> 2] | 0) {case 2:
                    {
                      s = T(T(Fb * T(g[h >> 2])) / T(100.0));break;
                    }case 1:
                    {
                      s = T(g[h >> 2]);break;
                    }default:
                    s = T(t);}s = T(Fl(s, T(0.0)));if (ba) eb = 1469;else eb = 1472;
              }do if ((eb | 0) == 1469) {
                if (!(c[da + 312 >> 2] | 0)) {
                  eb = 1472;break;
                }u = T(g[da + 308 >> 2]);if (!(u >= T(0.0))) {
                  eb = 1472;break;
                }s = T(s + u);eb = 1484;
              } while (0);if ((eb | 0) == 1472) {
                h = c[1068 + (ca << 2) >> 2] | 0;xa: do if (!(c[da + 276 + (h << 3) + 4 >> 2] | 0)) {
                  do if ((h | 2 | 0) == 3) {
                    if (!(c[da + 336 >> 2] | 0)) break;h = da + 332 | 0;break xa;
                  } while (0);ya: do switch (h | 0) {case 0:case 2:case 4:case 5:
                      {
                        if (!(c[da + 328 >> 2] | 0)) break ya;h = da + 324 | 0;break xa;
                      }default:
                      {}} while (0);if (!(c[da + 344 >> 2] | 0)) {
                    h = (h | 1 | 0) == 5 ? 1012 : 1036;break;
                  } else {
                    h = da + 340 | 0;break;
                  }
                } else h = da + 276 + (h << 3) | 0; while (0);s = T(s + T(Fl(T(g[h >> 2]), T(0.0))));if (ba) eb = 1484;else eb = 1491;
              }za: do if ((eb | 0) == 1484) {
                h = da + 244 | 0;w = c[da + 248 >> 2] | 0;switch (w | 0) {case 1:
                    {
                      u = T(g[h >> 2]);D = u;break;
                    }case 2:
                    {
                      u = T(g[h >> 2]);D = T(T(Fb * u) / T(100.0));break;
                    }default:
                    {
                      eb = 1491;break za;
                    }}if (!(D >= T(0.0))) {
                  eb = 1491;break;
                }switch (w | 0) {case 2:
                    {
                      u = T(T(Fb * u) / T(100.0));eb = 1506;break za;
                    }case 1:
                    {
                      eb = 1506;break za;
                    }default:
                    {
                      u = T(t);eb = 1506;break za;
                    }}
              } while (0);if ((eb | 0) == 1491) {
                h = c[1084 + (ca << 2) >> 2] | 0;Aa: do if (!(c[da + 204 + (h << 3) + 4 >> 2] | 0)) {
                  do if ((h | 2 | 0) == 3) {
                    if (!(c[da + 264 >> 2] | 0)) break;h = da + 260 | 0;break Aa;
                  } while (0);Ba: do switch (h | 0) {case 0:case 2:case 4:case 5:
                      {
                        if (!(c[da + 256 >> 2] | 0)) break Ba;h = da + 252 | 0;break Aa;
                      }default:
                      {}} while (0);if (!(c[da + 272 >> 2] | 0)) {
                    h = (h | 1 | 0) == 5 ? 1012 : 1036;break;
                  } else {
                    h = da + 268 | 0;break;
                  }
                } else h = da + 204 + (h << 3) | 0; while (0);switch (c[h + 4 >> 2] | 0) {case 2:
                    {
                      u = T(T(Fb * T(g[h >> 2])) / T(100.0));break;
                    }case 1:
                    {
                      u = T(g[h >> 2]);break;
                    }default:
                    u = T(t);}u = T(Fl(u, T(0.0)));if (ba) eb = 1506;else eb = 1508;
              }do if ((eb | 0) == 1506) {
                eb = 0;if (!(c[da + 320 >> 2] | 0)) {
                  eb = 1508;break;
                }D = T(g[da + 316 >> 2]);if (!(D >= T(0.0))) eb = 1508;
              } while (0);if ((eb | 0) == 1508) {
                eb = 0;h = c[1084 + (ca << 2) >> 2] | 0;Ca: do if (!(c[da + 276 + (h << 3) + 4 >> 2] | 0)) {
                  do if ((h | 2 | 0) == 3) {
                    if (!(c[da + 336 >> 2] | 0)) break;h = da + 332 | 0;break Ca;
                  } while (0);Da: do switch (h | 0) {case 0:case 2:case 4:case 5:
                      {
                        if (!(c[da + 328 >> 2] | 0)) break Da;h = da + 324 | 0;break Ca;
                      }default:
                      {}} while (0);if (!(c[da + 344 >> 2] | 0)) {
                    h = (h | 1 | 0) == 5 ? 1012 : 1036;break;
                  } else {
                    h = da + 340 | 0;break;
                  }
                } else h = da + 276 + (h << 3) | 0; while (0);D = T(Fl(T(g[h >> 2]), T(0.0)));
              }g[da + 504 >> 2] = T(Fl(E, T(s + T(u + D))));
            } while (0);c[da + 500 >> 2] = c[2188];h = k;
          } while (0);s = T(g[da + 504 >> 2]);s = T(G + T(s + T(Qd(da, Nb, Fb))));Ta = v;
        }ea = ea + 1 | 0;if ((ea | 0) == (Qb | 0)) break;else {
          v = Ta;k = h;G = s;
        }
      }O = s > J;Qa = db & ((sa | 0) == 2 & O) ? 1 : sa;W = 1100 + (Nb << 2) | 0;R = (ib | 0) == 1;X = R & (o ^ 1);ba = (Qa | 0) == 1;ca = (Qa | 0) == 2;k = 1068 + (Nb << 2) | 0;da = 1084 + (Nb << 2) | 0;ea = (ib | 2 | 0) == 2;Da = (vb | 0) == 1 & 1;fa = b + 364 + (Da << 3) + 4 | 0;ga = b + 380 + (Da << 3) + 4 | 0;ha = 1068 + (Ob << 2) | 0;ia = b + 264 | 0;ja = b + 260 | 0;ka = b + 272 | 0;la = b + 268 | 0;ma = b + 256 | 0;na = b + 252 | 0;oa = b + 308 | 0;pa = b + 336 | 0;va = b + 332 | 0;wa = b + 344 | 0;xa = b + 340 | 0;ya = b + 328 | 0;za = b + 324 | 0;Aa = 1084 + (Ob << 2) | 0;Ba = b + 316 | 0;Ca = b + 380 + (Da << 3) | 0;Da = b + 364 + (Da << 3) | 0;Oa = R & (db ^ 1);Ea = 1068 + (Ob << 2) | 0;Fa = b + 16 | 0;Ga = 1100 + (Ob << 2) | 0;Pa = ((g[j >> 2] = gb, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040;Ha = 1068 + (Nb << 2) | 0;Ia = (ib | 0) != 1;Ja = Pa ? 0 : 2;S = ((g[j >> 2] = Ra, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041;U = ((g[j >> 2] = Sa, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041;Ka = b + 968 | 0;La = b + 944 | 0;Ma = b + 44 | 0;Na = b + 40 | 0;R = db & ((sa | 0) != 0 & O) | R ^ 1;O = 0;sa = 0;qa = T(0.0);aa = T(0.0);while (1) {
        Ea: do if (O >>> 0 < Qb >>> 0) {
          v = 0;G = T(0.0);E = T(0.0);I = T(0.0);s = T(0.0);A = 0;y = 0;w = O;while (1) {
            z = Zb(c[Pb >> 2] | 0, w) | 0;do if ((c[z + 36 >> 2] | 0) == 1) {
              F = G;q = y;u = I;h = A;
            } else {
              c[z + 940 >> 2] = sa;x = c[z + 24 >> 2] | 0;if ((x | 0) == 1) {
                F = G;q = y;u = I;h = A;break;
              }F = T(Qd(z, Nb, Fb));h = c[W >> 2] | 0;q = z + 380 + (h << 3) | 0;switch (c[z + 380 + (h << 3) + 4 >> 2] | 0) {case 2:
                  {
                    u = T(T(ub * T(g[q >> 2])) / T(100.0));break;
                  }case 1:
                  {
                    u = T(g[q >> 2]);break;
                  }default:
                  u = T(t);}H = T(g[z + 504 >> 2]);D = T(Hl(u, H));q = z + 364 + (h << 3) | 0;switch (c[z + 364 + (h << 3) + 4 >> 2] | 0) {case 2:
                  {
                    u = T(T(ub * T(g[q >> 2])) / T(100.0));break;
                  }case 1:
                  {
                    u = T(g[q >> 2]);break;
                  }default:
                  u = T(t);}u = T(Fl(u, D));if (db & (v | 0) != 0 & T(F + T(E + u)) > J) {
                L = v;D = G;u = I;h = A;Q = w;break Ea;
              }F = T(F + u);E = T(E + F);F = T(G + F);v = v + 1 | 0;Fa: do if (!x) {
                if (!(c[z + 944 >> 2] | 0)) {
                  D = I;break;
                }u = T(g[z + 44 >> 2]);q = ((g[j >> 2] = u, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040;if (q) {
                  D = T(g[z + 40 >> 2]);if (D > T(0.0) & ((g[j >> 2] = D, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041) eb = 1538;else eb = 1539;
                } else {
                  D = u;eb = 1538;
                }if ((eb | 0) == 1538 ? (eb = 0, !(D != T(0.0))) : 0) eb = 1539;do if ((eb | 0) == 1539) {
                  eb = 0;D = T(g[z + 48 >> 2]);if (((g[j >> 2] = D, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) {
                    if (a[(c[z + 968 >> 2] | 0) + 2 >> 0] | 0) break;D = T(g[z + 40 >> 2]);if (!(D < T(0.0) & ((g[j >> 2] = D, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041)) {
                      D = I;break Fa;
                    }D = T(-D);
                  }if (!(D != T(0.0))) {
                    D = I;break Fa;
                  }
                } while (0);if (q) {
                  u = T(g[z + 40 >> 2]);Q = u > T(0.0) & ((g[j >> 2] = u, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041;u = Q ? u : T(0.0);
                }D = T(I + u);u = T(g[z + 48 >> 2]);Ga: do if (((g[j >> 2] = u, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) {
                  q = a[(c[z + 968 >> 2] | 0) + 2 >> 0] | 0;do if (!(q << 24 >> 24)) {
                    u = T(g[z + 40 >> 2]);if (!(u < T(0.0) & ((g[j >> 2] = u, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041)) break;u = T(-u);break Ga;
                  } while (0);u = q << 24 >> 24 ? T(1.0) : T(0.0);
                } while (0);s = T(s - T(u * H));
              } else D = I; while (0);if (y | 0) c[y + 952 >> 2] = z;c[z + 952 >> 2] = 0;q = z;u = D;h = (A | 0) == 0 ? z : A;
            } while (0);w = w + 1 | 0;if (w >>> 0 < Qb >>> 0) {
              G = F;I = u;A = h;y = q;
            } else {
              L = v;D = F;Q = w;break;
            }
          }
        } else {
          L = 0;D = T(0.0);u = T(0.0);s = T(0.0);h = 0;Q = O;
        } while (0);N = u > T(0.0) & u < T(1.0);_ = N ? T(1.0) : u;N = s > T(0.0) & s < T(1.0);Z = N ? T(1.0) : s;Ha: do if (!ba) {
          if (S & D < Ra) {
            J = Ra;break;
          }if (U & D > Sa) {
            J = Sa;break;
          }if (a[(c[Ka >> 2] | 0) + 3 >> 0] | 0) break;do if (!(_ == T(0.0))) {
            if (!(c[La >> 2] | 0)) break;s = T(g[Ma >> 2]);if (((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) {
              s = T(g[Na >> 2]);if (!(s > T(0.0) & ((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041)) break;
            }if (!(s == T(0.0))) break Ha;
          } while (0);J = D;
        } while (0);do if (((g[j >> 2] = J, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) {
          if (!(D < T(0.0))) {
            $ = T(0.0);break;
          }$ = T(-D);
        } else $ = T(J - D); while (0);Ia: do if (X) s = T(0.0);else {
          A = (h | 0) == 0;if (A) {
            s = T(0.0);break;
          }x = c[W >> 2] | 0;y = $ < T(0.0);V = T($ / Z);z = $ > T(0.0);Y = T($ / _);I = T(0.0);M = T(0.0);P = T(0.0);w = h;while (1) {
            q = w + 380 + (x << 3) | 0;switch (c[w + 380 + (x << 3) + 4 >> 2] | 0) {case 2:
                {
                  u = T(T(ub * T(g[q >> 2])) / T(100.0));break;
                }case 1:
                {
                  u = T(g[q >> 2]);break;
                }default:
                u = T(t);}q = w + 364 + (x << 3) | 0;switch (c[w + 364 + (x << 3) + 4 >> 2] | 0) {case 2:
                {
                  s = T(T(ub * T(g[q >> 2])) / T(100.0));break;
                }case 1:
                {
                  s = T(g[q >> 2]);break;
                }default:
                s = T(t);}H = T(Hl(u, T(Fl(s, T(g[w + 504 >> 2])))));do if (y) {
              Ja: do if (!(c[w + 944 >> 2] | 0)) s = T(0.0);else {
                s = T(g[w + 48 >> 2]);if (((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 <= 2139095040) break;q = a[(c[w + 968 >> 2] | 0) + 2 >> 0] | 0;do if (!(q << 24 >> 24)) {
                  s = T(g[w + 40 >> 2]);if (!(s < T(0.0) & ((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041)) break;s = T(-s);break Ja;
                } while (0);s = q << 24 >> 24 ? T(1.0) : T(0.0);
              } while (0);G = T(H * s);if (!(G != T(-0.0))) {
                u = I;D = M;s = P;break;
              }F = T(H - T(V * G));switch (tb | 0) {case 1:
                  {
                    v = 1;eb = 1589;break;
                  }case 3:
                  {
                    v = 0;eb = 1589;break;
                  }default:
                  {
                    u = T(t);s = T(t);
                  }}Ka: do if ((eb | 0) == 1589) {
                q = w + 364 + (v << 3) | 0;switch (c[w + 364 + (v << 3) + 4 >> 2] | 0) {case 2:
                    {
                      s = T(T(J * T(g[q >> 2])) / T(100.0));break;
                    }case 1:
                    {
                      s = T(g[q >> 2]);break;
                    }default:
                    s = T(t);}q = w + 380 + (v << 3) | 0;switch (c[w + 380 + (v << 3) + 4 >> 2] | 0) {case 2:
                    {
                      u = T(T(J * T(g[q >> 2])) / T(100.0));break Ka;
                    }case 1:
                    {
                      u = T(g[q >> 2]);break Ka;
                    }default:
                    {
                      u = T(t);break Ka;
                    }}
              } while (0);eb = u < F & (u >= T(0.0) & ((g[j >> 2] = u, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041);E = eb ? u : F;eb = s >= T(0.0) & ((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041 & E < s;E = eb ? s : E;La: do if (Ab) {
                q = w + 236 | 0;v = c[w + 240 >> 2] | 0;switch (v | 0) {case 1:
                    {
                      s = T(g[q >> 2]);u = s;break;
                    }case 2:
                    {
                      s = T(g[q >> 2]);u = T(T(Fb * s) / T(100.0));break;
                    }default:
                    {
                      eb = 1603;break La;
                    }}if (!(u >= T(0.0))) {
                  eb = 1603;break;
                }switch (v | 0) {case 2:
                    {
                      s = T(T(Fb * s) / T(100.0));eb = 1618;break La;
                    }case 1:
                    {
                      eb = 1618;break La;
                    }default:
                    {
                      s = T(t);eb = 1618;break La;
                    }}
              } else eb = 1603; while (0);if ((eb | 0) == 1603) {
                q = c[k >> 2] | 0;Ma: do if (!(c[w + 204 + (q << 3) + 4 >> 2] | 0)) {
                  do if ((q | 2 | 0) == 3) {
                    if (!(c[w + 264 >> 2] | 0)) break;q = w + 260 | 0;break Ma;
                  } while (0);Na: do switch (q | 0) {case 0:case 2:case 4:case 5:
                      {
                        if (!(c[w + 256 >> 2] | 0)) break Na;q = w + 252 | 0;break Ma;
                      }default:
                      {}} while (0);if (!(c[w + 272 >> 2] | 0)) {
                    q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
                  } else {
                    q = w + 268 | 0;break;
                  }
                } else q = w + 204 + (q << 3) | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
                    {
                      s = T(T(Fb * T(g[q >> 2])) / T(100.0));break;
                    }case 1:
                    {
                      s = T(g[q >> 2]);break;
                    }default:
                    s = T(t);}s = T(Fl(s, T(0.0)));if (Ab) eb = 1618;else eb = 1621;
              }do if ((eb | 0) == 1618) {
                if (!(c[w + 312 >> 2] | 0)) {
                  eb = 1621;break;
                }u = T(g[w + 308 >> 2]);if (!(u >= T(0.0))) {
                  eb = 1621;break;
                }s = T(s + u);eb = 1633;
              } while (0);if ((eb | 0) == 1621) {
                q = c[k >> 2] | 0;Oa: do if (!(c[w + 276 + (q << 3) + 4 >> 2] | 0)) {
                  do if ((q | 2 | 0) == 3) {
                    if (!(c[w + 336 >> 2] | 0)) break;q = w + 332 | 0;break Oa;
                  } while (0);Pa: do switch (q | 0) {case 0:case 2:case 4:case 5:
                      {
                        if (!(c[w + 328 >> 2] | 0)) break Pa;q = w + 324 | 0;break Oa;
                      }default:
                      {}} while (0);if (!(c[w + 344 >> 2] | 0)) {
                    q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
                  } else {
                    q = w + 340 | 0;break;
                  }
                } else q = w + 276 + (q << 3) | 0; while (0);s = T(s + T(Fl(T(g[q >> 2]), T(0.0))));if (Ab) eb = 1633;else eb = 1640;
              }Qa: do if ((eb | 0) == 1633) {
                q = w + 244 | 0;v = c[w + 248 >> 2] | 0;switch (v | 0) {case 1:
                    {
                      u = T(g[q >> 2]);D = u;break;
                    }case 2:
                    {
                      u = T(g[q >> 2]);D = T(T(Fb * u) / T(100.0));break;
                    }default:
                    {
                      eb = 1640;break Qa;
                    }}if (!(D >= T(0.0))) {
                  eb = 1640;break;
                }switch (v | 0) {case 2:
                    {
                      u = T(T(Fb * u) / T(100.0));eb = 1655;break Qa;
                    }case 1:
                    {
                      eb = 1655;break Qa;
                    }default:
                    {
                      u = T(t);eb = 1655;break Qa;
                    }}
              } while (0);if ((eb | 0) == 1640) {
                q = c[da >> 2] | 0;Ra: do if (!(c[w + 204 + (q << 3) + 4 >> 2] | 0)) {
                  do if ((q | 2 | 0) == 3) {
                    if (!(c[w + 264 >> 2] | 0)) break;q = w + 260 | 0;break Ra;
                  } while (0);Sa: do switch (q | 0) {case 0:case 2:case 4:case 5:
                      {
                        if (!(c[w + 256 >> 2] | 0)) break Sa;q = w + 252 | 0;break Ra;
                      }default:
                      {}} while (0);if (!(c[w + 272 >> 2] | 0)) {
                    q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
                  } else {
                    q = w + 268 | 0;break;
                  }
                } else q = w + 204 + (q << 3) | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
                    {
                      u = T(T(Fb * T(g[q >> 2])) / T(100.0));break;
                    }case 1:
                    {
                      u = T(g[q >> 2]);break;
                    }default:
                    u = T(t);}u = T(Fl(u, T(0.0)));if (Ab) eb = 1655;else eb = 1657;
              }do if ((eb | 0) == 1655) {
                eb = 0;if (!(c[w + 320 >> 2] | 0)) {
                  eb = 1657;break;
                }D = T(g[w + 316 >> 2]);if (!(D >= T(0.0))) eb = 1657;
              } while (0);if ((eb | 0) == 1657) {
                eb = 0;q = c[da >> 2] | 0;Ta: do if (!(c[w + 276 + (q << 3) + 4 >> 2] | 0)) {
                  do if ((q | 2 | 0) == 3) {
                    if (!(c[w + 336 >> 2] | 0)) break;q = w + 332 | 0;break Ta;
                  } while (0);Ua: do switch (q | 0) {case 0:case 2:case 4:case 5:
                      {
                        if (!(c[w + 328 >> 2] | 0)) break Ua;q = w + 324 | 0;break Ta;
                      }default:
                      {}} while (0);if (!(c[w + 344 >> 2] | 0)) {
                    q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
                  } else {
                    q = w + 340 | 0;break;
                  }
                } else q = w + 276 + (q << 3) | 0; while (0);D = T(Fl(T(g[q >> 2]), T(0.0)));
              }s = T(Fl(E, T(s + T(u + D))));if (!(F != s)) {
                u = I;D = M;s = P;break;
              }u = T(I - T(s - H));D = M;s = T(P + G);
            } else {
              if (!z) {
                u = I;D = M;s = P;break;
              }if (!(c[w + 944 >> 2] | 0)) {
                u = I;D = M;s = P;break;
              }s = T(g[w + 44 >> 2]);if (((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) {
                s = T(g[w + 40 >> 2]);if (!(s > T(0.0) & ((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041)) {
                  u = I;D = M;s = P;break;
                }
              }if (!(s != T(0.0))) {
                u = I;D = M;s = P;break;
              }G = T(H + T(Y * s));switch (tb | 0) {case 1:
                  {
                    v = 1;eb = 1678;break;
                  }case 3:
                  {
                    v = 0;eb = 1678;break;
                  }default:
                  {
                    D = T(t);u = T(t);
                  }}Va: do if ((eb | 0) == 1678) {
                q = w + 364 + (v << 3) | 0;switch (c[w + 364 + (v << 3) + 4 >> 2] | 0) {case 2:
                    {
                      u = T(T(J * T(g[q >> 2])) / T(100.0));break;
                    }case 1:
                    {
                      u = T(g[q >> 2]);break;
                    }default:
                    u = T(t);}q = w + 380 + (v << 3) | 0;switch (c[w + 380 + (v << 3) + 4 >> 2] | 0) {case 2:
                    {
                      D = T(T(J * T(g[q >> 2])) / T(100.0));break Va;
                    }case 1:
                    {
                      D = T(g[q >> 2]);break Va;
                    }default:
                    {
                      D = T(t);break Va;
                    }}
              } while (0);eb = D < G & (D >= T(0.0) & ((g[j >> 2] = D, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041);F = eb ? D : G;eb = u >= T(0.0) & ((g[j >> 2] = u, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041 & F < u;F = eb ? u : F;Wa: do if (Ab) {
                q = w + 236 | 0;v = c[w + 240 >> 2] | 0;switch (v | 0) {case 1:
                    {
                      u = T(g[q >> 2]);D = u;break;
                    }case 2:
                    {
                      u = T(g[q >> 2]);D = T(T(Fb * u) / T(100.0));break;
                    }default:
                    {
                      eb = 1692;break Wa;
                    }}if (!(D >= T(0.0))) {
                  eb = 1692;break;
                }switch (v | 0) {case 2:
                    {
                      u = T(T(Fb * u) / T(100.0));eb = 1707;break Wa;
                    }case 1:
                    {
                      eb = 1707;break Wa;
                    }default:
                    {
                      u = T(t);eb = 1707;break Wa;
                    }}
              } else eb = 1692; while (0);if ((eb | 0) == 1692) {
                q = c[k >> 2] | 0;Xa: do if (!(c[w + 204 + (q << 3) + 4 >> 2] | 0)) {
                  do if ((q | 2 | 0) == 3) {
                    if (!(c[w + 264 >> 2] | 0)) break;q = w + 260 | 0;break Xa;
                  } while (0);Ya: do switch (q | 0) {case 0:case 2:case 4:case 5:
                      {
                        if (!(c[w + 256 >> 2] | 0)) break Ya;q = w + 252 | 0;break Xa;
                      }default:
                      {}} while (0);if (!(c[w + 272 >> 2] | 0)) {
                    q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
                  } else {
                    q = w + 268 | 0;break;
                  }
                } else q = w + 204 + (q << 3) | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
                    {
                      u = T(T(Fb * T(g[q >> 2])) / T(100.0));break;
                    }case 1:
                    {
                      u = T(g[q >> 2]);break;
                    }default:
                    u = T(t);}u = T(Fl(u, T(0.0)));if (Ab) eb = 1707;else eb = 1710;
              }do if ((eb | 0) == 1707) {
                if (!(c[w + 312 >> 2] | 0)) {
                  eb = 1710;break;
                }D = T(g[w + 308 >> 2]);if (!(D >= T(0.0))) {
                  eb = 1710;break;
                }u = T(u + D);eb = 1722;
              } while (0);if ((eb | 0) == 1710) {
                q = c[k >> 2] | 0;Za: do if (!(c[w + 276 + (q << 3) + 4 >> 2] | 0)) {
                  do if ((q | 2 | 0) == 3) {
                    if (!(c[w + 336 >> 2] | 0)) break;q = w + 332 | 0;break Za;
                  } while (0);_a: do switch (q | 0) {case 0:case 2:case 4:case 5:
                      {
                        if (!(c[w + 328 >> 2] | 0)) break _a;q = w + 324 | 0;break Za;
                      }default:
                      {}} while (0);if (!(c[w + 344 >> 2] | 0)) {
                    q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
                  } else {
                    q = w + 340 | 0;break;
                  }
                } else q = w + 276 + (q << 3) | 0; while (0);u = T(u + T(Fl(T(g[q >> 2]), T(0.0))));if (Ab) eb = 1722;else eb = 1729;
              }$a: do if ((eb | 0) == 1722) {
                q = w + 244 | 0;v = c[w + 248 >> 2] | 0;switch (v | 0) {case 1:
                    {
                      D = T(g[q >> 2]);E = D;break;
                    }case 2:
                    {
                      D = T(g[q >> 2]);E = T(T(Fb * D) / T(100.0));break;
                    }default:
                    {
                      eb = 1729;break $a;
                    }}if (!(E >= T(0.0))) {
                  eb = 1729;break;
                }switch (v | 0) {case 2:
                    {
                      D = T(T(Fb * D) / T(100.0));eb = 1744;break $a;
                    }case 1:
                    {
                      eb = 1744;break $a;
                    }default:
                    {
                      D = T(t);eb = 1744;break $a;
                    }}
              } while (0);if ((eb | 0) == 1729) {
                q = c[da >> 2] | 0;ab: do if (!(c[w + 204 + (q << 3) + 4 >> 2] | 0)) {
                  do if ((q | 2 | 0) == 3) {
                    if (!(c[w + 264 >> 2] | 0)) break;q = w + 260 | 0;break ab;
                  } while (0);bb: do switch (q | 0) {case 0:case 2:case 4:case 5:
                      {
                        if (!(c[w + 256 >> 2] | 0)) break bb;q = w + 252 | 0;break ab;
                      }default:
                      {}} while (0);if (!(c[w + 272 >> 2] | 0)) {
                    q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
                  } else {
                    q = w + 268 | 0;break;
                  }
                } else q = w + 204 + (q << 3) | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
                    {
                      D = T(T(Fb * T(g[q >> 2])) / T(100.0));break;
                    }case 1:
                    {
                      D = T(g[q >> 2]);break;
                    }default:
                    D = T(t);}D = T(Fl(D, T(0.0)));if (Ab) eb = 1744;else eb = 1746;
              }do if ((eb | 0) == 1744) {
                eb = 0;if (!(c[w + 320 >> 2] | 0)) {
                  eb = 1746;break;
                }E = T(g[w + 316 >> 2]);if (!(E >= T(0.0))) eb = 1746;
              } while (0);if ((eb | 0) == 1746) {
                eb = 0;q = c[da >> 2] | 0;cb: do if (!(c[w + 276 + (q << 3) + 4 >> 2] | 0)) {
                  do if ((q | 2 | 0) == 3) {
                    if (!(c[w + 336 >> 2] | 0)) break;q = w + 332 | 0;break cb;
                  } while (0);db: do switch (q | 0) {case 0:case 2:case 4:case 5:
                      {
                        if (!(c[w + 328 >> 2] | 0)) break db;q = w + 324 | 0;break cb;
                      }default:
                      {}} while (0);if (!(c[w + 344 >> 2] | 0)) {
                    q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
                  } else {
                    q = w + 340 | 0;break;
                  }
                } else q = w + 276 + (q << 3) | 0; while (0);E = T(Fl(T(g[q >> 2]), T(0.0)));
              }u = T(Fl(F, T(u + T(D + E))));if (!(G != u)) {
                u = I;D = M;s = P;break;
              }u = T(I - T(u - H));D = T(M - s);s = P;
            } while (0);w = c[w + 952 >> 2] | 0;if (!w) break;else {
              I = u;M = D;P = s;
            }
          }s = T(Z + s);u = T($ + u);if (A) {
            s = T(0.0);break;
          }H = T(_ + D);A = c[W >> 2] | 0;B = u < T(0.0);K = s == T(0.0);I = T(u / s);z = u > T(0.0);H = T(u / H);s = T(0.0);while (1) {
            x = h + 380 + (A << 3) | 0;y = c[h + 380 + (A << 3) + 4 >> 2] | 0;switch (y | 0) {case 2:
                {
                  D = T(T(ub * T(g[x >> 2])) / T(100.0));break;
                }case 1:
                {
                  D = T(g[x >> 2]);break;
                }default:
                D = T(t);}q = h + 364 + (A << 3) | 0;switch (c[h + 364 + (A << 3) + 4 >> 2] | 0) {case 2:
                {
                  u = T(T(ub * T(g[q >> 2])) / T(100.0));break;
                }case 1:
                {
                  u = T(g[q >> 2]);break;
                }default:
                u = T(t);}G = T(Hl(D, T(Fl(u, T(g[h + 504 >> 2])))));do if (B) {
              eb: do if (!(c[h + 944 >> 2] | 0)) u = T(0.0);else {
                u = T(g[h + 48 >> 2]);if (((g[j >> 2] = u, c[j >> 2] | 0) & 2147483647) >>> 0 <= 2139095040) break;q = a[(c[h + 968 >> 2] | 0) + 2 >> 0] | 0;do if (!(q << 24 >> 24)) {
                  u = T(g[h + 40 >> 2]);if (!(u < T(0.0) & ((g[j >> 2] = u, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041)) break;u = T(-u);break eb;
                } while (0);u = q << 24 >> 24 ? T(1.0) : T(0.0);
              } while (0);ua = T(G * u);u = T(-ua);if (!(ua != T(-0.0))) {
                u = G;break;
              }E = T(I * u);E = T(G + (K ? u : E));switch (tb | 0) {case 1:
                  {
                    v = 1;eb = 1779;break;
                  }case 3:
                  {
                    v = 0;eb = 1779;break;
                  }default:
                  {
                    D = T(t);u = T(t);
                  }}fb: do if ((eb | 0) == 1779) {
                q = h + 364 + (v << 3) | 0;switch (c[h + 364 + (v << 3) + 4 >> 2] | 0) {case 2:
                    {
                      u = T(T(J * T(g[q >> 2])) / T(100.0));break;
                    }case 1:
                    {
                      u = T(g[q >> 2]);break;
                    }default:
                    u = T(t);}q = h + 380 + (v << 3) | 0;switch (c[h + 380 + (v << 3) + 4 >> 2] | 0) {case 2:
                    {
                      D = T(T(J * T(g[q >> 2])) / T(100.0));break fb;
                    }case 1:
                    {
                      D = T(g[q >> 2]);break fb;
                    }default:
                    {
                      D = T(t);break fb;
                    }}
              } while (0);eb = D < E & (D >= T(0.0) & ((g[j >> 2] = D, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041);F = eb ? D : E;eb = u >= T(0.0) & ((g[j >> 2] = u, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041 & F < u;F = eb ? u : F;gb: do if (Ab) {
                q = h + 236 | 0;v = c[h + 240 >> 2] | 0;switch (v | 0) {case 1:
                    {
                      u = T(g[q >> 2]);D = u;break;
                    }case 2:
                    {
                      u = T(g[q >> 2]);D = T(T(Fb * u) / T(100.0));break;
                    }default:
                    {
                      eb = 1793;break gb;
                    }}if (!(D >= T(0.0))) {
                  eb = 1793;break;
                }switch (v | 0) {case 2:
                    {
                      u = T(T(Fb * u) / T(100.0));eb = 1808;break gb;
                    }case 1:
                    {
                      eb = 1808;break gb;
                    }default:
                    {
                      u = T(t);eb = 1808;break gb;
                    }}
              } else eb = 1793; while (0);if ((eb | 0) == 1793) {
                q = c[k >> 2] | 0;hb: do if (!(c[h + 204 + (q << 3) + 4 >> 2] | 0)) {
                  do if ((q | 2 | 0) == 3) {
                    if (!(c[h + 264 >> 2] | 0)) break;q = h + 260 | 0;break hb;
                  } while (0);ib: do switch (q | 0) {case 0:case 2:case 4:case 5:
                      {
                        if (!(c[h + 256 >> 2] | 0)) break ib;q = h + 252 | 0;break hb;
                      }default:
                      {}} while (0);if (!(c[h + 272 >> 2] | 0)) {
                    q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
                  } else {
                    q = h + 268 | 0;break;
                  }
                } else q = h + 204 + (q << 3) | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
                    {
                      u = T(T(Fb * T(g[q >> 2])) / T(100.0));break;
                    }case 1:
                    {
                      u = T(g[q >> 2]);break;
                    }default:
                    u = T(t);}u = T(Fl(u, T(0.0)));if (Ab) eb = 1808;else eb = 1811;
              }do if ((eb | 0) == 1808) {
                if (!(c[h + 312 >> 2] | 0)) {
                  eb = 1811;break;
                }D = T(g[h + 308 >> 2]);if (!(D >= T(0.0))) {
                  eb = 1811;break;
                }u = T(u + D);eb = 1823;
              } while (0);if ((eb | 0) == 1811) {
                q = c[k >> 2] | 0;jb: do if (!(c[h + 276 + (q << 3) + 4 >> 2] | 0)) {
                  do if ((q | 2 | 0) == 3) {
                    if (!(c[h + 336 >> 2] | 0)) break;q = h + 332 | 0;break jb;
                  } while (0);kb: do switch (q | 0) {case 0:case 2:case 4:case 5:
                      {
                        if (!(c[h + 328 >> 2] | 0)) break kb;q = h + 324 | 0;break jb;
                      }default:
                      {}} while (0);if (!(c[h + 344 >> 2] | 0)) {
                    q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
                  } else {
                    q = h + 340 | 0;break;
                  }
                } else q = h + 276 + (q << 3) | 0; while (0);u = T(u + T(Fl(T(g[q >> 2]), T(0.0))));if (Ab) eb = 1823;else eb = 1830;
              }lb: do if ((eb | 0) == 1823) {
                q = h + 244 | 0;v = c[h + 248 >> 2] | 0;switch (v | 0) {case 1:
                    {
                      D = T(g[q >> 2]);E = D;break;
                    }case 2:
                    {
                      D = T(g[q >> 2]);E = T(T(Fb * D) / T(100.0));break;
                    }default:
                    {
                      eb = 1830;break lb;
                    }}if (!(E >= T(0.0))) {
                  eb = 1830;break;
                }switch (v | 0) {case 2:
                    {
                      D = T(T(Fb * D) / T(100.0));eb = 1845;break lb;
                    }case 1:
                    {
                      eb = 1845;break lb;
                    }default:
                    {
                      D = T(t);eb = 1845;break lb;
                    }}
              } while (0);if ((eb | 0) == 1830) {
                q = c[da >> 2] | 0;mb: do if (!(c[h + 204 + (q << 3) + 4 >> 2] | 0)) {
                  do if ((q | 2 | 0) == 3) {
                    if (!(c[h + 264 >> 2] | 0)) break;q = h + 260 | 0;break mb;
                  } while (0);nb: do switch (q | 0) {case 0:case 2:case 4:case 5:
                      {
                        if (!(c[h + 256 >> 2] | 0)) break nb;q = h + 252 | 0;break mb;
                      }default:
                      {}} while (0);if (!(c[h + 272 >> 2] | 0)) {
                    q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
                  } else {
                    q = h + 268 | 0;break;
                  }
                } else q = h + 204 + (q << 3) | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
                    {
                      D = T(T(Fb * T(g[q >> 2])) / T(100.0));break;
                    }case 1:
                    {
                      D = T(g[q >> 2]);break;
                    }default:
                    D = T(t);}D = T(Fl(D, T(0.0)));if (Ab) eb = 1845;else eb = 1847;
              }do if ((eb | 0) == 1845) {
                eb = 0;if (!(c[h + 320 >> 2] | 0)) {
                  eb = 1847;break;
                }E = T(g[h + 316 >> 2]);if (!(E >= T(0.0))) eb = 1847;
              } while (0);if ((eb | 0) == 1847) {
                eb = 0;q = c[da >> 2] | 0;ob: do if (!(c[h + 276 + (q << 3) + 4 >> 2] | 0)) {
                  do if ((q | 2 | 0) == 3) {
                    if (!(c[h + 336 >> 2] | 0)) break;q = h + 332 | 0;break ob;
                  } while (0);pb: do switch (q | 0) {case 0:case 2:case 4:case 5:
                      {
                        if (!(c[h + 328 >> 2] | 0)) break pb;q = h + 324 | 0;break ob;
                      }default:
                      {}} while (0);if (!(c[h + 344 >> 2] | 0)) {
                    q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
                  } else {
                    q = h + 340 | 0;break;
                  }
                } else q = h + 276 + (q << 3) | 0; while (0);E = T(Fl(T(g[q >> 2]), T(0.0)));
              }u = T(Fl(F, T(u + T(D + E))));
            } else {
              if (!z) {
                u = G;break;
              }if (!(c[h + 944 >> 2] | 0)) {
                u = G;break;
              }u = T(g[h + 44 >> 2]);if (((g[j >> 2] = u, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) {
                u = T(g[h + 40 >> 2]);if (!(u > T(0.0) & ((g[j >> 2] = u, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041)) {
                  u = G;break;
                }
              }if (!(u != T(0.0))) {
                u = G;break;
              }E = T(G + T(H * u));switch (tb | 0) {case 1:
                  {
                    v = 1;eb = 1867;break;
                  }case 3:
                  {
                    v = 0;eb = 1867;break;
                  }default:
                  {
                    D = T(t);u = T(t);
                  }}qb: do if ((eb | 0) == 1867) {
                q = h + 364 + (v << 3) | 0;switch (c[h + 364 + (v << 3) + 4 >> 2] | 0) {case 2:
                    {
                      u = T(T(J * T(g[q >> 2])) / T(100.0));break;
                    }case 1:
                    {
                      u = T(g[q >> 2]);break;
                    }default:
                    u = T(t);}q = h + 380 + (v << 3) | 0;switch (c[h + 380 + (v << 3) + 4 >> 2] | 0) {case 2:
                    {
                      D = T(T(J * T(g[q >> 2])) / T(100.0));break qb;
                    }case 1:
                    {
                      D = T(g[q >> 2]);break qb;
                    }default:
                    {
                      D = T(t);break qb;
                    }}
              } while (0);eb = D < E & (D >= T(0.0) & ((g[j >> 2] = D, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041);F = eb ? D : E;eb = u >= T(0.0) & ((g[j >> 2] = u, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041 & F < u;F = eb ? u : F;rb: do if (Ab) {
                q = h + 236 | 0;v = c[h + 240 >> 2] | 0;switch (v | 0) {case 1:
                    {
                      u = T(g[q >> 2]);D = u;break;
                    }case 2:
                    {
                      u = T(g[q >> 2]);D = T(T(Fb * u) / T(100.0));break;
                    }default:
                    {
                      eb = 1881;break rb;
                    }}if (!(D >= T(0.0))) {
                  eb = 1881;break;
                }switch (v | 0) {case 2:
                    {
                      u = T(T(Fb * u) / T(100.0));eb = 1896;break rb;
                    }case 1:
                    {
                      eb = 1896;break rb;
                    }default:
                    {
                      u = T(t);eb = 1896;break rb;
                    }}
              } else eb = 1881; while (0);if ((eb | 0) == 1881) {
                q = c[k >> 2] | 0;sb: do if (!(c[h + 204 + (q << 3) + 4 >> 2] | 0)) {
                  do if ((q | 2 | 0) == 3) {
                    if (!(c[h + 264 >> 2] | 0)) break;q = h + 260 | 0;break sb;
                  } while (0);tb: do switch (q | 0) {case 0:case 2:case 4:case 5:
                      {
                        if (!(c[h + 256 >> 2] | 0)) break tb;q = h + 252 | 0;break sb;
                      }default:
                      {}} while (0);if (!(c[h + 272 >> 2] | 0)) {
                    q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
                  } else {
                    q = h + 268 | 0;break;
                  }
                } else q = h + 204 + (q << 3) | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
                    {
                      u = T(T(Fb * T(g[q >> 2])) / T(100.0));break;
                    }case 1:
                    {
                      u = T(g[q >> 2]);break;
                    }default:
                    u = T(t);}u = T(Fl(u, T(0.0)));if (Ab) eb = 1896;else eb = 1899;
              }do if ((eb | 0) == 1896) {
                if (!(c[h + 312 >> 2] | 0)) {
                  eb = 1899;break;
                }D = T(g[h + 308 >> 2]);if (!(D >= T(0.0))) {
                  eb = 1899;break;
                }u = T(u + D);eb = 1911;
              } while (0);if ((eb | 0) == 1899) {
                q = c[k >> 2] | 0;ub: do if (!(c[h + 276 + (q << 3) + 4 >> 2] | 0)) {
                  do if ((q | 2 | 0) == 3) {
                    if (!(c[h + 336 >> 2] | 0)) break;q = h + 332 | 0;break ub;
                  } while (0);vb: do switch (q | 0) {case 0:case 2:case 4:case 5:
                      {
                        if (!(c[h + 328 >> 2] | 0)) break vb;q = h + 324 | 0;break ub;
                      }default:
                      {}} while (0);if (!(c[h + 344 >> 2] | 0)) {
                    q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
                  } else {
                    q = h + 340 | 0;break;
                  }
                } else q = h + 276 + (q << 3) | 0; while (0);u = T(u + T(Fl(T(g[q >> 2]), T(0.0))));if (Ab) eb = 1911;else eb = 1918;
              }wb: do if ((eb | 0) == 1911) {
                q = h + 244 | 0;v = c[h + 248 >> 2] | 0;switch (v | 0) {case 1:
                    {
                      D = T(g[q >> 2]);E = D;break;
                    }case 2:
                    {
                      D = T(g[q >> 2]);E = T(T(Fb * D) / T(100.0));break;
                    }default:
                    {
                      eb = 1918;break wb;
                    }}if (!(E >= T(0.0))) {
                  eb = 1918;break;
                }switch (v | 0) {case 2:
                    {
                      D = T(T(Fb * D) / T(100.0));eb = 1933;break wb;
                    }case 1:
                    {
                      eb = 1933;break wb;
                    }default:
                    {
                      D = T(t);eb = 1933;break wb;
                    }}
              } while (0);if ((eb | 0) == 1918) {
                q = c[da >> 2] | 0;xb: do if (!(c[h + 204 + (q << 3) + 4 >> 2] | 0)) {
                  do if ((q | 2 | 0) == 3) {
                    if (!(c[h + 264 >> 2] | 0)) break;q = h + 260 | 0;break xb;
                  } while (0);yb: do switch (q | 0) {case 0:case 2:case 4:case 5:
                      {
                        if (!(c[h + 256 >> 2] | 0)) break yb;q = h + 252 | 0;break xb;
                      }default:
                      {}} while (0);if (!(c[h + 272 >> 2] | 0)) {
                    q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
                  } else {
                    q = h + 268 | 0;break;
                  }
                } else q = h + 204 + (q << 3) | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
                    {
                      D = T(T(Fb * T(g[q >> 2])) / T(100.0));break;
                    }case 1:
                    {
                      D = T(g[q >> 2]);break;
                    }default:
                    D = T(t);}D = T(Fl(D, T(0.0)));if (Ab) eb = 1933;else eb = 1935;
              }do if ((eb | 0) == 1933) {
                eb = 0;if (!(c[h + 320 >> 2] | 0)) {
                  eb = 1935;break;
                }E = T(g[h + 316 >> 2]);if (!(E >= T(0.0))) eb = 1935;
              } while (0);if ((eb | 0) == 1935) {
                eb = 0;q = c[da >> 2] | 0;zb: do if (!(c[h + 276 + (q << 3) + 4 >> 2] | 0)) {
                  do if ((q | 2 | 0) == 3) {
                    if (!(c[h + 336 >> 2] | 0)) break;q = h + 332 | 0;break zb;
                  } while (0);Ab: do switch (q | 0) {case 0:case 2:case 4:case 5:
                      {
                        if (!(c[h + 328 >> 2] | 0)) break Ab;q = h + 324 | 0;break zb;
                      }default:
                      {}} while (0);if (!(c[h + 344 >> 2] | 0)) {
                    q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
                  } else {
                    q = h + 340 | 0;break;
                  }
                } else q = h + 276 + (q << 3) | 0; while (0);E = T(Fl(T(g[q >> 2]), T(0.0)));
              }u = T(Fl(F, T(u + T(D + E))));
            } while (0);s = T(s - T(u - G));D = T(Qd(h, Nb, Fb));E = T(Qd(h, Ob, Fb));F = T(u + D);u = T(g[h + 396 >> 2]);Bb: do if (((g[j >> 2] = u, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) {
              q = c[h + 984 + (c[Ga >> 2] << 2) >> 2] | 0;v = c[q + 4 >> 2] | 0;Cb: do if (!Pa) {
                switch (v | 0) {case 0:case 3:
                    break;case 1:
                    {
                      if (!(T(g[q >> 2]) < T(0.0))) {
                        eb = 1957;break Cb;
                      }break;
                    }case 2:
                    {
                      if (!(T(g[q >> 2]) < T(0.0))) {
                        eb = 1958;break Cb;
                      }break;
                    }default:
                    {
                      u = T(t);q = v;break Cb;
                    }}if (R) {
                  eb = 1956;break;
                }N = h + 20 | 0;if ((c[((c[N >> 2] | 0) == 0 ? Fa : N) >> 2] | 0) == 4) {
                  w = 1;D = gb;break Bb;
                } else eb = 1956;
              } else eb = 1956; while (0);if ((eb | 0) == 1956) {
                eb = 0;switch (v | 0) {case 0:case 3:
                    {
                      w = Ja;D = gb;break Bb;
                    }case 1:
                    {
                      eb = 1957;break;
                    }case 2:
                    {
                      eb = 1958;break;
                    }default:
                    {
                      u = T(t);q = v;
                    }}
              }if ((eb | 0) == 1957) {
                eb = 0;if (T(g[q >> 2]) < T(0.0)) {
                  w = Ja;D = gb;break;
                }u = T(g[q >> 2]);q = 1;
              } else if ((eb | 0) == 1958) {
                eb = 0;if (Pa | T(g[q >> 2]) < T(0.0)) {
                  w = Ja;D = gb;break;
                }u = T(T(gb * T(g[q >> 2])) / T(100.0));q = 2;
              }D = T(E + u);w = ((((g[j >> 2] = D, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040 | Ia & (q | 0) == 2) ^ 1) & 1;
            } else {
              D = T(F - D);ua = T(D / u);D = T(D * u);w = 1;D = T(E + (Ab ? ua : D));
            } while (0);switch (y | 0) {case 2:
                {
                  u = T(T(J * T(g[x >> 2])) / T(100.0));break;
                }case 1:
                {
                  u = T(g[x >> 2]);break;
                }default:
                u = T(t);}u = T(u + T(Qd(h, Nb, Fb)));E = F < u | ((g[j >> 2] = u, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040 ? F : u;v = c[Ga >> 2] | 0;q = h + 380 + (v << 3) | 0;switch (c[h + 380 + (v << 3) + 4 >> 2] | 0) {case 2:
                {
                  u = T(T(gb * T(g[q >> 2])) / T(100.0));break;
                }case 1:
                {
                  u = T(g[q >> 2]);break;
                }default:
                u = T(t);}u = T(u + T(Qd(h, Ob, Fb)));switch (w & 3) {case 2:case 1:
                {
                  u = D < u | ((g[j >> 2] = u, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040 ? D : u;break;
                }case 0:
                {
                  N = ((g[j >> 2] = u, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040;w = N ? 0 : 2;u = N ? D : u;break;
                }default:
                u = D;}q = c[h + 984 + (v << 2) >> 2] | 0;switch (c[q + 4 >> 2] | 0) {case 0:case 3:
                {
                  eb = 1974;break;
                }case 1:
                {
                  if (T(g[q >> 2]) < T(0.0)) eb = 1974;else q = 0;break;
                }case 2:
                {
                  if (Pa | T(g[q >> 2]) < T(0.0)) eb = 1974;else q = 0;break;
                }default:
                q = 0;}if ((eb | 0) == 1974) {
              eb = 0;q = h + 20 | 0;q = c[((c[q >> 2] | 0) == 0 ? Fa : q) >> 2] | 0;if ((q | 0) == 5 ? (c[Mb >> 2] | 1 | 0) == 1 : 0) q = 1;q = (q | 0) == 4;
            }Md(h, Ab ? E : u, Ab ? u : E, Sb, Ab ? 1 : w, Ab ? w : 1, Fb, Eb, o & (q ^ 1), 3491, p) | 0;a[fb >> 0] = a[fb >> 0] | a[h + 508 >> 0];h = c[h + 952 >> 2] | 0;if (!h) break Ia;
          }
        } while (0);D = T($ + s);N = D < T(0.0) & 1;a[fb >> 0] = N | d[fb >> 0];Db: do if (ca & D > T(0.0)) {
          q = c[W >> 2] | 0;h = c[b + 364 + (q << 3) + 4 >> 2] | 0;if (!h) {
            D = T(0.0);break;
          }q = b + 364 + (q << 3) | 0;switch (h | 0) {case 2:
              {
                s = T(g[q >> 2]);u = T(T(ub * s) / T(100.0));break;
              }case 1:
              {
                s = T(g[q >> 2]);u = s;break;
              }default:
              {
                D = T(0.0);break Db;
              }}if (!(u >= T(0.0))) {
            D = T(0.0);break;
          }switch (h | 0) {case 2:
              {
                s = T(T(ub * s) / T(100.0));break;
              }case 1:
              break;default:
              s = T(t);}D = T(Fl(T(0.0), T(s - T(J - D))));
        } while (0);y = O >>> 0 < Q >>> 0;if (y) {
          if (Ab) {
            x = O;q = 0;do {
              w = Zb(c[Pb >> 2] | 0, x) | 0;if (!(c[w + 24 >> 2] | 0)) {
                h = c[w + 96 >> 2] | 0;if (!h) h = c[w + 60 + (c[k >> 2] << 3) + 4 >> 2] | 0;v = c[w + 104 >> 2] | 0;if (!v) v = c[w + 60 + (c[da >> 2] << 3) + 4 >> 2] | 0;q = ((v | 0) == 3 & 1) + (((h | 0) == 3 & 1) + q) | 0;
              }x = x + 1 | 0;
            } while ((x | 0) != (Q | 0));
          } else {
            v = O;q = 0;do {
              h = Zb(c[Pb >> 2] | 0, v) | 0;if (!(c[h + 24 >> 2] | 0)) q = ((c[h + 60 + (c[da >> 2] << 3) + 4 >> 2] | 0) == 3 & 1) + (((c[h + 60 + (c[k >> 2] << 3) + 4 >> 2] | 0) == 3 & 1) + q) | 0;v = v + 1 | 0;
            } while ((v | 0) != (Q | 0));
          }if (q) {
            G = T(0.0);H = T(0.0);
          } else eb = 2002;
        } else eb = 2002;Eb: do if ((eb | 0) == 2002) {
          eb = 0;switch (cb | 0) {case 1:
              {
                q = 0;G = T(D * T(.5));H = T(0.0);break Eb;
              }case 2:
              {
                q = 0;G = D;H = T(0.0);break Eb;
              }case 3:
              {
                if (L >>> 0 <= 1) {
                  q = 0;G = T(0.0);H = T(0.0);break Eb;
                }H = T((L + -1 | 0) >>> 0);q = 0;G = T(0.0);H = T(T(Fl(D, T(0.0))) / H);break Eb;
              }case 4:
              {
                H = T(D / T(L >>> 0));q = 0;G = T(H * T(.5));break Eb;
              }default:
              {
                q = 0;G = T(0.0);H = T(0.0);break Eb;
              }}
        } while (0);s = T(r + G);if (y) {
          F = T(D / T(q | 0));w = O;E = T(0.0);while (1) {
            v = Zb(c[Pb >> 2] | 0, w) | 0;Fb: do if ((c[v + 36 >> 2] | 0) == 1) u = E;else {
              Gb: do switch (c[v + 24 >> 2] | 0) {case 1:
                  {
                    if (Ab) {
                      do if (!(c[v + 168 >> 2] | 0)) {
                        if (!(c[v + 184 >> 2] | 0)) {
                          q = (c[v + 200 >> 2] | 0) == 0 ? 1012 : v + 196 | 0;break;
                        } else {
                          q = v + 180 | 0;break;
                        }
                      } else q = v + 164 | 0; while (0);if (!(c[q + 4 >> 2] | 0)) eb = 2021;
                    } else eb = 2021;if ((eb | 0) == 2021) {
                      eb = 0;q = c[k >> 2] | 0;Hb: do if (!(c[v + 132 + (q << 3) + 4 >> 2] | 0)) {
                        do if ((q | 2 | 0) == 3) {
                          if (!(c[v + 192 >> 2] | 0)) break;q = v + 188 | 0;break Hb;
                        } while (0);Ib: do switch (q | 0) {case 0:case 2:case 4:case 5:
                            {
                              if (!(c[v + 184 >> 2] | 0)) break Ib;q = v + 180 | 0;break Hb;
                            }default:
                            {}} while (0);q = (c[v + 200 >> 2] | 0) == 0 ? 1012 : v + 196 | 0;
                      } else q = v + 132 + (q << 3) | 0; while (0);if (!(c[q + 4 >> 2] | 0)) break Gb;
                    }if (!o) {
                      u = E;break Fb;
                    }Jb: do if (Ab) {
                      do if (!(c[v + 168 >> 2] | 0)) {
                        if (!(c[v + 184 >> 2] | 0)) {
                          q = (c[v + 200 >> 2] | 0) == 0 ? 1012 : v + 196 | 0;break;
                        } else {
                          q = v + 180 | 0;break;
                        }
                      } else q = v + 164 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 0:
                          {
                            eb = 2041;break Jb;
                          }case 2:
                          {
                            u = T(T(J * T(g[q >> 2])) / T(100.0));eb = 2055;break Jb;
                          }case 1:
                          {
                            u = T(g[q >> 2]);eb = 2055;break Jb;
                          }default:
                          {
                            u = T(t);eb = 2055;break Jb;
                          }}
                    } else eb = 2041; while (0);if ((eb | 0) == 2041) {
                      q = c[k >> 2] | 0;Kb: do if (!(c[v + 132 + (q << 3) + 4 >> 2] | 0)) {
                        do if ((q | 2 | 0) == 3) {
                          if (!(c[v + 192 >> 2] | 0)) break;q = v + 188 | 0;break Kb;
                        } while (0);Lb: do switch (q | 0) {case 0:case 2:case 4:case 5:
                            {
                              if (!(c[v + 184 >> 2] | 0)) break Lb;q = v + 180 | 0;break Kb;
                            }default:
                            {}} while (0);q = (c[v + 200 >> 2] | 0) == 0 ? 1012 : v + 196 | 0;
                      } else q = v + 132 + (q << 3) | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 0:
                          {
                            u = T(0.0);break;
                          }case 2:
                          {
                            u = T(T(J * T(g[q >> 2])) / T(100.0));break;
                          }case 1:
                          {
                            u = T(g[q >> 2]);break;
                          }default:
                          u = T(t);}if (Ab) eb = 2055;else eb = 2058;
                    }do if ((eb | 0) == 2055) {
                      if (!(c[_b >> 2] | 0)) {
                        eb = 2058;break;
                      }D = T(g[oa >> 2]);if (!(D >= T(0.0))) {
                        eb = 2058;break;
                      }u = T(u + D);eb = 2067;
                    } while (0);if ((eb | 0) == 2058) {
                      h = c[k >> 2] | 0;Mb: do if (!(c[b + 276 + (h << 3) + 4 >> 2] | 0)) {
                        if ((h | 2 | 0) == 3 ? c[pa >> 2] | 0 : 0) {
                          q = va;break;
                        }switch (h | 0) {case 0:case 2:case 4:case 5:
                            {
                              if (c[ya >> 2] | 0) {
                                q = za;break Mb;
                              }break;
                            }default:
                            {}}if (c[wa >> 2] | 0) {
                          q = xa;break;
                        }q = (h | 1 | 0) == 5 ? 1012 : 1036;
                      } else q = b + 276 + (h << 3) | 0; while (0);u = T(u + T(Fl(T(g[q >> 2]), T(0.0))));if (Ab) eb = 2067;else eb = 2070;
                    }do if ((eb | 0) == 2067) {
                      eb = 0;if (!(c[v + 96 >> 2] | 0)) {
                        h = c[k >> 2] | 0;eb = 2070;break;
                      } else {
                        q = v + 92 | 0;break;
                      }
                    } while (0);Nb: do if ((eb | 0) == 2070) {
                      eb = 0;if (c[v + 60 + (h << 3) + 4 >> 2] | 0) {
                        q = v + 60 + (h << 3) | 0;break;
                      }do if ((h | 2 | 0) == 3) {
                        if (!(c[v + 120 >> 2] | 0)) break;q = v + 116 | 0;break Nb;
                      } while (0);Ob: do switch (h | 0) {case 0:case 2:case 4:case 5:
                          {
                            if (!(c[v + 112 >> 2] | 0)) break Ob;q = v + 108 | 0;break Nb;
                          }default:
                          {}} while (0);if (!(c[v + 128 >> 2] | 0)) {
                        q = (h | 1 | 0) == 5 ? 1012 : 1036;break;
                      } else {
                        q = v + 124 | 0;break;
                      }
                    } while (0);switch (c[q + 4 >> 2] | 0) {case 3:
                        {
                          D = T(0.0);break;
                        }case 2:
                        {
                          D = T(T(Fb * T(g[q >> 2])) / T(100.0));break;
                        }case 1:
                        {
                          D = T(g[q >> 2]);break;
                        }default:
                        D = T(t);}u = T(u + D);g[v + 400 + (c[Ha >> 2] << 2) >> 2] = u;u = E;break Fb;
                  }case 0:
                  {
                    if (Ab ? (kb = c[v + 96 >> 2] | 0, (kb | 0) != 0) : 0) q = kb;else q = c[v + 60 + (c[k >> 2] << 3) + 4 >> 2] | 0;ua = T(F + s);s = (q | 0) == 3 ? ua : s;if (o) {
                      N = v + 400 + (c[Ha >> 2] << 2) | 0;g[N >> 2] = T(s + T(g[N >> 2]));
                    }if (Ab ? (lb = c[v + 104 >> 2] | 0, (lb | 0) != 0) : 0) q = lb;else q = c[v + 60 + (c[da >> 2] << 3) + 4 >> 2] | 0;D = T(F + s);D = (q | 0) == 3 ? D : s;if (X) {
                      s = T(H + T(Qd(v, Nb, Fb)));u = gb;s = T(D + T(s + T(g[v + 504 >> 2])));break Fb;
                    }u = T(g[v + 908 + (c[W >> 2] << 2) >> 2]);do if (Ab) {
                      if (!(c[v + 96 >> 2] | 0)) {
                        eb = 2099;break;
                      }q = v + 92 | 0;
                    } else eb = 2099; while (0);Pb: do if ((eb | 0) == 2099) {
                      eb = 0;q = c[k >> 2] | 0;if (c[v + 60 + (q << 3) + 4 >> 2] | 0) {
                        q = v + 60 + (q << 3) | 0;break;
                      }do if ((q | 2 | 0) == 3) {
                        if (!(c[v + 120 >> 2] | 0)) break;q = v + 116 | 0;break Pb;
                      } while (0);Qb: do switch (q | 0) {case 0:case 2:case 4:case 5:
                          {
                            if (!(c[v + 112 >> 2] | 0)) break Qb;q = v + 108 | 0;break Pb;
                          }default:
                          {}} while (0);if (!(c[v + 128 >> 2] | 0)) {
                        q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
                      } else {
                        q = v + 124 | 0;break;
                      }
                    } while (0);switch (c[q + 4 >> 2] | 0) {case 3:
                        {
                          s = T(0.0);break;
                        }case 2:
                        {
                          s = T(T(Fb * T(g[q >> 2])) / T(100.0));break;
                        }case 1:
                        {
                          s = T(g[q >> 2]);break;
                        }default:
                        s = T(t);}u = T(u + s);do if (Ab) {
                      if (!(c[v + 104 >> 2] | 0)) {
                        eb = 2117;break;
                      }q = v + 100 | 0;
                    } else eb = 2117; while (0);Rb: do if ((eb | 0) == 2117) {
                      eb = 0;q = c[da >> 2] | 0;if (c[v + 60 + (q << 3) + 4 >> 2] | 0) {
                        q = v + 60 + (q << 3) | 0;break;
                      }do if ((q | 2 | 0) == 3) {
                        if (!(c[v + 120 >> 2] | 0)) break;q = v + 116 | 0;break Rb;
                      } while (0);Sb: do switch (q | 0) {case 0:case 2:case 4:case 5:
                          {
                            if (!(c[v + 112 >> 2] | 0)) break Sb;q = v + 108 | 0;break Rb;
                          }default:
                          {}} while (0);if (!(c[v + 128 >> 2] | 0)) {
                        q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
                      } else {
                        q = v + 124 | 0;break;
                      }
                    } while (0);switch (c[q + 4 >> 2] | 0) {case 3:
                        {
                          s = T(0.0);break;
                        }case 2:
                        {
                          s = T(T(Fb * T(g[q >> 2])) / T(100.0));break;
                        }case 1:
                        {
                          s = T(g[q >> 2]);break;
                        }default:
                        s = T(t);}s = T(D + T(H + T(u + s)));D = T(g[v + 908 + (c[Ga >> 2] << 2) >> 2]);do if (xb) {
                      if (!(c[v + 96 >> 2] | 0)) {
                        eb = 2135;break;
                      }q = v + 92 | 0;
                    } else eb = 2135; while (0);Tb: do if ((eb | 0) == 2135) {
                      eb = 0;q = c[ha >> 2] | 0;if (c[v + 60 + (q << 3) + 4 >> 2] | 0) {
                        q = v + 60 + (q << 3) | 0;break;
                      }do if ((q | 2 | 0) == 3) {
                        if (!(c[v + 120 >> 2] | 0)) break;q = v + 116 | 0;break Tb;
                      } while (0);Ub: do switch (q | 0) {case 0:case 2:case 4:case 5:
                          {
                            if (!(c[v + 112 >> 2] | 0)) break Ub;q = v + 108 | 0;break Tb;
                          }default:
                          {}} while (0);if (!(c[v + 128 >> 2] | 0)) {
                        q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
                      } else {
                        q = v + 124 | 0;break;
                      }
                    } while (0);switch (c[q + 4 >> 2] | 0) {case 3:
                        {
                          u = T(0.0);break;
                        }case 2:
                        {
                          u = T(T(Fb * T(g[q >> 2])) / T(100.0));break;
                        }case 1:
                        {
                          u = T(g[q >> 2]);break;
                        }default:
                        u = T(t);}D = T(D + u);do if (xb) {
                      if (!(c[v + 104 >> 2] | 0)) {
                        eb = 2153;break;
                      }q = v + 100 | 0;
                    } else eb = 2153; while (0);Vb: do if ((eb | 0) == 2153) {
                      eb = 0;q = c[Aa >> 2] | 0;if (c[v + 60 + (q << 3) + 4 >> 2] | 0) {
                        q = v + 60 + (q << 3) | 0;break;
                      }do if ((q | 2 | 0) == 3) {
                        if (!(c[v + 120 >> 2] | 0)) break;q = v + 116 | 0;break Vb;
                      } while (0);Wb: do switch (q | 0) {case 0:case 2:case 4:case 5:
                          {
                            if (!(c[v + 112 >> 2] | 0)) break Wb;q = v + 108 | 0;break Vb;
                          }default:
                          {}} while (0);if (!(c[v + 128 >> 2] | 0)) {
                        q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
                      } else {
                        q = v + 124 | 0;break;
                      }
                    } while (0);switch (c[q + 4 >> 2] | 0) {case 3:
                        {
                          u = T(0.0);break;
                        }case 2:
                        {
                          u = T(T(Fb * T(g[q >> 2])) / T(100.0));break;
                        }case 1:
                        {
                          u = T(g[q >> 2]);break;
                        }default:
                        u = T(t);}u = T(Fl(E, T(D + u)));break Fb;
                  }default:
                  {}} while (0);if (!o) {
                u = E;break;
              }do if (Ab) {
                if (!(c[_b >> 2] | 0)) {
                  eb = 2173;break;
                }u = T(g[oa >> 2]);if (!(u >= T(0.0))) eb = 2173;
              } else eb = 2173; while (0);if ((eb | 0) == 2173) {
                eb = 0;q = c[k >> 2] | 0;Xb: do if (!(c[b + 276 + (q << 3) + 4 >> 2] | 0)) {
                  if ((q | 2 | 0) == 3 ? c[pa >> 2] | 0 : 0) {
                    q = va;break;
                  }switch (q | 0) {case 0:case 2:case 4:case 5:
                      {
                        if (c[ya >> 2] | 0) {
                          q = za;break Xb;
                        }break;
                      }default:
                      {}}if (c[wa >> 2] | 0) {
                    q = xa;break;
                  }q = (q | 1 | 0) == 5 ? 1012 : 1036;
                } else q = b + 276 + (q << 3) | 0; while (0);u = T(Fl(T(g[q >> 2]), T(0.0)));
              }u = T(G + u);N = v + 400 + (c[Ha >> 2] << 2) | 0;g[N >> 2] = T(u + T(g[N >> 2]));u = E;
            } while (0);w = w + 1 | 0;if ((w | 0) == (Q | 0)) {
              F = u;break;
            } else E = u;
          }
        } else F = T(0.0);H = T(bb + s);if (ea) {
          D = T(jb + F);h = c[fa >> 2] | 0;switch (h | 0) {case 2:
              {
                s = T(T(zb * T(g[Da >> 2])) / T(100.0));break;
              }case 1:
              {
                s = T(g[Da >> 2]);break;
              }default:
              s = T(t);}switch (c[ga >> 2] | 0) {case 2:
              {
                u = T(T(zb * T(g[Ca >> 2])) / T(100.0));break;
              }case 1:
              {
                u = T(g[Ca >> 2]);break;
              }default:
              u = T(t);}eb = u < D & (u >= T(0.0) & ((g[j >> 2] = u, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041);E = eb ? u : D;eb = s >= T(0.0) & ((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041 & E < s;E = eb ? s : E;Yb: do if (xb) {
            q = c[Cb >> 2] | 0;switch (q | 0) {case 1:
                {
                  s = T(g[Hb >> 2]);u = s;break;
                }case 2:
                {
                  s = T(g[Hb >> 2]);u = T(T(s * m) / T(100.0));break;
                }default:
                {
                  eb = 2198;break Yb;
                }}if (!(u >= T(0.0))) {
              eb = 2198;break;
            }switch (q | 0) {case 2:
                {
                  s = T(T(s * m) / T(100.0));eb = 2210;break Yb;
                }case 1:
                {
                  eb = 2210;break Yb;
                }default:
                {
                  s = T(t);eb = 2210;break Yb;
                }}
          } else eb = 2198; while (0);if ((eb | 0) == 2198) {
            q = c[ha >> 2] | 0;Zb: do if (!(c[b + 204 + (q << 3) + 4 >> 2] | 0)) {
              if ((q | 2 | 0) == 3 ? c[ia >> 2] | 0 : 0) {
                q = ja;break;
              }switch (q | 0) {case 0:case 2:case 4:case 5:
                  {
                    if (c[ma >> 2] | 0) {
                      q = na;break Zb;
                    }break;
                  }default:
                  {}}if (c[ka >> 2] | 0) {
                q = la;break;
              }q = (q | 1 | 0) == 5 ? 1012 : 1036;
            } else q = b + 204 + (q << 3) | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
                {
                  s = T(T(T(g[q >> 2]) * m) / T(100.0));break;
                }case 1:
                {
                  s = T(g[q >> 2]);break;
                }default:
                s = T(t);}s = T(Fl(s, T(0.0)));if (xb) eb = 2210;else eb = 2213;
          }do if ((eb | 0) == 2210) {
            if (!(c[_b >> 2] | 0)) {
              eb = 2213;break;
            }u = T(g[oa >> 2]);if (!(u >= T(0.0))) {
              eb = 2213;break;
            }s = T(s + u);eb = 2222;
          } while (0);if ((eb | 0) == 2213) {
            q = c[ha >> 2] | 0;_b: do if (!(c[b + 276 + (q << 3) + 4 >> 2] | 0)) {
              if ((q | 2 | 0) == 3 ? c[pa >> 2] | 0 : 0) {
                q = va;break;
              }switch (q | 0) {case 0:case 2:case 4:case 5:
                  {
                    if (c[ya >> 2] | 0) {
                      q = za;break _b;
                    }break;
                  }default:
                  {}}if (c[wa >> 2] | 0) {
                q = xa;break;
              }q = (q | 1 | 0) == 5 ? 1012 : 1036;
            } else q = b + 276 + (q << 3) | 0; while (0);s = T(s + T(Fl(T(g[q >> 2]), T(0.0))));if (xb) eb = 2222;else eb = 2229;
          }$b: do if ((eb | 0) == 2222) {
            q = c[Gb >> 2] | 0;switch (q | 0) {case 1:
                {
                  u = T(g[Jb >> 2]);D = u;break;
                }case 2:
                {
                  u = T(g[Jb >> 2]);D = T(T(u * m) / T(100.0));break;
                }default:
                {
                  eb = 2229;break $b;
                }}if (!(D >= T(0.0))) {
              eb = 2229;break;
            }switch (q | 0) {case 2:
                {
                  u = T(T(u * m) / T(100.0));eb = 2241;break $b;
                }case 1:
                {
                  eb = 2241;break $b;
                }default:
                {
                  u = T(t);eb = 2241;break $b;
                }}
          } while (0);if ((eb | 0) == 2229) {
            q = c[Aa >> 2] | 0;ac: do if (!(c[b + 204 + (q << 3) + 4 >> 2] | 0)) {
              if ((q | 2 | 0) == 3 ? c[ia >> 2] | 0 : 0) {
                q = ja;break;
              }switch (q | 0) {case 0:case 2:case 4:case 5:
                  {
                    if (c[ma >> 2] | 0) {
                      q = na;break ac;
                    }break;
                  }default:
                  {}}if (c[ka >> 2] | 0) {
                q = la;break;
              }q = (q | 1 | 0) == 5 ? 1012 : 1036;
            } else q = b + 204 + (q << 3) | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
                {
                  u = T(T(T(g[q >> 2]) * m) / T(100.0));break;
                }case 1:
                {
                  u = T(g[q >> 2]);break;
                }default:
                u = T(t);}u = T(Fl(u, T(0.0)));if (xb) eb = 2241;else eb = 2243;
          }do if ((eb | 0) == 2241) {
            eb = 0;if (!(c[$b >> 2] | 0)) {
              eb = 2243;break;
            }D = T(g[Ba >> 2]);if (!(D >= T(0.0))) eb = 2243;
          } while (0);if ((eb | 0) == 2243) {
            q = c[Aa >> 2] | 0;bc: do if (!(c[b + 276 + (q << 3) + 4 >> 2] | 0)) {
              if ((q | 2 | 0) == 3 ? c[pa >> 2] | 0 : 0) {
                q = va;break;
              }switch (q | 0) {case 0:case 2:case 4:case 5:
                  {
                    if (c[ya >> 2] | 0) {
                      q = za;break bc;
                    }break;
                  }default:
                  {}}if (c[wa >> 2] | 0) {
                q = xa;break;
              }q = (q | 1 | 0) == 5 ? 1012 : 1036;
            } else q = b + 276 + (q << 3) | 0; while (0);D = T(Fl(T(g[q >> 2]), T(0.0)));
          }G = T(T(Fl(E, T(s + T(u + D)))) - jb);q = h;
        } else {
          G = gb;q = c[fa >> 2] | 0;
        }D = T(jb + (Oa ? gb : F));switch (q | 0) {case 2:
            {
              s = T(T(zb * T(g[Da >> 2])) / T(100.0));break;
            }case 1:
            {
              s = T(g[Da >> 2]);break;
            }default:
            s = T(t);}switch (c[ga >> 2] | 0) {case 2:
            {
              u = T(T(zb * T(g[Ca >> 2])) / T(100.0));break;
            }case 1:
            {
              u = T(g[Ca >> 2]);break;
            }default:
            u = T(t);}eb = u < D & (u >= T(0.0) & ((g[j >> 2] = u, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041);E = eb ? u : D;eb = s >= T(0.0) & ((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041 & E < s;E = eb ? s : E;cc: do if (xb) {
          q = c[Cb >> 2] | 0;switch (q | 0) {case 1:
              {
                s = T(g[Hb >> 2]);u = s;break;
              }case 2:
              {
                s = T(g[Hb >> 2]);u = T(T(s * m) / T(100.0));break;
              }default:
              {
                eb = 2267;break cc;
              }}if (!(u >= T(0.0))) {
            eb = 2267;break;
          }switch (q | 0) {case 2:
              {
                s = T(T(s * m) / T(100.0));eb = 2279;break cc;
              }case 1:
              {
                eb = 2279;break cc;
              }default:
              {
                s = T(t);eb = 2279;break cc;
              }}
        } else eb = 2267; while (0);if ((eb | 0) == 2267) {
          q = c[ha >> 2] | 0;dc: do if (!(c[b + 204 + (q << 3) + 4 >> 2] | 0)) {
            if ((q | 2 | 0) == 3 ? c[ia >> 2] | 0 : 0) {
              q = ja;break;
            }switch (q | 0) {case 0:case 2:case 4:case 5:
                {
                  if (c[ma >> 2] | 0) {
                    q = na;break dc;
                  }break;
                }default:
                {}}if (c[ka >> 2] | 0) {
              q = la;break;
            }q = (q | 1 | 0) == 5 ? 1012 : 1036;
          } else q = b + 204 + (q << 3) | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
              {
                s = T(T(T(g[q >> 2]) * m) / T(100.0));break;
              }case 1:
              {
                s = T(g[q >> 2]);break;
              }default:
              s = T(t);}s = T(Fl(s, T(0.0)));if (xb) eb = 2279;else eb = 2282;
        }do if ((eb | 0) == 2279) {
          if (!(c[_b >> 2] | 0)) {
            eb = 2282;break;
          }u = T(g[oa >> 2]);if (!(u >= T(0.0))) {
            eb = 2282;break;
          }s = T(s + u);eb = 2291;
        } while (0);if ((eb | 0) == 2282) {
          q = c[ha >> 2] | 0;ec: do if (!(c[b + 276 + (q << 3) + 4 >> 2] | 0)) {
            if ((q | 2 | 0) == 3 ? c[pa >> 2] | 0 : 0) {
              q = va;break;
            }switch (q | 0) {case 0:case 2:case 4:case 5:
                {
                  if (c[ya >> 2] | 0) {
                    q = za;break ec;
                  }break;
                }default:
                {}}if (c[wa >> 2] | 0) {
              q = xa;break;
            }q = (q | 1 | 0) == 5 ? 1012 : 1036;
          } else q = b + 276 + (q << 3) | 0; while (0);s = T(s + T(Fl(T(g[q >> 2]), T(0.0))));if (xb) eb = 2291;else eb = 2298;
        }fc: do if ((eb | 0) == 2291) {
          q = c[Gb >> 2] | 0;switch (q | 0) {case 1:
              {
                u = T(g[Jb >> 2]);D = u;break;
              }case 2:
              {
                u = T(g[Jb >> 2]);D = T(T(u * m) / T(100.0));break;
              }default:
              {
                eb = 2298;break fc;
              }}if (!(D >= T(0.0))) {
            eb = 2298;break;
          }switch (q | 0) {case 2:
              {
                u = T(T(u * m) / T(100.0));eb = 2310;break fc;
              }case 1:
              {
                eb = 2310;break fc;
              }default:
              {
                u = T(t);eb = 2310;break fc;
              }}
        } while (0);if ((eb | 0) == 2298) {
          q = c[Aa >> 2] | 0;gc: do if (!(c[b + 204 + (q << 3) + 4 >> 2] | 0)) {
            if ((q | 2 | 0) == 3 ? c[ia >> 2] | 0 : 0) {
              q = ja;break;
            }switch (q | 0) {case 0:case 2:case 4:case 5:
                {
                  if (c[ma >> 2] | 0) {
                    q = na;break gc;
                  }break;
                }default:
                {}}if (c[ka >> 2] | 0) {
              q = la;break;
            }q = (q | 1 | 0) == 5 ? 1012 : 1036;
          } else q = b + 204 + (q << 3) | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
              {
                u = T(T(T(g[q >> 2]) * m) / T(100.0));break;
              }case 1:
              {
                u = T(g[q >> 2]);break;
              }default:
              u = T(t);}u = T(Fl(u, T(0.0)));if (xb) eb = 2310;else eb = 2312;
        }do if ((eb | 0) == 2310) {
          eb = 0;if (!(c[$b >> 2] | 0)) {
            eb = 2312;break;
          }D = T(g[Ba >> 2]);if (!(D >= T(0.0))) eb = 2312;
        } while (0);if ((eb | 0) == 2312) {
          eb = 0;q = c[Aa >> 2] | 0;hc: do if (!(c[b + 276 + (q << 3) + 4 >> 2] | 0)) {
            if ((q | 2 | 0) == 3 ? c[pa >> 2] | 0 : 0) {
              q = va;break;
            }switch (q | 0) {case 0:case 2:case 4:case 5:
                {
                  if (c[ya >> 2] | 0) {
                    q = za;break hc;
                  }break;
                }default:
                {}}if (c[wa >> 2] | 0) {
              q = xa;break;
            }q = (q | 1 | 0) == 5 ? 1012 : 1036;
          } else q = b + 276 + (q << 3) | 0; while (0);D = T(Fl(T(g[q >> 2]), T(0.0)));
        }E = T(T(Fl(E, T(s + T(u + D)))) - jb);if (y & o) {
          w = O;do {
            x = Zb(c[Pb >> 2] | 0, w) | 0;do if ((c[x + 36 >> 2] | 0) != 1) {
              if ((c[x + 24 >> 2] | 0) != 1) {
                q = x + 20 | 0;q = c[((c[q >> 2] | 0) == 0 ? Fa : q) >> 2] | 0;ic: do switch (q | 0) {case 5:
                    {
                      q = (c[Mb >> 2] | 1 | 0) == 1 ? 1 : 5;eb = 2431;break;
                    }case 4:
                    {
                      if (xb ? (mb = c[x + 96 >> 2] | 0, (mb | 0) != 0) : 0) q = mb;else q = c[x + 60 + (c[ha >> 2] << 3) + 4 >> 2] | 0;if ((q | 0) == 3) {
                        q = 4;eb = 2431;break ic;
                      }if (xb ? (nb = c[x + 104 >> 2] | 0, (nb | 0) != 0) : 0) q = nb;else q = c[x + 60 + (c[Aa >> 2] << 3) + 4 >> 2] | 0;if ((q | 0) == 3) {
                        q = 4;eb = 2431;break ic;
                      }v = c[Ga >> 2] | 0;q = c[x + 984 + (v << 2) >> 2] | 0;switch (c[q + 4 >> 2] | 0) {case 0:case 3:
                          break;case 1:
                          {
                            if (!(T(g[q >> 2]) < T(0.0))) {
                              s = Ya;break ic;
                            }break;
                          }case 2:
                          {
                            if (!(Pa | T(g[q >> 2]) < T(0.0))) {
                              s = Ya;break ic;
                            }break;
                          }default:
                          {
                            s = Ya;break ic;
                          }}h = c[W >> 2] | 0;u = T(g[x + 908 + (h << 2) >> 2]);s = T(g[x + 396 >> 2]);if (((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) D = E;else {
                        ua = T(u / s);D = T(u * s);D = T((Ab ? ua : D) + T(Qd(x, Ob, Fb)));
                      }u = T(u + T(Qd(x, Nb, Fb)));q = x + 380 + (h << 3) | 0;switch (c[x + 380 + (h << 3) + 4 >> 2] | 0) {case 2:
                          {
                            s = T(T(J * T(g[q >> 2])) / T(100.0));break;
                          }case 1:
                          {
                            s = T(g[q >> 2]);break;
                          }default:
                          s = T(t);}s = T(s + T(Qd(x, Nb, Fb)));u = u < s | ((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040 ? u : s;q = x + 380 + (v << 3) | 0;switch (c[x + 380 + (v << 3) + 4 >> 2] | 0) {case 2:
                          {
                            s = T(T(gb * T(g[q >> 2])) / T(100.0));break;
                          }case 1:
                          {
                            s = T(g[q >> 2]);break;
                          }default:
                          s = T(t);}s = T(s + T(Qd(x, Ob, Fb)));s = D < s | ((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040 ? D : s;ua = Ab ? u : s;s = Ab ? s : u;Md(x, ua, s, Sb, ((g[j >> 2] = ua, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041 & 1, ((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041 & 1, Fb, Eb, 1, 4113, p) | 0;s = Ya;break;
                    }default:
                    eb = 2431;} while (0);jc: do if ((eb | 0) == 2431) {
                  eb = 0;u = T(g[x + 908 + (c[Ga >> 2] << 2) >> 2]);do if (xb) {
                    if (!(c[x + 96 >> 2] | 0)) {
                      eb = 2434;break;
                    }h = x + 92 | 0;
                  } else eb = 2434; while (0);kc: do if ((eb | 0) == 2434) {
                    eb = 0;h = c[ha >> 2] | 0;if (c[x + 60 + (h << 3) + 4 >> 2] | 0) {
                      h = x + 60 + (h << 3) | 0;break;
                    }do if ((h | 2 | 0) == 3) {
                      if (!(c[x + 120 >> 2] | 0)) break;h = x + 116 | 0;break kc;
                    } while (0);lc: do switch (h | 0) {case 0:case 2:case 4:case 5:
                        {
                          if (!(c[x + 112 >> 2] | 0)) break lc;h = x + 108 | 0;break kc;
                        }default:
                        {}} while (0);if (!(c[x + 128 >> 2] | 0)) {
                      h = (h | 1 | 0) == 5 ? 1012 : 1036;break;
                    } else {
                      h = x + 124 | 0;break;
                    }
                  } while (0);switch (c[h + 4 >> 2] | 0) {case 3:
                      {
                        s = T(0.0);break;
                      }case 2:
                      {
                        s = T(T(Fb * T(g[h >> 2])) / T(100.0));break;
                      }case 1:
                      {
                        s = T(g[h >> 2]);break;
                      }default:
                      s = T(t);}u = T(u + s);do if (xb) {
                    if (!(c[x + 104 >> 2] | 0)) {
                      eb = 2452;break;
                    }h = x + 100 | 0;
                  } else eb = 2452; while (0);mc: do if ((eb | 0) == 2452) {
                    eb = 0;h = c[Aa >> 2] | 0;if (c[x + 60 + (h << 3) + 4 >> 2] | 0) {
                      h = x + 60 + (h << 3) | 0;break;
                    }do if ((h | 2 | 0) == 3) {
                      if (!(c[x + 120 >> 2] | 0)) break;h = x + 116 | 0;break mc;
                    } while (0);nc: do switch (h | 0) {case 0:case 2:case 4:case 5:
                        {
                          if (!(c[x + 112 >> 2] | 0)) break nc;h = x + 108 | 0;break mc;
                        }default:
                        {}} while (0);if (!(c[x + 128 >> 2] | 0)) {
                      h = (h | 1 | 0) == 5 ? 1012 : 1036;break;
                    } else {
                      h = x + 124 | 0;break;
                    }
                  } while (0);switch (c[h + 4 >> 2] | 0) {case 3:
                      {
                        s = T(0.0);break;
                      }case 2:
                      {
                        s = T(T(Fb * T(g[h >> 2])) / T(100.0));break;
                      }case 1:
                      {
                        s = T(g[h >> 2]);break;
                      }default:
                      s = T(t);}s = T(G - T(u + s));if (xb ? (pb = c[x + 96 >> 2] | 0, (pb | 0) != 0) : 0) h = pb;else h = c[x + 60 + (c[ha >> 2] << 3) + 4 >> 2] | 0;do if ((h | 0) == 3) {
                    if (xb ? (qb = c[x + 104 >> 2] | 0, (qb | 0) != 0) : 0) h = qb;else h = c[x + 60 + (c[Aa >> 2] << 3) + 4 >> 2] | 0;if ((h | 0) != 3) break;s = T(Ya + T(Fl(T(0.0), T(s * T(.5)))));break jc;
                  } while (0);if (xb ? (rb = c[x + 104 >> 2] | 0, (rb | 0) != 0) : 0) h = rb;else h = c[x + 60 + (c[Aa >> 2] << 3) + 4 >> 2] | 0;if ((h | 0) == 3) {
                    s = Ya;break;
                  }if (xb ? (sb = c[x + 96 >> 2] | 0, (sb | 0) != 0) : 0) h = sb;else h = c[x + 60 + (c[ha >> 2] << 3) + 4 >> 2] | 0;if ((h | 0) == 3) {
                    s = T(Ya + T(Fl(T(0.0), s)));break;
                  }switch (q | 0) {case 1:
                      {
                        s = Ya;break jc;
                      }case 2:
                      {
                        s = T(Ya + T(s * T(.5)));break jc;
                      }default:
                      {
                        s = T(Ya + s);break jc;
                      }}
                } while (0);ua = T(qa + s);O = x + 400 + (c[Ea >> 2] << 2) | 0;g[O >> 2] = T(ua + T(g[O >> 2]));break;
              }if (xb) {
                h = c[x + 168 >> 2] | 0;do if (!h) {
                  if (!(c[x + 184 >> 2] | 0)) {
                    q = (c[x + 200 >> 2] | 0) == 0 ? 1012 : x + 196 | 0;break;
                  } else {
                    q = x + 180 | 0;break;
                  }
                } else q = x + 164 | 0; while (0);if (c[q + 4 >> 2] | 0) eb = 2343;else eb = 2331;
              } else eb = 2331;oc: do if ((eb | 0) == 2331) {
                v = c[ha >> 2] | 0;h = c[x + 132 + (v << 3) + 4 >> 2] | 0;pc: do if (!h) {
                  do if ((v | 2 | 0) == 3) {
                    if (!(c[x + 192 >> 2] | 0)) break;q = x + 188 | 0;break pc;
                  } while (0);qc: do switch (v | 0) {case 0:case 2:case 4:case 5:
                      {
                        if (!(c[x + 184 >> 2] | 0)) break qc;q = x + 180 | 0;break pc;
                      }default:
                      {}} while (0);q = (c[x + 200 >> 2] | 0) == 0 ? 1012 : x + 196 | 0;
                } else q = x + 132 + (v << 3) | 0; while (0);if (c[q + 4 >> 2] | 0) {
                  if (!xb) {
                    q = v;eb = 2352;break;
                  }h = c[x + 168 >> 2] | 0;eb = 2343;break;
                }do if (xb) {
                  if (!(c[_b >> 2] | 0)) break;s = T(g[oa >> 2]);if (s >= T(0.0)) {
                    eb = 2391;break oc;
                  }
                } while (0);rc: do if (!(c[b + 276 + (v << 3) + 4 >> 2] | 0)) {
                  if ((v | 2 | 0) == 3 ? c[pa >> 2] | 0 : 0) {
                    q = va;break;
                  }switch (v | 0) {case 0:case 2:case 4:case 5:
                      {
                        if (c[ya >> 2] | 0) {
                          q = za;break rc;
                        }break;
                      }default:
                      {}}if (c[wa >> 2] | 0) {
                    q = xa;break;
                  }q = (v | 1 | 0) == 5 ? 1012 : 1036;
                } else q = b + 276 + (v << 3) | 0; while (0);s = T(Fl(T(g[q >> 2]), T(0.0)));eb = 2390;
              } while (0);sc: do if ((eb | 0) == 2343) {
                do if (!h) {
                  if (!(c[x + 184 >> 2] | 0)) {
                    q = (c[x + 200 >> 2] | 0) == 0 ? 1012 : x + 196 | 0;break;
                  } else {
                    q = x + 180 | 0;break;
                  }
                } else q = x + 164 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 0:
                    {
                      q = c[ha >> 2] | 0;h = c[x + 132 + (q << 3) + 4 >> 2] | 0;eb = 2352;break sc;
                    }case 2:
                    {
                      s = T(T(gb * T(g[q >> 2])) / T(100.0));eb = 2366;break sc;
                    }case 1:
                    {
                      s = T(g[q >> 2]);eb = 2366;break sc;
                    }default:
                    {
                      s = T(t);eb = 2366;break sc;
                    }}
              } while (0);if ((eb | 0) == 2352) {
                tc: do if (!h) {
                  do if ((q | 2 | 0) == 3) {
                    if (!(c[x + 192 >> 2] | 0)) break;q = x + 188 | 0;break tc;
                  } while (0);uc: do switch (q | 0) {case 0:case 2:case 4:case 5:
                      {
                        if (!(c[x + 184 >> 2] | 0)) break uc;q = x + 180 | 0;break tc;
                      }default:
                      {}} while (0);q = (c[x + 200 >> 2] | 0) == 0 ? 1012 : x + 196 | 0;
                } else q = x + 132 + (q << 3) | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 0:
                    {
                      s = T(0.0);break;
                    }case 2:
                    {
                      s = T(T(gb * T(g[q >> 2])) / T(100.0));break;
                    }case 1:
                    {
                      s = T(g[q >> 2]);break;
                    }default:
                    s = T(t);}if (xb) eb = 2366;else eb = 2368;
              }do if ((eb | 0) == 2366) {
                if (!(c[_b >> 2] | 0)) {
                  eb = 2368;break;
                }u = T(g[oa >> 2]);if (!(u >= T(0.0))) eb = 2368;else eb = 2377;
              } while (0);if ((eb | 0) == 2368) {
                q = c[ha >> 2] | 0;vc: do if (!(c[b + 276 + (q << 3) + 4 >> 2] | 0)) {
                  if ((q | 2 | 0) == 3 ? c[pa >> 2] | 0 : 0) {
                    q = va;break;
                  }switch (q | 0) {case 0:case 2:case 4:case 5:
                      {
                        if (c[ya >> 2] | 0) {
                          q = za;break vc;
                        }break;
                      }default:
                      {}}if (c[wa >> 2] | 0) {
                    q = xa;break;
                  }q = (q | 1 | 0) == 5 ? 1012 : 1036;
                } else q = b + 276 + (q << 3) | 0; while (0);u = T(Fl(T(g[q >> 2]), T(0.0)));eb = 2377;
              }if ((eb | 0) == 2377) {
                s = T(s + u);eb = 2390;
              }if ((eb | 0) == 2390) if (xb) eb = 2391;else eb = 2393;do if ((eb | 0) == 2391) {
                eb = 0;if (!(c[x + 96 >> 2] | 0)) {
                  eb = 2393;break;
                }q = x + 92 | 0;
              } while (0);wc: do if ((eb | 0) == 2393) {
                eb = 0;q = c[ha >> 2] | 0;if (c[x + 60 + (q << 3) + 4 >> 2] | 0) {
                  q = x + 60 + (q << 3) | 0;break;
                }do if ((q | 2 | 0) == 3) {
                  if (!(c[x + 120 >> 2] | 0)) break;q = x + 116 | 0;break wc;
                } while (0);xc: do switch (q | 0) {case 0:case 2:case 4:case 5:
                    {
                      if (!(c[x + 112 >> 2] | 0)) break xc;q = x + 108 | 0;break wc;
                    }default:
                    {}} while (0);if (!(c[x + 128 >> 2] | 0)) {
                  q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
                } else {
                  q = x + 124 | 0;break;
                }
              } while (0);switch (c[q + 4 >> 2] | 0) {case 3:
                  {
                    u = T(0.0);break;
                  }case 2:
                  {
                    u = T(T(Fb * T(g[q >> 2])) / T(100.0));break;
                  }case 1:
                  {
                    u = T(g[q >> 2]);break;
                  }default:
                  u = T(t);}ua = T(s + u);g[x + 400 + (c[Ea >> 2] << 2) >> 2] = ua;
            } while (0);w = w + 1 | 0;
          } while ((w | 0) != (Q | 0));
        }qa = T(qa + E);aa = T(Fl(aa, H));N = sa + 1 | 0;if (Q >>> 0 >= Qb >>> 0) break;else {
          O = Q;sa = N;
        }
      }yc: do if (o) {
        v = N >>> 0 > 1;zc: do if (!v) {
          if ((c[Mb >> 2] | 1 | 0) == 1) break yc;if ((c[b + 16 >> 2] | 0) == 5) break;h = Wb(c[Pb >> 2] | 0) | 0;if (!h) break yc;else q = 0;while (1) {
            sb = Zb(c[Pb >> 2] | 0, q) | 0;if ((c[sb + 24 >> 2] | 0) == 0 ? (c[sb + 20 >> 2] | 0) == 5 : 0) break zc;q = q + 1 | 0;if (q >>> 0 >= h >>> 0) break yc;
          }
        } while (0);if (((g[j >> 2] = gb, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) break;r = T(gb - qa);Ac: do switch (c[b + 12 >> 2] | 0) {case 3:
            {
              s = T(Ya + r);I = T(0.0);break;
            }case 2:
            {
              s = T(Ya + T(r * T(.5)));I = T(0.0);break;
            }case 4:
            {
              if (!(gb > qa)) {
                s = Ya;I = T(0.0);break Ac;
              }s = Ya;I = T(r / T(N >>> 0));break;
            }case 7:
            if (gb > qa) {
              s = T(Ya + T(r / T(N << 1 >>> 0)));I = T(r / T(N >>> 0));I = v ? I : T(0.0);break Ac;
            } else {
              s = T(Ya + T(r * T(.5)));I = T(0.0);break Ac;
            }case 6:
            {
              I = T(r / T(sa >>> 0));s = Ya;I = gb > qa & v ? I : T(0.0);break;
            }default:
            {
              s = Ya;I = T(0.0);
            }} while (0);if (!N) break;z = b + 16 | 0;A = 1068 + (Ob << 2) | 0;B = 1068 + (Ob << 2) | 0;K = 1084 + (Ob << 2) | 0;L = 1100 + (Ob << 2) | 0;y = 0;x = 0;r = s;while (1) {
          Bc: do if (x >>> 0 < Qb >>> 0) {
            D = T(0.0);H = T(0.0);s = T(0.0);w = x;while (1) {
              v = Zb(c[Pb >> 2] | 0, w) | 0;do if ((c[v + 36 >> 2] | 0) == 1) u = H;else {
                if (c[v + 24 >> 2] | 0) {
                  u = H;break;
                }if ((c[v + 940 >> 2] | 0) != (y | 0)) {
                  u = H;break Bc;
                }u = T(g[v + 908 + (c[L >> 2] << 2) >> 2]);if (u >= T(0.0) & ((g[j >> 2] = u, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041) s = T(Fl(s, T(u + T(Qd(v, Ob, Fb)))));sb = v + 20 | 0;if ((c[((c[sb >> 2] | 0) == 0 ? z : sb) >> 2] | 0) != 5) {
                  u = H;break;
                }if ((c[Mb >> 2] | 1 | 0) == 1) {
                  u = H;break;
                }E = T(Rd(v));h = (c[v + 72 >> 2] | 0) == 0;do if (h) {
                  if (!(c[v + 120 >> 2] | 0)) {
                    q = (c[v + 128 >> 2] | 0) == 0 ? 1036 : v + 124 | 0;break;
                  } else {
                    q = v + 116 | 0;break;
                  }
                } else q = v + 68 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 3:
                    {
                      u = T(0.0);break;
                    }case 2:
                    {
                      u = T(T(Fb * T(g[q >> 2])) / T(100.0));break;
                    }case 1:
                    {
                      u = T(g[q >> 2]);break;
                    }default:
                    u = T(t);}F = T(E + u);G = T(g[v + 912 >> 2]);do if (h) {
                  if (!(c[v + 120 >> 2] | 0)) {
                    q = (c[v + 128 >> 2] | 0) == 0 ? 1036 : v + 124 | 0;break;
                  } else {
                    q = v + 116 | 0;break;
                  }
                } else q = v + 68 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 3:
                    {
                      E = T(0.0);break;
                    }case 2:
                    {
                      E = T(T(Fb * T(g[q >> 2])) / T(100.0));break;
                    }case 1:
                    {
                      E = T(g[q >> 2]);break;
                    }default:
                    E = T(t);}do if (!(c[v + 88 >> 2] | 0)) {
                  if (!(c[v + 120 >> 2] | 0)) {
                    q = (c[v + 128 >> 2] | 0) == 0 ? 1036 : v + 124 | 0;break;
                  } else {
                    q = v + 116 | 0;break;
                  }
                } else q = v + 84 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 3:
                    {
                      u = T(0.0);break;
                    }case 2:
                    {
                      u = T(T(Fb * T(g[q >> 2])) / T(100.0));break;
                    }case 1:
                    {
                      u = T(g[q >> 2]);break;
                    }default:
                    u = T(t);}bb = T(T(G + T(E + u)) - F);Ya = T(Fl(H, F));bb = T(Fl(D, bb));D = bb;u = Ya;s = T(Fl(s, T(Ya + bb)));
              } while (0);q = w + 1 | 0;if (q >>> 0 < Qb >>> 0) {
                H = u;w = q;
              } else {
                w = q;break;
              }
            }
          } else {
            u = T(0.0);s = T(0.0);w = x;
          } while (0);G = T(I + s);if (x >>> 0 < w >>> 0) {
            E = T(r + u);F = T(r + G);h = x;while (1) {
              v = Zb(c[Pb >> 2] | 0, h) | 0;Cc: do if ((c[v + 36 >> 2] | 0) != 1) {
                if (c[v + 24 >> 2] | 0) break;sb = v + 20 | 0;Dc: do switch (c[((c[sb >> 2] | 0) == 0 ? z : sb) >> 2] | 0) {case 5:
                    {
                      if ((c[Mb >> 2] | 1 | 0) == 1) break Dc;u = T(E - T(Rd(v)));do if (!(c[v + 144 >> 2] | 0)) {
                        if (!(c[v + 192 >> 2] | 0)) {
                          q = (c[v + 200 >> 2] | 0) == 0 ? 1012 : v + 196 | 0;break;
                        } else {
                          q = v + 188 | 0;break;
                        }
                      } else q = v + 140 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 0:
                          {
                            s = T(0.0);break;
                          }case 2:
                          {
                            s = T(T(gb * T(g[q >> 2])) / T(100.0));break;
                          }case 1:
                          {
                            s = T(g[q >> 2]);break;
                          }default:
                          s = T(t);}g[v + 404 >> 2] = T(u + s);break Cc;
                    }case 1:
                    break;case 3:
                    {
                      do if (xb) {
                        if (!(c[v + 104 >> 2] | 0)) {
                          eb = 2577;break;
                        }q = v + 100 | 0;
                      } else eb = 2577; while (0);Ec: do if ((eb | 0) == 2577) {
                        eb = 0;q = c[K >> 2] | 0;if (c[v + 60 + (q << 3) + 4 >> 2] | 0) {
                          q = v + 60 + (q << 3) | 0;break;
                        }do if ((q | 2 | 0) == 3) {
                          if (!(c[v + 120 >> 2] | 0)) break;q = v + 116 | 0;break Ec;
                        } while (0);Fc: do switch (q | 0) {case 0:case 2:case 4:case 5:
                            {
                              if (!(c[v + 112 >> 2] | 0)) break Fc;q = v + 108 | 0;break Ec;
                            }default:
                            {}} while (0);if (!(c[v + 128 >> 2] | 0)) {
                          q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
                        } else {
                          q = v + 124 | 0;break;
                        }
                      } while (0);switch (c[q + 4 >> 2] | 0) {case 3:
                          {
                            s = T(0.0);break;
                          }case 2:
                          {
                            s = T(T(Fb * T(g[q >> 2])) / T(100.0));break;
                          }case 1:
                          {
                            s = T(g[q >> 2]);break;
                          }default:
                          s = T(t);}bb = T(T(F - s) - T(g[v + 908 + (c[L >> 2] << 2) >> 2]));g[v + 400 + (c[B >> 2] << 2) >> 2] = bb;break Cc;
                    }case 2:
                    {
                      bb = T(r + T(T(G - T(g[v + 908 + (c[L >> 2] << 2) >> 2])) * T(.5)));g[v + 400 + (c[B >> 2] << 2) >> 2] = bb;break Cc;
                    }case 4:
                    {
                      do if (xb) {
                        if (!(c[v + 96 >> 2] | 0)) {
                          eb = 2597;break;
                        }q = v + 92 | 0;
                      } else eb = 2597; while (0);Gc: do if ((eb | 0) == 2597) {
                        eb = 0;q = c[A >> 2] | 0;if (c[v + 60 + (q << 3) + 4 >> 2] | 0) {
                          q = v + 60 + (q << 3) | 0;break;
                        }do if ((q | 2 | 0) == 3) {
                          if (!(c[v + 120 >> 2] | 0)) break;q = v + 116 | 0;break Gc;
                        } while (0);Hc: do switch (q | 0) {case 0:case 2:case 4:case 5:
                            {
                              if (!(c[v + 112 >> 2] | 0)) break Hc;q = v + 108 | 0;break Gc;
                            }default:
                            {}} while (0);if (!(c[v + 128 >> 2] | 0)) {
                          q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
                        } else {
                          q = v + 124 | 0;break;
                        }
                      } while (0);switch (c[q + 4 >> 2] | 0) {case 3:
                          {
                            s = T(0.0);break;
                          }case 2:
                          {
                            s = T(T(Fb * T(g[q >> 2])) / T(100.0));break;
                          }case 1:
                          {
                            s = T(g[q >> 2]);break;
                          }default:
                          s = T(t);}bb = T(r + s);g[v + 400 + (c[B >> 2] << 2) >> 2] = bb;q = c[v + 984 + (c[L >> 2] << 2) >> 2] | 0;switch (c[q + 4 >> 2] | 0) {case 0:case 3:
                          break;case 1:
                          {
                            if (!(T(g[q >> 2]) < T(0.0))) break Cc;break;
                          }case 2:
                          {
                            if (!(T(g[q >> 2]) < T(0.0))) break Cc;break;
                          }default:
                          break Cc;}if (Ab) {
                        s = T(g[v + 908 >> 2]);u = T(s + T(Qd(v, Nb, Fb)));D = G;
                      } else {
                        D = T(g[v + 912 >> 2]);D = T(D + T(Qd(v, Ob, Fb)));u = G;s = T(g[v + 908 >> 2]);
                      }if (((g[j >> 2] = u, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) {
                        if (((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) eb = 2621;
                      } else if (T(C(T(u - s))) < T(.0000999999974)) eb = 2621;do if ((eb | 0) == 2621) {
                        eb = 0;s = T(g[v + 912 >> 2]);if (((g[j >> 2] = D, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) {
                          if (((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) break Cc;else break;
                        } else if (T(C(T(D - s))) < T(.0000999999974)) break Cc;else break;
                      } while (0);Md(v, u, D, Sb, 1, 1, Fb, Eb, 1, 4121, p) | 0;break Cc;
                    }default:
                    break Cc;} while (0);do if (xb) {
                  if (!(c[v + 96 >> 2] | 0)) {
                    eb = 2558;break;
                  }q = v + 92 | 0;
                } else eb = 2558; while (0);Ic: do if ((eb | 0) == 2558) {
                  eb = 0;q = c[A >> 2] | 0;if (c[v + 60 + (q << 3) + 4 >> 2] | 0) {
                    q = v + 60 + (q << 3) | 0;break;
                  }do if ((q | 2 | 0) == 3) {
                    if (!(c[v + 120 >> 2] | 0)) break;q = v + 116 | 0;break Ic;
                  } while (0);Jc: do switch (q | 0) {case 0:case 2:case 4:case 5:
                      {
                        if (!(c[v + 112 >> 2] | 0)) break Jc;q = v + 108 | 0;break Ic;
                      }default:
                      {}} while (0);if (!(c[v + 128 >> 2] | 0)) {
                    q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
                  } else {
                    q = v + 124 | 0;break;
                  }
                } while (0);switch (c[q + 4 >> 2] | 0) {case 3:
                    {
                      s = T(0.0);break;
                    }case 2:
                    {
                      s = T(T(Fb * T(g[q >> 2])) / T(100.0));break;
                    }case 1:
                    {
                      s = T(g[q >> 2]);break;
                    }default:
                    s = T(t);}bb = T(r + s);g[v + 400 + (c[B >> 2] << 2) >> 2] = bb;
              } while (0);h = h + 1 | 0;if ((h | 0) == (w | 0)) {
                r = F;break;
              }
            }
          } else r = T(r + G);y = y + 1 | 0;if ((y | 0) == (N | 0)) break;else x = w;
        }
      } while (0);h = c[Ua >> 2] | 0;switch (h | 0) {case 2:
          {
            s = T(T(T(g[Va >> 2]) * m) / T(100.0));break;
          }case 1:
          {
            s = T(g[Va >> 2]);break;
          }default:
          s = T(t);}switch (c[Xa >> 2] | 0) {case 2:
          {
            r = T(T(T(g[Wa >> 2]) * m) / T(100.0));break;
          }case 1:
          {
            r = T(g[Wa >> 2]);break;
          }default:
          r = T(t);}x = r < e & (r >= T(0.0) & ((g[j >> 2] = r, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041);D = x ? r : e;x = s >= T(0.0) & ((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041 & D < s;D = x ? s : D;x = c[Cb >> 2] | 0;switch (x | 0) {case 1:
          {
            s = T(g[Hb >> 2]);r = s;eb = 2646;break;
          }case 2:
          {
            s = T(g[Hb >> 2]);r = T(T(s * m) / T(100.0));eb = 2646;break;
          }default:
          eb = 2650;}Kc: do if ((eb | 0) == 2646) {
        if (!(r >= T(0.0))) {
          eb = 2650;break;
        }switch (x | 0) {case 2:
            {
              s = T(T(s * m) / T(100.0));break Kc;
            }case 1:
            break Kc;default:
            {
              s = T(t);break Kc;
            }}
      } while (0);if ((eb | 0) == 2650) {
        do if (!(c[b + 208 >> 2] | 0)) {
          if (!(c[b + 256 >> 2] | 0)) {
            q = (c[b + 272 >> 2] | 0) == 0 ? 1036 : b + 268 | 0;break;
          } else {
            q = b + 252 | 0;break;
          }
        } else q = b + 204 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
            {
              r = T(T(T(g[q >> 2]) * m) / T(100.0));break;
            }case 1:
            {
              r = T(g[q >> 2]);break;
            }default:
            r = T(t);}s = T(Fl(r, T(0.0)));
      }y = (c[_b >> 2] | 0) == 0;if (!y ? (wb = T(g[b + 308 >> 2]), wb >= T(0.0)) : 0) r = wb;else {
        do if (!(c[b + 280 >> 2] | 0)) {
          if (!(c[b + 328 >> 2] | 0)) {
            q = (c[b + 344 >> 2] | 0) == 0 ? 1036 : b + 340 | 0;break;
          } else {
            q = b + 324 | 0;break;
          }
        } else q = b + 276 | 0; while (0);r = T(Fl(T(g[q >> 2]), T(0.0)));
      }u = T(s + r);z = c[Gb >> 2] | 0;switch (z | 0) {case 1:
          {
            s = T(g[Jb >> 2]);r = s;eb = 2670;break;
          }case 2:
          {
            s = T(g[Jb >> 2]);r = T(T(s * m) / T(100.0));eb = 2670;break;
          }default:
          eb = 2674;}Lc: do if ((eb | 0) == 2670) {
        if (!(r >= T(0.0))) {
          eb = 2674;break;
        }switch (z | 0) {case 2:
            {
              s = T(T(s * m) / T(100.0));break Lc;
            }case 1:
            break Lc;default:
            {
              s = T(t);break Lc;
            }}
      } while (0);if ((eb | 0) == 2674) {
        do if (!(c[b + 224 >> 2] | 0)) {
          if (!(c[b + 256 >> 2] | 0)) {
            q = (c[b + 272 >> 2] | 0) == 0 ? 1036 : b + 268 | 0;break;
          } else {
            q = b + 252 | 0;break;
          }
        } else q = b + 220 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
            {
              r = T(T(T(g[q >> 2]) * m) / T(100.0));break;
            }case 1:
            {
              r = T(g[q >> 2]);break;
            }default:
            r = T(t);}s = T(Fl(r, T(0.0)));
      }A = (c[$b >> 2] | 0) == 0;if (!A ? (yb = T(g[b + 316 >> 2]), yb >= T(0.0)) : 0) r = yb;else {
        do if (!(c[b + 296 >> 2] | 0)) {
          if (!(c[b + 328 >> 2] | 0)) {
            q = (c[b + 344 >> 2] | 0) == 0 ? 1036 : b + 340 | 0;break;
          } else {
            q = b + 324 | 0;break;
          }
        } else q = b + 292 | 0; while (0);r = T(Fl(T(g[q >> 2]), T(0.0)));
      }ma = b + 908 | 0;g[ma >> 2] = T(Fl(D, T(u + T(s + r))));w = c[Za >> 2] | 0;switch (w | 0) {case 2:
          {
            s = T(T(T(g[_a >> 2]) * n) / T(100.0));break;
          }case 1:
          {
            s = T(g[_a >> 2]);break;
          }default:
          s = T(t);}switch (c[ab >> 2] | 0) {case 2:
          {
            r = T(T(T(g[$a >> 2]) * n) / T(100.0));break;
          }case 1:
          {
            r = T(g[$a >> 2]);break;
          }default:
          r = T(t);}sb = r < f & (r >= T(0.0) & ((g[j >> 2] = r, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041);u = sb ? r : f;sb = s >= T(0.0) & ((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041 & u < s;u = sb ? s : u;do if (!(c[Bb >> 2] | 0)) {
        if (!(c[b + 264 >> 2] | 0)) {
          q = (c[b + 272 >> 2] | 0) == 0 ? 1036 : b + 268 | 0;break;
        } else {
          q = b + 260 | 0;break;
        }
      } else q = b + 212 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
          {
            r = T(T(T(g[q >> 2]) * m) / T(100.0));break;
          }case 1:
          {
            r = T(g[q >> 2]);break;
          }default:
          r = T(t);}r = T(Fl(r, T(0.0)));do if (!(c[ac >> 2] | 0)) {
        if (!(c[b + 336 >> 2] | 0)) {
          q = (c[b + 344 >> 2] | 0) == 0 ? 1036 : b + 340 | 0;break;
        } else {
          q = b + 332 | 0;break;
        }
      } else q = b + 284 | 0; while (0);s = T(r + T(Fl(T(g[q >> 2]), T(0.0))));do if (!(c[Db >> 2] | 0)) {
        if (!(c[b + 264 >> 2] | 0)) {
          q = (c[b + 272 >> 2] | 0) == 0 ? 1036 : b + 268 | 0;break;
        } else {
          q = b + 260 | 0;break;
        }
      } else q = b + 228 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
          {
            r = T(T(T(g[q >> 2]) * m) / T(100.0));break;
          }case 1:
          {
            r = T(g[q >> 2]);break;
          }default:
          r = T(t);}r = T(Fl(r, T(0.0)));do if (!(c[bc >> 2] | 0)) {
        if (!(c[b + 336 >> 2] | 0)) {
          q = (c[b + 344 >> 2] | 0) == 0 ? 1036 : b + 340 | 0;break;
        } else {
          q = b + 332 | 0;break;
        }
      } else q = b + 300 | 0; while (0);la = b + 912 | 0;g[la >> 2] = T(Fl(u, T(s + T(r + T(Fl(T(g[q >> 2]), T(0.0)))))));do if (!Qa) eb = 2725;else {
        q = c[b + 32 >> 2] | 0;v = (Qa | 0) == 2;if (v & (q | 0) != 2) {
          eb = 2725;break;
        }if (!(v & (q | 0) == 2)) break;u = T(hb + J);switch (tb | 0) {case 1:
            {
              v = 1;h = w;eb = 2811;break;
            }case 3:
            {
              v = 0;eb = 2811;break;
            }default:
            {
              s = T(t);r = T(t);
            }}Mc: do if ((eb | 0) == 2811) {
          q = b + 364 + (v << 3) | 0;switch (h | 0) {case 2:
              {
                r = T(T(ub * T(g[q >> 2])) / T(100.0));break;
              }case 1:
              {
                r = T(g[q >> 2]);break;
              }default:
              r = T(t);}q = b + 380 + (v << 3) | 0;switch (c[b + 380 + (v << 3) + 4 >> 2] | 0) {case 2:
              {
                s = T(T(ub * T(g[q >> 2])) / T(100.0));break Mc;
              }case 1:
              {
                s = T(g[q >> 2]);break Mc;
              }default:
              {
                s = T(t);break Mc;
              }}
        } while (0);eb = s < aa & (s >= T(0.0) & ((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041);n = eb ? s : aa;eb = r >= T(0.0) & ((g[j >> 2] = r, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041 & n < r;r = T(Fl(T(Hl(u, eb ? r : n)), hb));eb = 2818;
      } while (0);if ((eb | 0) == 2725) {
        switch (tb | 0) {case 1:
            {
              v = 1;h = w;eb = 2727;break;
            }case 3:
            {
              v = 0;eb = 2727;break;
            }default:
            {
              s = T(t);r = T(t);
            }}Nc: do if ((eb | 0) == 2727) {
          q = b + 364 + (v << 3) | 0;switch (h | 0) {case 2:
              {
                r = T(T(ub * T(g[q >> 2])) / T(100.0));break;
              }case 1:
              {
                r = T(g[q >> 2]);break;
              }default:
              r = T(t);}q = b + 380 + (v << 3) | 0;switch (c[b + 380 + (v << 3) + 4 >> 2] | 0) {case 2:
              {
                s = T(T(ub * T(g[q >> 2])) / T(100.0));break Nc;
              }case 1:
              {
                s = T(g[q >> 2]);break Nc;
              }default:
              {
                s = T(t);break Nc;
              }}
        } while (0);Db = s < aa & (s >= T(0.0) & ((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041);D = Db ? s : aa;Db = r >= T(0.0) & ((g[j >> 2] = r, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041 & D < r;D = Db ? r : D;Oc: do if (Ab) {
          switch (x | 0) {case 1:
              {
                r = T(g[Hb >> 2]);s = r;break;
              }case 2:
              {
                r = T(g[Hb >> 2]);s = T(T(r * m) / T(100.0));break;
              }default:
              {
                eb = 2741;break Oc;
              }}if (!(s >= T(0.0))) {
            eb = 2741;break;
          }switch (x | 0) {case 2:
              {
                r = T(T(r * m) / T(100.0));eb = 2756;break Oc;
              }case 1:
              {
                eb = 2756;break Oc;
              }default:
              {
                r = T(t);eb = 2756;break Oc;
              }}
        } else eb = 2741; while (0);if ((eb | 0) == 2741) {
          q = c[1068 + (Nb << 2) >> 2] | 0;Pc: do if (!(c[b + 204 + (q << 3) + 4 >> 2] | 0)) {
            do if ((q | 2 | 0) == 3) {
              if (!(c[b + 264 >> 2] | 0)) break;q = b + 260 | 0;break Pc;
            } while (0);Qc: do switch (q | 0) {case 0:case 2:case 4:case 5:
                {
                  if (!(c[b + 256 >> 2] | 0)) break Qc;q = b + 252 | 0;break Pc;
                }default:
                {}} while (0);if (!(c[b + 272 >> 2] | 0)) {
              q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
            } else {
              q = b + 268 | 0;break;
            }
          } else q = b + 204 + (q << 3) | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
              {
                r = T(T(T(g[q >> 2]) * m) / T(100.0));break;
              }case 1:
              {
                r = T(g[q >> 2]);break;
              }default:
              r = T(t);}r = T(Fl(r, T(0.0)));if (Ab) eb = 2756;else eb = 2759;
        }do if ((eb | 0) == 2756) {
          if (y) {
            eb = 2759;break;
          }s = T(g[b + 308 >> 2]);if (!(s >= T(0.0))) {
            eb = 2759;break;
          }r = T(r + s);eb = 2771;
        } while (0);if ((eb | 0) == 2759) {
          q = c[1068 + (Nb << 2) >> 2] | 0;Rc: do if (!(c[b + 276 + (q << 3) + 4 >> 2] | 0)) {
            do if ((q | 2 | 0) == 3) {
              if (!(c[b + 336 >> 2] | 0)) break;q = b + 332 | 0;break Rc;
            } while (0);Sc: do switch (q | 0) {case 0:case 2:case 4:case 5:
                {
                  if (!(c[b + 328 >> 2] | 0)) break Sc;q = b + 324 | 0;break Rc;
                }default:
                {}} while (0);if (!(c[b + 344 >> 2] | 0)) {
              q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
            } else {
              q = b + 340 | 0;break;
            }
          } else q = b + 276 + (q << 3) | 0; while (0);r = T(r + T(Fl(T(g[q >> 2]), T(0.0))));if (Ab) eb = 2771;else {
            s = r;eb = 2778;
          }
        }Tc: do if ((eb | 0) == 2771) {
          switch (z | 0) {case 1:
              {
                u = T(g[Jb >> 2]);s = u;break;
              }case 2:
              {
                u = T(g[Jb >> 2]);s = T(T(u * m) / T(100.0));break;
              }default:
              {
                s = r;eb = 2778;break Tc;
              }}if (!(s >= T(0.0))) {
            s = r;eb = 2778;break;
          }switch (z | 0) {case 2:
              {
                u = T(T(u * m) / T(100.0));eb = 2793;break Tc;
              }case 1:
              {
                eb = 2793;break Tc;
              }default:
              {
                u = T(t);eb = 2793;break Tc;
              }}
        } while (0);if ((eb | 0) == 2778) {
          q = c[1084 + (Nb << 2) >> 2] | 0;Uc: do if (!(c[b + 204 + (q << 3) + 4 >> 2] | 0)) {
            do if ((q | 2 | 0) == 3) {
              if (!(c[b + 264 >> 2] | 0)) break;q = b + 260 | 0;break Uc;
            } while (0);Vc: do switch (q | 0) {case 0:case 2:case 4:case 5:
                {
                  if (!(c[b + 256 >> 2] | 0)) break Vc;q = b + 252 | 0;break Uc;
                }default:
                {}} while (0);if (!(c[b + 272 >> 2] | 0)) {
              q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
            } else {
              q = b + 268 | 0;break;
            }
          } else q = b + 204 + (q << 3) | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
              {
                r = T(T(T(g[q >> 2]) * m) / T(100.0));break;
              }case 1:
              {
                r = T(g[q >> 2]);break;
              }default:
              r = T(t);}r = T(Fl(r, T(0.0)));if (Ab) {
            u = r;r = s;eb = 2793;
          } else {
            u = r;r = s;eb = 2795;
          }
        }do if ((eb | 0) == 2793) {
          if (A) {
            eb = 2795;break;
          }s = T(g[b + 316 >> 2]);if (!(s >= T(0.0))) eb = 2795;
        } while (0);if ((eb | 0) == 2795) {
          q = c[1084 + (Nb << 2) >> 2] | 0;Wc: do if (!(c[b + 276 + (q << 3) + 4 >> 2] | 0)) {
            do if ((q | 2 | 0) == 3) {
              if (!(c[b + 336 >> 2] | 0)) break;q = b + 332 | 0;break Wc;
            } while (0);Xc: do switch (q | 0) {case 0:case 2:case 4:case 5:
                {
                  if (!(c[b + 328 >> 2] | 0)) break Xc;q = b + 324 | 0;break Wc;
                }default:
                {}} while (0);if (!(c[b + 344 >> 2] | 0)) {
              q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
            } else {
              q = b + 340 | 0;break;
            }
          } else q = b + 276 + (q << 3) | 0; while (0);s = T(Fl(T(g[q >> 2]), T(0.0)));
        }r = T(Fl(D, T(r + T(u + s))));eb = 2818;
      }if ((eb | 0) == 2818) g[b + 908 + (c[1100 + (Nb << 2) >> 2] << 2) >> 2] = r;do if (!ib) eb = 2821;else {
        h = c[b + 32 >> 2] | 0;q = (ib | 0) == 2;if (q & (h | 0) != 2) {
          eb = 2821;break;
        }if (!(q & (h | 0) == 2)) break;D = T(jb + gb);u = T(jb + qa);h = (vb | 0) == 1 & 1;q = b + 364 + (h << 3) | 0;switch (c[b + 364 + (h << 3) + 4 >> 2] | 0) {case 2:
            {
              s = T(T(zb * T(g[q >> 2])) / T(100.0));break;
            }case 1:
            {
              s = T(g[q >> 2]);break;
            }default:
            s = T(t);}q = b + 380 + (h << 3) | 0;switch (c[b + 380 + (h << 3) + 4 >> 2] | 0) {case 2:
            {
              r = T(T(zb * T(g[q >> 2])) / T(100.0));break;
            }case 1:
            {
              r = T(g[q >> 2]);break;
            }default:
            r = T(t);}eb = r < u & (r >= T(0.0) & ((g[j >> 2] = r, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041);r = eb ? r : u;eb = s >= T(0.0) & ((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041 & r < s;r = T(Fl(T(Hl(D, eb ? s : r)), jb));eb = 2910;
      } while (0);if ((eb | 0) == 2821) {
        u = T(jb + qa);h = (vb | 0) == 1 & 1;q = b + 364 + (h << 3) | 0;switch (c[b + 364 + (h << 3) + 4 >> 2] | 0) {case 2:
            {
              s = T(T(zb * T(g[q >> 2])) / T(100.0));break;
            }case 1:
            {
              s = T(g[q >> 2]);break;
            }default:
            s = T(t);}q = b + 380 + (h << 3) | 0;switch (c[b + 380 + (h << 3) + 4 >> 2] | 0) {case 2:
            {
              r = T(T(zb * T(g[q >> 2])) / T(100.0));break;
            }case 1:
            {
              r = T(g[q >> 2]);break;
            }default:
            r = T(t);}Db = r < u & (r >= T(0.0) & ((g[j >> 2] = r, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041);D = Db ? r : u;Db = s >= T(0.0) & ((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041 & D < s;D = Db ? s : D;Yc: do if (xb) {
          q = c[Cb >> 2] | 0;switch (q | 0) {case 1:
              {
                r = T(g[Hb >> 2]);s = r;break;
              }case 2:
              {
                r = T(g[Hb >> 2]);s = T(T(r * m) / T(100.0));break;
              }default:
              {
                eb = 2835;break Yc;
              }}if (!(s >= T(0.0))) {
            eb = 2835;break;
          }switch (q | 0) {case 2:
              {
                r = T(T(r * m) / T(100.0));eb = 2850;break Yc;
              }case 1:
              {
                eb = 2850;break Yc;
              }default:
              {
                r = T(t);eb = 2850;break Yc;
              }}
        } else eb = 2835; while (0);if ((eb | 0) == 2835) {
          q = c[1068 + (Ob << 2) >> 2] | 0;Zc: do if (!(c[b + 204 + (q << 3) + 4 >> 2] | 0)) {
            do if ((q | 2 | 0) == 3) {
              if (!(c[b + 264 >> 2] | 0)) break;q = b + 260 | 0;break Zc;
            } while (0);_c: do switch (q | 0) {case 0:case 2:case 4:case 5:
                {
                  if (!(c[b + 256 >> 2] | 0)) break _c;q = b + 252 | 0;break Zc;
                }default:
                {}} while (0);if (!(c[b + 272 >> 2] | 0)) {
              q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
            } else {
              q = b + 268 | 0;break;
            }
          } else q = b + 204 + (q << 3) | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
              {
                r = T(T(T(g[q >> 2]) * m) / T(100.0));break;
              }case 1:
              {
                r = T(g[q >> 2]);break;
              }default:
              r = T(t);}r = T(Fl(r, T(0.0)));if (xb) eb = 2850;else eb = 2853;
        }do if ((eb | 0) == 2850) {
          if (!(c[_b >> 2] | 0)) {
            eb = 2853;break;
          }s = T(g[b + 308 >> 2]);if (!(s >= T(0.0))) {
            eb = 2853;break;
          }s = T(r + s);eb = 2865;
        } while (0);if ((eb | 0) == 2853) {
          q = c[1068 + (Ob << 2) >> 2] | 0;$c: do if (!(c[b + 276 + (q << 3) + 4 >> 2] | 0)) {
            do if ((q | 2 | 0) == 3) {
              if (!(c[b + 336 >> 2] | 0)) break;q = b + 332 | 0;break $c;
            } while (0);ad: do switch (q | 0) {case 0:case 2:case 4:case 5:
                {
                  if (!(c[b + 328 >> 2] | 0)) break ad;q = b + 324 | 0;break $c;
                }default:
                {}} while (0);if (!(c[b + 344 >> 2] | 0)) {
              q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
            } else {
              q = b + 340 | 0;break;
            }
          } else q = b + 276 + (q << 3) | 0; while (0);s = T(r + T(Fl(T(g[q >> 2]), T(0.0))));if (xb) eb = 2865;else eb = 2872;
        }bd: do if ((eb | 0) == 2865) {
          q = c[Gb >> 2] | 0;switch (q | 0) {case 1:
              {
                r = T(g[Jb >> 2]);u = r;break;
              }case 2:
              {
                r = T(g[Jb >> 2]);u = T(T(r * m) / T(100.0));break;
              }default:
              {
                eb = 2872;break bd;
              }}if (!(u >= T(0.0))) {
            eb = 2872;break;
          }switch (q | 0) {case 2:
              {
                r = T(T(r * m) / T(100.0));eb = 2887;break bd;
              }case 1:
              {
                eb = 2887;break bd;
              }default:
              {
                r = T(t);eb = 2887;break bd;
              }}
        } while (0);if ((eb | 0) == 2872) {
          q = c[1084 + (Ob << 2) >> 2] | 0;cd: do if (!(c[b + 204 + (q << 3) + 4 >> 2] | 0)) {
            do if ((q | 2 | 0) == 3) {
              if (!(c[b + 264 >> 2] | 0)) break;q = b + 260 | 0;break cd;
            } while (0);dd: do switch (q | 0) {case 0:case 2:case 4:case 5:
                {
                  if (!(c[b + 256 >> 2] | 0)) break dd;q = b + 252 | 0;break cd;
                }default:
                {}} while (0);if (!(c[b + 272 >> 2] | 0)) {
              q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
            } else {
              q = b + 268 | 0;break;
            }
          } else q = b + 204 + (q << 3) | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 2:
              {
                r = T(T(T(g[q >> 2]) * m) / T(100.0));break;
              }case 1:
              {
                r = T(g[q >> 2]);break;
              }default:
              r = T(t);}r = T(Fl(r, T(0.0)));if (xb) eb = 2887;else eb = 2889;
        }do if ((eb | 0) == 2887) {
          if (!(c[$b >> 2] | 0)) {
            eb = 2889;break;
          }u = T(g[b + 316 >> 2]);if (!(u >= T(0.0))) eb = 2889;
        } while (0);if ((eb | 0) == 2889) {
          q = c[1084 + (Ob << 2) >> 2] | 0;ed: do if (!(c[b + 276 + (q << 3) + 4 >> 2] | 0)) {
            do if ((q | 2 | 0) == 3) {
              if (!(c[b + 336 >> 2] | 0)) break;q = b + 332 | 0;break ed;
            } while (0);fd: do switch (q | 0) {case 0:case 2:case 4:case 5:
                {
                  if (!(c[b + 328 >> 2] | 0)) break fd;q = b + 324 | 0;break ed;
                }default:
                {}} while (0);if (!(c[b + 344 >> 2] | 0)) {
              q = (q | 1 | 0) == 5 ? 1012 : 1036;break;
            } else {
              q = b + 340 | 0;break;
            }
          } else q = b + 276 + (q << 3) | 0; while (0);u = T(Fl(T(g[q >> 2]), T(0.0)));
        }r = T(Fl(D, T(s + T(r + u))));eb = 2910;
      }if ((eb | 0) == 2910) g[b + 908 + (c[1100 + (Ob << 2) >> 2] << 2) >> 2] = r;if (!o) {
        l = cc;return;
      }if ((c[Lb >> 2] | 0) == 2) {
        h = 1100 + (Ob << 2) | 0;v = 1068 + (Ob << 2) | 0;q = 0;do {
          w = Zb(c[Pb >> 2] | 0, q) | 0;if (!(c[w + 24 >> 2] | 0)) {
            Hb = c[h >> 2] | 0;m = T(g[b + 908 + (Hb << 2) >> 2]);Jb = w + 400 + (c[v >> 2] << 2) | 0;m = T(m - T(g[Jb >> 2]));g[Jb >> 2] = T(m - T(g[w + 908 + (Hb << 2) >> 2]));
          }q = q + 1 | 0;
        } while ((q | 0) != (Qb | 0));
      }gd: do if (Ta | 0) {
        N = ((Ab ? Qa : i) | 0) != 0;O = Fb > T(0.0);Q = b + 16 | 0;R = b + 316 | 0;S = b + 336 | 0;U = b + 332 | 0;W = b + 344 | 0;X = b + 340 | 0;ba = b + 328 | 0;ca = b + 324 | 0;k = b + 300 | 0;da = b + 284 | 0;ka = ((g[j >> 2] = Eb, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040;ea = b + 280 | 0;fa = b + 276 | 0;ga = b + 296 | 0;ha = b + 292 | 0;ia = b + 308 | 0;ja = ((g[j >> 2] = Fb, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040;L = Ta;while (1) {
          q = c[Mb >> 2] | 0;hd: do if (Tb) {
            switch (q | 0) {case 2:
                {
                  q = 3;h = 3;eb = 2923;break hd;
                }case 3:
                break;default:
                {
                  eb = 2922;break hd;
                }}q = 2;h = 3;eb = 2923;
          } else eb = 2922; while (0);if ((eb | 0) == 2922) {
            eb = 0;h = q | 1;if ((h | 0) == 1) {
              h = 1;K = Rb;
            } else eb = 2923;
          }if ((eb | 0) == 2923) K = 0;B = (h | 0) == 3;x = L + 96 | 0;do if (!(c[x >> 2] | 0)) {
            if (c[L + 64 >> 2] | 0) {
              h = L + 60 | 0;break;
            }if (!(c[L + 112 >> 2] | 0)) {
              h = (c[L + 128 >> 2] | 0) == 0 ? 1036 : L + 124 | 0;break;
            } else {
              h = L + 108 | 0;break;
            }
          } else h = L + 92 | 0; while (0);switch (c[h + 4 >> 2] | 0) {case 3:
              {
                s = T(0.0);break;
              }case 2:
              {
                s = T(T(Fb * T(g[h >> 2])) / T(100.0));break;
              }case 1:
              {
                s = T(g[h >> 2]);break;
              }default:
              s = T(t);}A = L + 104 | 0;do if (!(c[A >> 2] | 0)) {
            if (c[L + 80 >> 2] | 0) {
              h = L + 76 | 0;break;
            }if (!(c[L + 112 >> 2] | 0)) {
              h = (c[L + 128 >> 2] | 0) == 0 ? 1036 : L + 124 | 0;break;
            } else {
              h = L + 108 | 0;break;
            }
          } else h = L + 100 | 0; while (0);switch (c[h + 4 >> 2] | 0) {case 3:
              {
                r = T(0.0);break;
              }case 2:
              {
                r = T(T(Fb * T(g[h >> 2])) / T(100.0));break;
              }case 1:
              {
                r = T(g[h >> 2]);break;
              }default:
              r = T(t);}F = T(s + r);y = L + 72 | 0;do if (!(c[y >> 2] | 0)) {
            if (!(c[L + 120 >> 2] | 0)) {
              h = (c[L + 128 >> 2] | 0) == 0 ? 1036 : L + 124 | 0;break;
            } else {
              h = L + 116 | 0;break;
            }
          } else h = L + 68 | 0; while (0);switch (c[h + 4 >> 2] | 0) {case 3:
              {
                s = T(0.0);break;
              }case 2:
              {
                s = T(T(Fb * T(g[h >> 2])) / T(100.0));break;
              }case 1:
              {
                s = T(g[h >> 2]);break;
              }default:
              s = T(t);}z = L + 88 | 0;do if (!(c[z >> 2] | 0)) {
            if (!(c[L + 120 >> 2] | 0)) {
              h = (c[L + 128 >> 2] | 0) == 0 ? 1036 : L + 124 | 0;break;
            } else {
              h = L + 116 | 0;break;
            }
          } else h = L + 84 | 0; while (0);switch (c[h + 4 >> 2] | 0) {case 3:
              {
                r = T(0.0);break;
              }case 2:
              {
                r = T(T(Fb * T(g[h >> 2])) / T(100.0));break;
              }case 1:
              {
                r = T(g[h >> 2]);break;
              }default:
              r = T(t);}E = T(s + r);h = c[L + 984 >> 2] | 0;id: do switch (c[h + 4 >> 2] | 0) {case 0:case 3:
              {
                eb = 2970;break;
              }case 1:
              {
                if (T(g[h >> 2]) < T(0.0)) {
                  eb = 2970;break id;
                }r = T(g[h >> 2]);eb = 2969;break;
              }case 2:
              {
                if (ja | T(g[h >> 2]) < T(0.0)) {
                  eb = 2970;break id;
                }r = T(T(Fb * T(g[h >> 2])) / T(100.0));eb = 2969;break;
              }default:
              {
                r = T(t);eb = 2969;
              }} while (0);do if ((eb | 0) == 2969) r = T(F + r);else if ((eb | 0) == 2970) {
            v = (c[L + 168 >> 2] | 0) == 0;do if (v) {
              if (!(c[L + 184 >> 2] | 0)) {
                h = (c[L + 200 >> 2] | 0) == 0 ? 1012 : L + 196 | 0;break;
              } else {
                h = L + 180 | 0;break;
              }
            } else h = L + 164 | 0; while (0);if (!(c[h + 4 >> 2] | 0)) {
              do if (!(c[L + 136 >> 2] | 0)) {
                if (!(c[L + 184 >> 2] | 0)) {
                  h = (c[L + 200 >> 2] | 0) == 0 ? 1012 : L + 196 | 0;break;
                } else {
                  h = L + 180 | 0;break;
                }
              } else h = L + 132 | 0; while (0);if (!(c[h + 4 >> 2] | 0)) {
                r = T(t);break;
              }
            }w = (c[L + 176 >> 2] | 0) == 0;do if (w) {
              if (!(c[L + 184 >> 2] | 0)) {
                h = (c[L + 200 >> 2] | 0) == 0 ? 1012 : L + 196 | 0;break;
              } else {
                h = L + 180 | 0;break;
              }
            } else h = L + 172 | 0; while (0);if (!(c[h + 4 >> 2] | 0)) {
              do if (!(c[L + 152 >> 2] | 0)) {
                if (!(c[L + 184 >> 2] | 0)) {
                  h = (c[L + 200 >> 2] | 0) == 0 ? 1012 : L + 196 | 0;break;
                } else {
                  h = L + 180 | 0;break;
                }
              } else h = L + 148 | 0; while (0);if (!(c[h + 4 >> 2] | 0)) {
                r = T(t);break;
              }
            }u = T(g[ma >> 2]);if ((c[_b >> 2] | 0) != 0 ? (Ub = T(g[ia >> 2]), Ub >= T(0.0)) : 0) s = Ub;else {
              do if (!(c[ea >> 2] | 0)) {
                if (c[ba >> 2] | 0) {
                  h = ca;break;
                }h = (c[W >> 2] | 0) == 0 ? 1036 : X;
              } else h = fa; while (0);s = T(Fl(T(g[h >> 2]), T(0.0)));
            }if ((c[$b >> 2] | 0) != 0 ? (Vb = T(g[R >> 2]), Vb >= T(0.0)) : 0) r = Vb;else {
              do if (!(c[ga >> 2] | 0)) {
                if (c[ba >> 2] | 0) {
                  h = ca;break;
                }h = (c[W >> 2] | 0) == 0 ? 1036 : X;
              } else h = ha; while (0);r = T(Fl(T(g[h >> 2]), T(0.0)));
            }u = T(u - T(s + r));do if (v) {
              if (!(c[L + 184 >> 2] | 0)) {
                h = (c[L + 200 >> 2] | 0) == 0 ? 1012 : L + 196 | 0;break;
              } else {
                h = L + 180 | 0;break;
              }
            } else h = L + 164 | 0; while (0);jd: do switch (c[h + 4 >> 2] | 0) {case 0:
                {
                  do if (!(c[L + 136 >> 2] | 0)) {
                    if (!(c[L + 184 >> 2] | 0)) {
                      h = (c[L + 200 >> 2] | 0) == 0 ? 1012 : L + 196 | 0;break;
                    } else {
                      h = L + 180 | 0;break;
                    }
                  } else h = L + 132 | 0; while (0);switch (c[h + 4 >> 2] | 0) {case 0:
                      {
                        s = T(0.0);break jd;
                      }case 2:
                      {
                        s = T(T(Fb * T(g[h >> 2])) / T(100.0));break jd;
                      }case 1:
                      {
                        s = T(g[h >> 2]);break jd;
                      }default:
                      {
                        s = T(t);break jd;
                      }}
                }case 2:
                {
                  s = T(T(Fb * T(g[h >> 2])) / T(100.0));break;
                }case 1:
                {
                  s = T(g[h >> 2]);break;
                }default:
                s = T(t);} while (0);do if (w) {
              if (!(c[L + 184 >> 2] | 0)) {
                h = (c[L + 200 >> 2] | 0) == 0 ? 1012 : L + 196 | 0;break;
              } else {
                h = L + 180 | 0;break;
              }
            } else h = L + 172 | 0; while (0);kd: do switch (c[h + 4 >> 2] | 0) {case 0:
                {
                  do if (!(c[L + 152 >> 2] | 0)) {
                    if (!(c[L + 184 >> 2] | 0)) {
                      h = (c[L + 200 >> 2] | 0) == 0 ? 1012 : L + 196 | 0;break;
                    } else {
                      h = L + 180 | 0;break;
                    }
                  } else h = L + 148 | 0; while (0);switch (c[h + 4 >> 2] | 0) {case 0:
                      {
                        r = T(0.0);break kd;
                      }case 2:
                      {
                        r = T(T(Fb * T(g[h >> 2])) / T(100.0));break kd;
                      }case 1:
                      {
                        r = T(g[h >> 2]);break kd;
                      }default:
                      {
                        r = T(t);break kd;
                      }}
                }case 2:
                {
                  r = T(T(Fb * T(g[h >> 2])) / T(100.0));break;
                }case 1:
                {
                  r = T(g[h >> 2]);break;
                }default:
                r = T(t);} while (0);u = T(u - T(s + r));h = L + 364 | 0;switch (c[L + 368 >> 2] | 0) {case 2:
                {
                  s = T(T(Fb * T(g[h >> 2])) / T(100.0));break;
                }case 1:
                {
                  s = T(g[h >> 2]);break;
                }default:
                s = T(t);}h = L + 380 | 0;switch (c[L + 384 >> 2] | 0) {case 2:
                {
                  r = T(T(Fb * T(g[h >> 2])) / T(100.0));break;
                }case 1:
                {
                  r = T(g[h >> 2]);break;
                }default:
                r = T(t);}h = r < u & (r >= T(0.0) & ((g[j >> 2] = r, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041);D = h ? r : u;h = s >= T(0.0) & ((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041 & D < s;D = h ? s : D;h = L + 236 | 0;v = c[L + 240 >> 2] | 0;switch (v | 0) {case 1:
                {
                  s = T(g[h >> 2]);r = s;eb = 3049;break;
                }case 2:
                {
                  s = T(g[h >> 2]);r = T(T(Fb * s) / T(100.0));eb = 3049;break;
                }default:
                eb = 3053;}ld: do if ((eb | 0) == 3049) {
              eb = 0;if (!(r >= T(0.0))) {
                eb = 3053;break;
              }switch (v | 0) {case 2:
                  {
                    s = T(T(Fb * s) / T(100.0));break ld;
                  }case 1:
                  break ld;default:
                  {
                    s = T(t);break ld;
                  }}
            } while (0);if ((eb | 0) == 3053) {
              do if (!(c[L + 208 >> 2] | 0)) {
                if (!(c[L + 256 >> 2] | 0)) {
                  h = (c[L + 272 >> 2] | 0) == 0 ? 1036 : L + 268 | 0;break;
                } else {
                  h = L + 252 | 0;break;
                }
              } else h = L + 204 | 0; while (0);switch (c[h + 4 >> 2] | 0) {case 2:
                  {
                    r = T(T(Fb * T(g[h >> 2])) / T(100.0));break;
                  }case 1:
                  {
                    r = T(g[h >> 2]);break;
                  }default:
                  r = T(t);}s = T(Fl(r, T(0.0)));
            }if ((c[L + 312 >> 2] | 0) != 0 ? (Xb = T(g[L + 308 >> 2]), Xb >= T(0.0)) : 0) r = Xb;else {
              do if (!(c[L + 280 >> 2] | 0)) {
                if (!(c[L + 328 >> 2] | 0)) {
                  h = (c[L + 344 >> 2] | 0) == 0 ? 1036 : L + 340 | 0;break;
                } else {
                  h = L + 324 | 0;break;
                }
              } else h = L + 276 | 0; while (0);r = T(Fl(T(g[h >> 2]), T(0.0)));
            }u = T(s + r);h = L + 244 | 0;v = c[L + 248 >> 2] | 0;switch (v | 0) {case 1:
                {
                  s = T(g[h >> 2]);r = s;eb = 3073;break;
                }case 2:
                {
                  s = T(g[h >> 2]);r = T(T(Fb * s) / T(100.0));eb = 3073;break;
                }default:
                eb = 3077;}md: do if ((eb | 0) == 3073) {
              eb = 0;if (!(r >= T(0.0))) {
                eb = 3077;break;
              }switch (v | 0) {case 2:
                  {
                    s = T(T(Fb * s) / T(100.0));break md;
                  }case 1:
                  break md;default:
                  {
                    s = T(t);break md;
                  }}
            } while (0);if ((eb | 0) == 3077) {
              do if (!(c[L + 224 >> 2] | 0)) {
                if (!(c[L + 256 >> 2] | 0)) {
                  h = (c[L + 272 >> 2] | 0) == 0 ? 1036 : L + 268 | 0;break;
                } else {
                  h = L + 252 | 0;break;
                }
              } else h = L + 220 | 0; while (0);switch (c[h + 4 >> 2] | 0) {case 2:
                  {
                    r = T(T(Fb * T(g[h >> 2])) / T(100.0));break;
                  }case 1:
                  {
                    r = T(g[h >> 2]);break;
                  }default:
                  r = T(t);}s = T(Fl(r, T(0.0)));
            }if ((c[L + 320 >> 2] | 0) != 0 ? (Yb = T(g[L + 316 >> 2]), Yb >= T(0.0)) : 0) r = Yb;else {
              do if (!(c[L + 296 >> 2] | 0)) {
                if (!(c[L + 328 >> 2] | 0)) {
                  h = (c[L + 344 >> 2] | 0) == 0 ? 1036 : L + 340 | 0;break;
                } else {
                  h = L + 324 | 0;break;
                }
              } else h = L + 292 | 0; while (0);r = T(Fl(T(g[h >> 2]), T(0.0)));
            }r = T(Fl(D, T(u + T(s + r))));
          } while (0);h = c[L + 988 >> 2] | 0;nd: do switch (c[h + 4 >> 2] | 0) {case 0:case 3:
              {
                eb = 3101;break;
              }case 1:
              {
                if (T(g[h >> 2]) < T(0.0)) {
                  eb = 3101;break nd;
                }s = T(g[h >> 2]);eb = 3100;break;
              }case 2:
              {
                if (ka | T(g[h >> 2]) < T(0.0)) {
                  eb = 3101;break nd;
                }s = T(T(Eb * T(g[h >> 2])) / T(100.0));eb = 3100;break;
              }default:
              {
                s = T(t);eb = 3100;
              }} while (0);do if ((eb | 0) == 3100) s = T(E + s);else if ((eb | 0) == 3101) {
            v = (c[L + 144 >> 2] | 0) == 0;do if (v) {
              if (!(c[L + 192 >> 2] | 0)) {
                h = (c[L + 200 >> 2] | 0) == 0 ? 1012 : L + 196 | 0;break;
              } else {
                h = L + 188 | 0;break;
              }
            } else h = L + 140 | 0; while (0);if (!(c[h + 4 >> 2] | 0)) {
              s = T(t);break;
            }w = (c[L + 160 >> 2] | 0) == 0;do if (w) {
              if (!(c[L + 192 >> 2] | 0)) {
                h = (c[L + 200 >> 2] | 0) == 0 ? 1012 : L + 196 | 0;break;
              } else {
                h = L + 188 | 0;break;
              }
            } else h = L + 156 | 0; while (0);if (!(c[h + 4 >> 2] | 0)) {
              s = T(t);break;
            }u = T(g[la >> 2]);do if (!(c[ac >> 2] | 0)) {
              if (c[S >> 2] | 0) {
                h = U;break;
              }h = (c[W >> 2] | 0) == 0 ? 1036 : X;
            } else h = da; while (0);s = T(Fl(T(g[h >> 2]), T(0.0)));do if (!(c[bc >> 2] | 0)) {
              if (c[S >> 2] | 0) {
                h = U;break;
              }h = (c[W >> 2] | 0) == 0 ? 1036 : X;
            } else h = k; while (0);D = T(u - T(s + T(Fl(T(g[h >> 2]), T(0.0)))));do if (v) {
              if (!(c[L + 192 >> 2] | 0)) {
                h = (c[L + 200 >> 2] | 0) == 0 ? 1012 : L + 196 | 0;break;
              } else {
                h = L + 188 | 0;break;
              }
            } else h = L + 140 | 0; while (0);switch (c[h + 4 >> 2] | 0) {case 0:
                {
                  u = T(0.0);break;
                }case 2:
                {
                  u = T(T(Eb * T(g[h >> 2])) / T(100.0));break;
                }case 1:
                {
                  u = T(g[h >> 2]);break;
                }default:
                u = T(t);}do if (w) {
              if (!(c[L + 192 >> 2] | 0)) {
                h = (c[L + 200 >> 2] | 0) == 0 ? 1012 : L + 196 | 0;break;
              } else {
                h = L + 188 | 0;break;
              }
            } else h = L + 156 | 0; while (0);switch (c[h + 4 >> 2] | 0) {case 0:
                {
                  s = T(0.0);break;
                }case 2:
                {
                  s = T(T(Eb * T(g[h >> 2])) / T(100.0));break;
                }case 1:
                {
                  s = T(g[h >> 2]);break;
                }default:
                s = T(t);}D = T(D - T(u + s));h = L + 372 | 0;switch (c[L + 376 >> 2] | 0) {case 2:
                {
                  u = T(T(Eb * T(g[h >> 2])) / T(100.0));break;
                }case 1:
                {
                  u = T(g[h >> 2]);break;
                }default:
                u = T(t);}h = L + 388 | 0;switch (c[L + 392 >> 2] | 0) {case 2:
                {
                  s = T(T(Eb * T(g[h >> 2])) / T(100.0));break;
                }case 1:
                {
                  s = T(g[h >> 2]);break;
                }default:
                s = T(t);}Jb = s < D & (s >= T(0.0) & ((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041);D = Jb ? s : D;Jb = u >= T(0.0) & ((g[j >> 2] = u, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041 & D < u;D = Jb ? u : D;do if (!(c[L + 216 >> 2] | 0)) {
              if (!(c[L + 264 >> 2] | 0)) {
                h = (c[L + 272 >> 2] | 0) == 0 ? 1036 : L + 268 | 0;break;
              } else {
                h = L + 260 | 0;break;
              }
            } else h = L + 212 | 0; while (0);switch (c[h + 4 >> 2] | 0) {case 2:
                {
                  s = T(T(Fb * T(g[h >> 2])) / T(100.0));break;
                }case 1:
                {
                  s = T(g[h >> 2]);break;
                }default:
                s = T(t);}s = T(Fl(s, T(0.0)));do if (!(c[L + 288 >> 2] | 0)) {
              if (!(c[L + 336 >> 2] | 0)) {
                h = (c[L + 344 >> 2] | 0) == 0 ? 1036 : L + 340 | 0;break;
              } else {
                h = L + 332 | 0;break;
              }
            } else h = L + 284 | 0; while (0);u = T(s + T(Fl(T(g[h >> 2]), T(0.0))));do if (!(c[L + 232 >> 2] | 0)) {
              if (!(c[L + 264 >> 2] | 0)) {
                h = (c[L + 272 >> 2] | 0) == 0 ? 1036 : L + 268 | 0;break;
              } else {
                h = L + 260 | 0;break;
              }
            } else h = L + 228 | 0; while (0);switch (c[h + 4 >> 2] | 0) {case 2:
                {
                  s = T(T(Fb * T(g[h >> 2])) / T(100.0));break;
                }case 1:
                {
                  s = T(g[h >> 2]);break;
                }default:
                s = T(t);}s = T(Fl(s, T(0.0)));do if (!(c[L + 304 >> 2] | 0)) {
              if (!(c[L + 336 >> 2] | 0)) {
                h = (c[L + 344 >> 2] | 0) == 0 ? 1036 : L + 340 | 0;break;
              } else {
                h = L + 332 | 0;break;
              }
            } else h = L + 300 | 0; while (0);s = T(Fl(D, T(u + T(s + T(Fl(T(g[h >> 2]), T(0.0)))))));
          } while (0);h = ((g[j >> 2] = r, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040;v = ((g[j >> 2] = s, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040;do if (h ^ v) {
            u = T(g[L + 396 >> 2]);if (((g[j >> 2] = u, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) break;if (h) {
              r = T(F + T(T(s - E) * u));break;
            } else {
              m = T(E + T(T(r - F) / u));s = v ? m : s;break;
            }
          } while (0);v = ((g[j >> 2] = r, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040;h = (g[j >> 2] = s, c[j >> 2] | 0) & 2147483647;if (v | h >>> 0 > 2139095040) {
            Jb = (v ^ 1) & 1;i = O & (N & v);u = B ? r : i ? Fb : r;Md(L, u, s, Sb, B ? Jb : i ? 2 : Jb, h >>> 0 < 2139095041 & 1, u, s, 0, 4139, p) | 0;u = T(g[L + 908 >> 2]);do if (!(c[x >> 2] | 0)) {
              if (c[L + 64 >> 2] | 0) {
                h = L + 60 | 0;break;
              }if (!(c[L + 112 >> 2] | 0)) {
                h = (c[L + 128 >> 2] | 0) == 0 ? 1036 : L + 124 | 0;break;
              } else {
                h = L + 108 | 0;break;
              }
            } else h = L + 92 | 0; while (0);switch (c[h + 4 >> 2] | 0) {case 3:
                {
                  s = T(0.0);break;
                }case 2:
                {
                  s = T(T(Fb * T(g[h >> 2])) / T(100.0));break;
                }case 1:
                {
                  s = T(g[h >> 2]);break;
                }default:
                s = T(t);}do if (!(c[A >> 2] | 0)) {
              if (c[L + 80 >> 2] | 0) {
                h = L + 76 | 0;break;
              }if (!(c[L + 112 >> 2] | 0)) {
                h = (c[L + 128 >> 2] | 0) == 0 ? 1036 : L + 124 | 0;break;
              } else {
                h = L + 108 | 0;break;
              }
            } else h = L + 100 | 0; while (0);switch (c[h + 4 >> 2] | 0) {case 3:
                {
                  r = T(0.0);break;
                }case 2:
                {
                  r = T(T(Fb * T(g[h >> 2])) / T(100.0));break;
                }case 1:
                {
                  r = T(g[h >> 2]);break;
                }default:
                r = T(t);}r = T(u + T(s + r));D = T(g[L + 912 >> 2]);do if (!(c[y >> 2] | 0)) {
              if (!(c[L + 120 >> 2] | 0)) {
                h = (c[L + 128 >> 2] | 0) == 0 ? 1036 : L + 124 | 0;break;
              } else {
                h = L + 116 | 0;break;
              }
            } else h = L + 68 | 0; while (0);switch (c[h + 4 >> 2] | 0) {case 3:
                {
                  u = T(0.0);break;
                }case 2:
                {
                  u = T(T(Fb * T(g[h >> 2])) / T(100.0));break;
                }case 1:
                {
                  u = T(g[h >> 2]);break;
                }default:
                u = T(t);}do if (!(c[z >> 2] | 0)) {
              if (!(c[L + 120 >> 2] | 0)) {
                h = (c[L + 128 >> 2] | 0) == 0 ? 1036 : L + 124 | 0;break;
              } else {
                h = L + 116 | 0;break;
              }
            } else h = L + 84 | 0; while (0);switch (c[h + 4 >> 2] | 0) {case 3:
                {
                  s = T(0.0);break;
                }case 2:
                {
                  s = T(T(Fb * T(g[h >> 2])) / T(100.0));break;
                }case 1:
                {
                  s = T(g[h >> 2]);break;
                }default:
                s = T(t);}s = T(D + T(u + s));
          }Md(L, r, s, Sb, 1, 1, r, s, 1, 4151, p) | 0;if (B) {
            do if (!(c[L + 176 >> 2] | 0)) {
              if (!(c[L + 184 >> 2] | 0)) {
                h = (c[L + 200 >> 2] | 0) == 0 ? 1012 : L + 196 | 0;break;
              } else {
                h = L + 180 | 0;break;
              }
            } else h = L + 172 | 0; while (0);if (c[h + 4 >> 2] | 0) eb = 3235;else eb = 3224;
          } else eb = 3224;do if ((eb | 0) == 3224) {
            h = c[1084 + (q << 2) >> 2] | 0;od: do if (!(c[L + 132 + (h << 3) + 4 >> 2] | 0)) {
              do if ((h | 2 | 0) == 3) {
                if (!(c[L + 192 >> 2] | 0)) break;h = L + 188 | 0;break od;
              } while (0);pd: do switch (h | 0) {case 0:case 2:case 4:case 5:
                  {
                    if (!(c[L + 184 >> 2] | 0)) break pd;h = L + 180 | 0;break od;
                  }default:
                  {}} while (0);h = (c[L + 200 >> 2] | 0) == 0 ? 1012 : L + 196 | 0;
            } else h = L + 132 + (h << 3) | 0; while (0);if (!(c[h + 4 >> 2] | 0)) {
              eb = 3305;break;
            }if (B) eb = 3235;else eb = 3241;
          } while (0);if ((eb | 0) == 3235) {
            v = c[L + 168 >> 2] | 0;do if (!v) {
              if (!(c[L + 184 >> 2] | 0)) {
                h = (c[L + 200 >> 2] | 0) == 0 ? 1012 : L + 196 | 0;break;
              } else {
                h = L + 180 | 0;break;
              }
            } else h = L + 164 | 0; while (0);if (!(c[h + 4 >> 2] | 0)) eb = 3241;else eb = 3307;
          }do if ((eb | 0) == 3241) {
            w = c[1068 + (q << 2) >> 2] | 0;qd: do if (!(c[L + 132 + (w << 3) + 4 >> 2] | 0)) {
              do if ((w | 2 | 0) == 3) {
                if (!(c[L + 192 >> 2] | 0)) break;h = L + 188 | 0;break qd;
              } while (0);rd: do switch (w | 0) {case 0:case 2:case 4:case 5:
                  {
                    if (!(c[L + 184 >> 2] | 0)) break rd;h = L + 180 | 0;break qd;
                  }default:
                  {}} while (0);h = (c[L + 200 >> 2] | 0) == 0 ? 1012 : L + 196 | 0;
            } else h = L + 132 + (w << 3) | 0; while (0);if (c[h + 4 >> 2] | 0) {
              eb = 3305;break;
            }Jb = c[1100 + (q << 2) >> 2] | 0;s = T(g[b + 908 + (Jb << 2) >> 2]);s = T(s - T(g[L + 908 + (Jb << 2) >> 2]));do if (B) {
              if (!(c[$b >> 2] | 0)) {
                eb = 3255;break;
              }r = T(g[R >> 2]);if (!(r >= T(0.0))) {
                eb = 3255;break;
              }r = T(s - r);eb = 3264;
            } else eb = 3255; while (0);if ((eb | 0) == 3255) {
              v = c[1084 + (q << 2) >> 2] | 0;sd: do if (!(c[b + 276 + (v << 3) + 4 >> 2] | 0)) {
                if ((v | 2 | 0) == 3 ? c[S >> 2] | 0 : 0) {
                  h = U;break;
                }switch (v | 0) {case 0:case 2:case 4:case 5:
                    {
                      if (c[ba >> 2] | 0) {
                        h = ca;break sd;
                      }break;
                    }default:
                    {}}if (c[W >> 2] | 0) {
                  h = X;break;
                }h = (v | 1 | 0) == 5 ? 1012 : 1036;
              } else h = b + 276 + (v << 3) | 0; while (0);r = T(s - T(Fl(T(g[h >> 2]), T(0.0))));if (B) eb = 3264;else eb = 3267;
            }do if ((eb | 0) == 3264) {
              eb = 0;if (!(c[A >> 2] | 0)) {
                v = c[1084 + (q << 2) >> 2] | 0;eb = 3267;break;
              } else {
                h = L + 100 | 0;break;
              }
            } while (0);td: do if ((eb | 0) == 3267) {
              eb = 0;if (c[L + 60 + (v << 3) + 4 >> 2] | 0) {
                h = L + 60 + (v << 3) | 0;break;
              }do if ((v | 2 | 0) == 3) {
                if (!(c[L + 120 >> 2] | 0)) break;h = L + 116 | 0;break td;
              } while (0);ud: do switch (v | 0) {case 0:case 2:case 4:case 5:
                  {
                    if (!(c[L + 112 >> 2] | 0)) break ud;h = L + 108 | 0;break td;
                  }default:
                  {}} while (0);if (!(c[L + 128 >> 2] | 0)) {
                h = (v | 1 | 0) == 5 ? 1012 : 1036;break;
              } else {
                h = L + 124 | 0;break;
              }
            } while (0);switch (c[h + 4 >> 2] | 0) {case 3:
                {
                  s = T(0.0);break;
                }case 2:
                {
                  s = T(T(Fb * T(g[h >> 2])) / T(100.0));break;
                }case 1:
                {
                  s = T(g[h >> 2]);break;
                }default:
                s = T(t);}s = T(r - s);r = B ? Fb : Eb;vd: do if (B) {
              do if (!(c[L + 176 >> 2] | 0)) {
                if (!(c[L + 184 >> 2] | 0)) {
                  h = (c[L + 200 >> 2] | 0) == 0 ? 1012 : L + 196 | 0;break;
                } else {
                  h = L + 180 | 0;break;
                }
              } else h = L + 172 | 0; while (0);switch (c[h + 4 >> 2] | 0) {case 0:
                  {
                    eb = 3291;break vd;
                  }case 2:
                  {
                    r = T(T(r * T(g[h >> 2])) / T(100.0));break vd;
                  }case 1:
                  {
                    r = T(g[h >> 2]);break vd;
                  }default:
                  {
                    r = T(t);break vd;
                  }}
            } else eb = 3291; while (0);wd: do if ((eb | 0) == 3291) {
              eb = 0;q = c[1084 + (q << 2) >> 2] | 0;xd: do if (!(c[L + 132 + (q << 3) + 4 >> 2] | 0)) {
                do if ((q | 2 | 0) == 3) {
                  if (!(c[L + 192 >> 2] | 0)) break;q = L + 188 | 0;break xd;
                } while (0);yd: do switch (q | 0) {case 0:case 2:case 4:case 5:
                    {
                      if (!(c[L + 184 >> 2] | 0)) break yd;q = L + 180 | 0;break xd;
                    }default:
                    {}} while (0);q = (c[L + 200 >> 2] | 0) == 0 ? 1012 : L + 196 | 0;
              } else q = L + 132 + (q << 3) | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 0:
                  {
                    r = T(0.0);break wd;
                  }case 2:
                  {
                    r = T(T(r * T(g[q >> 2])) / T(100.0));break wd;
                  }case 1:
                  {
                    r = T(g[q >> 2]);break wd;
                  }default:
                  {
                    r = T(t);break wd;
                  }}
            } while (0);g[L + 400 + (w << 2) >> 2] = T(s - r);
          } while (0);do if ((eb | 0) == 3305) {
            if (!B) {
              eb = 3313;break;
            }v = c[L + 168 >> 2] | 0;eb = 3307;
          } while (0);if ((eb | 0) == 3307) {
            do if (!v) {
              if (!(c[L + 184 >> 2] | 0)) {
                h = (c[L + 200 >> 2] | 0) == 0 ? 1012 : L + 196 | 0;break;
              } else {
                h = L + 180 | 0;break;
              }
            } else h = L + 164 | 0; while (0);if (!(c[h + 4 >> 2] | 0)) eb = 3313;else eb = 3327;
          }zd: do if ((eb | 0) == 3313) {
            eb = 0;w = c[1068 + (q << 2) >> 2] | 0;v = c[L + 132 + (w << 3) + 4 >> 2] | 0;Ad: do if (!v) {
              do if ((w | 2 | 0) == 3) {
                if (!(c[L + 192 >> 2] | 0)) break;h = L + 188 | 0;break Ad;
              } while (0);Bd: do switch (w | 0) {case 0:case 2:case 4:case 5:
                  {
                    if (!(c[L + 184 >> 2] | 0)) break Bd;h = L + 180 | 0;break Ad;
                  }default:
                  {}} while (0);h = (c[L + 200 >> 2] | 0) == 0 ? 1012 : L + 196 | 0;
            } else h = L + 132 + (w << 3) | 0; while (0);do if (!(c[h + 4 >> 2] | 0)) {
              if ((c[Kb >> 2] | 0) != 1) break;Jb = c[1100 + (q << 2) >> 2] | 0;m = T(g[b + 908 + (Jb << 2) >> 2]);g[L + 400 + (w << 2) >> 2] = T(T(m - T(g[L + 908 + (Jb << 2) >> 2])) * T(.5));break zd;
            } while (0);if (!B) {
              eb = 3334;break;
            }v = c[L + 168 >> 2] | 0;eb = 3327;
          } while (0);do if ((eb | 0) == 3327) {
            eb = 0;do if (!v) {
              if (!(c[L + 184 >> 2] | 0)) {
                h = (c[L + 200 >> 2] | 0) == 0 ? 1012 : L + 196 | 0;break;
              } else {
                h = L + 180 | 0;break;
              }
            } else h = L + 164 | 0; while (0);if (c[h + 4 >> 2] | 0) break;w = c[1068 + (q << 2) >> 2] | 0;v = c[L + 132 + (w << 3) + 4 >> 2] | 0;eb = 3334;
          } while (0);do if ((eb | 0) == 3334) {
            Cd: do if (!v) {
              do if ((w | 2 | 0) == 3) {
                if (!(c[L + 192 >> 2] | 0)) break;h = L + 188 | 0;break Cd;
              } while (0);Dd: do switch (w | 0) {case 0:case 2:case 4:case 5:
                  {
                    if (!(c[L + 184 >> 2] | 0)) break Dd;h = L + 180 | 0;break Cd;
                  }default:
                  {}} while (0);h = (c[L + 200 >> 2] | 0) == 0 ? 1012 : L + 196 | 0;
            } else h = L + 132 + (w << 3) | 0; while (0);if (c[h + 4 >> 2] | 0) break;if ((c[Kb >> 2] | 0) != 2) break;Jb = c[1100 + (q << 2) >> 2] | 0;m = T(g[b + 908 + (Jb << 2) >> 2]);g[L + 400 + (w << 2) >> 2] = T(m - T(g[L + 908 + (Jb << 2) >> 2]));
          } while (0);w = (K | 1 | 0) == 3;if (w) {
            do if (!(c[L + 176 >> 2] | 0)) {
              if (!(c[L + 184 >> 2] | 0)) {
                q = (c[L + 200 >> 2] | 0) == 0 ? 1012 : L + 196 | 0;break;
              } else {
                q = L + 180 | 0;break;
              }
            } else q = L + 172 | 0; while (0);if (c[q + 4 >> 2] | 0) eb = 3364;else eb = 3353;
          } else eb = 3353;do if ((eb | 0) == 3353) {
            q = c[1084 + (K << 2) >> 2] | 0;Ed: do if (!(c[L + 132 + (q << 3) + 4 >> 2] | 0)) {
              do if ((q | 2 | 0) == 3) {
                if (!(c[L + 192 >> 2] | 0)) break;q = L + 188 | 0;break Ed;
              } while (0);Fd: do switch (q | 0) {case 0:case 2:case 4:case 5:
                  {
                    if (!(c[L + 184 >> 2] | 0)) break Fd;q = L + 180 | 0;break Ed;
                  }default:
                  {}} while (0);q = (c[L + 200 >> 2] | 0) == 0 ? 1012 : L + 196 | 0;
            } else q = L + 132 + (q << 3) | 0; while (0);if (!(c[q + 4 >> 2] | 0)) {
              eb = 3434;break;
            }if (w) eb = 3364;else eb = 3370;
          } while (0);if ((eb | 0) == 3364) {
            q = c[L + 168 >> 2] | 0;do if (!q) {
              if (!(c[L + 184 >> 2] | 0)) {
                h = (c[L + 200 >> 2] | 0) == 0 ? 1012 : L + 196 | 0;break;
              } else {
                h = L + 180 | 0;break;
              }
            } else h = L + 164 | 0; while (0);if (!(c[h + 4 >> 2] | 0)) eb = 3370;else eb = 3436;
          }do if ((eb | 0) == 3370) {
            v = c[1068 + (K << 2) >> 2] | 0;Gd: do if (!(c[L + 132 + (v << 3) + 4 >> 2] | 0)) {
              do if ((v | 2 | 0) == 3) {
                if (!(c[L + 192 >> 2] | 0)) break;q = L + 188 | 0;break Gd;
              } while (0);Hd: do switch (v | 0) {case 0:case 2:case 4:case 5:
                  {
                    if (!(c[L + 184 >> 2] | 0)) break Hd;q = L + 180 | 0;break Gd;
                  }default:
                  {}} while (0);q = (c[L + 200 >> 2] | 0) == 0 ? 1012 : L + 196 | 0;
            } else q = L + 132 + (v << 3) | 0; while (0);if (c[q + 4 >> 2] | 0) {
              eb = 3434;break;
            }Jb = c[1100 + (K << 2) >> 2] | 0;s = T(g[b + 908 + (Jb << 2) >> 2]);s = T(s - T(g[L + 908 + (Jb << 2) >> 2]));do if (w) {
              if (!(c[$b >> 2] | 0)) {
                eb = 3384;break;
              }r = T(g[R >> 2]);if (!(r >= T(0.0))) {
                eb = 3384;break;
              }r = T(s - r);eb = 3393;
            } else eb = 3384; while (0);if ((eb | 0) == 3384) {
              h = 1084 + (K << 2) | 0;q = c[h >> 2] | 0;Id: do if (!(c[b + 276 + (q << 3) + 4 >> 2] | 0)) {
                if ((q | 2 | 0) == 3 ? c[S >> 2] | 0 : 0) {
                  q = U;break;
                }switch (q | 0) {case 0:case 2:case 4:case 5:
                    {
                      if (c[ba >> 2] | 0) {
                        q = ca;break Id;
                      }break;
                    }default:
                    {}}if (c[W >> 2] | 0) {
                  q = X;break;
                }q = (q | 1 | 0) == 5 ? 1012 : 1036;
              } else q = b + 276 + (q << 3) | 0; while (0);r = T(s - T(Fl(T(g[q >> 2]), T(0.0))));if (w) eb = 3393;else {
                q = h;eb = 3396;
              }
            }do if ((eb | 0) == 3393) {
              eb = 0;if (!(c[A >> 2] | 0)) {
                q = 1084 + (K << 2) | 0;eb = 3396;break;
              } else {
                q = L + 100 | 0;s = r;break;
              }
            } while (0);Jd: do if ((eb | 0) == 3396) {
              eb = 0;q = c[q >> 2] | 0;if (c[L + 60 + (q << 3) + 4 >> 2] | 0) {
                q = L + 60 + (q << 3) | 0;s = r;break;
              }do if ((q | 2 | 0) == 3) {
                if (!(c[L + 120 >> 2] | 0)) break;q = L + 116 | 0;s = r;break Jd;
              } while (0);Kd: do switch (q | 0) {case 0:case 2:case 4:case 5:
                  {
                    if (!(c[L + 112 >> 2] | 0)) break Kd;q = L + 108 | 0;s = r;break Jd;
                  }default:
                  {}} while (0);if (!(c[L + 128 >> 2] | 0)) {
                q = (q | 1 | 0) == 5 ? 1012 : 1036;s = r;break;
              } else {
                q = L + 124 | 0;s = r;break;
              }
            } while (0);switch (c[q + 4 >> 2] | 0) {case 3:
                {
                  r = T(0.0);break;
                }case 2:
                {
                  r = T(T(Fb * T(g[q >> 2])) / T(100.0));break;
                }case 1:
                {
                  r = T(g[q >> 2]);break;
                }default:
                r = T(t);}s = T(s - r);r = B ? Eb : Fb;Ld: do if (w) {
              do if (!(c[L + 176 >> 2] | 0)) {
                if (!(c[L + 184 >> 2] | 0)) {
                  q = (c[L + 200 >> 2] | 0) == 0 ? 1012 : L + 196 | 0;break;
                } else {
                  q = L + 180 | 0;break;
                }
              } else q = L + 172 | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 0:
                  {
                    eb = 3420;break Ld;
                  }case 2:
                  {
                    r = T(T(r * T(g[q >> 2])) / T(100.0));break Ld;
                  }case 1:
                  {
                    r = T(g[q >> 2]);break Ld;
                  }default:
                  {
                    r = T(t);break Ld;
                  }}
            } else eb = 3420; while (0);Md: do if ((eb | 0) == 3420) {
              eb = 0;q = c[1084 + (K << 2) >> 2] | 0;Nd: do if (!(c[L + 132 + (q << 3) + 4 >> 2] | 0)) {
                do if ((q | 2 | 0) == 3) {
                  if (!(c[L + 192 >> 2] | 0)) break;q = L + 188 | 0;break Nd;
                } while (0);Od: do switch (q | 0) {case 0:case 2:case 4:case 5:
                    {
                      if (!(c[L + 184 >> 2] | 0)) break Od;q = L + 180 | 0;break Nd;
                    }default:
                    {}} while (0);q = (c[L + 200 >> 2] | 0) == 0 ? 1012 : L + 196 | 0;
              } else q = L + 132 + (q << 3) | 0; while (0);switch (c[q + 4 >> 2] | 0) {case 0:
                  {
                    r = T(0.0);break Md;
                  }case 2:
                  {
                    r = T(T(r * T(g[q >> 2])) / T(100.0));break Md;
                  }case 1:
                  {
                    r = T(g[q >> 2]);break Md;
                  }default:
                  {
                    r = T(t);break Md;
                  }}
            } while (0);g[L + 400 + (v << 2) >> 2] = T(s - r);
          } while (0);do if ((eb | 0) == 3434) {
            if (!w) {
              eb = 3442;break;
            }q = c[L + 168 >> 2] | 0;eb = 3436;
          } while (0);if ((eb | 0) == 3436) {
            do if (!q) {
              if (!(c[L + 184 >> 2] | 0)) {
                h = (c[L + 200 >> 2] | 0) == 0 ? 1012 : L + 196 | 0;break;
              } else {
                h = L + 180 | 0;break;
              }
            } else h = L + 164 | 0; while (0);if (!(c[h + 4 >> 2] | 0)) eb = 3442;else eb = 3456;
          }Pd: do if ((eb | 0) == 3442) {
            eb = 0;q = 1068 + (K << 2) | 0;v = c[q >> 2] | 0;Qd: do if (!(c[L + 132 + (v << 3) + 4 >> 2] | 0)) {
              do if ((v | 2 | 0) == 3) {
                if (!(c[L + 192 >> 2] | 0)) break;h = L + 188 | 0;break Qd;
              } while (0);Rd: do switch (v | 0) {case 0:case 2:case 4:case 5:
                  {
                    if (!(c[L + 184 >> 2] | 0)) break Rd;h = L + 180 | 0;break Qd;
                  }default:
                  {}} while (0);h = (c[L + 200 >> 2] | 0) == 0 ? 1012 : L + 196 | 0;
            } else h = L + 132 + (v << 3) | 0; while (0);do if (!(c[h + 4 >> 2] | 0)) {
              Jb = L + 20 | 0;if ((c[((c[Jb >> 2] | 0) == 0 ? Q : Jb) >> 2] | 0) != 2) break;Jb = c[1100 + (K << 2) >> 2] | 0;m = T(g[b + 908 + (Jb << 2) >> 2]);g[L + 400 + (v << 2) >> 2] = T(T(m - T(g[L + 908 + (Jb << 2) >> 2])) * T(.5));break Pd;
            } while (0);if (!w) {
              eb = 3463;break;
            }q = c[L + 168 >> 2] | 0;eb = 3456;
          } while (0);do if ((eb | 0) == 3456) {
            eb = 0;do if (!q) {
              if (!(c[L + 184 >> 2] | 0)) {
                q = (c[L + 200 >> 2] | 0) == 0 ? 1012 : L + 196 | 0;break;
              } else {
                q = L + 180 | 0;break;
              }
            } else q = L + 164 | 0; while (0);if (c[q + 4 >> 2] | 0) break;q = 1068 + (K << 2) | 0;eb = 3463;
          } while (0);Sd: do if ((eb | 0) == 3463) {
            eb = 0;h = c[q >> 2] | 0;Td: do if (!(c[L + 132 + (h << 3) + 4 >> 2] | 0)) {
              do if ((h | 2 | 0) == 3) {
                if (!(c[L + 192 >> 2] | 0)) break;q = L + 188 | 0;break Td;
              } while (0);Ud: do switch (h | 0) {case 0:case 2:case 4:case 5:
                  {
                    if (!(c[L + 184 >> 2] | 0)) break Ud;q = L + 180 | 0;break Td;
                  }default:
                  {}} while (0);q = (c[L + 200 >> 2] | 0) == 0 ? 1012 : L + 196 | 0;
            } else q = L + 132 + (h << 3) | 0; while (0);if (c[q + 4 >> 2] | 0) break;q = L + 20 | 0;q = c[((c[q >> 2] | 0) == 0 ? Q : q) >> 2] | 0;do if ((q | 0) == 5) {
              if ((c[Mb >> 2] | 1 | 0) != 1) {
                eb = 3476;break;
              }if ((c[Lb >> 2] | 0) != 2) break Sd;
            } else eb = 3476; while (0);if ((eb | 0) == 3476 ? (0, !((q | 0) == 3 ^ (c[Lb >> 2] | 0) == 2)) : 0) break;Jb = c[1100 + (K << 2) >> 2] | 0;m = T(g[b + 908 + (Jb << 2) >> 2]);g[L + 400 + (h << 2) >> 2] = T(m - T(g[L + 908 + (Jb << 2) >> 2]));
          } while (0);L = c[L + 952 >> 2] | 0;if (!L) break gd;
        }
      } while (0);q = (Nb | 2 | 0) == 3;w = (Ob | 2 | 0) == 3;if (!(q | w)) {
        l = cc;return;
      }x = 1100 + (Nb << 2) | 0;y = 1068 + (Nb << 2) | 0;v = 1084 + (Nb << 2) | 0;A = 1100 + (Ob << 2) | 0;B = 1068 + (Ob << 2) | 0;z = 1084 + (Ob << 2) | 0;if (q) {
        q = 0;do {
          h = Zb(c[Pb >> 2] | 0, q) | 0;do if ((c[h + 36 >> 2] | 0) != 1) {
            bc = c[x >> 2] | 0;Yb = T(g[h + 908 + (bc << 2) >> 2]);Yb = T(T(g[b + 908 + (bc << 2) >> 2]) - Yb);Yb = T(Yb - T(g[h + 400 + (c[y >> 2] << 2) >> 2]));g[h + 400 + (c[v >> 2] << 2) >> 2] = Yb;if (!w) break;bc = c[A >> 2] | 0;Yb = T(g[h + 908 + (bc << 2) >> 2]);Yb = T(T(g[b + 908 + (bc << 2) >> 2]) - Yb);Yb = T(Yb - T(g[h + 400 + (c[B >> 2] << 2) >> 2]));g[h + 400 + (c[z >> 2] << 2) >> 2] = Yb;
          } while (0);q = q + 1 | 0;
        } while ((q | 0) != (Qb | 0));l = cc;return;
      }if (w) q = 0;else {
        q = 0;do q = q + 1 | 0; while ((q | 0) != (Qb | 0));l = cc;return;
      }do {
        h = Zb(c[Pb >> 2] | 0, q) | 0;if ((c[h + 36 >> 2] | 0) != 1) {
          bc = c[A >> 2] | 0;Yb = T(g[h + 908 + (bc << 2) >> 2]);Yb = T(T(g[b + 908 + (bc << 2) >> 2]) - Yb);Yb = T(Yb - T(g[h + 400 + (c[B >> 2] << 2) >> 2]));g[h + 400 + (c[z >> 2] << 2) >> 2] = Yb;
        }q = q + 1 | 0;
      } while ((q | 0) != (Qb | 0));l = cc;return;
    }
    function Od(b) {
      b = b | 0;var d = 0,
          e = 0;e = b + 400 | 0;g[b + 920 >> 2] = T(0.0);g[b + 916 >> 2] = T(0.0);c[e >> 2] = 0;c[e + 4 >> 2] = 0;c[e + 8 >> 2] = 0;c[e + 12 >> 2] = 0;c[e + 16 >> 2] = 0;c[e + 20 >> 2] = 0;c[b + 928 >> 2] = 1;c[b + 924 >> 2] = 1;g[b + 932 >> 2] = T(0.0);g[b + 936 >> 2] = T(0.0);a[b + 977 >> 0] = 1;e = b + 948 | 0;d = Wb(c[e >> 2] | 0) | 0;if (!d) return;else b = 0;do {
        Od(Zb(c[e >> 2] | 0, b) | 0);b = b + 1 | 0;
      } while ((b | 0) != (d | 0));return;
    }function Pd(a, b, d, e, f) {
      a = a | 0;b = b | 0;d = T(d);e = T(e);f = T(f);var h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = ob,
          n = 0,
          o = 0;h = c[a + 4 >> 2] | 0;b = (b | 0) == 2 & (c[a + 944 >> 2] | 0) != 0;a: do if (b) {
        switch (h | 0) {case 2:
            {
              h = 3;o = 5;break a;
            }case 3:
            break;default:
            {
              o = 4;break a;
            }}h = 2;o = 5;
      } else o = 4; while (0);b: do if ((o | 0) == 4) {
        switch (h | 1 | 0) {case 1:
            {
              l = 0;j = b ? 3 : 2;o = 12;break b;
            }case 3:
            {
              o = 5;break b;
            }default:
            {}}l = 0;j = 0;o = 12;
      } while (0);if ((o | 0) == 5) {
        i = c[a + 168 >> 2] | 0;do if (!i) {
          if (!(c[a + 184 >> 2] | 0)) {
            b = (c[a + 200 >> 2] | 0) == 0 ? 1012 : a + 196 | 0;break;
          } else {
            b = a + 180 | 0;break;
          }
        } else b = a + 164 | 0; while (0);if (!(c[b + 4 >> 2] | 0)) {
          l = 1;j = 0;o = 12;
        } else {
          j = 0;b = i;o = 24;
        }
      }do if ((o | 0) == 12) {
        b = c[1068 + (h << 2) >> 2] | 0;k = c[a + 132 + (b << 3) + 4 >> 2] | 0;c: do if (!k) {
          if ((b | 2 | 0) == 3 ? c[a + 192 >> 2] | 0 : 0) {
            i = a + 188 | 0;break;
          }switch (b | 0) {case 0:case 2:case 4:case 5:
              {
                if (c[a + 184 >> 2] | 0) {
                  i = a + 180 | 0;break c;
                }break;
              }default:
              {}}i = (c[a + 200 >> 2] | 0) == 0 ? 1012 : a + 196 | 0;
        } else i = a + 132 + (b << 3) | 0; while (0);if (c[i + 4 >> 2] | 0) {
          if (!l) {
            l = 0;i = k;o = 33;break;
          }b = c[a + 168 >> 2] | 0;o = 24;break;
        }d: do if (l) {
          do if (!(c[a + 176 >> 2] | 0)) {
            if (!(c[a + 184 >> 2] | 0)) {
              b = (c[a + 200 >> 2] | 0) == 0 ? 1012 : a + 196 | 0;break;
            } else {
              b = a + 180 | 0;break;
            }
          } else b = a + 172 | 0; while (0);switch (c[b + 4 >> 2] | 0) {case 0:
              {
                o = 55;break d;
              }case 2:
              {
                d = T(T(T(g[b >> 2]) * d) / T(100.0));break d;
              }case 1:
              {
                d = T(g[b >> 2]);break d;
              }default:
              {
                d = T(t);break d;
              }}
        } else o = 55; while (0);e: do if ((o | 0) == 55) {
          b = c[1084 + (h << 2) >> 2] | 0;f: do if (!(c[a + 132 + (b << 3) + 4 >> 2] | 0)) {
            if ((b | 2 | 0) == 3 ? c[a + 192 >> 2] | 0 : 0) {
              b = a + 188 | 0;break;
            }switch (b | 0) {case 0:case 2:case 4:case 5:
                {
                  if (c[a + 184 >> 2] | 0) {
                    b = a + 180 | 0;break f;
                  }break;
                }default:
                {}}b = (c[a + 200 >> 2] | 0) == 0 ? 1012 : a + 196 | 0;
          } else b = a + 132 + (b << 3) | 0; while (0);switch (c[b + 4 >> 2] | 0) {case 0:
              {
                d = T(0.0);break e;
              }case 2:
              {
                d = T(T(T(g[b >> 2]) * d) / T(100.0));break e;
              }case 1:
              {
                d = T(g[b >> 2]);break e;
              }default:
              {
                d = T(t);break e;
              }}
        } while (0);n = j;m = T(-d);
      } while (0);g: do if ((o | 0) == 24) {
        do if (!b) {
          if (!(c[a + 184 >> 2] | 0)) {
            b = (c[a + 200 >> 2] | 0) == 0 ? 1012 : a + 196 | 0;break;
          } else {
            b = a + 180 | 0;break;
          }
        } else b = a + 164 | 0; while (0);switch (c[b + 4 >> 2] | 0) {case 0:
            {
              b = c[1068 + (h << 2) >> 2] | 0;l = 1;i = c[a + 132 + (b << 3) + 4 >> 2] | 0;o = 33;break g;
            }case 2:
            {
              n = j;m = T(T(T(g[b >> 2]) * d) / T(100.0));l = 1;break g;
            }case 1:
            {
              n = j;m = T(g[b >> 2]);l = 1;break g;
            }default:
            {
              n = j;m = T(t);l = 1;break g;
            }}
      } while (0);h: do if ((o | 0) == 33) {
        i: do if (!i) {
          if ((b | 2 | 0) == 3 ? c[a + 192 >> 2] | 0 : 0) {
            b = a + 188 | 0;break;
          }switch (b | 0) {case 0:case 2:case 4:case 5:
              {
                if (c[a + 184 >> 2] | 0) {
                  b = a + 180 | 0;break i;
                }break;
              }default:
              {}}b = (c[a + 200 >> 2] | 0) == 0 ? 1012 : a + 196 | 0;
        } else b = a + 132 + (b << 3) | 0; while (0);switch (c[b + 4 >> 2] | 0) {case 0:
            {
              n = j;m = T(0.0);break h;
            }case 2:
            {
              n = j;m = T(T(T(g[b >> 2]) * d) / T(100.0));break h;
            }case 1:
            {
              n = j;m = T(g[b >> 2]);break h;
            }default:
            {
              n = j;m = T(t);break h;
            }}
      } while (0);k = (n | 1 | 0) == 3;if (k) {
        i = c[a + 168 >> 2] | 0;do if (!i) {
          if (!(c[a + 184 >> 2] | 0)) {
            b = (c[a + 200 >> 2] | 0) == 0 ? 1012 : a + 196 | 0;break;
          } else {
            b = a + 180 | 0;break;
          }
        } else b = a + 164 | 0; while (0);if (c[b + 4 >> 2] | 0) o = 88;else o = 76;
      } else o = 76;do if ((o | 0) == 76) {
        b = c[1068 + (n << 2) >> 2] | 0;j = c[a + 132 + (b << 3) + 4 >> 2] | 0;j: do if (!j) {
          if ((b | 2 | 0) == 3 ? c[a + 192 >> 2] | 0 : 0) {
            i = a + 188 | 0;break;
          }switch (b | 0) {case 0:case 2:case 4:case 5:
              {
                if (c[a + 184 >> 2] | 0) {
                  i = a + 180 | 0;break j;
                }break;
              }default:
              {}}i = (c[a + 200 >> 2] | 0) == 0 ? 1012 : a + 196 | 0;
        } else i = a + 132 + (b << 3) | 0; while (0);if (c[i + 4 >> 2] | 0) {
          if (!k) {
            o = 97;break;
          }i = c[a + 168 >> 2] | 0;o = 88;break;
        }k: do if (k) {
          do if (!(c[a + 176 >> 2] | 0)) {
            if (!(c[a + 184 >> 2] | 0)) {
              b = (c[a + 200 >> 2] | 0) == 0 ? 1012 : a + 196 | 0;break;
            } else {
              b = a + 180 | 0;break;
            }
          } else b = a + 172 | 0; while (0);switch (c[b + 4 >> 2] | 0) {case 0:
              {
                o = 119;break k;
              }case 2:
              {
                d = T(T(T(g[b >> 2]) * e) / T(100.0));break k;
              }case 1:
              {
                d = T(g[b >> 2]);break k;
              }default:
              {
                d = T(t);break k;
              }}
        } else o = 119; while (0);l: do if ((o | 0) == 119) {
          b = c[1084 + (n << 2) >> 2] | 0;m: do if (!(c[a + 132 + (b << 3) + 4 >> 2] | 0)) {
            if ((b | 2 | 0) == 3 ? c[a + 192 >> 2] | 0 : 0) {
              b = a + 188 | 0;break;
            }switch (b | 0) {case 0:case 2:case 4:case 5:
                {
                  if (c[a + 184 >> 2] | 0) {
                    b = a + 180 | 0;break m;
                  }break;
                }default:
                {}}b = (c[a + 200 >> 2] | 0) == 0 ? 1012 : a + 196 | 0;
          } else b = a + 132 + (b << 3) | 0; while (0);switch (c[b + 4 >> 2] | 0) {case 0:
              {
                d = T(0.0);break l;
              }case 2:
              {
                d = T(T(T(g[b >> 2]) * e) / T(100.0));break l;
              }case 1:
              {
                d = T(g[b >> 2]);break l;
              }default:
              {
                d = T(t);break l;
              }}
        } while (0);e = T(-d);
      } while (0);n: do if ((o | 0) == 88) {
        do if (!i) {
          if (!(c[a + 184 >> 2] | 0)) {
            b = (c[a + 200 >> 2] | 0) == 0 ? 1012 : a + 196 | 0;break;
          } else {
            b = a + 180 | 0;break;
          }
        } else b = a + 164 | 0; while (0);switch (c[b + 4 >> 2] | 0) {case 0:
            {
              b = c[1068 + (n << 2) >> 2] | 0;j = c[a + 132 + (b << 3) + 4 >> 2] | 0;o = 97;break n;
            }case 2:
            {
              e = T(T(T(g[b >> 2]) * e) / T(100.0));break n;
            }case 1:
            {
              e = T(g[b >> 2]);break n;
            }default:
            {
              e = T(t);break n;
            }}
      } while (0);o: do if ((o | 0) == 97) {
        p: do if (!j) {
          if ((b | 2 | 0) == 3 ? c[a + 192 >> 2] | 0 : 0) {
            b = a + 188 | 0;break;
          }switch (b | 0) {case 0:case 2:case 4:case 5:
              {
                if (c[a + 184 >> 2] | 0) {
                  b = a + 180 | 0;break p;
                }break;
              }default:
              {}}b = (c[a + 200 >> 2] | 0) == 0 ? 1012 : a + 196 | 0;
        } else b = a + 132 + (b << 3) | 0; while (0);switch (c[b + 4 >> 2] | 0) {case 0:
            {
              e = T(0.0);break o;
            }case 2:
            {
              e = T(T(T(g[b >> 2]) * e) / T(100.0));break o;
            }case 1:
            {
              e = T(g[b >> 2]);break o;
            }default:
            {
              e = T(t);break o;
            }}
      } while (0);if (l ? (c[a + 96 >> 2] | 0) != 0 : 0) b = a + 92 | 0;else o = 136;q: do if ((o | 0) == 136) {
        b = c[1068 + (h << 2) >> 2] | 0;if (c[a + 60 + (b << 3) + 4 >> 2] | 0) {
          b = a + 60 + (b << 3) | 0;break;
        }if ((b | 2 | 0) == 3 ? c[a + 120 >> 2] | 0 : 0) {
          b = a + 116 | 0;break;
        }switch (b | 0) {case 0:case 2:case 4:case 5:
            {
              if (c[a + 112 >> 2] | 0) {
                b = a + 108 | 0;break q;
              }break;
            }default:
            {}}if (!(c[a + 128 >> 2] | 0)) {
          b = (b | 1 | 0) == 5 ? 1012 : 1036;break;
        } else {
          b = a + 124 | 0;break;
        }
      } while (0);switch (c[b + 4 >> 2] | 0) {case 3:
          {
            d = T(0.0);break;
          }case 2:
          {
            d = T(T(T(g[b >> 2]) * f) / T(100.0));break;
          }case 1:
          {
            d = T(g[b >> 2]);break;
          }default:
          d = T(t);}d = T(m + d);g[a + 400 + (c[1068 + (h << 2) >> 2] << 2) >> 2] = d;if (l ? (c[a + 104 >> 2] | 0) != 0 : 0) b = a + 100 | 0;else o = 154;r: do if ((o | 0) == 154) {
        b = c[1084 + (h << 2) >> 2] | 0;if (c[a + 60 + (b << 3) + 4 >> 2] | 0) {
          b = a + 60 + (b << 3) | 0;break;
        }if ((b | 2 | 0) == 3 ? c[a + 120 >> 2] | 0 : 0) {
          b = a + 116 | 0;break;
        }switch (b | 0) {case 0:case 2:case 4:case 5:
            {
              if (c[a + 112 >> 2] | 0) {
                b = a + 108 | 0;break r;
              }break;
            }default:
            {}}if (!(c[a + 128 >> 2] | 0)) {
          b = (b | 1 | 0) == 5 ? 1012 : 1036;break;
        } else {
          b = a + 124 | 0;break;
        }
      } while (0);switch (c[b + 4 >> 2] | 0) {case 3:
          {
            d = T(0.0);break;
          }case 2:
          {
            d = T(T(T(g[b >> 2]) * f) / T(100.0));break;
          }case 1:
          {
            d = T(g[b >> 2]);break;
          }default:
          d = T(t);}m = T(m + d);g[a + 400 + (c[1084 + (h << 2) >> 2] << 2) >> 2] = m;if (k ? (c[a + 96 >> 2] | 0) != 0 : 0) b = a + 92 | 0;else o = 172;s: do if ((o | 0) == 172) {
        b = c[1068 + (n << 2) >> 2] | 0;if (c[a + 60 + (b << 3) + 4 >> 2] | 0) {
          b = a + 60 + (b << 3) | 0;break;
        }if ((b | 2 | 0) == 3 ? c[a + 120 >> 2] | 0 : 0) {
          b = a + 116 | 0;break;
        }switch (b | 0) {case 0:case 2:case 4:case 5:
            {
              if (c[a + 112 >> 2] | 0) {
                b = a + 108 | 0;break s;
              }break;
            }default:
            {}}if (!(c[a + 128 >> 2] | 0)) {
          b = (b | 1 | 0) == 5 ? 1012 : 1036;break;
        } else {
          b = a + 124 | 0;break;
        }
      } while (0);switch (c[b + 4 >> 2] | 0) {case 3:
          {
            d = T(0.0);break;
          }case 2:
          {
            d = T(T(T(g[b >> 2]) * f) / T(100.0));break;
          }case 1:
          {
            d = T(g[b >> 2]);break;
          }default:
          d = T(t);}m = T(e + d);g[a + 400 + (c[1068 + (n << 2) >> 2] << 2) >> 2] = m;if (k ? (c[a + 104 >> 2] | 0) != 0 : 0) b = a + 100 | 0;else o = 190;t: do if ((o | 0) == 190) {
        b = c[1084 + (n << 2) >> 2] | 0;if (c[a + 60 + (b << 3) + 4 >> 2] | 0) {
          b = a + 60 + (b << 3) | 0;break;
        }if ((b | 2 | 0) == 3 ? c[a + 120 >> 2] | 0 : 0) {
          b = a + 116 | 0;break;
        }switch (b | 0) {case 0:case 2:case 4:case 5:
            {
              if (c[a + 112 >> 2] | 0) {
                b = a + 108 | 0;break t;
              }break;
            }default:
            {}}if (!(c[a + 128 >> 2] | 0)) {
          b = (b | 1 | 0) == 5 ? 1012 : 1036;break;
        } else {
          b = a + 124 | 0;break;
        }
      } while (0);switch (c[b + 4 >> 2] | 0) {case 2:
          {
            f = T(T(T(g[b >> 2]) * f) / T(100.0));f = T(e + f);o = 1084 + (n << 2) | 0;o = c[o >> 2] | 0;a = a + 400 + (o << 2) | 0;g[a >> 2] = f;return;
          }case 1:
          {
            f = T(g[b >> 2]);f = T(e + f);o = 1084 + (n << 2) | 0;o = c[o >> 2] | 0;a = a + 400 + (o << 2) | 0;g[a >> 2] = f;return;
          }case 3:
          {
            f = T(0.0);f = T(e + f);o = 1084 + (n << 2) | 0;o = c[o >> 2] | 0;a = a + 400 + (o << 2) | 0;g[a >> 2] = f;return;
          }default:
          {
            f = T(t);f = T(e + f);o = 1084 + (n << 2) | 0;o = c[o >> 2] | 0;a = a + 400 + (o << 2) | 0;g[a >> 2] = f;return;
          }}
    }function Qd(a, b, d) {
      a = a | 0;b = b | 0;d = T(d);var e = 0,
          f = 0,
          h = ob,
          i = 0;f = (b | 1 | 0) == 3;if (f ? (c[a + 96 >> 2] | 0) != 0 : 0) e = a + 92 | 0;else i = 4;a: do if ((i | 0) == 4) {
        e = c[1068 + (b << 2) >> 2] | 0;if (c[a + 60 + (e << 3) + 4 >> 2] | 0) {
          e = a + 60 + (e << 3) | 0;break;
        }if ((e | 2 | 0) == 3 ? c[a + 120 >> 2] | 0 : 0) {
          e = a + 116 | 0;break;
        }switch (e | 0) {case 0:case 2:case 4:case 5:
            {
              if (c[a + 112 >> 2] | 0) {
                e = a + 108 | 0;break a;
              }break;
            }default:
            {}}if (!(c[a + 128 >> 2] | 0)) {
          e = (e | 1 | 0) == 5 ? 1012 : 1036;break;
        } else {
          e = a + 124 | 0;break;
        }
      } while (0);switch (c[e + 4 >> 2] | 0) {case 3:
          {
            h = T(0.0);break;
          }case 2:
          {
            h = T(T(T(g[e >> 2]) * d) / T(100.0));break;
          }case 1:
          {
            h = T(g[e >> 2]);break;
          }default:
          h = T(t);}if (f ? (c[a + 104 >> 2] | 0) != 0 : 0) e = a + 100 | 0;else i = 22;b: do if ((i | 0) == 22) {
        e = c[1084 + (b << 2) >> 2] | 0;if (c[a + 60 + (e << 3) + 4 >> 2] | 0) {
          e = a + 60 + (e << 3) | 0;break;
        }if ((e | 2 | 0) == 3 ? c[a + 120 >> 2] | 0 : 0) {
          e = a + 116 | 0;break;
        }switch (e | 0) {case 0:case 2:case 4:case 5:
            {
              if (c[a + 112 >> 2] | 0) {
                e = a + 108 | 0;break b;
              }break;
            }default:
            {}}if (!(c[a + 128 >> 2] | 0)) {
          e = (e | 1 | 0) == 5 ? 1012 : 1036;break;
        } else {
          e = a + 124 | 0;break;
        }
      } while (0);switch (c[e + 4 >> 2] | 0) {case 2:
          {
            d = T(T(T(g[e >> 2]) * d) / T(100.0));d = T(h + d);return T(d);
          }case 1:
          {
            d = T(g[e >> 2]);d = T(h + d);return T(d);
          }case 3:
          {
            d = T(0.0);d = T(h + d);return T(d);
          }default:
          {
            d = T(t);d = T(h + d);return T(d);
          }}return ob;
    }function Rd(a) {
      a = a | 0;var b = 0,
          d = ob,
          e = 0,
          f = 0,
          h = 0,
          i = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0,
          p = ob,
          q = 0;o = l;l = l + 16 | 0;e = o;b = c[a + 960 >> 2] | 0;if (b | 0) {
        p = T(g[a + 908 >> 2]);d = T(g[a + 912 >> 2]);d = T(rb[b & 0](a, p, d));if (((g[j >> 2] = d, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041) {
          p = d;l = o;return T(p);
        }c[e >> 2] = 4162;hc(a, 5, 2741, e);p = d;l = o;return T(p);
      }h = a + 948 | 0;i = Wb(c[h >> 2] | 0) | 0;if (i | 0) {
        k = a + 16 | 0;m = a + 4 | 0;e = 0;f = 0;a: while (1) {
          b = Zb(c[h >> 2] | 0, f) | 0;if (c[b + 940 >> 2] | 0) {
            b = e;break;
          }do if ((c[b + 24 >> 2] | 0) == 1) b = e;else {
            q = b + 20 | 0;if ((c[((c[q >> 2] | 0) == 0 ? k : q) >> 2] | 0) != 5) {
              b = (e | 0) == 0 ? b : e;break;
            }if ((c[m >> 2] | 1 | 0) != 1) {
              n = 15;break a;
            }b = (e | 0) == 0 ? b : e;
          } while (0);f = f + 1 | 0;if (f >>> 0 >= i >>> 0) break;else e = b;
        }if ((n | 0) == 15) {
          d = T(Rd(b));q = b + 404 | 0;p = T(g[q >> 2]);p = T(d + p);l = o;return T(p);
        }if (b | 0) {
          q = b;d = T(Rd(q));q = q + 404 | 0;p = T(g[q >> 2]);p = T(d + p);l = o;return T(p);
        }
      }p = T(g[a + 912 >> 2]);l = o;return T(p);
    }function Sd(b, d, e, f) {
      b = b | 0;d = T(d);e = T(e);f = f | 0;var h = 0,
          i = ob,
          k = ob,
          l = ob,
          m = 0,
          n = 0,
          o = ob,
          p = ob,
          q = 0,
          r = 0,
          s = 0;c[2188] = (c[2188] | 0) + 1;m = b + 380 | 0;n = c[b + 384 >> 2] | 0;if (((n | 0) != 0 ? (n | 0) == (c[b + 368 >> 2] | 0) : 0) ? (o = T(g[m >> 2]), T(C(T(o - T(g[b + 364 >> 2])))) < T(.0000999999974)) : 0) h = m;else h = b + 348 | 0;c[b + 984 >> 2] = h;q = b + 388 | 0;r = c[b + 392 >> 2] | 0;if (((r | 0) != 0 ? (r | 0) == (c[b + 376 >> 2] | 0) : 0) ? (o = T(g[q >> 2]), T(C(T(o - T(g[b + 372 >> 2])))) < T(.0000999999974)) : 0) s = q;else s = b + 356 | 0;c[b + 988 >> 2] = s;switch (c[h + 4 >> 2] | 0) {case 0:case 3:
          {
            h = 37;break;
          }case 1:
          {
            if (T(g[h >> 2]) < T(0.0)) h = 37;else {
              o = T(g[h >> 2]);h = 14;
            }break;
          }case 2:
          {
            if (((g[j >> 2] = d, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040 ? 1 : T(g[h >> 2]) < T(0.0)) h = 37;else {
              o = T(T(T(g[h >> 2]) * d) / T(100.0));h = 14;
            }break;
          }default:
          {
            o = T(t);h = 14;
          }}a: do if ((h | 0) == 14) {
        do if (!(c[b + 96 >> 2] | 0)) {
          if (c[b + 64 >> 2] | 0) {
            h = b + 60 | 0;break;
          }if (!(c[b + 112 >> 2] | 0)) {
            h = (c[b + 128 >> 2] | 0) == 0 ? 1036 : b + 124 | 0;break;
          } else {
            h = b + 108 | 0;break;
          }
        } else h = b + 92 | 0; while (0);switch (c[h + 4 >> 2] | 0) {case 3:
            {
              l = T(0.0);break;
            }case 2:
            {
              l = T(T(T(g[h >> 2]) * d) / T(100.0));break;
            }case 1:
            {
              l = T(g[h >> 2]);break;
            }default:
            l = T(t);}do if (!(c[b + 104 >> 2] | 0)) {
          if (c[b + 80 >> 2] | 0) {
            h = b + 76 | 0;break;
          }if (!(c[b + 112 >> 2] | 0)) {
            h = (c[b + 128 >> 2] | 0) == 0 ? 1036 : b + 124 | 0;break;
          } else {
            h = b + 108 | 0;break;
          }
        } else h = b + 100 | 0; while (0);switch (c[h + 4 >> 2] | 0) {case 3:
            {
              k = T(0.0);break;
            }case 2:
            {
              k = T(T(T(g[h >> 2]) * d) / T(100.0));break;
            }case 1:
            {
              k = T(g[h >> 2]);break;
            }default:
            k = T(t);}n = 1;o = T(o + T(l + k));
      } else if ((h | 0) == 37) {
        switch (n | 0) {case 2:
            {
              l = T(g[m >> 2]);k = T(T(l * d) / T(100.0));h = 40;break;
            }case 1:
            {
              l = T(g[m >> 2]);k = l;h = 40;break;
            }default:
            {}}if ((h | 0) == 40 ? k >= T(0.0) : 0) switch (n | 0) {case 2:
            {
              n = 2;o = T(T(l * d) / T(100.0));break a;
            }case 1:
            {
              n = 2;o = l;break a;
            }default:
            {
              n = 2;o = T(t);break a;
            }}n = ((g[j >> 2] = d, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041 & 1;o = d;
      } while (0);switch (c[s + 4 >> 2] | 0) {case 0:case 3:
          {
            h = 69;break;
          }case 1:
          {
            if (T(g[s >> 2]) < T(0.0)) h = 69;else {
              l = T(g[s >> 2]);h = 50;
            }break;
          }case 2:
          {
            if (((g[j >> 2] = e, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040 ? 1 : T(g[s >> 2]) < T(0.0)) h = 69;else {
              l = T(T(T(g[s >> 2]) * e) / T(100.0));h = 50;
            }break;
          }default:
          {
            l = T(t);h = 50;
          }}b: do if ((h | 0) == 50) {
        do if (!(c[b + 72 >> 2] | 0)) {
          if (!(c[b + 120 >> 2] | 0)) {
            h = (c[b + 128 >> 2] | 0) == 0 ? 1036 : b + 124 | 0;break;
          } else {
            h = b + 116 | 0;break;
          }
        } else h = b + 68 | 0; while (0);switch (c[h + 4 >> 2] | 0) {case 3:
            {
              k = T(0.0);break;
            }case 2:
            {
              k = T(T(T(g[h >> 2]) * d) / T(100.0));break;
            }case 1:
            {
              k = T(g[h >> 2]);break;
            }default:
            k = T(t);}do if (!(c[b + 88 >> 2] | 0)) {
          if (!(c[b + 120 >> 2] | 0)) {
            h = (c[b + 128 >> 2] | 0) == 0 ? 1036 : b + 124 | 0;break;
          } else {
            h = b + 116 | 0;break;
          }
        } else h = b + 84 | 0; while (0);switch (c[h + 4 >> 2] | 0) {case 3:
            {
              i = T(0.0);break;
            }case 2:
            {
              i = T(T(T(g[h >> 2]) * d) / T(100.0));break;
            }case 1:
            {
              i = T(g[h >> 2]);break;
            }default:
            i = T(t);}m = 1;i = T(l + T(k + i));
      } else if ((h | 0) == 69) {
        switch (r | 0) {case 2:
            {
              i = T(g[q >> 2]);p = T(T(i * e) / T(100.0));h = 72;break;
            }case 1:
            {
              i = T(g[q >> 2]);p = i;h = 72;break;
            }default:
            {}}if ((h | 0) == 72 ? p >= T(0.0) : 0) switch (r | 0) {case 2:
            {
              m = 2;i = T(T(i * e) / T(100.0));break b;
            }case 1:
            {
              m = 2;break b;
            }default:
            {
              m = 2;i = T(t);break b;
            }}m = ((g[j >> 2] = e, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041 & 1;i = e;
      } while (0);h = b + 968 | 0;if (!(Md(b, o, i, f, n, m, d, e, 1, 4276, c[h >> 2] | 0) | 0)) return;Pd(b, c[b + 496 >> 2] | 0, d, e, d);Td(b, T(g[(c[h >> 2] | 0) + 4 >> 2]), T(0.0), T(0.0));if (!(a[11300] | 0)) return;Jd(b, 7, 0);return;
    }function Td(a, b, d, e) {
      a = a | 0;b = T(b);d = T(d);e = T(e);var f = 0,
          h = 0,
          i = 0,
          k = ob,
          l = 0,
          m = ob,
          n = ob,
          o = ob,
          p = ob,
          q = 0,
          r = 0,
          s = 0,
          t = 0,
          u = ob,
          v = ob,
          w = ob;if (b == T(0.0)) return;f = a + 400 | 0;w = T(g[f >> 2]);h = a + 404 | 0;k = T(g[h >> 2]);q = a + 416 | 0;m = T(g[q >> 2]);s = a + 420 | 0;n = T(g[s >> 2]);v = T(w + d);u = T(k + e);o = T(v + m);p = T(u + n);r = (c[a + 980 >> 2] | 0) == 1;d = T(w * b);e = T(Jl(d, T(1.0)));do if (((g[j >> 2] = e, c[j >> 2] | 0) & 2147483647) >>> 0 <= 2139095040) {
        if (T(C(T(e))) < T(.0000999999974)) {
          d = T(d - e);break;
        }d = T(d - e);if (T(C(T(e + T(-1.0)))) < T(.0000999999974)) d = T(d + T(1.0));else t = 8;
      } else {
        d = T(d - e);t = 8;
      } while (0);if ((t | 0) == 8) {
        l = e >= T(.5);w = T((l ? T(1.0) : T(0.0)) + d);d = r ? d : w;
      }g[f >> 2] = T(d / b);d = T(k * b);e = T(Jl(d, T(1.0)));do if (((g[j >> 2] = e, c[j >> 2] | 0) & 2147483647) >>> 0 <= 2139095040) {
        if (T(C(T(e))) < T(.0000999999974)) {
          d = T(d - e);break;
        }d = T(d - e);if (T(C(T(e + T(-1.0)))) < T(.0000999999974)) d = T(d + T(1.0));else t = 15;
      } else {
        d = T(d - e);t = 15;
      } while (0);if ((t | 0) == 15) {
        l = e >= T(.5);w = T((l ? T(1.0) : T(0.0)) + d);d = r ? d : w;
      }g[h >> 2] = T(d / b);d = T(Jl(T(m * b), T(1.0)));if (((g[j >> 2] = d, c[j >> 2] | 0) & 2147483647) >>> 0 <= 2139095040) {
        if (T(C(T(d))) < T(.0000999999974)) h = 0;else {
          f = T(C(T(d + T(-1.0)))) < T(.0000999999974);t = 19;
        }
      } else {
        f = 0;t = 19;
      }if ((t | 0) == 19) h = f ^ 1;d = T(Jl(T(n * b), T(1.0)));if (((g[j >> 2] = d, c[j >> 2] | 0) & 2147483647) >>> 0 <= 2139095040) {
        if (T(C(T(d))) < T(.0000999999974)) l = 0;else {
          f = T(C(T(d + T(-1.0)))) < T(.0000999999974);t = 23;
        }
      } else {
        f = 0;t = 23;
      }if ((t | 0) == 23) l = f ^ 1;i = r & h;f = r & (h ^ 1);d = T(o * b);e = T(Jl(d, T(1.0)));do if (((g[j >> 2] = e, c[j >> 2] | 0) & 2147483647) >>> 0 <= 2139095040) {
        if (T(C(T(e))) < T(.0000999999974)) {
          d = T(d - e);break;
        }d = T(d - e);if (T(C(T(e + T(-1.0)))) < T(.0000999999974)) d = T(d + T(1.0));else t = 30;
      } else {
        d = T(d - e);t = 30;
      } while (0);do if ((t | 0) == 30) if (i) {
        d = T(d + T(1.0));break;
      } else {
        i = e >= T(.5);w = T((i ? T(1.0) : T(0.0)) + d);d = f ? d : w;break;
      } while (0);k = T(d / b);d = T(v * b);e = T(Jl(d, T(1.0)));do if (((g[j >> 2] = e, c[j >> 2] | 0) & 2147483647) >>> 0 <= 2139095040) {
        if (T(C(T(e))) < T(.0000999999974)) {
          d = T(d - e);break;
        }d = T(d - e);if (T(C(T(e + T(-1.0)))) < T(.0000999999974)) d = T(d + T(1.0));else t = 39;
      } else {
        d = T(d - e);t = 39;
      } while (0);if ((t | 0) == 39) {
        i = e >= T(.5);w = T((i ? T(1.0) : T(0.0)) + d);d = r ? d : w;
      }g[q >> 2] = T(k - T(d / b));h = r & l;f = r & (l ^ 1);d = T(p * b);e = T(Jl(d, T(1.0)));do if (((g[j >> 2] = e, c[j >> 2] | 0) & 2147483647) >>> 0 <= 2139095040) {
        if (T(C(T(e))) < T(.0000999999974)) {
          d = T(d - e);break;
        }d = T(d - e);if (T(C(T(e + T(-1.0)))) < T(.0000999999974)) d = T(d + T(1.0));else t = 46;
      } else {
        d = T(d - e);t = 46;
      } while (0);do if ((t | 0) == 46) if (h) {
        d = T(d + T(1.0));break;
      } else {
        q = e >= T(.5);w = T((q ? T(1.0) : T(0.0)) + d);d = f ? d : w;break;
      } while (0);k = T(d / b);d = T(u * b);e = T(Jl(d, T(1.0)));do if (((g[j >> 2] = e, c[j >> 2] | 0) & 2147483647) >>> 0 <= 2139095040) {
        if (T(C(T(e))) < T(.0000999999974)) {
          d = T(d - e);break;
        }d = T(d - e);if (T(C(T(e + T(-1.0)))) < T(.0000999999974)) d = T(d + T(1.0));else t = 55;
      } else {
        d = T(d - e);t = 55;
      } while (0);if ((t | 0) == 55) {
        t = e >= T(.5);w = T((t ? T(1.0) : T(0.0)) + d);d = r ? d : w;
      }g[s >> 2] = T(k - T(d / b));h = a + 948 | 0;i = Wb(c[h >> 2] | 0) | 0;if (!i) return;else f = 0;do {
        Td(Zb(c[h >> 2] | 0, f) | 0, b, v, u);f = f + 1 | 0;
      } while ((f | 0) != (i | 0));return;
    }function Ud(b, c, d) {
      b = b | 0;c = c | 0;d = d | 0;a[b + c >> 0] = d & 1;return;
    }function Vd(b, c) {
      b = b | 0;c = c | 0;return (a[b + c >> 0] | 0) != 0 | 0;
    }function Wd() {
      var a = 0;a = Sl(4) | 0;c[a >> 2] = jc() | 0;return a | 0;
    }function Xd(a) {
      a = a | 0;if (!a) return;lc(c[a >> 2] | 0);Ul(a);return;
    }function Yd(a) {
      a = a | 0;lc(c[a >> 2] | 0);return;
    }function Zd(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;Ud(c[a >> 2] | 0, b, d);return;
    }function _d(a, b) {
      a = a | 0;b = b | 0;return Vd(c[a >> 2] | 0, b) | 0;
    }function $d() {
      var a = 0,
          b = 0;a = Sl(8) | 0;b = bc() | 0;c[a >> 2] = b;c[a + 4 >> 2] = 0;uc(b, a);return a | 0;
    }function ae(a) {
      a = a | 0;var b = 0;b = Sl(8) | 0;if (!a) a = bc() | 0;else a = _b(c[a >> 2] | 0) | 0;c[b >> 2] = a;c[b + 4 >> 2] = 0;uc(a, b);return b | 0;
    }function be(a) {
      a = a | 0;var b = 0,
          d = 0;if (!a) return;cc(c[a >> 2] | 0);d = a + 4 | 0;b = c[d >> 2] | 0;c[d >> 2] = 0;if (b | 0) {
        d = c[b >> 2] | 0;if (d | 0) eb(d | 0);Ul(b);
      }Ul(a);return;
    }function ce(a) {
      a = a | 0;var b = 0;cc(c[a >> 2] | 0);b = a + 4 | 0;a = c[b >> 2] | 0;c[b >> 2] = 0;if (!a) return;b = c[a >> 2] | 0;if (b | 0) eb(b | 0);Ul(a);return;
    }function de(a) {
      a = a | 0;var b = 0,
          d = 0;d = a + 4 | 0;b = c[d >> 2] | 0;c[d >> 2] = 0;if (b | 0) {
        d = c[b >> 2] | 0;if (d | 0) eb(d | 0);Ul(b);
      }gc(c[a >> 2] | 0);return;
    }function ee(a, b) {
      a = a | 0;b = b | 0;rc(c[a >> 2] | 0, c[b >> 2] | 0);return;
    }function fe(a, b) {
      a = a | 0;b = b | 0;Gc(c[a >> 2] | 0, b);return;
    }function ge(a, b, d) {
      a = a | 0;b = b | 0;d = +d;Uc(c[a >> 2] | 0, b, T(d));return;
    }function he(a, b, d) {
      a = a | 0;b = b | 0;d = +d;Vc(c[a >> 2] | 0, b, T(d));return;
    }function ie(a, b) {
      a = a | 0;b = b | 0;Ac(c[a >> 2] | 0, b);return;
    }function je(a, b) {
      a = a | 0;b = b | 0;Cc(c[a >> 2] | 0, b);return;
    }function ke(a, b) {
      a = a | 0;b = b | 0;Ec(c[a >> 2] | 0, b);return;
    }function le(a, b) {
      a = a | 0;b = b | 0;wc(c[a >> 2] | 0, b);return;
    }function me(a, b) {
      a = a | 0;b = b | 0;Ic(c[a >> 2] | 0, b);return;
    }function ne(a, b) {
      a = a | 0;b = b | 0;yc(c[a >> 2] | 0, b);return;
    }function oe(a, b, d) {
      a = a | 0;b = b | 0;d = +d;Xc(c[a >> 2] | 0, b, T(d));return;
    }function pe(a, b, d) {
      a = a | 0;b = b | 0;d = +d;Yc(c[a >> 2] | 0, b, T(d));return;
    }function qe(a, b) {
      a = a | 0;b = b | 0;_c(c[a >> 2] | 0, b);return;
    }function re(a, b) {
      a = a | 0;b = b | 0;Kc(c[a >> 2] | 0, b);return;
    }function se(a, b) {
      a = a | 0;b = b | 0;Mc(c[a >> 2] | 0, b);return;
    }function te(a, b) {
      a = a | 0;b = +b;Oc(c[a >> 2] | 0, T(b));return;
    }function ue(a, b) {
      a = a | 0;b = +b;Rc(c[a >> 2] | 0, T(b));return;
    }function ve(a, b) {
      a = a | 0;b = +b;Sc(c[a >> 2] | 0, T(b));return;
    }function we(a, b) {
      a = a | 0;b = +b;Pc(c[a >> 2] | 0, T(b));return;
    }function xe(a, b) {
      a = a | 0;b = +b;Qc(c[a >> 2] | 0, T(b));return;
    }function ye(a, b) {
      a = a | 0;b = +b;ed(c[a >> 2] | 0, T(b));return;
    }function ze(a, b) {
      a = a | 0;b = +b;fd(c[a >> 2] | 0, T(b));return;
    }function Ae(a) {
      a = a | 0;gd(c[a >> 2] | 0);return;
    }function Be(a, b) {
      a = a | 0;b = +b;id(c[a >> 2] | 0, T(b));return;
    }function Ce(a, b) {
      a = a | 0;b = +b;jd(c[a >> 2] | 0, T(b));return;
    }function De(a) {
      a = a | 0;kd(c[a >> 2] | 0);return;
    }function Ee(a, b) {
      a = a | 0;b = +b;md(c[a >> 2] | 0, T(b));return;
    }function Fe(a, b) {
      a = a | 0;b = +b;nd(c[a >> 2] | 0, T(b));return;
    }function Ge(a, b) {
      a = a | 0;b = +b;pd(c[a >> 2] | 0, T(b));return;
    }function He(a, b) {
      a = a | 0;b = +b;qd(c[a >> 2] | 0, T(b));return;
    }function Ie(a, b) {
      a = a | 0;b = +b;sd(c[a >> 2] | 0, T(b));return;
    }function Je(a, b) {
      a = a | 0;b = +b;td(c[a >> 2] | 0, T(b));return;
    }function Ke(a, b) {
      a = a | 0;b = +b;vd(c[a >> 2] | 0, T(b));return;
    }function Le(a, b) {
      a = a | 0;b = +b;wd(c[a >> 2] | 0, T(b));return;
    }function Me(a, b) {
      a = a | 0;b = +b;yd(c[a >> 2] | 0, T(b));return;
    }function Ne(a, b, d) {
      a = a | 0;b = b | 0;d = +d;cd(c[a >> 2] | 0, b, T(d));return;
    }function Oe(a, b, d) {
      a = a | 0;b = b | 0;d = +d;$c(c[a >> 2] | 0, b, T(d));return;
    }function Pe(a, b, d) {
      a = a | 0;b = b | 0;d = +d;ad(c[a >> 2] | 0, b, T(d));return;
    }function Qe(a) {
      a = a | 0;return Hc(c[a >> 2] | 0) | 0;
    }function Re(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0.0,
          i = 0;e = l;l = l + 16 | 0;i = e;Wc(i, c[b >> 2] | 0, d);f = +T(g[i >> 2]);c[a >> 2] = c[i + 4 >> 2];h[a + 8 >> 3] = f;l = e;return;
    }function Se(a) {
      a = a | 0;return Bc(c[a >> 2] | 0) | 0;
    }function Te(a) {
      a = a | 0;return Dc(c[a >> 2] | 0) | 0;
    }function Ue(a) {
      a = a | 0;return Fc(c[a >> 2] | 0) | 0;
    }function Ve(a) {
      a = a | 0;return xc(c[a >> 2] | 0) | 0;
    }function We(a) {
      a = a | 0;return Jc(c[a >> 2] | 0) | 0;
    }function Xe(a) {
      a = a | 0;return zc(c[a >> 2] | 0) | 0;
    }function Ye(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0.0,
          i = 0;e = l;l = l + 16 | 0;i = e;Zc(i, c[b >> 2] | 0, d);f = +T(g[i >> 2]);c[a >> 2] = c[i + 4 >> 2];h[a + 8 >> 3] = f;l = e;return;
    }function Ze(a) {
      a = a | 0;return Lc(c[a >> 2] | 0) | 0;
    }function _e(a) {
      a = a | 0;return Nc(c[a >> 2] | 0) | 0;
    }function $e(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0.0,
          f = 0;d = l;l = l + 16 | 0;f = d;Tc(f, c[b >> 2] | 0);e = +T(g[f >> 2]);c[a >> 2] = c[f + 4 >> 2];h[a + 8 >> 3] = e;l = d;return;
    }function af(a) {
      a = a | 0;return + +T(sc(c[a >> 2] | 0));
    }function bf(a) {
      a = a | 0;return + +T(tc(c[a >> 2] | 0));
    }function cf(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0.0,
          f = 0;d = l;l = l + 16 | 0;f = d;hd(f, c[b >> 2] | 0);e = +T(g[f >> 2]);c[a >> 2] = c[f + 4 >> 2];h[a + 8 >> 3] = e;l = d;return;
    }function df(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0.0,
          f = 0;d = l;l = l + 16 | 0;f = d;ld(f, c[b >> 2] | 0);e = +T(g[f >> 2]);c[a >> 2] = c[f + 4 >> 2];h[a + 8 >> 3] = e;l = d;return;
    }function ef(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0.0,
          f = 0;d = l;l = l + 16 | 0;f = d;od(f, c[b >> 2] | 0);e = +T(g[f >> 2]);c[a >> 2] = c[f + 4 >> 2];h[a + 8 >> 3] = e;l = d;return;
    }function ff(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0.0,
          f = 0;d = l;l = l + 16 | 0;f = d;rd(f, c[b >> 2] | 0);e = +T(g[f >> 2]);c[a >> 2] = c[f + 4 >> 2];h[a + 8 >> 3] = e;l = d;return;
    }function gf(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0.0,
          f = 0;d = l;l = l + 16 | 0;f = d;ud(f, c[b >> 2] | 0);e = +T(g[f >> 2]);c[a >> 2] = c[f + 4 >> 2];h[a + 8 >> 3] = e;l = d;return;
    }function hf(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0.0,
          f = 0;d = l;l = l + 16 | 0;f = d;xd(f, c[b >> 2] | 0);e = +T(g[f >> 2]);c[a >> 2] = c[f + 4 >> 2];h[a + 8 >> 3] = e;l = d;return;
    }function jf(a) {
      a = a | 0;return + +T(zd(c[a >> 2] | 0));
    }function kf(a, b) {
      a = a | 0;b = b | 0;return + +T(dd(c[a >> 2] | 0, b));
    }function lf(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0.0,
          i = 0;e = l;l = l + 16 | 0;i = e;bd(i, c[b >> 2] | 0, d);f = +T(g[i >> 2]);c[a >> 2] = c[i + 4 >> 2];h[a + 8 >> 3] = f;l = e;return;
    }function mf(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;nc(c[a >> 2] | 0, c[b >> 2] | 0, d);return;
    }function nf(a, b) {
      a = a | 0;b = b | 0;fc(c[a >> 2] | 0, c[b >> 2] | 0);return;
    }function of(a) {
      a = a | 0;return dc(c[a >> 2] | 0) | 0;
    }function pf(a) {
      a = a | 0;a = oc(c[a >> 2] | 0) | 0;if (!a) {
        a = 0;return a | 0;
      }a = vc(a) | 0;return a | 0;
    }function qf(a, b) {
      a = a | 0;b = b | 0;a = ec(c[a >> 2] | 0, b) | 0;if (!a) {
        b = 0;return b | 0;
      }b = vc(a) | 0;return b | 0;
    }function rf(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;e = Sl(4) | 0;d = c[b >> 2] | 0;c[e >> 2] = d;Aa(d | 0);d = a + 4 | 0;b = c[d >> 2] | 0;c[d >> 2] = e;if (!b) {
        e = c[a >> 2] | 0;mc(e, 1);return;
      }d = c[b >> 2] | 0;if (d | 0) eb(d | 0);Ul(b);e = c[a >> 2] | 0;mc(e, 1);return;
    }function sf(a, b, d, e, f, i) {
      a = a | 0;b = b | 0;d = T(d);e = e | 0;f = T(f);i = i | 0;var j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0;j = l;l = l + 48 | 0;p = j + 24 | 0;o = j + 36 | 0;n = j + 16 | 0;m = j + 32 | 0;k = j;b = vc(b) | 0;h[p >> 3] = +d;c[o >> 2] = e;h[n >> 3] = +f;c[m >> 2] = i;tf(k, c[b + 4 >> 2] | 0, p, o, n, m);g[a >> 2] = T(+h[k >> 3]);g[a + 4 >> 2] = T(+h[k + 8 >> 3]);l = j;return;
    }function tf(b, d, e, f, g, i) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;g = g | 0;i = i | 0;var j = 0.0,
          k = 0.0,
          m = 0,
          n = 0,
          o = 0,
          p = 0;p = l;l = l + 48 | 0;n = p;o = p + 32 | 0;Ak(o);m = c[d >> 2] | 0;k = +h[e >> 3];e = c[f >> 2] | 0;j = +h[g >> 3];d = c[i >> 2] | 0;if ((a[8224] | 0) == 0 ? Vl(8224) | 0 : 0) {
        c[2190] = 1124;c[2191] = 4;c[2192] = bb(1124, 5) | 0;
      }d = gb(0, c[2192] | 0, m | 0, +k, e | 0, +j, d | 0) | 0;if (!(d & 1)) {
        n = d;c[b >> 2] = c[n >> 2];c[b + 4 >> 2] = c[n + 4 >> 2];c[b + 8 >> 2] = c[n + 8 >> 2];c[b + 12 >> 2] = c[n + 12 >> 2];Bk(o);l = p;return;
      } else {
        c[n >> 2] = 0;c[n + 8 >> 2] = 0;a[n + 24 >> 0] = 0;La(d | 0, n | 0) | 0;n = n + 8 | 0;c[b >> 2] = c[n >> 2];c[b + 4 >> 2] = c[n + 4 >> 2];c[b + 8 >> 2] = c[n + 8 >> 2];c[b + 12 >> 2] = c[n + 12 >> 2];Bk(o);l = p;return;
      }
    }function uf(a) {
      a = a | 0;var b = 0,
          d = 0;d = a + 4 | 0;b = c[d >> 2] | 0;c[d >> 2] = 0;if (b | 0) {
        d = c[b >> 2] | 0;if (d | 0) eb(d | 0);Ul(b);
      }mc(c[a >> 2] | 0, 0);return;
    }function vf(a) {
      a = a | 0;pc(c[a >> 2] | 0);return;
    }function wf(a) {
      a = a | 0;return qc(c[a >> 2] | 0) | 0;
    }function xf(a, b, d, e) {
      a = a | 0;b = +b;d = +d;e = e | 0;Sd(c[a >> 2] | 0, T(b), T(d), e);return;
    }function yf(a) {
      a = a | 0;return + +T(Ad(c[a >> 2] | 0));
    }function zf(a) {
      a = a | 0;return + +T(Cd(c[a >> 2] | 0));
    }function Af(a) {
      a = a | 0;return + +T(Bd(c[a >> 2] | 0));
    }function Bf(a) {
      a = a | 0;return + +T(Dd(c[a >> 2] | 0));
    }function Cf(a) {
      a = a | 0;return + +T(Ed(c[a >> 2] | 0));
    }function Df(a) {
      a = a | 0;return + +T(Fd(c[a >> 2] | 0));
    }function Ef(a, b) {
      a = a | 0;b = b | 0;h[a >> 3] = +T(Ad(c[b >> 2] | 0));h[a + 8 >> 3] = +T(Cd(c[b >> 2] | 0));h[a + 16 >> 3] = +T(Bd(c[b >> 2] | 0));h[a + 24 >> 3] = +T(Dd(c[b >> 2] | 0));h[a + 32 >> 3] = +T(Ed(c[b >> 2] | 0));h[a + 40 >> 3] = +T(Fd(c[b >> 2] | 0));return;
    }function Ff(a, b) {
      a = a | 0;b = b | 0;return + +T(Gd(c[a >> 2] | 0, b));
    }function Gf(a, b) {
      a = a | 0;b = b | 0;return + +T(Hd(c[a >> 2] | 0, b));
    }function Hf(a, b) {
      a = a | 0;b = b | 0;return + +T(Id(c[a >> 2] | 0, b));
    }function If() {
      return ic() | 0;
    }function Jf() {
      var a = 0,
          b = 0,
          d = 0;a = l;l = l + 16 | 0;b = a + 8 | 0;d = a;Kf(11307, 4284, 1);Lf(8772, 4301);Mf(8772) | 0;Nf(8772) | 0;Of(8776, 4306);Pf(8776) | 0;Qf(8780, 4313);Rf(8780) | 0;Sf(8780) | 0;Tf(8784, 4319);Uf(8784, 4326, 2, 0);Vf(8784, 4333, 18, 0);c[d >> 2] = 1;c[d + 4 >> 2] = 0;c[b >> 2] = c[d >> 2];c[b + 4 >> 2] = c[d + 4 >> 2];Wf(8784, 4341, b, 0);c[d >> 2] = 3;c[d + 4 >> 2] = 0;c[b >> 2] = c[d >> 2];c[b + 4 >> 2] = c[d + 4 >> 2];Xf(8784, 4371, b, 1);Yf(8788);l = a;return;
    }function Kf(b, d, e) {
      b = b | 0;d = d | 0;e = e | 0;b = Yi(e, 0) | 0;if ((a[8552] | 0) == 0 ? Vl(8552) | 0 : 0) {
        c[2543] = 1;c[2544] = 3;c[2545] = 8828;c[2546] = 1260;c[2547] = 0;c[2549] = 0;c[2550] = 0;c[2551] = 0;Ha(19, 10172, o | 0) | 0;
      }if (c[2543] | 0) {
        lj(d, e, b, 10172, 0);return;
      }c[2548] = 0;c[2543] = 1;c[2544] = 3;c[2545] = 8828;c[2546] = 1260;c[2547] = 0;c[2549] = 0;c[2550] = 0;c[2551] = 0;lj(d, e, b, 10172, 0);return;
    }function Lf(b, d) {
      b = b | 0;d = d | 0;if ((a[8544] | 0) == 0 ? Vl(8544) | 0 : 0) {
        c[2536] = 0;c[2537] = 0;c[2538] = 0;c[2539] = 10152;c[2541] = 0;a[10168] = 0;a[10169] = 0;Ha(20, 10128, o | 0) | 0;
      }c[b >> 2] = 10128;c[2532] = 11304;c[2533] = 1508;c[2535] = d;if ((a[8512] | 0) == 0 ? Vl(8512) | 0 : 0) {
        c[2503] = c[370];c[2504] = 0;
      }c[2534] = 10012;c[2540] = 1;kj(c[b >> 2] | 0);return;
    }function Mf(b) {
      b = b | 0;var d = 0,
          e = 0,
          f = 0;d = c[b >> 2] | 0;if ((a[8536] | 0) == 0 ? Vl(8536) | 0 : 0) {
        c[2523] = 5;c[2524] = 3;c[2525] = 8828;c[2526] = 1544;c[2527] = 0;c[2529] = 0;c[2530] = 0;c[2531] = 0;c[2528] = 21;Ha(22, 10092, o | 0) | 0;
      }if (!(c[2523] | 0)) {
        c[2523] = 5;c[2524] = 3;c[2525] = 8828;c[2526] = 1544;c[2527] = 0;c[2529] = 0;c[2530] = 0;c[2531] = 0;c[2528] = 21;
      }d = d + 28 | 0;f = c[d >> 2] | 0;e = Sl(24) | 0;c[e + 4 >> 2] = 0;c[e + 8 >> 2] = 0;c[e + 12 >> 2] = 0;c[e + 16 >> 2] = 10092;c[e + 20 >> 2] = 0;c[e >> 2] = c[f >> 2];c[f >> 2] = e;c[d >> 2] = e;return b | 0;
    }function Nf(b) {
      b = b | 0;var d = 0,
          e = 0,
          f = 0;d = c[b >> 2] | 0;if ((a[8528] | 0) == 0 ? Vl(8528) | 0 : 0) {
        c[2514] = 5;c[2515] = 1;c[2516] = 8828;c[2517] = 1496;c[2518] = 2;c[2520] = 0;c[2521] = 0;c[2522] = 0;c[2519] = 1;Ha(23, 10056, o | 0) | 0;
      }if (!(c[2514] | 0)) {
        c[2514] = 5;c[2515] = 1;c[2516] = 8828;c[2517] = 1496;c[2518] = 2;c[2520] = 0;c[2521] = 0;c[2522] = 0;c[2519] = 1;
      }d = d + 28 | 0;f = c[d >> 2] | 0;e = Sl(24) | 0;c[e + 4 >> 2] = 0;c[e + 8 >> 2] = 0;c[e + 12 >> 2] = 0;c[e + 16 >> 2] = 10056;c[e + 20 >> 2] = 0;c[e >> 2] = c[f >> 2];c[f >> 2] = e;c[d >> 2] = e;return b | 0;
    }function Of(b, d) {
      b = b | 0;d = d | 0;if ((a[8240] | 0) == 0 ? Vl(8240) | 0 : 0) {
        c[2212] = 0;c[2213] = 0;c[2214] = 0;c[2215] = 8856;c[2217] = 0;a[8872] = 0;a[8873] = 0;Ha(20, 8832, o | 0) | 0;
      }c[b >> 2] = 8832;c[2208] = 11308;c[2209] = 1488;c[2211] = d;if ((a[8512] | 0) == 0 ? Vl(8512) | 0 : 0) {
        c[2503] = c[370];c[2504] = 0;
      }c[2210] = 10012;c[2216] = 2;kj(c[b >> 2] | 0);return;
    }function Pf(b) {
      b = b | 0;var d = 0,
          e = 0,
          f = 0;d = c[b >> 2] | 0;if ((a[8520] | 0) == 0 ? Vl(8520) | 0 : 0) {
        c[2505] = 5;c[2506] = 4;c[2507] = 8828;c[2508] = 1484;c[2509] = 0;c[2511] = 0;c[2512] = 0;c[2513] = 0;c[2510] = 24;Ha(25, 10020, o | 0) | 0;
      }if (!(c[2505] | 0)) {
        c[2505] = 5;c[2506] = 4;c[2507] = 8828;c[2508] = 1484;c[2509] = 0;c[2511] = 0;c[2512] = 0;c[2513] = 0;c[2510] = 24;
      }d = d + 28 | 0;f = c[d >> 2] | 0;e = Sl(24) | 0;c[e + 4 >> 2] = 0;c[e + 8 >> 2] = 0;c[e + 12 >> 2] = 0;c[e + 16 >> 2] = 10020;c[e + 20 >> 2] = 0;c[e >> 2] = c[f >> 2];c[f >> 2] = e;c[d >> 2] = e;return b | 0;
    }function Qf(b, d) {
      b = b | 0;d = d | 0;if ((a[8344] | 0) == 0 ? Vl(8344) | 0 : 0) {
        c[2325] = 0;c[2326] = 0;c[2327] = 0;c[2328] = 9308;c[2330] = 0;a[9324] = 0;a[9325] = 0;Ha(20, 9284, o | 0) | 0;
      }c[b >> 2] = 9284;c[2321] = 11315;c[2322] = 1468;c[2324] = d;if ((a[8512] | 0) == 0 ? Vl(8512) | 0 : 0) {
        c[2503] = c[370];c[2504] = 0;
      }c[2323] = 10012;c[2329] = 3;kj(c[b >> 2] | 0);return;
    }function Rf(b) {
      b = b | 0;var d = 0,
          e = 0,
          f = 0;d = c[b >> 2] | 0;if ((a[8504] | 0) == 0 ? Vl(8504) | 0 : 0) {
        c[2494] = 5;c[2495] = 5;c[2496] = 8828;c[2497] = 1476;c[2498] = 0;c[2500] = 0;c[2501] = 0;c[2502] = 0;c[2499] = 26;Ha(27, 9976, o | 0) | 0;
      }if (!(c[2494] | 0)) {
        c[2494] = 5;c[2495] = 5;c[2496] = 8828;c[2497] = 1476;c[2498] = 0;c[2500] = 0;c[2501] = 0;c[2502] = 0;c[2499] = 26;
      }d = d + 28 | 0;f = c[d >> 2] | 0;e = Sl(24) | 0;c[e + 4 >> 2] = 0;c[e + 8 >> 2] = 0;c[e + 12 >> 2] = 0;c[e + 16 >> 2] = 9976;c[e + 20 >> 2] = 0;c[e >> 2] = c[f >> 2];c[f >> 2] = e;c[d >> 2] = e;return b | 0;
    }function Sf(b) {
      b = b | 0;var d = 0,
          e = 0,
          f = 0;d = c[b >> 2] | 0;if ((a[8496] | 0) == 0 ? Vl(8496) | 0 : 0) {
        c[2485] = 5;c[2486] = 1;c[2487] = 8828;c[2488] = 1456;c[2489] = 2;c[2491] = 0;c[2492] = 0;c[2493] = 0;c[2490] = 1;Ha(28, 9940, o | 0) | 0;
      }if (!(c[2485] | 0)) {
        c[2485] = 5;c[2486] = 1;c[2487] = 8828;c[2488] = 1456;c[2489] = 2;c[2491] = 0;c[2492] = 0;c[2493] = 0;c[2490] = 1;
      }d = d + 28 | 0;f = c[d >> 2] | 0;e = Sl(24) | 0;c[e + 4 >> 2] = 0;c[e + 8 >> 2] = 0;c[e + 12 >> 2] = 0;c[e + 16 >> 2] = 9940;c[e + 20 >> 2] = 0;c[e >> 2] = c[f >> 2];c[f >> 2] = e;c[d >> 2] = e;return b | 0;
    }function Tf(b, d) {
      b = b | 0;d = d | 0;if ((a[8488] | 0) == 0 ? Vl(8488) | 0 : 0) {
        c[2478] = 0;c[2479] = 0;c[2480] = 0;c[2481] = 9920;c[2483] = 0;a[9936] = 0;a[9937] = 0;Ha(20, 9896, o | 0) | 0;
      }c[b >> 2] = 9896;c[2474] = 11316;c[2475] = 1416;c[2477] = d;if ((a[8448] | 0) == 0 ? Vl(8448) | 0 : 0) {
        c[2436] = 0;c[2437] = 0;
      }c[2476] = 9744;c[2482] = 4;kj(c[b >> 2] | 0);return;
    }function Uf(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0;b = c[b >> 2] | 0;if ((a[8480] | 0) == 0 ? Vl(8480) | 0 : 0) {
        c[2465] = 1;c[2466] = 4;c[2467] = 8828;c[2468] = 1452;c[2469] = 0;c[2471] = 0;c[2472] = 0;c[2473] = 0;Ha(29, 9860, o | 0) | 0;
      }if (!(c[2465] | 0)) {
        c[2470] = 0;c[2465] = 1;c[2466] = 4;c[2467] = 8828;c[2468] = 1452;c[2469] = 0;c[2471] = 0;c[2472] = 0;c[2473] = 0;
      }i = Ai(e, f) | 0;b = b + 28 | 0;h = c[b >> 2] | 0;g = Sl(24) | 0;c[g + 4 >> 2] = d;c[g + 8 >> 2] = e;c[g + 12 >> 2] = i;c[g + 16 >> 2] = 9860;c[g + 20 >> 2] = f;c[g >> 2] = c[h >> 2];c[h >> 2] = g;c[b >> 2] = g;return;
    }function Vf(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0;b = c[b >> 2] | 0;if ((a[8472] | 0) == 0 ? Vl(8472) | 0 : 0) {
        c[2456] = 1;c[2457] = 1;c[2458] = 8828;c[2459] = 1444;c[2460] = 1;c[2462] = 0;c[2463] = 0;c[2464] = 0;Ha(30, 9824, o | 0) | 0;
      }if (!(c[2456] | 0)) {
        c[2461] = 0;c[2456] = 1;c[2457] = 1;c[2458] = 8828;c[2459] = 1444;c[2460] = 1;c[2462] = 0;c[2463] = 0;c[2464] = 0;
      }i = wi(e, f) | 0;b = b + 28 | 0;h = c[b >> 2] | 0;g = Sl(24) | 0;c[g + 4 >> 2] = d;c[g + 8 >> 2] = e;c[g + 12 >> 2] = i;c[g + 16 >> 2] = 9824;c[g + 20 >> 2] = f;c[g >> 2] = c[h >> 2];c[h >> 2] = g;c[b >> 2] = g;return;
    }function Wf(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0;k = l;l = l + 16 | 0;h = k + 8 | 0;j = k;i = c[e >> 2] | 0;g = c[e + 4 >> 2] | 0;e = c[b >> 2] | 0;if ((a[8464] | 0) == 0 ? Vl(8464) | 0 : 0) {
        c[2447] = 2;c[2448] = 5;c[2449] = 8828;c[2450] = 1432;c[2451] = 2;c[2453] = 0;c[2454] = 0;c[2455] = 0;Ha(31, 9788, o | 0) | 0;
      }if (!(c[2447] | 0)) {
        c[2452] = 0;c[2447] = 2;c[2448] = 5;c[2449] = 8828;c[2450] = 1432;c[2451] = 2;c[2453] = 0;c[2454] = 0;c[2455] = 0;
      }c[j >> 2] = i;c[j + 4 >> 2] = g;c[h >> 2] = c[j >> 2];c[h + 4 >> 2] = c[j + 4 >> 2];b = si(h, f) | 0;j = e + 28 | 0;h = c[j >> 2] | 0;i = Sl(24) | 0;c[i + 4 >> 2] = d;c[i + 8 >> 2] = 0;c[i + 12 >> 2] = b;c[i + 16 >> 2] = 9788;c[i + 20 >> 2] = f;c[i >> 2] = c[h >> 2];c[h >> 2] = i;c[j >> 2] = i;l = k;return;
    }function Xf(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0;k = l;l = l + 16 | 0;h = k + 8 | 0;j = k;i = c[e >> 2] | 0;g = c[e + 4 >> 2] | 0;e = c[b >> 2] | 0;if ((a[8456] | 0) == 0 ? Vl(8456) | 0 : 0) {
        c[2438] = 2;c[2439] = 5;c[2440] = 8828;c[2441] = 1424;c[2442] = 1;c[2444] = 0;c[2445] = 0;c[2446] = 0;Ha(32, 9752, o | 0) | 0;
      }if (!(c[2438] | 0)) {
        c[2443] = 0;c[2438] = 2;c[2439] = 5;c[2440] = 8828;c[2441] = 1424;c[2442] = 1;c[2444] = 0;c[2445] = 0;c[2446] = 0;
      }c[j >> 2] = i;c[j + 4 >> 2] = g;c[h >> 2] = c[j >> 2];c[h + 4 >> 2] = c[j + 4 >> 2];b = oi(h, f) | 0;j = e + 28 | 0;h = c[j >> 2] | 0;i = Sl(24) | 0;c[i + 4 >> 2] = d;c[i + 8 >> 2] = 0;c[i + 12 >> 2] = b;c[i + 16 >> 2] = 9752;c[i + 20 >> 2] = f;c[i >> 2] = c[h >> 2];c[h >> 2] = i;c[j >> 2] = i;l = k;return;
    }function Yf(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;b = l;l = l + 16 | 0;d = b + 8 | 0;e = b;Zf(a, 4400);_f(a, 4405, 6, 0);$f(a, 4419, 5, 0);ag(a, 4333, 33, 0);c[e >> 2] = 34;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];bg(a, 4436, d, 0);c[e >> 2] = 2;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];cg(a, 4442, d, 0);c[e >> 2] = 3;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];dg(a, 4452, d, 0);c[e >> 2] = 2;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];eg(a, 4468, d, 0);c[e >> 2] = 3;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];eg(a, 4480, d, 0);c[e >> 2] = 4;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];dg(a, 4499, d, 0);c[e >> 2] = 5;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];dg(a, 4515, d, 0);c[e >> 2] = 6;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];dg(a, 4529, d, 0);c[e >> 2] = 7;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];dg(a, 4542, d, 0);c[e >> 2] = 8;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];dg(a, 4559, d, 0);c[e >> 2] = 9;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];dg(a, 4571, d, 0);c[e >> 2] = 4;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];eg(a, 4589, d, 0);c[e >> 2] = 5;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];eg(a, 4599, d, 0);c[e >> 2] = 10;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];dg(a, 4616, d, 0);c[e >> 2] = 11;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];dg(a, 4630, d, 0);c[e >> 2] = 12;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];dg(a, 4642, d, 0);c[e >> 2] = 1;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];fg(a, 4653, d, 0);c[e >> 2] = 2;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];fg(a, 4661, d, 0);c[e >> 2] = 3;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];fg(a, 4674, d, 0);c[e >> 2] = 4;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];fg(a, 4694, d, 0);c[e >> 2] = 5;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];fg(a, 4706, d, 0);c[e >> 2] = 6;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];fg(a, 4720, d, 0);c[e >> 2] = 7;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];fg(a, 4729, d, 0);c[e >> 2] = 35;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];bg(a, 4745, d, 0);c[e >> 2] = 8;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];fg(a, 4758, d, 0);c[e >> 2] = 9;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];fg(a, 4768, d, 0);c[e >> 2] = 36;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];bg(a, 4785, d, 0);c[e >> 2] = 10;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];fg(a, 4799, d, 0);c[e >> 2] = 11;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];fg(a, 4811, d, 0);c[e >> 2] = 12;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];fg(a, 4830, d, 0);c[e >> 2] = 13;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];fg(a, 4843, d, 0);c[e >> 2] = 14;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];fg(a, 4863, d, 0);c[e >> 2] = 15;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];fg(a, 4875, d, 0);c[e >> 2] = 16;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];fg(a, 4894, d, 0);c[e >> 2] = 17;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];fg(a, 4907, d, 0);c[e >> 2] = 18;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];fg(a, 4927, d, 0);c[e >> 2] = 6;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];eg(a, 4942, d, 0);c[e >> 2] = 7;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];eg(a, 4952, d, 0);c[e >> 2] = 8;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];eg(a, 4963, d, 0);c[e >> 2] = 6;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];gg(a, 4981, d, 1);c[e >> 2] = 2;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];hg(a, 4997, d, 1);c[e >> 2] = 7;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];gg(a, 5009, d, 1);c[e >> 2] = 8;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];gg(a, 5025, d, 1);c[e >> 2] = 9;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];gg(a, 5039, d, 1);c[e >> 2] = 10;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];gg(a, 5052, d, 1);c[e >> 2] = 11;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];gg(a, 5069, d, 1);c[e >> 2] = 12;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];gg(a, 5081, d, 1);c[e >> 2] = 3;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];hg(a, 5099, d, 1);c[e >> 2] = 13;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];ig(a, 5109, d, 1);c[e >> 2] = 1;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];jg(a, 5122, d, 1);c[e >> 2] = 2;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];jg(a, 5134, d, 1);c[e >> 2] = 14;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];ig(a, 5148, d, 1);c[e >> 2] = 15;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];ig(a, 5157, d, 1);c[e >> 2] = 16;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];ig(a, 5167, d, 1);c[e >> 2] = 17;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];ig(a, 5179, d, 1);c[e >> 2] = 18;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];ig(a, 5192, d, 1);c[e >> 2] = 19;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];ig(a, 5204, d, 1);c[e >> 2] = 3;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];jg(a, 5217, d, 1);c[e >> 2] = 1;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];kg(a, 5232, d, 1);c[e >> 2] = 13;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];gg(a, 5242, d, 1);c[e >> 2] = 14;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];gg(a, 5254, d, 1);c[e >> 2] = 4;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];hg(a, 5265, d, 1);c[e >> 2] = 5;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];lg(a, 5276, d, 0);c[e >> 2] = 20;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];mg(a, 5288, d, 0);c[e >> 2] = 15;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];ng(a, 5300, d, 1);c[e >> 2] = 16;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];og(a, 5314, d, 0);c[e >> 2] = 4;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];pg(a, 5324, d, 0);c[e >> 2] = 21;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];qg(a, 5333, d, 0);c[e >> 2] = 37;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];bg(a, 5348, d, 0);c[e >> 2] = 38;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];bg(a, 5365, d, 0);c[e >> 2] = 17;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];rg(a, 5375, d, 1);c[e >> 2] = 1;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];sg(a, 5383, d, 0);c[e >> 2] = 4;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];jg(a, 5399, d, 1);c[e >> 2] = 5;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];jg(a, 5415, d, 1);c[e >> 2] = 6;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];jg(a, 5432, d, 1);c[e >> 2] = 7;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];jg(a, 5447, d, 1);c[e >> 2] = 8;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];jg(a, 5465, d, 1);c[e >> 2] = 9;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];jg(a, 5482, d, 1);c[e >> 2] = 22;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];tg(a, 5500, d, 1);c[e >> 2] = 2;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];kg(a, 5518, d, 1);c[e >> 2] = 3;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];kg(a, 5536, d, 1);c[e >> 2] = 4;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];kg(a, 5554, d, 1);l = b;return;
    }function Zf(b, d) {
      b = b | 0;d = d | 0;if ((a[8440] | 0) == 0 ? Vl(8440) | 0 : 0) {
        c[2429] = 0;c[2430] = 0;c[2431] = 0;c[2432] = 9724;c[2434] = 0;a[9740] = 0;a[9741] = 0;Ha(20, 9700, o | 0) | 0;
      }c[b >> 2] = 9700;c[2425] = 11314;c[2426] = 1248;c[2428] = d;if ((a[8448] | 0) == 0 ? Vl(8448) | 0 : 0) {
        c[2436] = 0;c[2437] = 0;
      }c[2427] = 9744;c[2433] = 6;kj(c[b >> 2] | 0);return;
    }function _f(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0;b = c[b >> 2] | 0;if ((a[8432] | 0) == 0 ? Vl(8432) | 0 : 0) {
        c[2416] = 1;c[2417] = 18;c[2418] = 8828;c[2419] = 1256;c[2420] = 0;c[2422] = 0;c[2423] = 0;c[2424] = 0;Ha(39, 9664, o | 0) | 0;
      }if (!(c[2416] | 0)) {
        c[2421] = 0;c[2416] = 1;c[2417] = 18;c[2418] = 8828;c[2419] = 1256;c[2420] = 0;c[2422] = 0;c[2423] = 0;c[2424] = 0;
      }i = ji(e, f) | 0;b = b + 28 | 0;h = c[b >> 2] | 0;g = Sl(24) | 0;c[g + 4 >> 2] = d;c[g + 8 >> 2] = e;c[g + 12 >> 2] = i;c[g + 16 >> 2] = 9664;c[g + 20 >> 2] = f;c[g >> 2] = c[h >> 2];c[h >> 2] = g;c[b >> 2] = g;return;
    }function $f(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0;b = c[b >> 2] | 0;if ((a[8424] | 0) == 0 ? Vl(8424) | 0 : 0) {
        c[2407] = 1;c[2408] = 5;c[2409] = 8828;c[2410] = 1408;c[2411] = 1;c[2413] = 0;c[2414] = 0;c[2415] = 0;Ha(40, 9628, o | 0) | 0;
      }if (!(c[2407] | 0)) {
        c[2412] = 0;c[2407] = 1;c[2408] = 5;c[2409] = 8828;c[2410] = 1408;c[2411] = 1;c[2413] = 0;c[2414] = 0;c[2415] = 0;
      }i = fi(e, f) | 0;b = b + 28 | 0;h = c[b >> 2] | 0;g = Sl(24) | 0;c[g + 4 >> 2] = d;c[g + 8 >> 2] = e;c[g + 12 >> 2] = i;c[g + 16 >> 2] = 9628;c[g + 20 >> 2] = f;c[g >> 2] = c[h >> 2];c[h >> 2] = g;c[b >> 2] = g;return;
    }function ag(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0;b = c[b >> 2] | 0;if ((a[8416] | 0) == 0 ? Vl(8416) | 0 : 0) {
        c[2398] = 1;c[2399] = 23;c[2400] = 8828;c[2401] = 1264;c[2402] = 1;c[2404] = 0;c[2405] = 0;c[2406] = 0;Ha(41, 9592, o | 0) | 0;
      }if (!(c[2398] | 0)) {
        c[2403] = 0;c[2398] = 1;c[2399] = 23;c[2400] = 8828;c[2401] = 1264;c[2402] = 1;c[2404] = 0;c[2405] = 0;c[2406] = 0;
      }i = bi(e, f) | 0;b = b + 28 | 0;h = c[b >> 2] | 0;g = Sl(24) | 0;c[g + 4 >> 2] = d;c[g + 8 >> 2] = e;c[g + 12 >> 2] = i;c[g + 16 >> 2] = 9592;c[g + 20 >> 2] = f;c[g >> 2] = c[h >> 2];c[h >> 2] = g;c[b >> 2] = g;return;
    }function bg(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0;k = l;l = l + 16 | 0;h = k + 8 | 0;j = k;i = c[e >> 2] | 0;g = c[e + 4 >> 2] | 0;e = c[b >> 2] | 0;if ((a[8408] | 0) == 0 ? Vl(8408) | 0 : 0) {
        c[2389] = 2;c[2390] = 24;c[2391] = 8828;c[2392] = 1404;c[2393] = 0;c[2395] = 0;c[2396] = 0;c[2397] = 0;Ha(42, 9556, o | 0) | 0;
      }if (!(c[2389] | 0)) {
        c[2394] = 0;c[2389] = 2;c[2390] = 24;c[2391] = 8828;c[2392] = 1404;c[2393] = 0;c[2395] = 0;c[2396] = 0;c[2397] = 0;
      }c[j >> 2] = i;c[j + 4 >> 2] = g;c[h >> 2] = c[j >> 2];c[h + 4 >> 2] = c[j + 4 >> 2];b = Zh(h, f) | 0;j = e + 28 | 0;h = c[j >> 2] | 0;i = Sl(24) | 0;c[i + 4 >> 2] = d;c[i + 8 >> 2] = 0;c[i + 12 >> 2] = b;c[i + 16 >> 2] = 9556;c[i + 20 >> 2] = f;c[i >> 2] = c[h >> 2];c[h >> 2] = i;c[j >> 2] = i;l = k;return;
    }function cg(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0;k = l;l = l + 16 | 0;h = k + 8 | 0;j = k;i = c[e >> 2] | 0;g = c[e + 4 >> 2] | 0;e = c[b >> 2] | 0;if ((a[8400] | 0) == 0 ? Vl(8400) | 0 : 0) {
        c[2380] = 2;c[2381] = 6;c[2382] = 8828;c[2383] = 1380;c[2384] = 1;c[2386] = 0;c[2387] = 0;c[2388] = 0;Ha(43, 9520, o | 0) | 0;
      }if (!(c[2380] | 0)) {
        c[2385] = 0;c[2380] = 2;c[2381] = 6;c[2382] = 8828;c[2383] = 1380;c[2384] = 1;c[2386] = 0;c[2387] = 0;c[2388] = 0;
      }c[j >> 2] = i;c[j + 4 >> 2] = g;c[h >> 2] = c[j >> 2];c[h + 4 >> 2] = c[j + 4 >> 2];b = Vh(h, f) | 0;j = e + 28 | 0;h = c[j >> 2] | 0;i = Sl(24) | 0;c[i + 4 >> 2] = d;c[i + 8 >> 2] = 0;c[i + 12 >> 2] = b;c[i + 16 >> 2] = 9520;c[i + 20 >> 2] = f;c[i >> 2] = c[h >> 2];c[h >> 2] = i;c[j >> 2] = i;l = k;return;
    }function dg(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0;k = l;l = l + 16 | 0;h = k + 8 | 0;j = k;i = c[e >> 2] | 0;g = c[e + 4 >> 2] | 0;e = c[b >> 2] | 0;if ((a[8392] | 0) == 0 ? Vl(8392) | 0 : 0) {
        c[2371] = 2;c[2372] = 7;c[2373] = 8828;c[2374] = 1372;c[2375] = 1;c[2377] = 0;c[2378] = 0;c[2379] = 0;Ha(44, 9484, o | 0) | 0;
      }if (!(c[2371] | 0)) {
        c[2376] = 0;c[2371] = 2;c[2372] = 7;c[2373] = 8828;c[2374] = 1372;c[2375] = 1;c[2377] = 0;c[2378] = 0;c[2379] = 0;
      }c[j >> 2] = i;c[j + 4 >> 2] = g;c[h >> 2] = c[j >> 2];c[h + 4 >> 2] = c[j + 4 >> 2];b = Rh(h, f) | 0;j = e + 28 | 0;h = c[j >> 2] | 0;i = Sl(24) | 0;c[i + 4 >> 2] = d;c[i + 8 >> 2] = 0;c[i + 12 >> 2] = b;c[i + 16 >> 2] = 9484;c[i + 20 >> 2] = f;c[i >> 2] = c[h >> 2];c[h >> 2] = i;c[j >> 2] = i;l = k;return;
    }function eg(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0;k = l;l = l + 16 | 0;h = k + 8 | 0;j = k;i = c[e >> 2] | 0;g = c[e + 4 >> 2] | 0;e = c[b >> 2] | 0;if ((a[8384] | 0) == 0 ? Vl(8384) | 0 : 0) {
        c[2362] = 2;c[2363] = 1;c[2364] = 8828;c[2365] = 1360;c[2366] = 2;c[2368] = 0;c[2369] = 0;c[2370] = 0;Ha(45, 9448, o | 0) | 0;
      }if (!(c[2362] | 0)) {
        c[2367] = 0;c[2362] = 2;c[2363] = 1;c[2364] = 8828;c[2365] = 1360;c[2366] = 2;c[2368] = 0;c[2369] = 0;c[2370] = 0;
      }c[j >> 2] = i;c[j + 4 >> 2] = g;c[h >> 2] = c[j >> 2];c[h + 4 >> 2] = c[j + 4 >> 2];b = Nh(h, f) | 0;j = e + 28 | 0;h = c[j >> 2] | 0;i = Sl(24) | 0;c[i + 4 >> 2] = d;c[i + 8 >> 2] = 0;c[i + 12 >> 2] = b;c[i + 16 >> 2] = 9448;c[i + 20 >> 2] = f;c[i >> 2] = c[h >> 2];c[h >> 2] = i;c[j >> 2] = i;l = k;return;
    }function fg(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0;k = l;l = l + 16 | 0;h = k + 8 | 0;j = k;i = c[e >> 2] | 0;g = c[e + 4 >> 2] | 0;e = c[b >> 2] | 0;if ((a[8376] | 0) == 0 ? Vl(8376) | 0 : 0) {
        c[2353] = 2;c[2354] = 9;c[2355] = 8828;c[2356] = 1352;c[2357] = 1;c[2359] = 0;c[2360] = 0;c[2361] = 0;Ha(46, 9412, o | 0) | 0;
      }if (!(c[2353] | 0)) {
        c[2358] = 0;c[2353] = 2;c[2354] = 9;c[2355] = 8828;c[2356] = 1352;c[2357] = 1;c[2359] = 0;c[2360] = 0;c[2361] = 0;
      }c[j >> 2] = i;c[j + 4 >> 2] = g;c[h >> 2] = c[j >> 2];c[h + 4 >> 2] = c[j + 4 >> 2];b = Jh(h, f) | 0;j = e + 28 | 0;h = c[j >> 2] | 0;i = Sl(24) | 0;c[i + 4 >> 2] = d;c[i + 8 >> 2] = 0;c[i + 12 >> 2] = b;c[i + 16 >> 2] = 9412;c[i + 20 >> 2] = f;c[i >> 2] = c[h >> 2];c[h >> 2] = i;c[j >> 2] = i;l = k;return;
    }function gg(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0;k = l;l = l + 16 | 0;h = k + 8 | 0;j = k;i = c[e >> 2] | 0;g = c[e + 4 >> 2] | 0;e = c[b >> 2] | 0;if ((a[8368] | 0) == 0 ? Vl(8368) | 0 : 0) {
        c[2344] = 2;c[2345] = 6;c[2346] = 8828;c[2347] = 1348;c[2348] = 0;c[2350] = 0;c[2351] = 0;c[2352] = 0;Ha(47, 9376, o | 0) | 0;
      }if (!(c[2344] | 0)) {
        c[2349] = 0;c[2344] = 2;c[2345] = 6;c[2346] = 8828;c[2347] = 1348;c[2348] = 0;c[2350] = 0;c[2351] = 0;c[2352] = 0;
      }c[j >> 2] = i;c[j + 4 >> 2] = g;c[h >> 2] = c[j >> 2];c[h + 4 >> 2] = c[j + 4 >> 2];b = Fh(h, f) | 0;j = e + 28 | 0;h = c[j >> 2] | 0;i = Sl(24) | 0;c[i + 4 >> 2] = d;c[i + 8 >> 2] = 0;c[i + 12 >> 2] = b;c[i + 16 >> 2] = 9376;c[i + 20 >> 2] = f;c[i >> 2] = c[h >> 2];c[h >> 2] = i;c[j >> 2] = i;l = k;return;
    }function hg(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0;k = l;l = l + 16 | 0;h = k + 8 | 0;j = k;i = c[e >> 2] | 0;g = c[e + 4 >> 2] | 0;e = c[b >> 2] | 0;if ((a[8360] | 0) == 0 ? Vl(8360) | 0 : 0) {
        c[2335] = 2;c[2336] = 6;c[2337] = 8828;c[2338] = 1340;c[2339] = 1;c[2341] = 0;c[2342] = 0;c[2343] = 0;Ha(48, 9340, o | 0) | 0;
      }if (!(c[2335] | 0)) {
        c[2340] = 0;c[2335] = 2;c[2336] = 6;c[2337] = 8828;c[2338] = 1340;c[2339] = 1;c[2341] = 0;c[2342] = 0;c[2343] = 0;
      }c[j >> 2] = i;c[j + 4 >> 2] = g;c[h >> 2] = c[j >> 2];c[h + 4 >> 2] = c[j + 4 >> 2];b = Bh(h, f) | 0;j = e + 28 | 0;h = c[j >> 2] | 0;i = Sl(24) | 0;c[i + 4 >> 2] = d;c[i + 8 >> 2] = 0;c[i + 12 >> 2] = b;c[i + 16 >> 2] = 9340;c[i + 20 >> 2] = f;c[i >> 2] = c[h >> 2];c[h >> 2] = i;c[j >> 2] = i;l = k;return;
    }function ig(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0;k = l;l = l + 16 | 0;h = k + 8 | 0;j = k;i = c[e >> 2] | 0;g = c[e + 4 >> 2] | 0;e = c[b >> 2] | 0;if ((a[8336] | 0) == 0 ? Vl(8336) | 0 : 0) {
        c[2312] = 2;c[2313] = 7;c[2314] = 8828;c[2315] = 1296;c[2316] = 0;c[2318] = 0;c[2319] = 0;c[2320] = 0;Ha(49, 9248, o | 0) | 0;
      }if (!(c[2312] | 0)) {
        c[2317] = 0;c[2312] = 2;c[2313] = 7;c[2314] = 8828;c[2315] = 1296;c[2316] = 0;c[2318] = 0;c[2319] = 0;c[2320] = 0;
      }c[j >> 2] = i;c[j + 4 >> 2] = g;c[h >> 2] = c[j >> 2];c[h + 4 >> 2] = c[j + 4 >> 2];b = sh(h, f) | 0;j = e + 28 | 0;h = c[j >> 2] | 0;i = Sl(24) | 0;c[i + 4 >> 2] = d;c[i + 8 >> 2] = 0;c[i + 12 >> 2] = b;c[i + 16 >> 2] = 9248;c[i + 20 >> 2] = f;c[i >> 2] = c[h >> 2];c[h >> 2] = i;c[j >> 2] = i;l = k;return;
    }function jg(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0;k = l;l = l + 16 | 0;h = k + 8 | 0;j = k;i = c[e >> 2] | 0;g = c[e + 4 >> 2] | 0;e = c[b >> 2] | 0;if ((a[8328] | 0) == 0 ? Vl(8328) | 0 : 0) {
        c[2303] = 2;c[2304] = 5;c[2305] = 8828;c[2306] = 1292;c[2307] = 0;c[2309] = 0;c[2310] = 0;c[2311] = 0;Ha(50, 9212, o | 0) | 0;
      }if (!(c[2303] | 0)) {
        c[2308] = 0;c[2303] = 2;c[2304] = 5;c[2305] = 8828;c[2306] = 1292;c[2307] = 0;c[2309] = 0;c[2310] = 0;c[2311] = 0;
      }c[j >> 2] = i;c[j + 4 >> 2] = g;c[h >> 2] = c[j >> 2];c[h + 4 >> 2] = c[j + 4 >> 2];b = oh(h, f) | 0;j = e + 28 | 0;h = c[j >> 2] | 0;i = Sl(24) | 0;c[i + 4 >> 2] = d;c[i + 8 >> 2] = 0;c[i + 12 >> 2] = b;c[i + 16 >> 2] = 9212;c[i + 20 >> 2] = f;c[i >> 2] = c[h >> 2];c[h >> 2] = i;c[j >> 2] = i;l = k;return;
    }function kg(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0;k = l;l = l + 16 | 0;h = k + 8 | 0;j = k;i = c[e >> 2] | 0;g = c[e + 4 >> 2] | 0;e = c[b >> 2] | 0;if ((a[8320] | 0) == 0 ? Vl(8320) | 0 : 0) {
        c[2294] = 2;c[2295] = 1;c[2296] = 8828;c[2297] = 1284;c[2298] = 1;c[2300] = 0;c[2301] = 0;c[2302] = 0;Ha(51, 9176, o | 0) | 0;
      }if (!(c[2294] | 0)) {
        c[2299] = 0;c[2294] = 2;c[2295] = 1;c[2296] = 8828;c[2297] = 1284;c[2298] = 1;c[2300] = 0;c[2301] = 0;c[2302] = 0;
      }c[j >> 2] = i;c[j + 4 >> 2] = g;c[h >> 2] = c[j >> 2];c[h + 4 >> 2] = c[j + 4 >> 2];b = kh(h, f) | 0;j = e + 28 | 0;h = c[j >> 2] | 0;i = Sl(24) | 0;c[i + 4 >> 2] = d;c[i + 8 >> 2] = 0;c[i + 12 >> 2] = b;c[i + 16 >> 2] = 9176;c[i + 20 >> 2] = f;c[i >> 2] = c[h >> 2];c[h >> 2] = i;c[j >> 2] = i;l = k;return;
    }function lg(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0;k = l;l = l + 16 | 0;h = k + 8 | 0;j = k;i = c[e >> 2] | 0;g = c[e + 4 >> 2] | 0;e = c[b >> 2] | 0;if ((a[8312] | 0) == 0 ? Vl(8312) | 0 : 0) {
        c[2285] = 2;c[2286] = 7;c[2287] = 8828;c[2288] = 1272;c[2289] = 2;c[2291] = 0;c[2292] = 0;c[2293] = 0;Ha(52, 9140, o | 0) | 0;
      }if (!(c[2285] | 0)) {
        c[2290] = 0;c[2285] = 2;c[2286] = 7;c[2287] = 8828;c[2288] = 1272;c[2289] = 2;c[2291] = 0;c[2292] = 0;c[2293] = 0;
      }c[j >> 2] = i;c[j + 4 >> 2] = g;c[h >> 2] = c[j >> 2];c[h + 4 >> 2] = c[j + 4 >> 2];b = gh(h, f) | 0;j = e + 28 | 0;h = c[j >> 2] | 0;i = Sl(24) | 0;c[i + 4 >> 2] = d;c[i + 8 >> 2] = 0;c[i + 12 >> 2] = b;c[i + 16 >> 2] = 9140;c[i + 20 >> 2] = f;c[i >> 2] = c[h >> 2];c[h >> 2] = i;c[j >> 2] = i;l = k;return;
    }function mg(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0;k = l;l = l + 16 | 0;h = k + 8 | 0;j = k;i = c[e >> 2] | 0;g = c[e + 4 >> 2] | 0;e = c[b >> 2] | 0;if ((a[8304] | 0) == 0 ? Vl(8304) | 0 : 0) {
        c[2276] = 2;c[2277] = 8;c[2278] = 8828;c[2279] = 1264;c[2280] = 1;c[2282] = 0;c[2283] = 0;c[2284] = 0;Ha(53, 9104, o | 0) | 0;
      }if (!(c[2276] | 0)) {
        c[2281] = 0;c[2276] = 2;c[2277] = 8;c[2278] = 8828;c[2279] = 1264;c[2280] = 1;c[2282] = 0;c[2283] = 0;c[2284] = 0;
      }c[j >> 2] = i;c[j + 4 >> 2] = g;c[h >> 2] = c[j >> 2];c[h + 4 >> 2] = c[j + 4 >> 2];b = ch(h, f) | 0;j = e + 28 | 0;h = c[j >> 2] | 0;i = Sl(24) | 0;c[i + 4 >> 2] = d;c[i + 8 >> 2] = 0;c[i + 12 >> 2] = b;c[i + 16 >> 2] = 9104;c[i + 20 >> 2] = f;c[i >> 2] = c[h >> 2];c[h >> 2] = i;c[j >> 2] = i;l = k;return;
    }function ng(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0;k = l;l = l + 16 | 0;h = k + 8 | 0;j = k;i = c[e >> 2] | 0;g = c[e + 4 >> 2] | 0;e = c[b >> 2] | 0;if ((a[8296] | 0) == 0 ? Vl(8296) | 0 : 0) {
        c[2267] = 2;c[2268] = 8;c[2269] = 8828;c[2270] = 1260;c[2271] = 0;c[2273] = 0;c[2274] = 0;c[2275] = 0;Ha(54, 9068, o | 0) | 0;
      }if (!(c[2267] | 0)) {
        c[2272] = 0;c[2267] = 2;c[2268] = 8;c[2269] = 8828;c[2270] = 1260;c[2271] = 0;c[2273] = 0;c[2274] = 0;c[2275] = 0;
      }c[j >> 2] = i;c[j + 4 >> 2] = g;c[h >> 2] = c[j >> 2];c[h + 4 >> 2] = c[j + 4 >> 2];b = _g(h, f) | 0;j = e + 28 | 0;h = c[j >> 2] | 0;i = Sl(24) | 0;c[i + 4 >> 2] = d;c[i + 8 >> 2] = 0;c[i + 12 >> 2] = b;c[i + 16 >> 2] = 9068;c[i + 20 >> 2] = f;c[i >> 2] = c[h >> 2];c[h >> 2] = i;c[j >> 2] = i;l = k;return;
    }function og(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0;k = l;l = l + 16 | 0;h = k + 8 | 0;j = k;i = c[e >> 2] | 0;g = c[e + 4 >> 2] | 0;e = c[b >> 2] | 0;if ((a[8288] | 0) == 0 ? Vl(8288) | 0 : 0) {
        c[2258] = 2;c[2259] = 9;c[2260] = 8828;c[2261] = 1256;c[2262] = 0;c[2264] = 0;c[2265] = 0;c[2266] = 0;Ha(55, 9032, o | 0) | 0;
      }if (!(c[2258] | 0)) {
        c[2263] = 0;c[2258] = 2;c[2259] = 9;c[2260] = 8828;c[2261] = 1256;c[2262] = 0;c[2264] = 0;c[2265] = 0;c[2266] = 0;
      }c[j >> 2] = i;c[j + 4 >> 2] = g;c[h >> 2] = c[j >> 2];c[h + 4 >> 2] = c[j + 4 >> 2];b = Wg(h, f) | 0;j = e + 28 | 0;h = c[j >> 2] | 0;i = Sl(24) | 0;c[i + 4 >> 2] = d;c[i + 8 >> 2] = 0;c[i + 12 >> 2] = b;c[i + 16 >> 2] = 9032;c[i + 20 >> 2] = f;c[i >> 2] = c[h >> 2];c[h >> 2] = i;c[j >> 2] = i;l = k;return;
    }function pg(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0;k = l;l = l + 16 | 0;h = k + 8 | 0;j = k;i = c[e >> 2] | 0;g = c[e + 4 >> 2] | 0;e = c[b >> 2] | 0;if ((a[8280] | 0) == 0 ? Vl(8280) | 0 : 0) {
        c[2249] = 2;c[2250] = 7;c[2251] = 8828;c[2252] = 1240;c[2253] = 1;c[2255] = 0;c[2256] = 0;c[2257] = 0;Ha(56, 8996, o | 0) | 0;
      }if (!(c[2249] | 0)) {
        c[2254] = 0;c[2249] = 2;c[2250] = 7;c[2251] = 8828;c[2252] = 1240;c[2253] = 1;c[2255] = 0;c[2256] = 0;c[2257] = 0;
      }c[j >> 2] = i;c[j + 4 >> 2] = g;c[h >> 2] = c[j >> 2];c[h + 4 >> 2] = c[j + 4 >> 2];b = Sg(h, f) | 0;j = e + 28 | 0;h = c[j >> 2] | 0;i = Sl(24) | 0;c[i + 4 >> 2] = d;c[i + 8 >> 2] = 0;c[i + 12 >> 2] = b;c[i + 16 >> 2] = 8996;c[i + 20 >> 2] = f;c[i >> 2] = c[h >> 2];c[h >> 2] = i;c[j >> 2] = i;l = k;return;
    }function qg(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0;k = l;l = l + 16 | 0;h = k + 8 | 0;j = k;i = c[e >> 2] | 0;g = c[e + 4 >> 2] | 0;e = c[b >> 2] | 0;if ((a[8272] | 0) == 0 ? Vl(8272) | 0 : 0) {
        c[2240] = 2;c[2241] = 9;c[2242] = 8828;c[2243] = 1224;c[2244] = 1;c[2246] = 0;c[2247] = 0;c[2248] = 0;Ha(57, 8960, o | 0) | 0;
      }if (!(c[2240] | 0)) {
        c[2245] = 0;c[2240] = 2;c[2241] = 9;c[2242] = 8828;c[2243] = 1224;c[2244] = 1;c[2246] = 0;c[2247] = 0;c[2248] = 0;
      }c[j >> 2] = i;c[j + 4 >> 2] = g;c[h >> 2] = c[j >> 2];c[h + 4 >> 2] = c[j + 4 >> 2];b = Og(h, f) | 0;j = e + 28 | 0;h = c[j >> 2] | 0;i = Sl(24) | 0;c[i + 4 >> 2] = d;c[i + 8 >> 2] = 0;c[i + 12 >> 2] = b;c[i + 16 >> 2] = 8960;c[i + 20 >> 2] = f;c[i >> 2] = c[h >> 2];c[h >> 2] = i;c[j >> 2] = i;l = k;return;
    }function rg(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0;k = l;l = l + 16 | 0;h = k + 8 | 0;j = k;i = c[e >> 2] | 0;g = c[e + 4 >> 2] | 0;e = c[b >> 2] | 0;if ((a[8264] | 0) == 0 ? Vl(8264) | 0 : 0) {
        c[2231] = 2;c[2232] = 10;c[2233] = 8828;c[2234] = 1220;c[2235] = 0;c[2237] = 0;c[2238] = 0;c[2239] = 0;Ha(58, 8924, o | 0) | 0;
      }if (!(c[2231] | 0)) {
        c[2236] = 0;c[2231] = 2;c[2232] = 10;c[2233] = 8828;c[2234] = 1220;c[2235] = 0;c[2237] = 0;c[2238] = 0;c[2239] = 0;
      }c[j >> 2] = i;c[j + 4 >> 2] = g;c[h >> 2] = c[j >> 2];c[h + 4 >> 2] = c[j + 4 >> 2];b = Kg(h, f) | 0;j = e + 28 | 0;h = c[j >> 2] | 0;i = Sl(24) | 0;c[i + 4 >> 2] = d;c[i + 8 >> 2] = 0;c[i + 12 >> 2] = b;c[i + 16 >> 2] = 8924;c[i + 20 >> 2] = f;c[i >> 2] = c[h >> 2];c[h >> 2] = i;c[j >> 2] = i;l = k;return;
    }function sg(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0;k = l;l = l + 16 | 0;h = k + 8 | 0;j = k;i = c[e >> 2] | 0;g = c[e + 4 >> 2] | 0;e = c[b >> 2] | 0;if ((a[8256] | 0) == 0 ? Vl(8256) | 0 : 0) {
        c[2222] = 2;c[2223] = 1;c[2224] = 8828;c[2225] = 1204;c[2226] = 3;c[2228] = 0;c[2229] = 0;c[2230] = 0;Ha(59, 8888, o | 0) | 0;
      }if (!(c[2222] | 0)) {
        c[2227] = 0;c[2222] = 2;c[2223] = 1;c[2224] = 8828;c[2225] = 1204;c[2226] = 3;c[2228] = 0;c[2229] = 0;c[2230] = 0;
      }c[j >> 2] = i;c[j + 4 >> 2] = g;c[h >> 2] = c[j >> 2];c[h + 4 >> 2] = c[j + 4 >> 2];b = Gg(h, f) | 0;j = e + 28 | 0;h = c[j >> 2] | 0;i = Sl(24) | 0;c[i + 4 >> 2] = d;c[i + 8 >> 2] = 0;c[i + 12 >> 2] = b;c[i + 16 >> 2] = 8888;c[i + 20 >> 2] = f;c[i >> 2] = c[h >> 2];c[h >> 2] = i;c[j >> 2] = i;l = k;return;
    }function tg(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0;k = l;l = l + 16 | 0;h = k + 8 | 0;j = k;i = c[e >> 2] | 0;g = c[e + 4 >> 2] | 0;e = c[b >> 2] | 0;if ((a[8232] | 0) == 0 ? Vl(8232) | 0 : 0) {
        c[2198] = 2;c[2199] = 11;c[2200] = 8828;c[2201] = 1144;c[2202] = 0;c[2204] = 0;c[2205] = 0;c[2206] = 0;Ha(60, 8792, o | 0) | 0;
      }if (!(c[2198] | 0)) {
        c[2203] = 0;c[2198] = 2;c[2199] = 11;c[2200] = 8828;c[2201] = 1144;c[2202] = 0;c[2204] = 0;c[2205] = 0;c[2206] = 0;
      }c[j >> 2] = i;c[j + 4 >> 2] = g;c[h >> 2] = c[j >> 2];c[h + 4 >> 2] = c[j + 4 >> 2];b = wg(h, f) | 0;j = e + 28 | 0;h = c[j >> 2] | 0;i = Sl(24) | 0;c[i + 4 >> 2] = d;c[i + 8 >> 2] = 0;c[i + 12 >> 2] = b;c[i + 16 >> 2] = 8792;c[i + 20 >> 2] = f;c[i >> 2] = c[h >> 2];c[h >> 2] = i;c[j >> 2] = i;l = k;return;
    }function ug(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;g = l;l = l + 48 | 0;f = g;if ((a[8232] | 0) == 0 ? Vl(8232) | 0 : 0) {
        c[2198] = 2;c[2199] = 11;c[2200] = 8828;c[2201] = 1144;c[2202] = 0;c[2204] = 0;c[2205] = 0;c[2206] = 0;Ha(60, 8792, o | 0) | 0;
      }h = c[2204] | 0;e = c[h + (b * 12 | 0) >> 2] | 0;h = c[h + (b * 12 | 0) + 4 >> 2] | 0;b = d + (h >> 1) | 0;if (!(h & 1)) {
        h = e;tb[h & 31](f, b);h = yg(f) | 0;l = g;return h | 0;
      } else {
        h = c[(c[b >> 2] | 0) + e >> 2] | 0;tb[h & 31](f, b);h = yg(f) | 0;l = g;return h | 0;
      }return 0;
    }function vg(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - d | 0) >>> 0) / 12 | 0) * 12 | 0);Ul(d);return;
    }function wg(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0;i = l;l = l + 16 | 0;g = i;h = i + 8 | 0;f = c[b + 4 >> 2] | 0;c[g >> 2] = c[b >> 2];e = g + 4 | 0;c[e >> 2] = f;if ((a[8232] | 0) == 0 ? Vl(8232) | 0 : 0) {
        c[2198] = 2;c[2199] = 11;c[2200] = 8828;c[2201] = 1144;c[2202] = 0;c[2204] = 0;c[2205] = 0;c[2206] = 0;Ha(60, 8792, o | 0) | 0;
      }if (c[2198] | 0) {
        f = c[2205] | 0;j = c[2206] | 0;b = d | 4;c[h >> 2] = b;if (f >>> 0 < j >>> 0) {
          h = c[e >> 2] | 0;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = h;c[f + 8 >> 2] = b;h = (c[2205] | 0) + 12 | 0;c[2205] = h;j = c[2204] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
        }
      } else {
        c[2203] = 0;c[2198] = 2;c[2199] = 11;c[2200] = 8828;c[2201] = 1144;c[2202] = 0;c[2204] = 0;c[2205] = 0;c[2206] = 0;c[h >> 2] = d | 4;
      }xg(8816, g, h);h = c[2205] | 0;j = c[2204] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
    }function xg(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0,
          n = 0;k = a + 4 | 0;l = c[a >> 2] | 0;m = (c[k >> 2] | 0) - l | 0;h = (m | 0) / 12 | 0;e = h + 1 | 0;if (e >>> 0 > 357913941) Ll(a);i = a + 8 | 0;g = ((c[i >> 2] | 0) - l | 0) / 12 | 0;f = g << 1;f = g >>> 0 < 178956970 ? f >>> 0 < e >>> 0 ? e : f : 357913941;do if (f) {
        if (f >>> 0 > 357913941) Va();else {
          j = Sl(f * 12 | 0) | 0;break;
        }
      } else j = 0; while (0);g = j + (h * 12 | 0) | 0;n = c[b + 4 >> 2] | 0;e = c[d >> 2] | 0;c[g >> 2] = c[b >> 2];c[j + (h * 12 | 0) + 4 >> 2] = n;c[j + (h * 12 | 0) + 8 >> 2] = e;e = g + (((m | 0) / -12 | 0) * 12 | 0) | 0;if ((m | 0) > 0) cm(e | 0, l | 0, m | 0) | 0;c[a >> 2] = e;c[k >> 2] = g + 12;c[i >> 2] = j + (f * 12 | 0);if (!l) return;Ul(l);return;
    }function yg(b) {
      b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0;j = l;l = l + 16 | 0;d = j;if ((a[8240] | 0) == 0 ? Vl(8240) | 0 : 0) {
        c[2212] = 0;c[2213] = 0;c[2214] = 0;c[2215] = 8856;c[2217] = 0;a[8872] = 0;a[8873] = 0;Ha(20, 8832, o | 0) | 0;
      }e = c[2217] | 0;if (!e) {
        f = Mj(8) | 0;g = f;h = Sl(48) | 0;i = h;d = b;e = i + 48 | 0;do {
          c[i >> 2] = c[d >> 2];i = i + 4 | 0;d = d + 4 | 0;
        } while ((i | 0) < (e | 0));b = g + 4 | 0;c[b >> 2] = h;i = Sl(8) | 0;b = c[b >> 2] | 0;c[i >> 2] = b;h = Sl(16) | 0;c[h + 4 >> 2] = 0;c[h + 8 >> 2] = 0;c[h >> 2] = 1156;c[h + 12 >> 2] = b;c[i + 4 >> 2] = h;c[f >> 2] = i;i = g;l = j;return i | 0;
      } else {
        c[d >> 2] = e;i = d + 4 | 0;c[i >> 2] = d;h = d + 8 | 0;c[h >> 2] = 0;c[h >> 2] = Ag(e, b, b + 8 | 0, b + 16 | 0, b + 24 | 0, b + 32 | 0, b + 40 | 0) | 0;i = c[(c[i >> 2] | 0) + 8 >> 2] | 0;l = j;return i | 0;
      }return 0;
    }function zg(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = a + 24 | 0;b = c[d >> 2] | 0;if (b | 0) do {
        e = b;b = c[b >> 2] | 0;Ul(e);
      } while ((b | 0) != 0);c[d >> 2] = 0;a = a + 16 | 0;b = c[a >> 2] | 0;if (!b) {
        c[a >> 2] = 0;return;
      }do {
        e = b;b = c[b >> 2] | 0;Ul(e);
      } while ((b | 0) != 0);c[a >> 2] = 0;return;
    }function Ag(b, d, e, f, g, i, j) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;g = g | 0;i = i | 0;j = j | 0;var k = 0.0,
          m = 0.0,
          n = 0.0,
          o = 0.0,
          p = 0.0,
          q = 0.0,
          r = 0,
          s = 0;s = l;l = l + 16 | 0;r = s;Ak(r);b = c[b >> 2] | 0;q = +h[d >> 3];p = +h[e >> 3];o = +h[f >> 3];n = +h[g >> 3];m = +h[i >> 3];k = +h[j >> 3];if ((a[8248] | 0) == 0 ? Vl(8248) | 0 : 0) {
        c[2219] = 1176;c[2220] = 6;c[2221] = bb(1176, 7) | 0;
      }j = xa(0, c[2221] | 0, b | 0, +q, +p, +o, +n, +m, +k) | 0;Bk(r);l = s;return j | 0;
    }function Bg(a) {
      a = a | 0;Ml(a);Ul(a);return;
    }function Cg(a) {
      a = a | 0;a = c[a + 12 >> 2] | 0;if (!a) return;Ul(a);return;
    }function Dg(a) {
      a = a | 0;Ul(a);return;
    }function Eg(b, d, e, f, g) {
      b = b | 0;d = d | 0;e = +e;f = +f;g = g | 0;var h = 0,
          i = 0;if ((a[8256] | 0) == 0 ? Vl(8256) | 0 : 0) {
        c[2222] = 2;c[2223] = 1;c[2224] = 8828;c[2225] = 1204;c[2226] = 3;c[2228] = 0;c[2229] = 0;c[2230] = 0;Ha(59, 8888, o | 0) | 0;
      }i = c[2228] | 0;h = c[i + (b * 12 | 0) >> 2] | 0;i = c[i + (b * 12 | 0) + 4 >> 2] | 0;b = d + (i >> 1) | 0;if (!(i & 1)) {
        i = h;vb[i & 1](b, e, f, g);return;
      } else {
        i = c[(c[b >> 2] | 0) + h >> 2] | 0;vb[i & 1](b, e, f, g);return;
      }
    }function Fg(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - d | 0) >>> 0) / 12 | 0) * 12 | 0);Ul(d);return;
    }function Gg(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0;i = l;l = l + 16 | 0;g = i;h = i + 8 | 0;f = c[b + 4 >> 2] | 0;c[g >> 2] = c[b >> 2];e = g + 4 | 0;c[e >> 2] = f;if ((a[8256] | 0) == 0 ? Vl(8256) | 0 : 0) {
        c[2222] = 2;c[2223] = 1;c[2224] = 8828;c[2225] = 1204;c[2226] = 3;c[2228] = 0;c[2229] = 0;c[2230] = 0;Ha(59, 8888, o | 0) | 0;
      }if (c[2222] | 0) {
        f = c[2229] | 0;j = c[2230] | 0;b = d | 4;c[h >> 2] = b;if (f >>> 0 < j >>> 0) {
          h = c[e >> 2] | 0;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = h;c[f + 8 >> 2] = b;h = (c[2229] | 0) + 12 | 0;c[2229] = h;j = c[2228] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
        }
      } else {
        c[2227] = 0;c[2222] = 2;c[2223] = 1;c[2224] = 8828;c[2225] = 1204;c[2226] = 3;c[2228] = 0;c[2229] = 0;c[2230] = 0;c[h >> 2] = d | 4;
      }Hg(8912, g, h);h = c[2229] | 0;j = c[2228] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
    }function Hg(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0,
          n = 0;k = a + 4 | 0;l = c[a >> 2] | 0;m = (c[k >> 2] | 0) - l | 0;h = (m | 0) / 12 | 0;e = h + 1 | 0;if (e >>> 0 > 357913941) Ll(a);i = a + 8 | 0;g = ((c[i >> 2] | 0) - l | 0) / 12 | 0;f = g << 1;f = g >>> 0 < 178956970 ? f >>> 0 < e >>> 0 ? e : f : 357913941;do if (f) {
        if (f >>> 0 > 357913941) Va();else {
          j = Sl(f * 12 | 0) | 0;break;
        }
      } else j = 0; while (0);g = j + (h * 12 | 0) | 0;n = c[b + 4 >> 2] | 0;e = c[d >> 2] | 0;c[g >> 2] = c[b >> 2];c[j + (h * 12 | 0) + 4 >> 2] = n;c[j + (h * 12 | 0) + 8 >> 2] = e;e = g + (((m | 0) / -12 | 0) * 12 | 0) | 0;if ((m | 0) > 0) cm(e | 0, l | 0, m | 0) | 0;c[a >> 2] = e;c[k >> 2] = g + 12;c[i >> 2] = j + (f * 12 | 0);if (!l) return;Ul(l);return;
    }function Ig(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0;if ((a[8264] | 0) == 0 ? Vl(8264) | 0 : 0) {
        c[2231] = 2;c[2232] = 10;c[2233] = 8828;c[2234] = 1220;c[2235] = 0;c[2237] = 0;c[2238] = 0;c[2239] = 0;Ha(58, 8924, o | 0) | 0;
      }f = c[2237] | 0;e = c[f + (b * 12 | 0) >> 2] | 0;f = c[f + (b * 12 | 0) + 4 >> 2] | 0;b = d + (f >> 1) | 0;if (!(f & 1)) {
        f = e;f = ub[f & 31](b) | 0;f = f & 1;return f | 0;
      } else {
        f = c[(c[b >> 2] | 0) + e >> 2] | 0;f = ub[f & 31](b) | 0;f = f & 1;return f | 0;
      }return 0;
    }function Jg(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - d | 0) >>> 0) / 12 | 0) * 12 | 0);Ul(d);return;
    }function Kg(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0;i = l;l = l + 16 | 0;g = i;h = i + 8 | 0;f = c[b + 4 >> 2] | 0;c[g >> 2] = c[b >> 2];e = g + 4 | 0;c[e >> 2] = f;if ((a[8264] | 0) == 0 ? Vl(8264) | 0 : 0) {
        c[2231] = 2;c[2232] = 10;c[2233] = 8828;c[2234] = 1220;c[2235] = 0;c[2237] = 0;c[2238] = 0;c[2239] = 0;Ha(58, 8924, o | 0) | 0;
      }if (c[2231] | 0) {
        f = c[2238] | 0;j = c[2239] | 0;b = d | 4;c[h >> 2] = b;if (f >>> 0 < j >>> 0) {
          h = c[e >> 2] | 0;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = h;c[f + 8 >> 2] = b;h = (c[2238] | 0) + 12 | 0;c[2238] = h;j = c[2237] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
        }
      } else {
        c[2236] = 0;c[2231] = 2;c[2232] = 10;c[2233] = 8828;c[2234] = 1220;c[2235] = 0;c[2237] = 0;c[2238] = 0;c[2239] = 0;c[h >> 2] = d | 4;
      }Lg(8948, g, h);h = c[2238] | 0;j = c[2237] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
    }function Lg(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0,
          n = 0;k = a + 4 | 0;l = c[a >> 2] | 0;m = (c[k >> 2] | 0) - l | 0;h = (m | 0) / 12 | 0;e = h + 1 | 0;if (e >>> 0 > 357913941) Ll(a);i = a + 8 | 0;g = ((c[i >> 2] | 0) - l | 0) / 12 | 0;f = g << 1;f = g >>> 0 < 178956970 ? f >>> 0 < e >>> 0 ? e : f : 357913941;do if (f) {
        if (f >>> 0 > 357913941) Va();else {
          j = Sl(f * 12 | 0) | 0;break;
        }
      } else j = 0; while (0);g = j + (h * 12 | 0) | 0;n = c[b + 4 >> 2] | 0;e = c[d >> 2] | 0;c[g >> 2] = c[b >> 2];c[j + (h * 12 | 0) + 4 >> 2] = n;c[j + (h * 12 | 0) + 8 >> 2] = e;e = g + (((m | 0) / -12 | 0) * 12 | 0) | 0;if ((m | 0) > 0) cm(e | 0, l | 0, m | 0) | 0;c[a >> 2] = e;c[k >> 2] = g + 12;c[i >> 2] = j + (f * 12 | 0);if (!l) return;Ul(l);return;
    }function Mg(b, d, e) {
      b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0;h = l;l = l + 16 | 0;g = h;if ((a[8272] | 0) == 0 ? Vl(8272) | 0 : 0) {
        c[2240] = 2;c[2241] = 9;c[2242] = 8828;c[2243] = 1224;c[2244] = 1;c[2246] = 0;c[2247] = 0;c[2248] = 0;Ha(57, 8960, o | 0) | 0;
      }i = c[2246] | 0;f = c[i + (b * 12 | 0) >> 2] | 0;i = c[i + (b * 12 | 0) + 4 >> 2] | 0;b = d + (i >> 1) | 0;if (i & 1) f = c[(c[b >> 2] | 0) + f >> 2] | 0;c[g >> 2] = e;tb[f & 31](b, g);f = c[g >> 2] | 0;if (!f) {
        l = h;return;
      }eb(f | 0);l = h;return;
    }function Ng(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - d | 0) >>> 0) / 12 | 0) * 12 | 0);Ul(d);return;
    }function Og(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0;i = l;l = l + 16 | 0;g = i;h = i + 8 | 0;f = c[b + 4 >> 2] | 0;c[g >> 2] = c[b >> 2];e = g + 4 | 0;c[e >> 2] = f;if ((a[8272] | 0) == 0 ? Vl(8272) | 0 : 0) {
        c[2240] = 2;c[2241] = 9;c[2242] = 8828;c[2243] = 1224;c[2244] = 1;c[2246] = 0;c[2247] = 0;c[2248] = 0;Ha(57, 8960, o | 0) | 0;
      }if (c[2240] | 0) {
        f = c[2247] | 0;j = c[2248] | 0;b = d | 4;c[h >> 2] = b;if (f >>> 0 < j >>> 0) {
          h = c[e >> 2] | 0;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = h;c[f + 8 >> 2] = b;h = (c[2247] | 0) + 12 | 0;c[2247] = h;j = c[2246] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
        }
      } else {
        c[2245] = 0;c[2240] = 2;c[2241] = 9;c[2242] = 8828;c[2243] = 1224;c[2244] = 1;c[2246] = 0;c[2247] = 0;c[2248] = 0;c[h >> 2] = d | 4;
      }Pg(8984, g, h);h = c[2247] | 0;j = c[2246] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
    }function Pg(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0,
          n = 0;k = a + 4 | 0;l = c[a >> 2] | 0;m = (c[k >> 2] | 0) - l | 0;h = (m | 0) / 12 | 0;e = h + 1 | 0;if (e >>> 0 > 357913941) Ll(a);i = a + 8 | 0;g = ((c[i >> 2] | 0) - l | 0) / 12 | 0;f = g << 1;f = g >>> 0 < 178956970 ? f >>> 0 < e >>> 0 ? e : f : 357913941;do if (f) {
        if (f >>> 0 > 357913941) Va();else {
          j = Sl(f * 12 | 0) | 0;break;
        }
      } else j = 0; while (0);g = j + (h * 12 | 0) | 0;n = c[b + 4 >> 2] | 0;e = c[d >> 2] | 0;c[g >> 2] = c[b >> 2];c[j + (h * 12 | 0) + 4 >> 2] = n;c[j + (h * 12 | 0) + 8 >> 2] = e;e = g + (((m | 0) / -12 | 0) * 12 | 0) | 0;if ((m | 0) > 0) cm(e | 0, l | 0, m | 0) | 0;c[a >> 2] = e;c[k >> 2] = g + 12;c[i >> 2] = j + (f * 12 | 0);if (!l) return;Ul(l);return;
    }function Qg(b, d, e) {
      b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0;if ((a[8280] | 0) == 0 ? Vl(8280) | 0 : 0) {
        c[2249] = 2;c[2250] = 7;c[2251] = 8828;c[2252] = 1240;c[2253] = 1;c[2255] = 0;c[2256] = 0;c[2257] = 0;Ha(56, 8996, o | 0) | 0;
      }g = c[2255] | 0;f = c[g + (b * 12 | 0) >> 2] | 0;g = c[g + (b * 12 | 0) + 4 >> 2] | 0;b = d + (g >> 1) | 0;if (!(g & 1)) {
        g = f;g = Bb[g & 15](b, e) | 0;return g | 0;
      } else {
        g = c[(c[b >> 2] | 0) + f >> 2] | 0;g = Bb[g & 15](b, e) | 0;return g | 0;
      }return 0;
    }function Rg(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - d | 0) >>> 0) / 12 | 0) * 12 | 0);Ul(d);return;
    }function Sg(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0;i = l;l = l + 16 | 0;g = i;h = i + 8 | 0;f = c[b + 4 >> 2] | 0;c[g >> 2] = c[b >> 2];e = g + 4 | 0;c[e >> 2] = f;if ((a[8280] | 0) == 0 ? Vl(8280) | 0 : 0) {
        c[2249] = 2;c[2250] = 7;c[2251] = 8828;c[2252] = 1240;c[2253] = 1;c[2255] = 0;c[2256] = 0;c[2257] = 0;Ha(56, 8996, o | 0) | 0;
      }if (c[2249] | 0) {
        f = c[2256] | 0;j = c[2257] | 0;b = d | 4;c[h >> 2] = b;if (f >>> 0 < j >>> 0) {
          h = c[e >> 2] | 0;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = h;c[f + 8 >> 2] = b;h = (c[2256] | 0) + 12 | 0;c[2256] = h;j = c[2255] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
        }
      } else {
        c[2254] = 0;c[2249] = 2;c[2250] = 7;c[2251] = 8828;c[2252] = 1240;c[2253] = 1;c[2255] = 0;c[2256] = 0;c[2257] = 0;c[h >> 2] = d | 4;
      }Tg(9020, g, h);h = c[2256] | 0;j = c[2255] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
    }function Tg(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0,
          n = 0;k = a + 4 | 0;l = c[a >> 2] | 0;m = (c[k >> 2] | 0) - l | 0;h = (m | 0) / 12 | 0;e = h + 1 | 0;if (e >>> 0 > 357913941) Ll(a);i = a + 8 | 0;g = ((c[i >> 2] | 0) - l | 0) / 12 | 0;f = g << 1;f = g >>> 0 < 178956970 ? f >>> 0 < e >>> 0 ? e : f : 357913941;do if (f) {
        if (f >>> 0 > 357913941) Va();else {
          j = Sl(f * 12 | 0) | 0;break;
        }
      } else j = 0; while (0);g = j + (h * 12 | 0) | 0;n = c[b + 4 >> 2] | 0;e = c[d >> 2] | 0;c[g >> 2] = c[b >> 2];c[j + (h * 12 | 0) + 4 >> 2] = n;c[j + (h * 12 | 0) + 8 >> 2] = e;e = g + (((m | 0) / -12 | 0) * 12 | 0) | 0;if ((m | 0) > 0) cm(e | 0, l | 0, m | 0) | 0;c[a >> 2] = e;c[k >> 2] = g + 12;c[i >> 2] = j + (f * 12 | 0);if (!l) return;Ul(l);return;
    }function Ug(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0;if ((a[8288] | 0) == 0 ? Vl(8288) | 0 : 0) {
        c[2258] = 2;c[2259] = 9;c[2260] = 8828;c[2261] = 1256;c[2262] = 0;c[2264] = 0;c[2265] = 0;c[2266] = 0;Ha(55, 9032, o | 0) | 0;
      }f = c[2264] | 0;e = c[f + (b * 12 | 0) >> 2] | 0;f = c[f + (b * 12 | 0) + 4 >> 2] | 0;b = d + (f >> 1) | 0;if (!(f & 1)) {
        f = e;f = ub[f & 31](b) | 0;return f | 0;
      } else {
        f = c[(c[b >> 2] | 0) + e >> 2] | 0;f = ub[f & 31](b) | 0;return f | 0;
      }return 0;
    }function Vg(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - d | 0) >>> 0) / 12 | 0) * 12 | 0);Ul(d);return;
    }function Wg(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0;i = l;l = l + 16 | 0;g = i;h = i + 8 | 0;f = c[b + 4 >> 2] | 0;c[g >> 2] = c[b >> 2];e = g + 4 | 0;c[e >> 2] = f;if ((a[8288] | 0) == 0 ? Vl(8288) | 0 : 0) {
        c[2258] = 2;c[2259] = 9;c[2260] = 8828;c[2261] = 1256;c[2262] = 0;c[2264] = 0;c[2265] = 0;c[2266] = 0;Ha(55, 9032, o | 0) | 0;
      }if (c[2258] | 0) {
        f = c[2265] | 0;j = c[2266] | 0;b = d | 4;c[h >> 2] = b;if (f >>> 0 < j >>> 0) {
          h = c[e >> 2] | 0;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = h;c[f + 8 >> 2] = b;h = (c[2265] | 0) + 12 | 0;c[2265] = h;j = c[2264] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
        }
      } else {
        c[2263] = 0;c[2258] = 2;c[2259] = 9;c[2260] = 8828;c[2261] = 1256;c[2262] = 0;c[2264] = 0;c[2265] = 0;c[2266] = 0;c[h >> 2] = d | 4;
      }Xg(9056, g, h);h = c[2265] | 0;j = c[2264] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
    }function Xg(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0,
          n = 0;k = a + 4 | 0;l = c[a >> 2] | 0;m = (c[k >> 2] | 0) - l | 0;h = (m | 0) / 12 | 0;e = h + 1 | 0;if (e >>> 0 > 357913941) Ll(a);i = a + 8 | 0;g = ((c[i >> 2] | 0) - l | 0) / 12 | 0;f = g << 1;f = g >>> 0 < 178956970 ? f >>> 0 < e >>> 0 ? e : f : 357913941;do if (f) {
        if (f >>> 0 > 357913941) Va();else {
          j = Sl(f * 12 | 0) | 0;break;
        }
      } else j = 0; while (0);g = j + (h * 12 | 0) | 0;n = c[b + 4 >> 2] | 0;e = c[d >> 2] | 0;c[g >> 2] = c[b >> 2];c[j + (h * 12 | 0) + 4 >> 2] = n;c[j + (h * 12 | 0) + 8 >> 2] = e;e = g + (((m | 0) / -12 | 0) * 12 | 0) | 0;if ((m | 0) > 0) cm(e | 0, l | 0, m | 0) | 0;c[a >> 2] = e;c[k >> 2] = g + 12;c[i >> 2] = j + (f * 12 | 0);if (!l) return;Ul(l);return;
    }function Yg(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0;if ((a[8296] | 0) == 0 ? Vl(8296) | 0 : 0) {
        c[2267] = 2;c[2268] = 8;c[2269] = 8828;c[2270] = 1260;c[2271] = 0;c[2273] = 0;c[2274] = 0;c[2275] = 0;Ha(54, 9068, o | 0) | 0;
      }f = c[2273] | 0;e = c[f + (b * 12 | 0) >> 2] | 0;f = c[f + (b * 12 | 0) + 4 >> 2] | 0;b = d + (f >> 1) | 0;if (!(f & 1)) {
        f = e;f = ub[f & 31](b) | 0;return f | 0;
      } else {
        f = c[(c[b >> 2] | 0) + e >> 2] | 0;f = ub[f & 31](b) | 0;return f | 0;
      }return 0;
    }function Zg(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - d | 0) >>> 0) / 12 | 0) * 12 | 0);Ul(d);return;
    }function _g(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0;i = l;l = l + 16 | 0;g = i;h = i + 8 | 0;f = c[b + 4 >> 2] | 0;c[g >> 2] = c[b >> 2];e = g + 4 | 0;c[e >> 2] = f;if ((a[8296] | 0) == 0 ? Vl(8296) | 0 : 0) {
        c[2267] = 2;c[2268] = 8;c[2269] = 8828;c[2270] = 1260;c[2271] = 0;c[2273] = 0;c[2274] = 0;c[2275] = 0;Ha(54, 9068, o | 0) | 0;
      }if (c[2267] | 0) {
        f = c[2274] | 0;j = c[2275] | 0;b = d | 4;c[h >> 2] = b;if (f >>> 0 < j >>> 0) {
          h = c[e >> 2] | 0;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = h;c[f + 8 >> 2] = b;h = (c[2274] | 0) + 12 | 0;c[2274] = h;j = c[2273] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
        }
      } else {
        c[2272] = 0;c[2267] = 2;c[2268] = 8;c[2269] = 8828;c[2270] = 1260;c[2271] = 0;c[2273] = 0;c[2274] = 0;c[2275] = 0;c[h >> 2] = d | 4;
      }$g(9092, g, h);h = c[2274] | 0;j = c[2273] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
    }function $g(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0,
          n = 0;k = a + 4 | 0;l = c[a >> 2] | 0;m = (c[k >> 2] | 0) - l | 0;h = (m | 0) / 12 | 0;e = h + 1 | 0;if (e >>> 0 > 357913941) Ll(a);i = a + 8 | 0;g = ((c[i >> 2] | 0) - l | 0) / 12 | 0;f = g << 1;f = g >>> 0 < 178956970 ? f >>> 0 < e >>> 0 ? e : f : 357913941;do if (f) {
        if (f >>> 0 > 357913941) Va();else {
          j = Sl(f * 12 | 0) | 0;break;
        }
      } else j = 0; while (0);g = j + (h * 12 | 0) | 0;n = c[b + 4 >> 2] | 0;e = c[d >> 2] | 0;c[g >> 2] = c[b >> 2];c[j + (h * 12 | 0) + 4 >> 2] = n;c[j + (h * 12 | 0) + 8 >> 2] = e;e = g + (((m | 0) / -12 | 0) * 12 | 0) | 0;if ((m | 0) > 0) cm(e | 0, l | 0, m | 0) | 0;c[a >> 2] = e;c[k >> 2] = g + 12;c[i >> 2] = j + (f * 12 | 0);if (!l) return;Ul(l);return;
    }function ah(b, d, e) {
      b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0;if ((a[8304] | 0) == 0 ? Vl(8304) | 0 : 0) {
        c[2276] = 2;c[2277] = 8;c[2278] = 8828;c[2279] = 1264;c[2280] = 1;c[2282] = 0;c[2283] = 0;c[2284] = 0;Ha(53, 9104, o | 0) | 0;
      }g = c[2282] | 0;f = c[g + (b * 12 | 0) >> 2] | 0;g = c[g + (b * 12 | 0) + 4 >> 2] | 0;b = d + (g >> 1) | 0;if (!(g & 1)) {
        g = f;tb[g & 31](b, e);return;
      } else {
        g = c[(c[b >> 2] | 0) + f >> 2] | 0;tb[g & 31](b, e);return;
      }
    }function bh(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - d | 0) >>> 0) / 12 | 0) * 12 | 0);Ul(d);return;
    }function ch(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0;i = l;l = l + 16 | 0;g = i;h = i + 8 | 0;f = c[b + 4 >> 2] | 0;c[g >> 2] = c[b >> 2];e = g + 4 | 0;c[e >> 2] = f;if ((a[8304] | 0) == 0 ? Vl(8304) | 0 : 0) {
        c[2276] = 2;c[2277] = 8;c[2278] = 8828;c[2279] = 1264;c[2280] = 1;c[2282] = 0;c[2283] = 0;c[2284] = 0;Ha(53, 9104, o | 0) | 0;
      }if (c[2276] | 0) {
        f = c[2283] | 0;j = c[2284] | 0;b = d | 4;c[h >> 2] = b;if (f >>> 0 < j >>> 0) {
          h = c[e >> 2] | 0;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = h;c[f + 8 >> 2] = b;h = (c[2283] | 0) + 12 | 0;c[2283] = h;j = c[2282] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
        }
      } else {
        c[2281] = 0;c[2276] = 2;c[2277] = 8;c[2278] = 8828;c[2279] = 1264;c[2280] = 1;c[2282] = 0;c[2283] = 0;c[2284] = 0;c[h >> 2] = d | 4;
      }dh(9128, g, h);h = c[2283] | 0;j = c[2282] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
    }function dh(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0,
          n = 0;k = a + 4 | 0;l = c[a >> 2] | 0;m = (c[k >> 2] | 0) - l | 0;h = (m | 0) / 12 | 0;e = h + 1 | 0;if (e >>> 0 > 357913941) Ll(a);i = a + 8 | 0;g = ((c[i >> 2] | 0) - l | 0) / 12 | 0;f = g << 1;f = g >>> 0 < 178956970 ? f >>> 0 < e >>> 0 ? e : f : 357913941;do if (f) {
        if (f >>> 0 > 357913941) Va();else {
          j = Sl(f * 12 | 0) | 0;break;
        }
      } else j = 0; while (0);g = j + (h * 12 | 0) | 0;n = c[b + 4 >> 2] | 0;e = c[d >> 2] | 0;c[g >> 2] = c[b >> 2];c[j + (h * 12 | 0) + 4 >> 2] = n;c[j + (h * 12 | 0) + 8 >> 2] = e;e = g + (((m | 0) / -12 | 0) * 12 | 0) | 0;if ((m | 0) > 0) cm(e | 0, l | 0, m | 0) | 0;c[a >> 2] = e;c[k >> 2] = g + 12;c[i >> 2] = j + (f * 12 | 0);if (!l) return;Ul(l);return;
    }function eh(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0;if ((a[8312] | 0) == 0 ? Vl(8312) | 0 : 0) {
        c[2285] = 2;c[2286] = 7;c[2287] = 8828;c[2288] = 1272;c[2289] = 2;c[2291] = 0;c[2292] = 0;c[2293] = 0;Ha(52, 9140, o | 0) | 0;
      }h = c[2291] | 0;g = c[h + (b * 12 | 0) >> 2] | 0;h = c[h + (b * 12 | 0) + 4 >> 2] | 0;b = d + (h >> 1) | 0;if (!(h & 1)) {
        h = g;Jb[h & 15](b, e, f);return;
      } else {
        h = c[(c[b >> 2] | 0) + g >> 2] | 0;Jb[h & 15](b, e, f);return;
      }
    }function fh(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - d | 0) >>> 0) / 12 | 0) * 12 | 0);Ul(d);return;
    }function gh(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0;i = l;l = l + 16 | 0;g = i;h = i + 8 | 0;f = c[b + 4 >> 2] | 0;c[g >> 2] = c[b >> 2];e = g + 4 | 0;c[e >> 2] = f;if ((a[8312] | 0) == 0 ? Vl(8312) | 0 : 0) {
        c[2285] = 2;c[2286] = 7;c[2287] = 8828;c[2288] = 1272;c[2289] = 2;c[2291] = 0;c[2292] = 0;c[2293] = 0;Ha(52, 9140, o | 0) | 0;
      }if (c[2285] | 0) {
        f = c[2292] | 0;j = c[2293] | 0;b = d | 4;c[h >> 2] = b;if (f >>> 0 < j >>> 0) {
          h = c[e >> 2] | 0;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = h;c[f + 8 >> 2] = b;h = (c[2292] | 0) + 12 | 0;c[2292] = h;j = c[2291] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
        }
      } else {
        c[2290] = 0;c[2285] = 2;c[2286] = 7;c[2287] = 8828;c[2288] = 1272;c[2289] = 2;c[2291] = 0;c[2292] = 0;c[2293] = 0;c[h >> 2] = d | 4;
      }hh(9164, g, h);h = c[2292] | 0;j = c[2291] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
    }function hh(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0,
          n = 0;k = a + 4 | 0;l = c[a >> 2] | 0;m = (c[k >> 2] | 0) - l | 0;h = (m | 0) / 12 | 0;e = h + 1 | 0;if (e >>> 0 > 357913941) Ll(a);i = a + 8 | 0;g = ((c[i >> 2] | 0) - l | 0) / 12 | 0;f = g << 1;f = g >>> 0 < 178956970 ? f >>> 0 < e >>> 0 ? e : f : 357913941;do if (f) {
        if (f >>> 0 > 357913941) Va();else {
          j = Sl(f * 12 | 0) | 0;break;
        }
      } else j = 0; while (0);g = j + (h * 12 | 0) | 0;n = c[b + 4 >> 2] | 0;e = c[d >> 2] | 0;c[g >> 2] = c[b >> 2];c[j + (h * 12 | 0) + 4 >> 2] = n;c[j + (h * 12 | 0) + 8 >> 2] = e;e = g + (((m | 0) / -12 | 0) * 12 | 0) | 0;if ((m | 0) > 0) cm(e | 0, l | 0, m | 0) | 0;c[a >> 2] = e;c[k >> 2] = g + 12;c[i >> 2] = j + (f * 12 | 0);if (!l) return;Ul(l);return;
    }function ih(b, d, e) {
      b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0.0;if ((a[8320] | 0) == 0 ? Vl(8320) | 0 : 0) {
        c[2294] = 2;c[2295] = 1;c[2296] = 8828;c[2297] = 1284;c[2298] = 1;c[2300] = 0;c[2301] = 0;c[2302] = 0;Ha(51, 9176, o | 0) | 0;
      }g = c[2300] | 0;f = c[g + (b * 12 | 0) >> 2] | 0;g = c[g + (b * 12 | 0) + 4 >> 2] | 0;b = d + (g >> 1) | 0;if (!(g & 1)) {
        g = f;h = +Eb[g & 7](b, e);return +h;
      } else {
        g = c[(c[b >> 2] | 0) + f >> 2] | 0;h = +Eb[g & 7](b, e);return +h;
      }return 0.0;
    }function jh(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - d | 0) >>> 0) / 12 | 0) * 12 | 0);Ul(d);return;
    }function kh(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0;i = l;l = l + 16 | 0;g = i;h = i + 8 | 0;f = c[b + 4 >> 2] | 0;c[g >> 2] = c[b >> 2];e = g + 4 | 0;c[e >> 2] = f;if ((a[8320] | 0) == 0 ? Vl(8320) | 0 : 0) {
        c[2294] = 2;c[2295] = 1;c[2296] = 8828;c[2297] = 1284;c[2298] = 1;c[2300] = 0;c[2301] = 0;c[2302] = 0;Ha(51, 9176, o | 0) | 0;
      }if (c[2294] | 0) {
        f = c[2301] | 0;j = c[2302] | 0;b = d | 4;c[h >> 2] = b;if (f >>> 0 < j >>> 0) {
          h = c[e >> 2] | 0;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = h;c[f + 8 >> 2] = b;h = (c[2301] | 0) + 12 | 0;c[2301] = h;j = c[2300] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
        }
      } else {
        c[2299] = 0;c[2294] = 2;c[2295] = 1;c[2296] = 8828;c[2297] = 1284;c[2298] = 1;c[2300] = 0;c[2301] = 0;c[2302] = 0;c[h >> 2] = d | 4;
      }lh(9200, g, h);h = c[2301] | 0;j = c[2300] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
    }function lh(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0,
          n = 0;k = a + 4 | 0;l = c[a >> 2] | 0;m = (c[k >> 2] | 0) - l | 0;h = (m | 0) / 12 | 0;e = h + 1 | 0;if (e >>> 0 > 357913941) Ll(a);i = a + 8 | 0;g = ((c[i >> 2] | 0) - l | 0) / 12 | 0;f = g << 1;f = g >>> 0 < 178956970 ? f >>> 0 < e >>> 0 ? e : f : 357913941;do if (f) {
        if (f >>> 0 > 357913941) Va();else {
          j = Sl(f * 12 | 0) | 0;break;
        }
      } else j = 0; while (0);g = j + (h * 12 | 0) | 0;n = c[b + 4 >> 2] | 0;e = c[d >> 2] | 0;c[g >> 2] = c[b >> 2];c[j + (h * 12 | 0) + 4 >> 2] = n;c[j + (h * 12 | 0) + 8 >> 2] = e;e = g + (((m | 0) / -12 | 0) * 12 | 0) | 0;if ((m | 0) > 0) cm(e | 0, l | 0, m | 0) | 0;c[a >> 2] = e;c[k >> 2] = g + 12;c[i >> 2] = j + (f * 12 | 0);if (!l) return;Ul(l);return;
    }function mh(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0.0;if ((a[8328] | 0) == 0 ? Vl(8328) | 0 : 0) {
        c[2303] = 2;c[2304] = 5;c[2305] = 8828;c[2306] = 1292;c[2307] = 0;c[2309] = 0;c[2310] = 0;c[2311] = 0;Ha(50, 9212, o | 0) | 0;
      }f = c[2309] | 0;e = c[f + (b * 12 | 0) >> 2] | 0;f = c[f + (b * 12 | 0) + 4 >> 2] | 0;b = d + (f >> 1) | 0;if (!(f & 1)) {
        f = e;g = +zb[f & 15](b);return +g;
      } else {
        f = c[(c[b >> 2] | 0) + e >> 2] | 0;g = +zb[f & 15](b);return +g;
      }return 0.0;
    }function nh(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - d | 0) >>> 0) / 12 | 0) * 12 | 0);Ul(d);return;
    }function oh(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0;i = l;l = l + 16 | 0;g = i;h = i + 8 | 0;f = c[b + 4 >> 2] | 0;c[g >> 2] = c[b >> 2];e = g + 4 | 0;c[e >> 2] = f;if ((a[8328] | 0) == 0 ? Vl(8328) | 0 : 0) {
        c[2303] = 2;c[2304] = 5;c[2305] = 8828;c[2306] = 1292;c[2307] = 0;c[2309] = 0;c[2310] = 0;c[2311] = 0;Ha(50, 9212, o | 0) | 0;
      }if (c[2303] | 0) {
        f = c[2310] | 0;j = c[2311] | 0;b = d | 4;c[h >> 2] = b;if (f >>> 0 < j >>> 0) {
          h = c[e >> 2] | 0;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = h;c[f + 8 >> 2] = b;h = (c[2310] | 0) + 12 | 0;c[2310] = h;j = c[2309] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
        }
      } else {
        c[2308] = 0;c[2303] = 2;c[2304] = 5;c[2305] = 8828;c[2306] = 1292;c[2307] = 0;c[2309] = 0;c[2310] = 0;c[2311] = 0;c[h >> 2] = d | 4;
      }ph(9236, g, h);h = c[2310] | 0;j = c[2309] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
    }function ph(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0,
          n = 0;k = a + 4 | 0;l = c[a >> 2] | 0;m = (c[k >> 2] | 0) - l | 0;h = (m | 0) / 12 | 0;e = h + 1 | 0;if (e >>> 0 > 357913941) Ll(a);i = a + 8 | 0;g = ((c[i >> 2] | 0) - l | 0) / 12 | 0;f = g << 1;f = g >>> 0 < 178956970 ? f >>> 0 < e >>> 0 ? e : f : 357913941;do if (f) {
        if (f >>> 0 > 357913941) Va();else {
          j = Sl(f * 12 | 0) | 0;break;
        }
      } else j = 0; while (0);g = j + (h * 12 | 0) | 0;n = c[b + 4 >> 2] | 0;e = c[d >> 2] | 0;c[g >> 2] = c[b >> 2];c[j + (h * 12 | 0) + 4 >> 2] = n;c[j + (h * 12 | 0) + 8 >> 2] = e;e = g + (((m | 0) / -12 | 0) * 12 | 0) | 0;if ((m | 0) > 0) cm(e | 0, l | 0, m | 0) | 0;c[a >> 2] = e;c[k >> 2] = g + 12;c[i >> 2] = j + (f * 12 | 0);if (!l) return;Ul(l);return;
    }function qh(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;g = l;l = l + 16 | 0;f = g;if ((a[8336] | 0) == 0 ? Vl(8336) | 0 : 0) {
        c[2312] = 2;c[2313] = 7;c[2314] = 8828;c[2315] = 1296;c[2316] = 0;c[2318] = 0;c[2319] = 0;c[2320] = 0;Ha(49, 9248, o | 0) | 0;
      }h = c[2318] | 0;e = c[h + (b * 12 | 0) >> 2] | 0;h = c[h + (b * 12 | 0) + 4 >> 2] | 0;b = d + (h >> 1) | 0;if (!(h & 1)) {
        h = e;tb[h & 31](f, b);h = uh(f) | 0;l = g;return h | 0;
      } else {
        h = c[(c[b >> 2] | 0) + e >> 2] | 0;tb[h & 31](f, b);h = uh(f) | 0;l = g;return h | 0;
      }return 0;
    }function rh(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - d | 0) >>> 0) / 12 | 0) * 12 | 0);Ul(d);return;
    }function sh(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0;i = l;l = l + 16 | 0;g = i;h = i + 8 | 0;f = c[b + 4 >> 2] | 0;c[g >> 2] = c[b >> 2];e = g + 4 | 0;c[e >> 2] = f;if ((a[8336] | 0) == 0 ? Vl(8336) | 0 : 0) {
        c[2312] = 2;c[2313] = 7;c[2314] = 8828;c[2315] = 1296;c[2316] = 0;c[2318] = 0;c[2319] = 0;c[2320] = 0;Ha(49, 9248, o | 0) | 0;
      }if (c[2312] | 0) {
        f = c[2319] | 0;j = c[2320] | 0;b = d | 4;c[h >> 2] = b;if (f >>> 0 < j >>> 0) {
          h = c[e >> 2] | 0;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = h;c[f + 8 >> 2] = b;h = (c[2319] | 0) + 12 | 0;c[2319] = h;j = c[2318] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
        }
      } else {
        c[2317] = 0;c[2312] = 2;c[2313] = 7;c[2314] = 8828;c[2315] = 1296;c[2316] = 0;c[2318] = 0;c[2319] = 0;c[2320] = 0;c[h >> 2] = d | 4;
      }th(9272, g, h);h = c[2319] | 0;j = c[2318] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
    }function th(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0,
          n = 0;k = a + 4 | 0;l = c[a >> 2] | 0;m = (c[k >> 2] | 0) - l | 0;h = (m | 0) / 12 | 0;e = h + 1 | 0;if (e >>> 0 > 357913941) Ll(a);i = a + 8 | 0;g = ((c[i >> 2] | 0) - l | 0) / 12 | 0;f = g << 1;f = g >>> 0 < 178956970 ? f >>> 0 < e >>> 0 ? e : f : 357913941;do if (f) {
        if (f >>> 0 > 357913941) Va();else {
          j = Sl(f * 12 | 0) | 0;break;
        }
      } else j = 0; while (0);g = j + (h * 12 | 0) | 0;n = c[b + 4 >> 2] | 0;e = c[d >> 2] | 0;c[g >> 2] = c[b >> 2];c[j + (h * 12 | 0) + 4 >> 2] = n;c[j + (h * 12 | 0) + 8 >> 2] = e;e = g + (((m | 0) / -12 | 0) * 12 | 0) | 0;if ((m | 0) > 0) cm(e | 0, l | 0, m | 0) | 0;c[a >> 2] = e;c[k >> 2] = g + 12;c[i >> 2] = j + (f * 12 | 0);if (!l) return;Ul(l);return;
    }function uh(b) {
      b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;f = l;l = l + 16 | 0;d = f;if ((a[8344] | 0) == 0 ? Vl(8344) | 0 : 0) {
        c[2325] = 0;c[2326] = 0;c[2327] = 0;c[2328] = 9308;c[2330] = 0;a[9324] = 0;a[9325] = 0;Ha(20, 9284, o | 0) | 0;
      }e = c[2330] | 0;if (!e) {
        d = Mj(8) | 0;e = d;g = Sl(16) | 0;c[g >> 2] = c[b >> 2];c[g + 4 >> 2] = c[b + 4 >> 2];c[g + 8 >> 2] = c[b + 8 >> 2];c[g + 12 >> 2] = c[b + 12 >> 2];h = e + 4 | 0;c[h >> 2] = g;b = Sl(8) | 0;h = c[h >> 2] | 0;c[b >> 2] = h;g = Sl(16) | 0;c[g + 4 >> 2] = 0;c[g + 8 >> 2] = 0;c[g >> 2] = 1308;c[g + 12 >> 2] = h;c[b + 4 >> 2] = g;c[d >> 2] = b;l = f;return e | 0;
      } else {
        c[d >> 2] = e;h = d + 4 | 0;c[h >> 2] = d;g = d + 8 | 0;c[g >> 2] = 0;c[g >> 2] = vh(e, b, b + 8 | 0) | 0;h = c[(c[h >> 2] | 0) + 8 >> 2] | 0;l = f;return h | 0;
      }return 0;
    }function vh(b, d, e) {
      b = b | 0;d = d | 0;e = e | 0;var f = 0.0,
          g = 0,
          i = 0,
          j = 0;j = l;l = l + 16 | 0;i = j;Ak(i);g = c[b >> 2] | 0;b = c[d >> 2] | 0;f = +h[e >> 3];if ((a[8352] | 0) == 0 ? Vl(8352) | 0 : 0) {
        c[2332] = 1328;c[2333] = 2;c[2334] = bb(1328, 3) | 0;
      }g = Ua(0, c[2334] | 0, g | 0, b | 0, +f) | 0;Bk(i);l = j;return g | 0;
    }function wh(a) {
      a = a | 0;Ml(a);Ul(a);return;
    }function xh(a) {
      a = a | 0;a = c[a + 12 >> 2] | 0;if (!a) return;Ul(a);return;
    }function yh(a) {
      a = a | 0;Ul(a);return;
    }function zh(b, d, e) {
      b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0;h = l;l = l + 16 | 0;g = h;if ((a[8360] | 0) == 0 ? Vl(8360) | 0 : 0) {
        c[2335] = 2;c[2336] = 6;c[2337] = 8828;c[2338] = 1340;c[2339] = 1;c[2341] = 0;c[2342] = 0;c[2343] = 0;Ha(48, 9340, o | 0) | 0;
      }i = c[2341] | 0;f = c[i + (b * 12 | 0) >> 2] | 0;i = c[i + (b * 12 | 0) + 4 >> 2] | 0;b = d + (i >> 1) | 0;if (!(i & 1)) {
        i = f;Jb[i & 15](g, b, e);i = uh(g) | 0;l = h;return i | 0;
      } else {
        i = c[(c[b >> 2] | 0) + f >> 2] | 0;Jb[i & 15](g, b, e);i = uh(g) | 0;l = h;return i | 0;
      }return 0;
    }function Ah(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - d | 0) >>> 0) / 12 | 0) * 12 | 0);Ul(d);return;
    }function Bh(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0;i = l;l = l + 16 | 0;g = i;h = i + 8 | 0;f = c[b + 4 >> 2] | 0;c[g >> 2] = c[b >> 2];e = g + 4 | 0;c[e >> 2] = f;if ((a[8360] | 0) == 0 ? Vl(8360) | 0 : 0) {
        c[2335] = 2;c[2336] = 6;c[2337] = 8828;c[2338] = 1340;c[2339] = 1;c[2341] = 0;c[2342] = 0;c[2343] = 0;Ha(48, 9340, o | 0) | 0;
      }if (c[2335] | 0) {
        f = c[2342] | 0;j = c[2343] | 0;b = d | 4;c[h >> 2] = b;if (f >>> 0 < j >>> 0) {
          h = c[e >> 2] | 0;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = h;c[f + 8 >> 2] = b;h = (c[2342] | 0) + 12 | 0;c[2342] = h;j = c[2341] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
        }
      } else {
        c[2340] = 0;c[2335] = 2;c[2336] = 6;c[2337] = 8828;c[2338] = 1340;c[2339] = 1;c[2341] = 0;c[2342] = 0;c[2343] = 0;c[h >> 2] = d | 4;
      }Ch(9364, g, h);h = c[2342] | 0;j = c[2341] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
    }function Ch(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0,
          n = 0;k = a + 4 | 0;l = c[a >> 2] | 0;m = (c[k >> 2] | 0) - l | 0;h = (m | 0) / 12 | 0;e = h + 1 | 0;if (e >>> 0 > 357913941) Ll(a);i = a + 8 | 0;g = ((c[i >> 2] | 0) - l | 0) / 12 | 0;f = g << 1;f = g >>> 0 < 178956970 ? f >>> 0 < e >>> 0 ? e : f : 357913941;do if (f) {
        if (f >>> 0 > 357913941) Va();else {
          j = Sl(f * 12 | 0) | 0;break;
        }
      } else j = 0; while (0);g = j + (h * 12 | 0) | 0;n = c[b + 4 >> 2] | 0;e = c[d >> 2] | 0;c[g >> 2] = c[b >> 2];c[j + (h * 12 | 0) + 4 >> 2] = n;c[j + (h * 12 | 0) + 8 >> 2] = e;e = g + (((m | 0) / -12 | 0) * 12 | 0) | 0;if ((m | 0) > 0) cm(e | 0, l | 0, m | 0) | 0;c[a >> 2] = e;c[k >> 2] = g + 12;c[i >> 2] = j + (f * 12 | 0);if (!l) return;Ul(l);return;
    }function Dh(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0;if ((a[8368] | 0) == 0 ? Vl(8368) | 0 : 0) {
        c[2344] = 2;c[2345] = 6;c[2346] = 8828;c[2347] = 1348;c[2348] = 0;c[2350] = 0;c[2351] = 0;c[2352] = 0;Ha(47, 9376, o | 0) | 0;
      }f = c[2350] | 0;e = c[f + (b * 12 | 0) >> 2] | 0;f = c[f + (b * 12 | 0) + 4 >> 2] | 0;b = d + (f >> 1) | 0;if (!(f & 1)) {
        f = e;f = ub[f & 31](b) | 0;return f | 0;
      } else {
        f = c[(c[b >> 2] | 0) + e >> 2] | 0;f = ub[f & 31](b) | 0;return f | 0;
      }return 0;
    }function Eh(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - d | 0) >>> 0) / 12 | 0) * 12 | 0);Ul(d);return;
    }function Fh(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0;i = l;l = l + 16 | 0;g = i;h = i + 8 | 0;f = c[b + 4 >> 2] | 0;c[g >> 2] = c[b >> 2];e = g + 4 | 0;c[e >> 2] = f;if ((a[8368] | 0) == 0 ? Vl(8368) | 0 : 0) {
        c[2344] = 2;c[2345] = 6;c[2346] = 8828;c[2347] = 1348;c[2348] = 0;c[2350] = 0;c[2351] = 0;c[2352] = 0;Ha(47, 9376, o | 0) | 0;
      }if (c[2344] | 0) {
        f = c[2351] | 0;j = c[2352] | 0;b = d | 4;c[h >> 2] = b;if (f >>> 0 < j >>> 0) {
          h = c[e >> 2] | 0;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = h;c[f + 8 >> 2] = b;h = (c[2351] | 0) + 12 | 0;c[2351] = h;j = c[2350] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
        }
      } else {
        c[2349] = 0;c[2344] = 2;c[2345] = 6;c[2346] = 8828;c[2347] = 1348;c[2348] = 0;c[2350] = 0;c[2351] = 0;c[2352] = 0;c[h >> 2] = d | 4;
      }Gh(9400, g, h);h = c[2351] | 0;j = c[2350] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
    }function Gh(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0,
          n = 0;k = a + 4 | 0;l = c[a >> 2] | 0;m = (c[k >> 2] | 0) - l | 0;h = (m | 0) / 12 | 0;e = h + 1 | 0;if (e >>> 0 > 357913941) Ll(a);i = a + 8 | 0;g = ((c[i >> 2] | 0) - l | 0) / 12 | 0;f = g << 1;f = g >>> 0 < 178956970 ? f >>> 0 < e >>> 0 ? e : f : 357913941;do if (f) {
        if (f >>> 0 > 357913941) Va();else {
          j = Sl(f * 12 | 0) | 0;break;
        }
      } else j = 0; while (0);g = j + (h * 12 | 0) | 0;n = c[b + 4 >> 2] | 0;e = c[d >> 2] | 0;c[g >> 2] = c[b >> 2];c[j + (h * 12 | 0) + 4 >> 2] = n;c[j + (h * 12 | 0) + 8 >> 2] = e;e = g + (((m | 0) / -12 | 0) * 12 | 0) | 0;if ((m | 0) > 0) cm(e | 0, l | 0, m | 0) | 0;c[a >> 2] = e;c[k >> 2] = g + 12;c[i >> 2] = j + (f * 12 | 0);if (!l) return;Ul(l);return;
    }function Hh(b, d, e) {
      b = b | 0;d = d | 0;e = +e;var f = 0,
          g = 0;if ((a[8376] | 0) == 0 ? Vl(8376) | 0 : 0) {
        c[2353] = 2;c[2354] = 9;c[2355] = 8828;c[2356] = 1352;c[2357] = 1;c[2359] = 0;c[2360] = 0;c[2361] = 0;Ha(46, 9412, o | 0) | 0;
      }g = c[2359] | 0;f = c[g + (b * 12 | 0) >> 2] | 0;g = c[g + (b * 12 | 0) + 4 >> 2] | 0;b = d + (g >> 1) | 0;if (!(g & 1)) {
        g = f;qb[g & 31](b, e);return;
      } else {
        g = c[(c[b >> 2] | 0) + f >> 2] | 0;qb[g & 31](b, e);return;
      }
    }function Ih(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - d | 0) >>> 0) / 12 | 0) * 12 | 0);Ul(d);return;
    }function Jh(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0;i = l;l = l + 16 | 0;g = i;h = i + 8 | 0;f = c[b + 4 >> 2] | 0;c[g >> 2] = c[b >> 2];e = g + 4 | 0;c[e >> 2] = f;if ((a[8376] | 0) == 0 ? Vl(8376) | 0 : 0) {
        c[2353] = 2;c[2354] = 9;c[2355] = 8828;c[2356] = 1352;c[2357] = 1;c[2359] = 0;c[2360] = 0;c[2361] = 0;Ha(46, 9412, o | 0) | 0;
      }if (c[2353] | 0) {
        f = c[2360] | 0;j = c[2361] | 0;b = d | 4;c[h >> 2] = b;if (f >>> 0 < j >>> 0) {
          h = c[e >> 2] | 0;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = h;c[f + 8 >> 2] = b;h = (c[2360] | 0) + 12 | 0;c[2360] = h;j = c[2359] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
        }
      } else {
        c[2358] = 0;c[2353] = 2;c[2354] = 9;c[2355] = 8828;c[2356] = 1352;c[2357] = 1;c[2359] = 0;c[2360] = 0;c[2361] = 0;c[h >> 2] = d | 4;
      }Kh(9436, g, h);h = c[2360] | 0;j = c[2359] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
    }function Kh(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0,
          n = 0;k = a + 4 | 0;l = c[a >> 2] | 0;m = (c[k >> 2] | 0) - l | 0;h = (m | 0) / 12 | 0;e = h + 1 | 0;if (e >>> 0 > 357913941) Ll(a);i = a + 8 | 0;g = ((c[i >> 2] | 0) - l | 0) / 12 | 0;f = g << 1;f = g >>> 0 < 178956970 ? f >>> 0 < e >>> 0 ? e : f : 357913941;do if (f) {
        if (f >>> 0 > 357913941) Va();else {
          j = Sl(f * 12 | 0) | 0;break;
        }
      } else j = 0; while (0);g = j + (h * 12 | 0) | 0;n = c[b + 4 >> 2] | 0;e = c[d >> 2] | 0;c[g >> 2] = c[b >> 2];c[j + (h * 12 | 0) + 4 >> 2] = n;c[j + (h * 12 | 0) + 8 >> 2] = e;e = g + (((m | 0) / -12 | 0) * 12 | 0) | 0;if ((m | 0) > 0) cm(e | 0, l | 0, m | 0) | 0;c[a >> 2] = e;c[k >> 2] = g + 12;c[i >> 2] = j + (f * 12 | 0);if (!l) return;Ul(l);return;
    }function Lh(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = +f;var g = 0,
          h = 0;if ((a[8384] | 0) == 0 ? Vl(8384) | 0 : 0) {
        c[2362] = 2;c[2363] = 1;c[2364] = 8828;c[2365] = 1360;c[2366] = 2;c[2368] = 0;c[2369] = 0;c[2370] = 0;Ha(45, 9448, o | 0) | 0;
      }h = c[2368] | 0;g = c[h + (b * 12 | 0) >> 2] | 0;h = c[h + (b * 12 | 0) + 4 >> 2] | 0;b = d + (h >> 1) | 0;if (!(h & 1)) {
        h = g;Lb[h & 15](b, e, f);return;
      } else {
        h = c[(c[b >> 2] | 0) + g >> 2] | 0;Lb[h & 15](b, e, f);return;
      }
    }function Mh(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - d | 0) >>> 0) / 12 | 0) * 12 | 0);Ul(d);return;
    }function Nh(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0;i = l;l = l + 16 | 0;g = i;h = i + 8 | 0;f = c[b + 4 >> 2] | 0;c[g >> 2] = c[b >> 2];e = g + 4 | 0;c[e >> 2] = f;if ((a[8384] | 0) == 0 ? Vl(8384) | 0 : 0) {
        c[2362] = 2;c[2363] = 1;c[2364] = 8828;c[2365] = 1360;c[2366] = 2;c[2368] = 0;c[2369] = 0;c[2370] = 0;Ha(45, 9448, o | 0) | 0;
      }if (c[2362] | 0) {
        f = c[2369] | 0;j = c[2370] | 0;b = d | 4;c[h >> 2] = b;if (f >>> 0 < j >>> 0) {
          h = c[e >> 2] | 0;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = h;c[f + 8 >> 2] = b;h = (c[2369] | 0) + 12 | 0;c[2369] = h;j = c[2368] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
        }
      } else {
        c[2367] = 0;c[2362] = 2;c[2363] = 1;c[2364] = 8828;c[2365] = 1360;c[2366] = 2;c[2368] = 0;c[2369] = 0;c[2370] = 0;c[h >> 2] = d | 4;
      }Oh(9472, g, h);h = c[2369] | 0;j = c[2368] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
    }function Oh(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0,
          n = 0;k = a + 4 | 0;l = c[a >> 2] | 0;m = (c[k >> 2] | 0) - l | 0;h = (m | 0) / 12 | 0;e = h + 1 | 0;if (e >>> 0 > 357913941) Ll(a);i = a + 8 | 0;g = ((c[i >> 2] | 0) - l | 0) / 12 | 0;f = g << 1;f = g >>> 0 < 178956970 ? f >>> 0 < e >>> 0 ? e : f : 357913941;do if (f) {
        if (f >>> 0 > 357913941) Va();else {
          j = Sl(f * 12 | 0) | 0;break;
        }
      } else j = 0; while (0);g = j + (h * 12 | 0) | 0;n = c[b + 4 >> 2] | 0;e = c[d >> 2] | 0;c[g >> 2] = c[b >> 2];c[j + (h * 12 | 0) + 4 >> 2] = n;c[j + (h * 12 | 0) + 8 >> 2] = e;e = g + (((m | 0) / -12 | 0) * 12 | 0) | 0;if ((m | 0) > 0) cm(e | 0, l | 0, m | 0) | 0;c[a >> 2] = e;c[k >> 2] = g + 12;c[i >> 2] = j + (f * 12 | 0);if (!l) return;Ul(l);return;
    }function Ph(b, d, e) {
      b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0;if ((a[8392] | 0) == 0 ? Vl(8392) | 0 : 0) {
        c[2371] = 2;c[2372] = 7;c[2373] = 8828;c[2374] = 1372;c[2375] = 1;c[2377] = 0;c[2378] = 0;c[2379] = 0;Ha(44, 9484, o | 0) | 0;
      }g = c[2377] | 0;f = c[g + (b * 12 | 0) >> 2] | 0;g = c[g + (b * 12 | 0) + 4 >> 2] | 0;b = d + (g >> 1) | 0;if (!(g & 1)) {
        g = f;tb[g & 31](b, e);return;
      } else {
        g = c[(c[b >> 2] | 0) + f >> 2] | 0;tb[g & 31](b, e);return;
      }
    }function Qh(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - d | 0) >>> 0) / 12 | 0) * 12 | 0);Ul(d);return;
    }function Rh(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0;i = l;l = l + 16 | 0;g = i;h = i + 8 | 0;f = c[b + 4 >> 2] | 0;c[g >> 2] = c[b >> 2];e = g + 4 | 0;c[e >> 2] = f;if ((a[8392] | 0) == 0 ? Vl(8392) | 0 : 0) {
        c[2371] = 2;c[2372] = 7;c[2373] = 8828;c[2374] = 1372;c[2375] = 1;c[2377] = 0;c[2378] = 0;c[2379] = 0;Ha(44, 9484, o | 0) | 0;
      }if (c[2371] | 0) {
        f = c[2378] | 0;j = c[2379] | 0;b = d | 4;c[h >> 2] = b;if (f >>> 0 < j >>> 0) {
          h = c[e >> 2] | 0;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = h;c[f + 8 >> 2] = b;h = (c[2378] | 0) + 12 | 0;c[2378] = h;j = c[2377] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
        }
      } else {
        c[2376] = 0;c[2371] = 2;c[2372] = 7;c[2373] = 8828;c[2374] = 1372;c[2375] = 1;c[2377] = 0;c[2378] = 0;c[2379] = 0;c[h >> 2] = d | 4;
      }Sh(9508, g, h);h = c[2378] | 0;j = c[2377] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
    }function Sh(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0,
          n = 0;k = a + 4 | 0;l = c[a >> 2] | 0;m = (c[k >> 2] | 0) - l | 0;h = (m | 0) / 12 | 0;e = h + 1 | 0;if (e >>> 0 > 357913941) Ll(a);i = a + 8 | 0;g = ((c[i >> 2] | 0) - l | 0) / 12 | 0;f = g << 1;f = g >>> 0 < 178956970 ? f >>> 0 < e >>> 0 ? e : f : 357913941;do if (f) {
        if (f >>> 0 > 357913941) Va();else {
          j = Sl(f * 12 | 0) | 0;break;
        }
      } else j = 0; while (0);g = j + (h * 12 | 0) | 0;n = c[b + 4 >> 2] | 0;e = c[d >> 2] | 0;c[g >> 2] = c[b >> 2];c[j + (h * 12 | 0) + 4 >> 2] = n;c[j + (h * 12 | 0) + 8 >> 2] = e;e = g + (((m | 0) / -12 | 0) * 12 | 0) | 0;if ((m | 0) > 0) cm(e | 0, l | 0, m | 0) | 0;c[a >> 2] = e;c[k >> 2] = g + 12;c[i >> 2] = j + (f * 12 | 0);if (!l) return;Ul(l);return;
    }function Th(b, d, e) {
      b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0;if ((a[8400] | 0) == 0 ? Vl(8400) | 0 : 0) {
        c[2380] = 2;c[2381] = 6;c[2382] = 8828;c[2383] = 1380;c[2384] = 1;c[2386] = 0;c[2387] = 0;c[2388] = 0;Ha(43, 9520, o | 0) | 0;
      }g = c[2386] | 0;f = c[g + (b * 12 | 0) >> 2] | 0;g = c[g + (b * 12 | 0) + 4 >> 2] | 0;b = d + (g >> 1) | 0;if (!(g & 1)) {
        g = f;tb[g & 31](b, e);return;
      } else {
        g = c[(c[b >> 2] | 0) + f >> 2] | 0;tb[g & 31](b, e);return;
      }
    }function Uh(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - d | 0) >>> 0) / 12 | 0) * 12 | 0);Ul(d);return;
    }function Vh(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0;i = l;l = l + 16 | 0;g = i;h = i + 8 | 0;f = c[b + 4 >> 2] | 0;c[g >> 2] = c[b >> 2];e = g + 4 | 0;c[e >> 2] = f;if ((a[8400] | 0) == 0 ? Vl(8400) | 0 : 0) {
        c[2380] = 2;c[2381] = 6;c[2382] = 8828;c[2383] = 1380;c[2384] = 1;c[2386] = 0;c[2387] = 0;c[2388] = 0;Ha(43, 9520, o | 0) | 0;
      }if (c[2380] | 0) {
        f = c[2387] | 0;j = c[2388] | 0;b = d | 4;c[h >> 2] = b;if (f >>> 0 < j >>> 0) {
          h = c[e >> 2] | 0;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = h;c[f + 8 >> 2] = b;h = (c[2387] | 0) + 12 | 0;c[2387] = h;j = c[2386] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
        }
      } else {
        c[2385] = 0;c[2380] = 2;c[2381] = 6;c[2382] = 8828;c[2383] = 1380;c[2384] = 1;c[2386] = 0;c[2387] = 0;c[2388] = 0;c[h >> 2] = d | 4;
      }Wh(9544, g, h);h = c[2387] | 0;j = c[2386] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
    }function Wh(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0,
          n = 0;k = a + 4 | 0;l = c[a >> 2] | 0;m = (c[k >> 2] | 0) - l | 0;h = (m | 0) / 12 | 0;e = h + 1 | 0;if (e >>> 0 > 357913941) Ll(a);i = a + 8 | 0;g = ((c[i >> 2] | 0) - l | 0) / 12 | 0;f = g << 1;f = g >>> 0 < 178956970 ? f >>> 0 < e >>> 0 ? e : f : 357913941;do if (f) {
        if (f >>> 0 > 357913941) Va();else {
          j = Sl(f * 12 | 0) | 0;break;
        }
      } else j = 0; while (0);g = j + (h * 12 | 0) | 0;n = c[b + 4 >> 2] | 0;e = c[d >> 2] | 0;c[g >> 2] = c[b >> 2];c[j + (h * 12 | 0) + 4 >> 2] = n;c[j + (h * 12 | 0) + 8 >> 2] = e;e = g + (((m | 0) / -12 | 0) * 12 | 0) | 0;if ((m | 0) > 0) cm(e | 0, l | 0, m | 0) | 0;c[a >> 2] = e;c[k >> 2] = g + 12;c[i >> 2] = j + (f * 12 | 0);if (!l) return;Ul(l);return;
    }function Xh(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0;if ((a[8408] | 0) == 0 ? Vl(8408) | 0 : 0) {
        c[2389] = 2;c[2390] = 24;c[2391] = 8828;c[2392] = 1404;c[2393] = 0;c[2395] = 0;c[2396] = 0;c[2397] = 0;Ha(42, 9556, o | 0) | 0;
      }f = c[2395] | 0;e = c[f + (b * 12 | 0) >> 2] | 0;f = c[f + (b * 12 | 0) + 4 >> 2] | 0;b = d + (f >> 1) | 0;if (!(f & 1)) {
        f = e;sb[f & 127](b);return;
      } else {
        f = c[(c[b >> 2] | 0) + e >> 2] | 0;sb[f & 127](b);return;
      }
    }function Yh(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - d | 0) >>> 0) / 12 | 0) * 12 | 0);Ul(d);return;
    }function Zh(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0;i = l;l = l + 16 | 0;g = i;h = i + 8 | 0;f = c[b + 4 >> 2] | 0;c[g >> 2] = c[b >> 2];e = g + 4 | 0;c[e >> 2] = f;if ((a[8408] | 0) == 0 ? Vl(8408) | 0 : 0) {
        c[2389] = 2;c[2390] = 24;c[2391] = 8828;c[2392] = 1404;c[2393] = 0;c[2395] = 0;c[2396] = 0;c[2397] = 0;Ha(42, 9556, o | 0) | 0;
      }if (c[2389] | 0) {
        f = c[2396] | 0;j = c[2397] | 0;b = d | 4;c[h >> 2] = b;if (f >>> 0 < j >>> 0) {
          h = c[e >> 2] | 0;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = h;c[f + 8 >> 2] = b;h = (c[2396] | 0) + 12 | 0;c[2396] = h;j = c[2395] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
        }
      } else {
        c[2394] = 0;c[2389] = 2;c[2390] = 24;c[2391] = 8828;c[2392] = 1404;c[2393] = 0;c[2395] = 0;c[2396] = 0;c[2397] = 0;c[h >> 2] = d | 4;
      }_h(9580, g, h);h = c[2396] | 0;j = c[2395] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
    }function _h(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0,
          n = 0;k = a + 4 | 0;l = c[a >> 2] | 0;m = (c[k >> 2] | 0) - l | 0;h = (m | 0) / 12 | 0;e = h + 1 | 0;if (e >>> 0 > 357913941) Ll(a);i = a + 8 | 0;g = ((c[i >> 2] | 0) - l | 0) / 12 | 0;f = g << 1;f = g >>> 0 < 178956970 ? f >>> 0 < e >>> 0 ? e : f : 357913941;do if (f) {
        if (f >>> 0 > 357913941) Va();else {
          j = Sl(f * 12 | 0) | 0;break;
        }
      } else j = 0; while (0);g = j + (h * 12 | 0) | 0;n = c[b + 4 >> 2] | 0;e = c[d >> 2] | 0;c[g >> 2] = c[b >> 2];c[j + (h * 12 | 0) + 4 >> 2] = n;c[j + (h * 12 | 0) + 8 >> 2] = e;e = g + (((m | 0) / -12 | 0) * 12 | 0) | 0;if ((m | 0) > 0) cm(e | 0, l | 0, m | 0) | 0;c[a >> 2] = e;c[k >> 2] = g + 12;c[i >> 2] = j + (f * 12 | 0);if (!l) return;Ul(l);return;
    }function $h(b, d) {
      b = b | 0;d = d | 0;if ((a[8416] | 0) == 0 ? Vl(8416) | 0 : 0) {
        c[2398] = 1;c[2399] = 23;c[2400] = 8828;c[2401] = 1264;c[2402] = 1;c[2404] = 0;c[2405] = 0;c[2406] = 0;Ha(41, 9592, o | 0) | 0;
      }sb[c[(c[9616 >> 2] | 0) + (b << 3) >> 2] & 127](d);return;
    }function ai(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -8 - d | 0) >>> 3) << 3);Ul(d);return;
    }function bi(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;h = l;l = l + 16 | 0;f = h;g = h + 4 | 0;c[f >> 2] = b;if ((a[8416] | 0) == 0 ? Vl(8416) | 0 : 0) {
        c[2398] = 1;c[2399] = 23;c[2400] = 8828;c[2401] = 1264;c[2402] = 1;c[2404] = 0;c[2405] = 0;c[2406] = 0;Ha(41, 9592, o | 0) | 0;
      }if (c[2398] | 0) {
        e = c[2405] | 0;i = c[2406] | 0;b = d | 4;c[g >> 2] = b;if (e >>> 0 < i >>> 0) {
          c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = b;g = e + 8 | 0;c[2405] = g;i = c[2404] | 0;i = g - i | 0;i = i >> 3;i = i + -1 | 0;l = h;return i | 0;
        }
      } else {
        c[2403] = 0;c[2398] = 1;c[2399] = 23;c[2400] = 8828;c[2401] = 1264;c[2402] = 1;c[2404] = 0;c[2405] = 0;c[2406] = 0;c[g >> 2] = d | 4;
      }ci(9616, f, g);g = c[2405] | 0;i = c[2404] | 0;i = g - i | 0;i = i >> 3;i = i + -1 | 0;l = h;return i | 0;
    }function ci(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0;k = a + 4 | 0;l = c[a >> 2] | 0;m = (c[k >> 2] | 0) - l | 0;h = m >> 3;e = h + 1 | 0;if (e >>> 0 > 536870911) Ll(a);i = a + 8 | 0;g = (c[i >> 2] | 0) - l | 0;f = g >> 2;f = g >> 3 >>> 0 < 268435455 ? f >>> 0 < e >>> 0 ? e : f : 536870911;do if (f) {
        if (f >>> 0 > 536870911) Va();else {
          j = Sl(f << 3) | 0;break;
        }
      } else j = 0; while (0);g = j + (h << 3) | 0;e = c[d >> 2] | 0;c[g >> 2] = c[b >> 2];c[j + (h << 3) + 4 >> 2] = e;e = g + (0 - h << 3) | 0;if ((m | 0) > 0) cm(e | 0, l | 0, m | 0) | 0;c[a >> 2] = e;c[k >> 2] = g + 8;c[i >> 2] = j + (f << 3);if (!l) return;Ul(l);return;
    }function di(b, d) {
      b = b | 0;d = d | 0;if ((a[8424] | 0) == 0 ? Vl(8424) | 0 : 0) {
        c[2407] = 1;c[2408] = 5;c[2409] = 8828;c[2410] = 1408;c[2411] = 1;c[2413] = 0;c[2414] = 0;c[2415] = 0;Ha(40, 9628, o | 0) | 0;
      }return ub[c[(c[9652 >> 2] | 0) + (b << 3) >> 2] & 31](d) | 0;
    }function ei(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -8 - d | 0) >>> 3) << 3);Ul(d);return;
    }function fi(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;h = l;l = l + 16 | 0;f = h;g = h + 4 | 0;c[f >> 2] = b;if ((a[8424] | 0) == 0 ? Vl(8424) | 0 : 0) {
        c[2407] = 1;c[2408] = 5;c[2409] = 8828;c[2410] = 1408;c[2411] = 1;c[2413] = 0;c[2414] = 0;c[2415] = 0;Ha(40, 9628, o | 0) | 0;
      }if (c[2407] | 0) {
        e = c[2414] | 0;i = c[2415] | 0;b = d | 4;c[g >> 2] = b;if (e >>> 0 < i >>> 0) {
          c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = b;g = e + 8 | 0;c[2414] = g;i = c[2413] | 0;i = g - i | 0;i = i >> 3;i = i + -1 | 0;l = h;return i | 0;
        }
      } else {
        c[2412] = 0;c[2407] = 1;c[2408] = 5;c[2409] = 8828;c[2410] = 1408;c[2411] = 1;c[2413] = 0;c[2414] = 0;c[2415] = 0;c[g >> 2] = d | 4;
      }gi(9652, f, g);g = c[2414] | 0;i = c[2413] | 0;i = g - i | 0;i = i >> 3;i = i + -1 | 0;l = h;return i | 0;
    }function gi(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0;k = a + 4 | 0;l = c[a >> 2] | 0;m = (c[k >> 2] | 0) - l | 0;h = m >> 3;e = h + 1 | 0;if (e >>> 0 > 536870911) Ll(a);i = a + 8 | 0;g = (c[i >> 2] | 0) - l | 0;f = g >> 2;f = g >> 3 >>> 0 < 268435455 ? f >>> 0 < e >>> 0 ? e : f : 536870911;do if (f) {
        if (f >>> 0 > 536870911) Va();else {
          j = Sl(f << 3) | 0;break;
        }
      } else j = 0; while (0);g = j + (h << 3) | 0;e = c[d >> 2] | 0;c[g >> 2] = c[b >> 2];c[j + (h << 3) + 4 >> 2] = e;e = g + (0 - h << 3) | 0;if ((m | 0) > 0) cm(e | 0, l | 0, m | 0) | 0;c[a >> 2] = e;c[k >> 2] = g + 8;c[i >> 2] = j + (f << 3);if (!l) return;Ul(l);return;
    }function hi(b) {
      b = b | 0;if ((a[8432] | 0) == 0 ? Vl(8432) | 0 : 0) {
        c[2416] = 1;c[2417] = 18;c[2418] = 8828;c[2419] = 1256;c[2420] = 0;c[2422] = 0;c[2423] = 0;c[2424] = 0;Ha(39, 9664, o | 0) | 0;
      }return Fb[c[(c[9688 >> 2] | 0) + (b << 3) >> 2] & 7]() | 0;
    }function ii(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -8 - d | 0) >>> 3) << 3);Ul(d);return;
    }function ji(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;h = l;l = l + 16 | 0;f = h;g = h + 4 | 0;c[f >> 2] = b;if ((a[8432] | 0) == 0 ? Vl(8432) | 0 : 0) {
        c[2416] = 1;c[2417] = 18;c[2418] = 8828;c[2419] = 1256;c[2420] = 0;c[2422] = 0;c[2423] = 0;c[2424] = 0;Ha(39, 9664, o | 0) | 0;
      }if (c[2416] | 0) {
        e = c[2423] | 0;i = c[2424] | 0;b = d | 4;c[g >> 2] = b;if (e >>> 0 < i >>> 0) {
          c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = b;g = e + 8 | 0;c[2423] = g;i = c[2422] | 0;i = g - i | 0;i = i >> 3;i = i + -1 | 0;l = h;return i | 0;
        }
      } else {
        c[2421] = 0;c[2416] = 1;c[2417] = 18;c[2418] = 8828;c[2419] = 1256;c[2420] = 0;c[2422] = 0;c[2423] = 0;c[2424] = 0;c[g >> 2] = d | 4;
      }ki(9688, f, g);g = c[2423] | 0;i = c[2422] | 0;i = g - i | 0;i = i >> 3;i = i + -1 | 0;l = h;return i | 0;
    }function ki(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0;k = a + 4 | 0;l = c[a >> 2] | 0;m = (c[k >> 2] | 0) - l | 0;h = m >> 3;e = h + 1 | 0;if (e >>> 0 > 536870911) Ll(a);i = a + 8 | 0;g = (c[i >> 2] | 0) - l | 0;f = g >> 2;f = g >> 3 >>> 0 < 268435455 ? f >>> 0 < e >>> 0 ? e : f : 536870911;do if (f) {
        if (f >>> 0 > 536870911) Va();else {
          j = Sl(f << 3) | 0;break;
        }
      } else j = 0; while (0);g = j + (h << 3) | 0;e = c[d >> 2] | 0;c[g >> 2] = c[b >> 2];c[j + (h << 3) + 4 >> 2] = e;e = g + (0 - h << 3) | 0;if ((m | 0) > 0) cm(e | 0, l | 0, m | 0) | 0;c[a >> 2] = e;c[k >> 2] = g + 8;c[i >> 2] = j + (f << 3);if (!l) return;Ul(l);return;
    }function li(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;if ((e & 896 | 0) != 512) {
        if (!b) return;ce(b);Ul(b);return;
      }if (!d) return;a = c[d + 4 >> 2] | 0;if (a | 0) Ql(a);Ul(d);return;
    }function mi(b, d, e) {
      b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0;if ((a[8456] | 0) == 0 ? Vl(8456) | 0 : 0) {
        c[2438] = 2;c[2439] = 5;c[2440] = 8828;c[2441] = 1424;c[2442] = 1;c[2444] = 0;c[2445] = 0;c[2446] = 0;Ha(32, 9752, o | 0) | 0;
      }g = c[2444] | 0;f = c[g + (b * 12 | 0) >> 2] | 0;g = c[g + (b * 12 | 0) + 4 >> 2] | 0;b = d + (g >> 1) | 0;if (!(g & 1)) {
        g = f;g = Bb[g & 15](b, e) | 0;g = g & 1;return g | 0;
      } else {
        g = c[(c[b >> 2] | 0) + f >> 2] | 0;g = Bb[g & 15](b, e) | 0;g = g & 1;return g | 0;
      }return 0;
    }function ni(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - d | 0) >>> 0) / 12 | 0) * 12 | 0);Ul(d);return;
    }function oi(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0;i = l;l = l + 16 | 0;g = i;h = i + 8 | 0;f = c[b + 4 >> 2] | 0;c[g >> 2] = c[b >> 2];e = g + 4 | 0;c[e >> 2] = f;if ((a[8456] | 0) == 0 ? Vl(8456) | 0 : 0) {
        c[2438] = 2;c[2439] = 5;c[2440] = 8828;c[2441] = 1424;c[2442] = 1;c[2444] = 0;c[2445] = 0;c[2446] = 0;Ha(32, 9752, o | 0) | 0;
      }if (c[2438] | 0) {
        f = c[2445] | 0;j = c[2446] | 0;b = d | 4;c[h >> 2] = b;if (f >>> 0 < j >>> 0) {
          h = c[e >> 2] | 0;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = h;c[f + 8 >> 2] = b;h = (c[2445] | 0) + 12 | 0;c[2445] = h;j = c[2444] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
        }
      } else {
        c[2443] = 0;c[2438] = 2;c[2439] = 5;c[2440] = 8828;c[2441] = 1424;c[2442] = 1;c[2444] = 0;c[2445] = 0;c[2446] = 0;c[h >> 2] = d | 4;
      }pi(9776, g, h);h = c[2445] | 0;j = c[2444] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
    }function pi(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0,
          n = 0;k = a + 4 | 0;l = c[a >> 2] | 0;m = (c[k >> 2] | 0) - l | 0;h = (m | 0) / 12 | 0;e = h + 1 | 0;if (e >>> 0 > 357913941) Ll(a);i = a + 8 | 0;g = ((c[i >> 2] | 0) - l | 0) / 12 | 0;f = g << 1;f = g >>> 0 < 178956970 ? f >>> 0 < e >>> 0 ? e : f : 357913941;do if (f) {
        if (f >>> 0 > 357913941) Va();else {
          j = Sl(f * 12 | 0) | 0;break;
        }
      } else j = 0; while (0);g = j + (h * 12 | 0) | 0;n = c[b + 4 >> 2] | 0;e = c[d >> 2] | 0;c[g >> 2] = c[b >> 2];c[j + (h * 12 | 0) + 4 >> 2] = n;c[j + (h * 12 | 0) + 8 >> 2] = e;e = g + (((m | 0) / -12 | 0) * 12 | 0) | 0;if ((m | 0) > 0) cm(e | 0, l | 0, m | 0) | 0;c[a >> 2] = e;c[k >> 2] = g + 12;c[i >> 2] = j + (f * 12 | 0);if (!l) return;Ul(l);return;
    }function qi(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0;if ((a[8464] | 0) == 0 ? Vl(8464) | 0 : 0) {
        c[2447] = 2;c[2448] = 5;c[2449] = 8828;c[2450] = 1432;c[2451] = 2;c[2453] = 0;c[2454] = 0;c[2455] = 0;Ha(31, 9788, o | 0) | 0;
      }h = c[2453] | 0;g = c[h + (b * 12 | 0) >> 2] | 0;h = c[h + (b * 12 | 0) + 4 >> 2] | 0;b = d + (h >> 1) | 0;if (!(h & 1)) {
        h = (f | 0) != 0;Jb[g & 15](b, e, h);return;
      } else {
        g = c[(c[b >> 2] | 0) + g >> 2] | 0;h = (f | 0) != 0;Jb[g & 15](b, e, h);return;
      }
    }function ri(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - d | 0) >>> 0) / 12 | 0) * 12 | 0);Ul(d);return;
    }function si(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0;i = l;l = l + 16 | 0;g = i;h = i + 8 | 0;f = c[b + 4 >> 2] | 0;c[g >> 2] = c[b >> 2];e = g + 4 | 0;c[e >> 2] = f;if ((a[8464] | 0) == 0 ? Vl(8464) | 0 : 0) {
        c[2447] = 2;c[2448] = 5;c[2449] = 8828;c[2450] = 1432;c[2451] = 2;c[2453] = 0;c[2454] = 0;c[2455] = 0;Ha(31, 9788, o | 0) | 0;
      }if (c[2447] | 0) {
        f = c[2454] | 0;j = c[2455] | 0;b = d | 4;c[h >> 2] = b;if (f >>> 0 < j >>> 0) {
          h = c[e >> 2] | 0;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = h;c[f + 8 >> 2] = b;h = (c[2454] | 0) + 12 | 0;c[2454] = h;j = c[2453] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
        }
      } else {
        c[2452] = 0;c[2447] = 2;c[2448] = 5;c[2449] = 8828;c[2450] = 1432;c[2451] = 2;c[2453] = 0;c[2454] = 0;c[2455] = 0;c[h >> 2] = d | 4;
      }ti(9812, g, h);h = c[2454] | 0;j = c[2453] | 0;j = h - j | 0;j = (j | 0) / 12 | 0;j = j + -1 | 0;l = i;return j | 0;
    }function ti(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0,
          n = 0;k = a + 4 | 0;l = c[a >> 2] | 0;m = (c[k >> 2] | 0) - l | 0;h = (m | 0) / 12 | 0;e = h + 1 | 0;if (e >>> 0 > 357913941) Ll(a);i = a + 8 | 0;g = ((c[i >> 2] | 0) - l | 0) / 12 | 0;f = g << 1;f = g >>> 0 < 178956970 ? f >>> 0 < e >>> 0 ? e : f : 357913941;do if (f) {
        if (f >>> 0 > 357913941) Va();else {
          j = Sl(f * 12 | 0) | 0;break;
        }
      } else j = 0; while (0);g = j + (h * 12 | 0) | 0;n = c[b + 4 >> 2] | 0;e = c[d >> 2] | 0;c[g >> 2] = c[b >> 2];c[j + (h * 12 | 0) + 4 >> 2] = n;c[j + (h * 12 | 0) + 8 >> 2] = e;e = g + (((m | 0) / -12 | 0) * 12 | 0) | 0;if ((m | 0) > 0) cm(e | 0, l | 0, m | 0) | 0;c[a >> 2] = e;c[k >> 2] = g + 12;c[i >> 2] = j + (f * 12 | 0);if (!l) return;Ul(l);return;
    }function ui(b, d) {
      b = b | 0;d = d | 0;if ((a[8472] | 0) == 0 ? Vl(8472) | 0 : 0) {
        c[2456] = 1;c[2457] = 1;c[2458] = 8828;c[2459] = 1444;c[2460] = 1;c[2462] = 0;c[2463] = 0;c[2464] = 0;Ha(30, 9824, o | 0) | 0;
      }sb[c[(c[9848 >> 2] | 0) + (b << 3) >> 2] & 127](d);return;
    }function vi(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -8 - d | 0) >>> 3) << 3);Ul(d);return;
    }function wi(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;h = l;l = l + 16 | 0;f = h;g = h + 4 | 0;c[f >> 2] = b;if ((a[8472] | 0) == 0 ? Vl(8472) | 0 : 0) {
        c[2456] = 1;c[2457] = 1;c[2458] = 8828;c[2459] = 1444;c[2460] = 1;c[2462] = 0;c[2463] = 0;c[2464] = 0;Ha(30, 9824, o | 0) | 0;
      }if (c[2456] | 0) {
        e = c[2463] | 0;i = c[2464] | 0;b = d | 4;c[g >> 2] = b;if (e >>> 0 < i >>> 0) {
          c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = b;g = e + 8 | 0;c[2463] = g;i = c[2462] | 0;i = g - i | 0;i = i >> 3;i = i + -1 | 0;l = h;return i | 0;
        }
      } else {
        c[2461] = 0;c[2456] = 1;c[2457] = 1;c[2458] = 8828;c[2459] = 1444;c[2460] = 1;c[2462] = 0;c[2463] = 0;c[2464] = 0;c[g >> 2] = d | 4;
      }xi(9848, f, g);g = c[2463] | 0;i = c[2462] | 0;i = g - i | 0;i = i >> 3;i = i + -1 | 0;l = h;return i | 0;
    }function xi(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0;k = a + 4 | 0;l = c[a >> 2] | 0;m = (c[k >> 2] | 0) - l | 0;h = m >> 3;e = h + 1 | 0;if (e >>> 0 > 536870911) Ll(a);i = a + 8 | 0;g = (c[i >> 2] | 0) - l | 0;f = g >> 2;f = g >> 3 >>> 0 < 268435455 ? f >>> 0 < e >>> 0 ? e : f : 536870911;do if (f) {
        if (f >>> 0 > 536870911) Va();else {
          j = Sl(f << 3) | 0;break;
        }
      } else j = 0; while (0);g = j + (h << 3) | 0;e = c[d >> 2] | 0;c[g >> 2] = c[b >> 2];c[j + (h << 3) + 4 >> 2] = e;e = g + (0 - h << 3) | 0;if ((m | 0) > 0) cm(e | 0, l | 0, m | 0) | 0;c[a >> 2] = e;c[k >> 2] = g + 8;c[i >> 2] = j + (f << 3);if (!l) return;Ul(l);return;
    }function yi(b) {
      b = b | 0;if ((a[8480] | 0) == 0 ? Vl(8480) | 0 : 0) {
        c[2465] = 1;c[2466] = 4;c[2467] = 8828;c[2468] = 1452;c[2469] = 0;c[2471] = 0;c[2472] = 0;c[2473] = 0;Ha(29, 9860, o | 0) | 0;
      }return Fb[c[(c[9884 >> 2] | 0) + (b << 3) >> 2] & 7]() | 0;
    }function zi(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -8 - d | 0) >>> 3) << 3);Ul(d);return;
    }function Ai(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;h = l;l = l + 16 | 0;f = h;g = h + 4 | 0;c[f >> 2] = b;if ((a[8480] | 0) == 0 ? Vl(8480) | 0 : 0) {
        c[2465] = 1;c[2466] = 4;c[2467] = 8828;c[2468] = 1452;c[2469] = 0;c[2471] = 0;c[2472] = 0;c[2473] = 0;Ha(29, 9860, o | 0) | 0;
      }if (c[2465] | 0) {
        e = c[2472] | 0;i = c[2473] | 0;b = d | 4;c[g >> 2] = b;if (e >>> 0 < i >>> 0) {
          c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = b;g = e + 8 | 0;c[2472] = g;i = c[2471] | 0;i = g - i | 0;i = i >> 3;i = i + -1 | 0;l = h;return i | 0;
        }
      } else {
        c[2470] = 0;c[2465] = 1;c[2466] = 4;c[2467] = 8828;c[2468] = 1452;c[2469] = 0;c[2471] = 0;c[2472] = 0;c[2473] = 0;c[g >> 2] = d | 4;
      }Bi(9884, f, g);g = c[2472] | 0;i = c[2471] | 0;i = g - i | 0;i = i >> 3;i = i + -1 | 0;l = h;return i | 0;
    }function Bi(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0;k = a + 4 | 0;l = c[a >> 2] | 0;m = (c[k >> 2] | 0) - l | 0;h = m >> 3;e = h + 1 | 0;if (e >>> 0 > 536870911) Ll(a);i = a + 8 | 0;g = (c[i >> 2] | 0) - l | 0;f = g >> 2;f = g >> 3 >>> 0 < 268435455 ? f >>> 0 < e >>> 0 ? e : f : 536870911;do if (f) {
        if (f >>> 0 > 536870911) Va();else {
          j = Sl(f << 3) | 0;break;
        }
      } else j = 0; while (0);g = j + (h << 3) | 0;e = c[d >> 2] | 0;c[g >> 2] = c[b >> 2];c[j + (h << 3) + 4 >> 2] = e;e = g + (0 - h << 3) | 0;if ((m | 0) > 0) cm(e | 0, l | 0, m | 0) | 0;c[a >> 2] = e;c[k >> 2] = g + 8;c[i >> 2] = j + (f << 3);if (!l) return;Ul(l);return;
    }function Ci(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;if ((e & 896 | 0) != 512) {
        if (!b) return;Yd(b);Ul(b);return;
      }if (!d) return;a = c[d + 4 >> 2] | 0;if (a | 0) Ql(a);Ul(d);return;
    }function Di(a, b) {
      a = a | 0;b = +b;var d = 0,
          e = 0,
          f = 0,
          g = 0;e = Mj(8) | 0;d = e;f = Sl(16) | 0;c[f >> 2] = a;h[f + 8 >> 3] = b;g = d + 4 | 0;c[g >> 2] = f;a = Sl(8) | 0;g = c[g >> 2] | 0;c[a >> 2] = g;f = Sl(16) | 0;c[f + 4 >> 2] = 0;c[f + 8 >> 2] = 0;c[f >> 2] = 1308;c[f + 12 >> 2] = g;c[a + 4 >> 2] = f;c[e >> 2] = a;return d | 0;
    }function Ei(b, d, e) {
      b = b | 0;d = d | 0;e = +e;c[b + 8 >> 2] = d;h[b + 16 >> 3] = e;a[b + 24 >> 0] = 1;return;
    }function Fi(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -8 - d | 0) >>> 3) << 3);Ul(d);return;
    }function Gi() {
      var a = 0,
          b = 0,
          d = 0,
          e = 0,
          f = 0;b = Mj(8) | 0;a = b;d = Sl(16) | 0;c[d >> 2] = 0;h[d + 8 >> 3] = 0.0;f = a + 4 | 0;c[f >> 2] = d;d = Sl(8) | 0;f = c[f >> 2] | 0;c[d >> 2] = f;e = Sl(16) | 0;c[e + 4 >> 2] = 0;c[e + 8 >> 2] = 0;c[e >> 2] = 1308;c[e + 12 >> 2] = f;c[d + 4 >> 2] = e;c[b >> 2] = d;return a | 0;
    }function Hi(b) {
      b = b | 0;c[b + 8 >> 2] = 0;h[b + 16 >> 3] = 0.0;a[b + 24 >> 0] = 1;return;
    }function Ii(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -8 - d | 0) >>> 3) << 3);Ul(d);return;
    }function Ji(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;if ((e & 896 | 0) != 512) {
        if (!b) return;Ul(b);return;
      }if (!d) return;a = c[d + 4 >> 2] | 0;if (a | 0) Ql(a);Ul(d);return;
    }function Ki() {
      var a = 0,
          b = 0,
          d = 0,
          e = 0,
          f = 0;a = Mj(8) | 0;b = a;d = Sl(48) | 0;e = d;f = e + 48 | 0;do {
        c[e >> 2] = 0;e = e + 4 | 0;
      } while ((e | 0) < (f | 0));e = b + 4 | 0;c[e >> 2] = d;f = Sl(8) | 0;d = c[e >> 2] | 0;c[f >> 2] = d;e = Sl(16) | 0;c[e + 4 >> 2] = 0;c[e + 8 >> 2] = 0;c[e >> 2] = 1156;c[e + 12 >> 2] = d;c[f + 4 >> 2] = e;c[a >> 2] = f;return b | 0;
    }function Li(b) {
      b = b | 0;var d = 0,
          e = 0;d = b + 8 | 0;e = d + 48 | 0;do {
        c[d >> 2] = 0;d = d + 4 | 0;
      } while ((d | 0) < (e | 0));a[b + 56 >> 0] = 1;return;
    }function Mi(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -8 - d | 0) >>> 3) << 3);Ul(d);return;
    }function Ni(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;if ((e & 896 | 0) != 512) {
        if (!b) return;Ul(b);return;
      }if (!d) return;a = c[d + 4 >> 2] | 0;if (a | 0) Ql(a);Ul(d);return;
    }function Oi(a, b) {
      a = +a;b = +b;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          i = 0;e = Mj(8) | 0;d = e;f = Sl(16) | 0;h[f >> 3] = a;h[f + 8 >> 3] = b;i = d + 4 | 0;c[i >> 2] = f;f = Sl(8) | 0;i = c[i >> 2] | 0;c[f >> 2] = i;g = Sl(16) | 0;c[g + 4 >> 2] = 0;c[g + 8 >> 2] = 0;c[g >> 2] = 1524;c[g + 12 >> 2] = i;c[f + 4 >> 2] = g;c[e >> 2] = f;return d | 0;
    }function Pi(b, c, d) {
      b = b | 0;c = +c;d = +d;h[b + 8 >> 3] = c;h[b + 16 >> 3] = d;a[b + 24 >> 0] = 1;return;
    }function Qi(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -8 - d | 0) >>> 3) << 3);Ul(d);return;
    }function Ri(a) {
      a = a | 0;Ml(a);Ul(a);return;
    }function Si(a) {
      a = a | 0;a = c[a + 12 >> 2] | 0;if (!a) return;Ul(a);return;
    }function Ti(a) {
      a = a | 0;Ul(a);return;
    }function Ui() {
      var a = 0,
          b = 0,
          d = 0,
          e = 0,
          f = 0;b = Mj(8) | 0;a = b;d = Sl(16) | 0;c[d >> 2] = 0;c[d + 4 >> 2] = 0;c[d + 8 >> 2] = 0;c[d + 12 >> 2] = 0;f = a + 4 | 0;c[f >> 2] = d;d = Sl(8) | 0;f = c[f >> 2] | 0;c[d >> 2] = f;e = Sl(16) | 0;c[e + 4 >> 2] = 0;c[e + 8 >> 2] = 0;c[e >> 2] = 1524;c[e + 12 >> 2] = f;c[d + 4 >> 2] = e;c[b >> 2] = d;return a | 0;
    }function Vi(b) {
      b = b | 0;var d = 0;d = b + 8 | 0;c[d >> 2] = 0;c[d + 4 >> 2] = 0;c[d + 8 >> 2] = 0;c[d + 12 >> 2] = 0;a[b + 24 >> 0] = 1;return;
    }function Wi(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -8 - d | 0) >>> 3) << 3);Ul(d);return;
    }function Xi(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;if ((e & 896 | 0) != 512) {
        if (!b) return;Ul(b);return;
      }if (!d) return;a = c[d + 4 >> 2] | 0;if (a | 0) Ql(a);Ul(d);return;
    }function Yi(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;h = l;l = l + 16 | 0;f = h;g = h + 4 | 0;c[f >> 2] = b;if ((a[8552] | 0) == 0 ? Vl(8552) | 0 : 0) {
        c[2543] = 1;c[2544] = 3;c[2545] = 8828;c[2546] = 1260;c[2547] = 0;c[2549] = 0;c[2550] = 0;c[2551] = 0;Ha(19, 10172, o | 0) | 0;
      }if (c[2543] | 0) {
        e = c[2550] | 0;i = c[2551] | 0;b = d | 4;c[g >> 2] = b;if (e >>> 0 < i >>> 0) {
          c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = b;g = e + 8 | 0;c[2550] = g;i = c[2549] | 0;i = g - i | 0;i = i >> 3;i = i + -1 | 0;l = h;return i | 0;
        }
      } else {
        c[2548] = 0;c[2543] = 1;c[2544] = 3;c[2545] = 8828;c[2546] = 1260;c[2547] = 0;c[2549] = 0;c[2550] = 0;c[2551] = 0;c[g >> 2] = d | 4;
      }$i(10196, f, g);g = c[2550] | 0;i = c[2549] | 0;i = g - i | 0;i = i >> 3;i = i + -1 | 0;l = h;return i | 0;
    }function Zi(b) {
      b = b | 0;if ((a[8552] | 0) == 0 ? Vl(8552) | 0 : 0) {
        c[2543] = 1;c[2544] = 3;c[2545] = 8828;c[2546] = 1260;c[2547] = 0;c[2549] = 0;c[2550] = 0;c[2551] = 0;Ha(19, 10172, o | 0) | 0;
      }return Fb[c[(c[10196 >> 2] | 0) + (b << 3) >> 2] & 7]() | 0;
    }function _i(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -8 - d | 0) >>> 3) << 3);Ul(d);return;
    }function $i(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0;k = a + 4 | 0;l = c[a >> 2] | 0;m = (c[k >> 2] | 0) - l | 0;h = m >> 3;e = h + 1 | 0;if (e >>> 0 > 536870911) Ll(a);i = a + 8 | 0;g = (c[i >> 2] | 0) - l | 0;f = g >> 2;f = g >> 3 >>> 0 < 268435455 ? f >>> 0 < e >>> 0 ? e : f : 536870911;do if (f) {
        if (f >>> 0 > 536870911) Va();else {
          j = Sl(f << 3) | 0;break;
        }
      } else j = 0; while (0);g = j + (h << 3) | 0;e = c[d >> 2] | 0;c[g >> 2] = c[b >> 2];c[j + (h << 3) + 4 >> 2] = e;e = g + (0 - h << 3) | 0;if ((m | 0) > 0) cm(e | 0, l | 0, m | 0) | 0;c[a >> 2] = e;c[k >> 2] = g + 8;c[i >> 2] = j + (f << 3);if (!l) return;Ul(l);return;
    }function aj() {
      bj(10208, 5573);return;
    }function bj(b, d) {
      b = b | 0;d = d | 0;if ((a[8560] | 0) == 0 ? Vl(8560) | 0 : 0) {
        c[2557] = 0;c[2558] = 0;c[2559] = 0;c[2560] = 10236;c[2562] = 0;a[10252] = 0;a[10253] = 0;Ha(20, 10212, o | 0) | 0;
      }c[b >> 2] = 10212;c[2553] = 11317;c[2554] = 1548;c[2556] = d;if ((a[8448] | 0) == 0 ? Vl(8448) | 0 : 0) {
        c[2436] = 0;c[2437] = 0;
      }c[2555] = 9744;c[2561] = 8;b = c[b >> 2] | 0;if ((a[8568] | 0) == 0 ? Vl(8568) | 0 : 0) {
        c[2564] = 0;Ha(61, 10256, o | 0) | 0;
      }d = Sl(8) | 0;c[d + 4 >> 2] = b;c[d >> 2] = c[2564];c[2564] = d;return;
    }function cj(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;if ((e & 896 | 0) != 512) {
        if (!b) return;Ul(b);return;
      }if (!d) return;a = c[d + 4 >> 2] | 0;if (a | 0) Ql(a);Ul(d);return;
    }function dj(a) {
      a = a | 0;var b = 0,
          d = 0;b = c[a >> 2] | 0;if (!b) {
        c[a >> 2] = 0;return;
      }do {
        d = b;b = c[b >> 2] | 0;Ul(d);
      } while ((b | 0) != 0);c[a >> 2] = 0;return;
    }function ej(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0;if ((a[8568] | 0) == 0 ? Vl(8568) | 0 : 0) {
        c[2564] = 0;Ha(61, 10256, o | 0) | 0;
      }e = c[2564] | 0;if (!e) return;while (1) {
        f = c[e + 4 >> 2] | 0;if (f | 0 ? (tl(c[f + 12 >> 2] | 0, b) | 0) == 0 : 0) break;e = c[e >> 2] | 0;if (!e) {
          g = 13;break;
        }
      }if ((g | 0) == 13) return;e = f + 36 | 0;f = c[e >> 2] | 0;if (f | 0) {
        b = c[f >> 2] | 0;if (b | 0) eb(b | 0);Ul(f);
      }g = Sl(4) | 0;d = c[d >> 2] | 0;c[g >> 2] = d;Aa(d | 0);c[e >> 2] = g;return;
    }function fj() {
      if (a[8568] | 0) return 10256;if (!(Vl(8568) | 0)) return 10256;c[2564] = 0;Ha(61, 10256, o | 0) | 0;return 10256;
    }function gj() {
      if (a[8576] | 0) return 10260;if (!(Vl(8576) | 0)) return 10260;c[2565] = 0;Ha(62, 10260, o | 0) | 0;return 10260;
    }function hj(a) {
      a = a | 0;var b = 0,
          d = 0;b = c[a >> 2] | 0;if (!b) {
        c[a >> 2] = 0;return;
      }do {
        d = b;b = c[b >> 2] | 0;Ul(d);
      } while ((b | 0) != 0);c[a >> 2] = 0;return;
    }function ij() {
      var b = 0;if (a[8584] | 0) {
        b = c[2566] | 0;return b | 0;
      }if (!(Vl(8584) | 0)) {
        b = c[2566] | 0;return b | 0;
      }if ((a[8592] | 0) == 0 ? Vl(8592) | 0 : 0) {
        a[11318] = 8;a[11319] = 0;a[11320] = 16;a[11321] = 8;a[11322] = 0;a[11323] = 8;a[11324] = 0;a[11325] = 8;a[11326] = 0;a[11327] = 8;a[11328] = 0;a[11329] = 32;a[11330] = 32;
      }c[2566] = 1556;b = c[2566] | 0;return b | 0;
    }function jj() {
      return 1624;
    }function kj(b) {
      b = b | 0;var d = 0;if ((a[8568] | 0) == 0 ? Vl(8568) | 0 : 0) {
        c[2564] = 0;Ha(61, 10256, o | 0) | 0;
      }d = Sl(8) | 0;c[d + 4 >> 2] = b;c[d >> 2] = c[2564];c[2564] = d;return;
    }function lj(b, d, e, f, g) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;g = g | 0;var h = 0;if ((a[8576] | 0) == 0 ? Vl(8576) | 0 : 0) {
        c[2565] = 0;Ha(62, 10260, o | 0) | 0;
      }h = Sl(24) | 0;c[h + 4 >> 2] = b;c[h + 8 >> 2] = d;c[h + 12 >> 2] = e;c[h + 16 >> 2] = f;c[h + 20 >> 2] = g;c[h >> 2] = c[2565];c[2565] = h;return;
    }function mj(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0,
          u = 0;t = l;l = l + 32 | 0;p = t + 20 | 0;q = t + 8 | 0;r = t + 4 | 0;s = t;b = c[b >> 2] | 0;if (!b) {
        l = t;return;
      }o = p + 4 | 0;i = p + 8 | 0;j = p + 8 | 0;k = q + 4 | 0;m = q + 8 | 0;n = q + 8 | 0;while (1) {
        h = c[b + 16 >> 2] | 0;if (h | 0) {
          f = c[h + 12 >> 2] | 0;c[p >> 2] = 0;c[o >> 2] = 0;c[i >> 2] = 0;e = (c[h + 16 >> 2] | 0) + 1 | 0;if (e | 0) {
            if (e >>> 0 > 1073741823) {
              b = 7;break;
            }g = Sl(e << 2) | 0;u = g;c[p >> 2] = u;c[o >> 2] = u;c[j >> 2] = g + (e << 2);while (1) {
              e = e + -1 | 0;wk(q, c[f >> 2] | 0);g = c[o >> 2] | 0;if (g >>> 0 < (c[j >> 2] | 0) >>> 0) {
                c[g >> 2] = c[q >> 2];c[o >> 2] = (c[o >> 2] | 0) + 4;
              } else nj(p, q);if (!e) break;else f = f + 4 | 0;
            }
          }e = c[h + 8 >> 2] | 0;c[q >> 2] = 0;c[k >> 2] = 0;c[m >> 2] = 0;a: do if (c[e >> 2] | 0) {
            f = 0;g = 0;while (1) {
              if ((f | 0) == (g | 0)) oj(q, e);else {
                c[f >> 2] = c[e >> 2];c[k >> 2] = (c[k >> 2] | 0) + 4;
              }e = e + 4 | 0;if (!(c[e >> 2] | 0)) break a;f = c[k >> 2] | 0;g = c[n >> 2] | 0;
            }
          } while (0);c[r >> 2] = c[b + 4 >> 2];c[s >> 2] = c[h >> 2];pj(d, a, r, s, p, q);e = c[q >> 2] | 0;if (e | 0) {
            f = c[k >> 2] | 0;if ((f | 0) != (e | 0)) c[k >> 2] = f + (~((f + -4 - e | 0) >>> 2) << 2);Ul(e);
          }e = c[p >> 2] | 0;if (e | 0) {
            f = c[o >> 2] | 0;if ((f | 0) != (e | 0)) c[o >> 2] = f + (~((f + -4 - e | 0) >>> 2) << 2);Ul(e);
          }
        }b = c[b >> 2] | 0;if (!b) {
          b = 3;break;
        }
      }if ((b | 0) == 3) {
        l = t;return;
      } else if ((b | 0) == 7) Va();
    }function nj(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0;h = a + 4 | 0;j = c[a >> 2] | 0;k = (c[h >> 2] | 0) - j | 0;g = k >> 2;d = g + 1 | 0;if (d >>> 0 > 1073741823) Ll(a);l = a + 8 | 0;f = (c[l >> 2] | 0) - j | 0;e = f >> 1;e = f >> 2 >>> 0 < 536870911 ? e >>> 0 < d >>> 0 ? d : e : 1073741823;do if (e) {
        if (e >>> 0 > 1073741823) Va();else {
          i = Sl(e << 2) | 0;break;
        }
      } else i = 0; while (0);f = i + (g << 2) | 0;c[f >> 2] = c[b >> 2];d = f + (0 - g << 2) | 0;if ((k | 0) > 0) cm(d | 0, j | 0, k | 0) | 0;c[a >> 2] = d;c[h >> 2] = f + 4;c[l >> 2] = i + (e << 2);if (!j) return;Ul(j);return;
    }function oj(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0;h = a + 4 | 0;j = c[a >> 2] | 0;k = (c[h >> 2] | 0) - j | 0;g = k >> 2;d = g + 1 | 0;if (d >>> 0 > 1073741823) Ll(a);l = a + 8 | 0;f = (c[l >> 2] | 0) - j | 0;e = f >> 1;e = f >> 2 >>> 0 < 536870911 ? e >>> 0 < d >>> 0 ? d : e : 1073741823;do if (e) {
        if (e >>> 0 > 1073741823) Va();else {
          i = Sl(e << 2) | 0;break;
        }
      } else i = 0; while (0);f = i + (g << 2) | 0;c[f >> 2] = c[b >> 2];d = f + (0 - g << 2) | 0;if ((k | 0) > 0) cm(d | 0, j | 0, k | 0) | 0;c[a >> 2] = d;c[h >> 2] = f + 4;c[l >> 2] = i + (e << 2);if (!j) return;Ul(j);return;
    }function pj(a, b, d, e, f, g) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;f = f | 0;g = g | 0;var h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0;r = l;l = l + 48 | 0;k = r + 40 | 0;q = r + 32 | 0;n = r + 24 | 0;p = r + 12 | 0;o = r;Ak(q);j = c[a >> 2] | 0;c[n >> 2] = c[b >> 2];i = c[d >> 2] | 0;h = c[e >> 2] | 0;c[p >> 2] = 0;m = p + 4 | 0;c[m >> 2] = 0;c[p + 8 >> 2] = 0;e = c[f >> 2] | 0;a = (c[f + 4 >> 2] | 0) - e | 0;b = a >> 2;if (b | 0) {
        if (b >>> 0 > 1073741823) Ll(p);d = Sl(a) | 0;c[m >> 2] = d;c[p >> 2] = d;c[p + 8 >> 2] = d + (b << 2);if ((a | 0) > 0) {
          cm(d | 0, e | 0, a | 0) | 0;c[m >> 2] = d + (a >>> 2 << 2);
        }
      }c[o >> 2] = 0;f = o + 4 | 0;c[f >> 2] = 0;c[o + 8 >> 2] = 0;e = c[g >> 2] | 0;a = (c[g + 4 >> 2] | 0) - e | 0;b = a >> 2;if (b | 0) {
        if (b >>> 0 > 1073741823) Ll(o);d = Sl(a) | 0;c[f >> 2] = d;c[o >> 2] = d;c[o + 8 >> 2] = d + (b << 2);if ((a | 0) > 0) {
          cm(d | 0, e | 0, a | 0) | 0;c[f >> 2] = d + (a >>> 2 << 2);
        }
      };c[k >> 2] = c[n >> 2];qj(j, k, i, h, p, o);a = c[o >> 2] | 0;if (a | 0) {
        b = c[f >> 2] | 0;if ((b | 0) != (a | 0)) c[f >> 2] = b + (~((b + -4 - a | 0) >>> 2) << 2);Ul(a);
      }a = c[p >> 2] | 0;if (!a) {
        Bk(q);l = r;return;
      }b = c[m >> 2] | 0;if ((b | 0) != (a | 0)) c[m >> 2] = b + (~((b + -4 - a | 0) >>> 2) << 2);Ul(a);Bk(q);l = r;return;
    }function qj(b, d, e, f, g, h) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;g = g | 0;h = h | 0;var i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0;p = l;l = l + 16 | 0;i = p;if ((a[8600] | 0) == 0 ? Vl(8600) | 0 : 0) {
        c[2567] = 1700;c[2568] = 5;c[2569] = bb(1700, 6) | 0;
      }o = c[2569] | 0;c[i >> 2] = c[d >> 2];m = rj(i) | 0;n = c[g >> 2] | 0;i = g + 4 | 0;k = c[i >> 2] | 0;c[g + 8 >> 2] = 0;c[i >> 2] = 0;c[g >> 2] = 0;k = k - n | 0;i = k >> 2;k = Mj(k + 4 | 0) | 0;c[k >> 2] = i;if (i | 0) {
        g = n;d = 0;do {
          c[k + 4 + (d << 2) >> 2] = rj(g + (d << 2) | 0) | 0;d = d + 1 | 0;
        } while ((d | 0) != (i | 0));
      }j = c[h >> 2] | 0;i = h + 4 | 0;g = c[i >> 2] | 0;c[h + 8 >> 2] = 0;c[i >> 2] = 0;c[h >> 2] = 0;g = g - j | 0;i = g >> 2;g = Mj(g + 4 | 0) | 0;c[g >> 2] = i;if (i | 0) {
        h = j;d = 0;do {
          c[g + 4 + (d << 2) >> 2] = c[h + (d << 2) >> 2];d = d + 1 | 0;
        } while ((d | 0) != (i | 0));
      }Ba(0, o | 0, b | 0, m | 0, e | 0, f | 0, k | 0, g | 0) | 0;if (j | 0) Ul(j);if (!n) {
        l = p;return;
      }Ul(n);l = p;return;
    }function rj(b) {
      b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;g = l;l = l + 32 | 0;d = g + 12 | 0;e = g;if ((a[8608] | 0) == 0 ? Vl(8608) | 0 : 0) {
        c[2574] = 0;c[2575] = 0;c[2576] = 0;c[2577] = 10304;c[2579] = 0;a[10320] = 0;a[10321] = 0;Ha(20, 10280, o | 0) | 0;
      }f = c[2579] | 0;if (!f) {
        e = Mj(8) | 0;f = e;d = Sl(4) | 0;c[d >> 2] = c[b >> 2];h = f + 4 | 0;c[h >> 2] = d;d = Sl(8) | 0;h = c[h >> 2] | 0;c[d >> 2] = h;b = Sl(16) | 0;c[b + 4 >> 2] = 0;c[b + 8 >> 2] = 0;c[b >> 2] = 1732;c[b + 12 >> 2] = h;c[d + 4 >> 2] = b;c[e >> 2] = d;l = g;return f | 0;
      } else {
        c[d >> 2] = f;h = d + 4 | 0;c[h >> 2] = d;c[d + 8 >> 2] = 0;c[e >> 2] = f;c[e + 4 >> 2] = d;c[e + 8 >> 2] = 0;zk(b, e);h = c[(c[h >> 2] | 0) + 8 >> 2] | 0;l = g;return h | 0;
      }return 0;
    }function sj(a) {
      a = a | 0;Ml(a);Ul(a);return;
    }function tj(a) {
      a = a | 0;a = c[a + 12 >> 2] | 0;if (!a) return;Ul(a);return;
    }function uj(a) {
      a = a | 0;Ul(a);return;
    }function vj(a, b, d, e, f) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0,
          u = 0;r = l;l = l + 32 | 0;n = r + 16 | 0;o = r + 4 | 0;k = r + 12 | 0;p = r;q = r + 8 | 0;i = ij() | 0;g = c[i >> 2] | 0;h = c[g >> 2] | 0;if (h | 0) {
        j = c[i + 8 >> 2] | 0;i = c[i + 4 >> 2] | 0;while (1) {
          wk(n, h);wj(a, n, i, j);g = g + 4 | 0;h = c[g >> 2] | 0;if (!h) break;else {
            j = j + 1 | 0;i = i + 1 | 0;
          }
        }
      }g = jj() | 0;h = c[g >> 2] | 0;if (h | 0) do {
        wk(n, h);c[o >> 2] = c[g + 4 >> 2];xj(b, n, o);g = g + 8 | 0;h = c[g >> 2] | 0;
      } while ((h | 0) != 0);g = c[(fj() | 0) >> 2] | 0;if (g | 0) do {
        m = c[g + 4 >> 2] | 0;wk(n, c[m >> 2] | 0);c[o >> 2] = c[m + 12 >> 2];yj(d, n, o);g = c[g >> 2] | 0;
      } while ((g | 0) != 0);wk(k, 0);g = gj() | 0;c[n >> 2] = c[k >> 2];mj(n, g, f);g = c[(fj() | 0) >> 2] | 0;if (!g) {
        l = r;return;
      }d = n + 4 | 0;k = n + 8 | 0;m = n + 8 | 0;do {
        b = c[g + 4 >> 2] | 0;wk(o, c[b >> 2] | 0);i = c[b + 16 >> 2] | 0;if (!i) {
          c[q >> 2] = c[o >> 2];c[n >> 2] = c[q >> 2];mj(n, b + 24 | 0, f);
        } else {
          h = Sl(12) | 0;s = i + 4 | 0;j = c[s + 4 >> 2] | 0;a = h + 4 | 0;c[a >> 2] = c[s >> 2];c[a + 4 >> 2] = j;i = c[i >> 2] | 0;if (!i) i = h;else {
            a = h;j = i;while (1) {
              i = Sl(12) | 0;u = j + 4 | 0;t = c[u + 4 >> 2] | 0;s = i + 4 | 0;c[s >> 2] = c[u >> 2];c[s + 4 >> 2] = t;c[a >> 2] = i;j = c[j >> 2] | 0;if (!j) break;else a = i;
            }
          }c[i >> 2] = 0;c[n >> 2] = 0;c[d >> 2] = 0;c[k >> 2] = 0;i = h;do {
            wk(p, c[c[i + 4 >> 2] >> 2] | 0);j = c[d >> 2] | 0;if (j >>> 0 < (c[m >> 2] | 0) >>> 0) {
              c[j >> 2] = c[p >> 2];c[d >> 2] = (c[d >> 2] | 0) + 4;
            } else nj(n, p);i = c[i >> 2] | 0;
          } while ((i | 0) != 0);zj(e, o, n);i = c[n >> 2] | 0;if (i | 0) {
            j = c[d >> 2] | 0;if ((j | 0) != (i | 0)) c[d >> 2] = j + (~((j + -4 - i | 0) >>> 2) << 2);Ul(i);
          }c[q >> 2] = c[o >> 2];c[n >> 2] = c[q >> 2];mj(n, b + 24 | 0, f);do {
            u = h;h = c[h >> 2] | 0;Ul(u);
          } while ((h | 0) != 0);
        }g = c[g >> 2] | 0;
      } while ((g | 0) != 0);l = r;return;
    }function wj(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0;k = l;l = l + 16 | 0;i = k;j = k + 8 | 0;Ak(j);h = c[b >> 2] | 0;g = c[d >> 2] | 0;d = a[e >> 0] | 0;b = a[f >> 0] | 0;if ((a[8632] | 0) == 0 ? Vl(8632) | 0 : 0) {
        c[2587] = 1808;c[2588] = 3;c[2589] = bb(1808, 4) | 0;
      }f = c[2589] | 0;c[i >> 2] = g;cb(0, f | 0, h | 0, rj(i) | 0, d & 255 | 0, b & 255 | 0) | 0;Bk(j);l = k;return;
    }function xj(b, d, e) {
      b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0;i = l;l = l + 16 | 0;g = i;h = i + 8 | 0;Ak(h);f = c[b >> 2] | 0;d = c[d >> 2] | 0;b = c[e >> 2] | 0;if ((a[8624] | 0) == 0 ? Vl(8624) | 0 : 0) {
        c[2584] = 1796;c[2585] = 2;c[2586] = bb(1796, 3) | 0;
      }e = c[2586] | 0;c[g >> 2] = d;wa(0, e | 0, f | 0, rj(g) | 0, b | 0) | 0;Bk(h);l = i;return;
    }function yj(b, d, e) {
      b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0;i = l;l = l + 16 | 0;g = i;h = i + 8 | 0;Ak(h);f = c[b >> 2] | 0;d = c[d >> 2] | 0;b = c[e >> 2] | 0;if ((a[8624] | 0) == 0 ? Vl(8624) | 0 : 0) {
        c[2584] = 1796;c[2585] = 2;c[2586] = bb(1796, 3) | 0;
      }e = c[2586] | 0;c[g >> 2] = d;wa(0, e | 0, f | 0, rj(g) | 0, b | 0) | 0;Bk(h);l = i;return;
    }function zj(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;m = l;l = l + 32 | 0;g = m + 24 | 0;k = m + 16 | 0;h = m + 12 | 0;i = m;Ak(k);f = c[a >> 2] | 0;c[h >> 2] = c[b >> 2];c[i >> 2] = 0;j = i + 4 | 0;c[j >> 2] = 0;c[i + 8 >> 2] = 0;e = c[d >> 2] | 0;a = (c[d + 4 >> 2] | 0) - e | 0;b = a >> 2;if (b | 0) {
        if (b >>> 0 > 1073741823) Ll(i);d = Sl(a) | 0;c[j >> 2] = d;c[i >> 2] = d;c[i + 8 >> 2] = d + (b << 2);if ((a | 0) > 0) {
          cm(d | 0, e | 0, a | 0) | 0;c[j >> 2] = d + (a >>> 2 << 2);
        }
      };c[g >> 2] = c[h >> 2];Aj(f, g, i);a = c[i >> 2] | 0;if (!a) {
        Bk(k);l = m;return;
      }b = c[j >> 2] | 0;if ((b | 0) != (a | 0)) c[j >> 2] = b + (~((b + -4 - a | 0) >>> 2) << 2);Ul(a);Bk(k);l = m;return;
    }function Aj(b, d, e) {
      b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0;k = l;l = l + 16 | 0;f = k;if ((a[8616] | 0) == 0 ? Vl(8616) | 0 : 0) {
        c[2581] = 1784;c[2582] = 2;c[2583] = bb(1784, 3) | 0;
      }j = c[2583] | 0;c[f >> 2] = c[d >> 2];h = rj(f) | 0;i = c[e >> 2] | 0;g = e + 4 | 0;f = c[g >> 2] | 0;c[e + 8 >> 2] = 0;c[g >> 2] = 0;c[e >> 2] = 0;e = f - i | 0;f = e >> 2;e = Mj(e + 4 | 0) | 0;c[e >> 2] = f;if (f | 0) {
        g = i;d = 0;do {
          c[e + 4 + (d << 2) >> 2] = rj(g + (d << 2) | 0) | 0;d = d + 1 | 0;
        } while ((d | 0) != (f | 0));
      }wa(0, j | 0, b | 0, h | 0, e | 0) | 0;if (!i) {
        l = k;return;
      }Ul(i);l = k;return;
    }function Bj(b, d, e) {
      b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0;p = l;l = l + 32 | 0;m = p + 16 | 0;n = p + 4 | 0;j = p + 24 | 0;k = p;c[b >> 2] = 0;f = yk(d) | 0;c[n >> 2] = 0;o = n + 4 | 0;c[o >> 2] = 0;c[n + 8 >> 2] = 0;switch (f << 24 >> 24) {case 0:
          {
            Ak(m);d = c[e >> 2] | 0;if ((a[8640] | 0) == 0 ? Vl(8640) | 0 : 0) {
              c[2590] = 1824;c[2591] = 1;c[2592] = bb(1824, 2) | 0;
            }f = fb(0, c[2592] | 0, d | 0, 0) | 0;Bk(m);d = c[b >> 2] | 0;if (d | 0) eb(d | 0);c[b >> 2] = f;break;
          }case 8:
          {
            i = xk(d) | 0;a[j >> 0] = 8;wk(k, c[i + 4 >> 2] | 0);Cj(m, e, j, k, i + 8 | 0);c[b >> 2] = c[m >> 2];break;
          }case 9:
          {
            h = xk(d) | 0;d = c[h + 4 >> 2] | 0;if (d | 0) {
              i = n + 8 | 0;g = h + 12 | 0;while (1) {
                d = d + -1 | 0;wk(m, c[g >> 2] | 0);f = c[o >> 2] | 0;if (f >>> 0 < (c[i >> 2] | 0) >>> 0) {
                  c[f >> 2] = c[m >> 2];c[o >> 2] = (c[o >> 2] | 0) + 4;
                } else nj(n, m);if (!d) break;else g = g + 4 | 0;
              }
            }a[j >> 0] = 9;wk(k, c[h + 8 >> 2] | 0);Dj(m, e, j, k, n);c[b >> 2] = c[m >> 2];break;
          }default:
          {
            i = xk(d) | 0;a[j >> 0] = f;wk(k, c[i + 4 >> 2] | 0);Ej(m, e, j, k);c[b >> 2] = c[m >> 2];
          }}d = c[n >> 2] | 0;if (!d) {
        l = p;return;
      }f = c[o >> 2] | 0;if ((f | 0) != (d | 0)) c[o >> 2] = f + (~((f + -4 - d | 0) >>> 2) << 2);Ul(d);l = p;return;
    }function Cj(b, d, e, f, g) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;g = g | 0;var h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;m = l;l = l + 16 | 0;j = m;k = m + 8 | 0;Ak(k);i = c[d >> 2] | 0;h = a[e >> 0] | 0;e = c[f >> 2] | 0;d = c[g >> 2] | 0;if ((a[8664] | 0) == 0 ? Vl(8664) | 0 : 0) {
        c[2599] = 1860;c[2600] = 3;c[2601] = bb(1860, 4) | 0;
      }g = c[2601] | 0;c[j >> 2] = e;c[b >> 2] = cb(0, g | 0, i | 0, h & 255 | 0, rj(j) | 0, d | 0) | 0;Bk(k);l = m;return;
    }function Dj(b, d, e, f, g) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;g = g | 0;var h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0;q = l;l = l + 32 | 0;m = q + 24 | 0;p = q + 16 | 0;n = q + 12 | 0;o = q;Ak(p);k = c[d >> 2] | 0;i = a[e >> 0] | 0;c[n >> 2] = c[f >> 2];c[o >> 2] = 0;j = o + 4 | 0;c[j >> 2] = 0;c[o + 8 >> 2] = 0;h = c[g >> 2] | 0;d = (c[g + 4 >> 2] | 0) - h | 0;e = d >> 2;if (e | 0) {
        if (e >>> 0 > 1073741823) Ll(o);f = Sl(d) | 0;c[j >> 2] = f;c[o >> 2] = f;c[o + 8 >> 2] = f + (e << 2);if ((d | 0) > 0) {
          cm(f | 0, h | 0, d | 0) | 0;c[j >> 2] = f + (d >>> 2 << 2);
        }
      };c[m >> 2] = c[n >> 2];Fj(b, k, i, m, o);d = c[o >> 2] | 0;if (!d) {
        Bk(p);l = q;return;
      }e = c[j >> 2] | 0;if ((e | 0) != (d | 0)) c[j >> 2] = e + (~((e + -4 - d | 0) >>> 2) << 2);Ul(d);Bk(p);l = q;return;
    }function Ej(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0,
          j = 0;j = l;l = l + 16 | 0;h = j;i = j + 8 | 0;Ak(i);g = c[d >> 2] | 0;e = a[e >> 0] | 0;d = c[f >> 2] | 0;if ((a[8648] | 0) == 0 ? Vl(8648) | 0 : 0) {
        c[2593] = 1832;c[2594] = 2;c[2595] = bb(1832, 3) | 0;
      }f = c[2595] | 0;c[h >> 2] = d;c[b >> 2] = wa(0, f | 0, g | 0, e & 255 | 0, rj(h) | 0) | 0;Bk(i);l = j;return;
    }function Fj(b, d, e, f, g) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;g = g | 0;var h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0;n = l;l = l + 16 | 0;h = n;if ((a[8656] | 0) == 0 ? Vl(8656) | 0 : 0) {
        c[2596] = 1844;c[2597] = 3;c[2598] = bb(1844, 4) | 0;
      }m = c[2598] | 0;k = e & 255;c[h >> 2] = c[f >> 2];i = rj(h) | 0;j = c[g >> 2] | 0;f = g + 4 | 0;h = c[f >> 2] | 0;c[g + 8 >> 2] = 0;c[f >> 2] = 0;c[g >> 2] = 0;h = h - j | 0;f = h >> 2;h = Mj(h + 4 | 0) | 0;c[h >> 2] = f;if (f | 0) {
        g = j;e = 0;do {
          c[h + 4 + (e << 2) >> 2] = rj(g + (e << 2) | 0) | 0;e = e + 1 | 0;
        } while ((e | 0) != (f | 0));
      }c[b >> 2] = cb(0, m | 0, d | 0, k | 0, i | 0, h | 0) | 0;if (!j) {
        l = n;return;
      }Ul(j);l = n;return;
    }function Gj() {
      c[2603] = Tl(65536) | 0;Hj(10420, 5662);Ij(10420) | 0;Jj(10420, 5668, 25, 0);Kj(10420, 5679, 1, 0);Lj(10420, 5687, 10, 0);Nj(10420, 5697, 19, 0);Pj(10420, 5704, 26, 0);Qj(10424, 5711);Rj(10424) | 0;return;
    }function Hj(b, d) {
      b = b | 0;d = d | 0;if ((a[8728] | 0) == 0 ? Vl(8728) | 0 : 0) {
        c[2674] = 0;c[2675] = 0;c[2676] = 0;c[2677] = 10704;c[2679] = 0;a[10720] = 0;a[10721] = 0;Ha(20, 10680, o | 0) | 0;
      }c[b >> 2] = 10680;c[2670] = 11345;c[2671] = 1964;c[2673] = d;if ((a[8448] | 0) == 0 ? Vl(8448) | 0 : 0) {
        c[2436] = 0;c[2437] = 0;
      }c[2672] = 9744;c[2678] = 9;kj(c[b >> 2] | 0);return;
    }function Ij(b) {
      b = b | 0;var d = 0,
          e = 0,
          f = 0;d = c[b >> 2] | 0;if ((a[8720] | 0) == 0 ? Vl(8720) | 0 : 0) {
        c[2661] = 5;c[2662] = 7;c[2663] = 8828;c[2664] = 1960;c[2665] = 0;c[2667] = 0;c[2668] = 0;c[2669] = 0;c[2666] = 63;Ha(64, 10644, o | 0) | 0;
      }if (!(c[2661] | 0)) {
        c[2661] = 5;c[2662] = 7;c[2663] = 8828;c[2664] = 1960;c[2665] = 0;c[2667] = 0;c[2668] = 0;c[2669] = 0;c[2666] = 63;
      }d = d + 28 | 0;f = c[d >> 2] | 0;e = Sl(24) | 0;c[e + 4 >> 2] = 0;c[e + 8 >> 2] = 0;c[e + 12 >> 2] = 0;c[e + 16 >> 2] = 10644;c[e + 20 >> 2] = 0;c[e >> 2] = c[f >> 2];c[f >> 2] = e;c[d >> 2] = e;return b | 0;
    }function Jj(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0;b = c[b >> 2] | 0;if ((a[8712] | 0) == 0 ? Vl(8712) | 0 : 0) {
        c[2652] = 1;c[2653] = 11;c[2654] = 8828;c[2655] = 1948;c[2656] = 2;c[2658] = 0;c[2659] = 0;c[2660] = 0;Ha(65, 10608, o | 0) | 0;
      }if (!(c[2652] | 0)) {
        c[2657] = 0;c[2652] = 1;c[2653] = 11;c[2654] = 8828;c[2655] = 1948;c[2656] = 2;c[2658] = 0;c[2659] = 0;c[2660] = 0;
      }i = nk(e, f) | 0;b = b + 28 | 0;h = c[b >> 2] | 0;g = Sl(24) | 0;c[g + 4 >> 2] = d;c[g + 8 >> 2] = e;c[g + 12 >> 2] = i;c[g + 16 >> 2] = 10608;c[g + 20 >> 2] = f;c[g >> 2] = c[h >> 2];c[h >> 2] = g;c[b >> 2] = g;return;
    }function Kj(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0;b = c[b >> 2] | 0;if ((a[8704] | 0) == 0 ? Vl(8704) | 0 : 0) {
        c[2643] = 1;c[2644] = 1;c[2645] = 8828;c[2646] = 1924;c[2647] = 5;c[2649] = 0;c[2650] = 0;c[2651] = 0;Ha(66, 10572, o | 0) | 0;
      }if (!(c[2643] | 0)) {
        c[2648] = 0;c[2643] = 1;c[2644] = 1;c[2645] = 8828;c[2646] = 1924;c[2647] = 5;c[2649] = 0;c[2650] = 0;c[2651] = 0;
      }i = ik(e, f) | 0;b = b + 28 | 0;h = c[b >> 2] | 0;g = Sl(24) | 0;c[g + 4 >> 2] = d;c[g + 8 >> 2] = e;c[g + 12 >> 2] = i;c[g + 16 >> 2] = 10572;c[g + 20 >> 2] = f;c[g >> 2] = c[h >> 2];c[h >> 2] = g;c[b >> 2] = g;return;
    }function Lj(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0;b = c[b >> 2] | 0;if ((a[8696] | 0) == 0 ? Vl(8696) | 0 : 0) {
        c[2634] = 1;c[2635] = 8;c[2636] = 8828;c[2637] = 1912;c[2638] = 2;c[2640] = 0;c[2641] = 0;c[2642] = 0;Ha(67, 10536, o | 0) | 0;
      }if (!(c[2634] | 0)) {
        c[2639] = 0;c[2634] = 1;c[2635] = 8;c[2636] = 8828;c[2637] = 1912;c[2638] = 2;c[2640] = 0;c[2641] = 0;c[2642] = 0;
      }i = ek(e, f) | 0;b = b + 28 | 0;h = c[b >> 2] | 0;g = Sl(24) | 0;c[g + 4 >> 2] = d;c[g + 8 >> 2] = e;c[g + 12 >> 2] = i;c[g + 16 >> 2] = 10536;c[g + 20 >> 2] = f;c[g >> 2] = c[h >> 2];c[h >> 2] = g;c[b >> 2] = g;return;
    }function Mj(a) {
      a = a | 0;var b = 0,
          d = 0;a = a + 7 & -8;if (a >>> 0 <= 32768 ? (b = c[2602] | 0, a >>> 0 <= (65536 - b | 0) >>> 0) : 0) {
        d = (c[2603] | 0) + b | 0;c[2602] = b + a;b = d;return b | 0;
      }d = Tl(a + 8 | 0) | 0;c[d >> 2] = c[2604];c[2604] = d;d = d + 8 | 0;return d | 0;
    }function Nj(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0;b = c[b >> 2] | 0;if ((a[8688] | 0) == 0 ? Vl(8688) | 0 : 0) {
        c[2625] = 1;c[2626] = 12;c[2627] = 8828;c[2628] = 1904;c[2629] = 1;c[2631] = 0;c[2632] = 0;c[2633] = 0;Ha(68, 10500, o | 0) | 0;
      }if (!(c[2625] | 0)) {
        c[2630] = 0;c[2625] = 1;c[2626] = 12;c[2627] = 8828;c[2628] = 1904;c[2629] = 1;c[2631] = 0;c[2632] = 0;c[2633] = 0;
      }i = ak(e, f) | 0;b = b + 28 | 0;h = c[b >> 2] | 0;g = Sl(24) | 0;c[g + 4 >> 2] = d;c[g + 8 >> 2] = e;c[g + 12 >> 2] = i;c[g + 16 >> 2] = 10500;c[g + 20 >> 2] = f;c[g >> 2] = c[h >> 2];c[h >> 2] = g;c[b >> 2] = g;return;
    }function Oj(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;a: while (1) {
        d = c[2604] | 0;while (1) {
          if ((d | 0) == (b | 0)) break a;e = c[d >> 2] | 0;c[2604] = e;if (!d) d = e;else break;
        }Ul(d);
      }c[2602] = a;return;
    }function Pj(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0;b = c[b >> 2] | 0;if ((a[8680] | 0) == 0 ? Vl(8680) | 0 : 0) {
        c[2616] = 1;c[2617] = 12;c[2618] = 8828;c[2619] = 1892;c[2620] = 2;c[2622] = 0;c[2623] = 0;c[2624] = 0;Ha(69, 10464, o | 0) | 0;
      }if (!(c[2616] | 0)) {
        c[2621] = 0;c[2616] = 1;c[2617] = 12;c[2618] = 8828;c[2619] = 1892;c[2620] = 2;c[2622] = 0;c[2623] = 0;c[2624] = 0;
      }i = Yj(e, f) | 0;b = b + 28 | 0;h = c[b >> 2] | 0;g = Sl(24) | 0;c[g + 4 >> 2] = d;c[g + 8 >> 2] = e;c[g + 12 >> 2] = i;c[g + 16 >> 2] = 10464;c[g + 20 >> 2] = f;c[g >> 2] = c[h >> 2];c[h >> 2] = g;c[b >> 2] = g;return;
    }function Qj(b, d) {
      b = b | 0;d = d | 0;if ((a[8608] | 0) == 0 ? Vl(8608) | 0 : 0) {
        c[2574] = 0;c[2575] = 0;c[2576] = 0;c[2577] = 10304;c[2579] = 0;a[10320] = 0;a[10321] = 0;Ha(20, 10280, o | 0) | 0;
      }c[b >> 2] = 10280;c[2570] = 11344;c[2571] = 1884;c[2573] = d;if ((a[8512] | 0) == 0 ? Vl(8512) | 0 : 0) {
        c[2503] = c[370];c[2504] = 0;
      }c[2572] = 10012;c[2578] = 10;kj(c[b >> 2] | 0);return;
    }function Rj(b) {
      b = b | 0;var d = 0,
          e = 0,
          f = 0;d = c[b >> 2] | 0;if ((a[8672] | 0) == 0 ? Vl(8672) | 0 : 0) {
        c[2607] = 5;c[2608] = 20;c[2609] = 8828;c[2610] = 1876;c[2611] = 1;c[2613] = 0;c[2614] = 0;c[2615] = 0;c[2612] = 27;Ha(70, 10428, o | 0) | 0;
      }if (!(c[2607] | 0)) {
        c[2607] = 5;c[2608] = 20;c[2609] = 8828;c[2610] = 1876;c[2611] = 1;c[2613] = 0;c[2614] = 0;c[2615] = 0;c[2612] = 27;
      }d = d + 28 | 0;f = c[d >> 2] | 0;e = Sl(24) | 0;c[e + 4 >> 2] = 0;c[e + 8 >> 2] = 0;c[e + 12 >> 2] = 0;c[e + 16 >> 2] = 10428;c[e + 20 >> 2] = 0;c[e >> 2] = c[f >> 2];c[f >> 2] = e;c[d >> 2] = e;return b | 0;
    }function Sj(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0,
          f = 0;b = c[2602] | 0;if ((65536 - b | 0) >>> 0 < 8) {
        b = Tl(16) | 0;c[b >> 2] = c[2604];c[2604] = b;b = b + 8 | 0;
      } else {
        d = (c[2603] | 0) + b | 0;c[2602] = b + 8;b = d;
      }d = b;e = Sl(4) | 0;c[e >> 2] = a;f = d + 4 | 0;c[f >> 2] = e;a = Sl(8) | 0;f = c[f >> 2] | 0;c[a >> 2] = f;e = Sl(16) | 0;c[e + 4 >> 2] = 0;c[e + 8 >> 2] = 0;c[e >> 2] = 1732;c[e + 12 >> 2] = f;c[a + 4 >> 2] = e;c[b >> 2] = a;return d | 0;
    }function Tj(b, d) {
      b = b | 0;d = d | 0;c[b + 4 >> 2] = d;a[b + 8 >> 0] = 1;return;
    }function Uj(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -8 - d | 0) >>> 3) << 3);Ul(d);return;
    }function Vj(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;if ((e & 896 | 0) != 512) {
        if (!b) return;Ul(b);return;
      }if (!d) return;a = c[d + 4 >> 2] | 0;if (a | 0) Ql(a);Ul(d);return;
    }function Wj(b, d, e) {
      b = b | 0;d = d | 0;e = e | 0;if ((a[8680] | 0) == 0 ? Vl(8680) | 0 : 0) {
        c[2616] = 1;c[2617] = 12;c[2618] = 8828;c[2619] = 1892;c[2620] = 2;c[2622] = 0;c[2623] = 0;c[2624] = 0;Ha(69, 10464, o | 0) | 0;
      }tb[c[(c[10488 >> 2] | 0) + (b << 3) >> 2] & 31](d, e);return;
    }function Xj(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -8 - d | 0) >>> 3) << 3);Ul(d);return;
    }function Yj(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;h = l;l = l + 16 | 0;f = h;g = h + 4 | 0;c[f >> 2] = b;if ((a[8680] | 0) == 0 ? Vl(8680) | 0 : 0) {
        c[2616] = 1;c[2617] = 12;c[2618] = 8828;c[2619] = 1892;c[2620] = 2;c[2622] = 0;c[2623] = 0;c[2624] = 0;Ha(69, 10464, o | 0) | 0;
      }if (c[2616] | 0) {
        e = c[2623] | 0;i = c[2624] | 0;b = d | 4;c[g >> 2] = b;if (e >>> 0 < i >>> 0) {
          c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = b;g = e + 8 | 0;c[2623] = g;i = c[2622] | 0;i = g - i | 0;i = i >> 3;i = i + -1 | 0;l = h;return i | 0;
        }
      } else {
        c[2621] = 0;c[2616] = 1;c[2617] = 12;c[2618] = 8828;c[2619] = 1892;c[2620] = 2;c[2622] = 0;c[2623] = 0;c[2624] = 0;c[g >> 2] = d | 4;
      }Zj(10488, f, g);g = c[2623] | 0;i = c[2622] | 0;i = g - i | 0;i = i >> 3;i = i + -1 | 0;l = h;return i | 0;
    }function Zj(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0;k = a + 4 | 0;l = c[a >> 2] | 0;m = (c[k >> 2] | 0) - l | 0;h = m >> 3;e = h + 1 | 0;if (e >>> 0 > 536870911) Ll(a);i = a + 8 | 0;g = (c[i >> 2] | 0) - l | 0;f = g >> 2;f = g >> 3 >>> 0 < 268435455 ? f >>> 0 < e >>> 0 ? e : f : 536870911;do if (f) {
        if (f >>> 0 > 536870911) Va();else {
          j = Sl(f << 3) | 0;break;
        }
      } else j = 0; while (0);g = j + (h << 3) | 0;e = c[d >> 2] | 0;c[g >> 2] = c[b >> 2];c[j + (h << 3) + 4 >> 2] = e;e = g + (0 - h << 3) | 0;if ((m | 0) > 0) cm(e | 0, l | 0, m | 0) | 0;c[a >> 2] = e;c[k >> 2] = g + 8;c[i >> 2] = j + (f << 3);if (!l) return;Ul(l);return;
    }function _j(b, d) {
      b = b | 0;d = d | 0;if ((a[8688] | 0) == 0 ? Vl(8688) | 0 : 0) {
        c[2625] = 1;c[2626] = 12;c[2627] = 8828;c[2628] = 1904;c[2629] = 1;c[2631] = 0;c[2632] = 0;c[2633] = 0;Ha(68, 10500, o | 0) | 0;
      }return ub[c[(c[10524 >> 2] | 0) + (b << 3) >> 2] & 31](d) | 0;
    }function $j(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -8 - d | 0) >>> 3) << 3);Ul(d);return;
    }function ak(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;h = l;l = l + 16 | 0;f = h;g = h + 4 | 0;c[f >> 2] = b;if ((a[8688] | 0) == 0 ? Vl(8688) | 0 : 0) {
        c[2625] = 1;c[2626] = 12;c[2627] = 8828;c[2628] = 1904;c[2629] = 1;c[2631] = 0;c[2632] = 0;c[2633] = 0;Ha(68, 10500, o | 0) | 0;
      }if (c[2625] | 0) {
        e = c[2632] | 0;i = c[2633] | 0;b = d | 4;c[g >> 2] = b;if (e >>> 0 < i >>> 0) {
          c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = b;g = e + 8 | 0;c[2632] = g;i = c[2631] | 0;i = g - i | 0;i = i >> 3;i = i + -1 | 0;l = h;return i | 0;
        }
      } else {
        c[2630] = 0;c[2625] = 1;c[2626] = 12;c[2627] = 8828;c[2628] = 1904;c[2629] = 1;c[2631] = 0;c[2632] = 0;c[2633] = 0;c[g >> 2] = d | 4;
      }bk(10524, f, g);g = c[2632] | 0;i = c[2631] | 0;i = g - i | 0;i = i >> 3;i = i + -1 | 0;l = h;return i | 0;
    }function bk(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0;k = a + 4 | 0;l = c[a >> 2] | 0;m = (c[k >> 2] | 0) - l | 0;h = m >> 3;e = h + 1 | 0;if (e >>> 0 > 536870911) Ll(a);i = a + 8 | 0;g = (c[i >> 2] | 0) - l | 0;f = g >> 2;f = g >> 3 >>> 0 < 268435455 ? f >>> 0 < e >>> 0 ? e : f : 536870911;do if (f) {
        if (f >>> 0 > 536870911) Va();else {
          j = Sl(f << 3) | 0;break;
        }
      } else j = 0; while (0);g = j + (h << 3) | 0;e = c[d >> 2] | 0;c[g >> 2] = c[b >> 2];c[j + (h << 3) + 4 >> 2] = e;e = g + (0 - h << 3) | 0;if ((m | 0) > 0) cm(e | 0, l | 0, m | 0) | 0;c[a >> 2] = e;c[k >> 2] = g + 8;c[i >> 2] = j + (f << 3);if (!l) return;Ul(l);return;
    }function ck(b, d, e) {
      b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0;k = l;l = l + 32 | 0;g = k + 12 | 0;h = k + 8 | 0;i = k + 4 | 0;j = k;if ((a[8696] | 0) == 0 ? Vl(8696) | 0 : 0) {
        c[2634] = 1;c[2635] = 8;c[2636] = 8828;c[2637] = 1912;c[2638] = 2;c[2640] = 0;c[2641] = 0;c[2642] = 0;Ha(67, 10536, o | 0) | 0;
      }b = c[(c[2640] | 0) + (b << 3) >> 2] | 0;f = d;if (!(f & 1)) c[i >> 2] = c[d >> 2];else {
        c[g >> 2] = 0;d = g + 4 | 0;c[d >> 2] = 0;a[g + 8 >> 0] = 0;La(f | 0, g | 0) | 0;c[i >> 2] = c[d >> 2];
      }c[j >> 2] = e;c[g >> 2] = c[i >> 2];Jb[b & 15](h, g, j);f = c[h >> 2] | 0;if (f | 0) eb(f | 0);b = c[j >> 2] | 0;if (!b) {
        l = k;return f | 0;
      }eb(b | 0);l = k;return f | 0;
    }function dk(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -8 - d | 0) >>> 3) << 3);Ul(d);return;
    }function ek(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;h = l;l = l + 16 | 0;f = h;g = h + 4 | 0;c[f >> 2] = b;if ((a[8696] | 0) == 0 ? Vl(8696) | 0 : 0) {
        c[2634] = 1;c[2635] = 8;c[2636] = 8828;c[2637] = 1912;c[2638] = 2;c[2640] = 0;c[2641] = 0;c[2642] = 0;Ha(67, 10536, o | 0) | 0;
      }if (c[2634] | 0) {
        e = c[2641] | 0;i = c[2642] | 0;b = d | 4;c[g >> 2] = b;if (e >>> 0 < i >>> 0) {
          c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = b;g = e + 8 | 0;c[2641] = g;i = c[2640] | 0;i = g - i | 0;i = i >> 3;i = i + -1 | 0;l = h;return i | 0;
        }
      } else {
        c[2639] = 0;c[2634] = 1;c[2635] = 8;c[2636] = 8828;c[2637] = 1912;c[2638] = 2;c[2640] = 0;c[2641] = 0;c[2642] = 0;c[g >> 2] = d | 4;
      }fk(10560, f, g);g = c[2641] | 0;i = c[2640] | 0;i = g - i | 0;i = i >> 3;i = i + -1 | 0;l = h;return i | 0;
    }function fk(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0;k = a + 4 | 0;l = c[a >> 2] | 0;m = (c[k >> 2] | 0) - l | 0;h = m >> 3;e = h + 1 | 0;if (e >>> 0 > 536870911) Ll(a);i = a + 8 | 0;g = (c[i >> 2] | 0) - l | 0;f = g >> 2;f = g >> 3 >>> 0 < 268435455 ? f >>> 0 < e >>> 0 ? e : f : 536870911;do if (f) {
        if (f >>> 0 > 536870911) Va();else {
          j = Sl(f << 3) | 0;break;
        }
      } else j = 0; while (0);g = j + (h << 3) | 0;e = c[d >> 2] | 0;c[g >> 2] = c[b >> 2];c[j + (h << 3) + 4 >> 2] = e;e = g + (0 - h << 3) | 0;if ((m | 0) > 0) cm(e | 0, l | 0, m | 0) | 0;c[a >> 2] = e;c[k >> 2] = g + 8;c[i >> 2] = j + (f << 3);if (!l) return;Ul(l);return;
    }function gk(b, d, e, f, g, h) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;g = g | 0;h = h | 0;if ((a[8704] | 0) == 0 ? Vl(8704) | 0 : 0) {
        c[2643] = 1;c[2644] = 1;c[2645] = 8828;c[2646] = 1924;c[2647] = 5;c[2649] = 0;c[2650] = 0;c[2651] = 0;Ha(66, 10572, o | 0) | 0;
      }kk(c[(c[2649] | 0) + (b << 3) >> 2] | 0, d, e, f, g, h);return;
    }function hk(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -8 - d | 0) >>> 3) << 3);Ul(d);return;
    }function ik(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;h = l;l = l + 16 | 0;f = h;g = h + 4 | 0;c[f >> 2] = b;if ((a[8704] | 0) == 0 ? Vl(8704) | 0 : 0) {
        c[2643] = 1;c[2644] = 1;c[2645] = 8828;c[2646] = 1924;c[2647] = 5;c[2649] = 0;c[2650] = 0;c[2651] = 0;Ha(66, 10572, o | 0) | 0;
      }if (c[2643] | 0) {
        e = c[2650] | 0;i = c[2651] | 0;b = d | 4;c[g >> 2] = b;if (e >>> 0 < i >>> 0) {
          c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = b;g = e + 8 | 0;c[2650] = g;i = c[2649] | 0;i = g - i | 0;i = i >> 3;i = i + -1 | 0;l = h;return i | 0;
        }
      } else {
        c[2648] = 0;c[2643] = 1;c[2644] = 1;c[2645] = 8828;c[2646] = 1924;c[2647] = 5;c[2649] = 0;c[2650] = 0;c[2651] = 0;c[g >> 2] = d | 4;
      }jk(10596, f, g);g = c[2650] | 0;i = c[2649] | 0;i = g - i | 0;i = i >> 3;i = i + -1 | 0;l = h;return i | 0;
    }function jk(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0;k = a + 4 | 0;l = c[a >> 2] | 0;m = (c[k >> 2] | 0) - l | 0;h = m >> 3;e = h + 1 | 0;if (e >>> 0 > 536870911) Ll(a);i = a + 8 | 0;g = (c[i >> 2] | 0) - l | 0;f = g >> 2;f = g >> 3 >>> 0 < 268435455 ? f >>> 0 < e >>> 0 ? e : f : 536870911;do if (f) {
        if (f >>> 0 > 536870911) Va();else {
          j = Sl(f << 3) | 0;break;
        }
      } else j = 0; while (0);g = j + (h << 3) | 0;e = c[d >> 2] | 0;c[g >> 2] = c[b >> 2];c[j + (h << 3) + 4 >> 2] = e;e = g + (0 - h << 3) | 0;if ((m | 0) > 0) cm(e | 0, l | 0, m | 0) | 0;c[a >> 2] = e;c[k >> 2] = g + 8;c[i >> 2] = j + (f << 3);if (!l) return;Ul(l);return;
    }function kk(a, b, d, e, f, g) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;f = f | 0;g = g | 0;var h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0;m = l;l = l + 32 | 0;k = m + 16 | 0;j = m + 12 | 0;i = m + 8 | 0;h = m + 4 | 0;n = m;c[k >> 2] = b;c[j >> 2] = d;c[i >> 2] = e;c[h >> 2] = f;c[n >> 2] = g;pb[a & 1](k, j, i, h, n);a = c[n >> 2] | 0;if (a | 0) eb(a | 0);a = c[h >> 2] | 0;if (a | 0) eb(a | 0);a = c[i >> 2] | 0;if (a | 0) eb(a | 0);a = c[j >> 2] | 0;if (a | 0) eb(a | 0);a = c[k >> 2] | 0;if (!a) {
        l = m;return;
      }eb(a | 0);l = m;return;
    }function lk(b, d, e) {
      b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0;g = l;l = l + 16 | 0;f = g;if ((a[8712] | 0) == 0 ? Vl(8712) | 0 : 0) {
        c[2652] = 1;c[2653] = 11;c[2654] = 8828;c[2655] = 1948;c[2656] = 2;c[2658] = 0;c[2659] = 0;c[2660] = 0;Ha(65, 10608, o | 0) | 0;
      }b = c[(c[2658] | 0) + (b << 3) >> 2] | 0;c[f >> 2] = e;tb[b & 31](d, f);b = c[f >> 2] | 0;if (!b) {
        l = g;return;
      }eb(b | 0);l = g;return;
    }function mk(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -8 - d | 0) >>> 3) << 3);Ul(d);return;
    }function nk(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;h = l;l = l + 16 | 0;f = h;g = h + 4 | 0;c[f >> 2] = b;if ((a[8712] | 0) == 0 ? Vl(8712) | 0 : 0) {
        c[2652] = 1;c[2653] = 11;c[2654] = 8828;c[2655] = 1948;c[2656] = 2;c[2658] = 0;c[2659] = 0;c[2660] = 0;Ha(65, 10608, o | 0) | 0;
      }if (c[2652] | 0) {
        e = c[2659] | 0;i = c[2660] | 0;b = d | 4;c[g >> 2] = b;if (e >>> 0 < i >>> 0) {
          c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = b;g = e + 8 | 0;c[2659] = g;i = c[2658] | 0;i = g - i | 0;i = i >> 3;i = i + -1 | 0;l = h;return i | 0;
        }
      } else {
        c[2657] = 0;c[2652] = 1;c[2653] = 11;c[2654] = 8828;c[2655] = 1948;c[2656] = 2;c[2658] = 0;c[2659] = 0;c[2660] = 0;c[g >> 2] = d | 4;
      }ok(10632, f, g);g = c[2659] | 0;i = c[2658] | 0;i = g - i | 0;i = i >> 3;i = i + -1 | 0;l = h;return i | 0;
    }function ok(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0;k = a + 4 | 0;l = c[a >> 2] | 0;m = (c[k >> 2] | 0) - l | 0;h = m >> 3;e = h + 1 | 0;if (e >>> 0 > 536870911) Ll(a);i = a + 8 | 0;g = (c[i >> 2] | 0) - l | 0;f = g >> 2;f = g >> 3 >>> 0 < 268435455 ? f >>> 0 < e >>> 0 ? e : f : 536870911;do if (f) {
        if (f >>> 0 > 536870911) Va();else {
          j = Sl(f << 3) | 0;break;
        }
      } else j = 0; while (0);g = j + (h << 3) | 0;e = c[d >> 2] | 0;c[g >> 2] = c[b >> 2];c[j + (h << 3) + 4 >> 2] = e;e = g + (0 - h << 3) | 0;if ((m | 0) > 0) cm(e | 0, l | 0, m | 0) | 0;c[a >> 2] = e;c[k >> 2] = g + 8;c[i >> 2] = j + (f << 3);if (!l) return;Ul(l);return;
    }function pk() {
      var a = 0,
          b = 0,
          d = 0,
          e = 0,
          f = 0;a = c[2602] | 0;if ((65536 - a | 0) >>> 0 < 8) {
        a = Tl(16) | 0;c[a >> 2] = c[2604];c[2604] = a;a = a + 8 | 0;
      } else {
        b = (c[2603] | 0) + a | 0;c[2602] = a + 8;a = b;
      }b = a;f = b + 4 | 0;c[f >> 2] = Sl(1) | 0;d = Sl(8) | 0;f = c[f >> 2] | 0;c[d >> 2] = f;e = Sl(16) | 0;c[e + 4 >> 2] = 0;c[e + 8 >> 2] = 0;c[e >> 2] = 1980;c[e + 12 >> 2] = f;c[d + 4 >> 2] = e;c[a >> 2] = d;return b | 0;
    }function qk(b) {
      b = b | 0;a[b + 8 >> 0] = 1;return;
    }function rk(a) {
      a = a | 0;var b = 0,
          d = 0;d = c[a + 24 >> 2] | 0;if (!d) return;a = a + 28 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -8 - d | 0) >>> 3) << 3);Ul(d);return;
    }function sk(a) {
      a = a | 0;Ml(a);Ul(a);return;
    }function tk(a) {
      a = a | 0;a = c[a + 12 >> 2] | 0;if (!a) return;Ul(a);return;
    }function uk(a) {
      a = a | 0;Ul(a);return;
    }function vk(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;if ((e & 896 | 0) != 512) {
        if (!b) return;Ul(b);return;
      }if (!d) return;a = c[d + 4 >> 2] | 0;if (a | 0) Ql(a);Ul(d);return;
    }function wk(a, b) {
      a = a | 0;b = b | 0;c[a >> 2] = b;return;
    }function xk(a) {
      a = a | 0;return c[a >> 2] | 0;
    }function yk(b) {
      b = b | 0;return a[c[b >> 2] >> 0] | 0;
    }function zk(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;b = c[b >> 2] | 0;g = c[2602] | 0;h = c[2604] | 0;e = c[c[d >> 2] >> 2] | 0;if ((a[8736] | 0) == 0 ? Vl(8736) | 0 : 0) {
        c[2681] = 2e3;c[2682] = 1;c[2683] = bb(2e3, 2) | 0;
      }b = fb(0, c[2683] | 0, e | 0, b | 0) | 0;a: while (1) {
        e = c[2604] | 0;while (1) {
          if ((e | 0) == (h | 0)) break a;f = c[e >> 2] | 0;c[2604] = f;if (!e) e = f;else break;
        }Ul(e);
      }c[2602] = g;c[(c[d + 4 >> 2] | 0) + 8 >> 2] = b;return;
    }function Ak(a) {
      a = a | 0;c[a >> 2] = c[2602];c[a + 4 >> 2] = c[2604];return;
    }function Bk(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = c[a >> 2] | 0;a = c[a + 4 >> 2] | 0;a: while (1) {
        b = c[2604] | 0;while (1) {
          if ((b | 0) == (a | 0)) break a;d = c[b >> 2] | 0;c[2604] = d;if (!b) b = d;else break;
        }Ul(b);
      }c[2602] = e;return;
    }function Ck() {
      Dk();return;
    }function Dk() {
      var b = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0;q = l;Ea(65536, 10408, c[2603] | 0, 10416);f = ij() | 0;e = c[f >> 2] | 0;b = c[e >> 2] | 0;if (b | 0) {
        g = c[f + 8 >> 2] | 0;f = c[f + 4 >> 2] | 0;while (1) {
          Na(b | 0, d[f >> 0] | 0, a[g >> 0] | 0);e = e + 4 | 0;b = c[e >> 2] | 0;if (!b) break;else {
            g = g + 1 | 0;f = f + 1 | 0;
          }
        }
      }e = jj() | 0;b = c[e >> 2] | 0;if (b | 0) do {
        Oa(b | 0, c[e + 4 >> 2] | 0);e = e + 8 | 0;b = c[e >> 2] | 0;
      } while ((b | 0) != 0);Oa(11309, 5785);g = fj() | 0;b = c[g >> 2] | 0;e = (b | 0) == 0;a: do if (!e) {
        f = b;do {
          a[(c[f + 4 >> 2] | 0) + 40 >> 0] = 0;f = c[f >> 2] | 0;
        } while ((f | 0) != 0);if (!e) do {
          h = g;f = g;while (1) {
            n = b;b = c[b >> 2] | 0;n = c[n + 4 >> 2] | 0;e = n + 40 | 0;if (!(a[e >> 0] | 0)) break;n = c[h >> 2] | 0;c[f >> 2] = c[n >> 2];Ul(n);if (!b) break a;
          }a[e >> 0] = 1;g = c[f >> 2] | 0;i = n + 20 | 0;e = c[i >> 2] | 0;j = Xa() | 0;k = l;l = l + ((1 * (e << 2) | 0) + 15 & -16) | 0;m = l;l = l + ((1 * (e << 2) | 0) + 15 & -16) | 0;e = c[n + 16 >> 2] | 0;if (e | 0) {
            f = k;h = m;while (1) {
              c[f >> 2] = c[c[e + 4 >> 2] >> 2];c[h >> 2] = c[e + 8 >> 2];e = c[e >> 2] | 0;if (!e) break;else {
                f = f + 4 | 0;h = h + 4 | 0;
              }
            }
          }Ta(n | 0, c[n + 8 >> 2] | 0, k | 0, m | 0, c[i >> 2] | 0, c[n + 32 >> 2] | 0, c[n + 12 >> 2] | 0);Ga(j | 0);
        } while ((b | 0) != 0);
      } while (0);b = c[(gj() | 0) >> 2] | 0;if (b | 0) do {
        n = c[b + 16 >> 2] | 0;db(0, c[n + 8 >> 2] | 0, c[n + 12 >> 2] | 0, (c[n + 16 >> 2] | 0) + 1 | 0, c[n + 4 >> 2] | 0, c[b + 8 >> 2] | 0, c[n >> 2] | 0, c[b + 4 >> 2] | 0, c[b + 12 >> 2] | 0, c[b + 20 >> 2] | 0);b = c[b >> 2] | 0;
      } while ((b | 0) != 0);b = c[(fj() | 0) >> 2] | 0;if (!b) {
        za();l = q;return;
      }b: while (1) {
        e = c[b + 4 >> 2] | 0;if (e | 0 ? (o = c[e >> 2] | 0, p = c[e + 24 >> 2] | 0, p | 0) : 0) {
          f = p;do {
            e = f + 4 | 0;g = c[f + 16 >> 2] | 0;c: do if (g | 0) {
              h = c[g >> 2] | 0;switch (h | 0) {case 0:
                  {
                    b = 24;break b;
                  }case 4:case 3:case 2:
                  {
                    db(o | 0, c[g + 8 >> 2] | 0, c[g + 12 >> 2] | 0, (c[g + 16 >> 2] | 0) + 1 | 0, c[g + 4 >> 2] | 0, 0, h | 0, c[e >> 2] | 0, c[f + 12 >> 2] | 0, c[f + 20 >> 2] | 0);break c;
                  }case 1:
                  {
                    db(o | 0, c[g + 8 >> 2] | 0, c[g + 12 >> 2] | 0, (c[g + 16 >> 2] | 0) + 1 | 0, c[g + 4 >> 2] | 0, c[f + 8 >> 2] | 0, 1, c[e >> 2] | 0, c[f + 12 >> 2] | 0, c[f + 20 >> 2] | 0);break c;
                  }case 5:
                  {
                    db(o | 0, c[g + 8 >> 2] | 0, c[g + 12 >> 2] | 0, (c[g + 16 >> 2] | 0) + 1 | 0, c[g + 4 >> 2] | 0, c[g + 20 >> 2] | 0, 5, 0, 0, 0);break c;
                  }default:
                  break c;}
            } while (0);f = c[f >> 2] | 0;
          } while ((f | 0) != 0);
        }b = c[b >> 2] | 0;if (!b) {
          b = 19;break;
        }
      }if ((b | 0) == 19) {
        za();l = q;return;
      } else if ((b | 0) == 24) Va();
    }
    function Ek(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0,
          u = 0,
          v = 0,
          w = 0,
          x = 0;x = l;l = l + 16 | 0;o = x;do if (a >>> 0 < 245) {
        k = a >>> 0 < 11 ? 16 : a + 11 & -8;a = k >>> 3;n = c[2684] | 0;d = n >>> a;if (d & 3 | 0) {
          b = (d & 1 ^ 1) + a | 0;a = 10776 + (b << 1 << 2) | 0;d = a + 8 | 0;e = c[d >> 2] | 0;f = e + 8 | 0;g = c[f >> 2] | 0;if ((a | 0) == (g | 0)) c[2684] = n & ~(1 << b);else {
            c[g + 12 >> 2] = a;c[d >> 2] = g;
          }w = b << 3;c[e + 4 >> 2] = w | 3;w = e + w + 4 | 0;c[w >> 2] = c[w >> 2] | 1;w = f;l = x;return w | 0;
        }m = c[2686] | 0;if (k >>> 0 > m >>> 0) {
          if (d | 0) {
            b = 2 << a;b = d << a & (b | 0 - b);b = (b & 0 - b) + -1 | 0;h = b >>> 12 & 16;b = b >>> h;d = b >>> 5 & 8;b = b >>> d;f = b >>> 2 & 4;b = b >>> f;a = b >>> 1 & 2;b = b >>> a;e = b >>> 1 & 1;e = (d | h | f | a | e) + (b >>> e) | 0;b = 10776 + (e << 1 << 2) | 0;a = b + 8 | 0;f = c[a >> 2] | 0;h = f + 8 | 0;d = c[h >> 2] | 0;if ((b | 0) == (d | 0)) {
              a = n & ~(1 << e);c[2684] = a;
            } else {
              c[d + 12 >> 2] = b;c[a >> 2] = d;a = n;
            }g = (e << 3) - k | 0;c[f + 4 >> 2] = k | 3;e = f + k | 0;c[e + 4 >> 2] = g | 1;c[e + g >> 2] = g;if (m | 0) {
              f = c[2689] | 0;b = m >>> 3;d = 10776 + (b << 1 << 2) | 0;b = 1 << b;if (!(a & b)) {
                c[2684] = a | b;b = d;a = d + 8 | 0;
              } else {
                a = d + 8 | 0;b = c[a >> 2] | 0;
              }c[a >> 2] = f;c[b + 12 >> 2] = f;c[f + 8 >> 2] = b;c[f + 12 >> 2] = d;
            }c[2686] = g;c[2689] = e;w = h;l = x;return w | 0;
          }i = c[2685] | 0;if (i) {
            d = (i & 0 - i) + -1 | 0;h = d >>> 12 & 16;d = d >>> h;g = d >>> 5 & 8;d = d >>> g;j = d >>> 2 & 4;d = d >>> j;e = d >>> 1 & 2;d = d >>> e;a = d >>> 1 & 1;a = c[11040 + ((g | h | j | e | a) + (d >>> a) << 2) >> 2] | 0;d = (c[a + 4 >> 2] & -8) - k | 0;e = c[a + 16 + (((c[a + 16 >> 2] | 0) == 0 & 1) << 2) >> 2] | 0;if (!e) {
              j = a;g = d;
            } else {
              do {
                h = (c[e + 4 >> 2] & -8) - k | 0;j = h >>> 0 < d >>> 0;d = j ? h : d;a = j ? e : a;e = c[e + 16 + (((c[e + 16 >> 2] | 0) == 0 & 1) << 2) >> 2] | 0;
              } while ((e | 0) != 0);j = a;g = d;
            }h = j + k | 0;if (j >>> 0 < h >>> 0) {
              f = c[j + 24 >> 2] | 0;b = c[j + 12 >> 2] | 0;do if ((b | 0) == (j | 0)) {
                a = j + 20 | 0;b = c[a >> 2] | 0;if (!b) {
                  a = j + 16 | 0;b = c[a >> 2] | 0;if (!b) {
                    d = 0;break;
                  }
                }while (1) {
                  d = b + 20 | 0;e = c[d >> 2] | 0;if (e | 0) {
                    b = e;a = d;continue;
                  }d = b + 16 | 0;e = c[d >> 2] | 0;if (!e) break;else {
                    b = e;a = d;
                  }
                }c[a >> 2] = 0;d = b;
              } else {
                d = c[j + 8 >> 2] | 0;c[d + 12 >> 2] = b;c[b + 8 >> 2] = d;d = b;
              } while (0);do if (f | 0) {
                b = c[j + 28 >> 2] | 0;a = 11040 + (b << 2) | 0;if ((j | 0) == (c[a >> 2] | 0)) {
                  c[a >> 2] = d;if (!d) {
                    c[2685] = i & ~(1 << b);break;
                  }
                } else {
                  c[f + 16 + (((c[f + 16 >> 2] | 0) != (j | 0) & 1) << 2) >> 2] = d;if (!d) break;
                }c[d + 24 >> 2] = f;b = c[j + 16 >> 2] | 0;if (b | 0) {
                  c[d + 16 >> 2] = b;c[b + 24 >> 2] = d;
                }b = c[j + 20 >> 2] | 0;if (b | 0) {
                  c[d + 20 >> 2] = b;c[b + 24 >> 2] = d;
                }
              } while (0);if (g >>> 0 < 16) {
                w = g + k | 0;c[j + 4 >> 2] = w | 3;w = j + w + 4 | 0;c[w >> 2] = c[w >> 2] | 1;
              } else {
                c[j + 4 >> 2] = k | 3;c[h + 4 >> 2] = g | 1;c[h + g >> 2] = g;if (m | 0) {
                  e = c[2689] | 0;b = m >>> 3;d = 10776 + (b << 1 << 2) | 0;b = 1 << b;if (!(n & b)) {
                    c[2684] = n | b;b = d;a = d + 8 | 0;
                  } else {
                    a = d + 8 | 0;b = c[a >> 2] | 0;
                  }c[a >> 2] = e;c[b + 12 >> 2] = e;c[e + 8 >> 2] = b;c[e + 12 >> 2] = d;
                }c[2686] = g;c[2689] = h;
              }w = j + 8 | 0;l = x;return w | 0;
            } else n = k;
          } else n = k;
        } else n = k;
      } else if (a >>> 0 <= 4294967231) {
        a = a + 11 | 0;k = a & -8;j = c[2685] | 0;if (j) {
          e = 0 - k | 0;a = a >>> 8;if (a) {
            if (k >>> 0 > 16777215) i = 31;else {
              n = (a + 1048320 | 0) >>> 16 & 8;v = a << n;m = (v + 520192 | 0) >>> 16 & 4;v = v << m;i = (v + 245760 | 0) >>> 16 & 2;i = 14 - (m | n | i) + (v << i >>> 15) | 0;i = k >>> (i + 7 | 0) & 1 | i << 1;
            }
          } else i = 0;d = c[11040 + (i << 2) >> 2] | 0;a: do if (!d) {
            d = 0;a = 0;v = 57;
          } else {
            a = 0;h = k << ((i | 0) == 31 ? 0 : 25 - (i >>> 1) | 0);g = 0;while (1) {
              f = (c[d + 4 >> 2] & -8) - k | 0;if (f >>> 0 < e >>> 0) if (!f) {
                a = d;e = 0;f = d;v = 61;break a;
              } else {
                a = d;e = f;
              }f = c[d + 20 >> 2] | 0;d = c[d + 16 + (h >>> 31 << 2) >> 2] | 0;g = (f | 0) == 0 | (f | 0) == (d | 0) ? g : f;f = (d | 0) == 0;if (f) {
                d = g;v = 57;break;
              } else h = h << ((f ^ 1) & 1);
            }
          } while (0);if ((v | 0) == 57) {
            if ((d | 0) == 0 & (a | 0) == 0) {
              a = 2 << i;a = j & (a | 0 - a);if (!a) {
                n = k;break;
              }n = (a & 0 - a) + -1 | 0;h = n >>> 12 & 16;n = n >>> h;g = n >>> 5 & 8;n = n >>> g;i = n >>> 2 & 4;n = n >>> i;m = n >>> 1 & 2;n = n >>> m;d = n >>> 1 & 1;a = 0;d = c[11040 + ((g | h | i | m | d) + (n >>> d) << 2) >> 2] | 0;
            }if (!d) {
              i = a;h = e;
            } else {
              f = d;v = 61;
            }
          }if ((v | 0) == 61) while (1) {
            v = 0;d = (c[f + 4 >> 2] & -8) - k | 0;n = d >>> 0 < e >>> 0;d = n ? d : e;a = n ? f : a;f = c[f + 16 + (((c[f + 16 >> 2] | 0) == 0 & 1) << 2) >> 2] | 0;if (!f) {
              i = a;h = d;break;
            } else {
              e = d;v = 61;
            }
          }if ((i | 0) != 0 ? h >>> 0 < ((c[2686] | 0) - k | 0) >>> 0 : 0) {
            g = i + k | 0;if (i >>> 0 >= g >>> 0) {
              w = 0;l = x;return w | 0;
            }f = c[i + 24 >> 2] | 0;b = c[i + 12 >> 2] | 0;do if ((b | 0) == (i | 0)) {
              a = i + 20 | 0;b = c[a >> 2] | 0;if (!b) {
                a = i + 16 | 0;b = c[a >> 2] | 0;if (!b) {
                  b = 0;break;
                }
              }while (1) {
                d = b + 20 | 0;e = c[d >> 2] | 0;if (e | 0) {
                  b = e;a = d;continue;
                }d = b + 16 | 0;e = c[d >> 2] | 0;if (!e) break;else {
                  b = e;a = d;
                }
              }c[a >> 2] = 0;
            } else {
              w = c[i + 8 >> 2] | 0;c[w + 12 >> 2] = b;c[b + 8 >> 2] = w;
            } while (0);do if (f) {
              a = c[i + 28 >> 2] | 0;d = 11040 + (a << 2) | 0;if ((i | 0) == (c[d >> 2] | 0)) {
                c[d >> 2] = b;if (!b) {
                  e = j & ~(1 << a);c[2685] = e;break;
                }
              } else {
                c[f + 16 + (((c[f + 16 >> 2] | 0) != (i | 0) & 1) << 2) >> 2] = b;if (!b) {
                  e = j;break;
                }
              }c[b + 24 >> 2] = f;a = c[i + 16 >> 2] | 0;if (a | 0) {
                c[b + 16 >> 2] = a;c[a + 24 >> 2] = b;
              }a = c[i + 20 >> 2] | 0;if (a) {
                c[b + 20 >> 2] = a;c[a + 24 >> 2] = b;e = j;
              } else e = j;
            } else e = j; while (0);do if (h >>> 0 >= 16) {
              c[i + 4 >> 2] = k | 3;c[g + 4 >> 2] = h | 1;c[g + h >> 2] = h;b = h >>> 3;if (h >>> 0 < 256) {
                d = 10776 + (b << 1 << 2) | 0;a = c[2684] | 0;b = 1 << b;if (!(a & b)) {
                  c[2684] = a | b;b = d;a = d + 8 | 0;
                } else {
                  a = d + 8 | 0;b = c[a >> 2] | 0;
                }c[a >> 2] = g;c[b + 12 >> 2] = g;c[g + 8 >> 2] = b;c[g + 12 >> 2] = d;break;
              }b = h >>> 8;if (b) {
                if (h >>> 0 > 16777215) b = 31;else {
                  v = (b + 1048320 | 0) >>> 16 & 8;w = b << v;u = (w + 520192 | 0) >>> 16 & 4;w = w << u;b = (w + 245760 | 0) >>> 16 & 2;b = 14 - (u | v | b) + (w << b >>> 15) | 0;b = h >>> (b + 7 | 0) & 1 | b << 1;
                }
              } else b = 0;d = 11040 + (b << 2) | 0;c[g + 28 >> 2] = b;a = g + 16 | 0;c[a + 4 >> 2] = 0;c[a >> 2] = 0;a = 1 << b;if (!(e & a)) {
                c[2685] = e | a;c[d >> 2] = g;c[g + 24 >> 2] = d;c[g + 12 >> 2] = g;c[g + 8 >> 2] = g;break;
              }a = h << ((b | 0) == 31 ? 0 : 25 - (b >>> 1) | 0);d = c[d >> 2] | 0;while (1) {
                if ((c[d + 4 >> 2] & -8 | 0) == (h | 0)) {
                  v = 97;break;
                }e = d + 16 + (a >>> 31 << 2) | 0;b = c[e >> 2] | 0;if (!b) {
                  v = 96;break;
                } else {
                  a = a << 1;d = b;
                }
              }if ((v | 0) == 96) {
                c[e >> 2] = g;c[g + 24 >> 2] = d;c[g + 12 >> 2] = g;c[g + 8 >> 2] = g;break;
              } else if ((v | 0) == 97) {
                v = d + 8 | 0;w = c[v >> 2] | 0;c[w + 12 >> 2] = g;c[v >> 2] = g;c[g + 8 >> 2] = w;c[g + 12 >> 2] = d;c[g + 24 >> 2] = 0;break;
              }
            } else {
              w = h + k | 0;c[i + 4 >> 2] = w | 3;w = i + w + 4 | 0;c[w >> 2] = c[w >> 2] | 1;
            } while (0);w = i + 8 | 0;l = x;return w | 0;
          } else n = k;
        } else n = k;
      } else n = -1; while (0);d = c[2686] | 0;if (d >>> 0 >= n >>> 0) {
        b = d - n | 0;a = c[2689] | 0;if (b >>> 0 > 15) {
          w = a + n | 0;c[2689] = w;c[2686] = b;c[w + 4 >> 2] = b | 1;c[w + b >> 2] = b;c[a + 4 >> 2] = n | 3;
        } else {
          c[2686] = 0;c[2689] = 0;c[a + 4 >> 2] = d | 3;w = a + d + 4 | 0;c[w >> 2] = c[w >> 2] | 1;
        }w = a + 8 | 0;l = x;return w | 0;
      }h = c[2687] | 0;if (h >>> 0 > n >>> 0) {
        u = h - n | 0;c[2687] = u;w = c[2690] | 0;v = w + n | 0;c[2690] = v;c[v + 4 >> 2] = u | 1;c[w + 4 >> 2] = n | 3;w = w + 8 | 0;l = x;return w | 0;
      }if (!(c[2802] | 0)) {
        c[2804] = 4096;c[2803] = 4096;c[2805] = -1;c[2806] = -1;c[2807] = 0;c[2795] = 0;a = o & -16 ^ 1431655768;c[o >> 2] = a;c[2802] = a;a = 4096;
      } else a = c[2804] | 0;i = n + 48 | 0;j = n + 47 | 0;g = a + j | 0;f = 0 - a | 0;k = g & f;if (k >>> 0 <= n >>> 0) {
        w = 0;l = x;return w | 0;
      }a = c[2794] | 0;if (a | 0 ? (m = c[2792] | 0, o = m + k | 0, o >>> 0 <= m >>> 0 | o >>> 0 > a >>> 0) : 0) {
        w = 0;l = x;return w | 0;
      }b: do if (!(c[2795] & 4)) {
        d = c[2690] | 0;c: do if (d) {
          e = 11184;while (1) {
            a = c[e >> 2] | 0;if (a >>> 0 <= d >>> 0 ? (r = e + 4 | 0, (a + (c[r >> 2] | 0) | 0) >>> 0 > d >>> 0) : 0) break;a = c[e + 8 >> 2] | 0;if (!a) {
              v = 118;break c;
            } else e = a;
          }b = g - h & f;if (b >>> 0 < 2147483647) {
            a = gm(b | 0) | 0;if ((a | 0) == ((c[e >> 2] | 0) + (c[r >> 2] | 0) | 0)) {
              if ((a | 0) != (-1 | 0)) {
                h = b;g = a;v = 135;break b;
              }
            } else {
              e = a;v = 126;
            }
          } else b = 0;
        } else v = 118; while (0);do if ((v | 0) == 118) {
          d = gm(0) | 0;if ((d | 0) != (-1 | 0) ? (b = d, p = c[2803] | 0, q = p + -1 | 0, b = ((q & b | 0) == 0 ? 0 : (q + b & 0 - p) - b | 0) + k | 0, p = c[2792] | 0, q = b + p | 0, b >>> 0 > n >>> 0 & b >>> 0 < 2147483647) : 0) {
            r = c[2794] | 0;if (r | 0 ? q >>> 0 <= p >>> 0 | q >>> 0 > r >>> 0 : 0) {
              b = 0;break;
            }a = gm(b | 0) | 0;if ((a | 0) == (d | 0)) {
              h = b;g = d;v = 135;break b;
            } else {
              e = a;v = 126;
            }
          } else b = 0;
        } while (0);do if ((v | 0) == 126) {
          d = 0 - b | 0;if (!(i >>> 0 > b >>> 0 & (b >>> 0 < 2147483647 & (e | 0) != (-1 | 0)))) if ((e | 0) == (-1 | 0)) {
            b = 0;break;
          } else {
            h = b;g = e;v = 135;break b;
          }a = c[2804] | 0;a = j - b + a & 0 - a;if (a >>> 0 >= 2147483647) {
            h = b;g = e;v = 135;break b;
          }if ((gm(a | 0) | 0) == (-1 | 0)) {
            gm(d | 0) | 0;b = 0;break;
          } else {
            h = a + b | 0;g = e;v = 135;break b;
          }
        } while (0);c[2795] = c[2795] | 4;v = 133;
      } else {
        b = 0;v = 133;
      } while (0);if (((v | 0) == 133 ? k >>> 0 < 2147483647 : 0) ? (u = gm(k | 0) | 0, r = gm(0) | 0, s = r - u | 0, t = s >>> 0 > (n + 40 | 0) >>> 0, !((u | 0) == (-1 | 0) | t ^ 1 | u >>> 0 < r >>> 0 & ((u | 0) != (-1 | 0) & (r | 0) != (-1 | 0)) ^ 1)) : 0) {
        h = t ? s : b;g = u;v = 135;
      }if ((v | 0) == 135) {
        b = (c[2792] | 0) + h | 0;c[2792] = b;if (b >>> 0 > (c[2793] | 0) >>> 0) c[2793] = b;j = c[2690] | 0;do if (j) {
          b = 11184;while (1) {
            a = c[b >> 2] | 0;d = b + 4 | 0;e = c[d >> 2] | 0;if ((g | 0) == (a + e | 0)) {
              v = 145;break;
            }f = c[b + 8 >> 2] | 0;if (!f) break;else b = f;
          }if (((v | 0) == 145 ? (c[b + 12 >> 2] & 8 | 0) == 0 : 0) ? j >>> 0 < g >>> 0 & j >>> 0 >= a >>> 0 : 0) {
            c[d >> 2] = e + h;w = j + 8 | 0;w = (w & 7 | 0) == 0 ? 0 : 0 - w & 7;v = j + w | 0;w = (c[2687] | 0) + (h - w) | 0;c[2690] = v;c[2687] = w;c[v + 4 >> 2] = w | 1;c[v + w + 4 >> 2] = 40;c[2691] = c[2806];break;
          }if (g >>> 0 < (c[2688] | 0) >>> 0) c[2688] = g;d = g + h | 0;b = 11184;while (1) {
            if ((c[b >> 2] | 0) == (d | 0)) {
              v = 153;break;
            }a = c[b + 8 >> 2] | 0;if (!a) break;else b = a;
          }if ((v | 0) == 153 ? (c[b + 12 >> 2] & 8 | 0) == 0 : 0) {
            c[b >> 2] = g;m = b + 4 | 0;c[m >> 2] = (c[m >> 2] | 0) + h;m = g + 8 | 0;m = g + ((m & 7 | 0) == 0 ? 0 : 0 - m & 7) | 0;b = d + 8 | 0;b = d + ((b & 7 | 0) == 0 ? 0 : 0 - b & 7) | 0;k = m + n | 0;i = b - m - n | 0;c[m + 4 >> 2] = n | 3;do if ((b | 0) != (j | 0)) {
              if ((b | 0) == (c[2689] | 0)) {
                w = (c[2686] | 0) + i | 0;c[2686] = w;c[2689] = k;c[k + 4 >> 2] = w | 1;c[k + w >> 2] = w;break;
              }a = c[b + 4 >> 2] | 0;if ((a & 3 | 0) == 1) {
                h = a & -8;e = a >>> 3;d: do if (a >>> 0 < 256) {
                  a = c[b + 8 >> 2] | 0;d = c[b + 12 >> 2] | 0;if ((d | 0) == (a | 0)) {
                    c[2684] = c[2684] & ~(1 << e);break;
                  } else {
                    c[a + 12 >> 2] = d;c[d + 8 >> 2] = a;break;
                  }
                } else {
                  g = c[b + 24 >> 2] | 0;a = c[b + 12 >> 2] | 0;do if ((a | 0) == (b | 0)) {
                    e = b + 16 | 0;d = e + 4 | 0;a = c[d >> 2] | 0;if (!a) {
                      a = c[e >> 2] | 0;if (!a) {
                        a = 0;break;
                      } else d = e;
                    }while (1) {
                      e = a + 20 | 0;f = c[e >> 2] | 0;if (f | 0) {
                        a = f;d = e;continue;
                      }e = a + 16 | 0;f = c[e >> 2] | 0;if (!f) break;else {
                        a = f;d = e;
                      }
                    }c[d >> 2] = 0;
                  } else {
                    w = c[b + 8 >> 2] | 0;c[w + 12 >> 2] = a;c[a + 8 >> 2] = w;
                  } while (0);if (!g) break;d = c[b + 28 >> 2] | 0;e = 11040 + (d << 2) | 0;do if ((b | 0) != (c[e >> 2] | 0)) {
                    c[g + 16 + (((c[g + 16 >> 2] | 0) != (b | 0) & 1) << 2) >> 2] = a;if (!a) break d;
                  } else {
                    c[e >> 2] = a;if (a | 0) break;c[2685] = c[2685] & ~(1 << d);break d;
                  } while (0);c[a + 24 >> 2] = g;d = b + 16 | 0;e = c[d >> 2] | 0;if (e | 0) {
                    c[a + 16 >> 2] = e;c[e + 24 >> 2] = a;
                  }d = c[d + 4 >> 2] | 0;if (!d) break;c[a + 20 >> 2] = d;c[d + 24 >> 2] = a;
                } while (0);b = b + h | 0;f = h + i | 0;
              } else f = i;b = b + 4 | 0;c[b >> 2] = c[b >> 2] & -2;c[k + 4 >> 2] = f | 1;c[k + f >> 2] = f;b = f >>> 3;if (f >>> 0 < 256) {
                d = 10776 + (b << 1 << 2) | 0;a = c[2684] | 0;b = 1 << b;if (!(a & b)) {
                  c[2684] = a | b;b = d;a = d + 8 | 0;
                } else {
                  a = d + 8 | 0;b = c[a >> 2] | 0;
                }c[a >> 2] = k;c[b + 12 >> 2] = k;c[k + 8 >> 2] = b;c[k + 12 >> 2] = d;break;
              }b = f >>> 8;do if (!b) b = 0;else {
                if (f >>> 0 > 16777215) {
                  b = 31;break;
                }v = (b + 1048320 | 0) >>> 16 & 8;w = b << v;u = (w + 520192 | 0) >>> 16 & 4;w = w << u;b = (w + 245760 | 0) >>> 16 & 2;b = 14 - (u | v | b) + (w << b >>> 15) | 0;b = f >>> (b + 7 | 0) & 1 | b << 1;
              } while (0);e = 11040 + (b << 2) | 0;c[k + 28 >> 2] = b;a = k + 16 | 0;c[a + 4 >> 2] = 0;c[a >> 2] = 0;a = c[2685] | 0;d = 1 << b;if (!(a & d)) {
                c[2685] = a | d;c[e >> 2] = k;c[k + 24 >> 2] = e;c[k + 12 >> 2] = k;c[k + 8 >> 2] = k;break;
              }a = f << ((b | 0) == 31 ? 0 : 25 - (b >>> 1) | 0);d = c[e >> 2] | 0;while (1) {
                if ((c[d + 4 >> 2] & -8 | 0) == (f | 0)) {
                  v = 194;break;
                }e = d + 16 + (a >>> 31 << 2) | 0;b = c[e >> 2] | 0;if (!b) {
                  v = 193;break;
                } else {
                  a = a << 1;d = b;
                }
              }if ((v | 0) == 193) {
                c[e >> 2] = k;c[k + 24 >> 2] = d;c[k + 12 >> 2] = k;c[k + 8 >> 2] = k;break;
              } else if ((v | 0) == 194) {
                v = d + 8 | 0;w = c[v >> 2] | 0;c[w + 12 >> 2] = k;c[v >> 2] = k;c[k + 8 >> 2] = w;c[k + 12 >> 2] = d;c[k + 24 >> 2] = 0;break;
              }
            } else {
              w = (c[2687] | 0) + i | 0;c[2687] = w;c[2690] = k;c[k + 4 >> 2] = w | 1;
            } while (0);w = m + 8 | 0;l = x;return w | 0;
          }b = 11184;while (1) {
            a = c[b >> 2] | 0;if (a >>> 0 <= j >>> 0 ? (w = a + (c[b + 4 >> 2] | 0) | 0, w >>> 0 > j >>> 0) : 0) break;b = c[b + 8 >> 2] | 0;
          }f = w + -47 | 0;a = f + 8 | 0;a = f + ((a & 7 | 0) == 0 ? 0 : 0 - a & 7) | 0;f = j + 16 | 0;a = a >>> 0 < f >>> 0 ? j : a;b = a + 8 | 0;d = g + 8 | 0;d = (d & 7 | 0) == 0 ? 0 : 0 - d & 7;v = g + d | 0;d = h + -40 - d | 0;c[2690] = v;c[2687] = d;c[v + 4 >> 2] = d | 1;c[v + d + 4 >> 2] = 40;c[2691] = c[2806];d = a + 4 | 0;c[d >> 2] = 27;c[b >> 2] = c[2796];c[b + 4 >> 2] = c[2797];c[b + 8 >> 2] = c[2798];c[b + 12 >> 2] = c[2799];c[2796] = g;c[2797] = h;c[2799] = 0;c[2798] = b;b = a + 24 | 0;do {
            v = b;b = b + 4 | 0;c[b >> 2] = 7;
          } while ((v + 8 | 0) >>> 0 < w >>> 0);if ((a | 0) != (j | 0)) {
            g = a - j | 0;c[d >> 2] = c[d >> 2] & -2;c[j + 4 >> 2] = g | 1;c[a >> 2] = g;b = g >>> 3;if (g >>> 0 < 256) {
              d = 10776 + (b << 1 << 2) | 0;a = c[2684] | 0;b = 1 << b;if (!(a & b)) {
                c[2684] = a | b;b = d;a = d + 8 | 0;
              } else {
                a = d + 8 | 0;b = c[a >> 2] | 0;
              }c[a >> 2] = j;c[b + 12 >> 2] = j;c[j + 8 >> 2] = b;c[j + 12 >> 2] = d;break;
            }b = g >>> 8;if (b) {
              if (g >>> 0 > 16777215) d = 31;else {
                v = (b + 1048320 | 0) >>> 16 & 8;w = b << v;u = (w + 520192 | 0) >>> 16 & 4;w = w << u;d = (w + 245760 | 0) >>> 16 & 2;d = 14 - (u | v | d) + (w << d >>> 15) | 0;d = g >>> (d + 7 | 0) & 1 | d << 1;
              }
            } else d = 0;e = 11040 + (d << 2) | 0;c[j + 28 >> 2] = d;c[j + 20 >> 2] = 0;c[f >> 2] = 0;b = c[2685] | 0;a = 1 << d;if (!(b & a)) {
              c[2685] = b | a;c[e >> 2] = j;c[j + 24 >> 2] = e;c[j + 12 >> 2] = j;c[j + 8 >> 2] = j;break;
            }a = g << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0);d = c[e >> 2] | 0;while (1) {
              if ((c[d + 4 >> 2] & -8 | 0) == (g | 0)) {
                v = 216;break;
              }e = d + 16 + (a >>> 31 << 2) | 0;b = c[e >> 2] | 0;if (!b) {
                v = 215;break;
              } else {
                a = a << 1;d = b;
              }
            }if ((v | 0) == 215) {
              c[e >> 2] = j;c[j + 24 >> 2] = d;c[j + 12 >> 2] = j;c[j + 8 >> 2] = j;break;
            } else if ((v | 0) == 216) {
              v = d + 8 | 0;w = c[v >> 2] | 0;c[w + 12 >> 2] = j;c[v >> 2] = j;c[j + 8 >> 2] = w;c[j + 12 >> 2] = d;c[j + 24 >> 2] = 0;break;
            }
          }
        } else {
          w = c[2688] | 0;if ((w | 0) == 0 | g >>> 0 < w >>> 0) c[2688] = g;c[2796] = g;c[2797] = h;c[2799] = 0;c[2693] = c[2802];c[2692] = -1;b = 0;do {
            w = 10776 + (b << 1 << 2) | 0;c[w + 12 >> 2] = w;c[w + 8 >> 2] = w;b = b + 1 | 0;
          } while ((b | 0) != 32);w = g + 8 | 0;w = (w & 7 | 0) == 0 ? 0 : 0 - w & 7;v = g + w | 0;w = h + -40 - w | 0;c[2690] = v;c[2687] = w;c[v + 4 >> 2] = w | 1;c[v + w + 4 >> 2] = 40;c[2691] = c[2806];
        } while (0);b = c[2687] | 0;if (b >>> 0 > n >>> 0) {
          u = b - n | 0;c[2687] = u;w = c[2690] | 0;v = w + n | 0;c[2690] = v;c[v + 4 >> 2] = u | 1;c[w + 4 >> 2] = n | 3;w = w + 8 | 0;l = x;return w | 0;
        }
      }c[(Ok() | 0) >> 2] = 12;w = 0;l = x;return w | 0;
    }function Fk(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0;if (!a) return;d = a + -8 | 0;f = c[2688] | 0;a = c[a + -4 >> 2] | 0;b = a & -8;j = d + b | 0;do if (!(a & 1)) {
        e = c[d >> 2] | 0;if (!(a & 3)) return;h = d + (0 - e) | 0;g = e + b | 0;if (h >>> 0 < f >>> 0) return;if ((h | 0) == (c[2689] | 0)) {
          a = j + 4 | 0;b = c[a >> 2] | 0;if ((b & 3 | 0) != 3) {
            i = h;b = g;break;
          }c[2686] = g;c[a >> 2] = b & -2;c[h + 4 >> 2] = g | 1;c[h + g >> 2] = g;return;
        }d = e >>> 3;if (e >>> 0 < 256) {
          a = c[h + 8 >> 2] | 0;b = c[h + 12 >> 2] | 0;if ((b | 0) == (a | 0)) {
            c[2684] = c[2684] & ~(1 << d);i = h;b = g;break;
          } else {
            c[a + 12 >> 2] = b;c[b + 8 >> 2] = a;i = h;b = g;break;
          }
        }f = c[h + 24 >> 2] | 0;a = c[h + 12 >> 2] | 0;do if ((a | 0) == (h | 0)) {
          d = h + 16 | 0;b = d + 4 | 0;a = c[b >> 2] | 0;if (!a) {
            a = c[d >> 2] | 0;if (!a) {
              a = 0;break;
            } else b = d;
          }while (1) {
            d = a + 20 | 0;e = c[d >> 2] | 0;if (e | 0) {
              a = e;b = d;continue;
            }d = a + 16 | 0;e = c[d >> 2] | 0;if (!e) break;else {
              a = e;b = d;
            }
          }c[b >> 2] = 0;
        } else {
          i = c[h + 8 >> 2] | 0;c[i + 12 >> 2] = a;c[a + 8 >> 2] = i;
        } while (0);if (f) {
          b = c[h + 28 >> 2] | 0;d = 11040 + (b << 2) | 0;if ((h | 0) == (c[d >> 2] | 0)) {
            c[d >> 2] = a;if (!a) {
              c[2685] = c[2685] & ~(1 << b);i = h;b = g;break;
            }
          } else {
            c[f + 16 + (((c[f + 16 >> 2] | 0) != (h | 0) & 1) << 2) >> 2] = a;if (!a) {
              i = h;b = g;break;
            }
          }c[a + 24 >> 2] = f;b = h + 16 | 0;d = c[b >> 2] | 0;if (d | 0) {
            c[a + 16 >> 2] = d;c[d + 24 >> 2] = a;
          }b = c[b + 4 >> 2] | 0;if (b) {
            c[a + 20 >> 2] = b;c[b + 24 >> 2] = a;i = h;b = g;
          } else {
            i = h;b = g;
          }
        } else {
          i = h;b = g;
        }
      } else {
        i = d;h = d;
      } while (0);if (h >>> 0 >= j >>> 0) return;a = j + 4 | 0;e = c[a >> 2] | 0;if (!(e & 1)) return;if (!(e & 2)) {
        a = c[2689] | 0;if ((j | 0) == (c[2690] | 0)) {
          j = (c[2687] | 0) + b | 0;c[2687] = j;c[2690] = i;c[i + 4 >> 2] = j | 1;if ((i | 0) != (a | 0)) return;c[2689] = 0;c[2686] = 0;return;
        }if ((j | 0) == (a | 0)) {
          j = (c[2686] | 0) + b | 0;c[2686] = j;c[2689] = h;c[i + 4 >> 2] = j | 1;c[h + j >> 2] = j;return;
        }f = (e & -8) + b | 0;d = e >>> 3;do if (e >>> 0 < 256) {
          b = c[j + 8 >> 2] | 0;a = c[j + 12 >> 2] | 0;if ((a | 0) == (b | 0)) {
            c[2684] = c[2684] & ~(1 << d);break;
          } else {
            c[b + 12 >> 2] = a;c[a + 8 >> 2] = b;break;
          }
        } else {
          g = c[j + 24 >> 2] | 0;a = c[j + 12 >> 2] | 0;do if ((a | 0) == (j | 0)) {
            d = j + 16 | 0;b = d + 4 | 0;a = c[b >> 2] | 0;if (!a) {
              a = c[d >> 2] | 0;if (!a) {
                d = 0;break;
              } else b = d;
            }while (1) {
              d = a + 20 | 0;e = c[d >> 2] | 0;if (e | 0) {
                a = e;b = d;continue;
              }d = a + 16 | 0;e = c[d >> 2] | 0;if (!e) break;else {
                a = e;b = d;
              }
            }c[b >> 2] = 0;d = a;
          } else {
            d = c[j + 8 >> 2] | 0;c[d + 12 >> 2] = a;c[a + 8 >> 2] = d;d = a;
          } while (0);if (g | 0) {
            a = c[j + 28 >> 2] | 0;b = 11040 + (a << 2) | 0;if ((j | 0) == (c[b >> 2] | 0)) {
              c[b >> 2] = d;if (!d) {
                c[2685] = c[2685] & ~(1 << a);break;
              }
            } else {
              c[g + 16 + (((c[g + 16 >> 2] | 0) != (j | 0) & 1) << 2) >> 2] = d;if (!d) break;
            }c[d + 24 >> 2] = g;a = j + 16 | 0;b = c[a >> 2] | 0;if (b | 0) {
              c[d + 16 >> 2] = b;c[b + 24 >> 2] = d;
            }a = c[a + 4 >> 2] | 0;if (a | 0) {
              c[d + 20 >> 2] = a;c[a + 24 >> 2] = d;
            }
          }
        } while (0);c[i + 4 >> 2] = f | 1;c[h + f >> 2] = f;if ((i | 0) == (c[2689] | 0)) {
          c[2686] = f;return;
        }
      } else {
        c[a >> 2] = e & -2;c[i + 4 >> 2] = b | 1;c[h + b >> 2] = b;f = b;
      }a = f >>> 3;if (f >>> 0 < 256) {
        d = 10776 + (a << 1 << 2) | 0;b = c[2684] | 0;a = 1 << a;if (!(b & a)) {
          c[2684] = b | a;a = d;b = d + 8 | 0;
        } else {
          b = d + 8 | 0;a = c[b >> 2] | 0;
        }c[b >> 2] = i;c[a + 12 >> 2] = i;c[i + 8 >> 2] = a;c[i + 12 >> 2] = d;return;
      }a = f >>> 8;if (a) {
        if (f >>> 0 > 16777215) a = 31;else {
          h = (a + 1048320 | 0) >>> 16 & 8;j = a << h;g = (j + 520192 | 0) >>> 16 & 4;j = j << g;a = (j + 245760 | 0) >>> 16 & 2;a = 14 - (g | h | a) + (j << a >>> 15) | 0;a = f >>> (a + 7 | 0) & 1 | a << 1;
        }
      } else a = 0;e = 11040 + (a << 2) | 0;c[i + 28 >> 2] = a;c[i + 20 >> 2] = 0;c[i + 16 >> 2] = 0;b = c[2685] | 0;d = 1 << a;do if (b & d) {
        b = f << ((a | 0) == 31 ? 0 : 25 - (a >>> 1) | 0);d = c[e >> 2] | 0;while (1) {
          if ((c[d + 4 >> 2] & -8 | 0) == (f | 0)) {
            a = 73;break;
          }e = d + 16 + (b >>> 31 << 2) | 0;a = c[e >> 2] | 0;if (!a) {
            a = 72;break;
          } else {
            b = b << 1;d = a;
          }
        }if ((a | 0) == 72) {
          c[e >> 2] = i;c[i + 24 >> 2] = d;c[i + 12 >> 2] = i;c[i + 8 >> 2] = i;break;
        } else if ((a | 0) == 73) {
          h = d + 8 | 0;j = c[h >> 2] | 0;c[j + 12 >> 2] = i;c[h >> 2] = i;c[i + 8 >> 2] = j;c[i + 12 >> 2] = d;c[i + 24 >> 2] = 0;break;
        }
      } else {
        c[2685] = b | d;c[e >> 2] = i;c[i + 24 >> 2] = e;c[i + 12 >> 2] = i;c[i + 8 >> 2] = i;
      } while (0);j = (c[2692] | 0) + -1 | 0;c[2692] = j;if (!j) a = 11192;else return;while (1) {
        a = c[a >> 2] | 0;if (!a) break;else a = a + 8 | 0;
      }c[2692] = -1;return;
    }function Gk(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;if (!a) {
        b = Ek(b) | 0;return b | 0;
      }if (b >>> 0 > 4294967231) {
        c[(Ok() | 0) >> 2] = 12;b = 0;return b | 0;
      }d = Hk(a + -8 | 0, b >>> 0 < 11 ? 16 : b + 11 & -8) | 0;if (d | 0) {
        b = d + 8 | 0;return b | 0;
      }d = Ek(b) | 0;if (!d) {
        b = 0;return b | 0;
      }e = c[a + -4 >> 2] | 0;e = (e & -8) - ((e & 3 | 0) == 0 ? 8 : 4) | 0;cm(d | 0, a | 0, (e >>> 0 < b >>> 0 ? e : b) | 0) | 0;Fk(a);b = d;return b | 0;
    }function Hk(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0;m = a + 4 | 0;l = c[m >> 2] | 0;d = l & -8;i = a + d | 0;if (!(l & 3)) {
        if (b >>> 0 < 256) {
          a = 0;return a | 0;
        }if (d >>> 0 >= (b + 4 | 0) >>> 0 ? (d - b | 0) >>> 0 <= c[2804] << 1 >>> 0 : 0) return a | 0;a = 0;return a | 0;
      }if (d >>> 0 >= b >>> 0) {
        d = d - b | 0;if (d >>> 0 <= 15) return a | 0;k = a + b | 0;c[m >> 2] = l & 1 | b | 2;c[k + 4 >> 2] = d | 3;m = k + d + 4 | 0;c[m >> 2] = c[m >> 2] | 1;Ik(k, d);return a | 0;
      }if ((i | 0) == (c[2690] | 0)) {
        k = (c[2687] | 0) + d | 0;d = k - b | 0;e = a + b | 0;if (k >>> 0 <= b >>> 0) {
          a = 0;return a | 0;
        }c[m >> 2] = l & 1 | b | 2;c[e + 4 >> 2] = d | 1;c[2690] = e;c[2687] = d;return a | 0;
      }if ((i | 0) == (c[2689] | 0)) {
        f = (c[2686] | 0) + d | 0;if (f >>> 0 < b >>> 0) {
          a = 0;return a | 0;
        }d = f - b | 0;e = l & 1;if (d >>> 0 > 15) {
          l = a + b | 0;k = l + d | 0;c[m >> 2] = e | b | 2;c[l + 4 >> 2] = d | 1;c[k >> 2] = d;e = k + 4 | 0;c[e >> 2] = c[e >> 2] & -2;e = l;
        } else {
          c[m >> 2] = e | f | 2;e = a + f + 4 | 0;c[e >> 2] = c[e >> 2] | 1;e = 0;d = 0;
        }c[2686] = d;c[2689] = e;return a | 0;
      }e = c[i + 4 >> 2] | 0;if (e & 2 | 0) {
        a = 0;return a | 0;
      }j = (e & -8) + d | 0;if (j >>> 0 < b >>> 0) {
        a = 0;return a | 0;
      }k = j - b | 0;f = e >>> 3;do if (e >>> 0 < 256) {
        e = c[i + 8 >> 2] | 0;d = c[i + 12 >> 2] | 0;if ((d | 0) == (e | 0)) {
          c[2684] = c[2684] & ~(1 << f);break;
        } else {
          c[e + 12 >> 2] = d;c[d + 8 >> 2] = e;break;
        }
      } else {
        h = c[i + 24 >> 2] | 0;d = c[i + 12 >> 2] | 0;do if ((d | 0) == (i | 0)) {
          f = i + 16 | 0;e = f + 4 | 0;d = c[e >> 2] | 0;if (!d) {
            d = c[f >> 2] | 0;if (!d) {
              f = 0;break;
            } else g = f;
          } else g = e;while (1) {
            f = d + 20 | 0;e = c[f >> 2] | 0;if (e | 0) {
              d = e;g = f;continue;
            }e = d + 16 | 0;f = c[e >> 2] | 0;if (!f) break;else {
              d = f;g = e;
            }
          }c[g >> 2] = 0;f = d;
        } else {
          f = c[i + 8 >> 2] | 0;c[f + 12 >> 2] = d;c[d + 8 >> 2] = f;f = d;
        } while (0);if (h | 0) {
          d = c[i + 28 >> 2] | 0;e = 11040 + (d << 2) | 0;if ((i | 0) == (c[e >> 2] | 0)) {
            c[e >> 2] = f;if (!f) {
              c[2685] = c[2685] & ~(1 << d);break;
            }
          } else {
            c[h + 16 + (((c[h + 16 >> 2] | 0) != (i | 0) & 1) << 2) >> 2] = f;if (!f) break;
          }c[f + 24 >> 2] = h;d = i + 16 | 0;e = c[d >> 2] | 0;if (e | 0) {
            c[f + 16 >> 2] = e;c[e + 24 >> 2] = f;
          }d = c[d + 4 >> 2] | 0;if (d | 0) {
            c[f + 20 >> 2] = d;c[d + 24 >> 2] = f;
          }
        }
      } while (0);d = l & 1;if (k >>> 0 < 16) {
        c[m >> 2] = j | d | 2;m = a + j + 4 | 0;c[m >> 2] = c[m >> 2] | 1;return a | 0;
      } else {
        l = a + b | 0;c[m >> 2] = d | b | 2;c[l + 4 >> 2] = k | 3;m = l + k + 4 | 0;c[m >> 2] = c[m >> 2] | 1;Ik(l, k);return a | 0;
      }return 0;
    }function Ik(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0;j = a + b | 0;d = c[a + 4 >> 2] | 0;do if (!(d & 1)) {
        e = c[a >> 2] | 0;if (!(d & 3)) return;g = a + (0 - e) | 0;h = e + b | 0;if ((g | 0) == (c[2689] | 0)) {
          a = j + 4 | 0;d = c[a >> 2] | 0;if ((d & 3 | 0) != 3) {
            i = g;d = h;break;
          }c[2686] = h;c[a >> 2] = d & -2;c[g + 4 >> 2] = h | 1;c[g + h >> 2] = h;return;
        }b = e >>> 3;if (e >>> 0 < 256) {
          a = c[g + 8 >> 2] | 0;d = c[g + 12 >> 2] | 0;if ((d | 0) == (a | 0)) {
            c[2684] = c[2684] & ~(1 << b);i = g;d = h;break;
          } else {
            c[a + 12 >> 2] = d;c[d + 8 >> 2] = a;i = g;d = h;break;
          }
        }f = c[g + 24 >> 2] | 0;a = c[g + 12 >> 2] | 0;do if ((a | 0) == (g | 0)) {
          b = g + 16 | 0;d = b + 4 | 0;a = c[d >> 2] | 0;if (!a) {
            a = c[b >> 2] | 0;if (!a) {
              a = 0;break;
            } else d = b;
          }while (1) {
            b = a + 20 | 0;e = c[b >> 2] | 0;if (e | 0) {
              a = e;d = b;continue;
            }b = a + 16 | 0;e = c[b >> 2] | 0;if (!e) break;else {
              a = e;d = b;
            }
          }c[d >> 2] = 0;
        } else {
          i = c[g + 8 >> 2] | 0;c[i + 12 >> 2] = a;c[a + 8 >> 2] = i;
        } while (0);if (f) {
          d = c[g + 28 >> 2] | 0;b = 11040 + (d << 2) | 0;if ((g | 0) == (c[b >> 2] | 0)) {
            c[b >> 2] = a;if (!a) {
              c[2685] = c[2685] & ~(1 << d);i = g;d = h;break;
            }
          } else {
            c[f + 16 + (((c[f + 16 >> 2] | 0) != (g | 0) & 1) << 2) >> 2] = a;if (!a) {
              i = g;d = h;break;
            }
          }c[a + 24 >> 2] = f;d = g + 16 | 0;b = c[d >> 2] | 0;if (b | 0) {
            c[a + 16 >> 2] = b;c[b + 24 >> 2] = a;
          }d = c[d + 4 >> 2] | 0;if (d) {
            c[a + 20 >> 2] = d;c[d + 24 >> 2] = a;i = g;d = h;
          } else {
            i = g;d = h;
          }
        } else {
          i = g;d = h;
        }
      } else {
        i = a;d = b;
      } while (0);a = j + 4 | 0;e = c[a >> 2] | 0;if (!(e & 2)) {
        a = c[2689] | 0;if ((j | 0) == (c[2690] | 0)) {
          j = (c[2687] | 0) + d | 0;c[2687] = j;c[2690] = i;c[i + 4 >> 2] = j | 1;if ((i | 0) != (a | 0)) return;c[2689] = 0;c[2686] = 0;return;
        }if ((j | 0) == (a | 0)) {
          j = (c[2686] | 0) + d | 0;c[2686] = j;c[2689] = i;c[i + 4 >> 2] = j | 1;c[i + j >> 2] = j;return;
        }g = (e & -8) + d | 0;b = e >>> 3;do if (e >>> 0 < 256) {
          d = c[j + 8 >> 2] | 0;a = c[j + 12 >> 2] | 0;if ((a | 0) == (d | 0)) {
            c[2684] = c[2684] & ~(1 << b);break;
          } else {
            c[d + 12 >> 2] = a;c[a + 8 >> 2] = d;break;
          }
        } else {
          f = c[j + 24 >> 2] | 0;a = c[j + 12 >> 2] | 0;do if ((a | 0) == (j | 0)) {
            b = j + 16 | 0;d = b + 4 | 0;a = c[d >> 2] | 0;if (!a) {
              a = c[b >> 2] | 0;if (!a) {
                b = 0;break;
              } else d = b;
            }while (1) {
              b = a + 20 | 0;e = c[b >> 2] | 0;if (e | 0) {
                a = e;d = b;continue;
              }b = a + 16 | 0;e = c[b >> 2] | 0;if (!e) break;else {
                a = e;d = b;
              }
            }c[d >> 2] = 0;b = a;
          } else {
            b = c[j + 8 >> 2] | 0;c[b + 12 >> 2] = a;c[a + 8 >> 2] = b;b = a;
          } while (0);if (f | 0) {
            a = c[j + 28 >> 2] | 0;d = 11040 + (a << 2) | 0;if ((j | 0) == (c[d >> 2] | 0)) {
              c[d >> 2] = b;if (!b) {
                c[2685] = c[2685] & ~(1 << a);break;
              }
            } else {
              c[f + 16 + (((c[f + 16 >> 2] | 0) != (j | 0) & 1) << 2) >> 2] = b;if (!b) break;
            }c[b + 24 >> 2] = f;a = j + 16 | 0;d = c[a >> 2] | 0;if (d | 0) {
              c[b + 16 >> 2] = d;c[d + 24 >> 2] = b;
            }a = c[a + 4 >> 2] | 0;if (a | 0) {
              c[b + 20 >> 2] = a;c[a + 24 >> 2] = b;
            }
          }
        } while (0);c[i + 4 >> 2] = g | 1;c[i + g >> 2] = g;if ((i | 0) == (c[2689] | 0)) {
          c[2686] = g;return;
        } else d = g;
      } else {
        c[a >> 2] = e & -2;c[i + 4 >> 2] = d | 1;c[i + d >> 2] = d;
      }a = d >>> 3;if (d >>> 0 < 256) {
        b = 10776 + (a << 1 << 2) | 0;d = c[2684] | 0;a = 1 << a;if (!(d & a)) {
          c[2684] = d | a;a = b;d = b + 8 | 0;
        } else {
          d = b + 8 | 0;a = c[d >> 2] | 0;
        }c[d >> 2] = i;c[a + 12 >> 2] = i;c[i + 8 >> 2] = a;c[i + 12 >> 2] = b;return;
      }a = d >>> 8;if (a) {
        if (d >>> 0 > 16777215) a = 31;else {
          h = (a + 1048320 | 0) >>> 16 & 8;j = a << h;g = (j + 520192 | 0) >>> 16 & 4;j = j << g;a = (j + 245760 | 0) >>> 16 & 2;a = 14 - (g | h | a) + (j << a >>> 15) | 0;a = d >>> (a + 7 | 0) & 1 | a << 1;
        }
      } else a = 0;f = 11040 + (a << 2) | 0;c[i + 28 >> 2] = a;c[i + 20 >> 2] = 0;c[i + 16 >> 2] = 0;b = c[2685] | 0;e = 1 << a;if (!(b & e)) {
        c[2685] = b | e;c[f >> 2] = i;c[i + 24 >> 2] = f;c[i + 12 >> 2] = i;c[i + 8 >> 2] = i;return;
      }b = d << ((a | 0) == 31 ? 0 : 25 - (a >>> 1) | 0);e = c[f >> 2] | 0;while (1) {
        if ((c[e + 4 >> 2] & -8 | 0) == (d | 0)) {
          a = 69;break;
        }f = e + 16 + (b >>> 31 << 2) | 0;a = c[f >> 2] | 0;if (!a) {
          a = 68;break;
        } else {
          b = b << 1;e = a;
        }
      }if ((a | 0) == 68) {
        c[f >> 2] = i;c[i + 24 >> 2] = e;c[i + 12 >> 2] = i;c[i + 8 >> 2] = i;return;
      } else if ((a | 0) == 69) {
        h = e + 8 | 0;j = c[h >> 2] | 0;c[j + 12 >> 2] = i;c[h >> 2] = i;c[i + 8 >> 2] = j;c[i + 12 >> 2] = e;c[i + 24 >> 2] = 0;return;
      }
    }function Jk() {
      return 11232;
    }function Kk(a) {
      a = a | 0;var b = 0,
          d = 0;b = l;l = l + 16 | 0;d = b;c[d >> 2] = Rk(c[a + 60 >> 2] | 0) | 0;a = Nk(ib(6, d | 0) | 0) | 0;l = b;return a | 0;
    }function Lk(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0;n = l;l = l + 48 | 0;k = n + 16 | 0;g = n;f = n + 32 | 0;i = a + 28 | 0;e = c[i >> 2] | 0;c[f >> 2] = e;j = a + 20 | 0;e = (c[j >> 2] | 0) - e | 0;c[f + 4 >> 2] = e;c[f + 8 >> 2] = b;c[f + 12 >> 2] = d;e = e + d | 0;h = a + 60 | 0;c[g >> 2] = c[h >> 2];c[g + 4 >> 2] = f;c[g + 8 >> 2] = 2;g = Nk(lb(146, g | 0) | 0) | 0;a: do if ((e | 0) != (g | 0)) {
        b = 2;while (1) {
          if ((g | 0) < 0) break;e = e - g | 0;p = c[f + 4 >> 2] | 0;o = g >>> 0 > p >>> 0;f = o ? f + 8 | 0 : f;b = (o << 31 >> 31) + b | 0;p = g - (o ? p : 0) | 0;c[f >> 2] = (c[f >> 2] | 0) + p;o = f + 4 | 0;c[o >> 2] = (c[o >> 2] | 0) - p;c[k >> 2] = c[h >> 2];c[k + 4 >> 2] = f;c[k + 8 >> 2] = b;g = Nk(lb(146, k | 0) | 0) | 0;if ((e | 0) == (g | 0)) {
            m = 3;break a;
          }
        }c[a + 16 >> 2] = 0;c[i >> 2] = 0;c[j >> 2] = 0;c[a >> 2] = c[a >> 2] | 32;if ((b | 0) == 2) d = 0;else d = d - (c[f + 4 >> 2] | 0) | 0;
      } else m = 3; while (0);if ((m | 0) == 3) {
        p = c[a + 44 >> 2] | 0;c[a + 16 >> 2] = p + (c[a + 48 >> 2] | 0);c[i >> 2] = p;c[j >> 2] = p;
      }l = n;return d | 0;
    }function Mk(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0;f = l;l = l + 32 | 0;g = f;e = f + 20 | 0;c[g >> 2] = c[a + 60 >> 2];c[g + 4 >> 2] = 0;c[g + 8 >> 2] = b;c[g + 12 >> 2] = e;c[g + 16 >> 2] = d;if ((Nk(kb(140, g | 0) | 0) | 0) < 0) {
        c[e >> 2] = -1;a = -1;
      } else a = c[e >> 2] | 0;l = f;return a | 0;
    }function Nk(a) {
      a = a | 0;if (a >>> 0 > 4294963200) {
        c[(Ok() | 0) >> 2] = 0 - a;a = -1;
      }return a | 0;
    }function Ok() {
      return (Pk() | 0) + 64 | 0;
    }function Pk() {
      return Qk() | 0;
    }function Qk() {
      return 2136;
    }function Rk(a) {
      a = a | 0;return a | 0;
    }function Sk(b, d, e) {
      b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0;g = l;l = l + 32 | 0;f = g;c[b + 36 >> 2] = 1;if ((c[b >> 2] & 64 | 0) == 0 ? (c[f >> 2] = c[b + 60 >> 2], c[f + 4 >> 2] = 21523, c[f + 8 >> 2] = g + 16, Za(54, f | 0) | 0) : 0) a[b + 75 >> 0] = -1;f = Lk(b, d, e) | 0;l = g;return f | 0;
    }function Tk(b) {
      b = b | 0;var d = 0,
          e = 0,
          f = 0;f = b;a: do if (!(f & 3)) e = 4;else {
        d = f;while (1) {
          if (!(a[b >> 0] | 0)) {
            b = d;break a;
          }b = b + 1 | 0;d = b;if (!(d & 3)) {
            e = 4;break;
          }
        }
      } while (0);if ((e | 0) == 4) {
        while (1) {
          d = c[b >> 2] | 0;if (!((d & -2139062144 ^ -2139062144) & d + -16843009)) b = b + 4 | 0;else break;
        }if ((d & 255) << 24 >> 24) do b = b + 1 | 0; while ((a[b >> 0] | 0) != 0);
      }return b - f | 0;
    }function Uk(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0;n = l;l = l + 128 | 0;g = n + 124 | 0;m = n;h = m;i = 2508;j = h + 124 | 0;do {
        c[h >> 2] = c[i >> 2];h = h + 4 | 0;i = i + 4 | 0;
      } while ((h | 0) < (j | 0));if ((d + -1 | 0) >>> 0 > 2147483646) {
        if (!d) {
          b = g;d = 1;k = 4;
        } else {
          c[(Ok() | 0) >> 2] = 75;d = -1;
        }
      } else k = 4;if ((k | 0) == 4) {
        k = -2 - b | 0;k = d >>> 0 > k >>> 0 ? k : d;c[m + 48 >> 2] = k;g = m + 20 | 0;c[g >> 2] = b;c[m + 44 >> 2] = b;d = b + k | 0;b = m + 16 | 0;c[b >> 2] = d;c[m + 28 >> 2] = d;d = Vk(m, e, f) | 0;if (k) {
          m = c[g >> 2] | 0;a[m + (((m | 0) == (c[b >> 2] | 0)) << 31 >> 31) >> 0] = 0;
        }
      }l = n;return d | 0;
    }function Vk(b, d, e) {
      b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0;s = l;l = l + 224 | 0;n = s + 120 | 0;o = s + 80 | 0;q = s;r = s + 136 | 0;f = o;g = f + 40 | 0;do {
        c[f >> 2] = 0;f = f + 4 | 0;
      } while ((f | 0) < (g | 0));c[n >> 2] = c[e >> 2];if ((Wk(0, d, n, q, o) | 0) < 0) e = -1;else {
        if ((c[b + 76 >> 2] | 0) > -1) p = Xk(b) | 0;else p = 0;e = c[b >> 2] | 0;m = e & 32;if ((a[b + 74 >> 0] | 0) < 1) c[b >> 2] = e & -33;f = b + 48 | 0;if (!(c[f >> 2] | 0)) {
          g = b + 44 | 0;h = c[g >> 2] | 0;c[g >> 2] = r;i = b + 28 | 0;c[i >> 2] = r;j = b + 20 | 0;c[j >> 2] = r;c[f >> 2] = 80;k = b + 16 | 0;c[k >> 2] = r + 80;e = Wk(b, d, n, q, o) | 0;if (h) {
            xb[c[b + 36 >> 2] & 15](b, 0, 0) | 0;e = (c[j >> 2] | 0) == 0 ? -1 : e;c[g >> 2] = h;c[f >> 2] = 0;c[k >> 2] = 0;c[i >> 2] = 0;c[j >> 2] = 0;
          }
        } else e = Wk(b, d, n, q, o) | 0;f = c[b >> 2] | 0;c[b >> 2] = f | m;if (p | 0) Yk(b);e = (f & 32 | 0) == 0 ? e : -1;
      }l = s;return e | 0;
    }function Wk(d, e, f, g, i) {
      d = d | 0;e = e | 0;f = f | 0;g = g | 0;i = i | 0;var j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0,
          u = 0,
          v = 0,
          w = 0,
          x = 0,
          y = 0,
          z = 0,
          B = 0,
          C = 0,
          D = 0,
          E = 0,
          F = 0,
          G = 0,
          H = 0;H = l;l = l + 64 | 0;D = H + 16 | 0;E = H;B = H + 24 | 0;F = H + 8 | 0;G = H + 20 | 0;c[D >> 2] = e;x = (d | 0) != 0;y = B + 40 | 0;z = y;B = B + 39 | 0;C = F + 4 | 0;k = 0;j = 0;p = 0;a: while (1) {
        do if ((j | 0) > -1) if ((k | 0) > (2147483647 - j | 0)) {
          c[(Ok() | 0) >> 2] = 75;j = -1;break;
        } else {
          j = k + j | 0;break;
        } while (0);k = a[e >> 0] | 0;if (!(k << 24 >> 24)) {
          w = 87;break;
        } else m = e;b: while (1) {
          switch (k << 24 >> 24) {case 37:
              {
                k = m;w = 9;break b;
              }case 0:
              {
                k = m;break b;
              }default:
              {}}v = m + 1 | 0;c[D >> 2] = v;k = a[v >> 0] | 0;m = v;
        }c: do if ((w | 0) == 9) while (1) {
          w = 0;if ((a[m + 1 >> 0] | 0) != 37) break c;k = k + 1 | 0;m = m + 2 | 0;c[D >> 2] = m;if ((a[m >> 0] | 0) == 37) w = 9;else break;
        } while (0);k = k - e | 0;if (x) Zk(d, e, k);if (k | 0) {
          e = m;continue;
        }n = m + 1 | 0;k = (a[n >> 0] | 0) + -48 | 0;if (k >>> 0 < 10) {
          v = (a[m + 2 >> 0] | 0) == 36;u = v ? k : -1;p = v ? 1 : p;n = v ? m + 3 | 0 : n;
        } else u = -1;c[D >> 2] = n;k = a[n >> 0] | 0;m = (k << 24 >> 24) + -32 | 0;d: do if (m >>> 0 < 32) {
          o = 0;q = k;while (1) {
            k = 1 << m;if (!(k & 75913)) {
              k = q;break d;
            }o = k | o;n = n + 1 | 0;c[D >> 2] = n;k = a[n >> 0] | 0;m = (k << 24 >> 24) + -32 | 0;if (m >>> 0 >= 32) break;else q = k;
          }
        } else o = 0; while (0);if (k << 24 >> 24 == 42) {
          m = n + 1 | 0;k = (a[m >> 0] | 0) + -48 | 0;if (k >>> 0 < 10 ? (a[n + 2 >> 0] | 0) == 36 : 0) {
            c[i + (k << 2) >> 2] = 10;k = c[g + ((a[m >> 0] | 0) + -48 << 3) >> 2] | 0;p = 1;n = n + 3 | 0;
          } else {
            if (p | 0) {
              j = -1;break;
            }if (x) {
              p = (c[f >> 2] | 0) + (4 - 1) & ~(4 - 1);k = c[p >> 2] | 0;c[f >> 2] = p + 4;p = 0;n = m;
            } else {
              k = 0;p = 0;n = m;
            }
          }c[D >> 2] = n;v = (k | 0) < 0;k = v ? 0 - k | 0 : k;o = v ? o | 8192 : o;
        } else {
          k = _k(D) | 0;if ((k | 0) < 0) {
            j = -1;break;
          }n = c[D >> 2] | 0;
        }do if ((a[n >> 0] | 0) == 46) {
          if ((a[n + 1 >> 0] | 0) != 42) {
            c[D >> 2] = n + 1;m = _k(D) | 0;n = c[D >> 2] | 0;break;
          }q = n + 2 | 0;m = (a[q >> 0] | 0) + -48 | 0;if (m >>> 0 < 10 ? (a[n + 3 >> 0] | 0) == 36 : 0) {
            c[i + (m << 2) >> 2] = 10;m = c[g + ((a[q >> 0] | 0) + -48 << 3) >> 2] | 0;n = n + 4 | 0;c[D >> 2] = n;break;
          }if (p | 0) {
            j = -1;break a;
          }if (x) {
            v = (c[f >> 2] | 0) + (4 - 1) & ~(4 - 1);m = c[v >> 2] | 0;c[f >> 2] = v + 4;
          } else m = 0;c[D >> 2] = q;n = q;
        } else m = -1; while (0);t = 0;while (1) {
          if (((a[n >> 0] | 0) + -65 | 0) >>> 0 > 57) {
            j = -1;break a;
          }v = n + 1 | 0;c[D >> 2] = v;q = a[(a[n >> 0] | 0) + -65 + (5796 + (t * 58 | 0)) >> 0] | 0;r = q & 255;if ((r + -1 | 0) >>> 0 < 8) {
            t = r;n = v;
          } else break;
        }if (!(q << 24 >> 24)) {
          j = -1;break;
        }s = (u | 0) > -1;do if (q << 24 >> 24 == 19) {
          if (s) {
            j = -1;break a;
          } else w = 49;
        } else {
          if (s) {
            c[i + (u << 2) >> 2] = r;s = g + (u << 3) | 0;u = c[s + 4 >> 2] | 0;w = E;c[w >> 2] = c[s >> 2];c[w + 4 >> 2] = u;w = 49;break;
          }if (!x) {
            j = 0;break a;
          }$k(E, r, f);
        } while (0);if ((w | 0) == 49 ? (w = 0, !x) : 0) {
          k = 0;e = v;continue;
        }n = a[n >> 0] | 0;n = (t | 0) != 0 & (n & 15 | 0) == 3 ? n & -33 : n;s = o & -65537;u = (o & 8192 | 0) == 0 ? o : s;e: do switch (n | 0) {case 110:
            switch ((t & 255) << 24 >> 24) {case 0:
                {
                  c[c[E >> 2] >> 2] = j;k = 0;e = v;continue a;
                }case 1:
                {
                  c[c[E >> 2] >> 2] = j;k = 0;e = v;continue a;
                }case 2:
                {
                  k = c[E >> 2] | 0;c[k >> 2] = j;c[k + 4 >> 2] = ((j | 0) < 0) << 31 >> 31;k = 0;e = v;continue a;
                }case 3:
                {
                  b[c[E >> 2] >> 1] = j;k = 0;e = v;continue a;
                }case 4:
                {
                  a[c[E >> 2] >> 0] = j;k = 0;e = v;continue a;
                }case 6:
                {
                  c[c[E >> 2] >> 2] = j;k = 0;e = v;continue a;
                }case 7:
                {
                  k = c[E >> 2] | 0;c[k >> 2] = j;c[k + 4 >> 2] = ((j | 0) < 0) << 31 >> 31;k = 0;e = v;continue a;
                }default:
                {
                  k = 0;e = v;continue a;
                }}case 112:
            {
              n = 120;m = m >>> 0 > 8 ? m : 8;e = u | 8;w = 61;break;
            }case 88:case 120:
            {
              e = u;w = 61;break;
            }case 111:
            {
              n = E;e = c[n >> 2] | 0;n = c[n + 4 >> 2] | 0;r = bl(e, n, y) | 0;s = z - r | 0;o = 0;q = 6260;m = (u & 8 | 0) == 0 | (m | 0) > (s | 0) ? m : s + 1 | 0;s = u;w = 67;break;
            }case 105:case 100:
            {
              n = E;e = c[n >> 2] | 0;n = c[n + 4 >> 2] | 0;if ((n | 0) < 0) {
                e = Zl(0, 0, e | 0, n | 0) | 0;n = A;o = E;c[o >> 2] = e;c[o + 4 >> 2] = n;o = 1;q = 6260;w = 66;break e;
              } else {
                o = (u & 2049 | 0) != 0 & 1;q = (u & 2048 | 0) == 0 ? (u & 1 | 0) == 0 ? 6260 : 6262 : 6261;w = 66;break e;
              }
            }case 117:
            {
              n = E;o = 0;q = 6260;e = c[n >> 2] | 0;n = c[n + 4 >> 2] | 0;w = 66;break;
            }case 99:
            {
              a[B >> 0] = c[E >> 2];e = B;o = 0;q = 6260;r = y;n = 1;m = s;break;
            }case 109:
            {
              n = dl(c[(Ok() | 0) >> 2] | 0) | 0;w = 71;break;
            }case 115:
            {
              n = c[E >> 2] | 0;n = n | 0 ? n : 6270;w = 71;break;
            }case 67:
            {
              c[F >> 2] = c[E >> 2];c[C >> 2] = 0;c[E >> 2] = F;r = -1;n = F;w = 75;break;
            }case 83:
            {
              e = c[E >> 2] | 0;if (!m) {
                fl(d, 32, k, 0, u);e = 0;w = 84;
              } else {
                r = m;n = e;w = 75;
              }break;
            }case 65:case 71:case 70:case 69:case 97:case 103:case 102:case 101:
            {
              k = hl(d, +h[E >> 3], k, m, u, n) | 0;e = v;continue a;
            }default:
            {
              o = 0;q = 6260;r = y;n = m;m = u;
            }} while (0);f: do if ((w | 0) == 61) {
          u = E;t = c[u >> 2] | 0;u = c[u + 4 >> 2] | 0;r = al(t, u, y, n & 32) | 0;q = (e & 8 | 0) == 0 | (t | 0) == 0 & (u | 0) == 0;o = q ? 0 : 2;q = q ? 6260 : 6260 + (n >> 4) | 0;s = e;e = t;n = u;w = 67;
        } else if ((w | 0) == 66) {
          r = cl(e, n, y) | 0;s = u;w = 67;
        } else if ((w | 0) == 71) {
          w = 0;u = el(n, 0, m) | 0;t = (u | 0) == 0;e = n;o = 0;q = 6260;r = t ? n + m | 0 : u;n = t ? m : u - n | 0;m = s;
        } else if ((w | 0) == 75) {
          w = 0;q = n;e = 0;m = 0;while (1) {
            o = c[q >> 2] | 0;if (!o) break;m = gl(G, o) | 0;if ((m | 0) < 0 | m >>> 0 > (r - e | 0) >>> 0) break;e = m + e | 0;if (r >>> 0 > e >>> 0) q = q + 4 | 0;else break;
          }if ((m | 0) < 0) {
            j = -1;break a;
          }fl(d, 32, k, e, u);if (!e) {
            e = 0;w = 84;
          } else {
            o = 0;while (1) {
              m = c[n >> 2] | 0;if (!m) {
                w = 84;break f;
              }m = gl(G, m) | 0;o = m + o | 0;if ((o | 0) > (e | 0)) {
                w = 84;break f;
              }Zk(d, G, m);if (o >>> 0 >= e >>> 0) {
                w = 84;break;
              } else n = n + 4 | 0;
            }
          }
        } while (0);if ((w | 0) == 67) {
          w = 0;n = (e | 0) != 0 | (n | 0) != 0;u = (m | 0) != 0 | n;n = ((n ^ 1) & 1) + (z - r) | 0;e = u ? r : y;r = y;n = u ? (m | 0) > (n | 0) ? m : n : m;m = (m | 0) > -1 ? s & -65537 : s;
        } else if ((w | 0) == 84) {
          w = 0;fl(d, 32, k, e, u ^ 8192);k = (k | 0) > (e | 0) ? k : e;e = v;continue;
        }t = r - e | 0;s = (n | 0) < (t | 0) ? t : n;u = s + o | 0;k = (k | 0) < (u | 0) ? u : k;fl(d, 32, k, u, m);Zk(d, q, o);fl(d, 48, k, u, m ^ 65536);fl(d, 48, s, t, 0);Zk(d, e, t);fl(d, 32, k, u, m ^ 8192);e = v;
      }g: do if ((w | 0) == 87) if (!d) if (!p) j = 0;else {
        j = 1;while (1) {
          e = c[i + (j << 2) >> 2] | 0;if (!e) break;$k(g + (j << 3) | 0, e, f);j = j + 1 | 0;if ((j | 0) >= 10) {
            j = 1;break g;
          }
        }while (1) {
          if (c[i + (j << 2) >> 2] | 0) {
            j = -1;break g;
          }j = j + 1 | 0;if ((j | 0) >= 10) {
            j = 1;break;
          }
        }
      } while (0);l = H;return j | 0;
    }function Xk(a) {
      a = a | 0;return 0;
    }function Yk(a) {
      a = a | 0;return;
    }function Zk(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;if (!(c[a >> 2] & 32)) ul(b, d, a) | 0;return;
    }function _k(b) {
      b = b | 0;var d = 0,
          e = 0,
          f = 0;e = c[b >> 2] | 0;f = (a[e >> 0] | 0) + -48 | 0;if (f >>> 0 < 10) {
        d = 0;do {
          d = f + (d * 10 | 0) | 0;e = e + 1 | 0;c[b >> 2] = e;f = (a[e >> 0] | 0) + -48 | 0;
        } while (f >>> 0 < 10);
      } else d = 0;return d | 0;
    }function $k(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0.0;a: do if (b >>> 0 <= 20) do switch (b | 0) {case 9:
          {
            e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);b = c[e >> 2] | 0;c[d >> 2] = e + 4;c[a >> 2] = b;break a;
          }case 10:
          {
            e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);b = c[e >> 2] | 0;c[d >> 2] = e + 4;e = a;c[e >> 2] = b;c[e + 4 >> 2] = ((b | 0) < 0) << 31 >> 31;break a;
          }case 11:
          {
            e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);b = c[e >> 2] | 0;c[d >> 2] = e + 4;e = a;c[e >> 2] = b;c[e + 4 >> 2] = 0;break a;
          }case 12:
          {
            e = (c[d >> 2] | 0) + (8 - 1) & ~(8 - 1);b = e;f = c[b >> 2] | 0;b = c[b + 4 >> 2] | 0;c[d >> 2] = e + 8;e = a;c[e >> 2] = f;c[e + 4 >> 2] = b;break a;
          }case 13:
          {
            f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);e = c[f >> 2] | 0;c[d >> 2] = f + 4;e = (e & 65535) << 16 >> 16;f = a;c[f >> 2] = e;c[f + 4 >> 2] = ((e | 0) < 0) << 31 >> 31;break a;
          }case 14:
          {
            f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);e = c[f >> 2] | 0;c[d >> 2] = f + 4;f = a;c[f >> 2] = e & 65535;c[f + 4 >> 2] = 0;break a;
          }case 15:
          {
            f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);e = c[f >> 2] | 0;c[d >> 2] = f + 4;e = (e & 255) << 24 >> 24;f = a;c[f >> 2] = e;c[f + 4 >> 2] = ((e | 0) < 0) << 31 >> 31;break a;
          }case 16:
          {
            f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);e = c[f >> 2] | 0;c[d >> 2] = f + 4;f = a;c[f >> 2] = e & 255;c[f + 4 >> 2] = 0;break a;
          }case 17:
          {
            f = (c[d >> 2] | 0) + (8 - 1) & ~(8 - 1);g = +h[f >> 3];c[d >> 2] = f + 8;h[a >> 3] = g;break a;
          }case 18:
          {
            f = (c[d >> 2] | 0) + (8 - 1) & ~(8 - 1);g = +h[f >> 3];c[d >> 2] = f + 8;h[a >> 3] = g;break a;
          }default:
          break a;} while (0); while (0);return;
    }function al(b, c, e, f) {
      b = b | 0;c = c | 0;e = e | 0;f = f | 0;if (!((b | 0) == 0 & (c | 0) == 0)) do {
        e = e + -1 | 0;a[e >> 0] = d[6312 + (b & 15) >> 0] | 0 | f;b = bm(b | 0, c | 0, 4) | 0;c = A;
      } while (!((b | 0) == 0 & (c | 0) == 0));return e | 0;
    }function bl(b, c, d) {
      b = b | 0;c = c | 0;d = d | 0;if (!((b | 0) == 0 & (c | 0) == 0)) do {
        d = d + -1 | 0;a[d >> 0] = b & 7 | 48;b = bm(b | 0, c | 0, 3) | 0;c = A;
      } while (!((b | 0) == 0 & (c | 0) == 0));return d | 0;
    }function cl(b, c, d) {
      b = b | 0;c = c | 0;d = d | 0;var e = 0;if (c >>> 0 > 0 | (c | 0) == 0 & b >>> 0 > 4294967295) {
        while (1) {
          e = hm(b | 0, c | 0, 10, 0) | 0;d = d + -1 | 0;a[d >> 0] = e & 255 | 48;e = b;b = fm(b | 0, c | 0, 10, 0) | 0;if (!(c >>> 0 > 9 | (c | 0) == 9 & e >>> 0 > 4294967295)) break;else c = A;
        }c = b;
      } else c = b;if (c) while (1) {
        d = d + -1 | 0;a[d >> 0] = (c >>> 0) % 10 | 0 | 48;if (c >>> 0 < 10) break;else c = (c >>> 0) / 10 | 0;
      }return d | 0;
    }function dl(a) {
      a = a | 0;return ol(a, c[(nl() | 0) + 188 >> 2] | 0) | 0;
    }function el(b, d, e) {
      b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0;h = d & 255;f = (e | 0) != 0;a: do if (f & (b & 3 | 0) != 0) {
        g = d & 255;while (1) {
          if ((a[b >> 0] | 0) == g << 24 >> 24) {
            i = 6;break a;
          }b = b + 1 | 0;e = e + -1 | 0;f = (e | 0) != 0;if (!(f & (b & 3 | 0) != 0)) {
            i = 5;break;
          }
        }
      } else i = 5; while (0);if ((i | 0) == 5) if (f) i = 6;else e = 0;b: do if ((i | 0) == 6) {
        g = d & 255;if ((a[b >> 0] | 0) != g << 24 >> 24) {
          f = P(h, 16843009) | 0;c: do if (e >>> 0 > 3) while (1) {
            h = c[b >> 2] ^ f;if ((h & -2139062144 ^ -2139062144) & h + -16843009 | 0) break;b = b + 4 | 0;e = e + -4 | 0;if (e >>> 0 <= 3) {
              i = 11;break c;
            }
          } else i = 11; while (0);if ((i | 0) == 11) if (!e) {
            e = 0;break;
          }while (1) {
            if ((a[b >> 0] | 0) == g << 24 >> 24) break b;b = b + 1 | 0;e = e + -1 | 0;if (!e) {
              e = 0;break;
            }
          }
        }
      } while (0);return (e | 0 ? b : 0) | 0;
    }function fl(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0;g = l;l = l + 256 | 0;f = g;if ((c | 0) > (d | 0) & (e & 73728 | 0) == 0) {
        e = c - d | 0;$l(f | 0, b | 0, (e >>> 0 < 256 ? e : 256) | 0) | 0;if (e >>> 0 > 255) {
          b = c - d | 0;do {
            Zk(a, f, 256);e = e + -256 | 0;
          } while (e >>> 0 > 255);e = b & 255;
        }Zk(a, f, e);
      }l = g;return;
    }function gl(a, b) {
      a = a | 0;b = b | 0;if (!a) a = 0;else a = ll(a, b, 0) | 0;return a | 0;
    }function hl(b, e, f, g, h, i) {
      b = b | 0;e = +e;f = f | 0;g = g | 0;h = h | 0;i = i | 0;var j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0.0,
          s = 0,
          t = 0,
          u = 0,
          v = 0,
          w = 0,
          x = 0,
          y = 0,
          z = 0,
          B = 0,
          C = 0,
          D = 0,
          E = 0,
          F = 0,
          G = 0,
          H = 0;H = l;l = l + 560 | 0;m = H + 8 | 0;u = H;G = H + 524 | 0;F = G;n = H + 512 | 0;c[u >> 2] = 0;E = n + 12 | 0;il(e) | 0;if ((A | 0) < 0) {
        e = -e;C = 1;B = 6277;
      } else {
        C = (h & 2049 | 0) != 0 & 1;B = (h & 2048 | 0) == 0 ? (h & 1 | 0) == 0 ? 6278 : 6283 : 6280;
      }il(e) | 0;D = A & 2146435072;do if (D >>> 0 < 2146435072 | (D | 0) == 2146435072 & 0 < 0) {
        r = +jl(e, u) * 2.0;j = r != 0.0;if (j) c[u >> 2] = (c[u >> 2] | 0) + -1;w = i | 32;if ((w | 0) == 97) {
          s = i & 32;q = (s | 0) == 0 ? B : B + 9 | 0;p = C | 2;j = 12 - g | 0;do if (!(g >>> 0 > 11 | (j | 0) == 0)) {
            e = 8.0;do {
              j = j + -1 | 0;e = e * 16.0;
            } while ((j | 0) != 0);if ((a[q >> 0] | 0) == 45) {
              e = -(e + (-r - e));break;
            } else {
              e = r + e - e;break;
            }
          } else e = r; while (0);k = c[u >> 2] | 0;j = (k | 0) < 0 ? 0 - k | 0 : k;j = cl(j, ((j | 0) < 0) << 31 >> 31, E) | 0;if ((j | 0) == (E | 0)) {
            j = n + 11 | 0;a[j >> 0] = 48;
          }a[j + -1 >> 0] = (k >> 31 & 2) + 43;o = j + -2 | 0;a[o >> 0] = i + 15;n = (g | 0) < 1;m = (h & 8 | 0) == 0;j = G;do {
            D = ~~e;k = j + 1 | 0;a[j >> 0] = d[6312 + D >> 0] | s;e = (e - +(D | 0)) * 16.0;if ((k - F | 0) == 1 ? !(m & (n & e == 0.0)) : 0) {
              a[k >> 0] = 46;j = j + 2 | 0;
            } else j = k;
          } while (e != 0.0);D = j - F | 0;F = E - o | 0;E = (g | 0) != 0 & (D + -2 | 0) < (g | 0) ? g + 2 | 0 : D;j = F + p + E | 0;fl(b, 32, f, j, h);Zk(b, q, p);fl(b, 48, f, j, h ^ 65536);Zk(b, G, D);fl(b, 48, E - D | 0, 0, 0);Zk(b, o, F);fl(b, 32, f, j, h ^ 8192);break;
        }k = (g | 0) < 0 ? 6 : g;if (j) {
          j = (c[u >> 2] | 0) + -28 | 0;c[u >> 2] = j;e = r * 268435456.0;
        } else {
          e = r;j = c[u >> 2] | 0;
        }D = (j | 0) < 0 ? m : m + 288 | 0;m = D;do {
          y = ~~e >>> 0;c[m >> 2] = y;m = m + 4 | 0;e = (e - +(y >>> 0)) * 1.0e9;
        } while (e != 0.0);if ((j | 0) > 0) {
          n = D;p = m;while (1) {
            o = (j | 0) < 29 ? j : 29;j = p + -4 | 0;if (j >>> 0 >= n >>> 0) {
              m = 0;do {
                x = am(c[j >> 2] | 0, 0, o | 0) | 0;x = _l(x | 0, A | 0, m | 0, 0) | 0;y = A;v = hm(x | 0, y | 0, 1e9, 0) | 0;c[j >> 2] = v;m = fm(x | 0, y | 0, 1e9, 0) | 0;j = j + -4 | 0;
              } while (j >>> 0 >= n >>> 0);if (m) {
                n = n + -4 | 0;c[n >> 2] = m;
              }
            }m = p;while (1) {
              if (m >>> 0 <= n >>> 0) break;j = m + -4 | 0;if (!(c[j >> 2] | 0)) m = j;else break;
            }j = (c[u >> 2] | 0) - o | 0;c[u >> 2] = j;if ((j | 0) > 0) p = m;else break;
          }
        } else n = D;if ((j | 0) < 0) {
          g = ((k + 25 | 0) / 9 | 0) + 1 | 0;t = (w | 0) == 102;do {
            s = 0 - j | 0;s = (s | 0) < 9 ? s : 9;if (n >>> 0 < m >>> 0) {
              o = (1 << s) + -1 | 0;p = 1e9 >>> s;q = 0;j = n;do {
                y = c[j >> 2] | 0;c[j >> 2] = (y >>> s) + q;q = P(y & o, p) | 0;j = j + 4 | 0;
              } while (j >>> 0 < m >>> 0);j = (c[n >> 2] | 0) == 0 ? n + 4 | 0 : n;if (!q) {
                n = j;j = m;
              } else {
                c[m >> 2] = q;n = j;j = m + 4 | 0;
              }
            } else {
              n = (c[n >> 2] | 0) == 0 ? n + 4 | 0 : n;j = m;
            }m = t ? D : n;m = (j - m >> 2 | 0) > (g | 0) ? m + (g << 2) | 0 : j;j = (c[u >> 2] | 0) + s | 0;c[u >> 2] = j;
          } while ((j | 0) < 0);j = n;g = m;
        } else {
          j = n;g = m;
        }y = D;if (j >>> 0 < g >>> 0) {
          m = (y - j >> 2) * 9 | 0;o = c[j >> 2] | 0;if (o >>> 0 >= 10) {
            n = 10;do {
              n = n * 10 | 0;m = m + 1 | 0;
            } while (o >>> 0 >= n >>> 0);
          }
        } else m = 0;t = (w | 0) == 103;v = (k | 0) != 0;n = k - ((w | 0) != 102 ? m : 0) + ((v & t) << 31 >> 31) | 0;if ((n | 0) < (((g - y >> 2) * 9 | 0) + -9 | 0)) {
          n = n + 9216 | 0;s = D + 4 + (((n | 0) / 9 | 0) + -1024 << 2) | 0;n = ((n | 0) % 9 | 0) + 1 | 0;if ((n | 0) < 9) {
            o = 10;do {
              o = o * 10 | 0;n = n + 1 | 0;
            } while ((n | 0) != 9);
          } else o = 10;p = c[s >> 2] | 0;q = (p >>> 0) % (o >>> 0) | 0;n = (s + 4 | 0) == (g | 0);if (!(n & (q | 0) == 0)) {
            r = (((p >>> 0) / (o >>> 0) | 0) & 1 | 0) == 0 ? 9007199254740992.0 : 9007199254740994.0;x = (o | 0) / 2 | 0;e = q >>> 0 < x >>> 0 ? .5 : n & (q | 0) == (x | 0) ? 1.0 : 1.5;if (C) {
              x = (a[B >> 0] | 0) == 45;e = x ? -e : e;r = x ? -r : r;
            }n = p - q | 0;c[s >> 2] = n;if (r + e != r) {
              x = n + o | 0;c[s >> 2] = x;if (x >>> 0 > 999999999) {
                m = s;while (1) {
                  n = m + -4 | 0;c[m >> 2] = 0;if (n >>> 0 < j >>> 0) {
                    j = j + -4 | 0;c[j >> 2] = 0;
                  }x = (c[n >> 2] | 0) + 1 | 0;c[n >> 2] = x;if (x >>> 0 > 999999999) m = n;else break;
                }
              } else n = s;m = (y - j >> 2) * 9 | 0;p = c[j >> 2] | 0;if (p >>> 0 >= 10) {
                o = 10;do {
                  o = o * 10 | 0;m = m + 1 | 0;
                } while (p >>> 0 >= o >>> 0);
              }
            } else n = s;
          } else n = s;n = n + 4 | 0;n = g >>> 0 > n >>> 0 ? n : g;x = j;
        } else {
          n = g;x = j;
        }w = n;while (1) {
          if (w >>> 0 <= x >>> 0) {
            u = 0;break;
          }j = w + -4 | 0;if (!(c[j >> 2] | 0)) w = j;else {
            u = 1;break;
          }
        }g = 0 - m | 0;do if (t) {
          j = ((v ^ 1) & 1) + k | 0;if ((j | 0) > (m | 0) & (m | 0) > -5) {
            o = i + -1 | 0;k = j + -1 - m | 0;
          } else {
            o = i + -2 | 0;k = j + -1 | 0;
          }j = h & 8;if (!j) {
            if (u ? (z = c[w + -4 >> 2] | 0, (z | 0) != 0) : 0) {
              if (!((z >>> 0) % 10 | 0)) {
                n = 0;j = 10;do {
                  j = j * 10 | 0;n = n + 1 | 0;
                } while (!((z >>> 0) % (j >>> 0) | 0 | 0));
              } else n = 0;
            } else n = 9;j = ((w - y >> 2) * 9 | 0) + -9 | 0;if ((o | 32 | 0) == 102) {
              s = j - n | 0;s = (s | 0) > 0 ? s : 0;k = (k | 0) < (s | 0) ? k : s;s = 0;break;
            } else {
              s = j + m - n | 0;s = (s | 0) > 0 ? s : 0;k = (k | 0) < (s | 0) ? k : s;s = 0;break;
            }
          } else s = j;
        } else {
          o = i;s = h & 8;
        } while (0);t = k | s;p = (t | 0) != 0 & 1;q = (o | 32 | 0) == 102;if (q) {
          v = 0;j = (m | 0) > 0 ? m : 0;
        } else {
          j = (m | 0) < 0 ? g : m;j = cl(j, ((j | 0) < 0) << 31 >> 31, E) | 0;n = E;if ((n - j | 0) < 2) do {
            j = j + -1 | 0;a[j >> 0] = 48;
          } while ((n - j | 0) < 2);a[j + -1 >> 0] = (m >> 31 & 2) + 43;j = j + -2 | 0;a[j >> 0] = o;v = j;j = n - j | 0;
        }j = C + 1 + k + p + j | 0;fl(b, 32, f, j, h);Zk(b, B, C);fl(b, 48, f, j, h ^ 65536);if (q) {
          o = x >>> 0 > D >>> 0 ? D : x;s = G + 9 | 0;p = s;q = G + 8 | 0;n = o;do {
            m = cl(c[n >> 2] | 0, 0, s) | 0;if ((n | 0) == (o | 0)) {
              if ((m | 0) == (s | 0)) {
                a[q >> 0] = 48;m = q;
              }
            } else if (m >>> 0 > G >>> 0) {
              $l(G | 0, 48, m - F | 0) | 0;do m = m + -1 | 0; while (m >>> 0 > G >>> 0);
            }Zk(b, m, p - m | 0);n = n + 4 | 0;
          } while (n >>> 0 <= D >>> 0);if (t | 0) Zk(b, 6328, 1);if (n >>> 0 < w >>> 0 & (k | 0) > 0) while (1) {
            m = cl(c[n >> 2] | 0, 0, s) | 0;if (m >>> 0 > G >>> 0) {
              $l(G | 0, 48, m - F | 0) | 0;do m = m + -1 | 0; while (m >>> 0 > G >>> 0);
            }Zk(b, m, (k | 0) < 9 ? k : 9);n = n + 4 | 0;m = k + -9 | 0;if (!(n >>> 0 < w >>> 0 & (k | 0) > 9)) {
              k = m;break;
            } else k = m;
          }fl(b, 48, k + 9 | 0, 9, 0);
        } else {
          t = u ? w : x + 4 | 0;if ((k | 0) > -1) {
            u = G + 9 | 0;s = (s | 0) == 0;g = u;p = 0 - F | 0;q = G + 8 | 0;o = x;do {
              m = cl(c[o >> 2] | 0, 0, u) | 0;if ((m | 0) == (u | 0)) {
                a[q >> 0] = 48;m = q;
              }do if ((o | 0) == (x | 0)) {
                n = m + 1 | 0;Zk(b, m, 1);if (s & (k | 0) < 1) {
                  m = n;break;
                }Zk(b, 6328, 1);m = n;
              } else {
                if (m >>> 0 <= G >>> 0) break;$l(G | 0, 48, m + p | 0) | 0;do m = m + -1 | 0; while (m >>> 0 > G >>> 0);
              } while (0);F = g - m | 0;Zk(b, m, (k | 0) > (F | 0) ? F : k);k = k - F | 0;o = o + 4 | 0;
            } while (o >>> 0 < t >>> 0 & (k | 0) > -1);
          }fl(b, 48, k + 18 | 0, 18, 0);Zk(b, v, E - v | 0);
        }fl(b, 32, f, j, h ^ 8192);
      } else {
        G = (i & 32 | 0) != 0;j = C + 3 | 0;fl(b, 32, f, j, h & -65537);Zk(b, B, C);Zk(b, e != e | 0.0 != 0.0 ? G ? 6304 : 6308 : G ? 6296 : 6300, 3);fl(b, 32, f, j, h ^ 8192);
      } while (0);l = H;return ((j | 0) < (f | 0) ? f : j) | 0;
    }function il(a) {
      a = +a;var b = 0;h[j >> 3] = a;b = c[j >> 2] | 0;A = c[j + 4 >> 2] | 0;return b | 0;
    }function jl(a, b) {
      a = +a;b = b | 0;return + +kl(a, b);
    }function kl(a, b) {
      a = +a;b = b | 0;var d = 0,
          e = 0,
          f = 0;h[j >> 3] = a;d = c[j >> 2] | 0;e = c[j + 4 >> 2] | 0;f = bm(d | 0, e | 0, 52) | 0;switch (f & 2047) {case 0:
          {
            if (a != 0.0) {
              a = +kl(a * 18446744073709551616.0, b);d = (c[b >> 2] | 0) + -64 | 0;
            } else d = 0;c[b >> 2] = d;break;
          }case 2047:
          break;default:
          {
            c[b >> 2] = (f & 2047) + -1022;c[j >> 2] = d;c[j + 4 >> 2] = e & -2146435073 | 1071644672;a = +h[j >> 3];
          }}return +a;
    }function ll(b, d, e) {
      b = b | 0;d = d | 0;e = e | 0;do if (b) {
        if (d >>> 0 < 128) {
          a[b >> 0] = d;b = 1;break;
        }if (!(c[c[(ml() | 0) + 188 >> 2] >> 2] | 0)) if ((d & -128 | 0) == 57216) {
          a[b >> 0] = d;b = 1;break;
        } else {
          c[(Ok() | 0) >> 2] = 84;b = -1;break;
        }if (d >>> 0 < 2048) {
          a[b >> 0] = d >>> 6 | 192;a[b + 1 >> 0] = d & 63 | 128;b = 2;break;
        }if (d >>> 0 < 55296 | (d & -8192 | 0) == 57344) {
          a[b >> 0] = d >>> 12 | 224;a[b + 1 >> 0] = d >>> 6 & 63 | 128;a[b + 2 >> 0] = d & 63 | 128;b = 3;break;
        }if ((d + -65536 | 0) >>> 0 < 1048576) {
          a[b >> 0] = d >>> 18 | 240;a[b + 1 >> 0] = d >>> 12 & 63 | 128;a[b + 2 >> 0] = d >>> 6 & 63 | 128;a[b + 3 >> 0] = d & 63 | 128;b = 4;break;
        } else {
          c[(Ok() | 0) >> 2] = 84;b = -1;break;
        }
      } else b = 1; while (0);return b | 0;
    }function ml() {
      return Qk() | 0;
    }function nl() {
      return Qk() | 0;
    }function ol(b, e) {
      b = b | 0;e = e | 0;var f = 0,
          g = 0;g = 0;while (1) {
        if ((d[6330 + g >> 0] | 0) == (b | 0)) {
          b = 2;break;
        }f = g + 1 | 0;if ((f | 0) == 87) {
          f = 6418;g = 87;b = 5;break;
        } else g = f;
      }if ((b | 0) == 2) if (!g) f = 6418;else {
        f = 6418;b = 5;
      }if ((b | 0) == 5) while (1) {
        do {
          b = f;f = f + 1 | 0;
        } while ((a[b >> 0] | 0) != 0);g = g + -1 | 0;if (!g) break;else b = 5;
      }return pl(f, c[e + 20 >> 2] | 0) | 0;
    }function pl(a, b) {
      a = a | 0;b = b | 0;return ql(a, b) | 0;
    }function ql(a, b) {
      a = a | 0;b = b | 0;if (!b) b = 0;else b = rl(c[b >> 2] | 0, c[b + 4 >> 2] | 0, a) | 0;return (b | 0 ? b : a) | 0;
    }function rl(b, d, e) {
      b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0;o = (c[b >> 2] | 0) + 1794895138 | 0;h = sl(c[b + 8 >> 2] | 0, o) | 0;f = sl(c[b + 12 >> 2] | 0, o) | 0;g = sl(c[b + 16 >> 2] | 0, o) | 0;a: do if ((h >>> 0 < d >>> 2 >>> 0 ? (n = d - (h << 2) | 0, f >>> 0 < n >>> 0 & g >>> 0 < n >>> 0) : 0) ? ((g | f) & 3 | 0) == 0 : 0) {
        n = f >>> 2;m = g >>> 2;l = 0;while (1) {
          j = h >>> 1;k = l + j | 0;i = k << 1;g = i + n | 0;f = sl(c[b + (g << 2) >> 2] | 0, o) | 0;g = sl(c[b + (g + 1 << 2) >> 2] | 0, o) | 0;if (!(g >>> 0 < d >>> 0 & f >>> 0 < (d - g | 0) >>> 0)) {
            f = 0;break a;
          }if (a[b + (g + f) >> 0] | 0) {
            f = 0;break a;
          }f = tl(e, b + g | 0) | 0;if (!f) break;f = (f | 0) < 0;if ((h | 0) == 1) {
            f = 0;break a;
          } else {
            l = f ? l : k;h = f ? j : h - j | 0;
          }
        }f = i + m | 0;g = sl(c[b + (f << 2) >> 2] | 0, o) | 0;f = sl(c[b + (f + 1 << 2) >> 2] | 0, o) | 0;if (f >>> 0 < d >>> 0 & g >>> 0 < (d - f | 0) >>> 0) f = (a[b + (f + g) >> 0] | 0) == 0 ? b + f | 0 : 0;else f = 0;
      } else f = 0; while (0);return f | 0;
    }function sl(a, b) {
      a = a | 0;b = b | 0;var c = 0;c = im(a | 0) | 0;return ((b | 0) == 0 ? a : c) | 0;
    }function tl(b, c) {
      b = b | 0;c = c | 0;var d = 0,
          e = 0;d = a[b >> 0] | 0;e = a[c >> 0] | 0;if (d << 24 >> 24 == 0 ? 1 : d << 24 >> 24 != e << 24 >> 24) b = e;else {
        do {
          b = b + 1 | 0;c = c + 1 | 0;d = a[b >> 0] | 0;e = a[c >> 0] | 0;
        } while (!(d << 24 >> 24 == 0 ? 1 : d << 24 >> 24 != e << 24 >> 24));b = e;
      }return (d & 255) - (b & 255) | 0;
    }function ul(b, d, e) {
      b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0;f = e + 16 | 0;g = c[f >> 2] | 0;if (!g) {
        if (!(vl(e) | 0)) {
          g = c[f >> 2] | 0;h = 5;
        } else f = 0;
      } else h = 5;a: do if ((h | 0) == 5) {
        j = e + 20 | 0;i = c[j >> 2] | 0;f = i;if ((g - i | 0) >>> 0 < d >>> 0) {
          f = xb[c[e + 36 >> 2] & 15](e, b, d) | 0;break;
        }b: do if ((a[e + 75 >> 0] | 0) > -1) {
          i = d;while (1) {
            if (!i) {
              h = 0;g = b;break b;
            }g = i + -1 | 0;if ((a[b + g >> 0] | 0) == 10) break;else i = g;
          }f = xb[c[e + 36 >> 2] & 15](e, b, i) | 0;if (f >>> 0 < i >>> 0) break a;h = i;g = b + i | 0;d = d - i | 0;f = c[j >> 2] | 0;
        } else {
          h = 0;g = b;
        } while (0);cm(f | 0, g | 0, d | 0) | 0;c[j >> 2] = (c[j >> 2] | 0) + d;f = h + d | 0;
      } while (0);return f | 0;
    }function vl(b) {
      b = b | 0;var d = 0,
          e = 0;d = b + 74 | 0;e = a[d >> 0] | 0;a[d >> 0] = e + 255 | e;d = c[b >> 2] | 0;if (!(d & 8)) {
        c[b + 8 >> 2] = 0;c[b + 4 >> 2] = 0;e = c[b + 44 >> 2] | 0;c[b + 28 >> 2] = e;c[b + 20 >> 2] = e;c[b + 16 >> 2] = e + (c[b + 48 >> 2] | 0);b = 0;
      } else {
        c[b >> 2] = d | 32;b = -1;
      }return b | 0;
    }function wl(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0;e = a + 20 | 0;f = c[e >> 2] | 0;a = (c[a + 16 >> 2] | 0) - f | 0;a = a >>> 0 > d >>> 0 ? d : a;cm(f | 0, b | 0, a | 0) | 0;c[e >> 2] = (c[e >> 2] | 0) + a;return d | 0;
    }function xl(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0;f = l;l = l + 16 | 0;g = f;c[g >> 2] = e;e = Uk(a, b, d, g) | 0;l = f;return e | 0;
    }function yl(b, c, d) {
      b = b | 0;c = c | 0;d = d | 0;var e = 0,
          f = 0;a: do if (!d) b = 0;else {
        while (1) {
          e = a[b >> 0] | 0;f = a[c >> 0] | 0;if (e << 24 >> 24 != f << 24 >> 24) break;d = d + -1 | 0;if (!d) {
            b = 0;break a;
          } else {
            b = b + 1 | 0;c = c + 1 | 0;
          }
        }b = (e & 255) - (f & 255) | 0;
      } while (0);return b | 0;
    }function zl(a, b) {
      a = a | 0;b = b | 0;var c = 0;c = Tk(a) | 0;return ((Al(a, 1, c, b) | 0) != (c | 0)) << 31 >> 31 | 0;
    }function Al(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0;f = P(d, b) | 0;d = (b | 0) == 0 ? 0 : d;if ((c[e + 76 >> 2] | 0) > -1) {
        g = (Xk(e) | 0) == 0;a = ul(a, f, e) | 0;if (!g) Yk(e);
      } else a = ul(a, f, e) | 0;if ((a | 0) != (f | 0)) d = (a >>> 0) / (b >>> 0) | 0;return d | 0;
    }function Bl(b, e) {
      b = b | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;m = l;l = l + 16 | 0;j = m;k = e & 255;a[j >> 0] = k;g = b + 16 | 0;h = c[g >> 2] | 0;if (!h) {
        if (!(vl(b) | 0)) {
          h = c[g >> 2] | 0;i = 4;
        } else f = -1;
      } else i = 4;do if ((i | 0) == 4) {
        i = b + 20 | 0;g = c[i >> 2] | 0;if (g >>> 0 < h >>> 0 ? (f = e & 255, (f | 0) != (a[b + 75 >> 0] | 0)) : 0) {
          c[i >> 2] = g + 1;a[g >> 0] = k;break;
        }if ((xb[c[b + 36 >> 2] & 15](b, j, 1) | 0) == 1) f = d[j >> 0] | 0;else f = -1;
      } while (0);l = m;return f | 0;
    }function Cl(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = l;l = l + 16 | 0;e = d;c[e >> 2] = b;b = Vk(c[595] | 0, a, e) | 0;l = d;return b | 0;
    }function Dl(a, b) {
      a = a | 0;b = b | 0;return Vk(c[595] | 0, a, b) | 0;
    }function El(b) {
      b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0;f = c[595] | 0;if ((c[f + 76 >> 2] | 0) > -1) g = Xk(f) | 0;else g = 0;do if ((zl(b, f) | 0) < 0) b = 1;else {
        if ((a[f + 75 >> 0] | 0) != 10 ? (d = f + 20 | 0, e = c[d >> 2] | 0, e >>> 0 < (c[f + 16 >> 2] | 0) >>> 0) : 0) {
          c[d >> 2] = e + 1;a[e >> 0] = 10;b = 0;break;
        }b = (Bl(f, 10) | 0) < 0;
      } while (0);if (g | 0) Yk(f);return b << 31 >> 31 | 0;
    }function Fl(a, b) {
      a = T(a);b = T(b);var c = 0,
          d = 0;c = Gl(a) | 0;do if ((c & 2147483647) >>> 0 <= 2139095040) {
        d = Gl(b) | 0;if ((d & 2147483647) >>> 0 <= 2139095040) if ((d ^ c | 0) < 0) {
          a = (c | 0) < 0 ? b : a;break;
        } else {
          a = a < b ? b : a;break;
        }
      } else a = b; while (0);return T(a);
    }function Gl(a) {
      a = T(a);return (g[j >> 2] = a, c[j >> 2] | 0) | 0;
    }function Hl(a, b) {
      a = T(a);b = T(b);var c = 0,
          d = 0;c = Il(a) | 0;do if ((c & 2147483647) >>> 0 <= 2139095040) {
        d = Il(b) | 0;if ((d & 2147483647) >>> 0 <= 2139095040) if ((d ^ c | 0) < 0) {
          a = (c | 0) < 0 ? a : b;break;
        } else {
          a = a < b ? a : b;break;
        }
      } else a = b; while (0);return T(a);
    }function Il(a) {
      a = T(a);return (g[j >> 2] = a, c[j >> 2] | 0) | 0;
    }function Jl(a, b) {
      a = T(a);b = T(b);var d = 0,
          e = 0,
          f = 0,
          h = 0,
          i = 0,
          k = 0,
          l = 0,
          m = 0;h = (g[j >> 2] = a, c[j >> 2] | 0);k = (g[j >> 2] = b, c[j >> 2] | 0);d = h >>> 23 & 255;i = k >>> 23 & 255;l = h & -2147483648;f = k << 1;a: do if ((f | 0) != 0 ? !((d | 0) == 255 | ((Kl(b) | 0) & 2147483647) >>> 0 > 2139095040) : 0) {
        e = h << 1;if (e >>> 0 <= f >>> 0) {
          b = T(a * T(0.0));return T((e | 0) == (f | 0) ? b : a);
        }if (!d) {
          d = h << 9;if ((d | 0) > -1) {
            e = d;d = 0;do {
              d = d + -1 | 0;e = e << 1;
            } while ((e | 0) > -1);
          } else d = 0;e = h << 1 - d;
        } else e = h & 8388607 | 8388608;if (!i) {
          h = k << 9;if ((h | 0) > -1) {
            f = 0;do {
              f = f + -1 | 0;h = h << 1;
            } while ((h | 0) > -1);
          } else f = 0;i = f;k = k << 1 - f;
        } else k = k & 8388607 | 8388608;f = e - k | 0;h = (f | 0) > -1;b: do if ((d | 0) > (i | 0)) {
          while (1) {
            if (h) if (!f) break;else e = f;e = e << 1;d = d + -1 | 0;f = e - k | 0;h = (f | 0) > -1;if ((d | 0) <= (i | 0)) break b;
          }b = T(a * T(0.0));break a;
        } while (0);if (h) if (!f) {
          b = T(a * T(0.0));break;
        } else e = f;if (e >>> 0 < 8388608) do {
          e = e << 1;d = d + -1 | 0;
        } while (e >>> 0 < 8388608);if ((d | 0) > 0) d = e + -8388608 | d << 23;else d = e >>> (1 - d | 0);b = (c[j >> 2] = d | l, T(g[j >> 2]));
      } else m = 3; while (0);if ((m | 0) == 3) {
        b = T(a * b);b = T(b / b);
      }return T(b);
    }function Kl(a) {
      a = T(a);return (g[j >> 2] = a, c[j >> 2] | 0) | 0;
    }function Ll(a) {
      a = a | 0;Va();
    }function Ml(a) {
      a = a | 0;return;
    }function Nl(a, b) {
      a = a | 0;b = b | 0;return 0;
    }function Ol(a) {
      a = a | 0;if ((Pl(a + 4 | 0) | 0) == -1) {
        sb[c[(c[a >> 2] | 0) + 8 >> 2] & 127](a);a = 1;
      } else a = 0;return a | 0;
    }function Pl(a) {
      a = a | 0;var b = 0;b = c[a >> 2] | 0;c[a >> 2] = b + -1;return b + -1 | 0;
    }function Ql(a) {
      a = a | 0;if (Ol(a) | 0) Rl(a);return;
    }function Rl(a) {
      a = a | 0;var b = 0;b = a + 8 | 0;if (!((c[b >> 2] | 0) != 0 ? (Pl(b) | 0) != -1 : 0)) sb[c[(c[a >> 2] | 0) + 16 >> 2] & 127](a);return;
    }function Sl(a) {
      a = a | 0;var b = 0;b = (a | 0) == 0 ? 1 : a;while (1) {
        a = Ek(b) | 0;if (a | 0) break;a = Xl() | 0;if (!a) {
          a = 0;break;
        }Kb[a & 0]();
      }return a | 0;
    }function Tl(a) {
      a = a | 0;return Sl(a) | 0;
    }function Ul(a) {
      a = a | 0;Fk(a);return;
    }function Vl(b) {
      b = b | 0;if ((a[b >> 0] | 0) == 1) b = 0;else {
        a[b >> 0] = 1;b = 1;
      }return b | 0;
    }function Wl(a) {
      a = a | 0;return;
    }function Xl() {
      var a = 0;a = c[2824] | 0;c[2824] = a + 0;return a | 0;
    }function Yl() {}function Zl(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;d = b - d - (c >>> 0 > a >>> 0 | 0) >>> 0;return (A = d, a - c >>> 0 | 0) | 0;
    }function _l(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;c = a + c >>> 0;return (A = b + d + (c >>> 0 < a >>> 0 | 0) >>> 0, c | 0) | 0;
    }function $l(b, d, e) {
      b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0;h = b + e | 0;d = d & 255;if ((e | 0) >= 67) {
        while (b & 3) {
          a[b >> 0] = d;b = b + 1 | 0;
        }f = h & -4 | 0;g = f - 64 | 0;i = d | d << 8 | d << 16 | d << 24;while ((b | 0) <= (g | 0)) {
          c[b >> 2] = i;c[b + 4 >> 2] = i;c[b + 8 >> 2] = i;c[b + 12 >> 2] = i;c[b + 16 >> 2] = i;c[b + 20 >> 2] = i;c[b + 24 >> 2] = i;c[b + 28 >> 2] = i;c[b + 32 >> 2] = i;c[b + 36 >> 2] = i;c[b + 40 >> 2] = i;c[b + 44 >> 2] = i;c[b + 48 >> 2] = i;c[b + 52 >> 2] = i;c[b + 56 >> 2] = i;c[b + 60 >> 2] = i;b = b + 64 | 0;
        }while ((b | 0) < (f | 0)) {
          c[b >> 2] = i;b = b + 4 | 0;
        }
      }while ((b | 0) < (h | 0)) {
        a[b >> 0] = d;b = b + 1 | 0;
      }return h - e | 0;
    }function am(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;if ((c | 0) < 32) {
        A = b << c | (a & (1 << c) - 1 << 32 - c) >>> 32 - c;return a << c;
      }A = a << c - 32;return 0;
    }function bm(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;if ((c | 0) < 32) {
        A = b >>> c;return a >>> c | (b & (1 << c) - 1) << 32 - c;
      }A = 0;return b >>> c - 32 | 0;
    }function cm(b, d, e) {
      b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0;if ((e | 0) >= 8192) return Qa(b | 0, d | 0, e | 0) | 0;h = b | 0;g = b + e | 0;if ((b & 3) == (d & 3)) {
        while (b & 3) {
          if (!e) return h | 0;a[b >> 0] = a[d >> 0] | 0;b = b + 1 | 0;d = d + 1 | 0;e = e - 1 | 0;
        }e = g & -4 | 0;f = e - 64 | 0;while ((b | 0) <= (f | 0)) {
          c[b >> 2] = c[d >> 2];c[b + 4 >> 2] = c[d + 4 >> 2];c[b + 8 >> 2] = c[d + 8 >> 2];c[b + 12 >> 2] = c[d + 12 >> 2];c[b + 16 >> 2] = c[d + 16 >> 2];c[b + 20 >> 2] = c[d + 20 >> 2];c[b + 24 >> 2] = c[d + 24 >> 2];c[b + 28 >> 2] = c[d + 28 >> 2];c[b + 32 >> 2] = c[d + 32 >> 2];c[b + 36 >> 2] = c[d + 36 >> 2];c[b + 40 >> 2] = c[d + 40 >> 2];c[b + 44 >> 2] = c[d + 44 >> 2];c[b + 48 >> 2] = c[d + 48 >> 2];c[b + 52 >> 2] = c[d + 52 >> 2];c[b + 56 >> 2] = c[d + 56 >> 2];c[b + 60 >> 2] = c[d + 60 >> 2];b = b + 64 | 0;d = d + 64 | 0;
        }while ((b | 0) < (e | 0)) {
          c[b >> 2] = c[d >> 2];b = b + 4 | 0;d = d + 4 | 0;
        }
      } else {
        e = g - 4 | 0;while ((b | 0) < (e | 0)) {
          a[b >> 0] = a[d >> 0] | 0;a[b + 1 >> 0] = a[d + 1 >> 0] | 0;a[b + 2 >> 0] = a[d + 2 >> 0] | 0;a[b + 3 >> 0] = a[d + 3 >> 0] | 0;b = b + 4 | 0;d = d + 4 | 0;
        }
      }while ((b | 0) < (g | 0)) {
        a[b >> 0] = a[d >> 0] | 0;b = b + 1 | 0;d = d + 1 | 0;
      }return h | 0;
    }function dm(b) {
      b = b | 0;var c = 0;c = a[n + (b & 255) >> 0] | 0;if ((c | 0) < 8) return c | 0;c = a[n + (b >> 8 & 255) >> 0] | 0;if ((c | 0) < 8) return c + 8 | 0;c = a[n + (b >> 16 & 255) >> 0] | 0;if ((c | 0) < 8) return c + 16 | 0;return (a[n + (b >>> 24) >> 0] | 0) + 24 | 0;
    }function em(a, b, d, e, f) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0;l = a;j = b;k = j;h = d;n = e;i = n;if (!k) {
        g = (f | 0) != 0;if (!i) {
          if (g) {
            c[f >> 2] = (l >>> 0) % (h >>> 0);c[f + 4 >> 2] = 0;
          }n = 0;f = (l >>> 0) / (h >>> 0) >>> 0;return (A = n, f) | 0;
        } else {
          if (!g) {
            n = 0;f = 0;return (A = n, f) | 0;
          }c[f >> 2] = a | 0;c[f + 4 >> 2] = b & 0;n = 0;f = 0;return (A = n, f) | 0;
        }
      }g = (i | 0) == 0;do if (h) {
        if (!g) {
          g = (S(i | 0) | 0) - (S(k | 0) | 0) | 0;if (g >>> 0 <= 31) {
            m = g + 1 | 0;i = 31 - g | 0;b = g - 31 >> 31;h = m;a = l >>> (m >>> 0) & b | k << i;b = k >>> (m >>> 0) & b;g = 0;i = l << i;break;
          }if (!f) {
            n = 0;f = 0;return (A = n, f) | 0;
          }c[f >> 2] = a | 0;c[f + 4 >> 2] = j | b & 0;n = 0;f = 0;return (A = n, f) | 0;
        }g = h - 1 | 0;if (g & h | 0) {
          i = (S(h | 0) | 0) + 33 - (S(k | 0) | 0) | 0;p = 64 - i | 0;m = 32 - i | 0;j = m >> 31;o = i - 32 | 0;b = o >> 31;h = i;a = m - 1 >> 31 & k >>> (o >>> 0) | (k << m | l >>> (i >>> 0)) & b;b = b & k >>> (i >>> 0);g = l << p & j;i = (k << p | l >>> (o >>> 0)) & j | l << m & i - 33 >> 31;break;
        }if (f | 0) {
          c[f >> 2] = g & l;c[f + 4 >> 2] = 0;
        }if ((h | 0) == 1) {
          o = j | b & 0;p = a | 0 | 0;return (A = o, p) | 0;
        } else {
          p = dm(h | 0) | 0;o = k >>> (p >>> 0) | 0;p = k << 32 - p | l >>> (p >>> 0) | 0;return (A = o, p) | 0;
        }
      } else {
        if (g) {
          if (f | 0) {
            c[f >> 2] = (k >>> 0) % (h >>> 0);c[f + 4 >> 2] = 0;
          }o = 0;p = (k >>> 0) / (h >>> 0) >>> 0;return (A = o, p) | 0;
        }if (!l) {
          if (f | 0) {
            c[f >> 2] = 0;c[f + 4 >> 2] = (k >>> 0) % (i >>> 0);
          }o = 0;p = (k >>> 0) / (i >>> 0) >>> 0;return (A = o, p) | 0;
        }g = i - 1 | 0;if (!(g & i)) {
          if (f | 0) {
            c[f >> 2] = a | 0;c[f + 4 >> 2] = g & k | b & 0;
          }o = 0;p = k >>> ((dm(i | 0) | 0) >>> 0);return (A = o, p) | 0;
        }g = (S(i | 0) | 0) - (S(k | 0) | 0) | 0;if (g >>> 0 <= 30) {
          b = g + 1 | 0;i = 31 - g | 0;h = b;a = k << i | l >>> (b >>> 0);b = k >>> (b >>> 0);g = 0;i = l << i;break;
        }if (!f) {
          o = 0;p = 0;return (A = o, p) | 0;
        }c[f >> 2] = a | 0;c[f + 4 >> 2] = j | b & 0;o = 0;p = 0;return (A = o, p) | 0;
      } while (0);if (!h) {
        k = i;j = 0;i = 0;
      } else {
        m = d | 0 | 0;l = n | e & 0;k = _l(m | 0, l | 0, -1, -1) | 0;d = A;j = i;i = 0;do {
          e = j;j = g >>> 31 | j << 1;g = i | g << 1;e = a << 1 | e >>> 31 | 0;n = a >>> 31 | b << 1 | 0;Zl(k | 0, d | 0, e | 0, n | 0) | 0;p = A;o = p >> 31 | ((p | 0) < 0 ? -1 : 0) << 1;i = o & 1;a = Zl(e | 0, n | 0, o & m | 0, (((p | 0) < 0 ? -1 : 0) >> 31 | ((p | 0) < 0 ? -1 : 0) << 1) & l | 0) | 0;b = A;h = h - 1 | 0;
        } while ((h | 0) != 0);k = j;j = 0;
      }h = 0;if (f | 0) {
        c[f >> 2] = a;c[f + 4 >> 2] = b;
      }o = (g | 0) >>> 31 | (k | h) << 1 | (h << 1 | g >>> 31) & 0 | j;p = (g << 1 | 0 >>> 31) & -2 | i;return (A = o, p) | 0;
    }function fm(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;return em(a, b, c, d, 0) | 0;
    }function gm(a) {
      a = a | 0;var b = 0,
          d = 0;d = a + 15 & -16 | 0;b = c[i >> 2] | 0;a = b + d | 0;if ((d | 0) > 0 & (a | 0) < (b | 0) | (a | 0) < 0) {
        Y() | 0;Sa(12);return -1;
      }c[i >> 2] = a;if ((a | 0) > (X() | 0) ? (W() | 0) == 0 : 0) {
        c[i >> 2] = b;Sa(12);return -1;
      }return b | 0;
    }function hm(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0;g = l;l = l + 16 | 0;f = g | 0;em(a, b, d, e, f) | 0;l = g;return (A = c[f + 4 >> 2] | 0, c[f >> 2] | 0) | 0;
    }function im(a) {
      a = a | 0;return (a & 255) << 24 | (a >> 8 & 255) << 16 | (a >> 16 & 255) << 8 | a >>> 24 | 0;
    }function jm(a, b, c, d, e, f) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;f = f | 0;pb[a & 1](b | 0, c | 0, d | 0, e | 0, f | 0);
    }function km(a, b, c) {
      a = a | 0;b = b | 0;c = +c;qb[a & 31](b | 0, +c);
    }function lm(a, b, c, d) {
      a = a | 0;b = b | 0;c = T(c);d = T(d);return T(rb[a & 0](b | 0, T(c), T(d)));
    }function mm(a, b) {
      a = a | 0;b = b | 0;sb[a & 127](b | 0);
    }function nm(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;tb[a & 31](b | 0, c | 0);
    }function om(a, b) {
      a = a | 0;b = b | 0;return ub[a & 31](b | 0) | 0;
    }function pm(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = +c;d = +d;e = e | 0;vb[a & 1](b | 0, +c, +d, e | 0);
    }function qm(a, b, c, d) {
      a = a | 0;b = b | 0;c = +c;d = +d;wb[a & 1](b | 0, +c, +d);
    }function rm(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;return xb[a & 15](b | 0, c | 0, d | 0) | 0;
    }function sm(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;return +yb[a & 1](b | 0, c | 0, d | 0);
    }function tm(a, b) {
      a = a | 0;b = b | 0;return +zb[a & 15](b | 0);
    }function um(a, b, c) {
      a = a | 0;b = b | 0;c = +c;return Ab[a & 1](b | 0, +c) | 0;
    }function vm(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return Bb[a & 15](b | 0, c | 0) | 0;
    }function wm(a, b, c, d, e, f) {
      a = a | 0;b = b | 0;c = c | 0;d = +d;e = +e;f = f | 0;Cb[a & 1](b | 0, c | 0, +d, +e, f | 0);
    }function xm(a, b, c, d, e, f, g) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;f = f | 0;g = g | 0;Db[a & 1](b | 0, c | 0, d | 0, e | 0, f | 0, g | 0);
    }function ym(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return +Eb[a & 7](b | 0, c | 0);
    }function zm(a) {
      a = a | 0;return Fb[a & 7]() | 0;
    }function Am(a, b, c, d, e, f) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;f = f | 0;return Gb[a & 1](b | 0, c | 0, d | 0, e | 0, f | 0) | 0;
    }function Bm(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = +e;Hb[a & 1](b | 0, c | 0, d | 0, +e);
    }function Cm(a, b, c, d, e, f, g) {
      a = a | 0;b = b | 0;c = c | 0;d = T(d);e = e | 0;f = T(f);g = g | 0;Ib[a & 1](b | 0, c | 0, T(d), e | 0, T(f), g | 0);
    }function Dm(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;Jb[a & 15](b | 0, c | 0, d | 0);
    }function Em(a) {
      a = a | 0;Kb[a & 0]();
    }function Fm(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = +d;Lb[a & 15](b | 0, c | 0, +d);
    }function Gm(a, b, c) {
      a = a | 0;b = +b;c = +c;return Mb[a & 1](+b, +c) | 0;
    }function Hm(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;Nb[a & 15](b | 0, c | 0, d | 0, e | 0);
    }function Im(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;U(0);
    }function Jm(a, b) {
      a = a | 0;b = +b;U(1);
    }function Km(a, b, c) {
      a = a | 0;b = T(b);c = T(c);U(2);return ob;
    }function Lm(a) {
      a = a | 0;U(3);
    }function Mm(a, b) {
      a = a | 0;b = b | 0;U(4);
    }function Nm(a) {
      a = a | 0;U(5);return 0;
    }function Om(a, b, c, d) {
      a = a | 0;b = +b;c = +c;d = d | 0;U(6);
    }function Pm(a, b, c) {
      a = a | 0;b = +b;c = +c;U(7);
    }function Qm(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;U(8);return 0;
    }function Rm(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;U(9);return 0.0;
    }function Sm(a) {
      a = a | 0;U(10);return 0.0;
    }function Tm(a, b) {
      a = a | 0;b = +b;U(11);return 0;
    }function Um(a, b) {
      a = a | 0;b = b | 0;U(12);return 0;
    }function Vm(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = +c;d = +d;e = e | 0;U(13);
    }function Wm(a, b, c, d, e, f) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;f = f | 0;U(14);
    }function Xm(a, b) {
      a = a | 0;b = b | 0;U(15);return 0.0;
    }function Ym() {
      U(16);return 0;
    }function Zm(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;U(17);return 0;
    }function _m(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = +d;U(18);
    }function $m(a, b, c, d, e, f) {
      a = a | 0;b = b | 0;c = T(c);d = d | 0;e = T(e);f = f | 0;U(19);
    }function an(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;U(20);
    }function bn() {
      U(21);
    }function cn(a, b, c) {
      a = a | 0;b = b | 0;c = +c;U(22);
    }function dn(a, b) {
      a = +a;b = +b;U(23);return 0;
    }function en(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;U(24);
    }
    function Ob(a) {
      a = a | 0;var b = 0;b = l;l = l + a | 0;l = l + 15 & -16;return b | 0;
    }function Pb() {
      return l | 0;
    }function Qb(a) {
      a = a | 0;l = a;
    }function Rb(a, b) {
      a = a | 0;b = b | 0;l = a;m = b;
    }function Sb(a, b) {
      a = a | 0;b = b | 0;if (!p) {
        p = a;q = b;
      }
    }function Tb(a) {
      a = a | 0;A = a;
    }function Ub() {
      return A | 0;
    }function Vb(a) {
      a = a | 0;if (!a) return;sb[c[4] & 127](c[a + 8 >> 2] | 0);sb[c[4] & 127](a);return;
    }function Wb(a) {
      a = a | 0;if (!a) a = 0;else a = c[a + 4 >> 2] | 0;return a | 0;
    }function Xb(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;e = c[a >> 2] | 0;if (!e) {
        e = ub[c[2] & 31](12) | 0;kc((e | 0) != 0, 2632);c[e >> 2] = 4;c[e + 4 >> 2] = 0;h = ub[c[2] & 31](16) | 0;c[e + 8 >> 2] = h;kc((h | 0) != 0, 2667);c[a >> 2] = e;
      }h = e + 4 | 0;a = c[h >> 2] | 0;if ((a | 0) == (c[e >> 2] | 0)) {
        c[e >> 2] = a << 1;f = e + 8 | 0;g = Bb[c[3] & 15](c[f >> 2] | 0, a << 3) | 0;c[f >> 2] = g;kc((g | 0) != 0, 2703);g = c[h >> 2] | 0;
      } else {
        f = e + 8 | 0;g = a;
      }a = c[f >> 2] | 0;if (g >>> 0 > d >>> 0) e = g;else {
        f = a;g = g + 1 | 0;c[h >> 2] = g;d = f + (d << 2) | 0;c[d >> 2] = b;return;
      }do {
        i = e;e = e + -1 | 0;c[a + (i << 2) >> 2] = c[a + (e << 2) >> 2];a = c[f >> 2] | 0;
      } while (e >>> 0 > d >>> 0);i = g + 1 | 0;c[h >> 2] = i;i = a + (d << 2) | 0;c[i >> 2] = b;return;
    }function Yb(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;i = a + 4 | 0;f = c[i >> 2] | 0;if (!f) {
        i = 0;return i | 0;
      }g = a + 8 | 0;e = c[g >> 2] | 0;a = 0;while (1) {
        d = e + (a << 2) | 0;if ((c[d >> 2] | 0) == (b | 0)) break;a = a + 1 | 0;if (a >>> 0 >= f >>> 0) {
          a = 0;h = 8;break;
        }
      }if ((h | 0) == 8) return a | 0;c[d >> 2] = 0;d = f + -1 | 0;if (d >>> 0 > a >>> 0) do {
        f = c[g >> 2] | 0;h = a;a = a + 1 | 0;c[f + (h << 2) >> 2] = c[f + (a << 2) >> 2];c[(c[g >> 2] | 0) + (a << 2) >> 2] = 0;
      } while ((a | 0) != (d | 0));c[i >> 2] = d;i = b;return i | 0;
    }function Zb(a, b) {
      a = a | 0;b = b | 0;if (!a) {
        b = 0;return b | 0;
      }if (!(c[a + 4 >> 2] | 0)) {
        b = 0;return b | 0;
      }b = c[(c[a + 8 >> 2] | 0) + (b << 2) >> 2] | 0;return b | 0;
    }function _b(b) {
      b = b | 0;var d = 0,
          e = 0,
          f = 0;f = l;l = l + 16 | 0;e = f;d = ub[c[2] & 31](992) | 0;if (!d) {
        c[e >> 2] = 2745;$b(b, 5, 2741, e);
      }c[2186] = (c[2186] | 0) + 1;cm(d | 0, 20, 992) | 0;if (!(a[b + 2 >> 0] | 0)) {
        e = d + 968 | 0;c[e >> 2] = b;l = f;return d | 0;
      }c[d + 4 >> 2] = 2;c[d + 12 >> 2] = 4;e = d + 968 | 0;c[e >> 2] = b;l = f;return d | 0;
    }function $b(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0;f = l;l = l + 16 | 0;g = f;c[g >> 2] = e;e = a | 0 ? a : 1020;Gb[c[e + 8 >> 2] & 1](e, 0, b, d, g) | 0;if ((b | 0) == 5) Va();else {
        l = f;return;
      }
    }function ac(a, b, d, e, f) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;f = f | 0;switch (d | 0) {case 5:case 0:
          {
            f = Vk(c[502] | 0, e, f) | 0;return f | 0;
          }default:
          {
            f = Dl(e, f) | 0;return f | 0;
          }}return 0;
    }function bc() {
      var b = 0,
          d = 0,
          e = 0;e = l;l = l + 16 | 0;d = e;b = ub[c[2] & 31](992) | 0;if (!b) {
        c[d >> 2] = 2745;$b(1020, 5, 2741, d);
      }c[2186] = (c[2186] | 0) + 1;cm(b | 0, 20, 992) | 0;if (!(a[1022] | 0)) {
        d = b + 968 | 0;c[d >> 2] = 1020;l = e;return b | 0;
      }c[b + 4 >> 2] = 2;c[b + 12 >> 2] = 4;d = b + 968 | 0;c[d >> 2] = 1020;l = e;return b | 0;
    }function cc(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0,
          f = 0;b = a + 944 | 0;d = c[b >> 2] | 0;if (d | 0) {
        Yb(c[d + 948 >> 2] | 0, a) | 0;c[b >> 2] = 0;
      }e = a + 948 | 0;f = Wb(c[e >> 2] | 0) | 0;b = c[e >> 2] | 0;if (f) {
        d = 0;do {
          c[(Zb(b, d) | 0) + 944 >> 2] = 0;d = d + 1 | 0;b = c[e >> 2] | 0;
        } while ((d | 0) != (f | 0));
      }Vb(b);sb[c[4] & 127](a);c[2186] = (c[2186] | 0) + -1;return;
    }function dc(a) {
      a = a | 0;return Wb(c[a + 948 >> 2] | 0) | 0;
    }function ec(a, b) {
      a = a | 0;b = b | 0;return Zb(c[a + 948 >> 2] | 0, b) | 0;
    }function fc(b, d) {
      b = b | 0;d = d | 0;if (!(Yb(c[b + 948 >> 2] | 0, d) | 0)) return;cm(d + 400 | 0, 420, 540) | 0;c[d + 944 >> 2] = 0;while (1) {
        d = b + 976 | 0;if (a[d >> 0] | 0) {
          b = 5;break;
        }a[d >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 5;break;
        }
      }if ((b | 0) == 5) return;
    }function gc(b) {
      b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0;g = l;l = l + 16 | 0;f = g + 8 | 0;e = g;d = b + 948 | 0;if (Wb(c[d >> 2] | 0) | 0) {
        c[e >> 2] = 2780;hc(b, 5, 2741, e);
      }if (c[b + 944 >> 2] | 0) {
        c[f >> 2] = 2834;hc(b, 5, 2741, f);
      }Vb(c[d >> 2] | 0);e = b + 968 | 0;d = c[e >> 2] | 0;cm(b | 0, 20, 992) | 0;if (!(a[d + 2 >> 0] | 0)) {
        c[e >> 2] = d;l = g;return;
      }c[b + 4 >> 2] = 2;c[b + 12 >> 2] = 4;c[e >> 2] = d;l = g;return;
    }function hc(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0;g = l;l = l + 16 | 0;f = g;c[f >> 2] = e;if (!a) e = 0;else e = c[a + 968 >> 2] | 0;e = e | 0 ? e : 1020;Gb[c[e + 8 >> 2] & 1](e, a, b, d, f) | 0;if ((b | 0) == 5) Va();else {
        l = g;return;
      }
    }function ic() {
      return c[2186] | 0;
    }function jc() {
      var a = 0,
          b = 0,
          d = 0;d = l;l = l + 16 | 0;b = d;a = ub[c[2] & 31](16) | 0;if (!a) {
        c[b >> 2] = 2881;hc(0, 5, 2741, b);
      }c[2187] = (c[2187] | 0) + 1;c[a >> 2] = c[255];c[a + 4 >> 2] = c[256];c[a + 8 >> 2] = c[257];c[a + 12 >> 2] = c[258];l = d;return a | 0;
    }function kc(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;e = l;l = l + 16 | 0;d = e;if (!a) {
        c[d >> 2] = b;hc(0, 5, 2741, d);
      }l = e;return;
    }function lc(a) {
      a = a | 0;sb[c[4] & 127](a);c[2187] = (c[2187] | 0) + -1;return;
    }function mc(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;e = l;l = l + 16 | 0;d = e;if (b) {
        if (!(Wb(c[a + 948 >> 2] | 0) | 0)) d = 1;else {
          c[d >> 2] = 2918;hc(a, 5, 2741, d);d = 1;
        }
      } else {
        d = 0;b = 0;
      }c[a + 956 >> 2] = b;c[a + 980 >> 2] = d;l = e;return;
    }function nc(b, d, e) {
      b = b | 0;d = d | 0;e = e | 0;var f = 0,
          h = 0,
          i = 0,
          j = 0;j = l;l = l + 16 | 0;i = j + 8 | 0;h = j;f = d + 944 | 0;if (c[f >> 2] | 0) {
        c[h >> 2] = 2998;hc(b, 5, 2741, h);
      }if (c[b + 956 >> 2] | 0) {
        c[i >> 2] = 3052;hc(b, 5, 2741, i);
      }Xb(b + 948 | 0, d, e);c[f >> 2] = b;while (1) {
        d = b + 976 | 0;if (a[d >> 0] | 0) {
          b = 8;break;
        }a[d >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 8;break;
        }
      }if ((b | 0) == 8) {
        l = j;return;
      }
    }function oc(a) {
      a = a | 0;return c[a + 944 >> 2] | 0;
    }function pc(b) {
      b = b | 0;var d = 0,
          e = 0;e = l;l = l + 16 | 0;d = e;if (!(c[b + 956 >> 2] | 0)) {
        c[d >> 2] = 3121;hc(b, 5, 2741, d);
      }while (1) {
        d = b + 976 | 0;if (a[d >> 0] | 0) {
          b = 5;break;
        }a[d >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 5;break;
        }
      }if ((b | 0) == 5) {
        l = e;return;
      }
    }function qc(b) {
      b = b | 0;return (a[b + 976 >> 0] | 0) != 0 | 0;
    }function rc(b, d) {
      b = b | 0;d = d | 0;if (!(yl(b, d, 400) | 0)) return;cm(b | 0, d | 0, 400) | 0;while (1) {
        d = b + 976 | 0;if (a[d >> 0] | 0) {
          b = 5;break;
        }a[d >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 5;break;
        }
      }if ((b | 0) == 5) return;
    }function sc(a) {
      a = a | 0;var b = ob;b = T(g[a + 44 >> 2]);return T(((g[j >> 2] = b, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040 ? T(0.0) : b);
    }function tc(b) {
      b = b | 0;var d = ob;d = T(g[b + 48 >> 2]);if (((g[j >> 2] = d, c[j >> 2] | 0) & 2147483647) >>> 0 <= 2139095040) return T(d);d = a[(c[b + 968 >> 2] | 0) + 2 >> 0] | 0 ? T(1.0) : T(0.0);return T(d);
    }function uc(a, b) {
      a = a | 0;b = b | 0;c[a + 972 >> 2] = b;return;
    }function vc(a) {
      a = a | 0;return c[a + 972 >> 2] | 0;
    }function wc(b, d) {
      b = b | 0;d = d | 0;var e = 0;e = b + 4 | 0;if ((c[e >> 2] | 0) == (d | 0)) return;c[e >> 2] = d;while (1) {
        d = b + 976 | 0;if (a[d >> 0] | 0) {
          b = 5;break;
        }a[d >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 5;break;
        }
      }if ((b | 0) == 5) return;
    }function xc(a) {
      a = a | 0;return c[a + 4 >> 2] | 0;
    }function yc(b, d) {
      b = b | 0;d = d | 0;var e = 0;e = b + 8 | 0;if ((c[e >> 2] | 0) == (d | 0)) return;c[e >> 2] = d;while (1) {
        d = b + 976 | 0;if (a[d >> 0] | 0) {
          b = 5;break;
        }a[d >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 5;break;
        }
      }if ((b | 0) == 5) return;
    }function zc(a) {
      a = a | 0;return c[a + 8 >> 2] | 0;
    }function Ac(b, d) {
      b = b | 0;d = d | 0;var e = 0;e = b + 12 | 0;if ((c[e >> 2] | 0) == (d | 0)) return;c[e >> 2] = d;while (1) {
        d = b + 976 | 0;if (a[d >> 0] | 0) {
          b = 5;break;
        }a[d >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 5;break;
        }
      }if ((b | 0) == 5) return;
    }function Bc(a) {
      a = a | 0;return c[a + 12 >> 2] | 0;
    }function Cc(b, d) {
      b = b | 0;d = d | 0;var e = 0;e = b + 16 | 0;if ((c[e >> 2] | 0) == (d | 0)) return;c[e >> 2] = d;while (1) {
        d = b + 976 | 0;if (a[d >> 0] | 0) {
          b = 5;break;
        }a[d >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 5;break;
        }
      }if ((b | 0) == 5) return;
    }function Dc(a) {
      a = a | 0;return c[a + 16 >> 2] | 0;
    }function Ec(b, d) {
      b = b | 0;d = d | 0;var e = 0;e = b + 20 | 0;if ((c[e >> 2] | 0) == (d | 0)) return;c[e >> 2] = d;while (1) {
        d = b + 976 | 0;if (a[d >> 0] | 0) {
          b = 5;break;
        }a[d >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 5;break;
        }
      }if ((b | 0) == 5) return;
    }function Fc(a) {
      a = a | 0;return c[a + 20 >> 2] | 0;
    }function Gc(b, d) {
      b = b | 0;d = d | 0;var e = 0;e = b + 24 | 0;if ((c[e >> 2] | 0) == (d | 0)) return;c[e >> 2] = d;while (1) {
        d = b + 976 | 0;if (a[d >> 0] | 0) {
          b = 5;break;
        }a[d >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 5;break;
        }
      }if ((b | 0) == 5) return;
    }function Hc(a) {
      a = a | 0;return c[a + 24 >> 2] | 0;
    }function Ic(b, d) {
      b = b | 0;d = d | 0;var e = 0;e = b + 28 | 0;if ((c[e >> 2] | 0) == (d | 0)) return;c[e >> 2] = d;while (1) {
        d = b + 976 | 0;if (a[d >> 0] | 0) {
          b = 5;break;
        }a[d >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 5;break;
        }
      }if ((b | 0) == 5) return;
    }function Jc(a) {
      a = a | 0;return c[a + 28 >> 2] | 0;
    }function Kc(b, d) {
      b = b | 0;d = d | 0;var e = 0;e = b + 32 | 0;if ((c[e >> 2] | 0) == (d | 0)) return;c[e >> 2] = d;while (1) {
        d = b + 976 | 0;if (a[d >> 0] | 0) {
          b = 5;break;
        }a[d >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 5;break;
        }
      }if ((b | 0) == 5) return;
    }function Lc(a) {
      a = a | 0;return c[a + 32 >> 2] | 0;
    }function Mc(b, d) {
      b = b | 0;d = d | 0;var e = 0;e = b + 36 | 0;if ((c[e >> 2] | 0) == (d | 0)) return;c[e >> 2] = d;while (1) {
        d = b + 976 | 0;if (a[d >> 0] | 0) {
          b = 5;break;
        }a[d >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 5;break;
        }
      }if ((b | 0) == 5) return;
    }function Nc(a) {
      a = a | 0;return c[a + 36 >> 2] | 0;
    }function Oc(b, d) {
      b = b | 0;d = T(d);var e = 0;e = b + 40 | 0;if (!(T(g[e >> 2]) != d)) return;g[e >> 2] = d;while (1) {
        e = b + 976 | 0;if (a[e >> 0] | 0) {
          b = 5;break;
        }a[e >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 5;break;
        }
      }if ((b | 0) == 5) return;
    }function Pc(b, d) {
      b = b | 0;d = T(d);var e = 0;e = b + 44 | 0;if (!(T(g[e >> 2]) != d)) return;g[e >> 2] = d;while (1) {
        e = b + 976 | 0;if (a[e >> 0] | 0) {
          b = 5;break;
        }a[e >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 5;break;
        }
      }if ((b | 0) == 5) return;
    }function Qc(b, d) {
      b = b | 0;d = T(d);var e = 0;e = b + 48 | 0;if (!(T(g[e >> 2]) != d)) return;g[e >> 2] = d;while (1) {
        e = b + 976 | 0;if (a[e >> 0] | 0) {
          b = 5;break;
        }a[e >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 5;break;
        }
      }if ((b | 0) == 5) return;
    }function Rc(b, d) {
      b = b | 0;d = T(d);var e = 0,
          f = 0;f = b + 52 | 0;e = b + 56 | 0;if (!(T(g[f >> 2]) != d) ? (c[e >> 2] | 0) == 1 : 0) return;g[f >> 2] = d;c[e >> 2] = ((g[j >> 2] = d, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040 ? 3 : 1;while (1) {
        e = b + 976 | 0;if (a[e >> 0] | 0) {
          b = 6;break;
        }a[e >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 6;break;
        }
      }if ((b | 0) == 6) return;
    }function Sc(b, d) {
      b = b | 0;d = T(d);var e = 0,
          f = 0;f = b + 52 | 0;e = b + 56 | 0;if (!(T(g[f >> 2]) != d) ? (c[e >> 2] | 0) == 2 : 0) return;g[f >> 2] = d;c[e >> 2] = ((g[j >> 2] = d, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040 ? 3 : 2;while (1) {
        e = b + 976 | 0;if (a[e >> 0] | 0) {
          b = 6;break;
        }a[e >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 6;break;
        }
      }if ((b | 0) == 6) return;
    }function Tc(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;e = b + 52 | 0;d = c[e + 4 >> 2] | 0;b = a;c[b >> 2] = c[e >> 2];c[b + 4 >> 2] = d;return;
    }function Uc(b, d, e) {
      b = b | 0;d = d | 0;e = T(e);var f = 0;f = b + 132 + (d << 3) | 0;d = b + 132 + (d << 3) + 4 | 0;if (!(T(g[f >> 2]) != e) ? (c[d >> 2] | 0) == 1 : 0) return;g[f >> 2] = e;c[d >> 2] = ((g[j >> 2] = e, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041 & 1;while (1) {
        d = b + 976 | 0;if (a[d >> 0] | 0) {
          b = 6;break;
        }a[d >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 6;break;
        }
      }if ((b | 0) == 6) return;
    }function Vc(b, d, e) {
      b = b | 0;d = d | 0;e = T(e);var f = 0;f = b + 132 + (d << 3) | 0;d = b + 132 + (d << 3) + 4 | 0;if (!(T(g[f >> 2]) != e) ? (c[d >> 2] | 0) == 2 : 0) return;g[f >> 2] = e;c[d >> 2] = ((g[j >> 2] = e, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040 ? 0 : 2;while (1) {
        d = b + 976 | 0;if (a[d >> 0] | 0) {
          b = 6;break;
        }a[d >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 6;break;
        }
      }if ((b | 0) == 6) return;
    }function Wc(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0;e = b + 132 + (d << 3) | 0;b = c[e + 4 >> 2] | 0;d = a;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = b;return;
    }function Xc(b, d, e) {
      b = b | 0;d = d | 0;e = T(e);var f = 0;f = b + 60 + (d << 3) | 0;d = b + 60 + (d << 3) + 4 | 0;if (!(T(g[f >> 2]) != e) ? (c[d >> 2] | 0) == 1 : 0) return;g[f >> 2] = e;c[d >> 2] = ((g[j >> 2] = e, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041 & 1;while (1) {
        d = b + 976 | 0;if (a[d >> 0] | 0) {
          b = 6;break;
        }a[d >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 6;break;
        }
      }if ((b | 0) == 6) return;
    }function Yc(b, d, e) {
      b = b | 0;d = d | 0;e = T(e);var f = 0;f = b + 60 + (d << 3) | 0;d = b + 60 + (d << 3) + 4 | 0;if (!(T(g[f >> 2]) != e) ? (c[d >> 2] | 0) == 2 : 0) return;g[f >> 2] = e;c[d >> 2] = ((g[j >> 2] = e, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040 ? 0 : 2;while (1) {
        d = b + 976 | 0;if (a[d >> 0] | 0) {
          b = 6;break;
        }a[d >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 6;break;
        }
      }if ((b | 0) == 6) return;
    }function Zc(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0;e = b + 60 + (d << 3) | 0;b = c[e + 4 >> 2] | 0;d = a;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = b;return;
    }function _c(b, d) {
      b = b | 0;d = d | 0;var e = 0;e = b + 60 + (d << 3) + 4 | 0;if ((c[e >> 2] | 0) == 3) return;g[b + 60 + (d << 3) >> 2] = T(t);c[e >> 2] = 3;while (1) {
        d = b + 976 | 0;if (a[d >> 0] | 0) {
          b = 5;break;
        }a[d >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 5;break;
        }
      }if ((b | 0) == 5) return;
    }function $c(b, d, e) {
      b = b | 0;d = d | 0;e = T(e);var f = 0;f = b + 204 + (d << 3) | 0;d = b + 204 + (d << 3) + 4 | 0;if (!(T(g[f >> 2]) != e) ? (c[d >> 2] | 0) == 1 : 0) return;g[f >> 2] = e;c[d >> 2] = ((g[j >> 2] = e, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041 & 1;while (1) {
        d = b + 976 | 0;if (a[d >> 0] | 0) {
          b = 6;break;
        }a[d >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 6;break;
        }
      }if ((b | 0) == 6) return;
    }function ad(b, d, e) {
      b = b | 0;d = d | 0;e = T(e);var f = 0;f = b + 204 + (d << 3) | 0;d = b + 204 + (d << 3) + 4 | 0;if (!(T(g[f >> 2]) != e) ? (c[d >> 2] | 0) == 2 : 0) return;g[f >> 2] = e;c[d >> 2] = ((g[j >> 2] = e, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040 ? 0 : 2;while (1) {
        d = b + 976 | 0;if (a[d >> 0] | 0) {
          b = 6;break;
        }a[d >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 6;break;
        }
      }if ((b | 0) == 6) return;
    }function bd(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0;e = b + 204 + (d << 3) | 0;b = c[e + 4 >> 2] | 0;d = a;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = b;return;
    }function cd(b, d, e) {
      b = b | 0;d = d | 0;e = T(e);var f = 0;f = b + 276 + (d << 3) | 0;d = b + 276 + (d << 3) + 4 | 0;if (!(T(g[f >> 2]) != e) ? (c[d >> 2] | 0) == 1 : 0) return;g[f >> 2] = e;c[d >> 2] = ((g[j >> 2] = e, c[j >> 2] | 0) & 2147483647) >>> 0 < 2139095041 & 1;while (1) {
        d = b + 976 | 0;if (a[d >> 0] | 0) {
          b = 6;break;
        }a[d >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 6;break;
        }
      }if ((b | 0) == 6) return;
    }function dd(a, b) {
      a = a | 0;b = b | 0;return T(g[a + 276 + (b << 3) >> 2]);
    }function ed(b, d) {
      b = b | 0;d = T(d);var e = 0,
          f = 0;f = b + 348 | 0;e = b + 352 | 0;if (!(T(g[f >> 2]) != d) ? (c[e >> 2] | 0) == 1 : 0) return;g[f >> 2] = d;c[e >> 2] = ((g[j >> 2] = d, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040 ? 3 : 1;while (1) {
        e = b + 976 | 0;if (a[e >> 0] | 0) {
          b = 6;break;
        }a[e >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 6;break;
        }
      }if ((b | 0) == 6) return;
    }function fd(b, d) {
      b = b | 0;d = T(d);var e = 0,
          f = 0;f = b + 348 | 0;e = b + 352 | 0;if (!(T(g[f >> 2]) != d) ? (c[e >> 2] | 0) == 2 : 0) return;g[f >> 2] = d;c[e >> 2] = ((g[j >> 2] = d, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040 ? 3 : 2;while (1) {
        e = b + 976 | 0;if (a[e >> 0] | 0) {
          b = 6;break;
        }a[e >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 6;break;
        }
      }if ((b | 0) == 6) return;
    }function gd(b) {
      b = b | 0;var d = 0;d = b + 352 | 0;if ((c[d >> 2] | 0) == 3) return;g[b + 348 >> 2] = T(t);c[d >> 2] = 3;while (1) {
        d = b + 976 | 0;if (a[d >> 0] | 0) {
          b = 5;break;
        }a[d >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 5;break;
        }
      }if ((b | 0) == 5) return;
    }function hd(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;e = b + 348 | 0;d = c[e + 4 >> 2] | 0;b = a;c[b >> 2] = c[e >> 2];c[b + 4 >> 2] = d;return;
    }function id(b, d) {
      b = b | 0;d = T(d);var e = 0,
          f = 0;f = b + 356 | 0;e = b + 360 | 0;if (!(T(g[f >> 2]) != d) ? (c[e >> 2] | 0) == 1 : 0) return;g[f >> 2] = d;c[e >> 2] = ((g[j >> 2] = d, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040 ? 3 : 1;while (1) {
        e = b + 976 | 0;if (a[e >> 0] | 0) {
          b = 6;break;
        }a[e >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 6;break;
        }
      }if ((b | 0) == 6) return;
    }function jd(b, d) {
      b = b | 0;d = T(d);var e = 0,
          f = 0;f = b + 356 | 0;e = b + 360 | 0;if (!(T(g[f >> 2]) != d) ? (c[e >> 2] | 0) == 2 : 0) return;g[f >> 2] = d;c[e >> 2] = ((g[j >> 2] = d, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040 ? 3 : 2;while (1) {
        e = b + 976 | 0;if (a[e >> 0] | 0) {
          b = 6;break;
        }a[e >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 6;break;
        }
      }if ((b | 0) == 6) return;
    }function kd(b) {
      b = b | 0;var d = 0;d = b + 360 | 0;if ((c[d >> 2] | 0) == 3) return;g[b + 356 >> 2] = T(t);c[d >> 2] = 3;while (1) {
        d = b + 976 | 0;if (a[d >> 0] | 0) {
          b = 5;break;
        }a[d >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 5;break;
        }
      }if ((b | 0) == 5) return;
    }function ld(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;e = b + 356 | 0;d = c[e + 4 >> 2] | 0;b = a;c[b >> 2] = c[e >> 2];c[b + 4 >> 2] = d;return;
    }function md(b, d) {
      b = b | 0;d = T(d);var e = 0,
          f = 0;f = b + 364 | 0;e = b + 368 | 0;if (!(T(g[f >> 2]) != d) ? (c[e >> 2] | 0) == 1 : 0) return;g[f >> 2] = d;c[e >> 2] = ((g[j >> 2] = d, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040 ? 3 : 1;while (1) {
        e = b + 976 | 0;if (a[e >> 0] | 0) {
          b = 6;break;
        }a[e >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 6;break;
        }
      }if ((b | 0) == 6) return;
    }function nd(b, d) {
      b = b | 0;d = T(d);var e = 0,
          f = 0;f = b + 364 | 0;e = b + 368 | 0;if (!(T(g[f >> 2]) != d) ? (c[e >> 2] | 0) == 2 : 0) return;g[f >> 2] = d;c[e >> 2] = ((g[j >> 2] = d, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040 ? 3 : 2;while (1) {
        e = b + 976 | 0;if (a[e >> 0] | 0) {
          b = 6;break;
        }a[e >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 6;break;
        }
      }if ((b | 0) == 6) return;
    }function od(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;e = b + 364 | 0;d = c[e + 4 >> 2] | 0;b = a;c[b >> 2] = c[e >> 2];c[b + 4 >> 2] = d;return;
    }function pd(b, d) {
      b = b | 0;d = T(d);var e = 0,
          f = 0;f = b + 372 | 0;e = b + 376 | 0;if (!(T(g[f >> 2]) != d) ? (c[e >> 2] | 0) == 1 : 0) return;g[f >> 2] = d;c[e >> 2] = ((g[j >> 2] = d, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040 ? 3 : 1;while (1) {
        e = b + 976 | 0;if (a[e >> 0] | 0) {
          b = 6;break;
        }a[e >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 6;break;
        }
      }if ((b | 0) == 6) return;
    }function qd(b, d) {
      b = b | 0;d = T(d);var e = 0,
          f = 0;f = b + 372 | 0;e = b + 376 | 0;if (!(T(g[f >> 2]) != d) ? (c[e >> 2] | 0) == 2 : 0) return;g[f >> 2] = d;c[e >> 2] = ((g[j >> 2] = d, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040 ? 3 : 2;while (1) {
        e = b + 976 | 0;if (a[e >> 0] | 0) {
          b = 6;break;
        }a[e >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 6;break;
        }
      }if ((b | 0) == 6) return;
    }function rd(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;e = b + 372 | 0;d = c[e + 4 >> 2] | 0;b = a;c[b >> 2] = c[e >> 2];c[b + 4 >> 2] = d;return;
    }function sd(b, d) {
      b = b | 0;d = T(d);var e = 0,
          f = 0;f = b + 380 | 0;e = b + 384 | 0;if (!(T(g[f >> 2]) != d) ? (c[e >> 2] | 0) == 1 : 0) return;g[f >> 2] = d;c[e >> 2] = ((g[j >> 2] = d, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040 ? 3 : 1;while (1) {
        e = b + 976 | 0;if (a[e >> 0] | 0) {
          b = 6;break;
        }a[e >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 6;break;
        }
      }if ((b | 0) == 6) return;
    }function td(b, d) {
      b = b | 0;d = T(d);var e = 0,
          f = 0;f = b + 380 | 0;e = b + 384 | 0;if (!(T(g[f >> 2]) != d) ? (c[e >> 2] | 0) == 2 : 0) return;g[f >> 2] = d;c[e >> 2] = ((g[j >> 2] = d, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040 ? 3 : 2;while (1) {
        e = b + 976 | 0;if (a[e >> 0] | 0) {
          b = 6;break;
        }a[e >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 6;break;
        }
      }if ((b | 0) == 6) return;
    }function ud(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;e = b + 380 | 0;d = c[e + 4 >> 2] | 0;b = a;c[b >> 2] = c[e >> 2];c[b + 4 >> 2] = d;return;
    }function vd(b, d) {
      b = b | 0;d = T(d);var e = 0,
          f = 0;f = b + 388 | 0;e = b + 392 | 0;if (!(T(g[f >> 2]) != d) ? (c[e >> 2] | 0) == 1 : 0) return;g[f >> 2] = d;c[e >> 2] = ((g[j >> 2] = d, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040 ? 3 : 1;while (1) {
        e = b + 976 | 0;if (a[e >> 0] | 0) {
          b = 6;break;
        }a[e >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 6;break;
        }
      }if ((b | 0) == 6) return;
    }function wd(b, d) {
      b = b | 0;d = T(d);var e = 0,
          f = 0;f = b + 388 | 0;e = b + 392 | 0;if (!(T(g[f >> 2]) != d) ? (c[e >> 2] | 0) == 2 : 0) return;g[f >> 2] = d;c[e >> 2] = ((g[j >> 2] = d, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040 ? 3 : 2;while (1) {
        e = b + 976 | 0;if (a[e >> 0] | 0) {
          b = 6;break;
        }a[e >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 6;break;
        }
      }if ((b | 0) == 6) return;
    }function xd(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;e = b + 388 | 0;d = c[e + 4 >> 2] | 0;b = a;c[b >> 2] = c[e >> 2];c[b + 4 >> 2] = d;return;
    }function yd(b, d) {
      b = b | 0;d = T(d);var e = 0;e = b + 396 | 0;if (!(T(g[e >> 2]) != d)) return;g[e >> 2] = d;while (1) {
        e = b + 976 | 0;if (a[e >> 0] | 0) {
          b = 5;break;
        }a[e >> 0] = 1;g[b + 504 >> 2] = T(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 5;break;
        }
      }if ((b | 0) == 5) return;
    }function zd(a) {
      a = a | 0;return T(g[a + 396 >> 2]);
    }function Ad(a) {
      a = a | 0;return T(g[a + 400 >> 2]);
    }function Bd(a) {
      a = a | 0;return T(g[a + 404 >> 2]);
    }function Cd(a) {
      a = a | 0;return T(g[a + 408 >> 2]);
    }function Dd(a) {
      a = a | 0;return T(g[a + 412 >> 2]);
    }function Ed(a) {
      a = a | 0;return T(g[a + 416 >> 2]);
    }function Fd(a) {
      a = a | 0;return T(g[a + 420 >> 2]);
    }function Gd(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = ob;e = l;l = l + 16 | 0;d = e;if (b >>> 0 >= 5) {
        c[d >> 2] = 3207;hc(a, 5, 2741, d);
      }switch (b | 0) {case 0:
          {
            b = (c[a + 496 >> 2] | 0) == 2 ? 5 : 4;break;
          }case 2:
          {
            b = (c[a + 496 >> 2] | 0) == 2 ? 4 : 5;break;
          }default:
          {}}f = T(g[a + 424 + (b << 2) >> 2]);l = e;return T(f);
    }function Hd(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = ob;e = l;l = l + 16 | 0;d = e;if (b >>> 0 >= 5) {
        c[d >> 2] = 3207;hc(a, 5, 2741, d);
      }switch (b | 0) {case 0:
          {
            b = (c[a + 496 >> 2] | 0) == 2 ? 5 : 4;break;
          }case 2:
          {
            b = (c[a + 496 >> 2] | 0) == 2 ? 4 : 5;break;
          }default:
          {}}f = T(g[a + 448 + (b << 2) >> 2]);l = e;return T(f);
    }function Id(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = ob;e = l;l = l + 16 | 0;d = e;if (b >>> 0 >= 5) {
        c[d >> 2] = 3207;hc(a, 5, 2741, d);
      }switch (b | 0) {case 0:
          {
            b = (c[a + 496 >> 2] | 0) == 2 ? 5 : 4;break;
          }case 2:
          {
            b = (c[a + 496 >> 2] | 0) == 2 ? 4 : 5;break;
          }default:
          {}}f = T(g[a + 472 + (b << 2) >> 2]);l = e;return T(f);
    }function Jd(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          i = 0,
          k = 0,
          m = ob,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0,
          u = 0,
          v = 0,
          w = 0,
          x = 0,
          y = 0,
          z = 0,
          A = 0,
          B = 0,
          C = 0,
          D = 0,
          E = 0,
          F = 0,
          G = 0,
          H = 0,
          I = 0,
          J = 0,
          K = 0,
          L = 0,
          M = 0,
          N = 0,
          O = 0,
          P = 0,
          Q = 0,
          R = 0,
          S = 0,
          U = 0,
          V = 0,
          W = 0,
          X = 0,
          Y = 0,
          Z = 0,
          _ = 0,
          $ = 0,
          aa = 0,
          ba = 0,
          ca = 0.0;ba = l;l = l + 544 | 0;aa = ba + 536 | 0;Z = ba + 528 | 0;$ = ba + 520 | 0;_ = ba + 512 | 0;X = ba + 504 | 0;W = ba + 496 | 0;V = ba + 488 | 0;U = ba + 464 | 0;S = ba + 456 | 0;R = ba + 432 | 0;Q = ba + 424 | 0;P = ba + 400 | 0;O = ba + 392 | 0;N = ba + 368 | 0;M = ba + 360 | 0;L = ba + 352 | 0;K = ba + 328 | 0;J = ba + 304 | 0;I = ba + 280 | 0;H = ba + 256 | 0;G = ba + 232 | 0;F = ba + 208 | 0;E = ba + 200 | 0;D = ba + 192 | 0;C = ba + 184 | 0;B = ba + 168 | 0;A = ba + 144 | 0;z = ba + 128 | 0;y = ba + 112 | 0;x = ba + 104 | 0;w = ba + 96 | 0;v = ba + 88 | 0;u = ba + 80 | 0;t = ba + 72 | 0;p = ba + 64 | 0;o = ba + 56 | 0;n = ba + 48 | 0;k = ba + 40 | 0;s = ba + 32 | 0;r = ba + 24 | 0;q = ba + 16 | 0;i = ba + 8 | 0;f = ba;Y = (d | 0) == 0;if (!Y) {
        e = 0;do {
          hc(a, 3, 3261, f);e = e + 1 | 0;
        } while ((e | 0) != (d | 0));
      }hc(a, 3, 3264, i);e = c[a + 964 >> 2] | 0;if (e | 0) sb[e & 127](a);if (b & 1 | 0) {
        hc(a, 3, 3270, q);h[r >> 3] = +T(g[a + 416 >> 2]);hc(a, 3, 3279, r);h[s >> 3] = +T(g[a + 420 >> 2]);hc(a, 3, 3291, s);h[k >> 3] = +T(g[a + 404 >> 2]);hc(a, 3, 3304, k);h[n >> 3] = +T(g[a + 400 >> 2]);hc(a, 3, 3314, n);hc(a, 3, 3324, o);
      }do if (b & 2 | 0) {
        hc(a, 3, 3327, p);e = c[a + 4 >> 2] | 0;if (e | 0) {
          c[t >> 2] = mb(e | 0) | 0;hc(a, 3, 3335, t);
        }e = c[a + 8 >> 2] | 0;if (e | 0) {
          c[u >> 2] = Ra(e | 0) | 0;hc(a, 3, 3356, u);
        }e = c[a + 16 >> 2] | 0;if ((e | 0) != 4) {
          c[v >> 2] = Ia(e | 0) | 0;hc(a, 3, 3378, v);
        }e = c[a + 12 >> 2] | 0;if ((e | 0) != 1) {
          c[w >> 2] = Ia(e | 0) | 0;hc(a, 3, 3396, w);
        }e = c[a + 20 >> 2] | 0;if (e | 0) {
          c[x >> 2] = Ia(e | 0) | 0;hc(a, 3, 3416, x);
        }m = T(g[a + 44 >> 2]);if (((g[j >> 2] = m, c[j >> 2] | 0) & 2147483647) >>> 0 <= 2139095040) {
          c[y >> 2] = 3442;h[y + 8 >> 3] = +m;hc(a, 3, 3433, y);
        }m = T(g[a + 48 >> 2]);if (((g[j >> 2] = m, c[j >> 2] | 0) & 2147483647) >>> 0 <= 2139095040) {
          c[z >> 2] = 3452;h[z + 8 >> 3] = +m;hc(a, 3, 3433, z);
        }e = c[a + 56 >> 2] | 0;switch (e | 0) {case 0:case 3:
            break;default:
            {
              ca = +T(g[a + 52 >> 2]);c[A >> 2] = 3480;h[A + 8 >> 3] = ca;c[A + 16 >> 2] = (e | 0) == 1 ? 3464 : 3467;hc(a, 3, 3469, A);
            }}m = T(g[a + 40 >> 2]);if (((g[j >> 2] = m, c[j >> 2] | 0) & 2147483647) >>> 0 <= 2139095040) {
          c[B >> 2] = 3491;h[B + 8 >> 3] = +m;hc(a, 3, 3433, B);
        }e = c[a + 28 >> 2] | 0;if (e | 0) {
          c[C >> 2] = Pa(e | 0) | 0;hc(a, 3, 3496, C);
        }e = c[a + 32 >> 2] | 0;if (e | 0) {
          c[D >> 2] = Ka(e | 0) | 0;hc(a, 3, 3511, D);
        }e = c[a + 36 >> 2] | 0;if (e | 0) {
          c[E >> 2] = ya(e | 0) | 0;hc(a, 3, 3526, E);
        }Kd(a, 3540, a + 60 | 0);Kd(a, 3547, a + 204 | 0);Kd(a, 3555, a + 276 | 0);e = c[a + 352 >> 2] | 0;switch (e | 0) {case 0:case 3:
            break;default:
            {
              ca = +T(g[a + 348 >> 2]);c[F >> 2] = 3562;h[F + 8 >> 3] = ca;c[F + 16 >> 2] = (e | 0) == 1 ? 3464 : 3467;hc(a, 3, 3469, F);
            }}e = c[a + 360 >> 2] | 0;switch (e | 0) {case 0:case 3:
            break;default:
            {
              ca = +T(g[a + 356 >> 2]);c[G >> 2] = 3568;h[G + 8 >> 3] = ca;c[G + 16 >> 2] = (e | 0) == 1 ? 3464 : 3467;hc(a, 3, 3469, G);
            }}e = c[a + 384 >> 2] | 0;switch (e | 0) {case 0:case 3:
            break;default:
            {
              ca = +T(g[a + 380 >> 2]);c[H >> 2] = 3575;h[H + 8 >> 3] = ca;c[H + 16 >> 2] = (e | 0) == 1 ? 3464 : 3467;hc(a, 3, 3469, H);
            }}e = c[a + 392 >> 2] | 0;switch (e | 0) {case 0:case 3:
            break;default:
            {
              ca = +T(g[a + 388 >> 2]);c[I >> 2] = 3585;h[I + 8 >> 3] = ca;c[I + 16 >> 2] = (e | 0) == 1 ? 3464 : 3467;hc(a, 3, 3469, I);
            }}e = c[a + 368 >> 2] | 0;switch (e | 0) {case 0:case 3:
            break;default:
            {
              ca = +T(g[a + 364 >> 2]);c[J >> 2] = 3596;h[J + 8 >> 3] = ca;c[J + 16 >> 2] = (e | 0) == 1 ? 3464 : 3467;hc(a, 3, 3469, J);
            }}e = c[a + 376 >> 2] | 0;switch (e | 0) {case 0:case 3:
            break;default:
            {
              ca = +T(g[a + 372 >> 2]);c[K >> 2] = 3606;h[K + 8 >> 3] = ca;c[K + 16 >> 2] = (e | 0) == 1 ? 3464 : 3467;hc(a, 3, 3469, K);
            }}e = c[a + 24 >> 2] | 0;if (e | 0) {
          c[L >> 2] = Ya(e | 0) | 0;hc(a, 3, 3617, L);
        }e = a + 132 | 0;do if (!(c[a + 136 >> 2] | 0)) if (!(c[a + 184 >> 2] | 0)) {
          e = (c[a + 200 >> 2] | 0) == 0 ? 1012 : a + 196 | 0;break;
        } else {
          e = a + 180 | 0;break;
        } while (0);f = c[e + 4 >> 2] | 0;switch (f | 0) {case 0:
            break;case 3:
            {
              c[M >> 2] = 3643;hc(a, 3, 3632, M);break;
            }default:
            {
              ca = +T(g[e >> 2]);c[N >> 2] = 3643;h[N + 8 >> 3] = ca;c[N + 16 >> 2] = (f | 0) == 1 ? 3464 : 3467;hc(a, 3, 3469, N);
            }}do if (!(c[a + 152 >> 2] | 0)) {
          if (!(c[a + 184 >> 2] | 0)) {
            e = (c[a + 200 >> 2] | 0) == 0 ? 1012 : a + 196 | 0;break;
          } else {
            e = a + 180 | 0;break;
          }
        } else e = a + 148 | 0; while (0);f = c[e + 4 >> 2] | 0;switch (f | 0) {case 0:
            break;case 3:
            {
              c[O >> 2] = 3648;hc(a, 3, 3632, O);break;
            }default:
            {
              ca = +T(g[e >> 2]);c[P >> 2] = 3648;h[P + 8 >> 3] = ca;c[P + 16 >> 2] = (f | 0) == 1 ? 3464 : 3467;hc(a, 3, 3469, P);
            }}do if (!(c[a + 144 >> 2] | 0)) {
          if (!(c[a + 192 >> 2] | 0)) {
            e = (c[a + 200 >> 2] | 0) == 0 ? 1012 : a + 196 | 0;break;
          } else {
            e = a + 188 | 0;break;
          }
        } else e = a + 140 | 0; while (0);f = c[e + 4 >> 2] | 0;switch (f | 0) {case 0:
            break;case 3:
            {
              c[Q >> 2] = 3654;hc(a, 3, 3632, Q);break;
            }default:
            {
              ca = +T(g[e >> 2]);c[R >> 2] = 3654;h[R + 8 >> 3] = ca;c[R + 16 >> 2] = (f | 0) == 1 ? 3464 : 3467;hc(a, 3, 3469, R);
            }}do if (!(c[a + 160 >> 2] | 0)) {
          if (!(c[a + 192 >> 2] | 0)) {
            e = (c[a + 200 >> 2] | 0) == 0 ? 1012 : a + 196 | 0;break;
          } else {
            e = a + 188 | 0;break;
          }
        } else e = a + 156 | 0; while (0);f = c[e + 4 >> 2] | 0;switch (f | 0) {case 0:
            break;case 3:
            {
              c[S >> 2] = 3658;hc(a, 3, 3632, S);break;
            }default:
            {
              ca = +T(g[e >> 2]);c[U >> 2] = 3658;h[U + 8 >> 3] = ca;c[U + 16 >> 2] = (f | 0) == 1 ? 3464 : 3467;hc(a, 3, 3469, U);
            }}hc(a, 3, 3324, V);if (!(c[a + 956 >> 2] | 0)) break;hc(a, 3, 3665, W);
      } while (0);hc(a, 3, 3691, X);f = a + 948 | 0;i = Wb(c[f >> 2] | 0) | 0;if (!((b & 4 | 0) != 0 & (i | 0) != 0)) {
        hc(a, 3, 3695, aa);l = ba;return;
      }k = d + 1 | 0;e = 0;do {
        hc(a, 3, 3693, Z);Jd(Zb(c[f >> 2] | 0, e) | 0, b, k);e = e + 1 | 0;
      } while ((e | 0) != (i | 0));if (!Y) {
        e = 0;do {
          hc(a, 3, 3261, _);e = e + 1 | 0;
        } while ((e | 0) != (d | 0));
      }hc(a, 3, 3693, $);hc(a, 3, 3695, aa);l = ba;return;
    }function Kd(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = ob,
          f = 0,
          i = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0;s = l;l = l + 112 | 0;p = s + 48 | 0;o = s + 40 | 0;q = s + 32 | 0;m = s + 8 | 0;k = s;n = s + 72 | 0;i = c[d + 4 >> 2] | 0;do if ((i | 0) == (c[d + 12 >> 2] | 0)) {
        f = (i | 0) == 0;if (!f ? (e = T(g[d >> 2]), !(T(C(T(e - T(g[d + 8 >> 2])))) < T(.0000999999974))) : 0) break;if ((i | 0) == (c[d + 20 >> 2] | 0)) {
          if (!f) {
            e = T(g[d >> 2]);if (!(T(C(T(e - T(g[d + 16 >> 2])))) < T(.0000999999974))) break;if ((i | 0) != (c[d + 28 >> 2] | 0)) break;if (!(T(C(T(e - T(g[d + 24 >> 2])))) < T(.0000999999974))) break;
          } else {
            if (c[d + 28 >> 2] | 0) break;e = T(g[d >> 2]);
          }if (((g[j >> 2] = e, c[j >> 2] | 0) & 2147483647) >>> 0 <= 2139095040 ? T(C(T(e))) < T(.0000999999974) : 0) {
            l = s;return;
          }switch (i | 0) {case 3:
              {
                c[k >> 2] = b;hc(a, 3, 3632, k);l = s;return;
              }case 0:
              {
                l = s;return;
              }default:
              {
                c[m >> 2] = b;h[m + 8 >> 3] = +e;c[m + 16 >> 2] = (i | 0) == 1 ? 3464 : 3467;hc(a, 3, 3469, m);l = s;return;
              }}
        }
      } while (0);f = 0;do {
        m = hb(f | 0) | 0;c[q >> 2] = b;c[q + 4 >> 2] = m;xl(n, 30, 3702, q) | 0;e = T(g[d + (f << 3) >> 2]);if (!(((g[j >> 2] = e, c[j >> 2] | 0) & 2147483647) >>> 0 <= 2139095040 ? T(C(T(e))) < T(.0000999999974) : 0)) r = 19;a: do if ((r | 0) == 19) {
          r = 0;i = c[d + (f << 3) + 4 >> 2] | 0;switch (i | 0) {case 0:
              break a;case 3:
              {
                c[o >> 2] = n;hc(a, 3, 3632, o);break a;
              }default:
              {
                c[p >> 2] = n;h[p + 8 >> 3] = +e;c[p + 16 >> 2] = (i | 0) == 1 ? 3464 : 3467;hc(a, 3, 3469, p);break a;
              }}
        } while (0);f = f + 1 | 0;
      } while ((f | 0) != 9);l = s;return;
    }function Ld(a, b, d, e, f, h, i, k, l, m, n, o, p) {
      a = a | 0;b = T(b);d = d | 0;e = T(e);f = f | 0;h = T(h);i = i | 0;k = T(k);l = T(l);m = T(m);n = T(n);o = T(o);p = p | 0;var q = ob,
          r = 0,
          s = 0,
          t = ob,
          u = ob,
          v = ob,
          w = ob,
          x = ob;if (l < T(0.0) | m < T(0.0)) {
        i = 0;return i | 0;
      }if ((p | 0) != 0 ? (x = T(g[p + 4 >> 2]), x != T(0.0)) : 0) {
        q = T(x * b);t = T(Jl(q, T(1.0)));do if (((g[j >> 2] = t, c[j >> 2] | 0) & 2147483647) >>> 0 <= 2139095040) {
          if (T(C(T(t))) < T(.0000999999974)) {
            q = T(q - t);break;
          }q = T(q - t);if (T(C(T(t + T(-1.0)))) < T(.0000999999974)) q = T(q + T(1.0));else r = 10;
        } else {
          q = T(q - t);r = 10;
        } while (0);if ((r | 0) == 10) {
          s = t >= T(.5);q = T((s ? T(1.0) : T(0.0)) + q);
        }w = T(q / x);q = T(x * e);t = T(Jl(q, T(1.0)));do if (((g[j >> 2] = t, c[j >> 2] | 0) & 2147483647) >>> 0 <= 2139095040) {
          if (T(C(T(t))) < T(.0000999999974)) {
            q = T(q - t);break;
          }q = T(q - t);if (T(C(T(t + T(-1.0)))) < T(.0000999999974)) q = T(q + T(1.0));else r = 17;
        } else {
          q = T(q - t);r = 17;
        } while (0);if ((r | 0) == 17) {
          s = t >= T(.5);q = T((s ? T(1.0) : T(0.0)) + q);
        }u = T(q / x);q = T(x * h);t = T(Jl(q, T(1.0)));do if (((g[j >> 2] = t, c[j >> 2] | 0) & 2147483647) >>> 0 <= 2139095040) {
          if (T(C(T(t))) < T(.0000999999974)) {
            q = T(q - t);break;
          }q = T(q - t);if (T(C(T(t + T(-1.0)))) < T(.0000999999974)) q = T(q + T(1.0));else r = 24;
        } else {
          q = T(q - t);r = 24;
        } while (0);if ((r | 0) == 24) {
          s = t >= T(.5);q = T((s ? T(1.0) : T(0.0)) + q);
        }t = T(q / x);q = T(x * k);v = T(Jl(q, T(1.0)));do if (((g[j >> 2] = v, c[j >> 2] | 0) & 2147483647) >>> 0 <= 2139095040) {
          if (T(C(T(v))) < T(.0000999999974)) {
            q = T(q - v);break;
          }q = T(q - v);if (T(C(T(v + T(-1.0)))) < T(.0000999999974)) q = T(q + T(1.0));else r = 31;
        } else {
          q = T(q - v);r = 31;
        } while (0);if ((r | 0) == 31) {
          s = v >= T(.5);q = T((s ? T(1.0) : T(0.0)) + q);
        }v = T(q / x);q = w;
      } else {
        v = k;u = e;t = h;q = b;
      }do if ((f | 0) == (a | 0)) {
        if (((g[j >> 2] = t, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) {
          p = ((g[j >> 2] = q, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040;break;
        } else {
          p = T(C(T(t - q))) < T(.0000999999974);break;
        }
      } else p = 0; while (0);do if ((i | 0) == (d | 0)) {
        if (((g[j >> 2] = v, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) {
          s = ((g[j >> 2] = u, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040;break;
        } else {
          s = T(C(T(v - u))) < T(.0000999999974);break;
        }
      } else s = 0; while (0);do if (!p) {
        q = T(b - n);if ((a | 0) == 1) {
          if (((g[j >> 2] = q, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) {
            if (((g[j >> 2] = l, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) {
              r = 1;break;
            }
          } else if (T(C(T(q - l))) < T(.0000999999974)) {
            r = 1;break;
          }r = 0;break;
        }p = (a | 0) == 2;if (!(p & (f | 0) == 0)) {
          if (!(q < h & ((f | 0) == 2 & p))) {
            r = 0;break;
          }if (q >= l) {
            r = 1;break;
          }if (((g[j >> 2] = q, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) {
            r = ((g[j >> 2] = l, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040;break;
          } else {
            r = T(C(T(q - l))) < T(.0000999999974);break;
          }
        } else {
          if (q >= l) {
            r = 1;break;
          }if (((g[j >> 2] = q, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) {
            if (((g[j >> 2] = l, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) {
              r = 1;break;
            }
          } else if (T(C(T(q - l))) < T(.0000999999974)) {
            r = 1;break;
          }r = 0;break;
        }
      } else r = 1; while (0);do if (!s) {
        q = T(e - o);if ((d | 0) == 1) {
          if (((g[j >> 2] = q, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) {
            if (((g[j >> 2] = m, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) {
              p = 1;break;
            }
          } else if (T(C(T(q - m))) < T(.0000999999974)) {
            p = 1;break;
          }p = 0;break;
        }p = (d | 0) == 2;if (!(p & (i | 0) == 0)) {
          if (!(q < k & ((i | 0) == 2 & p))) {
            p = 0;break;
          }if (q >= m) {
            p = 1;break;
          }if (((g[j >> 2] = q, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) {
            p = ((g[j >> 2] = m, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040;break;
          } else {
            p = T(C(T(q - m))) < T(.0000999999974);break;
          }
        } else {
          if (q >= m) {
            p = 1;break;
          }if (((g[j >> 2] = q, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) {
            if (((g[j >> 2] = m, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) {
              p = 1;break;
            }
          } else if (T(C(T(q - m))) < T(.0000999999974)) {
            p = 1;break;
          }p = 0;break;
        }
      } else p = 1; while (0);i = r & p;return i | 0;
    }function Md(b, d, e, f, i, k, m, n, o, p, q) {
      b = b | 0;d = T(d);e = T(e);f = f | 0;i = i | 0;k = k | 0;m = T(m);n = T(n);o = o | 0;p = p | 0;q = q | 0;var r = 0,
          s = 0,
          u = 0,
          v = 0,
          w = 0,
          x = ob,
          y = ob,
          z = ob,
          A = 0,
          B = 0,
          D = 0,
          E = 0,
          F = 0,
          G = 0,
          H = 0,
          I = 0,
          J = 0,
          K = 0,
          L = 0,
          M = 0,
          N = 0,
          O = ob,
          P = ob,
          Q = 0.0,
          R = 0.0;N = l;l = l + 176 | 0;I = N + 120 | 0;H = N + 104 | 0;F = N + 72 | 0;w = N + 56 | 0;G = N + 8 | 0;B = N;J = N + 164 | 0;K = N + 152 | 0;D = c[2189] | 0;E = D + 1 | 0;c[2189] = E;L = b + 976 | 0;if ((a[L >> 0] | 0) != 0 ? (c[b + 512 >> 2] | 0) != (c[2188] | 0) : 0) A = 4;else if ((c[b + 516 >> 2] | 0) == (f | 0)) M = 0;else A = 4;if ((A | 0) == 4) {
        c[b + 520 >> 2] = 0;c[b + 924 >> 2] = -1;c[b + 928 >> 2] = -1;g[b + 932 >> 2] = T(-1.0);g[b + 936 >> 2] = T(-1.0);M = 1;
      }a: do if (!(c[b + 956 >> 2] | 0)) {
        if (o) {
          r = b + 916 | 0;x = T(g[r >> 2]);if (((g[j >> 2] = x, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) {
            if (((g[j >> 2] = d, c[j >> 2] | 0) & 2147483647) >>> 0 <= 2139095040) {
              A = 84;break;
            }
          } else if (!(T(C(T(x - d))) < T(.0000999999974))) {
            A = 84;break;
          }x = T(g[b + 920 >> 2]);if (((g[j >> 2] = x, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) {
            if (((g[j >> 2] = e, c[j >> 2] | 0) & 2147483647) >>> 0 <= 2139095040) {
              A = 84;break;
            }
          } else if (!(T(C(T(x - e))) < T(.0000999999974))) {
            A = 84;break;
          }if ((c[b + 924 >> 2] | 0) != (i | 0)) {
            A = 84;break;
          }r = (c[b + 928 >> 2] | 0) == (k | 0) ? r : 0;A = 85;break;
        }v = c[b + 520 >> 2] | 0;if (v) {
          s = ((g[j >> 2] = d, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040;u = ((g[j >> 2] = e, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040;if (s) {
            s = 0;while (1) {
              r = b + 524 + (s * 24 | 0) | 0;x = T(g[r >> 2]);if (!(((g[j >> 2] = x, c[j >> 2] | 0) & 2147483647) >>> 0 <= 2139095040 ? !(T(C(T(x - d))) < T(.0000999999974)) : 0)) A = 55;do if ((A | 0) == 55) {
                A = 0;x = T(g[b + 524 + (s * 24 | 0) + 4 >> 2]);if (((g[j >> 2] = x, c[j >> 2] | 0) & 2147483647) >>> 0 > 2139095040) {
                  if (!u) break;
                } else if (!(T(C(T(x - e))) < T(.0000999999974))) break;if ((c[b + 524 + (s * 24 | 0) + 8 >> 2] | 0) == (i | 0) ? (c[b + 524 + (s * 24 | 0) + 12 >> 2] | 0) == (k | 0) : 0) {
                  A = 85;break a;
                }
              } while (0);s = s + 1 | 0;if (s >>> 0 >= v >>> 0) {
                A = 84;break a;
              }
            }
          }if (u) {
            s = 0;while (1) {
              r = b + 524 + (s * 24 | 0) | 0;x = T(g[r >> 2]);do if (((g[j >> 2] = x, c[j >> 2] | 0) & 2147483647) >>> 0 <= 2139095040 ? T(C(T(x - d))) < T(.0000999999974) : 0) {
                x = T(g[b + 524 + (s * 24 | 0) + 4 >> 2]);if (((g[j >> 2] = x, c[j >> 2] | 0) & 2147483647) >>> 0 <= 2139095040 ? !(T(C(T(x - e))) < T(.0000999999974)) : 0) break;if ((c[b + 524 + (s * 24 | 0) + 8 >> 2] | 0) == (i | 0) ? (c[b + 524 + (s * 24 | 0) + 12 >> 2] | 0) == (k | 0) : 0) {
                  A = 85;break a;
                }
              } while (0);s = s + 1 | 0;if (s >>> 0 >= v >>> 0) {
                A = 84;break;
              }
            }
          } else {
            s = 0;while (1) {
              r = b + 524 + (s * 24 | 0) | 0;x = T(g[r >> 2]);if (((((((g[j >> 2] = x, c[j >> 2] | 0) & 2147483647) >>> 0 <= 2139095040 ? T(C(T(x - d))) < T(.0000999999974) : 0) ? (y = T(g[b + 524 + (s * 24 | 0) + 4 >> 2]), ((g[j >> 2] = y, c[j >> 2] | 0) & 2147483647) >>> 0 <= 2139095040) : 0) ? T(C(T(y - e))) < T(.0000999999974) : 0) ? (c[b + 524 + (s * 24 | 0) + 8 >> 2] | 0) == (i | 0) : 0) ? (c[b + 524 + (s * 24 | 0) + 12 >> 2] | 0) == (k | 0) : 0) {
                A = 85;break a;
              }s = s + 1 | 0;if (s >>> 0 >= v >>> 0) {
                A = 84;break;
              }
            }
          }
        } else A = 84;
      } else {
        do if (!(c[b + 96 >> 2] | 0)) {
          if (c[b + 64 >> 2] | 0) {
            r = b + 60 | 0;break;
          }if (!(c[b + 112 >> 2] | 0)) {
            r = (c[b + 128 >> 2] | 0) == 0 ? 1036 : b + 124 | 0;break;
          } else {
            r = b + 108 | 0;break;
          }
        } else r = b + 92 | 0; while (0);switch (c[r + 4 >> 2] | 0) {case 3:
            {
              y = T(0.0);break;
            }case 2:
            {
              y = T(T(T(g[r >> 2]) * m) / T(100.0));break;
            }case 1:
            {
              y = T(g[r >> 2]);break;
            }default:
            y = T(t);}do if (!(c[b + 104 >> 2] | 0)) {
          if (c[b + 80 >> 2] | 0) {
            r = b + 76 | 0;break;
          }if (!(c[b + 112 >> 2] | 0)) {
            r = (c[b + 128 >> 2] | 0) == 0 ? 1036 : b + 124 | 0;break;
          } else {
            r = b + 108 | 0;break;
          }
        } else r = b + 100 | 0; while (0);switch (c[r + 4 >> 2] | 0) {case 3:
            {
              x = T(0.0);break;
            }case 2:
            {
              x = T(T(T(g[r >> 2]) * m) / T(100.0));break;
            }case 1:
            {
              x = T(g[r >> 2]);break;
            }default:
            x = T(t);}z = T(y + x);do if (!(c[b + 72 >> 2] | 0)) {
          if (!(c[b + 120 >> 2] | 0)) {
            r = (c[b + 128 >> 2] | 0) == 0 ? 1036 : b + 124 | 0;break;
          } else {
            r = b + 116 | 0;break;
          }
        } else r = b + 68 | 0; while (0);switch (c[r + 4 >> 2] | 0) {case 3:
            {
              y = T(0.0);break;
            }case 2:
            {
              y = T(T(T(g[r >> 2]) * m) / T(100.0));break;
            }case 1:
            {
              y = T(g[r >> 2]);break;
            }default:
            y = T(t);}do if (!(c[b + 88 >> 2] | 0)) {
          if (!(c[b + 120 >> 2] | 0)) {
            r = (c[b + 128 >> 2] | 0) == 0 ? 1036 : b + 124 | 0;break;
          } else {
            r = b + 116 | 0;break;
          }
        } else r = b + 84 | 0; while (0);switch (c[r + 4 >> 2] | 0) {case 3:
            {
              x = T(0.0);break;
            }case 2:
            {
              x = T(T(T(g[r >> 2]) * m) / T(100.0));break;
            }case 1:
            {
              x = T(g[r >> 2]);break;
            }default:
            x = T(t);}x = T(y + x);r = b + 916 | 0;P = T(g[r >> 2]);O = T(g[b + 920 >> 2]);y = T(g[b + 932 >> 2]);if (!(Ld(i, d, k, e, c[b + 924 >> 2] | 0, P, c[b + 928 >> 2] | 0, O, y, T(g[b + 936 >> 2]), z, x, q) | 0)) {
          u = c[b + 520 >> 2] | 0;if (!u) A = 84;else {
            s = 0;while (1) {
              r = b + 524 + (s * 24 | 0) | 0;y = T(g[r >> 2]);O = T(g[b + 524 + (s * 24 | 0) + 4 >> 2]);P = T(g[b + 524 + (s * 24 | 0) + 16 >> 2]);if (Ld(i, d, k, e, c[b + 524 + (s * 24 | 0) + 8 >> 2] | 0, y, c[b + 524 + (s * 24 | 0) + 12 >> 2] | 0, O, P, T(g[b + 524 + (s * 24 | 0) + 20 >> 2]), z, x, q) | 0) {
                A = 85;break a;
              }s = s + 1 | 0;if (s >>> 0 >= u >>> 0) {
                A = 84;break;
              }
            }
          }
        } else A = 85;
      } while (0);do if ((A | 0) == 84) {
        if (!(a[11301] | 0)) {
          r = 0;A = 102;
        } else {
          r = 0;A = 95;
        }
      } else if ((A | 0) == 85) {
        s = (a[11301] | 0) != 0;if (!((r | 0) != 0 & (M ^ 1))) if (s) {
          A = 95;break;
        } else {
          A = 102;break;
        }v = r + 16 | 0;c[b + 908 >> 2] = c[v >> 2];w = r + 20 | 0;c[b + 912 >> 2] = c[w >> 2];if (!((a[11302] | 0) == 0 | s ^ 1)) {
          c[B >> 2] = E >>> 0 > 60 ? 3708 : 3708 + (59 - D) | 0;c[B + 4 >> 2] = E;Cl(3769, B) | 0;s = c[b + 964 >> 2] | 0;if (s | 0) sb[s & 127](b);c[J >> 2] = c[261];c[J + 4 >> 2] = c[262];c[J + 8 >> 2] = c[263];c[K >> 2] = c[264];c[K + 4 >> 2] = c[265];c[K + 8 >> 2] = c[266];if (i >>> 0 > 2) u = 11303;else u = c[(o ? K : J) + (i << 2) >> 2] | 0;c[J >> 2] = c[261];c[J + 4 >> 2] = c[262];c[J + 8 >> 2] = c[263];c[K >> 2] = c[264];c[K + 4 >> 2] = c[265];c[K + 8 >> 2] = c[266];if (k >>> 0 > 2) s = 11303;else s = c[(o ? K : J) + (k << 2) >> 2] | 0;R = +T(g[v >> 2]);Q = +T(g[w >> 2]);c[G >> 2] = u;c[G + 4 >> 2] = s;h[G + 8 >> 3] = +d;h[G + 16 >> 3] = +e;h[G + 24 >> 3] = R;h[G + 32 >> 3] = Q;c[G + 40 >> 2] = p;Cl(3786, G) | 0;
        }
      } while (0);if ((A | 0) == 95) {
        c[w >> 2] = E >>> 0 > 60 ? 3708 : 3708 + (59 - D) | 0;c[w + 4 >> 2] = E;c[w + 8 >> 2] = M ? 3835 : 11303;Cl(3837, w) | 0;s = c[b + 964 >> 2] | 0;if (s | 0) sb[s & 127](b);c[J >> 2] = c[261];c[J + 4 >> 2] = c[262];c[J + 8 >> 2] = c[263];c[K >> 2] = c[264];c[K + 4 >> 2] = c[265];c[K + 8 >> 2] = c[266];if (i >>> 0 > 2) u = 11303;else u = c[(o ? K : J) + (i << 2) >> 2] | 0;c[J >> 2] = c[261];c[J + 4 >> 2] = c[262];c[J + 8 >> 2] = c[263];c[K >> 2] = c[264];c[K + 4 >> 2] = c[265];c[K + 8 >> 2] = c[266];if (k >>> 0 > 2) s = 11303;else s = c[(o ? K : J) + (k << 2) >> 2] | 0;c[F >> 2] = u;c[F + 4 >> 2] = s;h[F + 8 >> 3] = +d;h[F + 16 >> 3] = +e;c[F + 24 >> 2] = p;Cl(3846, F) | 0;A = 102;
      }if ((A | 0) == 102) {
        Nd(b, d, e, f, i, k, m, n, o, q);if (a[11301] | 0) {
          s = c[2189] | 0;c[H >> 2] = s >>> 0 > 60 ? 3708 : 3708 + (60 - s) | 0;c[H + 4 >> 2] = s;c[H + 8 >> 2] = M ? 3835 : 11303;Cl(3880, H) | 0;s = c[b + 964 >> 2] | 0;if (s | 0) sb[s & 127](b);c[J >> 2] = c[261];c[J + 4 >> 2] = c[262];c[J + 8 >> 2] = c[263];c[K >> 2] = c[264];c[K + 4 >> 2] = c[265];c[K + 8 >> 2] = c[266];if (i >>> 0 > 2) u = 11303;else u = c[(o ? K : J) + (i << 2) >> 2] | 0;c[J >> 2] = c[261];c[J + 4 >> 2] = c[262];c[J + 8 >> 2] = c[263];c[K >> 2] = c[264];c[K + 4 >> 2] = c[265];c[K + 8 >> 2] = c[266];if (k >>> 0 > 2) s = 11303;else s = c[(o ? K : J) + (k << 2) >> 2] | 0;Q = +T(g[b + 908 >> 2]);R = +T(g[b + 912 >> 2]);c[I >> 2] = u;c[I + 4 >> 2] = s;h[I + 8 >> 3] = Q;h[I + 16 >> 3] = R;c[I + 24 >> 2] = p;Cl(3889, I) | 0;
        }c[b + 516 >> 2] = f;if (!r) {
          s = b + 520 | 0;r = c[s >> 2] | 0;if ((r | 0) == 16) {
            if (a[11301] | 0) El(3921) | 0;c[s >> 2] = 0;r = 0;
          }if (o) r = b + 916 | 0;else {
            c[s >> 2] = r + 1;r = b + 524 + (r * 24 | 0) | 0;
          }g[r >> 2] = d;g[r + 4 >> 2] = e;c[r + 8 >> 2] = i;c[r + 12 >> 2] = k;c[r + 16 >> 2] = c[b + 908 >> 2];c[r + 20 >> 2] = c[b + 912 >> 2];r = 0;
        }
      }if (!o) {
        L = c[2189] | 0;L = L + -1 | 0;c[2189] = L;L = c[2188] | 0;o = b + 512 | 0;c[o >> 2] = L;o = (r | 0) == 0;o = M | o;l = N;return o | 0;
      }c[b + 416 >> 2] = c[b + 908 >> 2];c[b + 420 >> 2] = c[b + 912 >> 2];a[b + 977 >> 0] = 1;a[L >> 0] = 0;L = c[2189] | 0;L = L + -1 | 0;c[2189] = L;L = c[2188] | 0;o = b + 512 | 0;c[o >> 2] = L;o = (r | 0) == 0;o = M | o;l = N;return o | 0;
    }

    // EMSCRIPTEN_END_FUNCS
    var pb = [Im, vj];var qb = [Jm, te, ue, ve, we, xe, ye, ze, Be, Ce, Ee, Fe, Ge, He, Ie, Je, Ke, Le, Me, Jm, Jm, Jm, Jm, Jm, Jm, Jm, Jm, Jm, Jm, Jm, Jm, Jm];var rb = [Km];var sb = [Lm, Fk, Ml, Bg, Cg, Dg, wh, xh, yh, Ri, Si, Ti, sj, tj, uj, sk, tk, uk, Xd, _i, zg, Vi, Wi, Qi, Li, Mi, Hi, Ii, Fi, zi, vi, ri, ni, be, de, Ae, De, uf, vf, ii, ei, ai, Yh, Uh, Qh, Mh, Ih, Eh, Ah, rh, nh, jh, fh, bh, Zg, Vg, Rg, Ng, Jg, Fg, vg, dj, hj, qk, rk, mk, hk, dk, $j, Xj, Uj, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm, Lm];var tb = [Mm, ui, ee, fe, ie, je, ke, le, me, ne, qe, re, se, $e, cf, df, ef, ff, gf, hf, nf, rf, Ef, $h, Xh, ej, Oj, Tj, Mm, Mm, Mm, Mm];var ub = [Nm, Ek, Kk, Zi, yi, ae, Qe, Se, Te, Ue, Ve, We, Xe, Ze, _e, of, pf, wf, hi, Mj, Sj, Nm, Nm, Nm, Nm, Nm, Nm, Nm, Nm, Nm, Nm, Nm];var vb = [Om, xf];var wb = [Pm, Pi];var xb = [Qm, Lk, Mk, Sk, wl, mi, zh, Qg, ck, Qm, Qm, Qm, Qm, Qm, Qm, Qm];var yb = [Rm, ih];var zb = [Sm, af, bf, jf, yf, zf, Af, Bf, Cf, Df, Sm, Sm, Sm, Sm, Sm, Sm];var Ab = [Tm, Di];var Bb = [Um, Gk, Nl, _d, qf, di, Dh, qh, Yg, Ug, Ig, ug, _j, Um, Um, Um];var Cb = [Vm, Eg];var Db = [Wm, gk];var Eb = [Xm, kf, Ff, Gf, Hf, mh, Xm, Xm];var Fb = [Ym, If, Wd, Ui, Ki, Gi, $d, pk];var Gb = [Zm, ac];var Hb = [_m, Lh];var Ib = [$m, sf];var Jb = [an, Zd, Re, Ye, lf, mf, Th, Ph, ah, Mg, Bj, lk, Wj, an, an, an];var Kb = [bn];var Lb = [cn, Ei, ge, he, oe, pe, Ne, Oe, Pe, Hh, cn, cn, cn, cn, cn, cn];var Mb = [dn, Oi];var Nb = [en, Xi, Ni, Ji, Ci, qi, li, eh, cj, vk, Vj, en, en, en, en, en];return { _llvm_bswap_i32: im, getTempRet0: Ub, _llvm_cttz_i32: dm, setThrew: Sb, _bitshift64Lshr: bm, _bitshift64Shl: am, _memset: $l, _sbrk: gm, _memcpy: cm, stackAlloc: Ob, ___uremdi3: hm, _nbind_init: Ck, _i64Subtract: Zl, ___udivmoddi4: em, setTempRet0: Tb, _i64Add: _l, _emscripten_get_global_libc: Jk, __GLOBAL__sub_I_Binding_cc: Gj, ___udivdi3: fm, stackSave: Pb, __GLOBAL__sub_I_nbind_cc: Jf, _free: Fk, runPostSets: Yl, establishStackSpace: Rb, stackRestore: Qb, _malloc: Ek, __GLOBAL__sub_I_common_cc: aj, stackAlloc: Ob, stackSave: Pb, stackRestore: Qb, establishStackSpace: Rb, setThrew: Sb, setTempRet0: Tb, getTempRet0: Ub, dynCall_viiiii: jm, dynCall_vid: km, dynCall_fiff: lm, dynCall_vi: mm, dynCall_vii: nm, dynCall_ii: om, dynCall_viddi: pm, dynCall_vidd: qm, dynCall_iiii: rm, dynCall_diii: sm, dynCall_di: tm, dynCall_iid: um, dynCall_iii: vm, dynCall_viiddi: wm, dynCall_viiiiii: xm, dynCall_dii: ym, dynCall_i: zm, dynCall_iiiiii: Am, dynCall_viiid: Bm, dynCall_viififi: Cm, dynCall_viii: Dm, dynCall_v: Em, dynCall_viid: Fm, dynCall_idd: Gm, dynCall_viiii: Hm };
  }(

  // EMSCRIPTEN_END_ASM
  Module.asmGlobalArg, Module.asmLibraryArg, buffer);var _llvm_bswap_i32 = Module["_llvm_bswap_i32"] = asm["_llvm_bswap_i32"];var getTempRet0 = Module["getTempRet0"] = asm["getTempRet0"];var _llvm_cttz_i32 = Module["_llvm_cttz_i32"] = asm["_llvm_cttz_i32"];var setThrew = Module["setThrew"] = asm["setThrew"];var _bitshift64Lshr = Module["_bitshift64Lshr"] = asm["_bitshift64Lshr"];var _bitshift64Shl = Module["_bitshift64Shl"] = asm["_bitshift64Shl"];var _memset = Module["_memset"] = asm["_memset"];var _sbrk = Module["_sbrk"] = asm["_sbrk"];var _memcpy = Module["_memcpy"] = asm["_memcpy"];var stackAlloc = Module["stackAlloc"] = asm["stackAlloc"];var ___uremdi3 = Module["___uremdi3"] = asm["___uremdi3"];var _nbind_init = Module["_nbind_init"] = asm["_nbind_init"];var _i64Subtract = Module["_i64Subtract"] = asm["_i64Subtract"];var ___udivmoddi4 = Module["___udivmoddi4"] = asm["___udivmoddi4"];var setTempRet0 = Module["setTempRet0"] = asm["setTempRet0"];var _i64Add = Module["_i64Add"] = asm["_i64Add"];var _emscripten_get_global_libc = Module["_emscripten_get_global_libc"] = asm["_emscripten_get_global_libc"];var __GLOBAL__sub_I_Binding_cc = Module["__GLOBAL__sub_I_Binding_cc"] = asm["__GLOBAL__sub_I_Binding_cc"];var ___udivdi3 = Module["___udivdi3"] = asm["___udivdi3"];var stackSave = Module["stackSave"] = asm["stackSave"];var __GLOBAL__sub_I_nbind_cc = Module["__GLOBAL__sub_I_nbind_cc"] = asm["__GLOBAL__sub_I_nbind_cc"];var _free = Module["_free"] = asm["_free"];var runPostSets = Module["runPostSets"] = asm["runPostSets"];var establishStackSpace = Module["establishStackSpace"] = asm["establishStackSpace"];var stackRestore = Module["stackRestore"] = asm["stackRestore"];var _malloc = Module["_malloc"] = asm["_malloc"];var __GLOBAL__sub_I_common_cc = Module["__GLOBAL__sub_I_common_cc"] = asm["__GLOBAL__sub_I_common_cc"];var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];var dynCall_vid = Module["dynCall_vid"] = asm["dynCall_vid"];var dynCall_fiff = Module["dynCall_fiff"] = asm["dynCall_fiff"];var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];var dynCall_viddi = Module["dynCall_viddi"] = asm["dynCall_viddi"];var dynCall_vidd = Module["dynCall_vidd"] = asm["dynCall_vidd"];var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];var dynCall_diii = Module["dynCall_diii"] = asm["dynCall_diii"];var dynCall_di = Module["dynCall_di"] = asm["dynCall_di"];var dynCall_iid = Module["dynCall_iid"] = asm["dynCall_iid"];var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];var dynCall_viiddi = Module["dynCall_viiddi"] = asm["dynCall_viiddi"];var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];var dynCall_dii = Module["dynCall_dii"] = asm["dynCall_dii"];var dynCall_i = Module["dynCall_i"] = asm["dynCall_i"];var dynCall_iiiiii = Module["dynCall_iiiiii"] = asm["dynCall_iiiiii"];var dynCall_viiid = Module["dynCall_viiid"] = asm["dynCall_viiid"];var dynCall_viififi = Module["dynCall_viififi"] = asm["dynCall_viififi"];var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];var dynCall_viid = Module["dynCall_viid"] = asm["dynCall_viid"];var dynCall_idd = Module["dynCall_idd"] = asm["dynCall_idd"];var dynCall_viiii = Module["dynCall_viiii"] = asm["dynCall_viiii"];Runtime.stackAlloc = Module["stackAlloc"];Runtime.stackSave = Module["stackSave"];Runtime.stackRestore = Module["stackRestore"];Runtime.establishStackSpace = Module["establishStackSpace"];Runtime.setTempRet0 = Module["setTempRet0"];Runtime.getTempRet0 = Module["getTempRet0"];Module["asm"] = asm;function ExitStatus(status) {
    this.name = "ExitStatus";this.message = "Program terminated with exit(" + status + ")";this.status = status;
  }ExitStatus.prototype = new Error();ExitStatus.prototype.constructor = ExitStatus;var initialStackTop;var preloadStartTime = null;var calledMain = false;dependenciesFulfilled = function runCaller() {
    if (!Module["calledRun"]) run();if (!Module["calledRun"]) dependenciesFulfilled = runCaller;
  };Module["callMain"] = Module.callMain = function callMain(args) {
    args = args || [];ensureInitRuntime();var argc = args.length + 1;function pad() {
      for (var i = 0; i < 4 - 1; i++) {
        argv.push(0);
      }
    }var argv = [allocate(intArrayFromString(Module["thisProgram"]), "i8", ALLOC_NORMAL)];pad();for (var i = 0; i < argc - 1; i = i + 1) {
      argv.push(allocate(intArrayFromString(args[i]), "i8", ALLOC_NORMAL));pad();
    }argv.push(0);argv = allocate(argv, "i32", ALLOC_NORMAL);try {
      var ret = Module["_main"](argc, argv, 0);exit(ret, true);
    } catch (e) {
      if (e instanceof ExitStatus) {
        return;
      } else if (e == "SimulateInfiniteLoop") {
        Module["noExitRuntime"] = true;return;
      } else {
        var toLog = e;if (e && typeof e === "object" && e.stack) {
          toLog = [e, e.stack];
        }Module.printErr("exception thrown: " + toLog);Module["quit"](1, e);
      }
    } finally {
      calledMain = true;
    }
  };function run(args) {
    args = args || Module["arguments"];if (preloadStartTime === null) preloadStartTime = Date.now();if (runDependencies > 0) {
      return;
    }preRun();if (runDependencies > 0) return;if (Module["calledRun"]) return;function doRun() {
      if (Module["calledRun"]) return;Module["calledRun"] = true;if (ABORT) return;ensureInitRuntime();preMain();if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();if (Module["_main"] && shouldRunNow) Module["callMain"](args);postRun();
    }if (Module["setStatus"]) {
      Module["setStatus"]("Running...");setTimeout(function () {
        setTimeout(function () {
          Module["setStatus"]("");
        }, 1);doRun();
      }, 1);
    } else {
      doRun();
    }
  }Module["run"] = Module.run = run;function exit(status, implicit) {
    if (implicit && Module["noExitRuntime"]) {
      return;
    }if (Module["noExitRuntime"]) {} else {
      ABORT = true;EXITSTATUS = status;STACKTOP = initialStackTop;exitRuntime();if (Module["onExit"]) Module["onExit"](status);
    }if (ENVIRONMENT_IS_NODE) {
      process["exit"](status);
    }Module["quit"](status, new ExitStatus(status));
  }Module["exit"] = Module.exit = exit;var abortDecorators = [];function abort(what) {
    if (Module["onAbort"]) {
      Module["onAbort"](what);
    }if (what !== undefined) {
      Module.print(what);Module.printErr(what);what = JSON.stringify(what);
    } else {
      what = "";
    }ABORT = true;EXITSTATUS = 1;var extra = "\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.";var output = "abort(" + what + ") at " + stackTrace() + extra;if (abortDecorators) {
      abortDecorators.forEach(function (decorator) {
        output = decorator(output, what);
      });
    }throw output;
  }Module["abort"] = Module.abort = abort;if (Module["preInit"]) {
    if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];while (Module["preInit"].length > 0) {
      Module["preInit"].pop()();
    }
  }var shouldRunNow = true;if (Module["noInitialRun"]) {
    shouldRunNow = false;
  }run();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6), __webpack_require__(3).Buffer))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

function patch(prototype, name, fn) {

    let original = prototype[name];

    prototype[name] = function (... args) {
        return fn.call(this, original, ... args);
    };

}

module.exports = function (bind, lib) {

    let constants = Object.assign({

        UNDEFINED: NaN

    }, __webpack_require__(8));

    class Layout {

        constructor(left, right, top, bottom, width, height) {

            this.left = left;
            this.right = right;

            this.top = top;
            this.bottom = bottom;

            this.width = width;
            this.height = height;

        }

        fromJS(expose) {

            expose(this.left, this.right, this.top, this.bottom, this.width, this.height);

        }

        toString() {

            return `<Layout#${this.left}:${this.right};${this.top}:${this.bottom};${this.width}:${this.height}>`;

        }

    }

    class Size {

        static fromJS({ width, height }) {

            return new Size(width, height);

        }

        constructor(width, height) {

            this.width = width;
            this.height = height;

        }

        fromJS(expose) {

            expose(this.width, this.height);

        }

        toString() {

            return `<Size#${this.width}x${this.height}>`;

        }

    }

    class Value {

        constructor(unit, value) {

            this.unit = unit;
            this.value = value;

        }

        fromJS(expose) {

            expose(this.unit, this.value);

        }

        toString() {

            switch (this.unit) {

                case constants.UNIT_POINT:
                    return `${this.value}`;

                case constants.UNIT_PERCENT:
                    return `${this.value}%`;

                case constants.UNIT_AUTO:
                    return `auto`;

                default: {
                    return `${this.value}?`;
                }

            }

        }

        valueOf() {

            return this.value;

        }

    }

    for (let fnName of [ `setPosition`, `setMargin`, `setFlexBasis`, `setWidth`, `setHeight`, `setMinWidth`, `setMinHeight`, `setMaxWidth`, `setMaxHeight`, `setPadding` ]) {

        let methods = { [constants.UNIT_POINT]: lib.Node.prototype[fnName], [constants.UNIT_PERCENT]: lib.Node.prototype[`${fnName}Percent`], [constants.UNIT_AUTO]: lib.Node.prototype[`${fnName}Auto`] };

        patch(lib.Node.prototype, fnName, function (original, ... args) {

            // We patch all these functions to add support for the following calls:
            // .setWidth(100) / .setWidth("100%") / .setWidth(.getWidth()) / .setWidth("auto")

            let value = args.pop();
            let unit, asNumber;

            if (value === `auto`) {

                unit = constants.UNIT_AUTO;
                asNumber = undefined;

            } else if (value instanceof Value) {

                unit = value.unit;
                asNumber = value.valueOf();

            } else {

                unit = typeof value === `string` && value.endsWith(`%`) ? constants.UNIT_PERCENT : constants.UNIT_POINT;
                asNumber = parseFloat(value);

            }

            if (!Object.prototype.hasOwnProperty.call(methods, unit))
                throw new Error(`Failed to execute "${fnName}": Unsupported unit.`);

            if (asNumber !== undefined) {
                return methods[unit].call(this, ... args, asNumber);
            } else {
                return methods[unit].call(this, ... args);
            }

        });

    }

    patch(lib.Config.prototype, `free`, function () {

        // Since we handle the memory allocation ourselves (via lib.Config.create), we also need to handle the deallocation

	lib.Config.destroy(this);

    });

    patch(lib.Node, `create`, function (_, config) {

        // We decide the constructor we want to call depending on the parameters

        return config ? lib.Node.createWithConfig(config) : lib.Node.createDefault();

    });

    patch(lib.Node.prototype, `free`, function () {

        // Since we handle the memory allocation ourselves (via lib.Node.create), we also need to handle the deallocation

        lib.Node.destroy(this);

    });

    patch(lib.Node.prototype, `freeRecursive`, function () {

        for (let t = 0, T = this.getChildCount(); t < T; ++t)
            this.getChild(0).freeRecursive();

        this.free();

    });

    patch(lib.Node.prototype, `setMeasureFunc`, function (original, measureFunc) {

        // This patch is just a convenience patch, since it helps write more idiomatic source code (such as .setMeasureFunc(null))
        // We also automatically convert the return value of the measureFunc to a Size object, so that we can return anything that has .width and .height properties

        if (measureFunc) {
            return original.call(this, (... args) => Size.fromJS(measureFunc(... args)));
        } else {
            return this.unsetMeasureFunc();
        }

    });

    patch(lib.Node.prototype, `calculateLayout`, function (original, width = constants.UNDEFINED, height = constants.UNDEFINED, direction = constants.DIRECTION_LTR) {

        // Just a small patch to add support for the function default parameters

        return original.call(this, width, height, direction);

    });

    function getInstanceCount(... args) {

        return lib.getInstanceCount(... args);

    }

    bind(`Layout`, Layout);
    bind(`Size`, Size);
    bind(`Value`, Value);

    return Object.assign({

	Config: lib.Config,
        Node: lib.Node,

        Layout,
        Size,
        Value,

        getInstanceCount

    }, constants);

};


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(2)
var ieee754 = __webpack_require__(4)
var isArray = __webpack_require__(5)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 4 */
/***/ function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ },
/* 5 */
/***/ function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ },
/* 6 */
/***/ function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ },
/* 7 */
/***/ function(module, exports) {

var g;

// This works in non-strict mode
g = (function() { return this; })();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ },
/* 8 */
/***/ function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

module.exports = {

  ALIGN_COUNT: 8,
  ALIGN_AUTO: 0,
  ALIGN_FLEX_START: 1,
  ALIGN_CENTER: 2,
  ALIGN_FLEX_END: 3,
  ALIGN_STRETCH: 4,
  ALIGN_BASELINE: 5,
  ALIGN_SPACE_BETWEEN: 6,
  ALIGN_SPACE_AROUND: 7,

  DIMENSION_COUNT: 2,
  DIMENSION_WIDTH: 0,
  DIMENSION_HEIGHT: 1,

  DIRECTION_COUNT: 3,
  DIRECTION_INHERIT: 0,
  DIRECTION_LTR: 1,
  DIRECTION_RTL: 2,

  DISPLAY_COUNT: 2,
  DISPLAY_FLEX: 0,
  DISPLAY_NONE: 1,

  EDGE_COUNT: 9,
  EDGE_LEFT: 0,
  EDGE_TOP: 1,
  EDGE_RIGHT: 2,
  EDGE_BOTTOM: 3,
  EDGE_START: 4,
  EDGE_END: 5,
  EDGE_HORIZONTAL: 6,
  EDGE_VERTICAL: 7,
  EDGE_ALL: 8,

  EXPERIMENTAL_FEATURE_COUNT: 1,
  EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS: 0,

  FLEX_DIRECTION_COUNT: 4,
  FLEX_DIRECTION_COLUMN: 0,
  FLEX_DIRECTION_COLUMN_REVERSE: 1,
  FLEX_DIRECTION_ROW: 2,
  FLEX_DIRECTION_ROW_REVERSE: 3,

  JUSTIFY_COUNT: 5,
  JUSTIFY_FLEX_START: 0,
  JUSTIFY_CENTER: 1,
  JUSTIFY_FLEX_END: 2,
  JUSTIFY_SPACE_BETWEEN: 3,
  JUSTIFY_SPACE_AROUND: 4,

  LOG_LEVEL_COUNT: 6,
  LOG_LEVEL_ERROR: 0,
  LOG_LEVEL_WARN: 1,
  LOG_LEVEL_INFO: 2,
  LOG_LEVEL_DEBUG: 3,
  LOG_LEVEL_VERBOSE: 4,
  LOG_LEVEL_FATAL: 5,

  MEASURE_MODE_COUNT: 3,
  MEASURE_MODE_UNDEFINED: 0,
  MEASURE_MODE_EXACTLY: 1,
  MEASURE_MODE_AT_MOST: 2,

  NODE_TYPE_COUNT: 2,
  NODE_TYPE_DEFAULT: 0,
  NODE_TYPE_TEXT: 1,

  OVERFLOW_COUNT: 3,
  OVERFLOW_VISIBLE: 0,
  OVERFLOW_HIDDEN: 1,
  OVERFLOW_SCROLL: 2,

  POSITION_TYPE_COUNT: 2,
  POSITION_TYPE_RELATIVE: 0,
  POSITION_TYPE_ABSOLUTE: 1,

  PRINT_OPTIONS_COUNT: 3,
  PRINT_OPTIONS_LAYOUT: 1,
  PRINT_OPTIONS_STYLE: 2,
  PRINT_OPTIONS_CHILDREN: 4,

  UNIT_COUNT: 4,
  UNIT_UNDEFINED: 0,
  UNIT_POINT: 1,
  UNIT_PERCENT: 2,
  UNIT_AUTO: 3,

  WRAP_COUNT: 3,
  WRAP_NO_WRAP: 0,
  WRAP_WRAP: 1,
  WRAP_WRAP_REVERSE: 2,

};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var nbind = __webpack_require__(0);

var ran = false;
var ret = null;

nbind({}, function (err, result) {

    if (ran)
        return;

    ran = true;

    if (err)
        throw err;

    ret = result;

});

if (!ran)
    throw new Error('Failed to load the yoga module - it needed to be loaded synchronously, but didn\'t');

module.exports = __webpack_require__(1)(ret.bind, ret.lib);


/***/ }
/******/ ]);
});