'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = exports.Report = exports.render = undefined;

var _render = require('./render');

var _Report = require('./components/Report');

var _Form = require('./components/Form');

// Module API

exports.default = { render: _render.render, Report: _Report.Report, Form: _Form.Form };
exports.render = _render.render;
exports.Report = _Report.Report;
exports.Form = _Form.Form;