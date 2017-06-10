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

exports.ReportTable = ReportTable;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ReportErrorGroup = require('./ReportErrorGroup');

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Module API

function ReportTable(_ref) {
  var table = _ref.table,
      tableNumber = _ref.tableNumber,
      tablesCount = _ref.tablesCount;

  var errorGroups = getErrorGroups(table);
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
    !table.valid && _objectValues(errorGroups).map(function (errorGroup) {
      return _react2.default.createElement(_ReportErrorGroup.ReportErrorGroup, { errorGroup: errorGroup });
    })
  );
}

// Internal

function getErrorGroups(table) {
  var groups = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = table.errors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var error = _step.value;


      // Get group
      var group = groups[error.code];

      // Create group
      if (!group) {
        group = {
          code: error.code,
          rows: {},
          count: 0,
          headers: table.headers,
          messages: []
        };
      }

      // Get row
      var row = group.rows[error['row-number']];

      // Create row
      if (!row) {
        var values = error.row;
        if (!error['row-number']) {
          values = table.headers;
        }
        row = {
          values: values,
          badcols: new Set()
        };
      }

      // Ensure missing value
      if (error.code === 'missing-value') {
        row.values[error['column-number'] - 1] = '';
      }

      // Add row badcols
      if (error['column-number']) {
        row.badcols.add(error['column-number']);
      } else if (row.values) {
        row.badcols = new Set(row.values.map(function (value, index) {
          return index + 1;
        }));
      }

      // Save group
      group.count += 1;
      group.messages.push(error.message);
      group.rows[error['row-number']] = row;
      groups[error.code] = group;
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

  return groups;
}

function getTableFile(table) {
  return (0, _helpers.removeBaseUrl)(table.source);
}