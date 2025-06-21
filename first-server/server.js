const http = require('http')
const { json } = require('stream/consumers')
const { categories, brands, product } = require('./data')

const server = http.createServer((request , response) => {
    console.log(request.url)
    console.log(request.method)

    if(request.url == '/'){
         response.end('<h1> This is a home page </h1>')
    }else if(request.url == '/categories'){

        if(categories.length > 0){
             const result = {
            '_status' : true,
            '_massage' : 'Categories add Successfully',
            '_data': categories
        }
         response.end(JSON.stringify(result));
        }else{
             const result = {
            '_status' : false,
            '_massage' : 'No Categories add',
            '_data': categories
        }
         response.end(JSON.stringify(result));
        }
       
    }else if(request.url == '/brands'){

        if(brands.length > 0){
            const result = {
                '_status' : true,
                '_massage' : 'brand add Successfully',
                '_data' : brands
            }
            response.end(JSON.stringify(result))
        }else{
             const result = {
                '_status' : false,
                '_massage' : ' No brand add',
                '_data' : brands
            }
            response.end(JSON.stringify(result))
        }

    }else if(request.url == '/product'){
        if(product.length > 0){
            const result = {
                "_status" : true,
                '_massage' : 'Product add Successfull !!',
                '_data' : product
            }
            response.end(JSON.stringify(result))
        }else{
            const result = {
                '_status' : false,
                '_massage' : 'Not product add !!!',
                '_data' : product
            }
            response.end(JSON.stringify(result))
        }

    }else{
         response.end('<h1> 404 Page not fond ! ... </h1>')
    }
})

server.listen(7000,() => {
    console.log('server is working fine ! ...')
})