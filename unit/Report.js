import React from 'react'
import {assert} from 'chai'
import {shallow} from 'enzyme'
import Report from '../src/Report'
const report = require('../data/report.json')

// Tests

describe('Report', () => {
  it('should render', () => {
    const result = shallow(<Report report={report} />)
    assert(result.contains('Report'))
  })
})
