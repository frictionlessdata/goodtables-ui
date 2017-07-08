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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
        reportPromise = _ref.reportPromise;

    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, { source: source, options: options, validate: validate, reportPromise: reportPromise }));

    _this.state = {
      isSourceFile: false,
      isSchemaFile: false,
      source: source || '',
      options: options || {},
      report: null,
      error: null
    };
    return _this;
  }

  _createClass(Form, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.reportPromise) {
        this.props.reportPromise.then(function (report) {
          _this2.setState({ report: report });
        }).catch(function (error) {
          _this2.setState({ error: error });
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          isSourceFile = _state.isSourceFile,
          isSchemaFile = _state.isSchemaFile;
      var _state2 = this.state,
          source = _state2.source,
          options = _state2.options,
          report = _state2.report,
          error = _state2.error;

      var onSourceTypeChange = this.onSourceTypeChange.bind(this);
      var onSchemaTypeChange = this.onSchemaTypeChange.bind(this);
      var onSourceChange = this.onSourceChange.bind(this);
      var onOptionsChange = this.onOptionsChange.bind(this);
      var onSubmit = this.onSubmit.bind(this);
      return _react2.default.createElement(
        'form',
        { className: 'goodtables-ui-form panel panel-default' },
        _react2.default.createElement(
          'div',
          { className: 'form-inline' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'source' },
            'Source'
          ),
          '\xA0 [',
          _react2.default.createElement(
            'a',
            { href: '#', onClick: function onClick(ev) {
                return onSourceTypeChange();
              } },
            isSourceFile ? 'Provide Link' : 'Upload File'
          ),
          ']',
          _react2.default.createElement(
            'div',
            { className: 'input-group', style: { width: '100%' } },
            !isSourceFile && _react2.default.createElement('input', {
              name: 'source',
              className: 'form-control',
              type: 'text',
              value: source,
              placeholder: 'http://data.source/url',
              onChange: function onChange(ev) {
                return onSourceChange(ev.target.value);
              }
            }),
            isSourceFile && _react2.default.createElement('input', {
              name: 'source',
              className: 'form-control',
              type: 'file',
              placeholder: 'http://data.source/url',
              onChange: function onChange(ev) {
                return onSourceChange(ev.target.files[0]);
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
        ),
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
            '\xA0 [',
            _react2.default.createElement(
              'a',
              { href: '#', onClick: function onClick(ev) {
                  return onSchemaTypeChange();
                } },
              isSchemaFile ? 'Provide Link' : 'Upload File'
            ),
            ']',
            !isSchemaFile && _react2.default.createElement('input', {
              type: 'text',
              className: 'form-control',
              name: 'schema',
              value: options.schema,
              placeholder: 'http://table.schema/url',
              onChange: function onChange(ev) {
                return onOptionsChange('schema', ev.target.value);
              }
            }),
            isSchemaFile && _react2.default.createElement('input', {
              type: 'file',
              className: 'form-control',
              name: 'schema',
              placeholder: 'http://table.schema/url',
              onChange: function onChange(ev) {
                return onOptionsChange('schema', ev.target.files[0]);
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
        ),
        _react2.default.createElement('hr', null),
        error && _react2.default.createElement(_MessageGroup.MessageGroup, {
          type: 'warning',
          title: 'There is fatal error in validation',
          expandText: 'Error details',
          messages: [error.message]
        }),
        report && _react2.default.createElement(
          'div',
          null,
          location.search && _react2.default.createElement(
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
              '\xA0',
              _react2.default.createElement(
                'a',
                { href: location.href },
                location.href
              )
            ),
            _react2.default.createElement('hr', null)
          ),
          _react2.default.createElement(_Report.Report, { report: report })
        )
      );
    }

    // Private

  }, {
    key: 'onSourceTypeChange',
    value: function onSourceTypeChange() {
      this.setState({ isSourceFile: !this.state.isSourceFile });
      this.onSourceChange('');
    }
  }, {
    key: 'onSchemaTypeChange',
    value: function onSchemaTypeChange() {
      this.setState({ isSchemaFile: !this.state.isSchemaFile });
      this.onOptionsChange('schema', '');
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
  }, {
    key: 'onSubmit',
    value: function onSubmit() {
      var _this3 = this;

      var validate = this.props.validate;
      var _state3 = this.state,
          source = _state3.source,
          options = _state3.options;

      validate(source, (0, _helpers.merge)(options)).then(function (report) {
        _this3.setState({ report: report });
      }).catch(function (error) {
        _this3.setState({ error: error });
      });
    }
  }]);

  return Form;
}(_react2.default.Component);