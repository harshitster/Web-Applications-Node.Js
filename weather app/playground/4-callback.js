/*setTimeout(function(){
    console.log('Two seconds are up.')
}, 2000)

const names = ['Andrew', 'Jen', 'Jess']
const shortNames = names.filter(function(name){
    return name.length <= 4
})

const geocode = function (address, callback) {
    setTimeout(function(){
        const data = {
            latitude: 0,
            longitude: 0
        }

        callback(data)
    }, 2000)
}

geocode('Dharwad', function(data){
    console.log(data)
})*/

const add = function(a, b, callback){
    setTimeout(function(){
        callback(a + b)
    }, 2000)
}

add(1, 4, function(sum){
    console.log(sum)
})