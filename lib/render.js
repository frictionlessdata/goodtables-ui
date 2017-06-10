'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Module API

function render(component, props, element) {
  _reactDom2.default.render(_react2.default.createElement(component, props, null), element);
}