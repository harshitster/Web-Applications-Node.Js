const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const address = process.argv[2]

if(!address){
    console.log('Please provide the address')
} else {
    geocode(address, function (error, { latitude, longitude, location } = {}){
        if (error) {
            return console.log(error)
        } else {
            forecast(longitude, latitude, function(error, { current } = {}){
                if (error) {
                    return console.log(error)
                } else {
                    console.log(location)
                    console.log(current.temperature)
                }
            })
        }
    })
}

