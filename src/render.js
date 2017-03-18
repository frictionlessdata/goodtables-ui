import React from 'react'
import ReactDOM from 'react-dom'

// Module API

export default function render(component, props, element) {
  ReactDOM.render(React.createElement(component, props, null), element)
}
