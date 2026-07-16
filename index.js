import { resolveComponent, createBlock, openBlock, mergeProps, withCtx, createElementBlock, createVNode, createElementVNode, createTextVNode } from "vue";
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var barcodes = {};
var CODE39 = {};
var Barcode = {};
var hasRequiredBarcode;
function requireBarcode() {
  if (hasRequiredBarcode) return Barcode;
  hasRequiredBarcode = 1;
  Object.defineProperty(Barcode, "__esModule", {
    value: true
  });
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var Barcode$1 = function Barcode2(data, options) {
    _classCallCheck(this, Barcode2);
    this.data = data;
    this.text = options.text || data;
    this.options = options;
  };
  Barcode.default = Barcode$1;
  return Barcode;
}
var hasRequiredCODE39;
function requireCODE39() {
  if (hasRequiredCODE39) return CODE39;
  hasRequiredCODE39 = 1;
  Object.defineProperty(CODE39, "__esModule", {
    value: true
  });
  CODE39.CODE39 = void 0;
  var _createClass = /* @__PURE__ */ (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  var _Barcode2 = requireBarcode();
  var _Barcode3 = _interopRequireDefault(_Barcode2);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var CODE39$1 = (function(_Barcode) {
    _inherits(CODE392, _Barcode);
    function CODE392(data, options) {
      _classCallCheck(this, CODE392);
      data = data.toUpperCase();
      if (options.mod43) {
        data += getCharacter(mod43checksum(data));
      }
      return _possibleConstructorReturn(this, (CODE392.__proto__ || Object.getPrototypeOf(CODE392)).call(this, data, options));
    }
    _createClass(CODE392, [{
      key: "encode",
      value: function encode() {
        var result = getEncoding("*");
        for (var i = 0; i < this.data.length; i++) {
          result += getEncoding(this.data[i]) + "0";
        }
        result += getEncoding("*");
        return {
          data: result,
          text: this.text
        };
      }
    }, {
      key: "valid",
      value: function valid() {
        return this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/) !== -1;
      }
    }]);
    return CODE392;
  })(_Barcode3.default);
  var characters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-", ".", " ", "$", "/", "+", "%", "*"];
  var encodings = [20957, 29783, 23639, 30485, 20951, 29813, 23669, 20855, 29789, 23645, 29975, 23831, 30533, 22295, 30149, 24005, 21623, 29981, 23837, 22301, 30023, 23879, 30545, 22343, 30161, 24017, 21959, 30065, 23921, 22385, 29015, 18263, 29141, 17879, 29045, 18293, 17783, 29021, 18269, 17477, 17489, 17681, 20753, 35770];
  function getEncoding(character) {
    return getBinary(characterValue(character));
  }
  function getBinary(characterValue2) {
    return encodings[characterValue2].toString(2);
  }
  function getCharacter(characterValue2) {
    return characters[characterValue2];
  }
  function characterValue(character) {
    return characters.indexOf(character);
  }
  function mod43checksum(data) {
    var checksum = 0;
    for (var i = 0; i < data.length; i++) {
      checksum += characterValue(data[i]);
    }
    checksum = checksum % 43;
    return checksum;
  }
  CODE39.CODE39 = CODE39$1;
  return CODE39;
}
var CODE128$1 = {};
var CODE128_AUTO = {};
var CODE128 = {};
var constants$3 = {};
var hasRequiredConstants$3;
function requireConstants$3() {
  if (hasRequiredConstants$3) return constants$3;
  hasRequiredConstants$3 = 1;
  Object.defineProperty(constants$3, "__esModule", {
    value: true
  });
  var _SET_BY_CODE;
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var SET_A = constants$3.SET_A = 0;
  var SET_B = constants$3.SET_B = 1;
  var SET_C = constants$3.SET_C = 2;
  constants$3.SHIFT = 98;
  var START_A = constants$3.START_A = 103;
  var START_B = constants$3.START_B = 104;
  var START_C = constants$3.START_C = 105;
  constants$3.MODULO = 103;
  constants$3.STOP = 106;
  constants$3.FNC1 = 207;
  constants$3.SET_BY_CODE = (_SET_BY_CODE = {}, _defineProperty(_SET_BY_CODE, START_A, SET_A), _defineProperty(_SET_BY_CODE, START_B, SET_B), _defineProperty(_SET_BY_CODE, START_C, SET_C), _SET_BY_CODE);
  constants$3.SWAP = {
    101: SET_A,
    100: SET_B,
    99: SET_C
  };
  constants$3.A_START_CHAR = String.fromCharCode(208);
  constants$3.B_START_CHAR = String.fromCharCode(209);
  constants$3.C_START_CHAR = String.fromCharCode(210);
  constants$3.A_CHARS = "[\0-_È-Ï]";
  constants$3.B_CHARS = "[ -È-Ï]";
  constants$3.C_CHARS = "(Ï*[0-9]{2}Ï*)";
  constants$3.BARS = [11011001100, 11001101100, 11001100110, 10010011e3, 10010001100, 10001001100, 10011001e3, 10011000100, 10001100100, 11001001e3, 11001000100, 11000100100, 10110011100, 10011011100, 10011001110, 10111001100, 10011101100, 10011100110, 11001110010, 11001011100, 11001001110, 11011100100, 11001110100, 11101101110, 11101001100, 11100101100, 11100100110, 11101100100, 11100110100, 11100110010, 11011011e3, 11011000110, 11000110110, 10100011e3, 10001011e3, 10001000110, 10110001e3, 10001101e3, 10001100010, 11010001e3, 11000101e3, 11000100010, 10110111e3, 10110001110, 10001101110, 10111011e3, 10111000110, 10001110110, 11101110110, 11010001110, 11000101110, 11011101e3, 11011100010, 11011101110, 11101011e3, 11101000110, 11100010110, 11101101e3, 11101100010, 11100011010, 11101111010, 11001000010, 11110001010, 1010011e4, 10100001100, 1001011e4, 10010000110, 10000101100, 10000100110, 1011001e4, 10110000100, 1001101e4, 10011000010, 10000110100, 10000110010, 11000010010, 1100101e4, 11110111010, 11000010100, 10001111010, 10100111100, 10010111100, 10010011110, 10111100100, 10011110100, 10011110010, 11110100100, 11110010100, 11110010010, 11011011110, 11011110110, 11110110110, 10101111e3, 10100011110, 10001011110, 10111101e3, 10111100010, 11110101e3, 11110100010, 10111011110, 10111101110, 11101011110, 11110101110, 11010000100, 1101001e4, 11010011100, 1100011101011];
  return constants$3;
}
var hasRequiredCODE128$1;
function requireCODE128$1() {
  if (hasRequiredCODE128$1) return CODE128;
  hasRequiredCODE128$1 = 1;
  Object.defineProperty(CODE128, "__esModule", {
    value: true
  });
  var _createClass = /* @__PURE__ */ (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  var _Barcode2 = requireBarcode();
  var _Barcode3 = _interopRequireDefault(_Barcode2);
  var _constants = requireConstants$3();
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var CODE128$12 = (function(_Barcode) {
    _inherits(CODE1282, _Barcode);
    function CODE1282(data, options) {
      _classCallCheck(this, CODE1282);
      var _this = _possibleConstructorReturn(this, (CODE1282.__proto__ || Object.getPrototypeOf(CODE1282)).call(this, data.substring(1), options));
      _this.bytes = data.split("").map(function(char) {
        return char.charCodeAt(0);
      });
      return _this;
    }
    _createClass(CODE1282, [{
      key: "valid",
      value: function valid() {
        return /^[\x00-\x7F\xC8-\xD3]+$/.test(this.data);
      }
      // The public encoding function
    }, {
      key: "encode",
      value: function encode() {
        var bytes = this.bytes;
        var startIndex = bytes.shift() - 105;
        var startSet = _constants.SET_BY_CODE[startIndex];
        if (startSet === void 0) {
          throw new RangeError("The encoding does not start with a start character.");
        }
        if (this.shouldEncodeAsEan128() === true) {
          bytes.unshift(_constants.FNC1);
        }
        var encodingResult = CODE1282.next(bytes, 1, startSet);
        return {
          text: this.text === this.data ? this.text.replace(/[^\x20-\x7E]/g, "") : this.text,
          data: (
            // Add the start bits
            CODE1282.getBar(startIndex) + // Add the encoded bits
            encodingResult.result + // Add the checksum
            CODE1282.getBar((encodingResult.checksum + startIndex) % _constants.MODULO) + // Add the end bits
            CODE1282.getBar(_constants.STOP)
          )
        };
      }
      // GS1-128/EAN-128
    }, {
      key: "shouldEncodeAsEan128",
      value: function shouldEncodeAsEan128() {
        var isEAN128 = this.options.ean128 || false;
        if (typeof isEAN128 === "string") {
          isEAN128 = isEAN128.toLowerCase() === "true";
        }
        return isEAN128;
      }
      // Get a bar symbol by index
    }], [{
      key: "getBar",
      value: function getBar(index) {
        return _constants.BARS[index] ? _constants.BARS[index].toString() : "";
      }
      // Correct an index by a set and shift it from the bytes array
    }, {
      key: "correctIndex",
      value: function correctIndex(bytes, set) {
        if (set === _constants.SET_A) {
          var charCode = bytes.shift();
          return charCode < 32 ? charCode + 64 : charCode - 32;
        } else if (set === _constants.SET_B) {
          return bytes.shift() - 32;
        } else {
          return (bytes.shift() - 48) * 10 + bytes.shift() - 48;
        }
      }
    }, {
      key: "next",
      value: function next(bytes, pos, set) {
        if (!bytes.length) {
          return { result: "", checksum: 0 };
        }
        var nextCode = void 0, index = void 0;
        if (bytes[0] >= 200) {
          index = bytes.shift() - 105;
          var nextSet = _constants.SWAP[index];
          if (nextSet !== void 0) {
            nextCode = CODE1282.next(bytes, pos + 1, nextSet);
          } else {
            if ((set === _constants.SET_A || set === _constants.SET_B) && index === _constants.SHIFT) {
              bytes[0] = set === _constants.SET_A ? bytes[0] > 95 ? bytes[0] - 96 : bytes[0] : bytes[0] < 32 ? bytes[0] + 96 : bytes[0];
            }
            nextCode = CODE1282.next(bytes, pos + 1, set);
          }
        } else {
          index = CODE1282.correctIndex(bytes, set);
          nextCode = CODE1282.next(bytes, pos + 1, set);
        }
        var enc = CODE1282.getBar(index);
        var weight = index * pos;
        return {
          result: enc + nextCode.result,
          checksum: weight + nextCode.checksum
        };
      }
    }]);
    return CODE1282;
  })(_Barcode3.default);
  CODE128.default = CODE128$12;
  return CODE128;
}
var auto = {};
var hasRequiredAuto;
function requireAuto() {
  if (hasRequiredAuto) return auto;
  hasRequiredAuto = 1;
  Object.defineProperty(auto, "__esModule", {
    value: true
  });
  var _constants = requireConstants$3();
  var matchSetALength = function matchSetALength2(string) {
    return string.match(new RegExp("^" + _constants.A_CHARS + "*"))[0].length;
  };
  var matchSetBLength = function matchSetBLength2(string) {
    return string.match(new RegExp("^" + _constants.B_CHARS + "*"))[0].length;
  };
  var matchSetC = function matchSetC2(string) {
    return string.match(new RegExp("^" + _constants.C_CHARS + "*"))[0];
  };
  function autoSelectFromAB(string, isA) {
    var ranges = isA ? _constants.A_CHARS : _constants.B_CHARS;
    var untilC = string.match(new RegExp("^(" + ranges + "+?)(([0-9]{2}){2,})([^0-9]|$)"));
    if (untilC) {
      return untilC[1] + String.fromCharCode(204) + autoSelectFromC(string.substring(untilC[1].length));
    }
    var chars = string.match(new RegExp("^" + ranges + "+"))[0];
    if (chars.length === string.length) {
      return string;
    }
    return chars + String.fromCharCode(isA ? 205 : 206) + autoSelectFromAB(string.substring(chars.length), !isA);
  }
  function autoSelectFromC(string) {
    var cMatch = matchSetC(string);
    var length = cMatch.length;
    if (length === string.length) {
      return string;
    }
    string = string.substring(length);
    var isA = matchSetALength(string) >= matchSetBLength(string);
    return cMatch + String.fromCharCode(isA ? 206 : 205) + autoSelectFromAB(string, isA);
  }
  auto.default = function(string) {
    var newString = void 0;
    var cLength = matchSetC(string).length;
    if (cLength >= 2) {
      newString = _constants.C_START_CHAR + autoSelectFromC(string);
    } else {
      var isA = matchSetALength(string) > matchSetBLength(string);
      newString = (isA ? _constants.A_START_CHAR : _constants.B_START_CHAR) + autoSelectFromAB(string, isA);
    }
    return newString.replace(
      /[\xCD\xCE]([^])[\xCD\xCE]/,
      // Any sequence between 205 and 206 characters
      function(match, char) {
        return String.fromCharCode(203) + char;
      }
    );
  };
  return auto;
}
var hasRequiredCODE128_AUTO;
function requireCODE128_AUTO() {
  if (hasRequiredCODE128_AUTO) return CODE128_AUTO;
  hasRequiredCODE128_AUTO = 1;
  Object.defineProperty(CODE128_AUTO, "__esModule", {
    value: true
  });
  var _CODE2 = requireCODE128$1();
  var _CODE3 = _interopRequireDefault(_CODE2);
  var _auto = requireAuto();
  var _auto2 = _interopRequireDefault(_auto);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var CODE128AUTO = (function(_CODE) {
    _inherits(CODE128AUTO2, _CODE);
    function CODE128AUTO2(data, options) {
      _classCallCheck(this, CODE128AUTO2);
      if (/^[\x00-\x7F\xC8-\xD3]+$/.test(data)) {
        var _this = _possibleConstructorReturn(this, (CODE128AUTO2.__proto__ || Object.getPrototypeOf(CODE128AUTO2)).call(this, (0, _auto2.default)(data), options));
      } else {
        var _this = _possibleConstructorReturn(this, (CODE128AUTO2.__proto__ || Object.getPrototypeOf(CODE128AUTO2)).call(this, data, options));
      }
      return _possibleConstructorReturn(_this);
    }
    return CODE128AUTO2;
  })(_CODE3.default);
  CODE128_AUTO.default = CODE128AUTO;
  return CODE128_AUTO;
}
var CODE128A = {};
var hasRequiredCODE128A;
function requireCODE128A() {
  if (hasRequiredCODE128A) return CODE128A;
  hasRequiredCODE128A = 1;
  Object.defineProperty(CODE128A, "__esModule", {
    value: true
  });
  var _createClass = /* @__PURE__ */ (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  var _CODE2 = requireCODE128$1();
  var _CODE3 = _interopRequireDefault(_CODE2);
  var _constants = requireConstants$3();
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var CODE128A$1 = (function(_CODE) {
    _inherits(CODE128A2, _CODE);
    function CODE128A2(string, options) {
      _classCallCheck(this, CODE128A2);
      return _possibleConstructorReturn(this, (CODE128A2.__proto__ || Object.getPrototypeOf(CODE128A2)).call(this, _constants.A_START_CHAR + string, options));
    }
    _createClass(CODE128A2, [{
      key: "valid",
      value: function valid() {
        return new RegExp("^" + _constants.A_CHARS + "+$").test(this.data);
      }
    }]);
    return CODE128A2;
  })(_CODE3.default);
  CODE128A.default = CODE128A$1;
  return CODE128A;
}
var CODE128B = {};
var hasRequiredCODE128B;
function requireCODE128B() {
  if (hasRequiredCODE128B) return CODE128B;
  hasRequiredCODE128B = 1;
  Object.defineProperty(CODE128B, "__esModule", {
    value: true
  });
  var _createClass = /* @__PURE__ */ (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  var _CODE2 = requireCODE128$1();
  var _CODE3 = _interopRequireDefault(_CODE2);
  var _constants = requireConstants$3();
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var CODE128B$1 = (function(_CODE) {
    _inherits(CODE128B2, _CODE);
    function CODE128B2(string, options) {
      _classCallCheck(this, CODE128B2);
      return _possibleConstructorReturn(this, (CODE128B2.__proto__ || Object.getPrototypeOf(CODE128B2)).call(this, _constants.B_START_CHAR + string, options));
    }
    _createClass(CODE128B2, [{
      key: "valid",
      value: function valid() {
        return new RegExp("^" + _constants.B_CHARS + "+$").test(this.data);
      }
    }]);
    return CODE128B2;
  })(_CODE3.default);
  CODE128B.default = CODE128B$1;
  return CODE128B;
}
var CODE128C = {};
var hasRequiredCODE128C;
function requireCODE128C() {
  if (hasRequiredCODE128C) return CODE128C;
  hasRequiredCODE128C = 1;
  Object.defineProperty(CODE128C, "__esModule", {
    value: true
  });
  var _createClass = /* @__PURE__ */ (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  var _CODE2 = requireCODE128$1();
  var _CODE3 = _interopRequireDefault(_CODE2);
  var _constants = requireConstants$3();
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var CODE128C$1 = (function(_CODE) {
    _inherits(CODE128C2, _CODE);
    function CODE128C2(string, options) {
      _classCallCheck(this, CODE128C2);
      return _possibleConstructorReturn(this, (CODE128C2.__proto__ || Object.getPrototypeOf(CODE128C2)).call(this, _constants.C_START_CHAR + string, options));
    }
    _createClass(CODE128C2, [{
      key: "valid",
      value: function valid() {
        return new RegExp("^" + _constants.C_CHARS + "+$").test(this.data);
      }
    }]);
    return CODE128C2;
  })(_CODE3.default);
  CODE128C.default = CODE128C$1;
  return CODE128C;
}
var hasRequiredCODE128;
function requireCODE128() {
  if (hasRequiredCODE128) return CODE128$1;
  hasRequiredCODE128 = 1;
  Object.defineProperty(CODE128$1, "__esModule", {
    value: true
  });
  CODE128$1.CODE128C = CODE128$1.CODE128B = CODE128$1.CODE128A = CODE128$1.CODE128 = void 0;
  var _CODE128_AUTO = requireCODE128_AUTO();
  var _CODE128_AUTO2 = _interopRequireDefault(_CODE128_AUTO);
  var _CODE128A = requireCODE128A();
  var _CODE128A2 = _interopRequireDefault(_CODE128A);
  var _CODE128B = requireCODE128B();
  var _CODE128B2 = _interopRequireDefault(_CODE128B);
  var _CODE128C = requireCODE128C();
  var _CODE128C2 = _interopRequireDefault(_CODE128C);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  CODE128$1.CODE128 = _CODE128_AUTO2.default;
  CODE128$1.CODE128A = _CODE128A2.default;
  CODE128$1.CODE128B = _CODE128B2.default;
  CODE128$1.CODE128C = _CODE128C2.default;
  return CODE128$1;
}
var EAN_UPC = {};
var EAN13 = {};
var constants$2 = {};
var hasRequiredConstants$2;
function requireConstants$2() {
  if (hasRequiredConstants$2) return constants$2;
  hasRequiredConstants$2 = 1;
  Object.defineProperty(constants$2, "__esModule", {
    value: true
  });
  constants$2.SIDE_BIN = "101";
  constants$2.MIDDLE_BIN = "01010";
  constants$2.BINARIES = {
    "L": [
      // The L (left) type of encoding
      "0001101",
      "0011001",
      "0010011",
      "0111101",
      "0100011",
      "0110001",
      "0101111",
      "0111011",
      "0110111",
      "0001011"
    ],
    "G": [
      // The G type of encoding
      "0100111",
      "0110011",
      "0011011",
      "0100001",
      "0011101",
      "0111001",
      "0000101",
      "0010001",
      "0001001",
      "0010111"
    ],
    "R": [
      // The R (right) type of encoding
      "1110010",
      "1100110",
      "1101100",
      "1000010",
      "1011100",
      "1001110",
      "1010000",
      "1000100",
      "1001000",
      "1110100"
    ],
    "O": [
      // The O (odd) encoding for UPC-E
      "0001101",
      "0011001",
      "0010011",
      "0111101",
      "0100011",
      "0110001",
      "0101111",
      "0111011",
      "0110111",
      "0001011"
    ],
    "E": [
      // The E (even) encoding for UPC-E
      "0100111",
      "0110011",
      "0011011",
      "0100001",
      "0011101",
      "0111001",
      "0000101",
      "0010001",
      "0001001",
      "0010111"
    ]
  };
  constants$2.EAN2_STRUCTURE = ["LL", "LG", "GL", "GG"];
  constants$2.EAN5_STRUCTURE = ["GGLLL", "GLGLL", "GLLGL", "GLLLG", "LGGLL", "LLGGL", "LLLGG", "LGLGL", "LGLLG", "LLGLG"];
  constants$2.EAN13_STRUCTURE = ["LLLLLL", "LLGLGG", "LLGGLG", "LLGGGL", "LGLLGG", "LGGLLG", "LGGGLL", "LGLGLG", "LGLGGL", "LGGLGL"];
  return constants$2;
}
var EAN = {};
var encoder = {};
var hasRequiredEncoder;
function requireEncoder() {
  if (hasRequiredEncoder) return encoder;
  hasRequiredEncoder = 1;
  Object.defineProperty(encoder, "__esModule", {
    value: true
  });
  var _constants = requireConstants$2();
  var encode = function encode2(data, structure, separator) {
    var encoded = data.split("").map(function(val, idx) {
      return _constants.BINARIES[structure[idx]];
    }).map(function(val, idx) {
      return val ? val[data[idx]] : "";
    });
    if (separator) {
      var last = data.length - 1;
      encoded = encoded.map(function(val, idx) {
        return idx < last ? val + separator : val;
      });
    }
    return encoded.join("");
  };
  encoder.default = encode;
  return encoder;
}
var hasRequiredEAN;
function requireEAN() {
  if (hasRequiredEAN) return EAN;
  hasRequiredEAN = 1;
  Object.defineProperty(EAN, "__esModule", {
    value: true
  });
  var _createClass = /* @__PURE__ */ (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  var _constants = requireConstants$2();
  var _encoder = requireEncoder();
  var _encoder2 = _interopRequireDefault(_encoder);
  var _Barcode2 = requireBarcode();
  var _Barcode3 = _interopRequireDefault(_Barcode2);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var EAN$1 = (function(_Barcode) {
    _inherits(EAN3, _Barcode);
    function EAN3(data, options) {
      _classCallCheck(this, EAN3);
      var _this = _possibleConstructorReturn(this, (EAN3.__proto__ || Object.getPrototypeOf(EAN3)).call(this, data, options));
      _this.fontSize = !options.flat && options.fontSize > options.width * 10 ? options.width * 10 : options.fontSize;
      _this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
      return _this;
    }
    _createClass(EAN3, [{
      key: "encode",
      value: function encode() {
        return this.options.flat ? this.encodeFlat() : this.encodeGuarded();
      }
    }, {
      key: "leftText",
      value: function leftText(from, to) {
        return this.text.substr(from, to);
      }
    }, {
      key: "leftEncode",
      value: function leftEncode(data, structure) {
        return (0, _encoder2.default)(data, structure);
      }
    }, {
      key: "rightText",
      value: function rightText(from, to) {
        return this.text.substr(from, to);
      }
    }, {
      key: "rightEncode",
      value: function rightEncode(data, structure) {
        return (0, _encoder2.default)(data, structure);
      }
    }, {
      key: "encodeGuarded",
      value: function encodeGuarded() {
        var textOptions = { fontSize: this.fontSize };
        var guardOptions = { height: this.guardHeight };
        return [{ data: _constants.SIDE_BIN, options: guardOptions }, { data: this.leftEncode(), text: this.leftText(), options: textOptions }, { data: _constants.MIDDLE_BIN, options: guardOptions }, { data: this.rightEncode(), text: this.rightText(), options: textOptions }, { data: _constants.SIDE_BIN, options: guardOptions }];
      }
    }, {
      key: "encodeFlat",
      value: function encodeFlat() {
        var data = [_constants.SIDE_BIN, this.leftEncode(), _constants.MIDDLE_BIN, this.rightEncode(), _constants.SIDE_BIN];
        return {
          data: data.join(""),
          text: this.text
        };
      }
    }]);
    return EAN3;
  })(_Barcode3.default);
  EAN.default = EAN$1;
  return EAN;
}
var hasRequiredEAN13;
function requireEAN13() {
  if (hasRequiredEAN13) return EAN13;
  hasRequiredEAN13 = 1;
  Object.defineProperty(EAN13, "__esModule", {
    value: true
  });
  var _createClass = /* @__PURE__ */ (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  var _get = function get(object2, property, receiver) {
    if (object2 === null) object2 = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object2, property);
    if (desc === void 0) {
      var parent = Object.getPrototypeOf(object2);
      if (parent === null) {
        return void 0;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;
      if (getter === void 0) {
        return void 0;
      }
      return getter.call(receiver);
    }
  };
  var _constants = requireConstants$2();
  var _EAN2 = requireEAN();
  var _EAN3 = _interopRequireDefault(_EAN2);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var checksum = function checksum2(number) {
    var res = number.substr(0, 12).split("").map(function(n) {
      return +n;
    }).reduce(function(sum, a, idx) {
      return idx % 2 ? sum + a * 3 : sum + a;
    }, 0);
    return (10 - res % 10) % 10;
  };
  var EAN13$1 = (function(_EAN) {
    _inherits(EAN132, _EAN);
    function EAN132(data, options) {
      _classCallCheck(this, EAN132);
      if (data.search(/^[0-9]{12}$/) !== -1) {
        data += checksum(data);
      }
      var _this = _possibleConstructorReturn(this, (EAN132.__proto__ || Object.getPrototypeOf(EAN132)).call(this, data, options));
      _this.lastChar = options.lastChar;
      return _this;
    }
    _createClass(EAN132, [{
      key: "valid",
      value: function valid() {
        return this.data.search(/^[0-9]{13}$/) !== -1 && +this.data[12] === checksum(this.data);
      }
    }, {
      key: "leftText",
      value: function leftText() {
        return _get(EAN132.prototype.__proto__ || Object.getPrototypeOf(EAN132.prototype), "leftText", this).call(this, 1, 6);
      }
    }, {
      key: "leftEncode",
      value: function leftEncode() {
        var data = this.data.substr(1, 6);
        var structure = _constants.EAN13_STRUCTURE[this.data[0]];
        return _get(EAN132.prototype.__proto__ || Object.getPrototypeOf(EAN132.prototype), "leftEncode", this).call(this, data, structure);
      }
    }, {
      key: "rightText",
      value: function rightText() {
        return _get(EAN132.prototype.__proto__ || Object.getPrototypeOf(EAN132.prototype), "rightText", this).call(this, 7, 6);
      }
    }, {
      key: "rightEncode",
      value: function rightEncode() {
        var data = this.data.substr(7, 6);
        return _get(EAN132.prototype.__proto__ || Object.getPrototypeOf(EAN132.prototype), "rightEncode", this).call(this, data, "RRRRRR");
      }
      // The "standard" way of printing EAN13 barcodes with guard bars
    }, {
      key: "encodeGuarded",
      value: function encodeGuarded() {
        var data = _get(EAN132.prototype.__proto__ || Object.getPrototypeOf(EAN132.prototype), "encodeGuarded", this).call(this);
        if (this.options.displayValue) {
          data.unshift({
            data: "000000000000",
            text: this.text.substr(0, 1),
            options: { textAlign: "left", fontSize: this.fontSize }
          });
          if (this.options.lastChar) {
            data.push({
              data: "00"
            });
            data.push({
              data: "00000",
              text: this.options.lastChar,
              options: { fontSize: this.fontSize }
            });
          }
        }
        return data;
      }
    }]);
    return EAN132;
  })(_EAN3.default);
  EAN13.default = EAN13$1;
  return EAN13;
}
var EAN8 = {};
var hasRequiredEAN8;
function requireEAN8() {
  if (hasRequiredEAN8) return EAN8;
  hasRequiredEAN8 = 1;
  Object.defineProperty(EAN8, "__esModule", {
    value: true
  });
  var _createClass = /* @__PURE__ */ (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  var _get = function get(object2, property, receiver) {
    if (object2 === null) object2 = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object2, property);
    if (desc === void 0) {
      var parent = Object.getPrototypeOf(object2);
      if (parent === null) {
        return void 0;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;
      if (getter === void 0) {
        return void 0;
      }
      return getter.call(receiver);
    }
  };
  var _EAN2 = requireEAN();
  var _EAN3 = _interopRequireDefault(_EAN2);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var checksum = function checksum2(number) {
    var res = number.substr(0, 7).split("").map(function(n) {
      return +n;
    }).reduce(function(sum, a, idx) {
      return idx % 2 ? sum + a : sum + a * 3;
    }, 0);
    return (10 - res % 10) % 10;
  };
  var EAN8$1 = (function(_EAN) {
    _inherits(EAN82, _EAN);
    function EAN82(data, options) {
      _classCallCheck(this, EAN82);
      if (data.search(/^[0-9]{7}$/) !== -1) {
        data += checksum(data);
      }
      return _possibleConstructorReturn(this, (EAN82.__proto__ || Object.getPrototypeOf(EAN82)).call(this, data, options));
    }
    _createClass(EAN82, [{
      key: "valid",
      value: function valid() {
        return this.data.search(/^[0-9]{8}$/) !== -1 && +this.data[7] === checksum(this.data);
      }
    }, {
      key: "leftText",
      value: function leftText() {
        return _get(EAN82.prototype.__proto__ || Object.getPrototypeOf(EAN82.prototype), "leftText", this).call(this, 0, 4);
      }
    }, {
      key: "leftEncode",
      value: function leftEncode() {
        var data = this.data.substr(0, 4);
        return _get(EAN82.prototype.__proto__ || Object.getPrototypeOf(EAN82.prototype), "leftEncode", this).call(this, data, "LLLL");
      }
    }, {
      key: "rightText",
      value: function rightText() {
        return _get(EAN82.prototype.__proto__ || Object.getPrototypeOf(EAN82.prototype), "rightText", this).call(this, 4, 4);
      }
    }, {
      key: "rightEncode",
      value: function rightEncode() {
        var data = this.data.substr(4, 4);
        return _get(EAN82.prototype.__proto__ || Object.getPrototypeOf(EAN82.prototype), "rightEncode", this).call(this, data, "RRRR");
      }
    }]);
    return EAN82;
  })(_EAN3.default);
  EAN8.default = EAN8$1;
  return EAN8;
}
var EAN5 = {};
var hasRequiredEAN5;
function requireEAN5() {
  if (hasRequiredEAN5) return EAN5;
  hasRequiredEAN5 = 1;
  Object.defineProperty(EAN5, "__esModule", {
    value: true
  });
  var _createClass = /* @__PURE__ */ (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  var _constants = requireConstants$2();
  var _encoder = requireEncoder();
  var _encoder2 = _interopRequireDefault(_encoder);
  var _Barcode2 = requireBarcode();
  var _Barcode3 = _interopRequireDefault(_Barcode2);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var checksum = function checksum2(data) {
    var result = data.split("").map(function(n) {
      return +n;
    }).reduce(function(sum, a, idx) {
      return idx % 2 ? sum + a * 9 : sum + a * 3;
    }, 0);
    return result % 10;
  };
  var EAN5$1 = (function(_Barcode) {
    _inherits(EAN52, _Barcode);
    function EAN52(data, options) {
      _classCallCheck(this, EAN52);
      return _possibleConstructorReturn(this, (EAN52.__proto__ || Object.getPrototypeOf(EAN52)).call(this, data, options));
    }
    _createClass(EAN52, [{
      key: "valid",
      value: function valid() {
        return this.data.search(/^[0-9]{5}$/) !== -1;
      }
    }, {
      key: "encode",
      value: function encode() {
        var structure = _constants.EAN5_STRUCTURE[checksum(this.data)];
        return {
          data: "1011" + (0, _encoder2.default)(this.data, structure, "01"),
          text: this.text
        };
      }
    }]);
    return EAN52;
  })(_Barcode3.default);
  EAN5.default = EAN5$1;
  return EAN5;
}
var EAN2 = {};
var hasRequiredEAN2;
function requireEAN2() {
  if (hasRequiredEAN2) return EAN2;
  hasRequiredEAN2 = 1;
  Object.defineProperty(EAN2, "__esModule", {
    value: true
  });
  var _createClass = /* @__PURE__ */ (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  var _constants = requireConstants$2();
  var _encoder = requireEncoder();
  var _encoder2 = _interopRequireDefault(_encoder);
  var _Barcode2 = requireBarcode();
  var _Barcode3 = _interopRequireDefault(_Barcode2);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var EAN2$1 = (function(_Barcode) {
    _inherits(EAN22, _Barcode);
    function EAN22(data, options) {
      _classCallCheck(this, EAN22);
      return _possibleConstructorReturn(this, (EAN22.__proto__ || Object.getPrototypeOf(EAN22)).call(this, data, options));
    }
    _createClass(EAN22, [{
      key: "valid",
      value: function valid() {
        return this.data.search(/^[0-9]{2}$/) !== -1;
      }
    }, {
      key: "encode",
      value: function encode() {
        var structure = _constants.EAN2_STRUCTURE[parseInt(this.data) % 4];
        return {
          // Start bits + Encode the two digits with 01 in between
          data: "1011" + (0, _encoder2.default)(this.data, structure, "01"),
          text: this.text
        };
      }
    }]);
    return EAN22;
  })(_Barcode3.default);
  EAN2.default = EAN2$1;
  return EAN2;
}
var UPC = {};
var hasRequiredUPC;
function requireUPC() {
  if (hasRequiredUPC) return UPC;
  hasRequiredUPC = 1;
  Object.defineProperty(UPC, "__esModule", {
    value: true
  });
  var _createClass = /* @__PURE__ */ (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  UPC.checksum = checksum;
  var _encoder = requireEncoder();
  var _encoder2 = _interopRequireDefault(_encoder);
  var _Barcode2 = requireBarcode();
  var _Barcode3 = _interopRequireDefault(_Barcode2);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var UPC$1 = (function(_Barcode) {
    _inherits(UPC2, _Barcode);
    function UPC2(data, options) {
      _classCallCheck(this, UPC2);
      if (data.search(/^[0-9]{11}$/) !== -1) {
        data += checksum(data);
      }
      var _this = _possibleConstructorReturn(this, (UPC2.__proto__ || Object.getPrototypeOf(UPC2)).call(this, data, options));
      _this.displayValue = options.displayValue;
      if (options.fontSize > options.width * 10) {
        _this.fontSize = options.width * 10;
      } else {
        _this.fontSize = options.fontSize;
      }
      _this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
      return _this;
    }
    _createClass(UPC2, [{
      key: "valid",
      value: function valid() {
        return this.data.search(/^[0-9]{12}$/) !== -1 && this.data[11] == checksum(this.data);
      }
    }, {
      key: "encode",
      value: function encode() {
        if (this.options.flat) {
          return this.flatEncoding();
        } else {
          return this.guardedEncoding();
        }
      }
    }, {
      key: "flatEncoding",
      value: function flatEncoding() {
        var result = "";
        result += "101";
        result += (0, _encoder2.default)(this.data.substr(0, 6), "LLLLLL");
        result += "01010";
        result += (0, _encoder2.default)(this.data.substr(6, 6), "RRRRRR");
        result += "101";
        return {
          data: result,
          text: this.text
        };
      }
    }, {
      key: "guardedEncoding",
      value: function guardedEncoding() {
        var result = [];
        if (this.displayValue) {
          result.push({
            data: "00000000",
            text: this.text.substr(0, 1),
            options: { textAlign: "left", fontSize: this.fontSize }
          });
        }
        result.push({
          data: "101" + (0, _encoder2.default)(this.data[0], "L"),
          options: { height: this.guardHeight }
        });
        result.push({
          data: (0, _encoder2.default)(this.data.substr(1, 5), "LLLLL"),
          text: this.text.substr(1, 5),
          options: { fontSize: this.fontSize }
        });
        result.push({
          data: "01010",
          options: { height: this.guardHeight }
        });
        result.push({
          data: (0, _encoder2.default)(this.data.substr(6, 5), "RRRRR"),
          text: this.text.substr(6, 5),
          options: { fontSize: this.fontSize }
        });
        result.push({
          data: (0, _encoder2.default)(this.data[11], "R") + "101",
          options: { height: this.guardHeight }
        });
        if (this.displayValue) {
          result.push({
            data: "00000000",
            text: this.text.substr(11, 1),
            options: { textAlign: "right", fontSize: this.fontSize }
          });
        }
        return result;
      }
    }]);
    return UPC2;
  })(_Barcode3.default);
  function checksum(number) {
    var result = 0;
    var i;
    for (i = 1; i < 11; i += 2) {
      result += parseInt(number[i]);
    }
    for (i = 0; i < 11; i += 2) {
      result += parseInt(number[i]) * 3;
    }
    return (10 - result % 10) % 10;
  }
  UPC.default = UPC$1;
  return UPC;
}
var UPCE = {};
var hasRequiredUPCE;
function requireUPCE() {
  if (hasRequiredUPCE) return UPCE;
  hasRequiredUPCE = 1;
  Object.defineProperty(UPCE, "__esModule", {
    value: true
  });
  var _createClass = /* @__PURE__ */ (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  var _encoder = requireEncoder();
  var _encoder2 = _interopRequireDefault(_encoder);
  var _Barcode2 = requireBarcode();
  var _Barcode3 = _interopRequireDefault(_Barcode2);
  var _UPC = requireUPC();
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var EXPANSIONS = ["XX00000XXX", "XX10000XXX", "XX20000XXX", "XXX00000XX", "XXXX00000X", "XXXXX00005", "XXXXX00006", "XXXXX00007", "XXXXX00008", "XXXXX00009"];
  var PARITIES = [["EEEOOO", "OOOEEE"], ["EEOEOO", "OOEOEE"], ["EEOOEO", "OOEEOE"], ["EEOOOE", "OOEEEO"], ["EOEEOO", "OEOOEE"], ["EOOEEO", "OEEOOE"], ["EOOOEE", "OEEEOO"], ["EOEOEO", "OEOEOE"], ["EOEOOE", "OEOEEO"], ["EOOEOE", "OEEOEO"]];
  var UPCE$1 = (function(_Barcode) {
    _inherits(UPCE2, _Barcode);
    function UPCE2(data, options) {
      _classCallCheck(this, UPCE2);
      var _this = _possibleConstructorReturn(this, (UPCE2.__proto__ || Object.getPrototypeOf(UPCE2)).call(this, data, options));
      _this.isValid = false;
      if (data.search(/^[0-9]{6}$/) !== -1) {
        _this.middleDigits = data;
        _this.upcA = expandToUPCA(data, "0");
        _this.text = options.text || "" + _this.upcA[0] + data + _this.upcA[_this.upcA.length - 1];
        _this.isValid = true;
      } else if (data.search(/^[01][0-9]{7}$/) !== -1) {
        _this.middleDigits = data.substring(1, data.length - 1);
        _this.upcA = expandToUPCA(_this.middleDigits, data[0]);
        if (_this.upcA[_this.upcA.length - 1] === data[data.length - 1]) {
          _this.isValid = true;
        } else {
          return _possibleConstructorReturn(_this);
        }
      } else {
        return _possibleConstructorReturn(_this);
      }
      _this.displayValue = options.displayValue;
      if (options.fontSize > options.width * 10) {
        _this.fontSize = options.width * 10;
      } else {
        _this.fontSize = options.fontSize;
      }
      _this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
      return _this;
    }
    _createClass(UPCE2, [{
      key: "valid",
      value: function valid() {
        return this.isValid;
      }
    }, {
      key: "encode",
      value: function encode() {
        if (this.options.flat) {
          return this.flatEncoding();
        } else {
          return this.guardedEncoding();
        }
      }
    }, {
      key: "flatEncoding",
      value: function flatEncoding() {
        var result = "";
        result += "101";
        result += this.encodeMiddleDigits();
        result += "010101";
        return {
          data: result,
          text: this.text
        };
      }
    }, {
      key: "guardedEncoding",
      value: function guardedEncoding() {
        var result = [];
        if (this.displayValue) {
          result.push({
            data: "00000000",
            text: this.text[0],
            options: { textAlign: "left", fontSize: this.fontSize }
          });
        }
        result.push({
          data: "101",
          options: { height: this.guardHeight }
        });
        result.push({
          data: this.encodeMiddleDigits(),
          text: this.text.substring(1, 7),
          options: { fontSize: this.fontSize }
        });
        result.push({
          data: "010101",
          options: { height: this.guardHeight }
        });
        if (this.displayValue) {
          result.push({
            data: "00000000",
            text: this.text[7],
            options: { textAlign: "right", fontSize: this.fontSize }
          });
        }
        return result;
      }
    }, {
      key: "encodeMiddleDigits",
      value: function encodeMiddleDigits() {
        var numberSystem = this.upcA[0];
        var checkDigit = this.upcA[this.upcA.length - 1];
        var parity = PARITIES[parseInt(checkDigit)][parseInt(numberSystem)];
        return (0, _encoder2.default)(this.middleDigits, parity);
      }
    }]);
    return UPCE2;
  })(_Barcode3.default);
  function expandToUPCA(middleDigits, numberSystem) {
    var lastUpcE = parseInt(middleDigits[middleDigits.length - 1]);
    var expansion = EXPANSIONS[lastUpcE];
    var result = "";
    var digitIndex = 0;
    for (var i = 0; i < expansion.length; i++) {
      var c = expansion[i];
      if (c === "X") {
        result += middleDigits[digitIndex++];
      } else {
        result += c;
      }
    }
    result = "" + numberSystem + result;
    return "" + result + (0, _UPC.checksum)(result);
  }
  UPCE.default = UPCE$1;
  return UPCE;
}
var hasRequiredEAN_UPC;
function requireEAN_UPC() {
  if (hasRequiredEAN_UPC) return EAN_UPC;
  hasRequiredEAN_UPC = 1;
  Object.defineProperty(EAN_UPC, "__esModule", {
    value: true
  });
  EAN_UPC.UPCE = EAN_UPC.UPC = EAN_UPC.EAN2 = EAN_UPC.EAN5 = EAN_UPC.EAN8 = EAN_UPC.EAN13 = void 0;
  var _EAN = requireEAN13();
  var _EAN2 = _interopRequireDefault(_EAN);
  var _EAN3 = requireEAN8();
  var _EAN4 = _interopRequireDefault(_EAN3);
  var _EAN5 = requireEAN5();
  var _EAN6 = _interopRequireDefault(_EAN5);
  var _EAN7 = requireEAN2();
  var _EAN8 = _interopRequireDefault(_EAN7);
  var _UPC = requireUPC();
  var _UPC2 = _interopRequireDefault(_UPC);
  var _UPCE = requireUPCE();
  var _UPCE2 = _interopRequireDefault(_UPCE);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  EAN_UPC.EAN13 = _EAN2.default;
  EAN_UPC.EAN8 = _EAN4.default;
  EAN_UPC.EAN5 = _EAN6.default;
  EAN_UPC.EAN2 = _EAN8.default;
  EAN_UPC.UPC = _UPC2.default;
  EAN_UPC.UPCE = _UPCE2.default;
  return EAN_UPC;
}
var ITF$1 = {};
var ITF = {};
var constants$1 = {};
var hasRequiredConstants$1;
function requireConstants$1() {
  if (hasRequiredConstants$1) return constants$1;
  hasRequiredConstants$1 = 1;
  Object.defineProperty(constants$1, "__esModule", {
    value: true
  });
  constants$1.START_BIN = "1010";
  constants$1.END_BIN = "11101";
  constants$1.BINARIES = ["00110", "10001", "01001", "11000", "00101", "10100", "01100", "00011", "10010", "01010"];
  return constants$1;
}
var hasRequiredITF$1;
function requireITF$1() {
  if (hasRequiredITF$1) return ITF;
  hasRequiredITF$1 = 1;
  Object.defineProperty(ITF, "__esModule", {
    value: true
  });
  var _createClass = /* @__PURE__ */ (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  var _constants = requireConstants$1();
  var _Barcode2 = requireBarcode();
  var _Barcode3 = _interopRequireDefault(_Barcode2);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var ITF$12 = (function(_Barcode) {
    _inherits(ITF2, _Barcode);
    function ITF2() {
      _classCallCheck(this, ITF2);
      return _possibleConstructorReturn(this, (ITF2.__proto__ || Object.getPrototypeOf(ITF2)).apply(this, arguments));
    }
    _createClass(ITF2, [{
      key: "valid",
      value: function valid() {
        return this.data.search(/^([0-9]{2})+$/) !== -1;
      }
    }, {
      key: "encode",
      value: function encode() {
        var _this2 = this;
        var encoded = this.data.match(/.{2}/g).map(function(pair) {
          return _this2.encodePair(pair);
        }).join("");
        return {
          data: _constants.START_BIN + encoded + _constants.END_BIN,
          text: this.text
        };
      }
      // Calculate the data of a number pair
    }, {
      key: "encodePair",
      value: function encodePair(pair) {
        var second = _constants.BINARIES[pair[1]];
        return _constants.BINARIES[pair[0]].split("").map(function(first, idx) {
          return (first === "1" ? "111" : "1") + (second[idx] === "1" ? "000" : "0");
        }).join("");
      }
    }]);
    return ITF2;
  })(_Barcode3.default);
  ITF.default = ITF$12;
  return ITF;
}
var ITF14 = {};
var hasRequiredITF14;
function requireITF14() {
  if (hasRequiredITF14) return ITF14;
  hasRequiredITF14 = 1;
  Object.defineProperty(ITF14, "__esModule", {
    value: true
  });
  var _createClass = /* @__PURE__ */ (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  var _ITF2 = requireITF$1();
  var _ITF3 = _interopRequireDefault(_ITF2);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var checksum = function checksum2(data) {
    var res = data.substr(0, 13).split("").map(function(num) {
      return parseInt(num, 10);
    }).reduce(function(sum, n, idx) {
      return sum + n * (3 - idx % 2 * 2);
    }, 0);
    return Math.ceil(res / 10) * 10 - res;
  };
  var ITF14$1 = (function(_ITF) {
    _inherits(ITF142, _ITF);
    function ITF142(data, options) {
      _classCallCheck(this, ITF142);
      if (data.search(/^[0-9]{13}$/) !== -1) {
        data += checksum(data);
      }
      return _possibleConstructorReturn(this, (ITF142.__proto__ || Object.getPrototypeOf(ITF142)).call(this, data, options));
    }
    _createClass(ITF142, [{
      key: "valid",
      value: function valid() {
        return this.data.search(/^[0-9]{14}$/) !== -1 && +this.data[13] === checksum(this.data);
      }
    }]);
    return ITF142;
  })(_ITF3.default);
  ITF14.default = ITF14$1;
  return ITF14;
}
var hasRequiredITF;
function requireITF() {
  if (hasRequiredITF) return ITF$1;
  hasRequiredITF = 1;
  Object.defineProperty(ITF$1, "__esModule", {
    value: true
  });
  ITF$1.ITF14 = ITF$1.ITF = void 0;
  var _ITF = requireITF$1();
  var _ITF2 = _interopRequireDefault(_ITF);
  var _ITF3 = requireITF14();
  var _ITF4 = _interopRequireDefault(_ITF3);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  ITF$1.ITF = _ITF2.default;
  ITF$1.ITF14 = _ITF4.default;
  return ITF$1;
}
var MSI$1 = {};
var MSI = {};
var hasRequiredMSI$1;
function requireMSI$1() {
  if (hasRequiredMSI$1) return MSI;
  hasRequiredMSI$1 = 1;
  Object.defineProperty(MSI, "__esModule", {
    value: true
  });
  var _createClass = /* @__PURE__ */ (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  var _Barcode2 = requireBarcode();
  var _Barcode3 = _interopRequireDefault(_Barcode2);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var MSI$12 = (function(_Barcode) {
    _inherits(MSI2, _Barcode);
    function MSI2(data, options) {
      _classCallCheck(this, MSI2);
      return _possibleConstructorReturn(this, (MSI2.__proto__ || Object.getPrototypeOf(MSI2)).call(this, data, options));
    }
    _createClass(MSI2, [{
      key: "encode",
      value: function encode() {
        var ret = "110";
        for (var i = 0; i < this.data.length; i++) {
          var digit = parseInt(this.data[i]);
          var bin = digit.toString(2);
          bin = addZeroes(bin, 4 - bin.length);
          for (var b = 0; b < bin.length; b++) {
            ret += bin[b] == "0" ? "100" : "110";
          }
        }
        ret += "1001";
        return {
          data: ret,
          text: this.text
        };
      }
    }, {
      key: "valid",
      value: function valid() {
        return this.data.search(/^[0-9]+$/) !== -1;
      }
    }]);
    return MSI2;
  })(_Barcode3.default);
  function addZeroes(number, n) {
    for (var i = 0; i < n; i++) {
      number = "0" + number;
    }
    return number;
  }
  MSI.default = MSI$12;
  return MSI;
}
var MSI10 = {};
var checksums = {};
var hasRequiredChecksums;
function requireChecksums() {
  if (hasRequiredChecksums) return checksums;
  hasRequiredChecksums = 1;
  Object.defineProperty(checksums, "__esModule", {
    value: true
  });
  checksums.mod10 = mod10;
  checksums.mod11 = mod11;
  function mod10(number) {
    var sum = 0;
    for (var i = 0; i < number.length; i++) {
      var n = parseInt(number[i]);
      if ((i + number.length) % 2 === 0) {
        sum += n;
      } else {
        sum += n * 2 % 10 + Math.floor(n * 2 / 10);
      }
    }
    return (10 - sum % 10) % 10;
  }
  function mod11(number) {
    var sum = 0;
    var weights = [2, 3, 4, 5, 6, 7];
    for (var i = 0; i < number.length; i++) {
      var n = parseInt(number[number.length - 1 - i]);
      sum += weights[i % weights.length] * n;
    }
    return (11 - sum % 11) % 11;
  }
  return checksums;
}
var hasRequiredMSI10;
function requireMSI10() {
  if (hasRequiredMSI10) return MSI10;
  hasRequiredMSI10 = 1;
  Object.defineProperty(MSI10, "__esModule", {
    value: true
  });
  var _MSI2 = requireMSI$1();
  var _MSI3 = _interopRequireDefault(_MSI2);
  var _checksums = requireChecksums();
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var MSI10$1 = (function(_MSI) {
    _inherits(MSI102, _MSI);
    function MSI102(data, options) {
      _classCallCheck(this, MSI102);
      return _possibleConstructorReturn(this, (MSI102.__proto__ || Object.getPrototypeOf(MSI102)).call(this, data + (0, _checksums.mod10)(data), options));
    }
    return MSI102;
  })(_MSI3.default);
  MSI10.default = MSI10$1;
  return MSI10;
}
var MSI11 = {};
var hasRequiredMSI11;
function requireMSI11() {
  if (hasRequiredMSI11) return MSI11;
  hasRequiredMSI11 = 1;
  Object.defineProperty(MSI11, "__esModule", {
    value: true
  });
  var _MSI2 = requireMSI$1();
  var _MSI3 = _interopRequireDefault(_MSI2);
  var _checksums = requireChecksums();
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var MSI11$1 = (function(_MSI) {
    _inherits(MSI112, _MSI);
    function MSI112(data, options) {
      _classCallCheck(this, MSI112);
      return _possibleConstructorReturn(this, (MSI112.__proto__ || Object.getPrototypeOf(MSI112)).call(this, data + (0, _checksums.mod11)(data), options));
    }
    return MSI112;
  })(_MSI3.default);
  MSI11.default = MSI11$1;
  return MSI11;
}
var MSI1010 = {};
var hasRequiredMSI1010;
function requireMSI1010() {
  if (hasRequiredMSI1010) return MSI1010;
  hasRequiredMSI1010 = 1;
  Object.defineProperty(MSI1010, "__esModule", {
    value: true
  });
  var _MSI2 = requireMSI$1();
  var _MSI3 = _interopRequireDefault(_MSI2);
  var _checksums = requireChecksums();
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var MSI1010$1 = (function(_MSI) {
    _inherits(MSI10102, _MSI);
    function MSI10102(data, options) {
      _classCallCheck(this, MSI10102);
      data += (0, _checksums.mod10)(data);
      data += (0, _checksums.mod10)(data);
      return _possibleConstructorReturn(this, (MSI10102.__proto__ || Object.getPrototypeOf(MSI10102)).call(this, data, options));
    }
    return MSI10102;
  })(_MSI3.default);
  MSI1010.default = MSI1010$1;
  return MSI1010;
}
var MSI1110 = {};
var hasRequiredMSI1110;
function requireMSI1110() {
  if (hasRequiredMSI1110) return MSI1110;
  hasRequiredMSI1110 = 1;
  Object.defineProperty(MSI1110, "__esModule", {
    value: true
  });
  var _MSI2 = requireMSI$1();
  var _MSI3 = _interopRequireDefault(_MSI2);
  var _checksums = requireChecksums();
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var MSI1110$1 = (function(_MSI) {
    _inherits(MSI11102, _MSI);
    function MSI11102(data, options) {
      _classCallCheck(this, MSI11102);
      data += (0, _checksums.mod11)(data);
      data += (0, _checksums.mod10)(data);
      return _possibleConstructorReturn(this, (MSI11102.__proto__ || Object.getPrototypeOf(MSI11102)).call(this, data, options));
    }
    return MSI11102;
  })(_MSI3.default);
  MSI1110.default = MSI1110$1;
  return MSI1110;
}
var hasRequiredMSI;
function requireMSI() {
  if (hasRequiredMSI) return MSI$1;
  hasRequiredMSI = 1;
  Object.defineProperty(MSI$1, "__esModule", {
    value: true
  });
  MSI$1.MSI1110 = MSI$1.MSI1010 = MSI$1.MSI11 = MSI$1.MSI10 = MSI$1.MSI = void 0;
  var _MSI = requireMSI$1();
  var _MSI2 = _interopRequireDefault(_MSI);
  var _MSI3 = requireMSI10();
  var _MSI4 = _interopRequireDefault(_MSI3);
  var _MSI5 = requireMSI11();
  var _MSI6 = _interopRequireDefault(_MSI5);
  var _MSI7 = requireMSI1010();
  var _MSI8 = _interopRequireDefault(_MSI7);
  var _MSI9 = requireMSI1110();
  var _MSI10 = _interopRequireDefault(_MSI9);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  MSI$1.MSI = _MSI2.default;
  MSI$1.MSI10 = _MSI4.default;
  MSI$1.MSI11 = _MSI6.default;
  MSI$1.MSI1010 = _MSI8.default;
  MSI$1.MSI1110 = _MSI10.default;
  return MSI$1;
}
var pharmacode = {};
var hasRequiredPharmacode;
function requirePharmacode() {
  if (hasRequiredPharmacode) return pharmacode;
  hasRequiredPharmacode = 1;
  Object.defineProperty(pharmacode, "__esModule", {
    value: true
  });
  pharmacode.pharmacode = void 0;
  var _createClass = /* @__PURE__ */ (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  var _Barcode2 = requireBarcode();
  var _Barcode3 = _interopRequireDefault(_Barcode2);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var pharmacode$1 = (function(_Barcode) {
    _inherits(pharmacode2, _Barcode);
    function pharmacode2(data, options) {
      _classCallCheck(this, pharmacode2);
      var _this = _possibleConstructorReturn(this, (pharmacode2.__proto__ || Object.getPrototypeOf(pharmacode2)).call(this, data, options));
      _this.number = parseInt(data, 10);
      return _this;
    }
    _createClass(pharmacode2, [{
      key: "encode",
      value: function encode() {
        var z = this.number;
        var result = "";
        while (!isNaN(z) && z != 0) {
          if (z % 2 === 0) {
            result = "11100" + result;
            z = (z - 2) / 2;
          } else {
            result = "100" + result;
            z = (z - 1) / 2;
          }
        }
        result = result.slice(0, -2);
        return {
          data: result,
          text: this.text
        };
      }
    }, {
      key: "valid",
      value: function valid() {
        return this.number >= 3 && this.number <= 131070;
      }
    }]);
    return pharmacode2;
  })(_Barcode3.default);
  pharmacode.pharmacode = pharmacode$1;
  return pharmacode;
}
var codabar = {};
var hasRequiredCodabar;
function requireCodabar() {
  if (hasRequiredCodabar) return codabar;
  hasRequiredCodabar = 1;
  Object.defineProperty(codabar, "__esModule", {
    value: true
  });
  codabar.codabar = void 0;
  var _createClass = /* @__PURE__ */ (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  var _Barcode2 = requireBarcode();
  var _Barcode3 = _interopRequireDefault(_Barcode2);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var codabar$1 = (function(_Barcode) {
    _inherits(codabar2, _Barcode);
    function codabar2(data, options) {
      _classCallCheck(this, codabar2);
      if (data.search(/^[0-9\-\$\:\.\+\/]+$/) === 0) {
        data = "A" + data + "A";
      }
      var _this = _possibleConstructorReturn(this, (codabar2.__proto__ || Object.getPrototypeOf(codabar2)).call(this, data.toUpperCase(), options));
      _this.text = _this.options.text || _this.text.replace(/[A-D]/g, "");
      return _this;
    }
    _createClass(codabar2, [{
      key: "valid",
      value: function valid() {
        return this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/) !== -1;
      }
    }, {
      key: "encode",
      value: function encode() {
        var result = [];
        var encodings = this.getEncodings();
        for (var i = 0; i < this.data.length; i++) {
          result.push(encodings[this.data.charAt(i)]);
          if (i !== this.data.length - 1) {
            result.push("0");
          }
        }
        return {
          text: this.text,
          data: result.join("")
        };
      }
    }, {
      key: "getEncodings",
      value: function getEncodings() {
        return {
          "0": "101010011",
          "1": "101011001",
          "2": "101001011",
          "3": "110010101",
          "4": "101101001",
          "5": "110101001",
          "6": "100101011",
          "7": "100101101",
          "8": "100110101",
          "9": "110100101",
          "-": "101001101",
          "$": "101100101",
          ":": "1101011011",
          "/": "1101101011",
          ".": "1101101101",
          "+": "1011011011",
          "A": "1011001001",
          "B": "1001001011",
          "C": "1010010011",
          "D": "1010011001"
        };
      }
    }]);
    return codabar2;
  })(_Barcode3.default);
  codabar.codabar = codabar$1;
  return codabar;
}
var CODE93$1 = {};
var CODE93 = {};
var constants = {};
var hasRequiredConstants;
function requireConstants() {
  if (hasRequiredConstants) return constants;
  hasRequiredConstants = 1;
  Object.defineProperty(constants, "__esModule", {
    value: true
  });
  constants.SYMBOLS = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "-",
    ".",
    " ",
    "$",
    "/",
    "+",
    "%",
    // Only used for csum and multi-symbols character encodings
    "($)",
    "(%)",
    "(/)",
    "(+)",
    // Start/Stop
    "ÿ"
  ];
  constants.BINARIES = ["100010100", "101001000", "101000100", "101000010", "100101000", "100100100", "100100010", "101010000", "100010010", "100001010", "110101000", "110100100", "110100010", "110010100", "110010010", "110001010", "101101000", "101100100", "101100010", "100110100", "100011010", "101011000", "101001100", "101000110", "100101100", "100010110", "110110100", "110110010", "110101100", "110100110", "110010110", "110011010", "101101100", "101100110", "100110110", "100111010", "100101110", "111010100", "111010010", "111001010", "101101110", "101110110", "110101110", "100100110", "111011010", "111010110", "100110010", "101011110"];
  constants.MULTI_SYMBOLS = {
    "\0": ["(%)", "U"],
    "": ["($)", "A"],
    "": ["($)", "B"],
    "": ["($)", "C"],
    "": ["($)", "D"],
    "": ["($)", "E"],
    "": ["($)", "F"],
    "\x07": ["($)", "G"],
    "\b": ["($)", "H"],
    "	": ["($)", "I"],
    "\n": ["($)", "J"],
    "\v": ["($)", "K"],
    "\f": ["($)", "L"],
    "\r": ["($)", "M"],
    "": ["($)", "N"],
    "": ["($)", "O"],
    "": ["($)", "P"],
    "": ["($)", "Q"],
    "": ["($)", "R"],
    "": ["($)", "S"],
    "": ["($)", "T"],
    "": ["($)", "U"],
    "": ["($)", "V"],
    "": ["($)", "W"],
    "": ["($)", "X"],
    "": ["($)", "Y"],
    "": ["($)", "Z"],
    "\x1B": ["(%)", "A"],
    "": ["(%)", "B"],
    "": ["(%)", "C"],
    "": ["(%)", "D"],
    "": ["(%)", "E"],
    "!": ["(/)", "A"],
    '"': ["(/)", "B"],
    "#": ["(/)", "C"],
    "&": ["(/)", "F"],
    "'": ["(/)", "G"],
    "(": ["(/)", "H"],
    ")": ["(/)", "I"],
    "*": ["(/)", "J"],
    ",": ["(/)", "L"],
    ":": ["(/)", "Z"],
    ";": ["(%)", "F"],
    "<": ["(%)", "G"],
    "=": ["(%)", "H"],
    ">": ["(%)", "I"],
    "?": ["(%)", "J"],
    "@": ["(%)", "V"],
    "[": ["(%)", "K"],
    "\\": ["(%)", "L"],
    "]": ["(%)", "M"],
    "^": ["(%)", "N"],
    "_": ["(%)", "O"],
    "`": ["(%)", "W"],
    "a": ["(+)", "A"],
    "b": ["(+)", "B"],
    "c": ["(+)", "C"],
    "d": ["(+)", "D"],
    "e": ["(+)", "E"],
    "f": ["(+)", "F"],
    "g": ["(+)", "G"],
    "h": ["(+)", "H"],
    "i": ["(+)", "I"],
    "j": ["(+)", "J"],
    "k": ["(+)", "K"],
    "l": ["(+)", "L"],
    "m": ["(+)", "M"],
    "n": ["(+)", "N"],
    "o": ["(+)", "O"],
    "p": ["(+)", "P"],
    "q": ["(+)", "Q"],
    "r": ["(+)", "R"],
    "s": ["(+)", "S"],
    "t": ["(+)", "T"],
    "u": ["(+)", "U"],
    "v": ["(+)", "V"],
    "w": ["(+)", "W"],
    "x": ["(+)", "X"],
    "y": ["(+)", "Y"],
    "z": ["(+)", "Z"],
    "{": ["(%)", "P"],
    "|": ["(%)", "Q"],
    "}": ["(%)", "R"],
    "~": ["(%)", "S"],
    "": ["(%)", "T"]
  };
  return constants;
}
var hasRequiredCODE93$1;
function requireCODE93$1() {
  if (hasRequiredCODE93$1) return CODE93;
  hasRequiredCODE93$1 = 1;
  Object.defineProperty(CODE93, "__esModule", {
    value: true
  });
  var _createClass = /* @__PURE__ */ (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  var _constants = requireConstants();
  var _Barcode2 = requireBarcode();
  var _Barcode3 = _interopRequireDefault(_Barcode2);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var CODE93$12 = (function(_Barcode) {
    _inherits(CODE932, _Barcode);
    function CODE932(data, options) {
      _classCallCheck(this, CODE932);
      return _possibleConstructorReturn(this, (CODE932.__proto__ || Object.getPrototypeOf(CODE932)).call(this, data, options));
    }
    _createClass(CODE932, [{
      key: "valid",
      value: function valid() {
        return /^[0-9A-Z\-. $/+%]+$/.test(this.data);
      }
    }, {
      key: "encode",
      value: function encode() {
        var symbols = this.data.split("").flatMap(function(c) {
          return _constants.MULTI_SYMBOLS[c] || c;
        });
        var encoded = symbols.map(function(s) {
          return CODE932.getEncoding(s);
        }).join("");
        var csumC = CODE932.checksum(symbols, 20);
        var csumK = CODE932.checksum(symbols.concat(csumC), 15);
        return {
          text: this.text,
          data: (
            // Add the start bits
            CODE932.getEncoding("ÿ") + // Add the encoded bits
            encoded + // Add the checksum
            CODE932.getEncoding(csumC) + CODE932.getEncoding(csumK) + // Add the stop bits
            CODE932.getEncoding("ÿ") + // Add the termination bit
            "1"
          )
        };
      }
      // Get the binary encoding of a symbol
    }], [{
      key: "getEncoding",
      value: function getEncoding(symbol) {
        return _constants.BINARIES[CODE932.symbolValue(symbol)];
      }
      // Get the symbol for a symbol value
    }, {
      key: "getSymbol",
      value: function getSymbol(symbolValue) {
        return _constants.SYMBOLS[symbolValue];
      }
      // Get the symbol value of a symbol
    }, {
      key: "symbolValue",
      value: function symbolValue(symbol) {
        return _constants.SYMBOLS.indexOf(symbol);
      }
      // Calculate a checksum symbol
    }, {
      key: "checksum",
      value: function checksum(symbols, maxWeight) {
        var csum = symbols.slice().reverse().reduce(function(sum, symbol, idx) {
          var weight = idx % maxWeight + 1;
          return sum + CODE932.symbolValue(symbol) * weight;
        }, 0);
        return CODE932.getSymbol(csum % 47);
      }
    }]);
    return CODE932;
  })(_Barcode3.default);
  CODE93.default = CODE93$12;
  return CODE93;
}
var CODE93FullASCII = {};
var hasRequiredCODE93FullASCII;
function requireCODE93FullASCII() {
  if (hasRequiredCODE93FullASCII) return CODE93FullASCII;
  hasRequiredCODE93FullASCII = 1;
  Object.defineProperty(CODE93FullASCII, "__esModule", {
    value: true
  });
  var _createClass = /* @__PURE__ */ (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  var _CODE2 = requireCODE93$1();
  var _CODE3 = _interopRequireDefault(_CODE2);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var CODE93FullASCII$1 = (function(_CODE) {
    _inherits(CODE93FullASCII2, _CODE);
    function CODE93FullASCII2(data, options) {
      _classCallCheck(this, CODE93FullASCII2);
      return _possibleConstructorReturn(this, (CODE93FullASCII2.__proto__ || Object.getPrototypeOf(CODE93FullASCII2)).call(this, data, options));
    }
    _createClass(CODE93FullASCII2, [{
      key: "valid",
      value: function valid() {
        return /^[\x00-\x7f]+$/.test(this.data);
      }
    }]);
    return CODE93FullASCII2;
  })(_CODE3.default);
  CODE93FullASCII.default = CODE93FullASCII$1;
  return CODE93FullASCII;
}
var hasRequiredCODE93;
function requireCODE93() {
  if (hasRequiredCODE93) return CODE93$1;
  hasRequiredCODE93 = 1;
  Object.defineProperty(CODE93$1, "__esModule", {
    value: true
  });
  CODE93$1.CODE93FullASCII = CODE93$1.CODE93 = void 0;
  var _CODE = requireCODE93$1();
  var _CODE2 = _interopRequireDefault(_CODE);
  var _CODE93FullASCII = requireCODE93FullASCII();
  var _CODE93FullASCII2 = _interopRequireDefault(_CODE93FullASCII);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  CODE93$1.CODE93 = _CODE2.default;
  CODE93$1.CODE93FullASCII = _CODE93FullASCII2.default;
  return CODE93$1;
}
var GenericBarcode = {};
var hasRequiredGenericBarcode;
function requireGenericBarcode() {
  if (hasRequiredGenericBarcode) return GenericBarcode;
  hasRequiredGenericBarcode = 1;
  Object.defineProperty(GenericBarcode, "__esModule", {
    value: true
  });
  GenericBarcode.GenericBarcode = void 0;
  var _createClass = /* @__PURE__ */ (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  var _Barcode2 = requireBarcode();
  var _Barcode3 = _interopRequireDefault(_Barcode2);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var GenericBarcode$1 = (function(_Barcode) {
    _inherits(GenericBarcode2, _Barcode);
    function GenericBarcode2(data, options) {
      _classCallCheck(this, GenericBarcode2);
      return _possibleConstructorReturn(this, (GenericBarcode2.__proto__ || Object.getPrototypeOf(GenericBarcode2)).call(this, data, options));
    }
    _createClass(GenericBarcode2, [{
      key: "encode",
      value: function encode() {
        return {
          data: "10101010101010101010101010101010101010101",
          text: this.text
        };
      }
      // Resturn true/false if the string provided is valid for this encoder
    }, {
      key: "valid",
      value: function valid() {
        return true;
      }
    }]);
    return GenericBarcode2;
  })(_Barcode3.default);
  GenericBarcode.GenericBarcode = GenericBarcode$1;
  return GenericBarcode;
}
var hasRequiredBarcodes;
function requireBarcodes() {
  if (hasRequiredBarcodes) return barcodes;
  hasRequiredBarcodes = 1;
  Object.defineProperty(barcodes, "__esModule", {
    value: true
  });
  var _CODE = requireCODE39();
  var _CODE2 = requireCODE128();
  var _EAN_UPC = requireEAN_UPC();
  var _ITF = requireITF();
  var _MSI = requireMSI();
  var _pharmacode = requirePharmacode();
  var _codabar = requireCodabar();
  var _CODE3 = requireCODE93();
  var _GenericBarcode = requireGenericBarcode();
  barcodes.default = {
    CODE39: _CODE.CODE39,
    CODE128: _CODE2.CODE128,
    CODE128A: _CODE2.CODE128A,
    CODE128B: _CODE2.CODE128B,
    CODE128C: _CODE2.CODE128C,
    EAN13: _EAN_UPC.EAN13,
    EAN8: _EAN_UPC.EAN8,
    EAN5: _EAN_UPC.EAN5,
    EAN2: _EAN_UPC.EAN2,
    UPC: _EAN_UPC.UPC,
    UPCE: _EAN_UPC.UPCE,
    ITF14: _ITF.ITF14,
    ITF: _ITF.ITF,
    MSI: _MSI.MSI,
    MSI10: _MSI.MSI10,
    MSI11: _MSI.MSI11,
    MSI1010: _MSI.MSI1010,
    MSI1110: _MSI.MSI1110,
    pharmacode: _pharmacode.pharmacode,
    codabar: _codabar.codabar,
    CODE93: _CODE3.CODE93,
    CODE93FullASCII: _CODE3.CODE93FullASCII,
    GenericBarcode: _GenericBarcode.GenericBarcode
  };
  return barcodes;
}
var merge = {};
var hasRequiredMerge;
function requireMerge() {
  if (hasRequiredMerge) return merge;
  hasRequiredMerge = 1;
  Object.defineProperty(merge, "__esModule", {
    value: true
  });
  var _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  merge.default = function(old, replaceObj) {
    return _extends({}, old, replaceObj);
  };
  return merge;
}
var linearizeEncodings = {};
var hasRequiredLinearizeEncodings;
function requireLinearizeEncodings() {
  if (hasRequiredLinearizeEncodings) return linearizeEncodings;
  hasRequiredLinearizeEncodings = 1;
  Object.defineProperty(linearizeEncodings, "__esModule", {
    value: true
  });
  linearizeEncodings.default = linearizeEncodings$1;
  function linearizeEncodings$1(encodings) {
    var linearEncodings = [];
    function nextLevel(encoded) {
      if (Array.isArray(encoded)) {
        for (var i = 0; i < encoded.length; i++) {
          nextLevel(encoded[i]);
        }
      } else {
        encoded.text = encoded.text || "";
        encoded.data = encoded.data || "";
        linearEncodings.push(encoded);
      }
    }
    nextLevel(encodings);
    return linearEncodings;
  }
  return linearizeEncodings;
}
var fixOptions = {};
var hasRequiredFixOptions;
function requireFixOptions() {
  if (hasRequiredFixOptions) return fixOptions;
  hasRequiredFixOptions = 1;
  Object.defineProperty(fixOptions, "__esModule", {
    value: true
  });
  fixOptions.default = fixOptions$1;
  function fixOptions$1(options) {
    options.marginTop = options.marginTop || options.margin;
    options.marginBottom = options.marginBottom || options.margin;
    options.marginRight = options.marginRight || options.margin;
    options.marginLeft = options.marginLeft || options.margin;
    return options;
  }
  return fixOptions;
}
var getRenderProperties = {};
var getOptionsFromElement = {};
var optionsFromStrings = {};
var hasRequiredOptionsFromStrings;
function requireOptionsFromStrings() {
  if (hasRequiredOptionsFromStrings) return optionsFromStrings;
  hasRequiredOptionsFromStrings = 1;
  Object.defineProperty(optionsFromStrings, "__esModule", {
    value: true
  });
  optionsFromStrings.default = optionsFromStrings$1;
  function optionsFromStrings$1(options) {
    var intOptions = ["width", "height", "textMargin", "fontSize", "margin", "marginTop", "marginBottom", "marginLeft", "marginRight"];
    for (var intOption in intOptions) {
      if (intOptions.hasOwnProperty(intOption)) {
        intOption = intOptions[intOption];
        if (typeof options[intOption] === "string") {
          options[intOption] = parseInt(options[intOption], 10);
        }
      }
    }
    if (typeof options["displayValue"] === "string") {
      options["displayValue"] = options["displayValue"] != "false";
    }
    return options;
  }
  return optionsFromStrings;
}
var defaults = {};
var hasRequiredDefaults;
function requireDefaults() {
  if (hasRequiredDefaults) return defaults;
  hasRequiredDefaults = 1;
  Object.defineProperty(defaults, "__esModule", {
    value: true
  });
  var defaults$1 = {
    width: 2,
    height: 100,
    format: "auto",
    displayValue: true,
    fontOptions: "",
    font: "monospace",
    text: void 0,
    textAlign: "center",
    textPosition: "bottom",
    textMargin: 2,
    fontSize: 20,
    background: "#ffffff",
    lineColor: "#000000",
    margin: 10,
    marginTop: void 0,
    marginBottom: void 0,
    marginLeft: void 0,
    marginRight: void 0,
    valid: function valid() {
    }
  };
  defaults.default = defaults$1;
  return defaults;
}
var hasRequiredGetOptionsFromElement;
function requireGetOptionsFromElement() {
  if (hasRequiredGetOptionsFromElement) return getOptionsFromElement;
  hasRequiredGetOptionsFromElement = 1;
  Object.defineProperty(getOptionsFromElement, "__esModule", {
    value: true
  });
  var _optionsFromStrings = requireOptionsFromStrings();
  var _optionsFromStrings2 = _interopRequireDefault(_optionsFromStrings);
  var _defaults = requireDefaults();
  var _defaults2 = _interopRequireDefault(_defaults);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function getOptionsFromElement$1(element) {
    var options = {};
    for (var property in _defaults2.default) {
      if (_defaults2.default.hasOwnProperty(property)) {
        if (element.hasAttribute("jsbarcode-" + property.toLowerCase())) {
          options[property] = element.getAttribute("jsbarcode-" + property.toLowerCase());
        }
        if (element.hasAttribute("data-" + property.toLowerCase())) {
          options[property] = element.getAttribute("data-" + property.toLowerCase());
        }
      }
    }
    options["value"] = element.getAttribute("jsbarcode-value") || element.getAttribute("data-value");
    options = (0, _optionsFromStrings2.default)(options);
    return options;
  }
  getOptionsFromElement.default = getOptionsFromElement$1;
  return getOptionsFromElement;
}
var renderers = {};
var canvas = {};
var shared = {};
var hasRequiredShared;
function requireShared() {
  if (hasRequiredShared) return shared;
  hasRequiredShared = 1;
  Object.defineProperty(shared, "__esModule", {
    value: true
  });
  shared.getTotalWidthOfEncodings = shared.calculateEncodingAttributes = shared.getBarcodePadding = shared.getEncodingHeight = shared.getMaximumHeightOfEncodings = void 0;
  var _merge = requireMerge();
  var _merge2 = _interopRequireDefault(_merge);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function getEncodingHeight(encoding, options) {
    return options.height + (options.displayValue && encoding.text.length > 0 ? options.fontSize + options.textMargin : 0) + options.marginTop + options.marginBottom;
  }
  function getBarcodePadding(textWidth, barcodeWidth, options) {
    if (options.displayValue && barcodeWidth < textWidth) {
      if (options.textAlign == "center") {
        return Math.floor((textWidth - barcodeWidth) / 2);
      } else if (options.textAlign == "left") {
        return 0;
      } else if (options.textAlign == "right") {
        return Math.floor(textWidth - barcodeWidth);
      }
    }
    return 0;
  }
  function calculateEncodingAttributes(encodings, barcodeOptions, context) {
    for (var i = 0; i < encodings.length; i++) {
      var encoding = encodings[i];
      var options = (0, _merge2.default)(barcodeOptions, encoding.options);
      var textWidth;
      if (options.displayValue) {
        textWidth = messureText(encoding.text, options, context);
      } else {
        textWidth = 0;
      }
      var barcodeWidth = encoding.data.length * options.width;
      encoding.width = Math.ceil(Math.max(textWidth, barcodeWidth));
      encoding.height = getEncodingHeight(encoding, options);
      encoding.barcodePadding = getBarcodePadding(textWidth, barcodeWidth, options);
    }
  }
  function getTotalWidthOfEncodings(encodings) {
    var totalWidth = 0;
    for (var i = 0; i < encodings.length; i++) {
      totalWidth += encodings[i].width;
    }
    return totalWidth;
  }
  function getMaximumHeightOfEncodings(encodings) {
    var maxHeight = 0;
    for (var i = 0; i < encodings.length; i++) {
      if (encodings[i].height > maxHeight) {
        maxHeight = encodings[i].height;
      }
    }
    return maxHeight;
  }
  function messureText(string, options, context) {
    var ctx;
    if (context) {
      ctx = context;
    } else if (typeof document !== "undefined") {
      ctx = document.createElement("canvas").getContext("2d");
    } else {
      return 0;
    }
    ctx.font = options.fontOptions + " " + options.fontSize + "px " + options.font;
    var measureTextResult = ctx.measureText(string);
    if (!measureTextResult) {
      return 0;
    }
    var size = measureTextResult.width;
    return size;
  }
  shared.getMaximumHeightOfEncodings = getMaximumHeightOfEncodings;
  shared.getEncodingHeight = getEncodingHeight;
  shared.getBarcodePadding = getBarcodePadding;
  shared.calculateEncodingAttributes = calculateEncodingAttributes;
  shared.getTotalWidthOfEncodings = getTotalWidthOfEncodings;
  return shared;
}
var hasRequiredCanvas;
function requireCanvas() {
  if (hasRequiredCanvas) return canvas;
  hasRequiredCanvas = 1;
  Object.defineProperty(canvas, "__esModule", {
    value: true
  });
  var _createClass = /* @__PURE__ */ (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  var _merge = requireMerge();
  var _merge2 = _interopRequireDefault(_merge);
  var _shared = requireShared();
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var CanvasRenderer = (function() {
    function CanvasRenderer2(canvas2, encodings, options) {
      _classCallCheck(this, CanvasRenderer2);
      this.canvas = canvas2;
      this.encodings = encodings;
      this.options = options;
    }
    _createClass(CanvasRenderer2, [{
      key: "render",
      value: function render() {
        if (!this.canvas.getContext) {
          throw new Error("The browser does not support canvas.");
        }
        this.prepareCanvas();
        for (var i = 0; i < this.encodings.length; i++) {
          var encodingOptions = (0, _merge2.default)(this.options, this.encodings[i].options);
          this.drawCanvasBarcode(encodingOptions, this.encodings[i]);
          this.drawCanvasText(encodingOptions, this.encodings[i]);
          this.moveCanvasDrawing(this.encodings[i]);
        }
        this.restoreCanvas();
      }
    }, {
      key: "prepareCanvas",
      value: function prepareCanvas() {
        var ctx = this.canvas.getContext("2d");
        ctx.save();
        (0, _shared.calculateEncodingAttributes)(this.encodings, this.options, ctx);
        var totalWidth = (0, _shared.getTotalWidthOfEncodings)(this.encodings);
        var maxHeight = (0, _shared.getMaximumHeightOfEncodings)(this.encodings);
        this.canvas.width = totalWidth + this.options.marginLeft + this.options.marginRight;
        this.canvas.height = maxHeight;
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (this.options.background) {
          ctx.fillStyle = this.options.background;
          ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
        ctx.translate(this.options.marginLeft, 0);
      }
    }, {
      key: "drawCanvasBarcode",
      value: function drawCanvasBarcode(options, encoding) {
        var ctx = this.canvas.getContext("2d");
        var binary = encoding.data;
        var yFrom;
        if (options.textPosition == "top") {
          yFrom = options.marginTop + options.fontSize + options.textMargin;
        } else {
          yFrom = options.marginTop;
        }
        ctx.fillStyle = options.lineColor;
        for (var b = 0; b < binary.length; b++) {
          var x = b * options.width + encoding.barcodePadding;
          if (binary[b] === "1") {
            ctx.fillRect(x, yFrom, options.width, options.height);
          } else if (binary[b]) {
            ctx.fillRect(x, yFrom, options.width, options.height * binary[b]);
          }
        }
      }
    }, {
      key: "drawCanvasText",
      value: function drawCanvasText(options, encoding) {
        var ctx = this.canvas.getContext("2d");
        var font = options.fontOptions + " " + options.fontSize + "px " + options.font;
        if (options.displayValue) {
          var x, y;
          if (options.textPosition == "top") {
            y = options.marginTop + options.fontSize - options.textMargin;
          } else {
            y = options.height + options.textMargin + options.marginTop + options.fontSize;
          }
          ctx.font = font;
          if (options.textAlign == "left" || encoding.barcodePadding > 0) {
            x = 0;
            ctx.textAlign = "left";
          } else if (options.textAlign == "right") {
            x = encoding.width - 1;
            ctx.textAlign = "right";
          } else {
            x = encoding.width / 2;
            ctx.textAlign = "center";
          }
          ctx.fillText(encoding.text, x, y);
        }
      }
    }, {
      key: "moveCanvasDrawing",
      value: function moveCanvasDrawing(encoding) {
        var ctx = this.canvas.getContext("2d");
        ctx.translate(encoding.width, 0);
      }
    }, {
      key: "restoreCanvas",
      value: function restoreCanvas() {
        var ctx = this.canvas.getContext("2d");
        ctx.restore();
      }
    }]);
    return CanvasRenderer2;
  })();
  canvas.default = CanvasRenderer;
  return canvas;
}
var svg = {};
var hasRequiredSvg;
function requireSvg() {
  if (hasRequiredSvg) return svg;
  hasRequiredSvg = 1;
  Object.defineProperty(svg, "__esModule", {
    value: true
  });
  var _createClass = /* @__PURE__ */ (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  var _merge = requireMerge();
  var _merge2 = _interopRequireDefault(_merge);
  var _shared = requireShared();
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var svgns = "http://www.w3.org/2000/svg";
  var SVGRenderer = (function() {
    function SVGRenderer2(svg2, encodings, options) {
      _classCallCheck(this, SVGRenderer2);
      this.svg = svg2;
      this.encodings = encodings;
      this.options = options;
      this.document = options.xmlDocument || document;
    }
    _createClass(SVGRenderer2, [{
      key: "render",
      value: function render() {
        var currentX = this.options.marginLeft;
        this.prepareSVG();
        for (var i = 0; i < this.encodings.length; i++) {
          var encoding = this.encodings[i];
          var encodingOptions = (0, _merge2.default)(this.options, encoding.options);
          var group = this.createGroup(currentX, encodingOptions.marginTop, this.svg);
          this.setGroupOptions(group, encodingOptions);
          this.drawSvgBarcode(group, encodingOptions, encoding);
          this.drawSVGText(group, encodingOptions, encoding);
          currentX += encoding.width;
        }
      }
    }, {
      key: "prepareSVG",
      value: function prepareSVG() {
        while (this.svg.firstChild) {
          this.svg.removeChild(this.svg.firstChild);
        }
        (0, _shared.calculateEncodingAttributes)(this.encodings, this.options);
        var totalWidth = (0, _shared.getTotalWidthOfEncodings)(this.encodings);
        var maxHeight = (0, _shared.getMaximumHeightOfEncodings)(this.encodings);
        var width = totalWidth + this.options.marginLeft + this.options.marginRight;
        this.setSvgAttributes(width, maxHeight);
        if (this.options.background) {
          this.drawRect(0, 0, width, maxHeight, this.svg).setAttribute("style", "fill:" + this.options.background + ";");
        }
      }
    }, {
      key: "drawSvgBarcode",
      value: function drawSvgBarcode(parent, options, encoding) {
        var binary = encoding.data;
        var yFrom;
        if (options.textPosition == "top") {
          yFrom = options.fontSize + options.textMargin;
        } else {
          yFrom = 0;
        }
        var barWidth = 0;
        var x = 0;
        for (var b = 0; b < binary.length; b++) {
          x = b * options.width + encoding.barcodePadding;
          if (binary[b] === "1") {
            barWidth++;
          } else if (barWidth > 0) {
            this.drawRect(x - options.width * barWidth, yFrom, options.width * barWidth, options.height, parent);
            barWidth = 0;
          }
        }
        if (barWidth > 0) {
          this.drawRect(x - options.width * (barWidth - 1), yFrom, options.width * barWidth, options.height, parent);
        }
      }
    }, {
      key: "drawSVGText",
      value: function drawSVGText(parent, options, encoding) {
        var textElem = this.document.createElementNS(svgns, "text");
        if (options.displayValue) {
          var x, y;
          textElem.setAttribute("style", "font:" + options.fontOptions + " " + options.fontSize + "px " + options.font);
          if (options.textPosition == "top") {
            y = options.fontSize - options.textMargin;
          } else {
            y = options.height + options.textMargin + options.fontSize;
          }
          if (options.textAlign == "left" || encoding.barcodePadding > 0) {
            x = 0;
            textElem.setAttribute("text-anchor", "start");
          } else if (options.textAlign == "right") {
            x = encoding.width - 1;
            textElem.setAttribute("text-anchor", "end");
          } else {
            x = encoding.width / 2;
            textElem.setAttribute("text-anchor", "middle");
          }
          textElem.setAttribute("x", x);
          textElem.setAttribute("y", y);
          textElem.appendChild(this.document.createTextNode(encoding.text));
          parent.appendChild(textElem);
        }
      }
    }, {
      key: "setSvgAttributes",
      value: function setSvgAttributes(width, height) {
        var svg2 = this.svg;
        svg2.setAttribute("width", width + "px");
        svg2.setAttribute("height", height + "px");
        svg2.setAttribute("x", "0px");
        svg2.setAttribute("y", "0px");
        svg2.setAttribute("viewBox", "0 0 " + width + " " + height);
        svg2.setAttribute("xmlns", svgns);
        svg2.setAttribute("version", "1.1");
        svg2.setAttribute("style", "transform: translate(0,0)");
      }
    }, {
      key: "createGroup",
      value: function createGroup(x, y, parent) {
        var group = this.document.createElementNS(svgns, "g");
        group.setAttribute("transform", "translate(" + x + ", " + y + ")");
        parent.appendChild(group);
        return group;
      }
    }, {
      key: "setGroupOptions",
      value: function setGroupOptions(group, options) {
        group.setAttribute("style", "fill:" + options.lineColor + ";");
      }
    }, {
      key: "drawRect",
      value: function drawRect(x, y, width, height, parent) {
        var rect = this.document.createElementNS(svgns, "rect");
        rect.setAttribute("x", x);
        rect.setAttribute("y", y);
        rect.setAttribute("width", width);
        rect.setAttribute("height", height);
        parent.appendChild(rect);
        return rect;
      }
    }]);
    return SVGRenderer2;
  })();
  svg.default = SVGRenderer;
  return svg;
}
var object = {};
var hasRequiredObject;
function requireObject() {
  if (hasRequiredObject) return object;
  hasRequiredObject = 1;
  Object.defineProperty(object, "__esModule", {
    value: true
  });
  var _createClass = /* @__PURE__ */ (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var ObjectRenderer = (function() {
    function ObjectRenderer2(object2, encodings, options) {
      _classCallCheck(this, ObjectRenderer2);
      this.object = object2;
      this.encodings = encodings;
      this.options = options;
    }
    _createClass(ObjectRenderer2, [{
      key: "render",
      value: function render() {
        this.object.encodings = this.encodings;
      }
    }]);
    return ObjectRenderer2;
  })();
  object.default = ObjectRenderer;
  return object;
}
var hasRequiredRenderers;
function requireRenderers() {
  if (hasRequiredRenderers) return renderers;
  hasRequiredRenderers = 1;
  Object.defineProperty(renderers, "__esModule", {
    value: true
  });
  var _canvas = requireCanvas();
  var _canvas2 = _interopRequireDefault(_canvas);
  var _svg = requireSvg();
  var _svg2 = _interopRequireDefault(_svg);
  var _object = requireObject();
  var _object2 = _interopRequireDefault(_object);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  renderers.default = { CanvasRenderer: _canvas2.default, SVGRenderer: _svg2.default, ObjectRenderer: _object2.default };
  return renderers;
}
var exceptions = {};
var hasRequiredExceptions;
function requireExceptions() {
  if (hasRequiredExceptions) return exceptions;
  hasRequiredExceptions = 1;
  Object.defineProperty(exceptions, "__esModule", {
    value: true
  });
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var InvalidInputException = (function(_Error) {
    _inherits(InvalidInputException2, _Error);
    function InvalidInputException2(symbology, input) {
      _classCallCheck(this, InvalidInputException2);
      var _this = _possibleConstructorReturn(this, (InvalidInputException2.__proto__ || Object.getPrototypeOf(InvalidInputException2)).call(this));
      _this.name = "InvalidInputException";
      _this.symbology = symbology;
      _this.input = input;
      _this.message = '"' + _this.input + '" is not a valid input for ' + _this.symbology;
      return _this;
    }
    return InvalidInputException2;
  })(Error);
  var InvalidElementException = (function(_Error2) {
    _inherits(InvalidElementException2, _Error2);
    function InvalidElementException2() {
      _classCallCheck(this, InvalidElementException2);
      var _this2 = _possibleConstructorReturn(this, (InvalidElementException2.__proto__ || Object.getPrototypeOf(InvalidElementException2)).call(this));
      _this2.name = "InvalidElementException";
      _this2.message = "Not supported type to render on";
      return _this2;
    }
    return InvalidElementException2;
  })(Error);
  var NoElementException = (function(_Error3) {
    _inherits(NoElementException2, _Error3);
    function NoElementException2() {
      _classCallCheck(this, NoElementException2);
      var _this3 = _possibleConstructorReturn(this, (NoElementException2.__proto__ || Object.getPrototypeOf(NoElementException2)).call(this));
      _this3.name = "NoElementException";
      _this3.message = "No element to render on.";
      return _this3;
    }
    return NoElementException2;
  })(Error);
  exceptions.InvalidInputException = InvalidInputException;
  exceptions.InvalidElementException = InvalidElementException;
  exceptions.NoElementException = NoElementException;
  return exceptions;
}
var hasRequiredGetRenderProperties;
function requireGetRenderProperties() {
  if (hasRequiredGetRenderProperties) return getRenderProperties;
  hasRequiredGetRenderProperties = 1;
  Object.defineProperty(getRenderProperties, "__esModule", {
    value: true
  });
  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
  } : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };
  var _getOptionsFromElement = requireGetOptionsFromElement();
  var _getOptionsFromElement2 = _interopRequireDefault(_getOptionsFromElement);
  var _renderers = requireRenderers();
  var _renderers2 = _interopRequireDefault(_renderers);
  var _exceptions = requireExceptions();
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function getRenderProperties$1(element) {
    if (typeof element === "string") {
      return querySelectedRenderProperties(element);
    } else if (Array.isArray(element)) {
      var returnArray = [];
      for (var i = 0; i < element.length; i++) {
        returnArray.push(getRenderProperties$1(element[i]));
      }
      return returnArray;
    } else if (typeof HTMLCanvasElement !== "undefined" && element instanceof HTMLImageElement) {
      return newCanvasRenderProperties(element);
    } else if (element && element.nodeName && element.nodeName.toLowerCase() === "svg" || typeof SVGElement !== "undefined" && element instanceof SVGElement) {
      return {
        element,
        options: (0, _getOptionsFromElement2.default)(element),
        renderer: _renderers2.default.SVGRenderer
      };
    } else if (typeof HTMLCanvasElement !== "undefined" && element instanceof HTMLCanvasElement) {
      return {
        element,
        options: (0, _getOptionsFromElement2.default)(element),
        renderer: _renderers2.default.CanvasRenderer
      };
    } else if (element && element.getContext) {
      return {
        element,
        renderer: _renderers2.default.CanvasRenderer
      };
    } else if (element && (typeof element === "undefined" ? "undefined" : _typeof(element)) === "object" && !element.nodeName) {
      return {
        element,
        renderer: _renderers2.default.ObjectRenderer
      };
    } else {
      throw new _exceptions.InvalidElementException();
    }
  }
  function querySelectedRenderProperties(string) {
    var selector = document.querySelectorAll(string);
    if (selector.length === 0) {
      return void 0;
    } else {
      var returnArray = [];
      for (var i = 0; i < selector.length; i++) {
        returnArray.push(getRenderProperties$1(selector[i]));
      }
      return returnArray;
    }
  }
  function newCanvasRenderProperties(imgElement) {
    var canvas2 = document.createElement("canvas");
    return {
      element: canvas2,
      options: (0, _getOptionsFromElement2.default)(imgElement),
      renderer: _renderers2.default.CanvasRenderer,
      afterRender: function afterRender() {
        imgElement.setAttribute("src", canvas2.toDataURL());
      }
    };
  }
  getRenderProperties.default = getRenderProperties$1;
  return getRenderProperties;
}
var ErrorHandler = {};
var hasRequiredErrorHandler;
function requireErrorHandler() {
  if (hasRequiredErrorHandler) return ErrorHandler;
  hasRequiredErrorHandler = 1;
  Object.defineProperty(ErrorHandler, "__esModule", {
    value: true
  });
  var _createClass = /* @__PURE__ */ (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var ErrorHandler$1 = (function() {
    function ErrorHandler2(api) {
      _classCallCheck(this, ErrorHandler2);
      this.api = api;
    }
    _createClass(ErrorHandler2, [{
      key: "handleCatch",
      value: function handleCatch(e) {
        if (e.name === "InvalidInputException") {
          if (this.api._options.valid !== this.api._defaults.valid) {
            this.api._options.valid(false);
          } else {
            throw e.message;
          }
        } else {
          throw e;
        }
        this.api.render = function() {
        };
      }
    }, {
      key: "wrapBarcodeCall",
      value: function wrapBarcodeCall(func) {
        try {
          var result = func.apply(void 0, arguments);
          this.api._options.valid(true);
          return result;
        } catch (e) {
          this.handleCatch(e);
          return this.api;
        }
      }
    }]);
    return ErrorHandler2;
  })();
  ErrorHandler.default = ErrorHandler$1;
  return ErrorHandler;
}
var JsBarcode_1;
var hasRequiredJsBarcode;
function requireJsBarcode() {
  if (hasRequiredJsBarcode) return JsBarcode_1;
  hasRequiredJsBarcode = 1;
  var _barcodes = requireBarcodes();
  var _barcodes2 = _interopRequireDefault(_barcodes);
  var _merge = requireMerge();
  var _merge2 = _interopRequireDefault(_merge);
  var _linearizeEncodings = requireLinearizeEncodings();
  var _linearizeEncodings2 = _interopRequireDefault(_linearizeEncodings);
  var _fixOptions = requireFixOptions();
  var _fixOptions2 = _interopRequireDefault(_fixOptions);
  var _getRenderProperties = requireGetRenderProperties();
  var _getRenderProperties2 = _interopRequireDefault(_getRenderProperties);
  var _optionsFromStrings = requireOptionsFromStrings();
  var _optionsFromStrings2 = _interopRequireDefault(_optionsFromStrings);
  var _ErrorHandler = requireErrorHandler();
  var _ErrorHandler2 = _interopRequireDefault(_ErrorHandler);
  var _exceptions = requireExceptions();
  var _defaults = requireDefaults();
  var _defaults2 = _interopRequireDefault(_defaults);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var API = function API2() {
  };
  var JsBarcode2 = function JsBarcode3(element, text, options) {
    var api = new API();
    if (typeof element === "undefined") {
      throw Error("No element to render on was provided.");
    }
    api._renderProperties = (0, _getRenderProperties2.default)(element);
    api._encodings = [];
    api._options = _defaults2.default;
    api._errorHandler = new _ErrorHandler2.default(api);
    if (typeof text !== "undefined") {
      options = options || {};
      if (!options.format) {
        options.format = autoSelectBarcode();
      }
      api.options(options)[options.format](text, options).render();
    }
    return api;
  };
  JsBarcode2.getModule = function(name2) {
    return _barcodes2.default[name2];
  };
  for (var name in _barcodes2.default) {
    if (_barcodes2.default.hasOwnProperty(name)) {
      registerBarcode(_barcodes2.default, name);
    }
  }
  function registerBarcode(barcodes2, name2) {
    API.prototype[name2] = API.prototype[name2.toUpperCase()] = API.prototype[name2.toLowerCase()] = function(text, options) {
      var api = this;
      return api._errorHandler.wrapBarcodeCall(function() {
        options.text = typeof options.text === "undefined" ? void 0 : "" + options.text;
        var newOptions = (0, _merge2.default)(api._options, options);
        newOptions = (0, _optionsFromStrings2.default)(newOptions);
        var Encoder = barcodes2[name2];
        var encoded = encode(text, Encoder, newOptions);
        api._encodings.push(encoded);
        return api;
      });
    };
  }
  function encode(text, Encoder, options) {
    text = "" + text;
    var encoder2 = new Encoder(text, options);
    if (!encoder2.valid()) {
      throw new _exceptions.InvalidInputException(encoder2.constructor.name, text);
    }
    var encoded = encoder2.encode();
    encoded = (0, _linearizeEncodings2.default)(encoded);
    for (var i = 0; i < encoded.length; i++) {
      encoded[i].options = (0, _merge2.default)(options, encoded[i].options);
    }
    return encoded;
  }
  function autoSelectBarcode() {
    if (_barcodes2.default["CODE128"]) {
      return "CODE128";
    }
    return Object.keys(_barcodes2.default)[0];
  }
  API.prototype.options = function(options) {
    this._options = (0, _merge2.default)(this._options, options);
    return this;
  };
  API.prototype.blank = function(size) {
    var zeroes = new Array(size + 1).join("0");
    this._encodings.push({ data: zeroes });
    return this;
  };
  API.prototype.init = function() {
    if (!this._renderProperties) {
      return;
    }
    if (!Array.isArray(this._renderProperties)) {
      this._renderProperties = [this._renderProperties];
    }
    var renderProperty;
    for (var i in this._renderProperties) {
      renderProperty = this._renderProperties[i];
      var options = (0, _merge2.default)(this._options, renderProperty.options);
      if (options.format == "auto") {
        options.format = autoSelectBarcode();
      }
      this._errorHandler.wrapBarcodeCall(function() {
        var text = options.value;
        var Encoder = _barcodes2.default[options.format.toUpperCase()];
        var encoded = encode(text, Encoder, options);
        render(renderProperty, encoded, options);
      });
    }
  };
  API.prototype.render = function() {
    if (!this._renderProperties) {
      throw new _exceptions.NoElementException();
    }
    if (Array.isArray(this._renderProperties)) {
      for (var i = 0; i < this._renderProperties.length; i++) {
        render(this._renderProperties[i], this._encodings, this._options);
      }
    } else {
      render(this._renderProperties, this._encodings, this._options);
    }
    return this;
  };
  API.prototype._defaults = _defaults2.default;
  function render(renderProperties, encodings, options) {
    encodings = (0, _linearizeEncodings2.default)(encodings);
    for (var i = 0; i < encodings.length; i++) {
      encodings[i].options = (0, _merge2.default)(options, encodings[i].options);
      (0, _fixOptions2.default)(encodings[i].options);
    }
    (0, _fixOptions2.default)(options);
    var Renderer = renderProperties.renderer;
    var renderer = new Renderer(renderProperties.element, encodings, options);
    renderer.render();
    if (renderProperties.afterRender) {
      renderProperties.afterRender();
    }
  }
  if (typeof window !== "undefined") {
    window.JsBarcode = JsBarcode2;
  }
  if (typeof jQuery !== "undefined") {
    jQuery.fn.JsBarcode = function(content, options) {
      var elementArray = [];
      jQuery(this).each(function() {
        elementArray.push(this);
      });
      return JsBarcode2(elementArray, content, options);
    };
  }
  JsBarcode_1 = JsBarcode2;
  return JsBarcode_1;
}
var JsBarcodeExports = requireJsBarcode();
const JsBarcode = /* @__PURE__ */ getDefaultExportFromCjs(JsBarcodeExports);
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  extends: "k-field",
  props: {
    value: String,
    emptyText: {
      type: String,
      default() {
        return this.$t("isbn.field.empty");
      }
    },
    format: {
      type: String,
      default: "ean13"
    },
    height: {
      type: Number,
      default: 80
    },
    barwidth: {
      type: Number,
      default: 2
    },
    background: {
      type: String,
      default: "#fff"
    },
    linecolor: {
      type: String,
      default: "#000"
    },
    font: {
      type: String,
      default: "monospace"
    },
    fontsize: {
      type: Number,
      default: 20
    },
    fontoptions: {
      type: String
    },
    textmargin: {
      type: Number,
      default: 2
    },
    textalign: {
      type: String,
      default: "center"
    },
    textposition: {
      type: String,
      default: "bottom"
    },
    margins: {
      type: Number,
      default: 0
    },
    margintop: {
      type: Number,
      default: null
    },
    marginright: {
      type: Number,
      default: null
    },
    marginbottom: {
      type: Number,
      default: null
    },
    marginleft: {
      type: Number,
      default: null
    },
    displayvalue: {
      type: Boolean,
      default: true
    },
    flat: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "input", "change"],
  data() {
    return {
      svgEl: null
    };
  },
  computed: {
    hasContent() {
      return !!(this.value && this.value.trim() !== "");
    }
  },
  mounted() {
    this.svgEl = this.$refs.svgEl;
    this.renderBarcode();
  },
  watch: {
    value() {
      this.$nextTick(() => this.renderBarcode());
    }
  },
  methods: {
    handleSubmit(formData) {
      const newValue = formData[this.name];
      if (!this.validateIsbn(newValue)) {
        this.$panel.notification.info({
          message: this.$t("isbn.error.invalid"),
          icon: "alert",
          theme: "negative",
          timeout: 5e3
        });
        return;
      }
      Promise.resolve().then(() => {
        this.$emit("update:modelValue", newValue);
        this.$emit("input", newValue);
        this.$emit("change", newValue);
        this.$nextTick(() => this.renderBarcode());
        this.closeDrawer();
        this.$panel.notification.success({
          message: this.$t("isbn.success.saved"),
          icon: "check",
          timeout: 4e3
        });
      }).catch(() => {
        this.$panel.notification.info({
          message: this.$t("isbn.error.unknown"),
          icon: "alert",
          theme: "negative",
          timeout: 4e3
        });
      });
    },
    openDrawer() {
      this.$panel.drawer.open({
        component: "k-form-drawer",
        props: {
          icon: "isbn",
          title: "ISBN-10/ISBN-13",
          value: {
            [this.name]: this.value
          },
          fields: {
            [this.name]: {
              label: this.$t("isbn.field.label"),
              type: "text",
              spellcheck: false,
              autofocus: true,
              minlength: 10,
              maxlength: 14,
              placeholder: this.$t("isbn.field.placeholder")
            },
            info: {
              type: "info",
              label: this.$t("isbn.info.label"),
              text: this.$t("isbn.info.text"),
              theme: "info"
            }
          }
        },
        on: {
          submit: this.handleSubmit.bind(this)
        }
      });
    },
    closeDrawer() {
      this.$panel.drawer.close();
    },
    convertIsbn10to13(isbn10) {
      const clean = isbn10.replace(/-/g, "").toUpperCase();
      if (!/^\d{9}[\dX]$/.test(clean)) return null;
      const core = "978" + clean.slice(0, 9);
      let sum = 0;
      for (let i = 0; i < 12; i++) {
        const digit = parseInt(core[i], 10);
        sum += digit * (i % 2 === 0 ? 1 : 3);
      }
      const checksum = (10 - sum % 10) % 10;
      return core + checksum;
    },
    validateIsbn(value) {
      const clean = value.replace(/-/g, "");
      if (/^\d{9}[\dX]$/.test(clean)) {
        let sum = 0;
        for (let i = 0; i < 9; i++) {
          sum += (i + 1) * parseInt(clean[i], 10);
        }
        const checksum = clean[9] === "X" ? 10 : parseInt(clean[9], 10);
        return (sum + 10 * checksum) % 11 === 0;
      }
      if (/^\d{13}$/.test(clean)) {
        let sum = 0;
        for (let i = 0; i < 12; i++) {
          sum += parseInt(clean[i], 10) * (i % 2 === 0 ? 1 : 3);
        }
        const checksum = (10 - sum % 10) % 10;
        return checksum === parseInt(clean[12], 10);
      }
      return false;
    },
    renderBarcode() {
      if (!this.hasContent) return;
      if (typeof JsBarcode !== "function") return;
      if (!this.svgEl) return;
      let clean = this.value.replace(/-/g, "");
      if (/^\d{9}[\dX]$/.test(clean)) {
        const converted = this.convertIsbn10to13(clean);
        if (!converted) return;
        clean = converted;
      }
      if (!/^\d{13}$/.test(clean) || !this.validateIsbn(clean)) return;
      while (this.svgEl.firstChild) {
        this.svgEl.removeChild(this.svgEl.firstChild);
      }
      JsBarcode(this.svgEl, clean, {
        format: this.format,
        height: this.height,
        width: this.barwidth,
        background: this.background,
        lineColor: this.linecolor,
        font: this.font,
        fontSize: this.fontsize,
        fontOptions: this.fontoptions,
        textAlign: this.textalign,
        textPosition: this.textposition,
        margins: this.margins,
        marginTop: this.margintop,
        marginRight: this.marginright,
        marginBottom: this.marginbottom,
        marginLeft: this.marginleft,
        displayValue: this.displayvalue,
        flat: this.flat,
        lastChar: ">"
      });
    }
  }
};
const _hoisted_1 = {
  key: 0,
  class: "k-isbn-empty"
};
const _hoisted_2 = {
  key: 1,
  class: "k-isbn-preview"
};
const _hoisted_3 = { class: "k-isbn-container" };
const _hoisted_4 = {
  ref: "svgEl",
  class: "k-isbn-preview-svg"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_k_button = resolveComponent("k-button");
  const _component_k_empty = resolveComponent("k-empty");
  const _component_k_grid = resolveComponent("k-grid");
  const _component_k_field = resolveComponent("k-field");
  return openBlock(), createBlock(
    _component_k_field,
    mergeProps({ class: "k-isbn-field" }, _ctx.$props),
    {
      options: withCtx(() => [
        createVNode(_component_k_button, {
          icon: "edit-line",
          size: "xs",
          variant: "filled",
          onClick: $options.openDrawer
        }, {
          default: withCtx(() => [..._cache[0] || (_cache[0] = [
            createTextVNode(
              "Edit...",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"])
      ]),
      default: withCtx(() => [
        !$options.hasContent ? (openBlock(), createElementBlock("div", _hoisted_1, [
          createVNode(_component_k_grid, { style: { "--columns": "1", "gap": "0.5rem" } }, {
            default: withCtx(() => [
              createVNode(_component_k_empty, {
                text: $props.emptyText,
                icon: "isbn",
                onClick: $options.openDrawer
              }, null, 8, ["text", "onClick"])
            ]),
            _: 1
            /* STABLE */
          })
        ])) : (openBlock(), createElementBlock("div", _hoisted_2, [
          createElementVNode("div", _hoisted_3, [
            (openBlock(), createElementBlock(
              "svg",
              _hoisted_4,
              null,
              512
              /* NEED_PATCH */
            ))
          ])
        ]))
      ]),
      _: 1
      /* STABLE */
    },
    16
    /* FULL_PROPS */
  );
}
const IsbnField = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const icons = {
  "isbn": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4H4V20H2V4ZM6 4H7V20H6V4ZM8 4H10V20H8V4ZM11 4H13V20H11V4ZM14 4H16V20H14V4ZM17 4H18V20H17V4ZM19 4H22V20H19V4Z"></path></svg>'
};
panel.plugin("scottboms/isbn-field", {
  fields: {
    isbn: IsbnField
  },
  icons
});
