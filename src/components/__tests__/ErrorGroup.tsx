import React from 'react'
import Enzyme, { shallow } from 'enzyme'
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
