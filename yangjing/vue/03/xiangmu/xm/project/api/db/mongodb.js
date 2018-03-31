const mongo = require('mongodb');
const client = mongo.MongoClient;
const ObjectID = mongo.ObjectID;

let db;

client.connect('http://10.3.136.21:7070', (_error, _db) => {
    if(_error){
        console.error(_error);
        return false;
    }
    db = _db;
    console.log(db);
})