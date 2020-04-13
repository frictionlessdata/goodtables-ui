import React from 'react'

// Module API

export function MessageGroup({ type, title, messages }) {
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
