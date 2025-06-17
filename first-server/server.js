const http = require('http')

http.createServer((request, resopnse) => {
    console.log('hello world')

    resopnse.end('my name is yogesh kumar')
}).listen(2000)