const jwt = require('jsonwebtoken')

const myfunction = async function () {
    const token = jwt.sign({ _id: 'abc123' }, 'thisismycourse', { expiresIn: '10 seconds' })
    console.log(token)
    const data = jwt.verify(token, 'thisismycourse')
    console.log(data)
}

myfunction()