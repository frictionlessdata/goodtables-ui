import React from 'react'
import classNames from 'classnames'
import Table from './Table'

// Module API

Report.propTypes = {
  report: React.PropTypes.object.isRequired,
}
export default function Report({report}) {
  return (
    <div className="goodtables-vue-report">
      <h1>Report</h1>
      <table className={classNames({summary: true, error: !report.valid})}>
        <tbody>
          <tr><th>valid</th><td>{(report.valid) ? 'yes' : 'no'}</td></tr>
          <tr><th>tables</th><td>{report['table-count']}</td></tr>
          <tr><th>errors</th><td>{report['error-count']}</td></tr>
          <tr><th>time</th><td>{report.time}</td></tr>
        </tbody>
      </table>
      <h2>Tables</h2>
      {report.tables.map(table => (
        <Table key={table.source} table={table} />
      ))}
    </div>
  )
}
