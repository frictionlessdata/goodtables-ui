import React from 'react'
import {ErrorGroup} from './ErrorGroup'
import {getTableErrorGroups, removeBaseUrl, splitFilePath} from '../helpers'


// Module API

export function InvalidTable({table, tableNumber, tablesCount}) {
  const errorGroups = getTableErrorGroups(table)
  const tableFile = removeBaseUrl(table.source)
  const splitTableFile = splitFilePath(tableFile)
  return (
    <div className="invalid file">

      <h4 className="file-heading">
        <div className="inner">
          <a className="file-name" href={table.source}>
            {splitTableFile.base}/<strong>{splitTableFile.name}</strong>
            <span
              className="badge"
              data-toggle="tooltip"
              data-placement="right"
              title={`${table['error-count']} errors found for this table`}
            >
              {table['error-count']}
            </span>
          </a>
          <span className="file-count">Invalid {tableNumber} of {tablesCount}</span>
        </div>
      </h4>

      {Object.values(errorGroups).map(errorGroup =>
        <ErrorGroup key={errorGroup.code} errorGroup={errorGroup} />
      )}

    </div>
  )
}
