import React from 'react'
import {assert} from 'chai'
import {shallow} from 'enzyme'
import TableErrors from '../src/TableErrors'
const report = require('../data/report.json')

// Tests

describe('TableErrors', () => {
  it('should render', () => {
    const result = shallow(<TableErrors table={report.tables[0]} />)
    assert(result.contains('Row'))
    assert(result.contains('Col'))
    assert(result.contains('Code'))
    assert(result.contains('Message'))
  })
})
