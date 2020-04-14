import React from 'react'
import classNames from 'classnames'
import { ErrorGroup } from './ErrorGroup'
import { getTableErrorGroups, removeBaseUrl, splitFilePath } from '../helpers'

export interface ITableProps {
  table: any
  tableNumber: number
  tablesCount: number
  spec: any
}

export function Table(props: ITableProps) {
  const { table, tableNumber, tablesCount, spec } = props
  const tableFile = removeBaseUrl(table.source)
  const splitTableFile = splitFilePath(tableFile)
  const errorGroups = getTableErrorGroups(table)
  return (
    <div className={classNames({ file: true, valid: table.valid, invalid: !table.valid })}>
      {/* Heading */}
      <h4 className="file-heading">
        <div className="inner">
          <a className="file-name" href={table.source}>
            {splitTableFile.base}
            {splitTableFile.sep}
            <strong>{splitTableFile.name}</strong>
            {!table.valid && (
              <span
                className="badge"
                data-toggle="tooltip"
                data-placement="right"
                title={`${table['error-count']} errors found for this table`}
              >
                {table['error-count']}
              </span>
            )}
          </a>
          <span className="file-count">
            Table {tableNumber} of {tablesCount}
          </span>
        </div>
      </h4>

      {/* Valid message */}
      {table.valid && (
        <ul className="passed-tests result">
          <li>
            <span className="label label-success">Valid Table</span>
          </li>
        </ul>
      )}

      {/* Error groups */}
      {Object.values(errorGroups).map((errorGroup: any) => (
        <ErrorGroup key={errorGroup.code} errorGroup={errorGroup} spec={spec} />
      ))}
    </div>
  )
}
