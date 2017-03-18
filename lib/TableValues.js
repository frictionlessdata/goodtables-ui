'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactPropsDecorators = require('react-props-decorators');

var _classnames = require('classnames');

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