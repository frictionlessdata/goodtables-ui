'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorGroup = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var spec = require('../spec.json');

// Module API

var ErrorGroup = exports.ErrorGroup = function (_React$Component) {
  _inherits(ErrorGroup, _React$Component);

  // Public

  function ErrorGroup(_ref) {
    var errorGroup = _ref.errorGroup;

    _classCallCheck(this, ErrorGroup);

    var _this = _possibleConstructorReturn(this, (ErrorGroup.__proto__ || Object.getPrototypeOf(ErrorGroup)).call(this, { errorGroup: errorGroup }));

    _this.state = {
      showErrorDetails: false,
      visibleRowsCount: 10
    };
    return _this;
  }

  _createClass(ErrorGroup, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var errorGroup = this.props.errorGroup;
      var _state = this.state,
          showErrorDetails = _state.showErrorDetails,
          visibleRowsCount = _state.visibleRowsCount;

      var errorDetails = getErrorDetails(errorGroup);
      var showHeaders = getShowHeaders(errorDetails);
      var description = getDescription(errorDetails);
      var rowNumbers = getRowNumbers(errorGroup);
      return _react2.default.createElement(
        'div',
        { className: 'result panel panel-danger' },
        _react2.default.createElement(
          'div',
          { className: 'panel-heading' },
          _react2.default.createElement(
            'span',
            { className: 'text-uppercase label label-danger' },
            'Invalid'
          ),
          _react2.default.createElement(
            'span',
            { className: 'text-uppercase label label-info' },
            errorDetails.type
          ),
          _react2.default.createElement(
            'span',
            { className: 'count label' },
            errorGroup.count
          ),
          _react2.default.createElement(
            'h5',
            { className: 'panel-title' },
            _react2.default.createElement(
              'a',
              { onClick: function onClick() {
                  return _this2.setState({ showErrorDetails: !showErrorDetails });
                } },
              errorDetails.name
            )
          ),
          _react2.default.createElement(
            'a',
            { className: 'error-details-link', onClick: function onClick() {
                return _this2.setState({ showErrorDetails: !showErrorDetails });
              } },
            'Error details'
          )
        ),
        showErrorDetails && _react2.default.createElement(
          'div',
          { className: 'panel-heading error-details' },
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: description } })
          )
        ),
        showErrorDetails && _react2.default.createElement(
          'div',
          { className: 'panel-heading error-details' },
          _react2.default.createElement(
            'p',
            null,
            'The full list of error messages:'
          ),
          _react2.default.createElement(
            'ul',
            null,
            errorGroup.messages.map(function (message) {
              return _react2.default.createElement(
                'li',
                null,
                message
              );
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'panel-body' },
          _react2.default.createElement(
            'div',
            { className: 'table-container' },
            _react2.default.createElement(
              'table',
              { className: 'table table-bordered table-condensed' },
              showHeaders && _react2.default.createElement(ErrorGroupTableHead, { headers: errorGroup.headers }),
              _react2.default.createElement(ErrorGroupTableBody, {
                errorGroup: errorGroup,
                visibleRowsCount: visibleRowsCount,
                rowNumbers: rowNumbers
              })
            )
          ),
          visibleRowsCount < rowNumbers.length && _react2.default.createElement(
            'div',
            { className: 'show-more' },
            _react2.default.createElement(
              'a',
              { onClick: this.setState({ visibleRowsCount: visibleRowsCount + 10 }) },
              'Show next 10 rows'
            )
          )
        )
      );
    }
  }]);

  return ErrorGroup;
}(_react2.default.Component);

// Internal

function ErrorGroupTableHead(_ref2) {
  var headers = _ref2.headers;

  return _react2.default.createElement(
    'thead',
    null,
    _react2.default.createElement(
      'tr',
      null,
      _react2.default.createElement('th', null),
      headers.map(function (header) {
        return _react2.default.createElement(
          'th',
          null,
          header
        );
      })
    )
  );
}

function ErrorGroupTableBody(_ref3) {
  var errorGroup = _ref3.errorGroup,
      visibleRowsCount = _ref3.visibleRowsCount,
      rowNumbers = _ref3.rowNumbers;

  return _react2.default.createElement(
    'tbody',
    null,
    rowNumbers.map(function (rowNumber, index) {
      return index < visibleRowsCount && _react2.default.createElement(
        'tr',
        { className: 'result-header-row' },
        rowNumber !== null && _react2.default.createElement(
          'td',
          { className: 'result-row-index' },
          rowNumber
        ),
        errorGroup.rows[rowNumber].values.map(function (value, innerIndex) {
          return _react2.default.createElement(
            'td',
            { className: (0, _classnames2.default)({ danger: errorGroup.rows[rowNumber].badcols.has(innerIndex + 1) }) },
            value
          );
        })
      );
    })
  );
}

function getErrorDetails(errorGroup) {
  return spec.errors[errorGroup.code];
}

function getShowHeaders(errorDetails) {
  return errorDetails.context === 'body';
}

function getDescription(errorDetails) {
  var description = errorDetails.description.replace('{validator}', '`goodtables.yml`');
  return (0, _marked2.default)(description);
}

function getRowNumbers(errorGroup) {
  return Object.keys(errorGroup.rows).map(function (item) {
    return parseInt(item, 10) || null;
  }).sort(function (a, b) {
    return a - b;
  });
}