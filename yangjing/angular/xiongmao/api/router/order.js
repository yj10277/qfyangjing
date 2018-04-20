var db=require('../db').mysql;

module.exports ={
    reg(app){
        //生成订单(ok)
        app.post('/createOrder',(req,res)=>{
            let _carlist = req.body.carlist;
            let _username = req.body.username;
            let _total = req.body.total;
            let _ordernum = req.body.ordernum;
            let _residueCargo=req.body.residueCargo;
            console.log(req.body,'+++++++++++++++++++++++++++')
            let createOrderSql=`INSERT INTO goodorders(username,buylist,status,total,ordernum) VALUES('${_username}','${_carlist}','0','${_total}','${_ordernum}')`;
            let delcarSql=`update user set buylist='${_residueCargo}' where username = '${_username}'`;
            if(_carlist){
                db.search(createOrderSql).then((result,err)=>{

                    if(err){
                        res.send({status:false,error:err});
                    }else{
                        res.send({status:true,result:result})
                    }

                    db.search(delcarSql).then((result,err)=>{
                        if(err){
                            res.send({status:false,error:err});
                        }else{
                            res.send({status:true,result:result})
                        }
                    })
                    
                })
            }
            

        })
        //更新订单
        app.post('/updateOrder',(req,res)=>{
            let _ordernum = req.body.ordernum;
            let _location = req.body.location;
            let _buylist = req.body.buylist;
            let _msg = req.body.msg;
            let _server = req.body.server;
            let _insurance = req.body.insurance;
            let _delivery = req.body.delivery;
            let _status = req.body.status;
            console.log(req.body)
            let upSql=`UPDATE goodorders SET location='${_location}', status='${_status}', msg='${_msg}',buylist='${_buylist}', server='${_server}', insurance='${_insurance}', delivery='${_delivery}' WHERE ordernum = '${_ordernum}'`;
            db.search(upSql).then((result,err)=>{
                console.log(00000000)
                if(err){
                    res.send({status:false,error:err});
                }else{
                    res.send({status:true,result:result})
                }
            })
        })

        //根据订单号获取(ok)
        app.post('/getorder',(req,res)=>{
            let _ordernum = req.body.ordernum;
            
            db.search(`select * from goodorders where ordernum='${_ordernum}'`).then((result,err)=>{

                if(err){
                    res.send({status:false,error:err});
                }else{
                    res.send({status:true,result:result})
                }
            })
        })

        //付款状态查询(ok)
        app.post('/searchOrder',(req,res)=>{
            let _username= req.body.username;
            let _status = req.body.status;
            let searchOrderSql = `select * from goodorders where status = '${_status}' and username= '${_username}'`;

            db.search(searchOrderSql).then((result,err)=>{
                if(err){
                    res.send({status:false,error:err});
                }else{
                    res.send({status:true,result:result})
                }
            })
        })

        //付款成功，更改状态(ok)
        app.post('/changeStatus',(req,res)=>{
            let _ordernum = req.body.ordernum;
            let _status = req.body.status;
            console.log(req.body)
            let changeSql=`update goodorders set status='${_status}' where ordernum = '${_ordernum}' `
            db.search(changeSql).then((result,err)=>{
                if(err){
                    res.send({status:false,error:err});
                }else{
                    res.send({status:true,result:result})
                }
            })
        })
        //全部订单
        app.post('/allOrder',(req,res)=>{
            let _username = req.body.username;
            db.search(`select * from goodorders where username = '${_username}'`).then((result,err)=>{
                if(err){
                    res.send({status:false,error:err});
                }else{
                    res.send({status:true,result:result})
                }
            })
        })
        // 删除订单
        app.post('/delOrder',(req,res)=>{
            let _ordernum=req.body.ordernum;
            let delsql = 'DELETE FROM goodorders where ordernum =';
            db.search(`${delsql}${_ordernum}`).then((result,err)=>{
                if(err){
                    res.send({status:false,error:err});
                }else{
                    res.send({status:true,result:result})
                }
            })
        })
       
    } 
}
 