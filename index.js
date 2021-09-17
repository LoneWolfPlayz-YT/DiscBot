// Import express foe the website
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('DiscBot')
})

app.listen(3000, () => {
  console.clear()
  console.log('The website is online')
})
