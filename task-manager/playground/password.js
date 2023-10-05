const bcrypt = require('bcryptjs')

const myfunction = async function () {
    const password = 'Red1234!'
    const hashedPassword = await bcrypt.hash(password, 8)

    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bcrypt.compare(password, hashedPassword)
    console.log(isMatch)
}

myfunction()