const db = require('../db');
const apiResult = require('../utils/apiResult.js');
const filter = require('../utils/filter.js');
module.exports = {
    register(app){
        app.post('/cashier',filter,(req,res)=>{
            let barcode = req.body.barcode;
            db.mongodb.select('products',{barcode}).then((result)=>{
                if(result && result.length>0){
                    res.send(apiResult(true,result))
                }else{
                    res.send(apiRessult(false));
                }
            })
        })
    }
}