"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageGroup = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Module API

var MessageGroup = exports.MessageGroup = function (_React$Component) {
  _inherits(MessageGroup, _React$Component);

  // Public

  function MessageGroup(_ref) {
    var type = _ref.type,
        title = _ref.title,
        messages = _ref.messages,
        expandText = _ref.expandText;

    _classCallCheck(this, MessageGroup);

    var _this = _possibleConstructorReturn(this, (MessageGroup.__proto__ || Object.getPrototypeOf(MessageGroup)).call(this, { type: type, title: title, messages: messages, expandText: expandText }));

    _this.state = {
      isExpanded: false
    };
    return _this;
  }

  _createClass(MessageGroup, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          type = _props.type,
          title = _props.title,
          messages = _props.messages,
          expandText = _props.expandText;
      var isExpanded = this.state.isExpanded;

      return _react2.default.createElement(
        "div",
        { className: "alert alert-" + type, role: "alert" },
        _react2.default.createElement(
          "span",
          { className: "title", onClick: function onClick() {
              return _this2.setState({ isExpanded: !isExpanded });
            } },
          title
        ),
        _react2.default.createElement(
          "a",
          { className: "show-details", onClick: function onClick() {
              return _this2.setState({ isExpanded: !isExpanded });
            } },
          expandText
        ),
        isExpanded && _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement("hr", null),
          _react2.default.createElement(
            "ul",
            null,
            messages.map(function (message) {
              return _react2.default.createElement(
                "li",
                null,
                message
              );
            })
          )
        )
      );
    }
  }]);

  return MessageGroup;
}(_react2.default.Component);