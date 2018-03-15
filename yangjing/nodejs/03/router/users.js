const db = require('../db');
module.exports = {
    register:(app)=>{
        app.get('/getusers',(req,res)=>{
            let data = db.mongodb.select((data)=>{
                res.send(data);
            });
            

        })
    }
}