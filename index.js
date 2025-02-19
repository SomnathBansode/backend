require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/user', (req, res) => {
  res.send('Hello user!')
})

app.get('/user/:user', (req, res) => {
  const user = req.params.user
  res.send(`Hello ${user}!`)
})
app.get('/admin/:user', (req, res) => {
  const user = req.params.user
  res.send(`Hello ${user}!`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})