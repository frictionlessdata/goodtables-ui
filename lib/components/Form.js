'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Report = require('./Report');

var _MessageGroup = require('./MessageGroup');

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Module API

var Form = exports.Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  // Public

  function Form(_ref) {
    var source = _ref.source,
        options = _ref.options,
        validate = _ref.validate,
        report = _ref.report,
        error = _ref.error;

    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, { source: source, options: options, validate: validate, report: report, error: error }));

    _this.state = {
      source: source || '',
      options: options || {},
      report: report,
      error: error
    };
    return _this;
  }

  _createClass(Form, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          source = _state.source,
          options = _state.options,
          report = _state.report,
          error = _state.error;

      var onSubmit = this.onSubmit.bind(this);
      var onSourceChange = this.onSourceChange.bind(this);
      var onOptionsChange = this.onOptionsChange.bind(this);
      return _react2.default.createElement(
        'form',
        { className: 'goodtables-ui-form panel panel-default' },
        _react2.default.createElement(FormSource, { source: source, onSourceChange: onSourceChange, onSubmit: onSubmit }),
        _react2.default.createElement(FormOptions, { options: options, onOptionsChange: onOptionsChange }),
        _react2.default.createElement(FormResult, { report: report, error: error })
      );
    }

    // Private

  }, {
    key: 'onSubmit',
    value: function onSubmit() {
      var _this2 = this;

      var validate = this.props.validate;
      var _state2 = this.state,
          source = _state2.source,
          options = _state2.options;

      validate(source, (0, _helpers.merge)(options)).then(function (report) {
        _this2.setState({ report: report });
      }).catch(function (error) {
        _this2.setState({ error: error });
      });
    }
  }, {
    key: 'onSourceChange',
    value: function onSourceChange(value) {
      this.setState({ source: value });
    }
  }, {
    key: 'onOptionsChange',
    value: function onOptionsChange(key, value) {
      var options = (0, _helpers.merge)(this.state.options, _defineProperty({}, key, value));
      if (!value) delete options[key];
      this.setState({ options: options });
    }
  }]);

  return Form;
}(_react2.default.Component);

// Internal

function FormSource(_ref2) {
  var source = _ref2.source,
      onSourceChange = _ref2.onSourceChange,
      onSubmit = _ref2.onSubmit;

  return _react2.default.createElement(
    'div',
    { className: 'form-inline' },
    _react2.default.createElement(
      'label',
      { htmlFor: 'source' },
      'Source'
    ),
    _react2.default.createElement(
      'div',
      { className: 'input-group', style: { width: '100%' } },
      _react2.default.createElement('input', {
        name: 'source',
        className: 'form-control',
        type: 'text',
        value: source,
        placeholder: 'http://data.source/url',
        onChange: function onChange(ev) {
          return onSourceChange(ev.target.value);
        }
      }),
      _react2.default.createElement(
        'div',
        { className: 'input-group-btn', style: { width: '1%' } },
        _react2.default.createElement(
          'button',
          {
            className: 'btn btn-success',
            onClick: function onClick(ev) {
              ev.preventDefault();onSubmit();
            }
          },
          'Validate'
        )
      )
    )
  );
}

function FormOptions(_ref3) {
  var options = _ref3.options,
      onOptionsChange = _ref3.onOptionsChange;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement('hr', null),
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-10' },
        _react2.default.createElement(
          'label',
          { htmlFor: 'schema' },
          'Schema'
        ),
        _react2.default.createElement('input', {
          type: 'text',
          className: 'form-control',
          name: 'schema',
          value: options.schema,
          placeholder: 'http://table.schema/url',
          onChange: function onChange(ev) {
            return onOptionsChange('schema', ev.target.value);
          }
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-2' },
        _react2.default.createElement(
          'label',
          { htmlFor: 'skipRows' },
          'Skip Rows'
        ),
        _react2.default.createElement('input', {
          type: 'text',
          className: 'form-control',
          name: 'skipRows',
          value: options.skipRows ? options.skipRows[options.skipRows.length - 1] : '',
          placeholder: '0',
          onChange: function onChange(ev) {
            var length = parseInt(ev.target.value, 10) || 0;
            var skipRows = [].concat(_toConsumableArray(Array(length).keys())).map(function (i) {
              return i + 1;
            });
            onOptionsChange('skipRows', length ? skipRows : null);
          }
        })
      )
    ),
    _react2.default.createElement('hr', null),
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col-md-2' },
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'checks' },
            'Checks'
          ),
          _react2.default.createElement(
            'select',
            {
              name: 'checks',
              value: options.checks,
              className: 'form-control',
              onChange: function onChange(ev) {
                return onOptionsChange('checks', ev.target.value);
              }
            },
            _react2.default.createElement(
              'option',
              { value: '' },
              'Auto'
            ),
            _react2.default.createElement(
              'option',
              { value: 'structure' },
              'Structure'
            ),
            _react2.default.createElement(
              'option',
              { value: 'schema' },
              'Schema'
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-md-2' },
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'format' },
            'Format'
          ),
          _react2.default.createElement(
            'select',
            {
              name: 'format',
              value: options.format,
              className: 'form-control',
              onChange: function onChange(ev) {
                return onOptionsChange('format', ev.target.value);
              }
            },
            _react2.default.createElement(
              'option',
              { value: '' },
              'Auto'
            ),
            _react2.default.createElement(
              'option',
              { value: 'csv' },
              'CSV'
            ),
            _react2.default.createElement(
              'option',
              { value: 'xls' },
              'XLS'
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-md-2' },
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'encoding' },
            'Encoding'
          ),
          _react2.default.createElement(
            'select',
            {
              name: 'encoding',
              value: options.encoding,
              className: 'form-control',
              onChange: function onChange(ev) {
                return onOptionsChange('encoding', ev.target.value);
              }
            },
            _react2.default.createElement(
              'option',
              { value: '' },
              'Auto'
            ),
            _react2.default.createElement(
              'option',
              { value: 'utf-8' },
              'UTF-8'
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-2' },
        _react2.default.createElement(
          'label',
          { htmlFor: 'errorLimit' },
          'Error Limit'
        ),
        _react2.default.createElement('input', {
          type: 'text',
          className: 'form-control',
          name: 'errorLimit',
          value: options.errorLimit,
          placeholder: '1000',
          onChange: function onChange(ev) {
            return onOptionsChange('errorLimit', parseInt(ev.target.value, 10));
          }
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-2' },
        _react2.default.createElement(
          'label',
          { htmlFor: 'tableLimit' },
          'Table Limit'
        ),
        _react2.default.createElement('input', {
          type: 'text',
          className: 'form-control',
          name: 'tableLimit',
          value: options.tableLimit,
          placeholder: '10',
          onChange: function onChange(ev) {
            return onOptionsChange('tableLimit', parseInt(ev.target.value, 10));
          }
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-2' },
        _react2.default.createElement(
          'label',
          { htmlFor: 'rowLimit' },
          'Row Limit'
        ),
        _react2.default.createElement('input', {
          type: 'text',
          className: 'form-control',
          name: 'rowLimit',
          value: options.rowLimit,
          placeholder: '100',
          onChange: function onChange(ev) {
            return onOptionsChange('rowLimit', parseInt(ev.target.value, 10));
          }
        })
      )
    )
  );
}

function FormResult(_ref4) {
  var report = _ref4.report,
      error = _ref4.error;

  return _react2.default.createElement(
    'div',
    null,
    (report || error) && _react2.default.createElement('hr', null),
    error && _react2.default.createElement(_MessageGroup.MessageGroup, {
      type: 'warning',
      title: 'There is fatal error in validation',
      expandText: 'Error details',
      messages: [error.message]
    }),
    report && _react2.default.createElement(
      'div',
      null,
      report.permalink && _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'alert alert-info' },
          _react2.default.createElement(
            'strong',
            null,
            'Permalink:'
          ),
          ' ',
          _react2.default.createElement(
            'a',
            { href: report.permalink },
            report.permalink
          )
        ),
        _react2.default.createElement('hr', null)
      ),
      _react2.default.createElement(_Report.Report, { report: report })
    )
  );
}