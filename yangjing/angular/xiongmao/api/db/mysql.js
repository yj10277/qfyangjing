const mysql = require('mysql');

let connection =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'xiongmao',
    port:3306,
    multipleStatements:true,
    timezone:"00:00"
});

//连接数据库
let db;
connection.connect(function(err,res){
    if(err){
        console.error('error connecting:'+ err.stack);
        return;
    }
    db = res;
});


module.exports = {
    search: (sql) =>{
            if(db){
                return new Promise((resolve,reject)=>{
                    connection.query(sql,function(error,result,fields){
                        if(error){
                            reject(error)
                        }else{
                            resolve(result)
                        }
                    })
                })
            }
            
        
    }
}





