const React = require('react')
const Enzyme = require('enzyme')
const { shallow, render } = require('enzyme')
const { ErrorGroup } = require('../ErrorGroup')
const { getTableErrorGroups } = require('../../helpers')
const Adapter = require('enzyme-adapter-react-16')
const report2 = require('../../../data/report2.json')
const report1 = require('../../../data/report1.json')
const spec = require('../../spec.json')
Enzyme.configure({ adapter: new Adapter() })

// Tests

describe('ErrorGroup (goodtables@2)', () => {
  it('should render', () => {
    const errorGroup = getTableErrorGroups(report2.tables[0])['blank-header']
    const result = shallow(<ErrorGroup errorGroup={errorGroup} spec={spec} />)
    expect(result).toContain('Blank Header')
  })

  it('works without headers', () => {
    const errorGroup = getTableErrorGroups(report2.tables[0])['blank-header']
    delete errorGroup.headers
    const result = render(<ErrorGroup errorGroup={errorGroup} spec={spec} />)
    expect(result.text()).toContain('Blank Header')
  })
})

describe('ErrorGroup (goodtables@1)', () => {
  it('should render', () => {
    const errorGroup = getTableErrorGroups(report1.tables[0])['blank-header']
    const result = shallow(<ErrorGroup errorGroup={errorGroup} spec={spec} />)
    expect(result).toContain('Blank Header')
  })

  it('works without headers', () => {
    const errorGroup = getTableErrorGroups(report1.tables[0])['blank-header']
    delete errorGroup.headers
    const result = render(<ErrorGroup errorGroup={errorGroup} spec={spec} />)
    expect(result.text()).toContain('Blank Header')
  })
})
