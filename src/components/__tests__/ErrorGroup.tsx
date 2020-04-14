import React from 'react'
import Enzyme, { shallow, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ErrorGroup } from '../ErrorGroup'
import { getTableErrorGroups } from '../../helpers'
import report2 from '../../../data/report2.json'
import report1 from '../../../data/report1.json'
Enzyme.configure({ adapter: new Adapter() })

// Tests

it('should render', () => {
  const errorGroup = getTableErrorGroups(report1.tables[0])['blank-header']
  const result = shallow(<ErrorGroup errorGroup={errorGroup} />)
  expect(result.contains('Blank Header')).toBeTruthy()
})

it('works without headers', () => {
  const errorGroup = getTableErrorGroups(report1.tables[0])['blank-header']
  delete errorGroup.headers
  const result = render(<ErrorGroup errorGroup={errorGroup} />)
  expect(result.text()).toContain('Blank Header')
})

it('should render (version 2)', () => {
  const errorGroup = getTableErrorGroups(report2.tables[0])['blank-header']
  const result = shallow(<ErrorGroup errorGroup={errorGroup} />)
  expect(result.contains('Blank Header')).toBeTruthy()
})

it('works without headers (version 2)', () => {
  const errorGroup = getTableErrorGroups(report2.tables[0])['blank-header']
  delete errorGroup.headers
  const result = render(<ErrorGroup errorGroup={errorGroup} />)
  expect(result.text()).toContain('Blank Header')
})
