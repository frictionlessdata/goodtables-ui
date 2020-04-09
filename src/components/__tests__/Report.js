const React = require('react')
const Enzyme = require('enzyme')
const { shallow } = require('enzyme')
const { Report } = require('../Report')
const { Table } = require('../Table')
const Adapter = require('enzyme-adapter-react-16')
const report2 = require('../../../data/report2.json')
const report1 = require('../../../data/report1.json')
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
