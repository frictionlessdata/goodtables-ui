const axios = require('axios')
const spec = require('../spec.json')

// Tests

describe('spec', () => {
  it('should be up-to-date', async () => {
    const res = await axios.get(
      'https://raw.githubusercontent.com/frictionlessdata/data-quality-spec/master/spec.json'
    )
    expect(spec).toEqual(res.data)
  })
})
