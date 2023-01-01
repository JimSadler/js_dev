const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('public'))

app.use(function (req, res) {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(3000, (_) => {
  console.log('Listening on http://localhost:3000')
})
