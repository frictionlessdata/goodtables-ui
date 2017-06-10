'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Report = Report;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('../helpers');

var _InvalidTable = require('./InvalidTable');

var _MessageGroup = require('./MessageGroup');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Module API

function Report(_ref) {
  var report = _ref.report;

  var processedWarnings = getProcessedWarnings(report);
  var validTableFiles = getValidTableFiles(report);
  var invalidTables = getInvalidTables(report);
  return _react2.default.createElement(
    'div',
    { className: 'goodtables-ui-report' },
    processedWarnings.length && _react2.default.createElement(_MessageGroup.MessageGroup, {
      type: 'warning',
      title: 'There are ' + processedWarnings.length + ' warning(s)',
      expandText: 'Warning details',
      messages: processedWarnings
    }),
    validTableFiles.length && _react2.default.createElement(_MessageGroup.MessageGroup, {
      type: 'success',
      title: 'There are ' + validTableFiles.length + ' valid table(s)',
      expandText: 'Success details',
      messages: validTableFiles
    }),
    invalidTables.map(function (table, index) {
      return _react2.default.createElement(_InvalidTable.InvalidTable, {
        key: table.source,
        table: table,
        tableNumber: index + 1,
        tablesCount: invalidTables.length
      });
    })
  );
}

// Internal

function getProcessedWarnings(report) {
  return report.warnings.map(function (warning) {
    return (0, _helpers.removeBaseUrl)(warning);
  });
}

function getValidTableFiles(report) {
  return report.tables.filter(function (table) {
    return table.valid;
  }).map(function (table) {
    return (0, _helpers.removeBaseUrl)(table.source);
  });
}

function getInvalidTables(report) {
  return report.tables.filter(function (table) {
    return !table.valid;
  });
}