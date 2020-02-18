import React from 'react'
import { assert } from 'chai'
import { shallow } from 'enzyme'
import { Report } from '../../src/components/Report'
import { Table } from '../../src/components/Table'
const report2 = require('../../data/report2.json')
const report1 = require('../../data/report1.json')

// Tests

describe('Report (goodtables@2)', () => {
  it('should render', () => {
    const result = shallow(<Report report={report2} />)
    assert(result.contains(<Table table={report2.tables[0]} tableNumber={1} tablesCount={2} />))
  })
})

describe('Report (goodtables@1)', () => {
  it('should render', () => {
    const result = shallow(<Report report={report1} />)
    assert(result.contains(<Table table={report1.tables[0]} tableNumber={1} tablesCount={2} />))
  })
})
