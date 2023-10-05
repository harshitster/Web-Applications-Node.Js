require('../src/db/mongoose.js')
const User = require('../src/models/user.js')

const updateAgeAndCount = async function(id, age) {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('61e995e45e477c04eb759d61', 2).then(function(count){
    console.log(count)
}).catch(function(error){
    console.log(error)
})