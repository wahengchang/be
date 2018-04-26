const fs = require('fs')
const path = require('path')

const clientLocatorPath = './public/static/locator.js'

if(fs.existsSync(clientLocatorPath)){
    console.log(clientLocatorPath, ' is already existed')
    return 
}

// content could be a for loop
const content = require('./firebase')()

fs.writeFileSync(path.join(clientLocatorPath), content)

