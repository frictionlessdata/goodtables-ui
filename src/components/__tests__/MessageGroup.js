const React = require('react')
const Enzyme = require('enzyme')
const { shallow } = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')
const { MessageGroup } = require('../MessageGroup')
Enzyme.configure({ adapter: new Adapter() })

// Tests

describe('MessageGroup', () => {
  it('should render', () => {
    const result = shallow(<MessageGroup type={'warning'} title={'title'} messages={['message']} />)
    expect(result).toContain('title')
    expect(result).toContain('message')
  })
})
