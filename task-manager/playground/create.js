const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, function(error, client) {
    if (error) {
        return console.log('Unable to connect to database')
    } 

    const db = client.db(databaseName)

    db.collection('users').insertMany([
        {
            name: 'Jen',
            age: 28
        },
        {
            name: 'Gunter',
            age: 27
        }
    ], function (error, result) {
        if (error) {
            return console.log('Unable to insert users')
        }

        console.log(result.ops)
    })
})