import React from 'react'
import {assert} from 'chai'
import {shallow} from 'enzyme'
import TableValues from '../src/TableValues.jsx'
const report = require('../data/report.json')

// Tests

describe('TableValues', () => {
  it('should render', () => {
    const result = shallow(<TableValues table={report.tables[0]} />)
    assert(result.contains('*click on a row to see errors'))
  })
})
