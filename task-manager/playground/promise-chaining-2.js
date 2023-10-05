require('./src/db/mongoose.js')
const Task = require('./src/models/task.js')

Task.findByIdAndDelete('61ea3b696d96560b6cd83299').then(function(result){
    console.log(result)
    return Task.countDocuments({ completed: false })
}).then(function(count){
    console.log(count)
}).catch(function(error){
    console.log(error)
})

const deleteTaskAndCount = async function(id, bool){
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: bool })
    return count
}

deleteTaskAndCount('61ea3b696d96560b6cd83299', false).then(function(count){
    console.log(result)
}).catch(function(count){
    console.log(count)
})