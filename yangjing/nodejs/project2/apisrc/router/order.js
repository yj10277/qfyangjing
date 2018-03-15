const filter =require('../utils/filter.js');
const db = require('../db')
module.exports = {
    register(app){
        app.post('/generateorder',filter,(req,res)=>{
                let pros = JSON.parse(req.body.pros);

                let total = 0;
                for(let item in pros){
                    total += item.price;
                };    console.log(total);
                let order = {
                    orderno:parseInt(Math.random() * 1000000),
                    total,
                    status:0,
                    products:pros
                }
                db.mongodb.insert('order',order).then((result)=>{
                        res.send(result)
                })
        })
    }
}