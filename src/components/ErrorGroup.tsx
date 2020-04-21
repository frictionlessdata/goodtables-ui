import marked from 'marked'
import classNames from 'classnames'
import hexToRgba from 'hex-to-rgba'
import React, { useState } from 'react'
import startCase from 'lodash/startCase'
import defaultSpec from '../spec.json'
import { ISpec, ISpecError, IErrorGroup } from '../common'

export interface IErrorGroupProps {
  errorGroup: IErrorGroup
  spec?: ISpec
}

export function ErrorGroup(props: IErrorGroupProps) {
  const { errorGroup, spec } = props
  const [isDetailsVisible, setIsDetailsVisible] = useState(false)
  const [visibleRowsCount, setVisibleRowsCount] = useState(10)
  const specError = getSpecError(errorGroup, spec || defaultSpec)
  const isHeadersVisible = getIsHeadersVisible(specError)
  const description = getDescription(specError)
  const rowNumbers = getRowNumbers(errorGroup)
  return (
    <div className="result">
      {/* Heading */}
      <div className="d-flex align-items-center">
        <span className="count">{errorGroup.count} x</span>
        <a
          role="button"
          className={classNames({
            badge: true,
            'badge-error': true,
            collapsed: !isDetailsVisible,
          })}
          data-toggle="collapse"
          onClick={() => setIsDetailsVisible(!isDetailsVisible)}
          aria-expanded="false"
          style={{ backgroundColor: getRgbaColor(specError) }}
        >
          {specError.name}
        </a>
      </div>

      {/* Error details */}
      <div className={classNames(['collapse', { show: isDetailsVisible }])}>
        <div className="error-details" style={{ borderColor: getRgbaColor(specError) }}>
          {description && (
            <div className="error-description">
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          )}
          <div className="error-list" style={{ borderTopColor: getRgbaColor(specError) }}>
            <p
              className="error-list-heading"
              style={{
                backgroundColor: getRgbaColor(specError, 0.1),
                borderBottomColor: getRgbaColor(specError, 0.25),
              }}
            >
              The full list of error messages:
            </p>
            <ul
              style={{
                backgroundColor: getRgbaColor(specError, 0.05),
              }}
            >
              {errorGroup.messages.map((message, index) => (
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
            specError={specError}
            errorGroup={errorGroup}
            visibleRowsCount={visibleRowsCount}
            rowNumbers={rowNumbers}
            isHeadersVisible={isHeadersVisible}
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
  specError: ISpecError
  errorGroup: IErrorGroup
  visibleRowsCount: number
  rowNumbers: number[]
  isHeadersVisible: boolean
}) {
  const { specError, errorGroup, visibleRowsCount, rowNumbers, isHeadersVisible } = props
  return (
    <table className="table table-sm">
      <tbody>
        {errorGroup.headers && isHeadersVisible && (
          <tr className="before-fail">
            <td className="text-center">1</td>
            {errorGroup.headers.map((header, index) => (
              <td key={index}>{header}</td>
            ))}
          </tr>
        )}
        {rowNumbers.map(
          (rowNumber, index) =>
            index < visibleRowsCount && (
              <tr key={index} className={classNames({ fail: errorGroup.code.includes('row') })}>
                <td
                  style={{ backgroundColor: getRgbaColor(specError, 0.25) }}
                  className="result-row-index"
                >
                  {rowNumber || 1}
                </td>
                {errorGroup.rows[rowNumber].values.map((value, innerIndex) => (
                  <td
                    key={innerIndex}
                    style={{ backgroundColor: getRgbaColor(specError, 0.25) }}
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
          {errorGroup.headers && errorGroup.headers.map((_header, index) => <td key={index} />)}
        </tr>
      </tbody>
    </table>
  )
}

// Helpers

function getSpecError(errorGroup: IErrorGroup, spec: ISpec) {
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
      message: 'custom',
      description: '',
      weight: 0,
    }
  }

  return details
}

function getRgbaColor(specError: ISpecError, alpha: number = 1) {
  return specError.hexColor ? hexToRgba(specError.hexColor, alpha) : undefined
}

function getIsHeadersVisible(specError: ISpecError) {
  return specError.context === 'body'
}

function getDescription(specError: ISpecError) {
  let description = specError.description
  if (description) {
    description = description.replace('{validator}', '`goodtables.yml`')
    description = marked(description)
  }
  return description
}

function getRowNumbers(errorGroup: IErrorGroup) {
  return Object.keys(errorGroup.rows)
    .map((item) => parseInt(item, 10))
    .sort((a, b) => a - b)
}
