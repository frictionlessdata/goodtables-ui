const fetch = require('node-fetch')
const spec = require('../spec.json')

// Tests

it('should be up-to-date', async () => {
  const url =
    'https://raw.githubusercontent.com/frictionlessdata/data-quality-spec/master/spec.json'
  const res = await fetch(url)
  const data = await res.json()
  expect(spec).toEqual(data)
})
