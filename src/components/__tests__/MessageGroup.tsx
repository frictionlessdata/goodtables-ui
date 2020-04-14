import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { MessageGroup } from '../MessageGroup'
Enzyme.configure({ adapter: new Adapter() })

// Tests

it('should render', () => {
  const result = shallow(<MessageGroup type={'warning'} title={'title'} messages={['message']} />)
  expect(result.contains('title')).toBeTruthy()
  expect(result.contains('message')).toBeTruthy()
})
