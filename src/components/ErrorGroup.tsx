import marked from 'marked'
import classNames from 'classnames'
import React, { useState } from 'react'
import startCase from 'lodash/startCase'
import defaultSpec from '../spec.json'

export interface IErrorGroupProps {
  errorGroup: any
  spec?: any
}

export function ErrorGroup(props: IErrorGroupProps) {
  const { errorGroup, spec } = props
  const [isDetailsVisible, setIsDetailsVisible] = useState(false)
  const [visibleRowsCount, setVisibleRowsCount] = useState(10)
  const errorDetails = getErrorDetails(errorGroup, spec || defaultSpec)
  const showHeaders = getShowHeaders(errorDetails)
  const description = getDescription(errorDetails)
  const rowNumbers = getRowNumbers(errorGroup)
  return (
    <div className="result">
      {/* Heading */}
      <div>
        <span className="count">{errorGroup.count} x</span>
        <a
          role="button"
          className={classNames({
            label: true,
            'label-error': true,
            collapsed: !isDetailsVisible,
          })}
          data-toggle="collapse"
          onClick={() => setIsDetailsVisible(!isDetailsVisible)}
          aria-expanded="false"
        >
          {errorDetails.name}
        </a>
      </div>

      {/* Error details */}
      <div className={classNames(['collapse', { in: isDetailsVisible }])}>
        <div className="error-details">
          {description && (
            <div className="error-description">
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          )}
          <div className="error-list">
            <p className="error-list-heading">The full list of error messages:</p>
            <ul>
              {errorGroup.messages.map((message: any, index: any) => (
                <li key={index}>{message}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Table view */}
      <div className="table-view">
        <div className="inner">
          <ErrorGroupTable
            errorGroup={errorGroup}
            visibleRowsCount={visibleRowsCount}
            rowNumbers={rowNumbers}
            showHeaders={showHeaders}
          />
        </div>
      </div>

      {/* Show more */}
      {visibleRowsCount < rowNumbers.length && (
        <a className="show-more" onClick={() => setVisibleRowsCount(visibleRowsCount + 10)}>
          Show more <span className="icon-keyboard_arrow_down" />
        </a>
      )}
    </div>
  )
}

function ErrorGroupTable(props: {
  errorGroup: any
  visibleRowsCount: number
  rowNumbers: any
  showHeaders: boolean
}) {
  const { errorGroup, visibleRowsCount, rowNumbers, showHeaders } = props
  return (
    <table className="table">
      <tbody>
        {errorGroup.headers && showHeaders && (
          <tr className="before-fail">
            <td>1</td>
            {errorGroup.headers.map((header: any, index: any) => (
              <td key={index}>{header}</td>
            ))}
          </tr>
        )}
        {rowNumbers.map(
          (rowNumber: any, index: any) =>
            index < visibleRowsCount && (
              <tr key={index} className={classNames({ fail: errorGroup.code.includes('row') })}>
                <td className="result-row-index">{rowNumber || 1}</td>
                {errorGroup.rows[rowNumber].values.map((value: any, innerIndex: any) => (
                  <td
                    key={innerIndex}
                    className={classNames({
                      fail: errorGroup.rows[rowNumber].badcols.has(innerIndex + 1),
                    })}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            )
        )}
        <tr className="after-fail">
          <td className="result-row-index">
            {rowNumbers[rowNumbers.length - 1] ? rowNumbers[rowNumbers.length - 1] + 1 : 2}
          </td>
          {errorGroup.headers &&
            errorGroup.headers.map((_header: any, index: any) => <td key={index} />)}
        </tr>
      </tbody>
    </table>
  )
}

// Helpers

function getErrorDetails(errorGroup: any, spec: any) {
  // Get code handling legacy codes
  let code = errorGroup.code
  if (code === 'non-castable-value') {
    code = 'type-or-format-error'
  }

  // Get details handling custom errors
  let details = spec.errors[code]
  if (!details) {
    details = {
      name: startCase(code),
      type: 'custom',
      context: 'body',
      description: null,
    }
  }

  return details
}

function getShowHeaders(errorDetails: any) {
  return errorDetails.context === 'body'
}

function getDescription(errorDetails: any) {
  let description = errorDetails.description
  if (description) {
    description = description.replace('{validator}', '`goodtables.yml`')
    description = marked(description)
  }
  return description
}

function getRowNumbers(errorGroup: any) {
  return (
    Object.keys(errorGroup.rows)
      .map((item) => parseInt(item, 10) || null)
      // @ts-ignore
      .sort((a, b) => a - b)
  )
}
