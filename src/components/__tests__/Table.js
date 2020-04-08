const React = require('react')
const Enzyme = require('enzyme')
const { shallow } = require('enzyme')
const { Table } = require('../Table')
const Adapter = require('enzyme-adapter-react-16')
const report2 = require('../../../data/report2.json')
const report1 = require('../../../data/report1.json')
Enzyme.configure({ adapter: new Adapter() })

// Tests

describe('Table (goodtables@2)', () => {
  it('should render', () => {
    const result = shallow(<Table table={report2.tables[0]} tableNumber={1} tablesCount={2} />)
    expect(result.contains('invalid.csv'))
  })
})

describe('Table (goodtables@1)', () => {
  it('should render', () => {
    const result = shallow(<Table table={report1.tables[0]} tableNumber={1} tablesCount={2} />)
    expect(result.contains('invalid.csv'))
  })
})
