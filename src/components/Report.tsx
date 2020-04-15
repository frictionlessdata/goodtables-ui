import React from 'react'
import defaultSpec from '../spec.json'
import { removeBaseUrl } from '../helpers'
import { ISpec } from '../common'
import { Table } from './Table'

export interface IReportProps {
  report: any
  spec?: ISpec
}

export function Report(props: IReportProps) {
  const { report, spec } = props
  const processedWarnings = getProcessedWarnings(report)
  const tables = getTables(report)
  return (
    <div className="goodtables-ui-report">
      {/* Warnings */}
      {!!processedWarnings.length && (
        <div className="file warning">
          <h4 className="file-heading">
            <div className="inner">
              <a className="file-name">
                <strong>Warnings</strong>
              </a>
            </div>
          </h4>
          <ul className="passed-tests result">
            {processedWarnings.map((warning: any, index: any) => (
              <li key={index}>
                <span className="label label-warning">{warning}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tables */}
      {tables.map((table, index) => (
        <Table
          key={table.source}
          table={table}
          tableNumber={index + 1}
          tablesCount={tables.length}
          spec={spec || defaultSpec}
        />
      ))}
    </div>
  )
}

// Helpers

function getProcessedWarnings(report: any) {
  // Before `goodtables@1.0` there was no warnings property
  return (report.warnings || []).map((warning: any) => removeBaseUrl(warning))
}

function getTables(report: any) {
  return [
    ...report.tables.filter((table: any) => !table.valid),
    ...report.tables.filter((table: any) => table.valid),
  ]
}
