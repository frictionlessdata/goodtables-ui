# goodtables-ui

[![Travis](https://img.shields.io/travis/frictionlessdata/goodtables-ui/master.svg)](https://travis-ci.org/frictionlessdata/goodtables-ui)
[![Coveralls](https://coveralls.io/repos/github/frictionlessdata/goodtables-ui/badge.svg?branch=master)](https://coveralls.io/github/frictionlessdata/goodtables-ui?branch=master)

A web UI for goodtables validation and report visualizations. (Demo: [FORM](https://frictionlessdata.github.io/goodtables-ui/)/[REPORT](https://frictionlessdata.github.io/goodtables-ui/report.html)).

## Features

- `render` - framework-agnostic component render
- `Report` -  [goodtables report]( https://github.com/frictionlessdata/goodtables-py#goodtables) component
- `Form` - goodtables validation form component

## Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Installation](#installation)
- [Documentation](#documentation)
  - [General usage](#general-usage)
  - [In-React usage](#in-react-usage)
  - [Component: `Report`](#component-report)
  - [Component: `Form`](#component-form)
- [API Reference](#api-reference)
  - [render(component, props, element)](#rendercomponent-props-element)
- [Contributing](#contributing)
- [Changelog](#changelog)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Getting Started

You can use this components in plain JavaScript code or mixing with any modern framework (with native support for React). To render `report` you have use `goodtablesUI.render(goodtablesUI.Report, props, element)` function.

### Requirements

It requires adding bootstrap and component styles to your HTML (or requiring it within your scripts):

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

### General usage

This library can be used in a vanilla JavaScript environment or mixed with some framework like Angular or Vue:

```javascript
import goodtablesUI from 'goodtables-ui'

const report = '<YOUR-REPORT>'
const element = document.getElementById('report')
goodtablesUI.render(goodtablesUI.Report, {report}, element)
```

### In-React usage

> In this case your application should provide `react` and `react-dom`.

You can use the components as native components (import from `goodtables-ui/lib` to get React sources):

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import goodtablesUI from 'goodtables-ui/lib'

const report = '<YOUR-REPORT>'
const element = document.getElementById('report')
ReactDOM.render(<goodtablesUI.Report report={report} />, element)
```

### Component: `Report`

The `Report` component accepts the folowing props:
- `report` - a valid goodtables report
- `spec?` - an optional custom goodtables spec

Here is a example of the spec customization:

```
const spec = goodtablesUI.spec
spec.errors['blank-header'].description = 'New description'
spec.errors['duplicate-row'].hexColor = '0700fd'
```

### Component: `Form`

The `Form` component accepts the following props:
- `source` - goodtables validation source
- `options` - goodtables validation options
- `validate` - a function in a form of `(source: ISource, options: IOptions): Promise<IReport>`
- `reportPromise?` - a valid goodtables report in a form of Promise
- `spec?` - an optional custom goodtables spec


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

#### v2.0

- Rebased on bootstrap4
- Add color customization

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
