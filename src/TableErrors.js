import React from 'react'

// Module API

TableErrors.propTypes = {
  table: React.PropTypes.object.isRequired,
}
export default function TableErrors({table}) {
  return (
    <div>
      <table className="error">
        <thead>
          <tr>
            <th>Row</th>
            <th>Col</th>
            <th>Code</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {table.errors.map((error, index) =>
            <tr key={index}>
              <td>{error['row-number'] || 'H'}</td>
              <td>{error['column-number'] || '-'}</td>
              <td>{error.code}</td>
              <td>{error.message}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
