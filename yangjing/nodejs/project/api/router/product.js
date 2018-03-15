const db = require('../db');

module.exports = {
    register:(app)=>{
        



        app.get('/products',(req,res)=>{
            

                db.mongodb.select('products').then((data)=>{
                    res.send({status:true,data})
                }).catch((error)=>{
                    res.send({status:false,error});
                })
        })    

        app.post('/addproduct',(req,res)=>{
            var proname = req.body.proname;
            var price = req.body.price;
            var pcs = req.body.pcs;
            db.mongodb.insert('products',{proname,price,pcs}).then((result)=>{
                res.send({status:true,data:result})
            })
        })

        app.post('/delproduct',(req,res)=>{
            let id = req.body.id;
            let oid = db.mongodb.objectid(id);
            db.mongodb.delete('products',{"_id":oid}).then(function(result){
                res.send({status:true,data:result})
            })
        })
        
    }
}