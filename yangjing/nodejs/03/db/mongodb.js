const mongodb = require('mongodb');
const client = mongodb.MongoClient;
var db = null;
//连接mongodb/yangjing数据库或者client.connect('mongodb://localhost:27017/yangjing')
//12.0.0.1  =  localhost  表示本机的意思
client.connect('mongodb://127.0.0.1:27017',(_error,_db)=>{
    if(_error){
        console.log(_error);
        return false;
    }
    db = _db.db('yangjing');//不报错得到数据找到yangjing下面的全部数据
});

const express = require('express');

module.exports = {
    select:(_cb)=>{
        if(db){
            db.collection('users').find().toArray((_error,_data)=>{

                _cb({status:_error ? false : true,error:_error,data:_data});


            })
        }
    },
    update:()=>{},
    insert:()=>{},
    delete:()=>{},
}