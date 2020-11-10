

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var require$$0 = require('core-js/library/fn/promise');
var require$$0$1 = require('core-js/library/fn/object/assign');
var require$$0$2 = require('regenerator-runtime');
var require$$0$3 = require('core-js/library/fn/object/keys');
var require$$0$4 = require('core-js/library/fn/symbol/iterator');
var require$$0$5 = require('core-js/library/fn/symbol');
var require$$0$6 = require('core-js/library/fn/object/set-prototype-of');
var require$$0$7 = require('core-js/library/fn/object/create');
var _propTypes = require('prop-types');
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');
var _inherits2 = require('babel-runtime/helpers/inherits');
var _moment = require('moment');
var _isString = require('lodash/isString');
var _isUndefined = require('lodash/isUndefined');
var _isRegExp = require('lodash/isRegExp');
var _get = require('lodash/get');
var _toNumber = require('lodash/toNumber');
var _isNumber = require('lodash/isNumber');
var _reactstrap = require('reactstrap');
var _extends2 = require('babel-runtime/helpers/extends');
var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');
var _assign = require('babel-runtime/core-js/object/assign');
var _classnames = require('classnames');
var _find = require('lodash/find');
var _keys = require('babel-runtime/core-js/object/keys');
var _isEqual = require('lodash/isEqual');
var _regenerator = require('babel-runtime/regenerator');
var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');
var _reactDom = require('react-dom');
var DatePicker = require('react-datepicker');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
var require$$0__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$0$1);
var require$$0__default$2 = /*#__PURE__*/_interopDefaultLegacy(require$$0$2);
var require$$0__default$3 = /*#__PURE__*/_interopDefaultLegacy(require$$0$3);
var require$$0__default$4 = /*#__PURE__*/_interopDefaultLegacy(require$$0$4);
var require$$0__default$5 = /*#__PURE__*/_interopDefaultLegacy(require$$0$5);
var require$$0__default$6 = /*#__PURE__*/_interopDefaultLegacy(require$$0$6);
var require$$0__default$7 = /*#__PURE__*/_interopDefaultLegacy(require$$0$7);
var _propTypes__default = /*#__PURE__*/_interopDefaultLegacy(_propTypes);
var _classCallCheck2__default = /*#__PURE__*/_interopDefaultLegacy(_classCallCheck2);
var _possibleConstructorReturn2__default = /*#__PURE__*/_interopDefaultLegacy(_possibleConstructorReturn2);
var _inherits2__default = /*#__PURE__*/_interopDefaultLegacy(_inherits2);
var _moment__default = /*#__PURE__*/_interopDefaultLegacy(_moment);
var _isString__default = /*#__PURE__*/_interopDefaultLegacy(_isString);
var _isUndefined__default = /*#__PURE__*/_interopDefaultLegacy(_isUndefined);
var _isRegExp__default = /*#__PURE__*/_interopDefaultLegacy(_isRegExp);
var _get__default = /*#__PURE__*/_interopDefaultLegacy(_get);
var _toNumber__default = /*#__PURE__*/_interopDefaultLegacy(_toNumber);
var _isNumber__default = /*#__PURE__*/_interopDefaultLegacy(_isNumber);
var _reactstrap__default = /*#__PURE__*/_interopDefaultLegacy(_reactstrap);
var _extends2__default = /*#__PURE__*/_interopDefaultLegacy(_extends2);
var _objectWithoutProperties2__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutProperties2);
var _assign__default = /*#__PURE__*/_interopDefaultLegacy(_assign);
var _classnames__default = /*#__PURE__*/_interopDefaultLegacy(_classnames);
var _find__default = /*#__PURE__*/_interopDefaultLegacy(_find);
var _keys__default = /*#__PURE__*/_interopDefaultLegacy(_keys);
var _isEqual__default = /*#__PURE__*/_interopDefaultLegacy(_isEqual);
var _regenerator__default = /*#__PURE__*/_interopDefaultLegacy(_regenerator);
var _asyncToGenerator2__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator2);
var _reactDom__default = /*#__PURE__*/_interopDefaultLegacy(_reactDom);
var DatePicker__default = /*#__PURE__*/_interopDefaultLegacy(DatePicker);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var promise = createCommonjsModule(function (module) {
module.exports = { "default": require$$0__default['default'], __esModule: true };
});

var assign = createCommonjsModule(function (module) {
module.exports = { "default": require$$0__default$1['default'], __esModule: true };
});

var _extends = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _assign2 = _interopRequireDefault(assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
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
});

var objectWithoutProperties = createCommonjsModule(function (module, exports) {

exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};
});

var regenerator = require$$0__default$2['default'];

var keys = createCommonjsModule(function (module) {
module.exports = { "default": require$$0__default$3['default'], __esModule: true };
});

var asyncToGenerator = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _promise2 = _interopRequireDefault(promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};
});

var classCallCheck = createCommonjsModule(function (module, exports) {

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
});

var iterator = createCommonjsModule(function (module) {
module.exports = { "default": require$$0__default$4['default'], __esModule: true };
});

var symbol = createCommonjsModule(function (module) {
module.exports = { "default": require$$0__default$5['default'], __esModule: true };
});

var _typeof_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _iterator2 = _interopRequireDefault(iterator);



var _symbol2 = _interopRequireDefault(symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
});

var possibleConstructorReturn = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _typeof3 = _interopRequireDefault(_typeof_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
});

var setPrototypeOf = createCommonjsModule(function (module) {
module.exports = { "default": require$$0__default$6['default'], __esModule: true };
});

var create = createCommonjsModule(function (module) {
module.exports = { "default": require$$0__default$7['default'], __esModule: true };
});

var inherits = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _setPrototypeOf2 = _interopRequireDefault(setPrototypeOf);



var _create2 = _interopRequireDefault(create);



var _typeof3 = _interopRequireDefault(_typeof_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};
});

var AvInputContainer = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _classCallCheck3 = _interopRequireDefault(_classCallCheck2__default['default']);



var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2__default['default']);



var _inherits3 = _interopRequireDefault(_inherits2__default['default']);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validComponent(input) {
  var name = input && input.props ? input.props.name : undefined;

  if (!name) {
    throw new Error('Input ' + input + ' has no "name" prop');
  }

  return { name: name };
}

var InputContainer = function (_Component) {
  (0, _inherits3.default)(InputContainer, _Component);

  function InputContainer() {
    (0, _classCallCheck3.default)(this, InputContainer);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  InputContainer.prototype.componentWillMount = function componentWillMount() {
    this._updaters = {};
    this._inputs = {};
  };

  InputContainer.prototype.getOldInputName = function getOldInputName(input) {
    for (var key in this._inputs) {
      if (this._inputs[key] === input) {
        return key;
      }
    }
  };

  InputContainer.prototype.registerInput = function registerInput(input) {
    var updater = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : input && input.setState && input.setState.bind(input);

    var _validComponent = validComponent(input),
        name = _validComponent.name;

    var oldName = this.getOldInputName(input);
    if (oldName !== name) {
      if (oldName) {
        this.unregisterInput({ props: { name: oldName } });
      }
      this._updaters[name] = updater;
      this._inputs[name] = input;
    }
  };

  InputContainer.prototype.unregisterInput = function unregisterInput(input) {
    var _validComponent2 = validComponent(input),
        name = _validComponent2.name;

    delete this._updaters[name];
    delete this._inputs[name];
  };

  return InputContainer;
}(React__default['default'].Component);

exports.default = InputContainer;
});

var utils = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.inputTypeOverride = exports.inputType = exports.isoDateFormat = undefined;
exports.isEmpty = isEmpty;
exports.isDecimal = isDecimal;



var _isString2 = _interopRequireDefault(_isString__default['default']);



var _isUndefined2 = _interopRequireDefault(_isUndefined__default['default']);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global document */
var isoDateFormat = exports.isoDateFormat = 'YYYY-MM-DD';

function isEmpty(value) {
  return (0, _isUndefined2.default)(value) || value === null || (0, _isString2.default)(value) && value.trim() === '' || value === false || Array.isArray(value) && value.length === 0;
}

function isDecimal(value) {
  return value % 1 !== 0;
}

var inputType = exports.inputType = { date: false, number: false, time: false, month: false, week: false };

var inputTypeOverride = exports.inputTypeOverride = function inputTypeOverride(key, value) {
  inputType[key] = value;
};

/* istanbul ignore next  */
if (typeof document !== 'undefined' && typeof document.createElement === 'function') {
  var tester = document.createElement('input');

  for (var i in inputType) {
    if (inputType.hasOwnProperty(i)) {
      tester.setAttribute('type', i);
      tester.value = ':(';

      if (tester.type === i && tester.value === '') {
        inputType[i] = true;
      }
    }
  }
}
});

var date = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = validate;



var _moment2 = _interopRequireDefault(_moment__default['default']);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(value, context) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$format = _ref.format,
      format = _ref$format === undefined ? 'MM/DD/YYYY' : _ref$format,
      _ref$errorMessage = _ref.errorMessage,
      errorMessage = _ref$errorMessage === undefined ? 'Format needs to be ' + format : _ref$errorMessage;

  if ((0, utils.isEmpty)(value)) return true;

  var date = (0, _moment2.default)(value, [utils.isoDateFormat, format], true);

  return date.isValid() || errorMessage;
}
});

var dateRange = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = validate;



var _moment2 = _interopRequireDefault(_moment__default['default']);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setMin(value) {
  value.set('hours', 0);
  value.set('minutes', 0);
  value.set('seconds', 0);

  return value;
}

function setMax(value) {
  value.set('hours', 23);
  value.set('minutes', 59);
  value.set('seconds', 59);

  return value;
}

function getStartDate(start) {
  return setMin((0, _moment2.default)().add(start.value, start.units));
}

function getEndDate(end) {
  return setMax((0, _moment2.default)().add(end.value, end.units));
}

function validate(value, context) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$format = _ref.format,
      format = _ref$format === undefined ? 'MM/DD/YYYY' : _ref$format,
      _ref$displayFormat = _ref.displayFormat,
      displayFormat = _ref$displayFormat === undefined ? 'MM/DD/YYYY' : _ref$displayFormat,
      _ref$start = _ref.start,
      start = _ref$start === undefined ? {} : _ref$start,
      _ref$end = _ref.end,
      end = _ref$end === undefined ? {} : _ref$end,
      errorMessage = _ref.errorMessage;

  if ((0, utils.isEmpty)(value)) return true;

  var startDate = void 0;
  var endDate = void 0;

  var date = (0, _moment2.default)(value, [utils.isoDateFormat, format], true);
  setMin(date);

  if (!(0, utils.isEmpty)(start.units) && !(0, utils.isEmpty)(end.units)) {
    startDate = getStartDate(start);
    endDate = getEndDate(end);
  } else {
    startDate = (0, _moment2.default)(start.value, start.format || format);
    endDate = setMax((0, _moment2.default)(end.value, end.format || format));
  }
  errorMessage = errorMessage || 'Date must be between ' + startDate.format(displayFormat) + ' and ' + endDate.format(displayFormat);
  return date.isValid() && (date.isBetween(startDate, endDate, 'day') || date.isSame(startDate, 'day') || date.isSame(endDate, 'day')) || errorMessage;
}
});

var pattern = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = validate;



var _isRegExp2 = _interopRequireDefault(_isRegExp__default['default']);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REGEX = /^\/(.*)\/([gim]*)$/; // regular expression to test a regular expression

function asRegExp(pattern) {
  // if regex then return it
  if ((0, _isRegExp2.default)(pattern)) {
    return pattern;
  }

  // if string then test for valid regex then convert to regex and return
  var match = pattern.match(REGEX);
  if (match) {
    return new RegExp(match[1], match[2]);
  }

  return new RegExp(pattern);
}

function validate(value, context) {
  var constraint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if ((0, utils.isEmpty)(value)) return true;

  var values = Array.isArray(constraint.value) ? constraint.value : [constraint.value];

  return values.some(function (expression) {
    return asRegExp(expression).test(value);
  }) || constraint.errorMessage || false;
}
});

var email = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = validate;



var _pattern2 = _interopRequireDefault(pattern);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

function validate(value, context) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$pattern = _ref.pattern,
      pattern = _ref$pattern === undefined ? EMAIL_REGEXP : _ref$pattern,
      _ref$errorMessage = _ref.errorMessage,
      errorMessage = _ref$errorMessage === undefined ? false : _ref$errorMessage;

  return (0, _pattern2.default)(value, context, { value: pattern, errorMessage: errorMessage });
}
});

var match = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = validate;





var _get2 = _interopRequireDefault(_get__default['default']);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(value, context) {
  var constraint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return (0, utils.isEmpty)(value) || value === (0, _get2.default)(context, constraint.value) || constraint.errorMessage || false;
}
});

var maxchecked = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = validate;



var _toNumber2 = _interopRequireDefault(_toNumber__default['default']);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(value, context) {
  var constraint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var input = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if ((0, utils.isEmpty)(input.value)) return true;

  var max = (0, _toNumber2.default)(constraint.value);

  return !isNaN(max) && isFinite(max) && !(0, utils.isDecimal)(max) && max >= input.value.length || constraint.errorMessage || false;
}
});

var max = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = validate;



var _moment2 = _interopRequireDefault(_moment__default['default']);



var _toNumber2 = _interopRequireDefault(_toNumber__default['default']);





var _maxchecked2 = _interopRequireDefault(maxchecked);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(value, context) {
  var constraint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var input = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (Array.isArray(input.value)) {
    return (0, _maxchecked2.default)(value, context, constraint, input);
  }

  if ((0, utils.isEmpty)(value)) return true;

  if (input.validations && input.validations.date || input.props && input.props.type && input.props.type.toLowerCase() === 'date') {
    return (0, _moment2.default)(value, [utils.isoDateFormat, constraint.format || 'MM/DD/YYYY'], true).isSameOrBefore(constraint.value, 'day') || constraint.errorMessage || false;
  }

  var number = (0, _toNumber2.default)(value);

  return !isNaN(number) && isFinite(number) && number <= (0, _toNumber2.default)(constraint.value) || constraint.errorMessage || false;
}
});

var maxlength = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = validate;



var _toNumber2 = _interopRequireDefault(_toNumber__default['default']);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(value, context) {
  var constraint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if ((0, utils.isEmpty)(value)) return true;

  var length = value.length;

  return length <= (0, _toNumber2.default)(constraint.value) || constraint.errorMessage || false;
}
});

var minchecked = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = validate;



var _toNumber2 = _interopRequireDefault(_toNumber__default['default']);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(value, context) {
  var constraint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var input = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if ((0, utils.isEmpty)(input.value)) return true;

  var min = (0, _toNumber2.default)(constraint.value);

  return !isNaN(min) && isFinite(min) && !(0, utils.isDecimal)(min) && min <= input.value.length || constraint.errorMessage || false;
}
});

var min = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = validate;



var _moment2 = _interopRequireDefault(_moment__default['default']);



var _toNumber2 = _interopRequireDefault(_toNumber__default['default']);





var _minchecked2 = _interopRequireDefault(minchecked);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(value, context) {
  var constraint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var input = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (Array.isArray(input.value)) {
    return (0, _minchecked2.default)(value, context, constraint, input);
  }

  if ((0, utils.isEmpty)(value)) return true;

  if (input.validations && input.validations.date || input.props && input.props.type && input.props.type.toLowerCase() === 'date') {
    return (0, _moment2.default)(value, [utils.isoDateFormat, constraint.format || 'MM/DD/YYYY'], true).isSameOrAfter(constraint.value, 'day') || constraint.errorMessage || false;
  }

  var number = (0, _toNumber2.default)(value);

  return !isNaN(number) && isFinite(number) && number >= (0, _toNumber2.default)(constraint.value) || constraint.errorMessage || false;
}
});

var minlength = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = validate;



var _toNumber2 = _interopRequireDefault(_toNumber__default['default']);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(value, context) {
  var constraint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if ((0, utils.isEmpty)(value)) return true;

  var length = value.length;

  return length >= (0, _toNumber2.default)(constraint.value) || constraint.errorMessage || false;
}
});

var number = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = validate;



var _isNumber2 = _interopRequireDefault(_isNumber__default['default']);



var _toNumber2 = _interopRequireDefault(_toNumber__default['default']);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(value, context) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$errorMessage = _ref.errorMessage,
      errorMessage = _ref$errorMessage === undefined ? false : _ref$errorMessage;

  if ((0, utils.isEmpty)(value)) return true;

  var number = (0, _toNumber2.default)(value);

  return (0, _isNumber2.default)(number) && !isNaN(number) || errorMessage;
}
});

var npi = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = validate;



var INTEGER_REGEX = /^\d*$/;

function validate(value, context) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$errorMessage = _ref.errorMessage,
      errorMessage = _ref$errorMessage === undefined ? false : _ref$errorMessage;

  if ((0, utils.isEmpty)(value)) return true;

  value = value + '';

  if (!INTEGER_REGEX.test(value) || value.length !== 10) {
    return errorMessage;
  }

  var firstDigit = value.charAt(0);
  if (['1', '2', '3', '4'].indexOf(firstDigit) < 0) {
    return errorMessage;
  }

  var digit = parseInt(value.charAt(9), 10);
  value = value.substring(0, 9);
  value = '80840' + value;

  var alternate = true;
  var total = 0;

  for (var i = value.length; i > 0; i--) {
    var next = parseInt(value.charAt(i - 1), 10);
    if (alternate) {
      next = next * 2;
      if (next > 9) {
        next = next % 10 + 1;
      }
    }
    total += next;
    alternate = !alternate;
  }

  var roundUp = Math.ceil(total / 10) * 10;
  var calculatedCheck = roundUp - total;

  return calculatedCheck === digit || errorMessage;
}
});

var phone = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = validate;



var _pattern2 = _interopRequireDefault(pattern);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NANP_REGEXP = /^(\+?1[\.\-\s]?)?\(?[2-9]\d{2}[\)\.\-\s]?\s?[2-9]\d{2}[\.\-\s]?\d{4}$/;

function validate(value, context) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$pattern = _ref.pattern,
      pattern = _ref$pattern === undefined ? NANP_REGEXP : _ref$pattern,
      _ref$errorMessage = _ref.errorMessage,
      errorMessage = _ref$errorMessage === undefined ? false : _ref$errorMessage;

  return (0, _pattern2.default)(value, context, { value: pattern, errorMessage: errorMessage });
}
});

var required = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = validate;



function validate(value, context) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$value = _ref.value,
      enabled = _ref$value === undefined ? true : _ref$value,
      _ref$errorMessage = _ref.errorMessage,
      errorMessage = _ref$errorMessage === undefined ? false : _ref$errorMessage;

  return !enabled || !(0, utils.isEmpty)(value) || errorMessage || false;
}
});

var step = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = validate;



var _toNumber2 = _interopRequireDefault(_toNumber__default['default']);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getDecCount(val) {
  var valStr = val.toString();
  if (valStr.indexOf('e-') > -1) {
    var valArr = valStr.split('e-');
    return parseInt((valArr[0].split('.')[1] || '').length, 10) + parseInt(valArr[1], 10);
  }
  return (valStr.split('.')[1] || '').length;
}

// http://stackoverflow.com/a/31711034/1873485
function floatSafeRemainder(val, step) {
  var valDecCount = getDecCount(val);
  var stepDecCount = getDecCount(step);
  var decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  var valInt = parseInt(val.toFixed(decCount).replace('.', ''), 10);
  var stepInt = parseInt(step.toFixed(decCount).replace('.', ''), 10);
  return valInt % stepInt / Math.pow(10, decCount);
}

function validate(value, context) {
  var constraint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if ((0, utils.isEmpty)(value)) return true;

  return floatSafeRemainder((0, _toNumber2.default)(value), (0, _toNumber2.default)(constraint.value)) === 0 || constraint.errorMessage || false;
}
});

var url = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = validate;



var _pattern2 = _interopRequireDefault(pattern);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://gist.github.com/dperini/729294
var URL_REGEXP = new RegExp('^' +
// protocol identifier
'(?:(?:https?|ftps?|sftp)://)' +
// user:pass authentication
'(?:\\S+(?::\\S*)?@)?' + '(?:' +
// IP address exclusion
// private & local networks
'(?!(?:10|127)(?:\\.\\d{1,3}){3})' + '(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})' + '(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})' +
// IP address dotted notation octets
// excludes loopback network 0.0.0.0
// excludes reserved space >= 224.0.0.0
// excludes network & broacast addresses
// (first & last IP address of each class)
'(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])' + '(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}' + '(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))' + '|' +
// host name
'(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)' +
// domain name
'(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*' +
// TLD identifier
'(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))' +
// TLD may end with dot
'\\.?' + ')' +
// port number
'(?::\\d{2,5})?' +
// resource path
'(?:[/?#]\\S*)?' + '$', 'i');

function validate(value, context) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$pattern = _ref.pattern,
      pattern = _ref$pattern === undefined ? URL_REGEXP : _ref$pattern,
      _ref$errorMessage = _ref.errorMessage,
      errorMessage = _ref$errorMessage === undefined ? false : _ref$errorMessage;

  return (0, _pattern2.default)(value, context, { value: pattern, errorMessage: errorMessage });
}
});

var AvValidator = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _date2 = _interopRequireDefault(date);



var _dateRange2 = _interopRequireDefault(dateRange);



var _email2 = _interopRequireDefault(email);



var _match2 = _interopRequireDefault(match);



var _max2 = _interopRequireDefault(max);



var _maxlength2 = _interopRequireDefault(maxlength);



var _maxchecked2 = _interopRequireDefault(maxchecked);



var _min2 = _interopRequireDefault(min);



var _minlength2 = _interopRequireDefault(minlength);



var _minchecked2 = _interopRequireDefault(minchecked);



var _number2 = _interopRequireDefault(number);



var _npi2 = _interopRequireDefault(npi);



var _pattern2 = _interopRequireDefault(pattern);



var _phone2 = _interopRequireDefault(phone);



var _required2 = _interopRequireDefault(required);



var _step2 = _interopRequireDefault(step);



var _url2 = _interopRequireDefault(url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  date: _date2.default,
  datetime: _date2.default,
  dateRange: _dateRange2.default,
  email: _email2.default,
  match: _match2.default,
  max: _max2.default,
  maxlength: _maxlength2.default,
  maxLength: _maxlength2.default,
  maxChecked: _maxchecked2.default,
  min: _min2.default,
  minlength: _minlength2.default,
  minLength: _minlength2.default,
  minChecked: _minchecked2.default,
  number: _number2.default,
  npi: _npi2.default,
  pattern: _pattern2.default,
  phone: _phone2.default,
  tel: _phone2.default,
  required: _required2.default,
  step: _step2.default,
  url: _url2.default
};
});

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol = _root.Symbol;

var _Symbol = Symbol;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol;

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray_1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol_1(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

var _isKey = isKey;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

var _nativeCreate = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$3.call(data, key);
}

var _hashHas = hashHas;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

var _Hash = Hash;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

var _ListCache = ListCache;

/* Built-in method references that are verified to be native. */
var Map = _getNative(_root, 'Map');

var _Map = Map;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

var _MapCache = MapCache;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache;

var memoize_1 = memoize;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize_1(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped;

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = _memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var _stringToPath = stringToPath;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

var _baseToString = baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray_1(value)) {
    return value;
  }
  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
}

var _castPath = castPath;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol_1(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

var _toKey = toKey;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = _castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[_toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

var _baseGet = baseGet;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : _baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get;

var defineProperty = (function() {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

var _defineProperty = defineProperty;

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty) {
    _defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue = baseAssignValue;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$4.call(object, key) && eq_1(objValue, value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

var _assignValue = assignValue;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject_1(object)) {
    return object;
  }
  path = _castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = _toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject_1(objValue)
          ? objValue
          : (_isIndex(path[index + 1]) ? [] : {});
      }
    }
    _assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

var _baseSet = baseSet;

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : _baseSet(object, path, value);
}

var set_1 = set;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _root.Date.now();
};

var now_1 = now;

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol_1(value)) {
    return NAN;
  }
  if (isObject_1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject_1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var toNumber_1 = toNumber;

/** Error message constants. */
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber_1(wait) || 0;
  if (isObject_1(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber_1(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now_1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now_1());
  }

  function debounced() {
    var time = now_1(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

var debounce_1 = debounce;

/** Error message constants. */
var FUNC_ERROR_TEXT$2 = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$2);
  }
  if (isObject_1(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce_1(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

var throttle_1 = throttle;

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray_1(value) && isObjectLike_1(value) && _baseGetTag(value) == stringTag);
}

var isString_1 = isString;

var AvForm_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _promise2 = _interopRequireDefault(promise);



var _extends3 = _interopRequireDefault(_extends);



var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



var _regenerator2 = _interopRequireDefault(regenerator);



var _keys2 = _interopRequireDefault(keys);



var _asyncToGenerator3 = _interopRequireDefault(asyncToGenerator);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);



var _typeof3 = _interopRequireDefault(_typeof_1);



var _react2 = _interopRequireDefault(React__default['default']);



var _propTypes2 = _interopRequireDefault(_propTypes__default['default']);



var _AvInputContainer2 = _interopRequireDefault(AvInputContainer);



var _AvValidator2 = _interopRequireDefault(AvValidator);





var _classnames2 = _interopRequireDefault(classnames);



var _get3 = _interopRequireDefault(get_1);



var _set3 = _interopRequireDefault(set_1);



var _throttle3 = _interopRequireDefault(throttle_1);



var _isString2 = _interopRequireDefault(isString_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getInputErrorMessage = function getInputErrorMessage(input, ruleName) {
  var errorMessage = input && input.props && input.props.errorMessage;

  if ((typeof errorMessage === 'undefined' ? 'undefined' : (0, _typeof3.default)(errorMessage)) === 'object') {
    return errorMessage[ruleName];
  }
  return errorMessage;
};

var AvForm = function (_InputContainer) {
  (0, _inherits3.default)(AvForm, _InputContainer);

  function AvForm() {
    var _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AvForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _InputContainer.call.apply(_InputContainer, [this].concat(args))), _this), _this._isMounted = false, _this.state = {
      invalidInputs: {},
      dirtyInputs: {},
      touchedInputs: {},
      badInputs: {},
      submitted: false
    }, _this.validations = {}, _this.handleSubmit = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
        var values, _ref2, isValid, errors;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.props.beforeSubmitValidation) {
                  _this.props.beforeSubmitValidation(e);
                }

                if (e && typeof e.preventDefault === 'function') {
                  e.preventDefault();
                }

                if (!_this.props.disabled) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt('return');

              case 4:
                values = _this.getValues();
                _context.next = 7;
                return _this.validateAll(values, false);

              case 7:
                _ref2 = _context.sent;
                isValid = _ref2.isValid;
                errors = _ref2.errors;


                _this.setTouched((0, _keys2.default)(_this._inputs), true, false);

                _this.updateInputs();

                _this.props.onSubmit(e, errors, values);
                if (isValid) {
                  _this.props.onValidSubmit(e, values);
                } else {
                  _this.props.onInvalidSubmit(e, errors, values);
                }

                !_this.state.submitted && _this._isMounted && _this.setState({ submitted: true });

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(), _this.handleNonFormSubmission = function (event) {
      if (_this.props.onKeyDown(event) !== false) {
        if (event.type === 'keydown' && (event.which === 13 || event.keyCode === 13 || event.key === 'Enter')) {
          event.stopPropagation();
          event.preventDefault();
          _this.handleSubmit(event);
        }
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  AvForm.prototype.getChildContext = function getChildContext() {
    var _this3 = this;

    return {
      FormCtrl: {
        getDefaultValue: this.getDefaultValue.bind(this),
        getInputState: this.getInputState.bind(this),
        getInput: function getInput(name) {
          return _this3._inputs[name];
        },
        getInputValue: this.getValue.bind(this),
        getValues: this.getValues.bind(this),
        hasError: this.hasError.bind(this),
        isDirty: this.isDirty.bind(this),
        isTouched: this.isTouched.bind(this),
        isBad: this.isBad.bind(this),
        isDisabled: function isDisabled() {
          return _this3.props.disabled;
        },
        isReadOnly: function isReadOnly() {
          return _this3.props.readOnly;
        },
        setDirty: this.setDirty.bind(this),
        setTouched: this.setTouched.bind(this),
        setBad: this.setBad.bind(this),
        register: this.registerInput.bind(this),
        unregister: this.unregisterInput.bind(this),
        validate: this.validateInput.bind(this),
        getValidationEvent: function getValidationEvent() {
          return _this3.props.validationEvent;
        },
        parent: this.context.FormCtrl || null
      }
    };
  };

  AvForm.prototype.componentWillUnmount = function componentWillUnmount() {
    this._isMounted = false;
  };

  AvForm.prototype.componentWillMount = function componentWillMount() {
    this._isMounted = true;
    _InputContainer.prototype.componentWillMount.call(this);

    this._validators = {};
  };

  AvForm.prototype.registerInput = function registerInput(input, updater) {
    _InputContainer.prototype.registerInput.call(this, input, updater);

    if ((0, _typeof3.default)(input.validations) === 'object') {
      this._validators[input.props.name] = this.compileValidationRules(input, input.validations);
    }
  };

  AvForm.prototype.unregisterInput = function unregisterInput(input) {
    _InputContainer.prototype.unregisterInput.call(this, input);

    delete this._validators[input.props.name];
    this.setError(input.props.name, false);
    this.setDirty(input.props.name, false);
    this.setTouched(input.props.name, false);
    this.setBad(input.props.name, false);
  };

  AvForm.prototype.render = function render() {
    var _props = this.props,
        Tag = _props.tag,
        omit1 = _props.errorMessage,
        omit2 = _props.model,
        omit3 = _props.onValidSubmit,
        omit4 = _props.onInvalidSubmit,
        omit5 = _props.validate,
        omit6 = _props.validateOne,
        omit7 = _props.validateAll,
        omit8 = _props.validationEvent,
        omit9 = _props.disabled,
        omit10 = _props.readOnly,
        omit11 = _props.beforeSubmitValidation,
        className = _props.className,
        attributes = (0, _objectWithoutProperties3.default)(_props, ['tag', 'errorMessage', 'model', 'onValidSubmit', 'onInvalidSubmit', 'validate', 'validateOne', 'validateAll', 'validationEvent', 'disabled', 'readOnly', 'beforeSubmitValidation', 'className']);


    var classes = (0, _classnames2.default)(className, this.state.submitted ? 'av-submitted' : false, (0, _keys2.default)(this.state.invalidInputs).length > 0 ? 'av-invalid' : 'av-valid');

    if (Tag !== 'form' && Tag !== _reactstrap__default['default'].Form) {
      attributes.onKeyDown = this.handleNonFormSubmission;
    }

    return _react2.default.createElement(Tag, (0, _extends3.default)({ noValidate: true,
      action: '#'
    }, attributes, {
      className: classes,
      onSubmit: this.handleSubmit
    }));
  };

  AvForm.prototype.getValues = function getValues() {
    var _this4 = this;

    return (0, _keys2.default)(this._inputs).reduce(function (values, inputName) {
      (0, _set3.default)(values, inputName, _this4.getValue(inputName));

      return values;
    }, {});
  };

  AvForm.prototype.submit = function submit() {
    this.handleSubmit.apply(this, arguments);
  };

  AvForm.prototype.reset = function reset() {
    var _this5 = this;

    (0, _keys2.default)(this._inputs).forEach(function (inputName) {
      return _this5._inputs[inputName] && _this5._inputs[inputName].reset();
    });
  };

  AvForm.prototype.updateInputs = function updateInputs() {
    var _this6 = this;

    if (this.throttledUpdateInputs) {
      this.throttledUpdateInputs();
      return;
    }
    // this is just until a more intelligent way to determine which inputs need updated is implemented in v3
    this.throttledUpdateInputs = (0, _throttle3.default)(function () {
      (0, _keys2.default)(_this6._updaters).forEach(function (inputName) {
        return _this6._updaters[inputName] && _this6._inputs[inputName] && _this6._updaters[inputName].call(_this6._inputs[inputName], {});
      });
    }, 250);
    this.updateInputs();
  };

  AvForm.prototype.validateInput = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(name) {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.validateOne(name, this.getValues());

            case 2:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function validateInput(_x2) {
      return _ref3.apply(this, arguments);
    }

    return validateInput;
  }();

  AvForm.prototype.getInputState = function getInputState(inputName) {
    var errorMessage = void 0;
    var error = this.isTouched(inputName) && this.hasError(inputName);
    var color = void 0;

    if (error) {
      errorMessage = this.state.invalidInputs[inputName];
      color = 'danger';
      if (!(0, _isString2.default)(errorMessage)) {
        errorMessage = 'This field is invalid';
      }
    }

    return { color: color, error: error, errorMessage: errorMessage };
  };

  AvForm.prototype.hasError = function hasError(inputName) {
    return inputName ? !!this.state.invalidInputs[inputName] : (0, _keys2.default)(this.state.invalidInputs).length > 0;
  };

  AvForm.prototype.isDirty = function isDirty(inputName) {
    return inputName ? !!this.state.dirtyInputs[inputName] : (0, _keys2.default)(this.state.dirtyInputs).length > 0;
  };

  AvForm.prototype.isTouched = function isTouched(inputName) {
    return inputName ? !!this.state.touchedInputs[inputName] : (0, _keys2.default)(this.state.touchedInputs).length > 0;
  };

  AvForm.prototype.isBad = function isBad(inputName) {
    return inputName ? !!this.state.badInputs[inputName] : (0, _keys2.default)(this.state.badInputs).length > 0;
  };

  AvForm.prototype.setError = function setError(inputName) {
    var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var _this7 = this;

    var errText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : error;
    var update = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    if (error && !(0, _isString2.default)(errText) && typeof errText !== 'boolean') {
      errText = errText + '';
    }
    var changed = false;
    var currentError = this.hasError(inputName);
    var invalidInputs = this.state.invalidInputs;

    if ((invalidInputs[inputName] === undefined && !error || invalidInputs[inputName] === (errText || true)) && error === currentError) return;
    if (error) {
      invalidInputs[inputName] = errText || true;
      changed = true;
    } else {
      delete invalidInputs[inputName];
      changed = true;
    }

    if (!changed) return;

    invalidInputs = (0, _extends3.default)({}, this.state.invalidInputs);
    this.setState({ invalidInputs: invalidInputs }, function () {
      if (update) _this7.updateInputs();
    });
  };

  AvForm.prototype.setDirty = function setDirty(inputs) {
    var _this8 = this;

    var dirty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var update = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var dirtyInputs = this.state.dirtyInputs;
    var changed = false;
    if (!Array.isArray(inputs)) {
      inputs = [inputs];
    }
    inputs.forEach(function (inputName) {
      if (dirty && !dirtyInputs[inputName]) {
        dirtyInputs[inputName] = true;
        changed = true;
      } else if (!dirty && dirtyInputs[inputName]) {
        delete dirtyInputs[inputName];
        changed = true;
      }
    });

    if (!changed) return;

    dirtyInputs = (0, _extends3.default)({}, this.state.dirtyInputs);
    this.setState({ dirtyInputs: dirtyInputs }, function () {
      if (update) _this8.updateInputs();
    });
  };

  AvForm.prototype.setTouched = function setTouched(inputs) {
    var _this9 = this;

    var touched = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var update = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var touchedInputs = this.state.touchedInputs;
    var changed = false;
    if (!Array.isArray(inputs)) {
      inputs = [inputs];
    }
    inputs.forEach(function (inputName) {
      if (touched && !touchedInputs[inputName]) {
        touchedInputs[inputName] = true;
        changed = true;
      } else if (!touched && touchedInputs[inputName]) {
        delete touchedInputs[inputName];
        changed = true;
      }
    });

    if (!changed) return;

    touchedInputs = (0, _extends3.default)({}, this.state.touchedInputs);
    this.setState({ touchedInputs: touchedInputs }, function () {
      if (update) _this9.updateInputs();
    });
  };

  AvForm.prototype.setBad = function setBad(inputs) {
    var _this10 = this;

    var isBad = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var update = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var badInputs = this.state.badInputs;
    var changed = false;
    if (!Array.isArray(inputs)) {
      inputs = [inputs];
    }
    inputs.forEach(function (inputName) {
      if (isBad && !badInputs[inputName]) {
        badInputs[inputName] = true;
        changed = true;
      } else if (!isBad && badInputs[inputName]) {
        delete badInputs[inputName];
        changed = true;
      }
    });

    if (!changed) return;

    badInputs = (0, _extends3.default)({}, this.state.badInputs);
    this.setState({ badInputs: badInputs }, function () {
      if (update) _this10.updateInputs();
    });
  };

  AvForm.prototype.validateOne = function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(inputName, context) {
      var update = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var input, value, validate, isValid, result, error;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              input = this._inputs[inputName];

              if (!Array.isArray(input)) {
                _context3.next = 3;
                break;
              }

              throw new Error('Multiple inputs cannot use the same name: "' + inputName + '"');

            case 3:
              value = (0, _get3.default)(context, inputName);
              validate = input.validations;
              isValid = true;
              result = void 0;
              error = void 0;

              if (!(typeof validate === 'function')) {
                _context3.next = 14;
                break;
              }

              _context3.next = 11;
              return validate(value, context, input);

            case 11:
              result = _context3.sent;
              _context3.next = 21;
              break;

            case 14:
              if (!((typeof validate === 'undefined' ? 'undefined' : (0, _typeof3.default)(validate)) === 'object')) {
                _context3.next = 20;
                break;
              }

              _context3.next = 17;
              return this._validators[inputName](value, context);

            case 17:
              result = _context3.sent;
              _context3.next = 21;
              break;

            case 20:
              result = true;

            case 21:

              if (result !== true) {
                isValid = false;

                if ((0, _isString2.default)(result)) {
                  error = result;
                }
              }

              this.setError(inputName, !isValid, error, update);

              return _context3.abrupt('return', isValid);

            case 24:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function validateOne(_x12, _x13) {
      return _ref4.apply(this, arguments);
    }

    return validateOne;
  }();

  AvForm.prototype.validateAll = function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(context) {
      var update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var errors, isValid, inputName, valid, formLevelValidation;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              errors = [];
              isValid = true;
              _context4.t0 = _regenerator2.default.keys(this._inputs);

            case 3:
              if ((_context4.t1 = _context4.t0()).done) {
                _context4.next = 12;
                break;
              }

              inputName = _context4.t1.value;

              if (!this._inputs.hasOwnProperty(inputName)) {
                _context4.next = 10;
                break;
              }

              _context4.next = 8;
              return this.validateOne(inputName, context, update);

            case 8:
              valid = _context4.sent;

              if (!valid) {
                isValid = false;
                errors.push(inputName);
              }

            case 10:
              _context4.next = 3;
              break;

            case 12:

              if (this.props.validate) {
                formLevelValidation = this.props.validate;

                if (!Array.isArray(formLevelValidation)) {
                  formLevelValidation = [formLevelValidation];
                }

                if (!formLevelValidation.every(function (validationFn) {
                  return validationFn(context);
                })) {
                  isValid = false;
                  errors.push('*');
                }
              }

              return _context4.abrupt('return', {
                isValid: isValid,
                errors: errors
              });

            case 14:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function validateAll(_x15) {
      return _ref5.apply(this, arguments);
    }

    return validateAll;
  }();

  AvForm.prototype.compileValidationRules = function compileValidationRules(input, ruleProp) {
    var _this11 = this;

    return function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(val, context) {
        var result, validations, _loop, rule;

        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!_this11.isBad(input.props.name)) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt('return', false);

              case 2:
                result = true;
                validations = [];

                _loop = function _loop(rule) {
                  /* istanbul ignore else  */
                  if (ruleProp.hasOwnProperty(rule)) {
                    var ruleResult = void 0;

                    var promise = new _promise2.default(function (resolve, reject) {
                      var callback = function callback(value) {
                        return resolve({ value: value, rule: rule });
                      };

                      if (typeof ruleProp[rule] === 'function') {
                        ruleResult = ruleProp[rule](val, context, input, callback);
                      } else {
                        if (typeof _AvValidator2.default[rule] !== 'function') {
                          return reject(new Error('Invalid input validation rule: "' + rule + '"'));
                        }

                        if (ruleProp[rule].enabled === false) {
                          ruleResult = true;
                        } else {
                          ruleResult = _AvValidator2.default[rule](val, context, ruleProp[rule], input, callback);
                        }
                      }

                      if (ruleResult && typeof ruleResult.then === 'function') {
                        ruleResult.then(callback);
                      } else if (ruleResult !== undefined) {
                        callback(ruleResult);
                      } else ;
                    });

                    validations.push(promise);
                  }
                };

                for (rule in ruleProp) {
                  _loop(rule);
                }

                _context5.next = 8;
                return _promise2.default.all(validations).then(function (results) {
                  results.every(function (ruleResult) {
                    if (result === true && ruleResult.value !== true) {
                      result = (0, _isString2.default)(ruleResult.value) && ruleResult.value || getInputErrorMessage(input, ruleResult.rule) || getInputErrorMessage(_this11, ruleResult.rule) || false;
                    }
                    return result === true;
                  });
                });

              case 8:
                return _context5.abrupt('return', result);

              case 9:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this11);
      }));

      return function (_x17, _x18) {
        return _ref6.apply(this, arguments);
      };
    }();
  };

  AvForm.prototype.getDefaultValue = function getDefaultValue(inputName) {
    return (0, _get3.default)(this.props.model, inputName);
  };

  AvForm.prototype.getValue = function getValue(inputName) {
    var input = this._inputs[inputName];

    if (!input) return undefined;

    if (Array.isArray(input)) {
      throw new Error('Multiple inputs cannot use the same name: "' + inputName + '"');
    }

    return input.getValue();
  };

  return AvForm;
}(_AvInputContainer2.default);

AvForm.childContextTypes = {
  FormCtrl: _propTypes2.default.object.isRequired
};
AvForm.contextTypes = {
  FormCtrl: _propTypes2.default.object
};
AvForm.propTypes = {
  tag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  className: _propTypes2.default.string,
  model: _propTypes2.default.object,
  method: _propTypes2.default.oneOf(['get', 'post']),
  onSubmit: _propTypes2.default.func,
  beforeSubmitValidation: _propTypes2.default.func,
  validate: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.array]),
  onValidSubmit: _propTypes2.default.func,
  onInvalidSubmit: _propTypes2.default.func,
  validationEvent: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['onInput', 'onChange', 'onBlur', 'onFocus']), _propTypes2.default.arrayOf(_propTypes2.default.oneOf(['onInput', 'onChange', 'onBlur', 'onFocus']))]),
  errorMessage: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string, _propTypes2.default.node]),
  disabled: _propTypes2.default.bool,
  readOnly: _propTypes2.default.bool
};
AvForm.defaultProps = {
  tag: _reactstrap__default['default'].Form,
  model: {},
  validationEvent: ['onChange', 'onInput'],
  method: 'get',
  onSubmit: function onSubmit() {},
  onKeyDown: function onKeyDown() {},
  onValidSubmit: function onValidSubmit() {},
  onInvalidSubmit: function onInvalidSubmit() {}
};
exports.default = AvForm;
});

var AvForm = /*@__PURE__*/getDefaultExportFromCjs(AvForm_1);

var AvBaseInput_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _assign2 = _interopRequireDefault(_assign__default['default']);



var _extends3 = _interopRequireDefault(_extends2__default['default']);



var _keys2 = _interopRequireDefault(_keys__default['default']);



var _classCallCheck3 = _interopRequireDefault(_classCallCheck2__default['default']);



var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2__default['default']);



var _inherits3 = _interopRequireDefault(_inherits2__default['default']);





var _propTypes2 = _interopRequireDefault(_propTypes__default['default']);



var _isUndefined2 = _interopRequireDefault(_isUndefined__default['default']);



var _isEqual2 = _interopRequireDefault(_isEqual__default['default']);



var _get2 = _interopRequireDefault(_get__default['default']);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var htmlValidationAttrs = ['min', 'max', 'minLength', 'maxLength', 'pattern', 'required', 'step'];

var htmlValidationTypes = ['email', 'date', 'datetime', 'number', 'tel', 'url'];

var AvBaseInput = function (_Component) {
  (0, _inherits3.default)(AvBaseInput, _Component);

  function AvBaseInput(props) {
    (0, _classCallCheck3.default)(this, AvBaseInput);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = { value: _this.props.multiple ? [] : '' };
    _this.validations = {};
    _this.value = '';
    _this.onKeyUpHandler = _this.onKeyUpHandler.bind(_this);
    _this.onInputHandler = _this.onInputHandler.bind(_this);
    _this.onBlurHandler = _this.onBlurHandler.bind(_this);
    _this.onFocusHandler = _this.onFocusHandler.bind(_this);
    _this.onChangeHandler = _this.onChangeHandler.bind(_this);
    _this.validate = _this.validate.bind(_this);
    return _this;
  }

  AvBaseInput.prototype.componentWillMount = function componentWillMount() {
    this.value = this.props.value || this.getDefaultValue();
    this.setState({ value: this.value });
    this.updateValidations();
  };

  AvBaseInput.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.name !== this.props.name) {
      this.context.FormCtrl.unregister(this);
    }
    if (nextProps.type === 'checkbox') {
      if (nextProps.checked !== this.props.checked) {
        if (nextProps.checked) {
          this.value = nextProps.trueValue;
        } else {
          this.value = nextProps.falseValue;
        }
        this.setState({ value: this.value });
      }
    } else {
      if (nextProps.multiple !== this.props.multiple) {
        this.value = nextProps.multiple ? [] : '';
        this.setState({ value: this.value });
      }
      if (nextProps.value !== this.props.value) {
        this.value = nextProps.value;
        this.setState({ value: nextProps.value });
      }
    }

    if (!(0, _isEqual2.default)(nextProps, this.props)) {
      this.updateValidations(nextProps);
    }
  };

  AvBaseInput.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      this.context.FormCtrl.register(this);
    }
  };

  AvBaseInput.prototype.componentWillUnmount = function componentWillUnmount() {
    this.context.FormCtrl.unregister(this);
  };

  AvBaseInput.prototype.onKeyUpHandler = function onKeyUpHandler(event) {
    var badInput = (0, _get2.default)(event, 'target.validity.badInput', false);
    if (badInput !== this.context.FormCtrl.isBad(this.props.name)) {
      this.context.FormCtrl.setBad(this.props.name, badInput);
      this.validate();
    }
    this.props.onKeyUp && this.props.onKeyUp(event);
  };

  AvBaseInput.prototype.onInputHandler = function onInputHandler(_value) {
    this.value = this.getFieldValue(_value);
    this.validateEvent('onInput', _value);
    !this.context.FormCtrl.isDirty(this.props.name) && this.context.FormCtrl.setDirty(this.props.name);
  };

  AvBaseInput.prototype.onBlurHandler = function onBlurHandler(_value) {
    this.value = this.getFieldValue(_value);
    this.validateEvent('onBlur', _value);
    !this.context.FormCtrl.isTouched(this.props.name) && this.context.FormCtrl.setTouched(this.props.name);
  };

  AvBaseInput.prototype.onFocusHandler = function onFocusHandler(_value) {
    this.value = this.getFieldValue(_value);
    this.validateEvent('onFocus', _value);
  };

  AvBaseInput.prototype.onChangeHandler = function onChangeHandler(_value) {
    this.value = this.getFieldValue(_value);
    this.validateEvent('onChange', _value);
    !this.context.FormCtrl.isDirty(this.props.name) && this.context.FormCtrl.setDirty(this.props.name);
  };

  AvBaseInput.prototype.getDefaultValue = function getDefaultValue() {
    var defaultValue = '';

    if (this.props.type === 'checkbox') {
      if (!(0, _isUndefined2.default)(this.props.defaultChecked)) {
        return this.props.defaultChecked ? this.props.trueValue : this.props.falseValue;
      }
      defaultValue = this.props.falseValue;
    }

    if (this.props.type === 'select' && this.props.multiple) {
      defaultValue = [];
    }

    var value = this.props.defaultValue || this.context.FormCtrl.getDefaultValue(this.props.name);

    if (this.props.type === 'checkbox' && value !== this.props.trueValue) {
      value = defaultValue;
    }

    return (0, _isUndefined2.default)(value) ? defaultValue : value;
  };

  AvBaseInput.prototype.getFieldValue = function getFieldValue(event) {
    if (this.props.type === 'checkbox') {
      return event.target.checked ? this.props.trueValue : this.props.falseValue;
    }

    if (this.props.type === 'select' && this.props.multiple) {
      /* // Something about this does not work when transpiled
      return [...event.target.options]
        .filter(({ selected }) => selected)
        .map(({ value }) => value); */
      var ret = [];
      var options = event.target.options;
      for (var i = 0; i < options.length; i++) {
        if (options[i].selected) {
          ret.push(options[i].value);
        }
      }
      return ret;
    }
    return event && event.target && !(0, _isUndefined2.default)(event.target.value) ? event.target.value : event;
  };

  AvBaseInput.prototype.getValidationEvent = function getValidationEvent() {
    var validationEvent = this.props.validationEvent ? this.props.validationEvent : this.context.FormCtrl.getValidationEvent();
    return Array.isArray(validationEvent) ? validationEvent : [validationEvent];
  };

  AvBaseInput.prototype.getValidatorProps = function getValidatorProps() {
    var _this2 = this;

    var validatity = this.context.FormCtrl.getInputState(this.props.name);
    var htmlValAttrs = (0, _keys2.default)(this.props.validate || {}).filter(function (val) {
      return htmlValidationAttrs.indexOf(val) > -1;
    }).reduce(function (result, item) {
      result[item] = _this2.props.validate[item].value || _this2.props.validate[item];
      return result;
    }, {});

    var newProps = (0, _extends3.default)({
      onKeyUp: this.onKeyUpHandler,
      onBlur: this.onBlurHandler,
      onInput: this.onInputHandler,
      onFocus: this.onFocusHandler,
      onChange: this.onChangeHandler,
      value: this.value
    }, htmlValAttrs);

    if (this.props.disabled === undefined && this.context.FormCtrl.isDisabled() !== undefined) {
      newProps.disabled = this.context.FormCtrl.isDisabled();
    }

    if (this.props.readOnly === undefined && this.context.FormCtrl.isReadOnly() !== undefined) {
      newProps.readOnly = this.context.FormCtrl.isReadOnly();
    }

    if (this.props.type === 'checkbox') {
      newProps.checked = this.value === this.props.trueValue;
    }

    if (this.props.state || validatity && validatity.errorMessage) {
      newProps.valid = !(validatity && validatity.errorMessage);
    }

    return newProps;
  };

  AvBaseInput.prototype.getValue = function getValue() {
    return this.value;
  };

  AvBaseInput.prototype.reset = function reset() {
    this.value = this.getDefaultValue();
    this.context.FormCtrl.setDirty(this.props.name, false);
    this.context.FormCtrl.setTouched(this.props.name, false);
    this.context.FormCtrl.setBad(this.props.name, false);
    this.setState({ value: this.value });
    this.validate();
    this.props.onReset && this.props.onReset(this.value);
  };

  AvBaseInput.prototype.validateEvent = function validateEvent(eventName, _event) {
    this.setState({ value: this.value });
    if (this.getValidationEvent().indexOf(eventName) > -1) {
      this.validate();
    }
    this.props[eventName] && this.props[eventName](_event, this.value);
  };

  AvBaseInput.prototype.validate = function validate() {
    this.context.FormCtrl.validate(this.props.name);
  };

  AvBaseInput.prototype.updateValidations = function updateValidations() {
    var _this3 = this;

    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

    this.validations = (0, _assign2.default)({}, props.validate);

    if (htmlValidationTypes.indexOf(props.type) > -1) {
      this.validations[props.type] = this.validations[props.type] || true;
    }

    (0, _keys2.default)(props).filter(function (val) {
      return htmlValidationAttrs.indexOf(val) > -1;
    }).forEach(function (attr) {
      if (props[attr]) {
        _this3.validations[attr] = _this3.validations[attr] || {
          value: props[attr]
        };
      } else {
        delete _this3.validations[attr];
      }
    });

    this.context.FormCtrl && this.context.FormCtrl.register(this);
    this.validate();
  };

  return AvBaseInput;
}(React__default['default'].Component);

AvBaseInput.propTypes = {
  name: _propTypes2.default.string.isRequired,
  validationEvent: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['', 'onInput', 'onChange', 'onBlur', 'onFocus']), _propTypes2.default.arrayOf(_propTypes2.default.oneOf(['onInput', 'onChange', 'onBlur', 'onFocus']))]),
  validate: _propTypes2.default.object,
  value: _propTypes2.default.any,
  defaultValue: _propTypes2.default.any,
  trueValue: _propTypes2.default.any,
  falseValue: _propTypes2.default.any,
  checked: _propTypes2.default.bool,
  defaultChecked: _propTypes2.default.bool,
  state: _propTypes2.default.bool,
  type: _propTypes2.default.string,
  multiple: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  readOnly: _propTypes2.default.bool,
  onKeyUp: _propTypes2.default.func,
  onInput: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onReset: _propTypes2.default.func
};
AvBaseInput.contextTypes = {
  FormCtrl: _propTypes2.default.object.isRequired
};
AvBaseInput.defaultProps = {
  validationEvent: '',
  validate: {},
  trueValue: true,
  falseValue: false
};
exports.default = AvBaseInput;
});

var AvInput_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _assign2 = _interopRequireDefault(_assign__default['default']);



var _extends3 = _interopRequireDefault(_extends2__default['default']);



var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2__default['default']);



var _classCallCheck3 = _interopRequireDefault(_classCallCheck2__default['default']);



var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2__default['default']);



var _inherits3 = _interopRequireDefault(_inherits2__default['default']);



var _react2 = _interopRequireDefault(React__default['default']);



var _classnames2 = _interopRequireDefault(_classnames__default['default']);





var _AvBaseInput3 = _interopRequireDefault(AvBaseInput_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AvInput = function (_AvBaseInput) {
  (0, _inherits3.default)(AvInput, _AvBaseInput);

  function AvInput() {
    (0, _classCallCheck3.default)(this, AvInput);
    return (0, _possibleConstructorReturn3.default)(this, _AvBaseInput.apply(this, arguments));
  }

  AvInput.prototype.getValue = function getValue() {
    return this.props.valueParser ? this.props.valueParser(this.value) : this.value;
  };

  AvInput.prototype.getViewValue = function getViewValue() {
    return this.props.valueFormatter ? this.props.valueFormatter(this.value) : this.value;
  };

  AvInput.prototype.render = function render() {
    var _props = this.props,
        omit1 = _props.errorMessage,
        omit2 = _props.validate,
        omit3 = _props.validationEvent,
        omit4 = _props.state,
        omit5 = _props.trueValue,
        omit6 = _props.falseValue,
        omit7 = _props.valueParser,
        omit8 = _props.valueFormatter,
        className = _props.className,
        tag = _props.tag,
        getRef = _props.getRef,
        _props$id = _props.id,
        id = _props$id === undefined ? this.props.name : _props$id,
        attributes = (0, _objectWithoutProperties3.default)(_props, ['errorMessage', 'validate', 'validationEvent', 'state', 'trueValue', 'falseValue', 'valueParser', 'valueFormatter', 'className', 'tag', 'getRef', 'id']);


    var touched = this.context.FormCtrl.isTouched(this.props.name);
    var hasError = this.context.FormCtrl.hasError(this.props.name);
    var Tag = tag;

    if (Array.isArray(tag)) {
      var tags = void 0;
      Tag = tag[0];
      tags = tag.slice(1);

      attributes.tag = tags;
      if (attributes.tag.length <= 1) {
        attributes.tag = attributes.tag[0];
      }
    }

    var classes = (0, _classnames2.default)(className, touched ? 'is-touched' : 'is-untouched', this.context.FormCtrl.isDirty(this.props.name) ? 'is-dirty' : 'is-pristine', this.context.FormCtrl.isBad(this.props.name) ? 'is-bad-input' : null, hasError ? 'av-invalid' : 'av-valid', touched && hasError && 'is-invalid', attributes.type === 'checkbox' && touched && hasError && 'was-validated');

    var value = this.getViewValue();

    return _react2.default.createElement(Tag, (0, _extends3.default)({}, attributes, {
      ref: getRef
    }, this.getValidatorProps(), {
      className: classes,
      value: value,
      id: id
    }));
  };

  return AvInput;
}(_AvBaseInput3.default);

AvInput.defaultProps = (0, _assign2.default)({}, _AvBaseInput3.default.defaultProps, {
  tag: _reactstrap__default['default'].Input
});
AvInput.contextTypes = _AvBaseInput3.default.contextTypes;
exports.default = AvInput;
});

var AvCheckbox_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _extends3 = _interopRequireDefault(_extends2__default['default']);



var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2__default['default']);



var _classCallCheck3 = _interopRequireDefault(_classCallCheck2__default['default']);



var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2__default['default']);



var _inherits3 = _interopRequireDefault(_inherits2__default['default']);



var _assign2 = _interopRequireDefault(_assign__default['default']);



var _react2 = _interopRequireDefault(React__default['default']);



var _propTypes2 = _interopRequireDefault(_propTypes__default['default']);



var _classnames2 = _interopRequireDefault(_classnames__default['default']);



var _find2 = _interopRequireDefault(_find__default['default']);





var _AvInput2 = _interopRequireDefault(AvInput_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkPropTypes = (0, _assign2.default)({}, _AvInput2.default.propTypes, { customInput: _propTypes2.default.bool });
delete checkPropTypes.name;

var AvCheckbox = function (_Component) {
  (0, _inherits3.default)(AvCheckbox, _Component);

  function AvCheckbox() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AvCheckbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  AvCheckbox.prototype.componentDidMount = function componentDidMount() {
    this.context.FormCtrl && this.context.FormCtrl.register(this);
  };

  AvCheckbox.prototype.componentWillUnmount = function componentWillUnmount() {
    this.context.FormCtrl && this.context.FormCtrl.unregister(this);
  };

  AvCheckbox.prototype.isDefaultChecked = function isDefaultChecked(valueArr) {
    var _this2 = this;

    return Array.isArray(valueArr) && valueArr.length > 0 && (0, _find2.default)(valueArr, function (item) {
      return item === _this2.props.value;
    });
  };

  AvCheckbox.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        id = _props.id,
        customInput = _props.customInput,
        attributes = (0, _objectWithoutProperties3.default)(_props, ['className', 'id', 'customInput']);


    var groupProps = this.context.Group.getProps();

    var touched = this.context.FormCtrl.isTouched(groupProps.name);
    var hasError = this.context.FormCtrl.hasError(groupProps.name);

    var classes = (0, _classnames2.default)(className, touched ? 'is-touched' : 'is-untouched', this.context.FormCtrl.isDirty(groupProps.name) ? 'is-dirty' : 'is-pristine', this.context.FormCtrl.isBad(groupProps.name) ? 'is-bad-input' : null, hasError ? 'av-invalid' : 'av-valid', touched && hasError && 'is-invalid');

    if (this.props.disabled === undefined && this.context.FormCtrl.isDisabled() !== undefined) {
      attributes.disabled = this.context.FormCtrl.isDisabled();
    }

    if (this.props.readOnly === undefined && this.context.FormCtrl.isReadOnly() !== undefined) {
      attributes.disabled = attributes.disabled || this.context.FormCtrl.isReadOnly();
    }

    if (customInput) {
      return _react2.default.createElement(_reactstrap__default['default'].CustomInput, (0, _extends3.default)({
        name: groupProps.name,
        type: 'checkbox'
      }, attributes, {
        inline: groupProps.inline,
        id: id || 'checkbox-' + groupProps.name + '-' + this.props.value,
        className: classes,
        onChange: this.onChangeHandler,
        value: this.props.value && this.props.value.toString(),
        defaultChecked: this.isDefaultChecked(groupProps.value),
        required: groupProps.required,
        label: this.props.label
      }));
    }

    return _react2.default.createElement(
      _reactstrap__default['default'].FormGroup,
      { check: true, inline: groupProps.inline, disabled: attributes.disabled || attributes.readOnly },
      _react2.default.createElement(_reactstrap__default['default'].Input, (0, _extends3.default)({
        name: groupProps.name,
        type: 'checkbox'
      }, attributes, {
        id: id || 'checkbox-' + groupProps.name + '-' + this.props.value,
        className: classes,
        onChange: this.onChangeHandler,
        value: this.props.value && this.props.value.toString(),
        defaultChecked: this.isDefaultChecked(groupProps.value),
        required: groupProps.required
      })),
      _react2.default.createElement(
        _reactstrap__default['default'].Label,
        { check: true, 'for': id || 'checkbox-' + groupProps.name + '-' + this.props.value },
        this.props.label
      )
    );
  };

  return AvCheckbox;
}(React__default['default'].Component);

AvCheckbox.contextTypes = (0, _assign2.default)({}, _AvInput2.default.contextTypes, {
  Group: _propTypes2.default.object.isRequired
});
AvCheckbox.propTypes = checkPropTypes;

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onChangeHandler = function (event) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    _this3.context.Group.update(event, _this3.props.value);
    if (_this3.props.onChange) {
      var _props2;

      (_props2 = _this3.props).onChange.apply(_props2, [event].concat(args));
    }
  };
};

exports.default = AvCheckbox;
});

var AvFeedback_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _assign2 = _interopRequireDefault(_assign__default['default']);



var _extends3 = _interopRequireDefault(_extends2__default['default']);



var _classCallCheck3 = _interopRequireDefault(_classCallCheck2__default['default']);



var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2__default['default']);



var _inherits3 = _interopRequireDefault(_inherits2__default['default']);



var _react2 = _interopRequireDefault(React__default['default']);



var _propTypes2 = _interopRequireDefault(_propTypes__default['default']);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AvFeedback = function (_Component) {
  (0, _inherits3.default)(AvFeedback, _Component);

  function AvFeedback() {
    (0, _classCallCheck3.default)(this, AvFeedback);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  AvFeedback.prototype.render = function render() {
    var validation = this.context.Group.getInputState();
    return _react2.default.createElement(_reactstrap__default['default'].FormFeedback, (0, _extends3.default)({ valid: !validation.error }, this.props));
  };

  return AvFeedback;
}(React__default['default'].Component);

AvFeedback.propTypes = (0, _assign2.default)({}, _reactstrap__default['default'].FormFeedback.propTypes);
AvFeedback.contextTypes = {
  FormCtrl: _propTypes2.default.object.isRequired,
  Group: _propTypes2.default.object.isRequired
};
exports.default = AvFeedback;
});

var AvCheckboxGroup_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2__default['default']);



var _keys2 = _interopRequireDefault(_keys__default['default']);



var _assign2 = _interopRequireDefault(_assign__default['default']);



var _regenerator2 = _interopRequireDefault(_regenerator__default['default']);



var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2__default['default']);



var _extends3 = _interopRequireDefault(_extends2__default['default']);



var _classCallCheck3 = _interopRequireDefault(_classCallCheck2__default['default']);



var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2__default['default']);



var _inherits3 = _interopRequireDefault(_inherits2__default['default']);



var _react2 = _interopRequireDefault(React__default['default']);





var _propTypes2 = _interopRequireDefault(_propTypes__default['default']);



var _isEqual2 = _interopRequireDefault(_isEqual__default['default']);



var _isUndefined2 = _interopRequireDefault(_isUndefined__default['default']);





var _classnames2 = _interopRequireDefault(_classnames__default['default']);



var _AvFeedback2 = _interopRequireDefault(AvFeedback_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var htmlValidationAttrs = ['required'];

var noop = function noop() {};

var AvCheckboxGroup = function (_Component) {
  (0, _inherits3.default)(AvCheckboxGroup, _Component);

  function AvCheckboxGroup() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AvCheckboxGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      invalidInputs: {},
      dirtyInputs: {},
      touchedInputs: {},
      badInputs: {},
      validate: {},
      value: []
    }, _this._inputs = [], _this.value = [], _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  AvCheckboxGroup.prototype.getChildContext = function getChildContext() {
    var _this2 = this;

    if (!this.FormCtrl) {
      this.FormCtrl = (0, _extends3.default)({}, this.context.FormCtrl);
      this.FormCtrl.register = this.registerInput.bind(this);
      this.FormCtrl.unregister = this.unregisterInput.bind(this);
      this.FormCtrl.validate = noop;
    }

    var updateGroup = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e, value) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (e.target.checked) {
                  _this2.value.push(value);
                } else {
                  _this2.value = _this2.value.filter(function (item) {
                    return item !== value;
                  });
                }

                _this2.setState({ value: _this2.value });

                _context.next = 4;
                return _this2.validate();

              case 4:
                !_this2.context.FormCtrl.isTouched(_this2.props.name) && _this2.context.FormCtrl.setTouched(_this2.props.name);
                !_this2.context.FormCtrl.isDirty(_this2.props.name) && _this2.context.FormCtrl.setDirty(_this2.props.name);
                _this2.props.onChange && _this2.props.onChange(e, _this2.value);

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function updateGroup(_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();

    return {
      Group: {
        getProps: function getProps() {
          return {
            name: _this2.props.name,
            inline: _this2.props.inline,
            required: _this2.props.required || !!(_this2.validations.required && _this2.validations.required.value),
            value: _this2.value
          };
        },
        update: updateGroup,
        getValue: function getValue() {
          return _this2.value;
        },
        getInputState: this.getInputState.bind(this)
      },
      FormCtrl: this.FormCtrl
    };
  };

  AvCheckboxGroup.prototype.componentWillMount = function componentWillMount() {
    this.value = this.props.value || this.getDefaultValue().value;
    this.setState({ value: this.value });
    this.updateValidations();
  };

  AvCheckboxGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.name !== this.props.name) {
      this.context.FormCtrl.unregister(this);
    }
    if (nextProps.value !== this.props.value) {
      this.value = nextProps.value;
      this.setState({ value: nextProps.value });
    }
    if (!(0, _isEqual2.default)(nextProps, this.props)) {
      this.updateValidations(nextProps);
    }
  };

  AvCheckboxGroup.prototype.componentWillUnmount = function componentWillUnmount() {
    this.context.FormCtrl.unregister(this);
  };

  AvCheckboxGroup.prototype.getValue = function getValue() {
    return this.value;
  };

  AvCheckboxGroup.prototype.getInputState = function getInputState() {
    return this.context.FormCtrl.getInputState(this.props.name);
  };

  AvCheckboxGroup.prototype.getDefaultValue = function getDefaultValue() {
    var key = 'defaultValue';

    var value = [];
    if (!(0, _isUndefined2.default)(this.props[key])) {
      value = this.props[key];
    } else if (!(0, _isUndefined2.default)(this.context.FormCtrl.getDefaultValue(this.props.name))) {
      value = this.context.FormCtrl.getDefaultValue(this.props.name);
    }

    return { key: key, value: value };
  };

  AvCheckboxGroup.prototype.validate = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.context.FormCtrl.validate(this.props.name);

            case 2:
              this.updateInputs();

            case 3:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function validate() {
      return _ref2.apply(this, arguments);
    }

    return validate;
  }();

  AvCheckboxGroup.prototype.update = function update() {
    this.setState({});
    this.updateInputs();
  };

  AvCheckboxGroup.prototype.updateValidations = function updateValidations() {
    var _this3 = this;

    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

    this.validations = (0, _assign2.default)({}, props.validate);

    (0, _keys2.default)(props).filter(function (val) {
      return htmlValidationAttrs.indexOf(val) > -1;
    }).forEach(function (attr) {
      if (props[attr]) {
        _this3.validations[attr] = _this3.validations[attr] || {
          value: props[attr]
        };
      } else {
        delete _this3.validations[attr];
      }
    });

    this.context.FormCtrl.register(this, this.update.bind(this));
    this.validate();
  };

  AvCheckboxGroup.prototype.updateInputs = function updateInputs() {
    this._inputs.forEach(function (input) {
      return (0, _reactDom__default['default'].findDOMNode)(input).firstChild.setCustomValidity('Invalid.') && input.setState.call(input, {});
    });

    this.setState({});
  };

  AvCheckboxGroup.prototype.reset = function reset() {
    this.value = this.getDefaultValue().value;
    this.context.FormCtrl.setDirty(this.props.name, false);
    this.context.FormCtrl.setTouched(this.props.name, false);
    this.context.FormCtrl.setBad(this.props.name, false);
    this.setState({ value: this.value });
    this.validate();
    this.props.onReset && this.props.onReset(this.value);
  };

  AvCheckboxGroup.prototype.registerInput = function registerInput(input) {
    if (this._inputs.indexOf(input) < 0) {
      this._inputs.push(input);
    }
  };

  AvCheckboxGroup.prototype.unregisterInput = function unregisterInput(input) {
    this._inputs = this._inputs.filter(function (ipt) {
      return ipt !== input;
    });
  };

  AvCheckboxGroup.prototype.render = function render() {
    var legend = this.props.label ? _react2.default.createElement(
      'legend',
      null,
      this.props.label
    ) : '';
    var validation = this.getInputState();
    var _props = this.props,
        omit1 = _props.errorMessage,
        omit2 = _props.validate,
        omit3 = _props.validationEvent,
        omit4 = _props.state,
        omit5 = _props.label,
        omit6 = _props.required,
        omit7 = _props.inline,
        children = _props.children,
        attributes = (0, _objectWithoutProperties3.default)(_props, ['errorMessage', 'validate', 'validationEvent', 'state', 'label', 'required', 'inline', 'children']);


    var touched = this.context.FormCtrl.isTouched(this.props.name);
    var hasError = this.context.FormCtrl.hasError(this.props.name);

    var classes = (0, _classnames2.default)('form-control border-0 p-0 h-auto', touched ? 'is-touched' : 'is-untouched', this.context.FormCtrl.isDirty(this.props.name) ? 'is-dirty' : 'is-pristine', this.context.FormCtrl.isBad(this.props.name) ? 'is-bad-input' : null, hasError ? 'av-invalid' : 'av-valid', touched && hasError && 'is-invalid');

    var groupClass = (0, _classnames2.default)(attributes.className, touched && hasError && 'was-validated');

    return _react2.default.createElement(
      _reactstrap__default['default'].FormGroup,
      (0, _extends3.default)({ tag: 'fieldset' }, attributes, { className: groupClass }),
      legend,
      _react2.default.createElement(
        'div',
        { className: classes },
        children
      ),
      _react2.default.createElement(
        _AvFeedback2.default,
        null,
        validation.errorMessage
      )
    );
  };

  return AvCheckboxGroup;
}(React__default['default'].Component);

AvCheckboxGroup.propTypes = (0, _assign2.default)({}, _reactstrap__default['default'].FormGroup.propTypes, {
  name: _propTypes2.default.string.isRequired
});
AvCheckboxGroup.contextTypes = {
  FormCtrl: _propTypes2.default.object.isRequired
};
AvCheckboxGroup.childContextTypes = {
  Group: _propTypes2.default.object.isRequired,
  FormCtrl: _propTypes2.default.object.isRequired
};
exports.default = AvCheckboxGroup;
});

var AvGroup_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _assign2 = _interopRequireDefault(_assign__default['default']);



var _extends3 = _interopRequireDefault(_extends2__default['default']);



var _classCallCheck3 = _interopRequireDefault(_classCallCheck2__default['default']);



var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2__default['default']);



var _inherits3 = _interopRequireDefault(_inherits2__default['default']);



var _react2 = _interopRequireDefault(React__default['default']);



var _classnames2 = _interopRequireDefault(_classnames__default['default']);



var _propTypes2 = _interopRequireDefault(_propTypes__default['default']);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AvGroup = function (_Component) {
  (0, _inherits3.default)(AvGroup, _Component);

  function AvGroup(props) {
    (0, _classCallCheck3.default)(this, AvGroup);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = { input: { props: {} } };
    return _this;
  }

  AvGroup.prototype.getChildContext = function getChildContext() {
    var _this2 = this;

    this.FormCtrl = (0, _extends3.default)({}, this.context.FormCtrl);
    var registerValidator = this.FormCtrl.register;
    this.FormCtrl.register = function (input) {
      _this2.setState({ input: input });
      registerValidator(input, _this2.update.bind(_this2, input));
    };
    return {
      Group: {
        getInput: function getInput() {
          return _this2.state.input;
        },
        getInputState: this.getInputState.bind(this)
      },
      FormCtrl: this.FormCtrl
    };
  };

  AvGroup.prototype.getInputState = function getInputState() {
    return this.context.FormCtrl.getInputState(this.state.input.props.name);
  };

  AvGroup.prototype.update = function update(input) {
    if (input && input.setState) input.setState.call(input, {});
    this.setState({});
  };

  AvGroup.prototype.render = function render() {
    var validation = this.getInputState();
    var classname = (0, _classnames2.default)(this.props.className, validation.color && 'text-' + validation.color);
    return _react2.default.createElement(_reactstrap__default['default'].FormGroup, (0, _extends3.default)({ className: classname }, this.props));
  };

  return AvGroup;
}(React__default['default'].Component);

AvGroup.propTypes = (0, _assign2.default)({}, _reactstrap__default['default'].FormGroup.propTypes);
AvGroup.contextTypes = {
  FormCtrl: _propTypes2.default.object.isRequired
};
AvGroup.childContextTypes = {
  Group: _propTypes2.default.object.isRequired,
  FormCtrl: _propTypes2.default.object.isRequired
};
exports.default = AvGroup;
});

var AvField_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _assign2 = _interopRequireDefault(_assign__default['default']);



var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2__default['default']);



var _extends3 = _interopRequireDefault(_extends2__default['default']);



var _classCallCheck3 = _interopRequireDefault(_classCallCheck2__default['default']);



var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2__default['default']);



var _inherits3 = _interopRequireDefault(_inherits2__default['default']);



var _react2 = _interopRequireDefault(React__default['default']);



var _propTypes2 = _interopRequireDefault(_propTypes__default['default']);



var _AvInput2 = _interopRequireDefault(AvInput_1);



var _AvGroup2 = _interopRequireDefault(AvGroup_1);



var _AvFeedback2 = _interopRequireDefault(AvFeedback_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var colSizes = ['xs', 'sm', 'md', 'lg', 'xl'];

var AvField = function (_Component) {
  (0, _inherits3.default)(AvField, _Component);

  function AvField() {
    (0, _classCallCheck3.default)(this, AvField);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  AvField.prototype.getChildContext = function getChildContext() {
    var _this2 = this;

    this.FormCtrl = (0, _extends3.default)({}, this.context.FormCtrl);
    var registerValidator = this.FormCtrl.register;
    this.FormCtrl.register = function (input) {
      var updater = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : input && input.setState && input.setState.bind(input);

      registerValidator(input, function () {
        _this2.setState({});
        if (updater) updater({});
      });
    };
    return {
      FormCtrl: this.FormCtrl
    };
  };

  AvField.prototype.render = function render() {
    var row = false;
    var col = {};
    var labelCol = {};
    var _props = this.props,
        helpMessage = _props.helpMessage,
        label = _props.label,
        labelHidden = _props.labelHidden,
        inputClass = _props.inputClass,
        labelClass = _props.labelClass,
        children = _props.children,
        _props$id = _props.id,
        id = _props$id === undefined ? this.props.name : _props$id,
        size = _props.size,
        disabled = _props.disabled,
        readOnly = _props.readOnly,
        grid = _props.grid,
        labelAttrs = _props.labelAttrs,
        groupAttrs = _props.groupAttrs,
        attributes = (0, _objectWithoutProperties3.default)(_props, ['helpMessage', 'label', 'labelHidden', 'inputClass', 'labelClass', 'children', 'id', 'size', 'disabled', 'readOnly', 'grid', 'labelAttrs', 'groupAttrs']);


    if (grid) {
      colSizes.forEach(function (colSize) {
        if (grid[colSize]) {
          row = true;
          var sizeNum = parseInt(grid[colSize], 10);
          col[colSize] = sizeNum;
          labelCol[colSize] = 12 - sizeNum;
        }
      });
    }

    var input = _react2.default.createElement(
      _AvInput2.default,
      (0, _extends3.default)({
        id: id,
        className: inputClass,
        size: size,
        disabled: disabled,
        readOnly: readOnly
      }, attributes),
      children
    );

    var validation = this.context.FormCtrl.getInputState(this.props.name);

    var feedback = validation.errorMessage ? _react2.default.createElement(
      _AvFeedback2.default,
      null,
      validation.errorMessage
    ) : null;
    var help = helpMessage ? _react2.default.createElement(
      _reactstrap__default['default'].FormText,
      null,
      helpMessage
    ) : null;
    var inputRow = row ? _react2.default.createElement(
      _reactstrap__default['default'].Col,
      col,
      input,
      feedback,
      help
    ) : input;
    var check = attributes.type === 'checkbox';

    if ((check || attributes.type === "radio" || attributes.type === "switch") && (attributes.tag === _reactstrap__default['default'].CustomInput || Array.isArray(attributes.tag) && attributes.tag[0] === _reactstrap__default['default'].CustomInput)) {
      return _react2.default.createElement(
        _AvGroup2.default,
        { className: 'mb-0' },
        _react2.default.createElement(
          _AvInput2.default,
          this.props,
          feedback,
          help
        )
      );
    }

    return _react2.default.createElement(
      _AvGroup2.default,
      (0, _extends3.default)({ check: check, disabled: disabled, row: row }, groupAttrs),
      check && inputRow,
      label && _react2.default.createElement(
        _reactstrap__default['default'].Label,
        (0, _extends3.default)({
          'for': id,
          className: labelClass,
          hidden: labelHidden,
          size: size
        }, labelCol, labelAttrs),
        label
      ),
      !check && inputRow,
      !row && feedback,
      !row && help
    );
  };

  return AvField;
}(React__default['default'].Component);

AvField.propTypes = (0, _assign2.default)({}, _AvInput2.default.propTypes, {
  label: _propTypes2.default.node,
  labelHidden: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  readOnly: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  inputClass: _propTypes2.default.string,
  labelClass: _propTypes2.default.string,
  helpMessage: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  errorMessage: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  labelAttrs: _propTypes2.default.object,
  groupAttrs: _propTypes2.default.object,
  grid: _propTypes2.default.object
});
AvField.contextTypes = {
  FormCtrl: _propTypes2.default.object.isRequired
};
AvField.childContextTypes = {
  FormCtrl: _propTypes2.default.object.isRequired
};
exports.default = AvField;
});

var AvRadioGroup_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2__default['default']);



var _keys2 = _interopRequireDefault(_keys__default['default']);



var _assign2 = _interopRequireDefault(_assign__default['default']);



var _regenerator2 = _interopRequireDefault(_regenerator__default['default']);



var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2__default['default']);



var _extends3 = _interopRequireDefault(_extends2__default['default']);



var _classCallCheck3 = _interopRequireDefault(_classCallCheck2__default['default']);



var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2__default['default']);



var _inherits3 = _interopRequireDefault(_inherits2__default['default']);



var _react2 = _interopRequireDefault(React__default['default']);



var _propTypes2 = _interopRequireDefault(_propTypes__default['default']);



var _isEqual2 = _interopRequireDefault(_isEqual__default['default']);



var _isUndefined2 = _interopRequireDefault(_isUndefined__default['default']);





var _classnames2 = _interopRequireDefault(_classnames__default['default']);



var _AvFeedback2 = _interopRequireDefault(AvFeedback_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var htmlValidationAttrs = ['required'];

var noop = function noop() {};

var AvRadioGroup = function (_Component) {
  (0, _inherits3.default)(AvRadioGroup, _Component);

  function AvRadioGroup() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AvRadioGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      invalidInputs: {},
      dirtyInputs: {},
      touchedInputs: {},
      badInputs: {},
      validate: {},
      value: ''
    }, _this._inputs = [], _this.value = '', _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  AvRadioGroup.prototype.getChildContext = function getChildContext() {
    var _this2 = this;

    if (!this.FormCtrl) {
      this.FormCtrl = (0, _extends3.default)({}, this.context.FormCtrl);
      this.FormCtrl.register = this.registerInput.bind(this);
      this.FormCtrl.unregister = this.unregisterInput.bind(this);
      this.FormCtrl.validate = noop;
    }

    var updateGroup = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e, value) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.setState({ value: value });
                _this2.value = value;
                _context.next = 4;
                return _this2.validate();

              case 4:
                !_this2.context.FormCtrl.isTouched(_this2.props.name) && _this2.context.FormCtrl.setTouched(_this2.props.name);
                !_this2.context.FormCtrl.isDirty(_this2.props.name) && _this2.context.FormCtrl.setDirty(_this2.props.name);
                _this2.props.onChange && _this2.props.onChange(e, value);

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function updateGroup(_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();

    return {
      Group: {
        getProps: function getProps() {
          return {
            name: _this2.props.name,
            inline: _this2.props.inline,
            required: _this2.props.required || !!(_this2.validations.required && _this2.validations.required.value),
            value: _this2.value
          };
        },
        update: updateGroup,
        getValue: function getValue() {
          return _this2.value;
        },
        getInputState: this.getInputState.bind(this)
      },
      FormCtrl: this.FormCtrl
    };
  };

  AvRadioGroup.prototype.componentWillMount = function componentWillMount() {
    this.value = this.props.value || this.getDefaultValue().value;
    this.setState({ value: this.value });
    this.updateValidations();
  };

  AvRadioGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.name !== this.props.name) {
      this.context.FormCtrl.unregister(this);
    }
    if (nextProps.value !== this.props.value) {
      this.value = nextProps.value;
      this.setState({ value: nextProps.value });
    }
    if (!(0, _isEqual2.default)(nextProps, this.props)) {
      this.updateValidations(nextProps);
    }
  };

  AvRadioGroup.prototype.componentWillUnmount = function componentWillUnmount() {
    this.context.FormCtrl.unregister(this);
  };

  AvRadioGroup.prototype.getValue = function getValue() {
    return this.value;
  };

  AvRadioGroup.prototype.getInputState = function getInputState() {
    return this.context.FormCtrl.getInputState(this.props.name);
  };

  AvRadioGroup.prototype.getDefaultValue = function getDefaultValue() {
    var key = 'defaultValue';

    var value = '';
    if (!(0, _isUndefined2.default)(this.props[key])) {
      value = this.props[key];
    } else if (!(0, _isUndefined2.default)(this.context.FormCtrl.getDefaultValue(this.props.name))) {
      value = this.context.FormCtrl.getDefaultValue(this.props.name);
    }

    return { key: key, value: value };
  };

  AvRadioGroup.prototype.validate = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.context.FormCtrl.validate(this.props.name);

            case 2:
              this.updateInputs();

            case 3:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function validate() {
      return _ref2.apply(this, arguments);
    }

    return validate;
  }();

  AvRadioGroup.prototype.update = function update() {
    this.setState({});
    this.updateInputs();
  };

  AvRadioGroup.prototype.updateValidations = function updateValidations() {
    var _this3 = this;

    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

    this.validations = (0, _assign2.default)({}, props.validate);

    (0, _keys2.default)(props).filter(function (val) {
      return htmlValidationAttrs.indexOf(val) > -1;
    }).forEach(function (attr) {
      if (props[attr]) {
        _this3.validations[attr] = _this3.validations[attr] || {
          value: props[attr]
        };
      } else {
        delete _this3.validations[attr];
      }
    });

    this.context.FormCtrl.register(this, this.update.bind(this));
    this.validate();
  };

  AvRadioGroup.prototype.updateInputs = function updateInputs() {
    this._inputs.forEach(function (input) {
      return input.setState.call(input, {});
    });
    this.setState({});
  };

  AvRadioGroup.prototype.reset = function reset() {
    this.value = this.getDefaultValue().value;
    this.context.FormCtrl.setDirty(this.props.name, false);
    this.context.FormCtrl.setTouched(this.props.name, false);
    this.context.FormCtrl.setBad(this.props.name, false);
    this.setState({ value: this.value });
    this.validate();
    this.props.onReset && this.props.onReset(this.value);
  };

  AvRadioGroup.prototype.registerInput = function registerInput(input) {
    if (this._inputs.indexOf(input) < 0) {
      this._inputs.push(input);
    }
  };

  AvRadioGroup.prototype.unregisterInput = function unregisterInput(input) {
    this._inputs = this._inputs.filter(function (ipt) {
      return ipt !== input;
    });
  };

  AvRadioGroup.prototype.render = function render() {
    var legend = this.props.label ? _react2.default.createElement(
      'legend',
      null,
      this.props.label
    ) : '';
    var validation = this.getInputState();
    var _props = this.props,
        omit1 = _props.errorMessage,
        omit2 = _props.validate,
        omit3 = _props.validationEvent,
        omit4 = _props.state,
        omit5 = _props.label,
        omit6 = _props.required,
        omit7 = _props.inline,
        children = _props.children,
        attributes = (0, _objectWithoutProperties3.default)(_props, ['errorMessage', 'validate', 'validationEvent', 'state', 'label', 'required', 'inline', 'children']);


    var touched = this.context.FormCtrl.isTouched(this.props.name);
    var hasError = this.context.FormCtrl.hasError(this.props.name);

    var classes = (0, _classnames2.default)('form-control border-0 p-0 h-auto', touched ? 'is-touched' : 'is-untouched', this.context.FormCtrl.isDirty(this.props.name) ? 'is-dirty' : 'is-pristine', this.context.FormCtrl.isBad(this.props.name) ? 'is-bad-input' : null, hasError ? 'av-invalid' : 'av-valid', touched && hasError && 'is-invalid');

    var groupClass = (0, _classnames2.default)(attributes.className, touched && hasError && 'was-validated');

    return _react2.default.createElement(
      _reactstrap__default['default'].FormGroup,
      (0, _extends3.default)({ tag: 'fieldset' }, attributes, { className: groupClass }),
      legend,
      _react2.default.createElement(
        'div',
        { className: classes },
        children
      ),
      _react2.default.createElement(
        _AvFeedback2.default,
        null,
        validation.errorMessage
      )
    );
  };

  return AvRadioGroup;
}(React__default['default'].Component);

AvRadioGroup.propTypes = (0, _assign2.default)({}, _reactstrap__default['default'].FormGroup.propTypes, {
  name: _propTypes2.default.string.isRequired
});
AvRadioGroup.contextTypes = {
  FormCtrl: _propTypes2.default.object.isRequired
};
AvRadioGroup.childContextTypes = {
  Group: _propTypes2.default.object.isRequired,
  FormCtrl: _propTypes2.default.object.isRequired
};
exports.default = AvRadioGroup;
});

var AvRadio_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _extends3 = _interopRequireDefault(_extends2__default['default']);



var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2__default['default']);



var _classCallCheck3 = _interopRequireDefault(_classCallCheck2__default['default']);



var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2__default['default']);



var _inherits3 = _interopRequireDefault(_inherits2__default['default']);



var _assign2 = _interopRequireDefault(_assign__default['default']);



var _react2 = _interopRequireDefault(React__default['default']);



var _propTypes2 = _interopRequireDefault(_propTypes__default['default']);



var _classnames2 = _interopRequireDefault(_classnames__default['default']);





var _AvInput2 = _interopRequireDefault(AvInput_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var radioPropTypes = (0, _assign2.default)({}, _AvInput2.default.propTypes, { customInput: _propTypes2.default.bool });
delete radioPropTypes.name;

var AvRadio = function (_Component) {
  (0, _inherits3.default)(AvRadio, _Component);

  function AvRadio() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AvRadio);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  AvRadio.prototype.componentDidMount = function componentDidMount() {
    this.context.FormCtrl && this.context.FormCtrl.register(this);
  };

  AvRadio.prototype.componentWillUnmount = function componentWillUnmount() {
    this.context.FormCtrl && this.context.FormCtrl.unregister(this);
  };

  AvRadio.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        id = _props.id,
        customInput = _props.customInput,
        attributes = (0, _objectWithoutProperties3.default)(_props, ['className', 'id', 'customInput']);


    var groupProps = this.context.Group.getProps();

    var touched = this.context.FormCtrl.isTouched(groupProps.name);
    var hasError = this.context.FormCtrl.hasError(groupProps.name);

    var classes = (0, _classnames2.default)(className, touched ? 'is-touched' : 'is-untouched', this.context.FormCtrl.isDirty(groupProps.name) ? 'is-dirty' : 'is-pristine', this.context.FormCtrl.isBad(groupProps.name) ? 'is-bad-input' : null, hasError ? 'av-invalid' : 'av-valid', touched && hasError && 'is-invalid');

    if (this.props.disabled === undefined && this.context.FormCtrl.isDisabled() !== undefined) {
      attributes.disabled = this.context.FormCtrl.isDisabled();
    }

    if (this.props.readOnly === undefined && this.context.FormCtrl.isReadOnly() !== undefined) {
      attributes.disabled = attributes.disabled || this.context.FormCtrl.isReadOnly();
    }

    if (customInput) {
      return _react2.default.createElement(_reactstrap__default['default'].CustomInput, (0, _extends3.default)({ name: groupProps.name,
        type: 'radio'
      }, attributes, {
        inline: groupProps.inline,
        id: id || 'radio-' + groupProps.name + '-' + this.props.value,
        className: classes,
        onChange: this.onChangeHandler,
        checked: this.props.value === groupProps.value,
        value: this.props.value && this.props.value.toString(),
        required: groupProps.required,
        label: this.props.label
      }));
    }

    return _react2.default.createElement(
      _reactstrap__default['default'].FormGroup,
      { check: true, inline: groupProps.inline, disabled: attributes.disabled || attributes.readOnly },
      _react2.default.createElement(_reactstrap__default['default'].Input, (0, _extends3.default)({
        name: groupProps.name,
        type: 'radio'
      }, attributes, {
        id: id || 'radio-' + groupProps.name + '-' + this.props.value,
        className: classes,
        onChange: this.onChangeHandler,
        checked: this.props.value === groupProps.value,
        value: this.props.value && this.props.value.toString(),
        required: groupProps.required
      })),
      _react2.default.createElement(
        _reactstrap__default['default'].Label,
        { check: true, 'for': id || 'radio-' + groupProps.name + '-' + this.props.value },
        this.props.label
      )
    );
  };

  return AvRadio;
}(React__default['default'].Component);

AvRadio.contextTypes = (0, _assign2.default)({}, _AvInput2.default.contextTypes, {
  Group: _propTypes2.default.object.isRequired
});
AvRadio.propTypes = radioPropTypes;

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onChangeHandler = function (event) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    _this2.context.Group.update(event, _this2.props.value);
    if (_this2.props.onChange) {
      var _props2;

      (_props2 = _this2.props).onChange.apply(_props2, [event].concat(args));
    }
  };
};

exports.default = AvRadio;
});

var lib = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.AvValidator = exports.AvInputContainer = exports.AvBaseInput = exports.AvInput = exports.AvRadio = exports.AvRadioGroup = exports.AvGroup = exports.AvForm = exports.AvField = exports.AvFeedback = exports.AvCheckboxGroup = exports.AvCheckbox = undefined;



var _AvCheckbox2 = _interopRequireDefault(AvCheckbox_1);



var _AvCheckboxGroup2 = _interopRequireDefault(AvCheckboxGroup_1);



var _AvFeedback2 = _interopRequireDefault(AvFeedback_1);



var _AvField2 = _interopRequireDefault(AvField_1);



var _AvForm2 = _interopRequireDefault(AvForm_1);



var _AvGroup2 = _interopRequireDefault(AvGroup_1);



var _AvRadioGroup2 = _interopRequireDefault(AvRadioGroup_1);



var _AvRadio2 = _interopRequireDefault(AvRadio_1);



var _AvInput2 = _interopRequireDefault(AvInput_1);



var _AvBaseInput2 = _interopRequireDefault(AvBaseInput_1);



var _AvInputContainer2 = _interopRequireDefault(AvInputContainer);



var _AvValidator2 = _interopRequireDefault(AvValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.AvCheckbox = _AvCheckbox2.default;
exports.AvCheckboxGroup = _AvCheckboxGroup2.default;
exports.AvFeedback = _AvFeedback2.default;
exports.AvField = _AvField2.default;
exports.AvForm = _AvForm2.default;
exports.AvGroup = _AvGroup2.default;
exports.AvRadioGroup = _AvRadioGroup2.default;
exports.AvRadio = _AvRadio2.default;
exports.AvInput = _AvInput2.default;
exports.AvBaseInput = _AvBaseInput2.default;
exports.AvInputContainer = _AvInputContainer2.default;
exports.AvValidator = _AvValidator2.default;
});

var TextInput = function (props) {
    var updateValueAtKey = useFormContext().updateValueAtKey;
    return (React__default['default'].createElement(_reactstrap.Row, { form: true, className: "flexed-form-row" },
        React__default['default'].createElement(_reactstrap.Col, { md: 12 },
            React__default['default'].createElement(_reactstrap.FormGroup, null, React__default['default'].createElement(lib.AvField, __assign({ type: "text", name: props.k, validate: props.validations, disabled: props.isDisabled, value: props.value, onChange: function (event) {
                    return updateValueAtKey(event.target.value, props.k, props.parentData, props.stateKeyToUse);
                }, placeholder: props.placeholder }, props.dataProps))))));
};

var COMMON_REGEX = {
    WEBSITE: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[A-Za-z0-9]+([\-\.]{1}[A-Za-z0-9]+)*\.[A-Za-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
    EMAIL: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    PASSWORD: /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,64})/g,
    CURRENCY: /^\$?-?(((\d{1,3},?)(\d{3},?)+|\d{1,3})|\d+)(\.\d{1,2})?$/g
};

var WebsiteInput = function (props) {
    var updateValueAtKey = useFormContext().updateValueAtKey;
    var websiteValidationPattern = COMMON_REGEX.WEBSITE;
    return (React__default['default'].createElement(_reactstrap.Row, { form: true, className: "flexed-form-row" },
        React__default['default'].createElement(_reactstrap.Col, { md: 12 },
            React__default['default'].createElement(_reactstrap.FormGroup, null,
                React__default['default'].createElement(lib.AvField, { type: "text", name: props.k, validate: __assign(__assign({}, props.validations), { pattern: {
                            value: websiteValidationPattern,
                            errorMessage: "Please enter a valid Website address",
                        } }), value: props.value, disabled: props.isDisabled, onChange: function (event) {
                        return updateValueAtKey(event.target.value, props.k, props.parentData, props.stateKeyToUse);
                    }, placeholder: props.placeholder })))));
};

var NumberInput = function (props) {
    var updateValueAtKey = useFormContext().updateValueAtKey;
    return (React__default['default'].createElement(_reactstrap.Row, { form: true, className: "flexed-form-row" },
        React__default['default'].createElement(_reactstrap.Col, { md: 12 },
            React__default['default'].createElement(_reactstrap.FormGroup, null,
                React__default['default'].createElement(lib.AvField, { name: props.k, type: "number", validate: props.validations, value: props.value, min: props.min, step: props.step, disabled: props.isDisabled, onChange: function (event) {
                        return updateValueAtKey(event.target.value, props.k, props.parentData, props.stateKeyToUse);
                    } })))));
};

var Dropdown = function (props) {
    var updateValueAtKey = useFormContext().updateValueAtKey;
    return (React__default['default'].createElement(_reactstrap.Row, { form: true, className: "flexed-form-row" },
        React__default['default'].createElement(_reactstrap.Col, { md: 12 },
            React__default['default'].createElement(_reactstrap.FormGroup, null,
                React__default['default'].createElement(lib.AvField, { type: "select", name: "select", value: props.value === "true"
                        ? true
                        : props.value === "false"
                            ? false
                            : props.value, className: !props.validations ||
                        !props.validations.required ||
                        !props.validations.required.value
                        ? "optional-fields"
                        : "", disabled: props.isDisabled, onChange: function (event) {
                        return updateValueAtKey(event &&
                            event.nativeEvent &&
                            event.nativeEvent.target &&
                            event.nativeEvent.target.value
                            ? event.nativeEvent.target.value
                            : null, props.k, props.parentData, props.stateKeyToUse);
                    } }, props.options
                    ? props.options.map(function (option, index) { return (React__default['default'].createElement("option", { key: index, value: option.key }, option.text)); })
                    : "")))));
};

var Currency = function (props) {
    var updateValueAtKey = useFormContext().updateValueAtKey;
    return (React__default['default'].createElement(_reactstrap.Row, { form: true, className: "flexed-form-row" },
        React__default['default'].createElement(_reactstrap.Col, { md: 12 },
            React__default['default'].createElement(_reactstrap.FormGroup, null,
                React__default['default'].createElement(lib.AvField, { name: props.k, type: "number", validate: props.validations, value: props.value, min: props.min, step: props.step, disabled: props.isDisabled, onChange: function (event) {
                        return updateValueAtKey(event.target.value, props.k, props.parentData, props.stateKeyToUse);
                    } })))));
};

var ZipcodeInput = function (props) {
    var updateValueAtKey = useFormContext().updateValueAtKey;
    return (React__default['default'].createElement(_reactstrap.Row, { form: true, className: "flexed-form-row" },
        React__default['default'].createElement(_reactstrap.Col, { md: 12 },
            React__default['default'].createElement(_reactstrap.FormGroup, null,
                React__default['default'].createElement(lib.AvField, { name: props.k, type: "number", validate: props.validations, value: props.value, disabled: props.isDisabled, onChange: function (event) { return updateValueAtKey(parseInt(event.target.value), props.k, props.parentData, props.stateKeyToUse); } })))));
};

var LabelControl = function (props) {
    var renderWithToolbar = function () {
        return (React__default['default'].createElement(_reactstrap.Label, { style: { width: "100%" }, for: props.k, className: props.classes },
            React__default['default'].createElement(_reactstrap.Row, null,
                React__default['default'].createElement(_reactstrap.Col, { md: 10 },
                    React__default['default'].createElement(_reactstrap.Row, { style: { margin: "0px" } }, props.value)),
                React__default['default'].createElement(_reactstrap.Col, { md: 2 }, props.children))));
    };
    var renderNormal = function () {
        return (React__default['default'].createElement(_reactstrap.Row, { style: { margin: "0px" } },
            React__default['default'].createElement(_reactstrap.Label, { for: props.k, className: props.classes }, props.value)));
    };
    return props.children ? renderWithToolbar() : renderNormal();
};

var PercentageInput = function (props) {
    var updateValueAtKey = useFormContext().updateValueAtKey;
    var onChange = function (value) {
        if (value > 0) {
            value = value / 100;
        }
        updateValueAtKey(value, props.k, props.parentData, props.stateKeyToUse);
    };
    return (React__default['default'].createElement(_reactstrap.Row, { form: true, className: "flexed-form-row" },
        React__default['default'].createElement(_reactstrap.Col, { md: 12 },
            React__default['default'].createElement(_reactstrap.FormGroup, null,
                React__default['default'].createElement(lib.AvField, { name: props.k, type: "number", validate: props.validations, value: props.value ? props.value * 100 : 0, onChange: function (event) { return onChange(event.target.value); }, disabled: props.isDisabled })))));
};

var DateControl = function (props) {
    var _a = useFormContext(), updateValueAtKey = _a.updateValueAtKey, getValueAtKey = _a.getValueAtKey;
    var _b = React.useState(""), dateValue = _b[0], setDateValue = _b[1];
    var onChange = function (value) {
        if (props.isDisabled) {
            return;
        }
        var formattedDate = value
            ? value.getFullYear().toString() +
                "-" +
                (value.getMonth() + 1).toString() +
                "-" +
                value.getDate().toString()
            : "";
        updateValueAtKey(formattedDate, props.k, props.parentData, props.stateKeyToUse);
        setDateValue(getValueAtKey(props.k));
    };
    var DateControlInput = function (_a) {
        var value = _a.value, onClick = _a.onClick;
        return (React__default['default'].createElement("div", { className: "btn " + (props.isDisabled ? "disabled-date-input" : ""), onClick: onClick }, value));
    };
    return (React__default['default'].createElement(_reactstrap.Row, { form: true, className: "flexed-form-row" },
        React__default['default'].createElement(_reactstrap.Col, { md: 12 },
            React__default['default'].createElement(_reactstrap.FormGroup, null,
                React__default['default'].createElement(DatePicker__default['default'], { className: "form-control", selected: props.value
                        ? new Date(props.value)
                        : dateValue
                            ? new Date(dateValue)
                            : null, name: props.k, onChange: function (val) { return onChange(val); }, dateFormat: "MM/d/yyyy", customInput: props.isDisabled ? React__default['default'].createElement(DateControlInput, null) : null })))));
};

var ButtonControl = function (props) {
    var keyName = "";
    if (Array.isArray(props.k) && props.k.length > 0) {
        keyName = props.k.join('-');
    }
    else {
        keyName = props.k;
    }
    return (React__default['default'].createElement(_reactstrap.Row, { form: true },
        React__default['default'].createElement(_reactstrap.Col, { md: 12 },
            React__default['default'].createElement(_reactstrap.FormGroup, null,
                React__default['default'].createElement(_reactstrap.Button, { name: keyName, onClick: props.onClick }, props.text)))));
};

var BasicFormElementTemplate = function (_a) {
    var control = _a.control;
    return (React__default['default'].createElement(React.Fragment, null,
        React__default['default'].createElement(LabelControl, { value: control.label, k: control.k, type: control.type }, control.toolbar &&
            control.toolbar.buttons &&
            control.toolbar.buttons.length > 0
            ? control.toolbar.buttons.map(function (button, index) { return (React__default['default'].createElement(_reactstrap.Col, { key: index },
                React__default['default'].createElement(ButtonControl, __assign({}, button)))); })
            : ""),
        React__default['default'].createElement(DynamicControl, { control: control })));
};

var DynamicControl = function (props) {
    var returnObject = React__default['default'].createElement(React__default['default'].Fragment, null);
    var field = props.control;
    field.parentData = props.parentData;
    var defaults = DEFAULT_CONTROLS;
    if (defaults[field.type]) {
        // CUSTOM FORM CONTROLS
        if (field.formControls && field.formControls[field.type]) {
            var ComponentToRender = field.formControls[field.type];
            returnObject = React__default['default'].createElement(ComponentToRender, __assign({}, field));
        }
        // USING DEFAULT FORM CONTROLS
        else {
            var ComponentToRender = defaults[field.type];
            returnObject = (React__default['default'].createElement(ComponentToRender, __assign({}, field)));
        }
    }
    else if (field.type === exports.CONTROL_TYPES.array) {
        returnObject = field.children.map(function (data, index) { return (React__default['default'].createElement(DynamicControl, { key: index, control: data, controlTemplate: props.controlTemplate ? props.controlTemplate : BasicFormElementTemplate })); });
    }
    if (props.controlTemplate) {
        var Template = props.controlTemplate;
        return (React__default['default'].createElement(Template, __assign({}, props), returnObject));
    }
    else {
        return returnObject;
    }
};

var TableControl = function (props) {
    return (React__default['default'].createElement(React.Fragment, null,
        React__default['default'].createElement(_reactstrap.Row, { style: { marginLeft: "50px", marginBottom: "20px" } }, props.columns.map(function (column, index) { return (React__default['default'].createElement(_reactstrap.Col, { key: index }, column.label)); })),
        props.rows.map(function (row, rowIndex) {
            return (React__default['default'].createElement(_reactstrap.Row, { style: { marginLeft: "50px" }, key: rowIndex }, row.map(function (control, index) { return (React__default['default'].createElement(_reactstrap.Col, { key: index },
                React__default['default'].createElement(DynamicControl, { parentData: { k: props.k, index: rowIndex }, control: control, onChange: props.onChange }))); })));
        })));
};

var YearInput = function (props) {
    var updateValueAtKey = useFormContext().updateValueAtKey;
    return (React__default['default'].createElement(_reactstrap.Row, { form: true, className: "flexed-form-row" },
        React__default['default'].createElement(_reactstrap.Col, { md: 12 },
            React__default['default'].createElement(_reactstrap.FormGroup, null,
                React__default['default'].createElement(lib.AvField, { name: props.k, type: "number", validate: props.validations, value: props.value ? props.value : "", disabled: props.isDisabled, onChange: function (event) { return updateValueAtKey(parseInt(event.target.value), props.k, props.parentData, props.stateKeyToUse); } })))));
};

var Radio = function (props) {
    var updateValueAtKey = useFormContext().updateValueAtKey;
    return (React__default['default'].createElement(_reactstrap.Row, { form: true, className: "flexed-form-row" },
        React__default['default'].createElement(_reactstrap.Col, { md: 12 },
            React__default['default'].createElement(_reactstrap.FormGroup, { className: "radio" }, React__default['default'].createElement(lib.AvRadioGroup, { inline: true, name: props.k, disabled: props.isDisabled, value: props.value ? props.value : null, onChange: function (e) {
                    e.persist();
                    updateValueAtKey(e.nativeEvent.target.value, props.k, props.parentData, props.stateKeyToUse);
                } }, props.options.map(function (option) { return (React__default['default'].createElement(lib.AvRadio, { customInput: true, label: option.text, value: option.key })); }))))));
};

var _a;
(function (CONTROL_TYPES) {
    CONTROL_TYPES[CONTROL_TYPES["text"] = 0] = "text";
    CONTROL_TYPES[CONTROL_TYPES["website"] = 1] = "website";
    CONTROL_TYPES[CONTROL_TYPES["number"] = 2] = "number";
    CONTROL_TYPES[CONTROL_TYPES["dropdownList"] = 3] = "dropdownList";
    CONTROL_TYPES[CONTROL_TYPES["zipcode"] = 4] = "zipcode";
    CONTROL_TYPES[CONTROL_TYPES["currency"] = 5] = "currency";
    CONTROL_TYPES[CONTROL_TYPES["label"] = 6] = "label";
    CONTROL_TYPES[CONTROL_TYPES["percentage"] = 7] = "percentage";
    CONTROL_TYPES[CONTROL_TYPES["date"] = 8] = "date";
    CONTROL_TYPES[CONTROL_TYPES["table"] = 9] = "table";
    CONTROL_TYPES[CONTROL_TYPES["year"] = 10] = "year";
    CONTROL_TYPES[CONTROL_TYPES["radio"] = 11] = "radio";
    CONTROL_TYPES[CONTROL_TYPES["array"] = 12] = "array";
})(exports.CONTROL_TYPES || (exports.CONTROL_TYPES = {}));
var REFLECTION_TYPES;
(function (REFLECTION_TYPES) {
    REFLECTION_TYPES[REFLECTION_TYPES["shouldBeSame"] = 0] = "shouldBeSame";
    REFLECTION_TYPES[REFLECTION_TYPES["replicateValue"] = 1] = "replicateValue";
})(REFLECTION_TYPES || (REFLECTION_TYPES = {}));
var DEFAULT_CONTROLS = (_a = {},
    _a[exports.CONTROL_TYPES.text] = TextInput,
    _a[exports.CONTROL_TYPES.website] = WebsiteInput,
    _a[exports.CONTROL_TYPES.number] = NumberInput,
    _a[exports.CONTROL_TYPES.dropdownList] = Dropdown,
    _a[exports.CONTROL_TYPES.zipcode] = ZipcodeInput,
    _a[exports.CONTROL_TYPES.currency] = Currency,
    _a[exports.CONTROL_TYPES.label] = LabelControl,
    _a[exports.CONTROL_TYPES.percentage] = PercentageInput,
    _a[exports.CONTROL_TYPES.date] = DateControl,
    _a[exports.CONTROL_TYPES.table] = TableControl,
    _a[exports.CONTROL_TYPES.year] = YearInput,
    _a[exports.CONTROL_TYPES.radio] = Radio,
    _a);
var ERROR_MESSAGES = {
    REQUIRED: "This is a required field",
    MIN_LENGTH_5: "Should be at least 5 characters"
};

var mapToFinalState = function (formJson) {
    var _a;
    var finalState = {};
    var fields = formJson.fields;
    for (var i = 0; i < fields.length; i++) {
        if (fields[i].type === exports.CONTROL_TYPES.table) {
            var tableField = fields[i];
            var key = tableField.stateKeyToUse
                ? tableField.stateKeyToUse
                : tableField.k;
            finalState[key] = [];
            var columns = [];
            if (tableField.columns) {
                for (var j = 0; j < tableField.columns.length; j++) {
                    var col = tableField.columns[j];
                    columns.push(col.stateKeyToUse ? col.stateKeyToUse : col.label);
                }
            }
            if (tableField.rows) {
                for (var j = 0; j < tableField.rows.length; j++) {
                    var currentRow = tableField.rows[j];
                    var rowState = {};
                    for (var k = 0; k < currentRow.length; k++) {
                        var field = currentRow[k];
                        rowState = __assign(__assign({}, rowState), (_a = {}, _a[columns[k]] = field.value, _a));
                    }
                    finalState[key].push(rowState);
                }
            }
        }
        else {
            var field = fields[i];
            var key = field.stateKeyToUse ? field.stateKeyToUse : field.k;
            finalState[key] = field.value;
        }
    }
    return finalState;
};
var initializeHashMapForKeyPositions = function (fields, hashSlice, hashMap) {
    // Currently maps to depth of 1 - considering there cannot be a table inside a table
    for (var i = 0; i < fields.length; i++) {
        var key = fields[i].k;
        if (fields[i].type === exports.CONTROL_TYPES.table) {
            var rows = fields[i].rows;
            var structure = void 0;
            if (hashSlice) {
                structure = hashSlice[key];
            }
            else {
                hashMap[key] = {
                    position: i
                };
                structure = hashMap[key];
            }
            if (rows && rows.length > 0) {
                for (var j = 0; j < (rows === null || rows === void 0 ? void 0 : rows.length); j++) {
                    initializeHashMapForKeyPositions(rows[j], structure, null);
                }
            }
        }
        else {
            if (hashSlice) {
                hashSlice[key] = i;
            }
            else {
                hashMap[key] = i;
            }
        }
    }
};
var updateValueAtKeyHelper = function (value, key, parentData, hashMap, formJson, formStateInternal, stateKeyToUse) {
    if (parentData) {
        var parentPosition = hashMap[parentData.k].position;
        var childPosition = hashMap[parentData.k][key];
        var parentField = formJson.fields[parentPosition];
        var child = parentField.rows[parentData.index][childPosition];
        child.value = value;
        if (formStateInternal && parentData.k in formStateInternal) {
            var parent_1 = formStateInternal[parentData.k];
            var keyForState = parentField.columns[childPosition].stateKeyToUse ? parentField.columns[childPosition].stateKeyToUse : parentField.columns[childPosition].label;
            parent_1[parentData.index][keyForState] = value;
        }
    }
    else {
        var position = hashMap[key];
        var field = formJson.fields[position];
        if (field) {
            field.value = value;
        }
        var keyForState = stateKeyToUse ? stateKeyToUse : key;
        if (formStateInternal && keyForState in formStateInternal) {
            formStateInternal[keyForState] = value;
        }
    }
};
var getValueAtKeyHelper = function (key, parentData, hashMap, formJson) {
    if (parentData) {
        var parentPosition = hashMap[parentData.k].position;
        var childPosition = hashMap[parentData.k][key];
        var parentField = formJson.fields[parentPosition];
        var child = parentField.rows[parentData.index][childPosition];
        return child.value;
    }
    else {
        var position = hashMap[key];
        var field = formJson.fields[position];
        return field.value;
    }
};

var FormContext = React.createContext({});
var hashMap = {};
var FormContextProvider = function (_a) {
    var children = _a.children, initialData = _a.initialData, setFormState = _a.setFormState;
    var _b = React.useState(initialData), formJson = _b[0], setFormJson = _b[1];
    var formStateInternal = React.useState(mapToFinalState(initialData))[0];
    React.useEffect(function () {
        initializeHashMapForKeyPositions(initialData.fields, null, hashMap);
    }, []);
    var updateValueAtKey = function (value, key, parentData, stateKeyToUse) {
        updateValueAtKeyHelper(value, key, parentData, hashMap, formJson, formStateInternal, stateKeyToUse);
        setFormJson(formJson);
        setFormState(formStateInternal);
    };
    var getValueAtKey = function (key, parentData) {
        return getValueAtKeyHelper(key, parentData, hashMap, formJson);
    };
    return React__default['default'].createElement(FormContext.Provider, { value: { formJson: formJson, setFormJson: setFormJson, updateValueAtKey: updateValueAtKey, getValueAtKey: getValueAtKey } },
        " ",
        children,
        " ");
};
var useFormContext = function () { return React.useContext(FormContext); };

var DynamicFormRenderer = function (_a, ref) {
    var controlTemplate = _a.controlTemplate;
    var formJson = useFormContext().formJson;
    return formJson.fields.map(function (field, index) { return (React__default['default'].createElement(DynamicControl, { key: index, control: field, controlTemplate: controlTemplate ? controlTemplate : BasicFormElementTemplate })); });
};

var ReactDynamicForm = function (props) {
    var renderForm = function () {
        return (React__default['default'].createElement(AvForm, null,
            React__default['default'].createElement(DynamicFormRenderer, { controlTemplate: props.formControlTemplate, setFormState: props.setFormState })));
    };
    if (props.formTemplate) {
        var ParentComponent = props.formTemplate;
        return (React__default['default'].createElement(FormContextProvider, { initialData: props.formData, setFormState: props.setFormState },
            React__default['default'].createElement(ParentComponent, __assign({}, props), renderForm())));
    }
    else {
        return React__default['default'].createElement(FormContextProvider, { initialData: props.formData, setFormState: props.setFormState }, renderForm());
    }
};

var FormInCardTemplate = function (props) {
    var showCurrentDetails = function () {
        console.log(props.formState);
    };
    return (React__default['default'].createElement(_reactstrap.Card, { className: "main-card mb-3" },
        React__default['default'].createElement(_reactstrap.CardTitle, null, props.title),
        React__default['default'].createElement(_reactstrap.CardBody, null, props.children),
        React__default['default'].createElement(_reactstrap.CardFooter, null,
            React__default['default'].createElement(_reactstrap.Button, { onClick: showCurrentDetails }, "SHOW"))));
};

exports.BasicFormControlTemplate = BasicFormElementTemplate;
exports.COMMON_REGEX = COMMON_REGEX;
exports.DEFAULT_CONTROLS = DEFAULT_CONTROLS;
exports.DynamicControl = DynamicControl;
exports.ERROR_MESSAGES = ERROR_MESSAGES;
exports.FormInCardTemplate = FormInCardTemplate;
exports.ReadyForm = ReactDynamicForm;
//# sourceMappingURL=index.js.map
