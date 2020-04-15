import React from 'react'
import Enzyme, { shallow, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { getTableErrorGroups } from '../../helpers'
import report from '../../../data/report.json'
import { ErrorGroup } from '../ErrorGroup'
Enzyme.configure({ adapter: new Adapter() })

// Tests

it('should render', () => {
  const errorGroup = getTableErrorGroups(report.tables[0])['blank-header']
  const result = shallow(<ErrorGroup errorGroup={errorGroup} />)
  expect(result.contains('Blank Header')).toBeTruthy()
})

it('works without headers', () => {
  const errorGroup = getTableErrorGroups(report.tables[0])['blank-header']
  delete errorGroup.headers
  const result = render(<ErrorGroup errorGroup={errorGroup} />)
  expect(result.text()).toContain('Blank Header')
})
