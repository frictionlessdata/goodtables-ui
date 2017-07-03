import React from 'react'
import {Report} from './Report'
import {MessageGroup} from './MessageGroup'
import {merge} from '../helpers'


// Module API

export class Form extends React.Component {

  // Public

  constructor({source, options, validate, report, error}) {
    super({source, options, validate, report, error})
    this.state = {
      source: source || '',
      options: options || {},
      report,
      error,
    }
  }

  render() {
    const {source, options, report, error} = this.state
    const onSubmit = this.onSubmit.bind(this)
    const onSourceChange = this.onSourceChange.bind(this)
    const onOptionsChange = this.onOptionsChange.bind(this)
    return (
      <form className="goodtables-ui-form panel panel-default">
        <FormSource source={source} onSourceChange={onSourceChange} onSubmit={onSubmit} />
        <FormOptions options={options} onOptionsChange={onOptionsChange} />
        <FormResult report={report} error={error} />
      </form>
    )
  }

  // Private

  onSubmit() {
    const {validate} = this.props
    const {source, options} = this.state
    validate(source, merge(options)).then(report => {
      this.setState({report})
    }).catch(error => {
      this.setState({error})
    })
  }

  onSourceChange(value) {
    this.setState({source: value})
  }

  onOptionsChange(key, value) {
    const options = merge(this.state.options, {[key]: value})
    if (!value) delete options[key]
    this.setState({options})
  }

}


// Internal

function FormSource({source, onSourceChange, onSubmit}) {
  return (
    <div className="form-inline">
      <label htmlFor="source">Source</label>
      <div className="input-group" style={{width: '100%'}}>

        <input
          name="source"
          className="form-control"
          type="text"
          value={source}
          placeholder="http://data.source/url"
          onChange={ev => onSourceChange(ev.target.value)}
        />

        <div className="input-group-btn" style={{width: '1%'}}>
          <button
            className="btn btn-success"
            onClick={ev => { ev.preventDefault(); onSubmit() }}
          >
            Validate
          </button>
        </div>

      </div>
    </div>
  )
}


function FormOptions({options, onOptionsChange}) {
  return (
    <div>
      <hr />
      <div className="row">

        <div className="form-group col-md-10">
          <label htmlFor="schema">Schema</label>
          <input
            type="text"
            className="form-control"
            name="schema"
            value={options.schema}
            placeholder="http://table.schema/url"
            onChange={ev => onOptionsChange('schema', ev.target.value)}
          />
        </div>

        <div className="form-group col-md-2">
          <label htmlFor="skipRows">Skip Rows</label>
          <input
            type="text"
            className="form-control"
            name="skipRows"
            value={(options.skipRows) ? options.skipRows[options.skipRows.length - 1] : ''}
            placeholder="0"
            onChange={ev => {
              const length = parseInt(ev.target.value, 10) || 0
              const skipRows = [...Array(length).keys()].map(i => i + 1)
              onOptionsChange('skipRows', length ? skipRows : null)
            }}
          />
        </div>

      </div>
      <hr />
      <div className="row">

        <div className="col-md-2">
          <div className="form-group">
            <label htmlFor="checks">Checks</label>
            <select
              name="checks"
              value={options.checks}
              className="form-control"
              onChange={ev => onOptionsChange('checks', ev.target.value)}
            >
              <option value="">Auto</option>
              <option value="structure">Structure</option>
              <option value="schema">Schema</option>
            </select>
          </div>
        </div>

        <div className="col-md-2">
          <div className="form-group">
            <label htmlFor="format">Format</label>
            <select
              name="format"
              value={options.format}
              className="form-control"
              onChange={ev => onOptionsChange('format', ev.target.value)}
            >
              <option value="">Auto</option>
              <option value="csv">CSV</option>
              <option value="xls">XLS</option>
            </select>
          </div>
        </div>

        <div className="col-md-2">
          <div className="form-group">
            <label htmlFor="encoding">Encoding</label>
            <select
              name="encoding"
              value={options.encoding}
              className="form-control"
              onChange={ev => onOptionsChange('encoding', ev.target.value)}
            >
              <option value="">Auto</option>
              <option value="utf-8">UTF-8</option>
            </select>
          </div>
        </div>

        <div className="form-group col-md-2">
          <label htmlFor="errorLimit">Error Limit</label>
          <input
            type="text"
            className="form-control"
            name="errorLimit"
            value={options.errorLimit}
            placeholder="1000"
            onChange={ev => onOptionsChange('errorLimit', parseInt(ev.target.value, 10))}
          />
        </div>

        <div className="form-group col-md-2">
          <label htmlFor="tableLimit">Table Limit</label>
          <input
            type="text"
            className="form-control"
            name="tableLimit"
            value={options.tableLimit}
            placeholder="10"
            onChange={ev => onOptionsChange('tableLimit', parseInt(ev.target.value, 10))}
          />
        </div>

        <div className="form-group col-md-2">
          <label htmlFor="rowLimit">Row Limit</label>
          <input
            type="text"
            className="form-control"
            name="rowLimit"
            value={options.rowLimit}
            placeholder="100"
            onChange={ev => onOptionsChange('rowLimit', parseInt(ev.target.value, 10))}
          />
        </div>
      </div>
    </div>
  )
}


function FormResult({report, error}) {
  return (
    <div>
      {(report || error) &&
        <hr />
      }

      {error &&
        <MessageGroup
          type="warning"
          title={'There is fatal error in validation'}
          expandText="Error details"
          messages={[error.message]}
        />
      }

      {report &&
        <div>
          {report.permalink &&
            <div>
              <div className="alert alert-info">
                <strong>Permalink:</strong> <a href={report.permalink}>{report.permalink}</a>
              </div>
              <hr />
            </div>
          }
          <Report report={report} />
        </div>
      }
    </div>
  )
}
