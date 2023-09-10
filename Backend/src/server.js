const express = require('express')

const dotenv = require('dotenv').config()

const colors = require('colors')

const cors = require('cors')

const { graphqlHTTP } = require('express-graphql');

const {errorHandler} = require('./middleware/errorMiddleware')

const connectTODB = require('./config/db')

const schema = require('./schema');

const port = process.env.PORT || 8000

const app = express()

connectTODB()

app.use(express.json())

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
  }));


app.use(errorHandler)

app.listen(port, () => console.log(`Server started on ${port}`))