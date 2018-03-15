const  mongo = require('mongodb').MongoClient;

var db;
mongo.connect('mongodb://localhost:27017',(_error,_db)=>{
    if(_error){
        console.log(_error);
    }else{
        db = _db.db('yangjing');
    }
})


module.exports = {
    select(_collection,_condition){
        return new Promise((resolve,reject)=>{
               db.collection(_collection).find(_condition || {}).toArray((error,result)=>{
                    resolve(result);
               })
                
        })
    },
    insert:(_collection,_data)=>{
        return new Promise((resolve,reject)=>{
            db.collection(_collection).insert(_data).then((result,error)=>{
                resolve(result);
            })
        })
    },
    delete:(_collection,_condition)=>{
        return new Promise((resolve,reject)=>{
            db.collection(_collection).remove(_condition).then((result,error)=>{
                resolve(result);
            })
        })
    },
    objectid:(_id)=>{
        return _id ? new ObjectID(_id) : new ObjectID();
    }
}