const { MongoClient } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser:true }, function (error, client) {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    db.collection('users').findOne({ name: 'Jen' }, function (error, user) {
        if (error) {
            return console.log('User not found')
        }

        console.log(user)
    })

    db.collection('users').find({ age: 19 }).toArray(function (error, users) {
        if (error) {
            return console.log('Users not found')
        }

        console.log(users)
    })

    db.collection('users').find({ age: 19 }).count(function (error, count) {
        if (error) {
            return console.log('Users not found')
        }

        console.log(count)
    })
})