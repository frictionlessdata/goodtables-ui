import React from 'react'
import { assert } from 'chai'
import { shallow } from 'enzyme'
import { Table } from '../../src/components/Table'
const report2 = require('../../data/report2.json')
const report1 = require('../../data/report1.json')

// Tests

describe('Table (goodtables@2)', () => {
  it('should render', () => {
    const result = shallow(<Table table={report2.tables[0]} tableNumber={1} tablesCount={2} />)
    assert(result.contains('invalid.csv'))
  })
})

describe('Table (goodtables@1)', () => {
  it('should render', () => {
    const result = shallow(<Table table={report1.tables[0]} tableNumber={1} tablesCount={2} />)
    assert(result.contains('invalid.csv'))
  })
})
