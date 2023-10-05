const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=9c2e0544e08cefc8af7f39da6fb487a3&query=45,-75&units=f'

const request = http.request(url, function(response){
    let data = ''

    response.on('data', function(chunk){
        data = data + chunk.toString()
    })

    response.on('end', function(){
        console.log(JSON.parse(data))
    })

})

request.on('error', function(error){
    console.log(error)
})

request.end()