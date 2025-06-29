const express = require('express')
const Mongodb = require('mongodb')
const dbConnection = require('./dbConfig/dbConnection.js')

const server = express()


// parse requests of content-type - application/json
server.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
server.use(express.urlencoded({ extended: true }));



server.get('/', (request , response) => {
    response.send('server is working fine ..!')
})

//         // <-- method one -->

// server.get('/add-category', async(request , response) => {
    
//     const db = await dbConnection()
//     const result = await db.collection('category').insertOne({
//         name : 'Man',
//         slug : 'man'
//     });

//     const output = {
//         _status : true,
//         _message : 'Record Created successfully ..!',
//         _data : result
//     };

//     response.send(output)
// })


            // <-- method two -->

server.get('/add-category', async(request , response) => {
    
    const db = await dbConnection()
    await db.collection('category').insertOne({
        name : request.query.category_name
    }).then((result) => {

        const output = {
        _status : true,
        _message : 'Record Created successfully ..!',
        _data : result
    }

    response.send(output)
    }).catch(() => {

        const output = {
        _status : false,
        _message : 'somthing went Rong ..!',
        _data : null
    };

    response.send(output)
    })

})


server.get('/view-category', async(request , response) => {
    
    const db = await dbConnection()
    await db.collection('category').find().toArray()
       
    .then((result) => {
        if(result.length > 0){

            const output = {
                _status : true,
                _message : 'Record fatch data  successfully ..!',
                _data : result
            }
                response.send(output)
        }else{
          const output = {
                _status : false,
                _message : 'no record found ..!',
                _data : []
            }
                response.send(output)  
        }     


    }).catch(() => {

        const output = {
        _status : false,
        _message : 'somthing went Rong ..!',
        _data : null
    };

    response.send(output)
    })

})


server.post('/api/add-material', async(request , response) => {
    const db = await dbConnection()
    await db.collection('material').insertOne({
        name : request.body.material_name,
        order : request.body.order
    })

    .then((result) => {
        const output = {
            _status : true,
            _message : 'material Record create successfully ..!',
            _data : result
        }
        response.send(output)
    })

    .catch(() => {
        const output = {
            _status : false,
            _message : 'somthing went rong ..!',
            _data : []
        }
        response.send(output)
    })
})


server.post('/api/view-material', async(request , response) => {
    const db =  await dbConnection()

    if(request.body.material_name ){
        var filter = {
            name : request.body.material_name,
        }
    }else if(request.body.order){
         var filter = {
            order : request.body.order,
        }
    } else{
        var filter = {
            order : {}
        }
    }
    await db.collection('material').find(filter).toArray()

    .then((result) => {
        if(result.length > 0){
             const output = {
            _status : true,
            _message : 'Fatch data successfully',
            _data : result
        }
        response.send(output)
        }

        else{
             const output = {
            _status : false,
            _message : 'No record found',
            _data : result
        }
        response.send(output)
        }
       
    })

    .catch(() => {
        const output = {
            _status : false,
            _message : 'something went rong ..!!',
            _data : []
        }
        response.send(output)
    })
})


server.post('/api/update-material', async(request , response) => {
    
     const db = await dbConnection()
    
     await db.collection('material').updateOne({
        _id : new Mongodb.ObjectId(request.body.id)  
     },{$set : {
        name : request.body.material_name,
        order : request.body.order
       }
     })

    .then((result) => {
        const output = {
            _status : true,
            _message : 'material Record update successfully ..!',
            _data : result
        }
        response.send(output)
    })

    .catch(() => {
        const output = {
            _status : false,
            _message : 'somthing went rong ..!',
            _data : []
        }
        response.send(output)
    })
})


server.post('/api/delete-material', async(request , response) => {
    
     const db = await dbConnection()
    
     await db.collection('material').deleteOne({
        _id : new Mongodb.ObjectId(request.body.id)  
     })

    .then((result) => {
        const output = {
            _status : true,
            _message : 'material Record delete successfully ..!',
            _data : result
        }
        response.send(output)
    })

    .catch(() => {
        const output = {
            _status : false,
            _message : 'somthing went rong ..!',
            _data : []
        }
        response.send(output)
    })
})


server.listen(5000, () => {
    console.log('server is working fine ..!')
})