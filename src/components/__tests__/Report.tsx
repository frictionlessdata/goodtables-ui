import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Report } from '../Report'
import { Table } from '../Table'
import report from '../../../data/report.json'
Enzyme.configure({ adapter: new Adapter() })

// Tests

it('should render', () => {
  const result = shallow(<Report report={report} />)
  expect(result.contains(<Table table={report.tables[0]} tableNumber={1} tablesCount={2} />))
})
