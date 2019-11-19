const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static('./public'))

app.use(morgan('short'))

app.post('/user_create', (req, res) => {
  console.log("Trying to create a new user...")
  console.log("How do we get the form data???")

  const firstName = req.body.create_first_name
  const lastName = req.body.create_last_name

  res.send("Hello my name is " + firstName + "<br>Surname is " + lastName)
})

app.get("/", (req, res) => {
  res.send("Hello")
})

// localhost:3003
app.listen(3003, () => {
  console.log("Server is up on 3003...")
})
