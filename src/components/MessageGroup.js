import React from 'react'

// Module API

export class MessageGroup extends React.Component {
  // Public

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { type, title, messages } = this.props
    return (
      <div className={`alert alert-${type}`} role="alert">
        <span className="title">{title}</span>
        <hr />
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </div>
    )
  }
}
