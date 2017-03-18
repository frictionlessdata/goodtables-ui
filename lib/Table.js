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

var _TableErrors = require('./TableErrors');

var _TableErrors2 = _interopRequireDefault(_TableErrors);

var _TableValues = require('./TableValues');

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