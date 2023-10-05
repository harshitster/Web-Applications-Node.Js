const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
const collectionName = 'users'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, function(error, client){
    if(error){
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    /*
    db.collection(collectionName).deleteOne({
        _id : new ObjectID('61e79abe654dfa0d6a468172')
    }).then(function(result){
        console.log(result)
    }).catch(function(error){
        console.log(error)
    })
    */

    db.collection(collectionName).deleteMany({
        name: 'de gea'
    }).then(function(result){
        console.log(result)
    }).catch(function(error){
        console.log(error)
    })
})