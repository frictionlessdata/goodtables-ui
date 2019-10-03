import React from 'react'
import {assert} from 'chai'
import {shallow} from 'enzyme'
import {MessageGroup} from '../../src/components/MessageGroup'


// Tests

describe('MessageGroup', () => {
  it('should render', () => {
    const result = shallow(
      <MessageGroup
        type={'warning'}
        title={'title'}
        messages={['message']}
      />
    )
    assert(result.contains('title'))
    assert(result.contains('message'))
  })
})
