const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

// allow Cross-Origin Requests
app.use(cors())

mongoose.connect('mongodb://localhost:27017/graphql', { useNewUrlParser: true })
mongoose.connection.once('open', () => console.log('connected to database'))

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))


app.listen(3000, () => console.log('Server running on port 3000'))