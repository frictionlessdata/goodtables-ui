import React from 'react'
import {assert} from 'chai'
import {shallow} from 'enzyme'
import {Table} from '../../src/components/Table'
const report = require('../../data/report.json')


// Tests

describe('Table', () => {
  it('should render', () => {
    const result = shallow(
      <Table
        table={report.tables[0]}
        tableNumber={1}
        tablesCount={2}
      />
    )
    assert(result.contains('invalid.csv'))
  })
})
