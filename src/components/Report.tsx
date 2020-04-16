import React from 'react'
import { validate } from 'jsonschema'
import defaultSpec from '../spec.json'
import profileSpec from '../profiles/spec.json'
import profileReport from '../profiles/report.json'
import { removeBaseUrl } from '../helpers'
import { IReport, ISpec } from '../common'
import { Table } from './Table'

export interface IReportProps {
  report: IReport
  spec?: ISpec
}

export function Report(props: IReportProps) {
  const { report, spec } = props

  // Invalid report
  const reportValidation = validateReport(report)
  if (!reportValidation.valid) {
    return (
      <div className="goodtables-ui-report">
        <h5>
          <strong>Invalid report</strong>
        </h5>
        <hr />
        <div style={{ whiteSpace: 'pre', fontFamily: 'courier' }}>
          {JSON.stringify(reportValidation.errors, null, 2)}
        </div>
        <hr />
        <div style={{ whiteSpace: 'pre', fontFamily: 'courier' }}>
          {JSON.stringify(report, null, 2)}
        </div>
      </div>
    )
  }

  // Invalid spec
  const specValidation = validateSpec(spec || defaultSpec)
  if (!specValidation.valid) {
    return (
      <div className="goodtables-ui-report">
        <h5>
          <strong>Invalid spec</strong>
        </h5>
        <hr />
        <div style={{ whiteSpace: 'pre', fontFamily: 'courier' }}>
          {JSON.stringify(specValidation.errors, null, 2)}
        </div>
        <hr />
        <div style={{ whiteSpace: 'pre', fontFamily: 'courier' }}>
          {JSON.stringify(spec, null, 2)}
        </div>
      </div>
    )
  }

  // Valid report/spec
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
            {processedWarnings.map((warning, index) => (
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

function validateReport(report: IReport) {
  return validate(report, profileReport)
}

function validateSpec(spec: ISpec) {
  return validate(spec, profileSpec)
}

function getProcessedWarnings(report: IReport) {
  // Before `goodtables@1.0` there was no warnings property
  return (report.warnings || []).map((warning) => removeBaseUrl(warning))
}

function getTables(report: IReport) {
  return [
    ...report.tables.filter((table) => !table.valid),
    ...report.tables.filter((table) => table.valid),
  ]
}
