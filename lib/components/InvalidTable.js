'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _objectValues(obj) {
  var values = [];
  var keys = Object.keys(obj);

  for (var k = 0; k < keys.length; ++k) values.push(obj[keys[k]]);

  return values;
}

exports.InvalidTable = InvalidTable;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ErrorGroup = require('./ErrorGroup');

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Module API

function InvalidTable(_ref) {
  var table = _ref.table,
      tableNumber = _ref.tableNumber,
      tablesCount = _ref.tablesCount;

  var errorGroups = (0, _helpers.getTableErrorGroups)(table);
  var tableFile = getTableFile(table);
  return _react2.default.createElement(
    'div',
    { className: 'report-table' },
    _react2.default.createElement(
      'h4',
      { className: 'file-heading' },
      _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'a',
          { className: 'file-name', href: table.source },
          tableFile
        ),
        _react2.default.createElement(
          'span',
          { className: 'file-count' },
          'Invalid ',
          tableNumber,
          ' of ',
          tablesCount
        )
      )
    ),
    _objectValues(errorGroups).map(function (errorGroup) {
      return _react2.default.createElement(_ErrorGroup.ErrorGroup, { key: errorGroup.code, errorGroup: errorGroup });
    })
  );
}

// Internal

function getTableFile(table) {
  return (0, _helpers.removeBaseUrl)(table.source);
}