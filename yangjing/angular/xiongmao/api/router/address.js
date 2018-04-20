var db = require('../db').mysql;

module.exports={
    reg(app){
        //用户增加地址
        app.post('/addAddress',(req,res)=>{
            let _address = req.body.address;
            let _username =req.body.username;
            console.log(req.body)
                let addAddressSql=`UPDATE user SET address ='${_address}' WHERE username='${_username}'`
                db.search(addAddressSql).then((result,err)=>{
                    if(err){
                        res.send({status:false,error:err});
                    }else{
                        res.send({status:true,result:result})
                    }
                })
            

            if(!_address){
                db.search(`UPDATE user SET address ='[]' WHERE username='${_username}'`).then((result,err)=>{
                    if(err){
                        res.send({status:false,error:err});
                    }else{
                        res.send({status:true,result:result})
                    }
                })
            }
            
            
        })
        //请求用户地址
        app.post('/getAddress',(req,res)=>{
            let _username = req.body.username;
            let getAddressSql=`select * from user where username = '${_username}'`;
            db.search(getAddressSql).then((result,err)=>{
                if(err){
                    res.send({status:false,error:err});
                }else{
                    res.send({status:true,result:result})
                }
            })
        })
        //删除用户的地址
        app.post('/delAddress',(req,res)=>{
            let _username=req.body.username;
            let delAddressSql=`update user set address=null where username = '${_username}'`
            db.search(delAddressSql).then((result,err)=>{
                if(err){
                    res.send({status:false,error:err});
                }else{
                    res.send({status:true,result:result})
                }
            })
        })
        
    }
}