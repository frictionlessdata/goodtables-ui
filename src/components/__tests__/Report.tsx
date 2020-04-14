import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Report } from '../Report'
import { Table } from '../Table'
import report2 from '../../../data/report2.json'
import report1 from '../../../data/report1.json'
Enzyme.configure({ adapter: new Adapter() })

// Tests

it('should render', () => {
  const result = shallow(<Report report={report1} />)
  expect(result.contains(<Table table={report1.tables[0]} tableNumber={1} tablesCount={2} />))
})

it('should render (version 2)', () => {
  const result = shallow(<Report report={report2} />)
  expect(result.contains(<Table table={report2.tables[0]} tableNumber={1} tablesCount={2} />))
})
