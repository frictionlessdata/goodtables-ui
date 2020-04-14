import React from 'react'
import ReactDOM from 'react-dom'
import spec from './spec.json'

/**
 * Render a component
 *
 * @param {Component} component - one of provided by the library component e.g. `Report`
 * @param {Object} props - object containing props
 * @param {Element} element - DOM element to render into
 */
export function render(component: any, props: any, element: any) {
  ReactDOM.render(React.createElement(component, { spec, ...props }, null), element)
}
