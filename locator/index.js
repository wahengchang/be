const fs = require('fs')
const path = require('path')

const clientLocatorPath = './public/static/locator.js'

// content could be a for loop
const content = require('./firebase')()

fs.writeFileSync(path.join(clientLocatorPath), content)

