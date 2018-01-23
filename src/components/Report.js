import React from 'react'
import {removeBaseUrl} from '../helpers'
import {MessageGroup} from './MessageGroup'
import {Table} from './Table'


// Module API

export function Report({report}) {
  const processedWarnings = getProcessedWarnings(report)
  const tables = getTables(report)
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
