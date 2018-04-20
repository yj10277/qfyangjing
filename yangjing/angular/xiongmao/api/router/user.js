var db = require('../db').mysql;
var express = require('express');
var fs= require('fs');
var path = require('path');
var multer = require('multer');
var upload = multer({dest:path.join(path.resolve(__dirname,'../'),'temp')});
const SMSClient = require('@alicloud/sms-sdk')



module.exports={
    reg(app){
        //所有用户信息(ok)
        
        app.post('/getUsers',(req,res)=>{
            let _username=req.body.username;
            // console.log(_username)
                if(_username){
                    db.search(`select * from user where username = '${_username}'` ).then((result)=>{
                    res.send({status:true,data:result})
                })
            }

            db.search('select * from user').then((result)=>{
                res.send({status:true,data:result})
            })
        })
        
        //删除用户（ok）
        app.post('/delUser',(req,res)=>{
            let _id=req.body.id;
            let delsql = 'DELETE FROM user where id =';
            db.search(`${delsql}${_id}`).then((result,err)=>{
                if(err){
                    res.send({status:false,error:err});
                }else{
                    res.send({status:true,result:result})
                }
            })
        })
        //模糊查询(验证ok)
        app.post('/fuzzyUser',(req,res)=>{
            let fuzzyusername = req.body.username;
            let fuzzySql = 'select * from user where username like';
            db.search(`${fuzzySql} '%${fuzzyusername}%'`).then((result,err)=>{
                if(err){
                    res.send({status:false,error:err})
                }else{
                    res.send({status:true,result:result})
                }
            })
        })
        //查询是否已注册
        app.post('/isreg',(req,res)=>{
            let _username = req.body.username;
            let isregSql=`select * from user where username = '${_username}'`;
            db.search(isregSql).then((result,err)=>{
                if(err){
                    res.send({status:false,error:err})
                }else{
                    res.send({status:true,result:result,mes:'用户已注册'})
                }
            })
        })
        
        //注册增加用户(验证ok)
        app.post('/addUser',(req,res)=>{
            let _username = req.body.username;
            let _password = req.body.password;
            let _address= req.body.address;
            console.log(_address,'999')
            let addUserSql = `INSERT INTO user(username,password,address) VALUES('${_username}','${_password}','${_address}')`;

            // console.log(_username,_password,12)
            db.search(addUserSql).then((result,err)=>{
                if(err){
                    res.send({status:false,error:err});
                }else{
                    res.send({status:true,result:result})
                }
            })
        })
        //登录验证(已验证ok)
        
        app.post('/checkLogin',(req,res)=>{

            let _username= req.body.username;
            let _password = req.body.password;
            // console.log(req.body,'-----------?')
            let checkSql=`select * from user where username = '${_username}' and password = '${_password}'`;
            // console.log(req)
            // console.log(_username,_password)
            // console.log(checkSql)
            db.search(checkSql).then((result,err)=>{
                console.log(result)
                if(!result[0]){
                    res.send({status:false,error:err,msg:'信息有误'});
                }else{
                    res.send({status:true,result:result,msg:'登录成功'})
                }
                // if(err){
                //     res.send({status:false,error:err,msg:'信息有误'});
                // }else{
                //     res.send({status:true,result:result,msg:'登录成功'})
                // }
            })

        })
        app.post('/collect',(req,res)=>{
            let _username=req.body.username;
            let _id = req.body.id;
            // console.log(req.body)
            db.search(`select * from goods where id='${_id}'`).then((result)=>{
                let thisGood=result[0];
                delete thisGood.introduce;
                delete thisGood.newest;
                delete thisGood.number;
                delete thisGood.size;
                delete thisGood.color;
                delete thisGood.popularity;
                delete thisGood.sales;

                db.search(`select * from user where username = '${_username}'`).then((result)=>{
                    if(result[0].collection==null||result[0].collection==''){
                        let totalcol=[];
                        totalcol.push(thisGood);
                        totalcol=JSON.stringify(totalcol);

                        let collectSql=`update user set collection = '${totalcol}' where username='${_username}' `;
                        db.search(collectSql).then((result,err)=>{
                            if(err){
                                res.send({status:false,error:err});
                            }else{
                                res.send({status:true,result:result})
                            }
                        })
                    }else{
                        //有商品，相同不加，不同push
                        let collected = JSON.parse(result[0].collection);
                        collected.map((item)=>{
                            if(_id*1==item['id']){
                                db.search()
                            }else{
                                console.log(1)
                                collected.push(thisGood);
                                let collecting = JSON.stringify(collected);

                                let collectSql=`update user set collection = '${collecting}' where username='${_username}' `;
                                db.search(collectSql).then((result,err)=>{
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
        app.post('/headIcon',upload.single('header'),function(req,res,next){
            var file=req.file;
            fs.rename(file.path,file.path+file.originalname);
            let newname ='temp/'+file.filename+file.originalname;
            let _username= req.body.username;
            console.log(_username)
            let iconSql=`update user set icon = '${newname}' where username='${_username}'`;
            db.search(iconSql).then((result,err)=>{
                if(err){
                    res.send({status:false,error:err});
                }else{
                    res.send({status:true,result:newname})
                }
                
            })
        })
        app.post('/updateUsersBuylist',(req,res)=>{
            let _username=req.body.username;
            let _buylist=req.body.buylist;
            let _nickname=req.body.nickname;
            let _gender=req.body.gender;

            if(_username){
                if(_buylist){
                    db.search(`UPDATE user SET buylist='${_buylist}'   WHERE username ='${_username}'` ).then((result)=>{
                    res.send({status:true,data:result})
                    })
                }
                if(_nickname){
                    db.search(`UPDATE user SET nickname='${_nickname}'   WHERE username ='${_username}'` ).then((result)=>{
                    res.send({status:true,data:result})
                    })
                }
                if(_gender){
                    db.search(`UPDATE user SET gender='${_gender}'   WHERE username ='${_username}'` ).then((result)=>{
                    res.send({status:true,data:result})
                    })
                }
            }
        })
        //用户注册
        app.post('/addClient',(req,res)=>{
                    let _username = req.body.username;
                    console.log(req.body)
                    let isregSql=`select * from user where username = '${_username}'`;
                    db.search(isregSql).then((result,err)=>{
                        if(result.length==0){
                            console.log(123)
                            let addUserSql = `INSERT INTO user(username) VALUES('${_username}')`;
                            db.search(addUserSql).then((result,err)=>{
                                if(err){
                                    res.send({status:false,error:err});
                                }else{
                                    res.send({status:true,result:result})
                                }
                            })
                        }else{
                            console.log(result)
                            res.send({status:true,result:result,mes:'用户已注册'})
                        }
                    })
        })
        //短信验证
        app.post('/sms',(req,result)=>{
                    var phoneNum=req.body.phone;
                    console.log(phoneNum)
                    const accessKeyId = 'LTAImpe5DOUEmhjd';
                    const secretAccessKey = 'qZjRDeUOdMkg4vTCcW8v8TYDlJ0u7T';
                    let smsClient = new SMSClient({accessKeyId, secretAccessKey})
                     var range=function(start,end){
                            var array=[];
                            for(var i=start;i<end;++i) array.push(i);
                            return array;
                        }
                    var randomstr = range(0,6).map(function(x){
                        return Math.floor(Math.random()*10);
                        }).join('');
                    var json={code:randomstr}
                    var red=JSON.stringify(json);
                    console.log(red,'rem')
                    //发送短信
                    smsClient.sendSMS({
                        PhoneNumbers: phoneNum,
                        SignName: '方政',
                        TemplateCode: 'SMS_131365054',
                        TemplateParam: red
                    }).then(function (res) {
                        let {Code}=res
                        if (Code === 'OK') {
                            //处理返回参数
                            var newRes={res:res,scode:randomstr}
                            console.log(res)
                            result.send(newRes)
                        }
                    }, function (err) {
                        console.log(err)
                        result.send(err)
                    })
        })



        //查询是否收藏
        app.post('/isColleted',(req,res)=>{
            let _username=req.body.username;
            let _id = req.body.id;//商品id
            console.log(req.body)
            db.search(`select * from user where username='${_username}'`).then((result)=>{
                let _collection = JSON.parse(result[0].collection);
                var a=0;
                if(_collection==null){
                    console.log(0)
                    res.send({msg:'未收藏该商品'})  
                }else{
                    for(let item of _collection){
                        if(item.id==_id){
                            res.send({msg:'已收藏该商品'});
                            return;

                        }else{
                            a++;
                        }
                    }
                    if(a==_collection.length){
                        res.send({msg:'未收藏该商品'})  

                    }
                }

            })
            
        })

        //加入收藏或者取消收藏
        app.post('/addOrDel',(req,res)=>{
            let _username=req.body.username;
            let _id = req.body.id;//商品id
            let _starstatus = req.body.starstatus;
            //true为已收藏要取消。false未收藏要收藏

            db.search(`select * from user where username='${_username}'`).then((result)=>{
                var newcollection=[]
                console.log(result[0].collection);

                if(result[0].collection==null||result[0].collection.length==0){
                    var newcol=[{"id":_id}];
                    newcol=JSON.stringify(newcol);

                    console.log(newcol)
                    db.search(`update user set collection = '${newcol}' where username = '${_username}'`).then((result,err)=>{
                            if(err){
                                res.send({status:false,error:err});
                            }else{
                                res.send({msg:"加入收藏"})
                            }
                       })
                }else{
                    let _collection = JSON.parse(result[0].collection); 
                    if(_starstatus=='false'){
                        _collection.push({"id":_id});
                        _collection=JSON.stringify(_collection);
                        db.search(`update user set collection = '${_collection}' where username = '${_username}'`).then((result,err)=>{
                             if(err){
                                 res.send({status:false,error:err});
                             }else{
                                 res.send({msg:"加入收藏"})
                             }
                        })

                    }else{
                        for(let item of _collection){
                            if(item.id != _id){
                                newcollection.push(item);
                                
                            }  console.log(newcollection);
                        }
                                console.log(typeof(newcollection));
                            console.log(newcollection);
                        newcollection=JSON.stringify(newcollection);

                       db.search(`update user set collection = '${newcollection}' where username = '${_username}'`).then((result,err)=>{
                            if(err){
                                res.send({status:false,error:err});
                            }else{
                                res.send({msg:"取消收藏"})
                            }
                       })
                       


                    }
                }
                

            })
        })
        
        //获取收藏商品信息
        app.post('/getCollection',(req,res)=>{
            let _username=req.body.username;


            db.search(`select * from user where username='${_username}'`).then((result)=>{
                var goodlist=[];
                if(result[0].collection==null||result[0].collection=='[]'){
                    res.send({msg:"该用户无收藏商品"})
                }else{
                    var currentCol=JSON.parse(result[0].collection);
                    for( let item of currentCol){
                        db.search(`select * from goods where id='${item.id}'`).then((result,err)=>{
                            goodlist.push(result[0]);
                            
                            if(goodlist.length==currentCol.length){
                                res.send({collection:goodlist});
                            }
                        })
                    }

                }
                
            })
        })

        //收藏页取消收藏
        app.post('/delCol',(req,res)=>{
            let _username=req.body.username;
            let _id = req.body.id;//商品id
            db.search(`select * from user where username='${_username}'`).then((result)=>{
                var currentCol=JSON.parse(result[0].collection);
                var newCol=[];
                for(let item of currentCol){
                    if(item.id !=_id){
                        newCol.push(item);
                    }
                    if(newCol.length==currentCol.length-1){
                        newCol= JSON.stringify(newCol)
                        db.search(`update user set collection = '${newCol}' where username = '${_username}'`).then((result,err)=>{
                            if(err){
                                res.send({status:false,error:err});
                            }else{
                                res.send({msg:"取消成功"})
                            }
                       })
                    }
                }

            })

        })


        //商品页取消收藏（多选取消）
                app.post('/delCols',(req,res)=>{
                    let _username=req.body.username;
                    let _proarr= req.body.proarr;
                    console.log(_proarr,'取消收藏')
                    _proarr= JSON.parse(_proarr);
                    let idarr=[];

                    for(var i=0;i<_proarr.length;i++){
                   

                        idarr.push({"id":_proarr[i]});
                    }
                   
                    db.search(`select * from user where username='${_username}'`).then((result)=>{
                        var currentCol=JSON.parse(result[0].collection);
                        for(let i=0; i<idarr.length;i++){
                       
                            for(let j=0;j<currentCol.length;j++){
                                if(currentCol[j].id==idarr[i].id){
                                    currentCol.splice(j,1);
                                    j--;
                                 
                                }
                            }
                        }
                
                        currentCol=JSON.stringify(currentCol);
                        db.search(`update user set collection = '${currentCol}' where username = '${_username}'`).then((result,err)=>{
                            if(err){
                                res.send({status:false,error:err});
                            }else{
                                res.send({msg:"取消成功"})
                            }
                        })


                    })

                })





    }
}


                        