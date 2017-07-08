# goodtables-ui

[![Travis](https://img.shields.io/travis/frictionlessdata/goodtables-ui/master.svg)](https://travis-ci.org/frictionlessdata/goodtables-ui)
[![Coveralls](https://coveralls.io/repos/github/frictionlessdata/goodtables-ui/badge.svg?branch=master)](https://coveralls.io/github/frictionlessdata/goodtables-ui?branch=master)

[![Saucelabs](https://saucelabs.com/browser-matrix/goodtablesui.svg)](https://saucelabs.com/u/goodtablesui)

UI for goodtable as universal browser components ([DEMO](https://frictionlessdata.github.io/goodtables-ui/)).

## Features

- `Form` - goodtables validation form component
- `Report` -  [goodtables report]( https://github.com/frictionlessdata/goodtables-py#goodtables) component

## Getting Started

You could use this components in plain JavaScript code or mixing with any modern framework (with native support for React). To render `report` you have use `goodtablesUI.render(goodtablesUI.Report, props, element)` function.

First add bootstrap and component styles:

```html
  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="//unpkg.com/goodtables-ui/dist/goodtables-ui.min.css">
```

### Installation

#### NPM

> Install the package in your terminal `$ npm install --save goodtables-ui`

The package could be used as `goodtables-ui` package from NPM:

```javascript
import goodtablesUI from 'goodtables-ui'

const report = '<YOUR-REPORT>'
const element = document.getElementById('report')
goodtablesUI.render(goodtablesUI.Report, {report}, element)
```

#### CDN

> The distribution is 60kb minified (20kb gzipped) with no dependencies.

The package could be used as pluggable script from CDN:

```html
<div id="report"></div>
<script src="//unpkg.com/goodtables-ui/dist/goodtables-ui.min.js"></script>
<script>
  var report = '<YOUR-REPORT>'
  var element = document.getElementById('report')
  goodtablesUI.render(goodtablesUI.Report, {report}, element)
</script>
```

### Examples

#### React

> In this case your application should provide `react` and `react-dom`.

You could use presented components as native React component (import from `goodtables-ui/lib` to get native React support):

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import goodtablesUI from 'goodtables-ui/lib'

const report = '<YOUR-REPORT>'
const element = document.getElementById('report')
ReactDOM.render(<goodtablesUI.Report report={report} />, element)
```

#### Angular

> This example is for Angular2+. Use similliar approach for Angular1.

The package's components could be used as `angular` component:

```javascript
import {Component, Input} from '@angular/core';
import goodtablesUI from 'goodtablesUI'

@Component({
  selector: 'report',
  template: '<div id="report"></div>'
})
class Report {
  @Input() report: any;
  ngAfterViewInit() {
    const element = document.getElementById('report')
    goodtablesUI.render(goodtablesUI.Report, {report: this.report}, element)
  }
}
```

#### Vue

> This example is for Vue2+. Use similliar approach for Vue1.

The package's components could be used as `vue` component:

```javascript
import goodtablesUI from 'goodtablesUI'

const Report = {
  props: ['report'],
  template: '<div id="report"></div>',
  mounted() {
    const element = document.getElementById('report')
    goodtablesUI.render(goodtablesUI.Report, {report: this.report}, element)
  },
}
```

## Contributing

The project follows the [Open Knowledge International coding standards](https://github.com/okfn/coding-standards). There are common commands to work with the project:

```bash
$ npm run dev
$ npm run build
$ npm run test
```

## Changelog

Here described only breaking and the most important changes. The full changelog could be found in nicely formatted [commit history](https://github.com/frictionlessdata/goodtables-ui/commits/master).

### v0.3

New functionality added:
- `Form` component now supports source/schema uploading

### [v0.2](https://github.com/frictionlessdata/goodtables-ui/tree/v0.2.0)

New API added:
- published `Form` component

### [v0.1](https://github.com/frictionlessdata/goodtables-ui/tree/v0.1.7)

New API added:
- published `Report` component
- published `render` function
