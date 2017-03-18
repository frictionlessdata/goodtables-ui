'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TableErrors;

var _react = require('react');

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