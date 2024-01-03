const  connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')
connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())





//Available routes
app.use(express.json())
app.use('/get',require('./routes/get'))
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))


app.listen(port, () => {
  console.log(`inotes app listening on port ${port}`)
})
