var db = require('../db').mysql;

module.exports={
    reg(app){
        //加入购物车
        app.post('/gotocar',(req,res)=>{
            let _username=req.body.username;
            let _color=req.body.color;
            let _size=req.body.size;
            let _qty=req.body.qty;
            let _id= req.body.id;

            db.search(`select * from goods where id='${_id}'`).then((result)=>{
                let gooddetail=result[0];
                db.search(`select * from user where username='${_username}'`).then((result)=>{
                    if(result[0].buylist == null || result[0].buylist =='null' ||result[0].buylist == ''||result[0].buylist=="[]"){
                        gooddetail["qty"]=_qty;
                        gooddetail["color"]=_color;
                        gooddetail["size"]=_size;
                        gooddetail["images"]=JSON.parse(gooddetail["images"])
                        let _carlist=[];
                        _carlist.push(gooddetail);
                        _carlist=JSON.stringify(_carlist);

                        let buylistSql = `update user set buylist = '${_carlist}' where username='${_username}'`;

                        db.search(buylistSql).then((result,err)=>{
                            if(err){
                                res.send({status:false,error:err});
                            }else{
                                res.send({status:true,result:result})
                            }
                        })
                    
                    }else{
                        //有商品，判断id是否存在，存在加1，不存在，加商品
                        var a=JSON.parse(result[0].buylist);
                        a.map((item)=>{
                                if(_id*1==item['id']&&_color==item['color']&&_size==item['size']){
                                    item['qty'] = item['qty']*1+_qty*1;

                                    var ab=JSON.stringify(a);
                                    let buylistSql = `update user set buylist = '${ab}' where username='${_username}'`;

                                    db.search(buylistSql).then((result,err)=>{
                                        if(err){
                                            res.send({status:false,error:err});
                                        }else{
                                            res.send({status:true,result:result})
                                        }
                                    })
                                    return;
                                }else{
                                    var aa=JSON.parse(result[0].buylist);
                                    gooddetail['qty']=_qty;
                                    gooddetail['color']=_color;
                                    gooddetail['size']=_size;
                                    gooddetail["images"]=JSON.parse(gooddetail["images"])
                                    aa.push(gooddetail);
                                    var abc=JSON.stringify(aa);

                                        let buylistSql = `update user set buylist = '${abc}' where username='${_username}'`;

                                        db.search(buylistSql).then((result,err)=>{
                                            if(err){
                                                res.send({status:false,error:err});
                                            }else{
                                                res.send({status:true,result:result})
                                            }
                                        })  
                                }
                                
                        })

                    }
                })
            })
            
            
        })
        
        
    }
}

                             