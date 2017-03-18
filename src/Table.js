import React from 'react'
import {propTypes} from 'react-props-decorators'
import TableErrors from './TableErrors'
import TableValues from './TableValues'

// Module API

@propTypes({
  table: React.PropTypes.object.isRequired,
})
export default class Table extends React.Component {

  // Public

  constructor(props) {
    super(props)
    this.state = {
      show: false,
      values: false,
    }
  }

  render() {
    const {table} = this.props
    if (table.valid) {
      return this.renderValidTable()
    } else {
      return this.renderInvalidTable()
    }
  }

  // Internal

  renderValidTable() {
    const {table} = this.props
    const source = this.getSource()
    return (
      <h3>
        {source}
        [{table['row-count']} rows/{table['error-count']} errors]
      </h3>
    )
  }

  renderInvalidTable() {
    const {table} = this.props
    const {show, values} = this.state
    const {id1, id2} = this.getIdentifiers()
    const source = this.getSource()
    return (
      <div>
        <h3 className="error" onClick={() => this.setState({show: !this.state.show})}>
          {source}
          [{table['row-count']} rows/{table['error-count']} errors]
          [{(show) ? '-' : '+'}]
        </h3>
        {show &&
          <div>
            <input id={id1} type="radio" name="tabs" defaultChecked />
            <label htmlFor={id1} onClick={() => this.setState({values: false})}>Errors view</label>
            <input id={id2} type="radio" name="tabs" />
            <label htmlFor={id2} onClick={() => this.setState({values: true})}>Values view</label>
            {values &&
              <TableValues table={table} />
            }
            {!values &&
              <TableErrors table={table} />
            }
          </div>
        }
      </div>
    )
  }

  getSource() {
    const {table} = this.props
    if (table.source.length > 50) {
      return `<truncated>/${table.source.split('/').pop()}`
    }
    return table.source
  }

  getIdentifiers() {
    return {
      id1: Math.random().toString(36).substring(10),
      id2: Math.random().toString(36).substring(10),
    }
  }

}
