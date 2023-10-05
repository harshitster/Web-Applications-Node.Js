const add = function(a, b){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if (a < 0 || b < 0) {
                reject('Error')
            } else {
                resolve(a + b)
            }
        }, 2000)
    })
}

const doWork = async function(){
    const sum1 = await add(1, -1)
    const sum2 = await add(sum1, 1)
    const sum3 = await add(sum2, 1)
    return sum3
}

doWork().then(function(result){
    console.log(result)
}).catch(function(error){
    console.log(error)
})