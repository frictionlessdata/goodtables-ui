import React from 'react'
import ReactDOM from 'react-dom'
const spec = require('./spec.json')

/**
 * Render a component
 *
 * @param {Component} component - one of provided by the library component e.g. `Report`
 * @param {Object} props - object containing props
 * @param {Element} element - DOM element to render into
 */
export function render(component, props, element) {
  ReactDOM.render(React.createElement(component, { spec, ...props }, null), element)
}
