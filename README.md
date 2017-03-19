# goodtables-ui

[![Travis](https://img.shields.io/travis/frictionlessdata/goodtables-ui/master.svg)](https://travis-ci.org/frictionlessdata/goodtables-ui)
[![Codecov](https://img.shields.io/codecov/c/github/frictionlessdata/goodtables-ui/master.svg)](https://codecov.io/gh/frictionlessdata/goodtables-ui)

[![Saucelabs](https://saucelabs.com/browser-matrix/goodtables-ui.svg)](https://saucelabs.com/u/goodtables-ui)

UI for goodtable as universal browser components:

- Report (visual representation of [goodtables report]( https://github.com/frictionlessdata/goodtables-py#goodtables))

## Demo

https://frictionlessdata.github.io/goodtables-ui/

## Usage

> Add bootstrap and component styles:

```html
  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="//unpkg.com/goodtables-ui/dist/goodtables-ui.min.css">
```

> Install package (skip if you prefer CDN):

```bash
$ npm install --save goodtables-ui
```

### Plain

> The distributive is 40kb minified (10kb gzipped) with no additional dependencies.

You could use this components in plain JavaScript code. To render `report` you have use `goodtablesUI.render(component, props, element)` function.

It could be done using CDN distribution:

```html
<div id="report"></div>
<script src="//unpkg.com/goodtables-ui/dist/goodtables-ui.min.js"></script>
<script>
  var element = document.getElementById('report')
  goodtablesUI.render(goodtablesUI.Report, {report: report}, element)
</script>
```

Or using `goodtables-ui` package from NPM:

```javascript
import goodtablesUI from 'goodtables-UI'

goodtablesUI.render(goodtablesUI.Report, {report: report}, element)
```

### React

> In this case your application should provide `react` and `react-dom`.

You could use presented components as native React components (import should be done using `goodtables-ui/lib`):

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import goodtablesUI from 'goodtablesUI/lib'

ReactDOM.render(<goodtablesUI.Report report={report} />, element)
```

### Angular

> This example is for Angular2+. Use similliar approach for Angular1.

The package's components could be used as `angular` components:

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
    var element = document.getElementById('report')
    goodtablesUI.render(goodtablesUI.Report, {report: this.report}, element)
  }
}
```

### Vue

The package's components could be used as `vue` components:

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
