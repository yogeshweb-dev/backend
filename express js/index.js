const express = require('express')
const { categories, brands, product } = require('./data')

const app = express()
const apikey = 12345

app.get('/' , (request , response) => {
    response.send('<h1> WellCome to my Home Page</h1>')
})

app.get('/categories' , (request , response) => {

    if(categories.length > 0){
        const data = {
        '_status' : 1,
        '_massage' : 'categories add successfully',
        '-data' : categories
        }
        response.send(data)

    }else{
         const data = {
        '_status' : 0,
        '_massage' : ' No categories add',
        '-data' : categories
        }
        response.send(data)
    }
    console.log(request.url)
    console.log(request.method)

})

app.post('/brands' , (request , response) => {

    if(brands.length > 0){
        const data = {
        '_status' : 1,
        '_massage' : 'brands add successfully',
        '-data' : brands
        }
        response.send(data)

    }else{
         const data = {
        '_status' : 0,
        '_massage' : ' No brand add',
        '-data' : brands
        }
        response.send(data)
    }

})

app.get('/product' , (request , response) => {

    if(request.query.apikey == undefined || request.query.apikey == '' || request.query.apikey != apikey ){
         const data = {
        '_status' : 0,
        '_massage' : ' No product add',
        '-data' : []
        }
        response.send(data)
    }

    if(product.length > 0){
        const data = {
        '_status' : 1,
        '_massage' : 'product add successfully',
        '-data' : product
        }
        response.send(data)

    }else{
         const data = {
        '_status' : 0,
        '_massage' : ' No product add',
        '-data' : product
        }
        response.send(data)
    }
    console.log(request.query.apikey)

})

app.listen(8000 , () => {
    console.log('Server is Working fine !!')
})