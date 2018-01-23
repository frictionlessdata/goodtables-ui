import React from 'react'
import {removeBaseUrl} from '../helpers'
import {Table} from './Table'


// Module API

export function Report({report}) {
  const processedWarnings = getProcessedWarnings(report)
  const tables = getTables(report)
  return (
    <div className="goodtables-ui-report">

      {/* Warnings */}
      {!!processedWarnings.length &&
        <div className="file warning">
          <h4 className="file-heading">
            <div className="inner">
              <a className="file-name">
                <strong>Warnings</strong>
              </a>
            </div>
          </h4>
          <ul className="passed-tests result">
            {processedWarnings.map((warning, index) =>
              <li key={index}><span className="label label-warning">{warning}</span></li>
            )}
          </ul>
        </div>
      }

      {/* Tables */}
      {tables.map((table, index) => (
        <Table
          key={table.source}
          table={table}
          tableNumber={index + 1}
          tablesCount={tables.length}
        />
      ))}

    </div>
  )
}


// Internal

function getProcessedWarnings(report) {
  // Before `goodtables@1.0` there was no warnings property
  return (report.warnings || []).map(warning => removeBaseUrl(warning))
}

function getTables(report) {
  return [
    ...report.tables.filter(table => !table.valid),
    ...report.tables.filter(table => table.valid),
  ]
}
