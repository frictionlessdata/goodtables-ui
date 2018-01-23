import React from 'react'
import {assert} from 'chai'
import {shallow} from 'enzyme'
import {Report} from '../../src/components/Report'
import {Table} from '../../src/components/Table'
const report = require('../../data/report.json')


// Tests

describe('Report', () => {
  it('should render', () => {
    const result = shallow(<Report report={report} />)
    assert(result.contains(
      <Table
        table={report.tables[0]}
        tableNumber={1}
        tablesCount={2}
      />
    ))
  })
})
