
const db = require('../db');
const apiResult = require('../utils/apiResult.js');
//token 支持跨域像cookie
const jwt = require('jsonwebtoken');


module.exports = {
    register(app){
        app.post('/login',(req,res)=>{
            let username = req.body.username;
            let password = req.body.password;
            console.log(password);
            db.mongodb.select('users',{username,password}).then((data)=>{
                    var user = {username}

                    var token = jwt.sign(user, 'secret', {
                            'expiresIn': 1440 // 设置过期时间
                    })           
                
                    res.send(apiResult(data && data.length>0,token));
            })
            
        })
    }
}