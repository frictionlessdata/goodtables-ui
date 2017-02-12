var goodtablesReact =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** ./~/classnames/index.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
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

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************!*\
  !*** ./~/react-props-decorators/lib/index.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.propTypes = propTypes;
exports.defaultProps = defaultProps;
exports.contextTypes = contextTypes;
exports.childContextTypes = childContextTypes;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _objectAssign = __webpack_require__(/*! object-assign */ 10);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function propTypes(param) {
  return function (clazz) {
    clazz.propTypes = (0, _objectAssign2['default'])({}, clazz.propTypes || {}, param);
    return clazz;
  };
}

function defaultProps(param) {
  return function (clazz) {
    clazz.defaultProps = (0, _objectAssign2['default'])({}, clazz.defaultProps || {}, param);
    return clazz;
  };
}

function contextTypes(param) {
  return function (clazz) {
    clazz.contextTypes = (0, _objectAssign2['default'])({}, clazz.contextTypes || {}, param);
    return clazz;
  };
}

function childContextTypes(param) {
  return function (clazz) {
    clazz.childContextTypes = (0, _objectAssign2['default'])({}, clazz.contextTypes || {}, param);
    return clazz;
  };
}


/***/ }),
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!************************!*\
  !*** ./src/Report.jsx ***!
  \************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Report;

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ 1);

var _classnames2 = _interopRequireDefault(_classnames);

var _Table = __webpack_require__(/*! ./Table.jsx */ 5);

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Module API

Report.propTypes = {
  report: _react2.default.PropTypes.object.isRequired
};
function Report(_ref) {
  var report = _ref.report;

  return _react2.default.createElement(
    'div',
    { className: 'goodtables-vue-report' },
    _react2.default.createElement(
      'h1',
      null,
      'Report'
    ),
    _react2.default.createElement(
      'table',
      { className: (0, _classnames2.default)({ summary: true, error: !report.valid }) },
      _react2.default.createElement(
        'tbody',
        null,
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'th',
            null,
            'valid'
          ),
          _react2.default.createElement(
            'td',
            null,
            report.valid ? 'yes' : 'no'
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'th',
            null,
            'tables'
          ),
          _react2.default.createElement(
            'td',
            null,
            report['table-count']
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'th',
            null,
            'errors'
          ),
          _react2.default.createElement(
            'td',
            null,
            report['error-count']
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'th',
            null,
            'time'
          ),
          _react2.default.createElement(
            'td',
            null,
            report.time
          )
        )
      )
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Tables'
    ),
    report.tables.map(function (table) {
      return _react2.default.createElement(_Table2.default, { key: table.source, table: table });
    })
  );
}

/***/ }),
/* 4 */
/* unknown exports provided */
/* all exports used */
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./../~/css-loader!./styles.css */ 8);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ./../~/style-loader/addStyles.js */ 11)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../node_modules/css-loader/index.js!./styles.css", function() {
			var newContent = require("!!./../node_modules/css-loader/index.js!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 5 */
/* unknown exports provided */
/* all exports used */
/*!***********************!*\
  !*** ./src/Table.jsx ***!
  \***********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _reactPropsDecorators = __webpack_require__(/*! react-props-decorators */ 2);

var _TableErrors = __webpack_require__(/*! ./TableErrors.jsx */ 6);

var _TableErrors2 = _interopRequireDefault(_TableErrors);

var _TableValues = __webpack_require__(/*! ./TableValues.jsx */ 7);

var _TableValues2 = _interopRequireDefault(_TableValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Module API

var Table = (_dec = (0, _reactPropsDecorators.propTypes)({
  table: _react2.default.PropTypes.object.isRequired
}), _dec(_class = function (_React$Component) {
  _inherits(Table, _React$Component);

  // Public

  function Table(props) {
    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

    _this.state = {
      show: false,
      values: false
    };
    return _this;
  }

  _createClass(Table, [{
    key: 'render',
    value: function render() {
      var table = this.props.table;

      if (table.valid) {
        return this.renderValidTable();
      } else {
        return this.renderInvalidTable();
      }
    }

    // Internal

  }, {
    key: 'renderValidTable',
    value: function renderValidTable() {
      var table = this.props.table;

      var source = this.getSource();
      return _react2.default.createElement(
        'h3',
        null,
        source,
        '[',
        table['row-count'],
        ' rows/',
        table['error-count'],
        ' errors]'
      );
    }
  }, {
    key: 'renderInvalidTable',
    value: function renderInvalidTable() {
      var _this2 = this;

      var table = this.props.table;
      var _state = this.state,
          show = _state.show,
          values = _state.values;

      var _getIdentifiers = this.getIdentifiers(),
          id1 = _getIdentifiers.id1,
          id2 = _getIdentifiers.id2;

      var source = this.getSource();
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          { className: 'error', onClick: function onClick() {
              return _this2.setState({ show: !_this2.state.show });
            } },
          source,
          '[',
          table['row-count'],
          ' rows/',
          table['error-count'],
          ' errors] [',
          show ? '-' : '+',
          ']'
        ),
        show && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('input', { id: id1, type: 'radio', name: 'tabs', defaultChecked: true }),
          _react2.default.createElement(
            'label',
            { htmlFor: id1, onClick: function onClick() {
                return _this2.setState({ values: false });
              } },
            'Errors view'
          ),
          _react2.default.createElement('input', { id: id2, type: 'radio', name: 'tabs' }),
          _react2.default.createElement(
            'label',
            { htmlFor: id2, onClick: function onClick() {
                return _this2.setState({ values: true });
              } },
            'Values view'
          ),
          values && _react2.default.createElement(_TableValues2.default, { table: table }),
          !values && _react2.default.createElement(_TableErrors2.default, { table: table })
        )
      );
    }
  }, {
    key: 'getSource',
    value: function getSource() {
      var table = this.props.table;

      if (table.source.length > 50) {
        return '<truncated>/' + table.source.split('/').pop();
      }
      return table.source;
    }
  }, {
    key: 'getIdentifiers',
    value: function getIdentifiers() {
      return {
        id1: Math.random().toString(36).substring(10),
        id2: Math.random().toString(36).substring(10)
      };
    }
  }]);

  return Table;
}(_react2.default.Component)) || _class);
exports.default = Table;

/***/ }),
/* 6 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** ./src/TableErrors.jsx ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TableErrors;

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Module API

TableErrors.propTypes = {
  table: _react2.default.PropTypes.object.isRequired
};
function TableErrors(_ref) {
  var table = _ref.table;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'table',
      { className: 'error' },
      _react2.default.createElement(
        'thead',
        null,
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'th',
            null,
            'Row'
          ),
          _react2.default.createElement(
            'th',
            null,
            'Col'
          ),
          _react2.default.createElement(
            'th',
            null,
            'Code'
          ),
          _react2.default.createElement(
            'th',
            null,
            'Message'
          )
        )
      ),
      _react2.default.createElement(
        'tbody',
        null,
        table.errors.map(function (error, index) {
          return _react2.default.createElement(
            'tr',
            { key: index },
            _react2.default.createElement(
              'td',
              null,
              error['row-number'] || 'H'
            ),
            _react2.default.createElement(
              'td',
              null,
              error['column-number'] || '-'
            ),
            _react2.default.createElement(
              'td',
              null,
              error.code
            ),
            _react2.default.createElement(
              'td',
              null,
              error.message
            )
          );
        })
      )
    )
  );
}

/***/ }),
/* 7 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** ./src/TableValues.jsx ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _reactPropsDecorators = __webpack_require__(/*! react-props-decorators */ 2);

var _classnames = __webpack_require__(/*! classnames */ 1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Module API

var TableValues = (_dec = (0, _reactPropsDecorators.propTypes)({
  table: _react2.default.PropTypes.object.isRequired
}), _dec(_class = function (_React$Component) {
  _inherits(TableValues, _React$Component);

  // Public

  function TableValues(props) {
    _classCallCheck(this, TableValues);

    var _this = _possibleConstructorReturn(this, (TableValues.__proto__ || Object.getPrototypeOf(TableValues)).call(this, props));

    _this.state = {
      expandedRows: []
    };
    return _this;
  }

  _createClass(TableValues, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var rows = this.getRows();
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'table',
          { className: 'values error' },
          _react2.default.createElement(
            'tbody',
            null,
            rows.map(function (row, rowNumber) {
              return !!row && [_this2.renderValuesTr(row, rowNumber), _this2.renderErrorListTr(row, rowNumber)];
            })
          )
        ),
        _react2.default.createElement(
          'p',
          { className: 'help' },
          '*click on a row to see errors'
        )
      );
    }

    // Internal

  }, {
    key: 'renderValuesTr',
    value: function renderValuesTr(row, rowNumber) {
      var _this3 = this;

      return _react2.default.createElement(
        'tr',
        { key: 'values-' + rowNumber, onClick: function onClick() {
            return _this3.toggleExpandedRow(rowNumber);
          } },
        _react2.default.createElement(
          'td',
          { className: 'row-number' },
          rowNumber || 'H'
        ),
        row.values.map(function (value, colNumber) {
          return !!colNumber && _react2.default.createElement(
            'td',
            { key: colNumber, className: (0, _classnames2.default)({ error: row.badcols.includes(colNumber) }) },
            value
          );
        })
      );
    }
  }, {
    key: 'renderErrorListTr',
    value: function renderErrorListTr(row, rowNumber) {
      var expandedRows = this.state.expandedRows;

      if (expandedRows.includes(rowNumber)) {
        return _react2.default.createElement(
          'tr',
          { key: 'error-list-' + rowNumber },
          _react2.default.createElement(
            'td',
            { className: 'errors', colSpan: '100%' },
            row.errors.map(function (error, index) {
              return _react2.default.createElement(
                'div',
                { key: index },
                '[',
                error['column-number'] || '-',
                '] ',
                error.message
              );
            })
          )
        );
      }
    }
  }, {
    key: 'getRows',
    value: function getRows() {
      var table = this.props.table;

      var rows = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = table.errors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var error = _step.value;

          var rowNumber = error['row-number'] || 0;
          var values = [null].concat(_toConsumableArray(rowNumber === 0 ? table.headers : error.row));
          var headers = [null].concat(_toConsumableArray(table.headers));
          // Initial
          if (!rows[rowNumber]) rows[rowNumber] = { values: [], badcols: [], errors: [] };
          // Values
          if (error.code === 'blank-row') {
            rows[rowNumber].values = headers.map(function () {
              return '';
            });
          } else {
            rows[rowNumber].values = values;
            if (error.code === 'missing-value') {
              rows[rowNumber].values[error['column-number']] = '';
            }
          }
          // Badcols
          if (!error['column-number']) {
            var base = error.code === 'blank-row' ? headers : values;
            rows[rowNumber].badcols = base.map(function (value, index) {
              return index;
            }).filter(Boolean);
          } else {
            rows[rowNumber].badcols.push(error['column-number']);
          }
          // Errors
          rows[rowNumber].errors.push(error);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return rows;
    }
  }, {
    key: 'toggleExpandedRow',
    value: function toggleExpandedRow(rowNumber) {
      var expandedRows = [].concat(_toConsumableArray(this.state.expandedRows));
      if (expandedRows.includes(rowNumber)) {
        expandedRows = expandedRows.filter(function (value) {
          return value !== rowNumber;
        });
      } else {
        expandedRows.push(rowNumber);
      }
      this.setState({ expandedRows: expandedRows });
    }
  }]);

  return TableValues;
}(_react2.default.Component)) || _class);
exports.default = TableValues;

/***/ }),
/* 8 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./~/css-loader!./src/styles.css ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ./../~/css-loader/lib/css-base.js */ 9)();
// imports


// module
exports.push([module.i, ".goodtables-vue-report {\n  color: #333;\n  font-family: monospace;\n  letter-spacing: -0.5px;\n}\n\n.goodtables-vue-report table {\n  border: 2px solid #5cb85c;\n  border-radius: 3px;\n  background-color: #fff;\n}\n\n.goodtables-vue-report table.error {\n  border: 2px solid #d9534f;\n}\n\n.goodtables-vue-report table.summary {\n  width: 10em;\n}\n\n.goodtables-vue-report table.values {\n  min-width: 50em;\n}\n\n.goodtables-vue-report th {\n  background-color: #5cb85c;\n  color: #eee;\n}\n\n.goodtables-vue-report table.error th {\n  background-color: #d9534f;\n  color: #eee;\n}\n\n.goodtables-vue-report td {\n  background-color: #f9f9f9;\n}\n\n.goodtables-vue-report th,\n.goodtables-vue-report td {\n  padding: 10px 20px;\n  height: 1em;\n}\n\n.goodtables-vue-report th.active {\n  color: #fff;\n}\n\n.goodtables-vue-report table.values td {\n  cursor: pointer;\n}\n\n.goodtables-vue-report td.error {\n  background-color: #d9534f;\n  color: #fff;\n}\n\n.goodtables-vue-report td.row-number {\n  text-align: center;\n  padding: 10px 5px;\n  background-color: #f0ad4e;\n  color: #fff;\n}\n\n.goodtables-vue-report td.errors {\n  padding: 10px 5px;\n  background-color: #eee;\n  color: #777;\n}\n\n.goodtables-vue-report h2 {\n  margin-bottom: 10px;\n}\n\n.goodtables-vue-report h3 {\n  display: inline-block;\n  color: #5cb85c;\n  margin: 10px 0;\n}\n\n.goodtables-vue-report h3.error {\n  color: #d9534f;\n  cursor: pointer;\n}\n\n.goodtables-vue-report h3.error:hover {\n  text-decoration: underline;\n}\n\n.goodtables-vue-report input {\n  display: none;\n}\n\n.goodtables-vue-report label {\n  width: 10em;\n  display: inline-block;\n  margin: 0 0 -1px;\n  padding: 15px 25px;\n  font-weight: 600;\n  text-align: center;\n  color: #bbb;\n  border: 1px solid transparent;\n}\n\n.goodtables-vue-report label:hover {\n  color: #888;\n  cursor: pointer;\n}\n\n.goodtables-vue-report input:checked + label {\n  color: #333;\n  border: 1px solid #d9534f;\n  border-top: 2px solid #d9534f;\n  border-bottom: 1px solid #fff;\n}\n\n.goodtables-vue-report p.help {\n  padding-left: 15px;\n  font-style: italic;\n  color: #888;\n}\n", ""]);

// exports


/***/ }),
/* 9 */
/* unknown exports provided */
/* all exports used */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 10 */
/* unknown exports provided */
/* all exports used */
/*!**********************************!*\
  !*** ./~/object-assign/index.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 11 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 12 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Report = undefined;

var _Report = __webpack_require__(/*! ./Report.jsx */ 3);

var _Report2 = _interopRequireDefault(_Report);

__webpack_require__(/*! ./styles.css */ 4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Report = _Report2.default;

/***/ })
/******/ ]);