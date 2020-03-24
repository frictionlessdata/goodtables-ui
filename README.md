# goodtables-ui

[![Travis](https://img.shields.io/travis/frictionlessdata/goodtables-ui/master.svg)](https://travis-ci.org/frictionlessdata/goodtables-ui)
[![Coveralls](https://coveralls.io/repos/github/frictionlessdata/goodtables-ui/badge.svg?branch=master)](https://coveralls.io/github/frictionlessdata/goodtables-ui?branch=master)

[![Saucelabs](https://saucelabs.com/browser-matrix/goodtablesui.svg)](https://saucelabs.com/u/goodtablesui)

UI for `goodtables` as an framework-agnostic browser components ([DEMO](https://frictionlessdata.github.io/goodtables-ui/)).

## Features

- `render` - framework-agnostic component render
- `Report` -  [goodtables report]( https://github.com/frictionlessdata/goodtables-py#goodtables) component
- `Form` - goodtables validation form component

## Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Documentation](#documentation)
  - [React](#react)
  - [Angular](#angular)
  - [Vue](#vue)
- [API Reference](#api-reference)
  - [render(component, props, element)](#rendercomponent-props-element)
- [Contributing](#contributing)
- [Changelog](#changelog)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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

## Documentation

### React

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
  ngAfterViewInit() {
    const element = document.getElementById('report')
    goodtablesUI.render(goodtablesUI.Report, {report: this.report}, element)
  }
}
```

### Vue

> This example is for Vue2+. Use similar approach for Vue1.

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

## API Reference

### render(component, props, element)
Render component


| Param | Type | Description |
| --- | --- | --- |
| component | <code>Component</code> | one of provided by the library component e.g. `Report` |
| props | <code>Object</code> | object containing props |
| element | <code>Element</code> | DOM element to render into |


## Contributing

The project follows the [Open Knowledge International coding standards](https://github.com/okfn/coding-standards). There are common commands to work with the project:

```bash
$ npm run dev
$ npm run build
$ npm run test
```

## Changelog

Here described only breaking and the most important changes. The full changelog and documentation for all released versions could be found in nicely formatted [commit history](https://github.com/frictionlessdata/goodtables-ui/commits/master).

#### v1.3

- added support for custom specs

#### v1.2

- general improvements

#### v1.1

Improved behaviour:
- updated to Data Quality Spec v1
- added support for custom checks

#### v1.0

First stable realese.

#### v0.3

New functionality added:
- `Form` component now supports source/schema uploading

#### v0.2

New API added:
- published `Form` component

#### v0.1

New API added:
- published `Report` component
- published `render` function
