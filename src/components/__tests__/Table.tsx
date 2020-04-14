import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Table } from '../Table'
import report2 from '../../../data/report2.json'
import report1 from '../../../data/report1.json'
Enzyme.configure({ adapter: new Adapter() })

// Tests

it('should render', () => {
  const result = shallow(<Table table={report1.tables[0]} tableNumber={1} tablesCount={2} />)
  expect(result.contains('invalid.csv'))
})

it('should render (version 2)', () => {
  const result = shallow(<Table table={report2.tables[0]} tableNumber={1} tablesCount={2} />)
  expect(result.contains('invalid.csv'))
})
