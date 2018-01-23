import React from 'react'
import {removeBaseUrl} from '../helpers'
import {MessageGroup} from './MessageGroup'
import {Table} from './Table'


// Module API

export function Report({report}) {
  const processedWarnings = getProcessedWarnings(report)
  const validTableFiles = getValidTableFiles(report)
  const invalidTables = getInvalidTables(report)
  const validTables = getValidTables(report)
  return (
    <div className="goodtables-ui-report">

      {!!processedWarnings.length &&
        <MessageGroup
          type="warning"
          title={`There are ${processedWarnings.length} warning(s)`}
          expandText="Warning details"
          messages={processedWarnings}
        />
      }

      {invalidTables.map((table, index) => (
        <Table
          key={table.source}
          table={table}
          tableNumber={index + 1}
          tablesCount={report['table-count']}
        />
      ))}

      {validTables.map((table, index) => (
        <Table
          key={table.source}
          table={table}
          tableNumber={invalidTables.length + index + 1}
          tablesCount={report['table-count']}
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


function getValidTableFiles(report) {
  return report.tables
    .filter(table => table.valid)
    .map(table => removeBaseUrl(table.source))
}

function getInvalidTables(report) {
  return report.tables.filter(table => !table.valid)
}

function getValidTables(report) {
  return report.tables.filter(table => table.valid)
}
