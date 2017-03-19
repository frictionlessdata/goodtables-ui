# goodtables-ui

[![Travis](https://img.shields.io/travis/frictionlessdata/goodtables-ui/master.svg)](https://travis-ci.org/frictionlessdata/goodtables-ui)
[![Codecov](https://img.shields.io/codecov/c/github/frictionlessdata/goodtables-ui/master.svg)](https://codecov.io/gh/frictionlessdata/goodtables-ui)

[![Saucelabs](https://saucelabs.com/browser-matrix/goodtables-ui.svg)](https://saucelabs.com/u/goodtables-ui)

UI for goodtable as universal browser components:

- Report (visual representation of [goodtables report]( https://github.com/frictionlessdata/goodtables-py#goodtables))

## Demo

https://frictionlessdata.github.io/goodtables-ui/

## Usage

You could use this components in plain JavaScript code or mixing with any modern framework (with native support for React). To render `report` you have use `goodtablesUI.render(goodtablesUI.Report, props, element)` function.

First add bootstrap and component styles:

```html
  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="//unpkg.com/goodtables-ui/dist/goodtables-ui.min.css">
```

### CDN

> The distribution is 40kb minified (10kb gzipped) with no dependencies.

The package could be used as pluggable script from CDN:

```html
<div id="report"></div>
<script src="//unpkg.com/goodtables-ui/dist/goodtables-ui.min.js"></script>
<script>
  var report = <YOUR-REPORT>
  var element = document.getElementById('report')
  goodtablesUI.render(goodtablesUI.Report, {report: report}, element)
</script>
```

### NPM

> Install the package in your terminal `$ npm install --save goodtables-ui`

The package could be used as `goodtables-ui` package from NPM:

```javascript
import goodtablesUI from 'goodtables-UI'

const report = <YOUR-REPORT>
const element = document.getElementById('report')
goodtablesUI.render(goodtablesUI.Report, {report: report}, element)
```

### React

> In this case your application should provide `react` and `react-dom`.

You could use presented components as native React component (import from `goodtables-ui/lib` to get native React support):

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import goodtablesUI from 'goodtablesUI/lib'

const report = <YOUR-REPORT>
const element = document.getElementById('report')
ReactDOM.render(<goodtablesUI.Report report={report} />, element)
```

### Angular

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
  ngOnInit() {
    const element = document.getElementById('report')
    goodtablesUI.render(goodtablesUI.Report, {report: this.report}, element)
  }
}
```

### Vue

> This example is for Vue2+. Use similliar approach for Vue1.

The package's components could be used as `vue` component:

```javascript
import goodtablesUI from 'goodtablesUI'

const Report = {
  props: ['report'],
  template: '<div id="report"></div>',
  created() {
    var element = document.getElementById('report')
    goodtablesUI.render(goodtablesUI.Report, {report: report}, element)
  },
}
```

## Development

```bash
$ npm run dev
$ npm run build
$ npm run test
```
