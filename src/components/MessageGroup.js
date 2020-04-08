import React from 'react'

// Module API

export class MessageGroup extends React.Component {
  // Public

  constructor({ type, title, messages }) {
    super({ type, title, messages })
    this.state = {}
  }

  render() {
    const { type, title, messages } = this.props
    return (
      <div className={`alert alert-${type}`} role="alert">
        <span className="title">{title}</span>
        <hr />
        <ul>
          {messages.map((message) => (
            <li key={message}>{message}</li>
          ))}
        </ul>
      </div>
    )
  }
}
