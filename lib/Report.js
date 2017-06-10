'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Report;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ReportTable = require('./ReportTable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Module API

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
    report.tables.map(function (table, index) {
      return _react2.default.createElement(_ReportTable.ReportTable, {
        key: table.source,
        table: table,
        tableNumber: index + 1,
        tablesCount: report.tables.length
      });
    })
  );
}