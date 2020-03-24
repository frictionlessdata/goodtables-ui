import React from 'react'
import { assert } from 'chai'
import { shallow, render } from 'enzyme'
import { ErrorGroup } from '../../src/components/ErrorGroup'
import { getTableErrorGroups } from '../../src/helpers'
const report2 = require('../../data/report2.json')
const report1 = require('../../data/report1.json')
const spec = require('../../src/spec.json')

// Tests

describe('ErrorGroup (goodtables@2)', () => {
  it('should render', () => {
    const errorGroup = getTableErrorGroups(report2.tables[0])['blank-header']
    const result = shallow(<ErrorGroup errorGroup={errorGroup} spec={spec} />)
    assert(result.contains('Blank Header'))
  })

  it('works without headers', () => {
    const errorGroup = getTableErrorGroups(report2.tables[0])['blank-header']
    delete errorGroup.headers
    const result = render(<ErrorGroup errorGroup={errorGroup} spec={spec} />)
    assert.include(result.text(), 'Blank Header')
  })
})

describe('ErrorGroup (goodtables@1)', () => {
  it('should render', () => {
    const errorGroup = getTableErrorGroups(report1.tables[0])['blank-header']
    const result = shallow(<ErrorGroup errorGroup={errorGroup} spec={spec} />)
    assert(result.contains('Blank Header'))
  })

  it('works without headers', () => {
    const errorGroup = getTableErrorGroups(report1.tables[0])['blank-header']
    delete errorGroup.headers
    const result = render(<ErrorGroup errorGroup={errorGroup} spec={spec} />)
    assert.include(result.text(), 'Blank Header')
  })
})
