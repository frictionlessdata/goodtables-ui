import React from 'react'
import classNames from 'classnames'

// Module API

export default class TableValues extends React.Component {

  // Public

  static propTypes = {
    table: React.PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      expandedRows: [],
    }
  }

  render() {
    const rows = this.getRows()
    return (
      <div>
        <table className="values error">
          <tbody>
            {rows.map((row, rowNumber) =>
              !!row && [
                this.renderValuesTr(row, rowNumber),
                this.renderErrorListTr(row, rowNumber),
              ]
            )}
          </tbody>
        </table>
        <p className="help">*click on a row to see errors</p>
      </div>
    )
  }

  // Internal

  renderValuesTr(row, rowNumber) {
    return (
      <tr key={`values-${rowNumber}`} onClick={() => this.toggleExpandedRow(rowNumber)}>
        <td className="row-number">{rowNumber || 'H'}</td>
        {row.values.map((value, colNumber) =>
          !!colNumber &&
          <td key={colNumber} className={classNames({error: row.badcols.includes(colNumber)})}>
            {value}
          </td>
        )}
      </tr>
    )
  }

  renderErrorListTr(row, rowNumber) {
    const {expandedRows} = this.state
    if (expandedRows.includes(rowNumber)) {
      return (
        <tr key={`error-list-${rowNumber}`}>
          <td className="errors" colSpan="100%">
            {row.errors.map((error, index) =>
              <div key={index}>
                [{error['column-number'] || '-'}] {error.message}
              </div>
            )}
          </td>
        </tr>
      )
    }
  }

  getRows() {
    const {table} = this.props
    const rows = []
    for (const error of table.errors) {
      const rowNumber = error['row-number'] || 0
      const values = [null, ...((rowNumber === 0) ? table.headers : error.row)]
      const headers = [null, ...table.headers]
      // Initial
      if (!rows[rowNumber]) rows[rowNumber] = {values: [], badcols: [], errors: []}
      // Values
      if (error.code === 'blank-row') {
        rows[rowNumber].values = headers.map(() => '')
      } else {
        rows[rowNumber].values = values
        if (error.code === 'missing-value') {
          rows[rowNumber].values[error['column-number']] = ''
        }
      }
      // Badcols
      if (!error['column-number']) {
        const base = (error.code === 'blank-row') ? headers : values
        rows[rowNumber].badcols = base.map((value, index) => index).filter(Boolean)
      } else {
        rows[rowNumber].badcols.push(error['column-number'])
      }
      // Errors
      rows[rowNumber].errors.push(error)
    }
    return rows
  }

  toggleExpandedRow(rowNumber) {
    let expandedRows = [...this.state.expandedRows]
    if (expandedRows.includes(rowNumber)) {
      expandedRows = expandedRows.filter(value => value !== rowNumber)
    } else {
      expandedRows.push(rowNumber)
    }
    this.setState({expandedRows})
  }
}
