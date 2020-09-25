const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/sync', (req, res) => {
  let models = require('./models');
  models.sequelize.sync()
  .then(() => {    
    res.send('Database sync completed!');
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
