// Author: Alec Moldovan

const path = require('path')
const express = require('express')
const routes = require('./routes/route')
const morgan = require('morgan')


// TODO: Single-File Responsibility Principle Error
require('dotenv').config()

console.log('ENV:::', process.env.ENVIRONMENT)
console.log('PORT:::', process.env.PORT)


const app = express()
const port = process.env.PORT || 3080

// Connect to Azure Cosmo DB for Mongodb

app.use(express.static(path.join(__dirname, '../ui/build')))
app.use(express.json())
app.use(morgan('dev'))

app.use('/', routes)

// PORT

app.listen(port, () => {
  console.log(`Server listening on the port  ${port}`)
})
