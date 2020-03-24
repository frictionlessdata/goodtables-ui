require('./styles.scss')
const { render } = require('./render')
const { Report } = require('./components/Report')
const { Form } = require('./components/Form')
const spec = require('./spec.json')

// Module API

export default { render, Report, Form, spec }
export { render, Report, Form, spec }
