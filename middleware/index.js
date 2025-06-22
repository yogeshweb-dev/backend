const express = require('express')
const { product, categories } = require('./data')
const { validation } = require('./middleware')

const app = express()
route = express.Router();
route.use(validation)

app.get('/', (request , response) => {
    response.send('This is my home page')
})

//  Application level middleware

app.get('/product', validation, (request , response) => {

    console.log(request.query.apikey)

    if(product.length > 0){
        const result = {
        '_status' : true,
        '-message' : 'add product successfully ..!',
        'data' : product
        }
        response.send(result)
    }else{

         const result = {
        '_status' : false,
        '-message' : 'not add product  ..!',
        'data' : product
        }
        response.send(result)
    }
    
})

// - Routing level Middleware common routing ke liye

route.get('/catgories', (request , response) => {

    console.log(request.query.apikey)

    if(categories.length > 0){
        const result = {
        '_status' : true,
        '-message' : 'add catgories successfully ..!',
        'data' : categories
        }
        response.send(result)
    }else{

         const result = {
        '_status' : false,
        '-message' : 'not add catgories  ..!',
        'data' : categories
        }
        response.send(result)
    }
    
})


app.use('/' , route);

app.listen(5000 , () => {
    console.log('server is start ...!')
})