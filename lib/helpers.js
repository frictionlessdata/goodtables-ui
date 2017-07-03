'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTableErrorGroups = getTableErrorGroups;
exports.removeBaseUrl = removeBaseUrl;
exports.merge = merge;
// Module API

function getTableErrorGroups(table) {
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

function removeBaseUrl(text) {
  return text.replace(/https:\/\/raw\.githubusercontent\.com\/\S*?\/\S*?\/\S*?\//g, '');
}

function merge() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object.assign.apply(Object, [{}].concat(args));
}