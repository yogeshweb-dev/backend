const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const server = express();


server.use(express.json());

server.use(express.urlencoded({ extended: true }));

// parse application/json
server.use(bodyParser.json())

server.use(cors())


server.get('/' , (request , response) => {
    response.send('server is working fine ...!')
})

server.listen(5000, () => {
    mongoose.connect('mongodb://127.0.0.1:27017/moongooj')
  .then(() => console.log('Connected!'))
  .catch((errer) => console.log(errer))
}) 