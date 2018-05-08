var express = require('express')
var app = express()

const port = process.env.PORT || parseInt(process.env.PORT, 10) || 3000

app.use('/',express.static('build'))
// app.use('/be',express.static('build')); // unexpect router, will be fixed

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})