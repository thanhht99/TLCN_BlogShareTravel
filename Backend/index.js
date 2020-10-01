const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

const models = require('./models');
const User = models.User;

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

app.use(bodyParser.json());


/*
  Table user
 */

// register
app.use('/users', require('./router/userRouter'));




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
