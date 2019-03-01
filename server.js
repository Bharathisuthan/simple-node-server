const express = require('express')

const app = express()

app.get('/', function (req, res) {
  res.send('Sample Node app runnning successfully.')
})

app.listen(process.env.PORT || 8080)
