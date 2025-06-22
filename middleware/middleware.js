const apikey = 'hello'

exports.validation = ((request, response, next) => {

     if(request.query.apikey == undefined || request.query.apikey == ''){
             const result = {
            '_status' : false,
            '-message' : 'not add product  ..!',
            'data' : []
            }
            response.send(result)
        }else if(request.query.apikey != apikey){
             const result = {
            '_status' : false,
            '-message' : 'not add product  ..!',
            'data' : []
            }
            response.send(result)
        }else{
            next()
        }
})