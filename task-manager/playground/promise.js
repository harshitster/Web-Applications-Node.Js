const add = function(a, b){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(a + b)
        }, 2000)
    })
}

/*
add(1, 2).then(function(sum){
    console.log(sum)

    add(sum, 5).then(function(sum2){
        console.log(sum2)
    }).catch(function(error){
        console.log(error)
    })
}).catch(function(error){
    console.log(error)
})
*/

add(1, 1).then(function(sum){
    console.log(sum)
    return add(sum, 4)
}).then(function(sum2){
    console.log(sum2)
}).catch(function(error){
    console.log(error)
})