import React from 'react'
import marked from 'marked'
import classNames from 'classnames'
import startCase from 'lodash/startCase'
const spec = require('../spec.json')


// Module API

export class ErrorGroup extends React.Component {

  // Public

  constructor({errorGroup}) {
    super({errorGroup})
    this.state = {
      showErrorDetails: false,
      visibleRowsCount: 10,
    }
  }

  render() {
    const {errorGroup} = this.props
    const {showErrorDetails, visibleRowsCount} = this.state
    const errorDetails = getErrorDetails(errorGroup)
    const showHeaders = getShowHeaders(errorDetails)
    const description = getDescription(errorDetails)
    const rowNumbers = getRowNumbers(errorGroup)
    return (
      <div className="result">

        {/* Heading */}
        <div>
          <a
            role="button"
            className={classNames({label: true, 'label-error': true, collapsed: !showErrorDetails})}
            data-toggle="collapse"
            onClick={() => this.setState({showErrorDetails: !showErrorDetails})}
            aria-expanded="false"
          >
            {errorDetails.name}
          </a>
          <span class="count">x {errorGroup.count}</span>
        </div>

        {/* Error details */}
        <div className={classNames(['collapse', {in: showErrorDetails}])}>
          <div className="error-details">
            {description &&
              <div className="error-description">
                <div dangerouslySetInnerHTML={{__html: description}} />
              </div>
            }
            <div className="error-list">
              <p className="error-list-heading">
                The full list of error messages:
              </p>
              <ul>
                {errorGroup.messages.map(message =>
                  <li>{message}</li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Table view */}
        <div className="table-view">
          <div className="inner">
            <table className="table">
              {errorGroup.headers && showHeaders &&
                <ErrorGroupTableHead headers={errorGroup.headers} />
              }
              <ErrorGroupTableBody
                errorGroup={errorGroup}
                visibleRowsCount={visibleRowsCount}
                rowNumbers={rowNumbers}
              />
            </table>
          </div>
        </div>

        {/* Show more */}
        {(visibleRowsCount < rowNumbers.length) &&
          <a
            onClick={() => {this.setState({visibleRowsCount: visibleRowsCount + 10})}}
            className="show-more"
          >
            Show more <span class="icon-keyboard_arrow_down"></span>
          </a>
        }

      </div>
    )
  }
}


// Internal

function ErrorGroupTableHead({headers}) {
  return (
    <tbody>
      <tr class="before-fail">
        {headers.map(header =>
          <td>{header}</td>
        )}
      </tr>
    </tbody>
  )
}


function ErrorGroupTableBody({headers, errorGroup, visibleRowsCount, rowNumbers}) {
  return (
    <tbody>
      {rowNumbers.map((rowNumber, index) => (
        (index < visibleRowsCount) &&
          <tr className={classNames({fail: errorGroup.code.includes('row')})}>
            {(rowNumber !== null) &&
              <td className="result-row-index">{rowNumber}</td>
            }
            {errorGroup.rows[rowNumber].values.map((value, innerIndex) =>
              <td className={classNames({fail: errorGroup.rows[rowNumber].badcols.has(innerIndex + 1)})}>
                {value}
              </td>
            )}
          </tr>
      ))}
      <tr class="after-fail">
        <td className="result-row-index">{rowNumbers[rowNumbers.length - 1] + 1}</td>
        {errorGroup.headers.map(header =>
          <td></td>
        )}
      </tr>
    </tbody>
  )
}


function getErrorDetails(errorGroup) {

  // Get code handling legacy codes
  let code = errorGroup.code
  if (code === 'non-castable-value') {
    code = 'type-or-format-error'
  }

  // Get details handling custom errors
  let details = spec.errors[code]
  if (!details) details = {
    name: startCase(code),
    type: 'custom',
    context: 'body',
    description: null,
  }

  return details
}


function getShowHeaders(errorDetails) {
  return errorDetails.context === 'body'
}


function getDescription(errorDetails) {
  let description = errorDetails.description
  if (description) {
    description = description.replace('{validator}', '`goodtables.yml`')
    description = marked(description)
  }
  return description
}


function getRowNumbers(errorGroup) {
  return Object.keys(errorGroup.rows)
    .map(item => parseInt(item, 10) || null)
    .sort((a, b) => a - b)
}
