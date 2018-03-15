
const db = require('../db');
const apiResult = require('../utils/apiResult.js');



module.exports = {
    register(app){
        app.post('/login',(req,res)=>{
            let username = req.body.username;
            let password = req.body.password;
            console.log(password);
            db.mongodb.select('users',{username,password}).then((data)=>{
                    if(data.length>0){
                        req.session.username = username;
                    }
                    res.send(apiResult(data && data.length>0,data));
            })
            
        })
    }
}