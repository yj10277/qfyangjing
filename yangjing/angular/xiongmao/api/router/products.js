var db = require('../db').mysql;

module.exports={
    reg(app){
        //获取所有商品、排序(ok)
         app.post('/product',(req,res)=>{
            let _colName=req.body.colName;
            let _sort = req.body.sort;
            console.log(req.body);
            if(_colName&&_sort){
                let sortSql=`select * from goods order by ${_colName}+0 ${_sort} `;
                db.search(sortSql).then((result,err)=>{
                    if(err){
                        res.send({status:false,error:err});
                    }else{
                        res.send({status:true,result:result})
                    }
                })
            }else{
                db.search('select * from goods').then((result)=>{
                    res.send({status:true,data:result});
                })
            }
            

        })
        //品牌筛选+排序(ok)
        app.post('/getPros', (req, res) => {
            let _brand = req.body.brand;
            let _colName=req.body.colName?req.body.colName:'popularity';
            let _sort = req.body.sort?req.body.sort:'asc';
            var brandsql = `select * from goods where brand = '${_brand}' order by ${_colName}+0 ${_sort}`;
            db.search(brandsql).then((result,err)=>{
                if(err){
                    res.send({status:false,error:err});
                }else{
                    res.send({status:true,result:result})
                }
            })
        });

        //增加商品(ok)
        app.post('/addProduct',(req,res)=>{
            let _name=req.body.name;
            let _price=req.body.price;
            let _brand=req.body.cut;
            let _type=req.body.type;
            let _introduce=req.body.smalltype;
            let _img=req.body.images;
            let _sales=req.body.sales;
            let _popularity=req.body.gender;
            let _newest=req.body.newest;
            let _color=req.body.color;
            let _size = req.body.size;
            let _number = req.body.id;
            let _shop=req.body.hot;
            console.log(req.body,999);
            let addsql =`INSERT INTO goods(name,price,cut,type,smalltype,images,sales,gender,newest,color,hot,id,size) VALUES('${_name}','${_price}','${_brand}','${_type}','${_introduce}','${_img}','${_sales}','${_popularity}','${_newest}','${_color}','${_size}','${_number}','${_shop}')`;

            db.search(addsql).then((result,err)=>{
                //console.log(result);
                if(err){
                    res.send({status:false,error:err});
                }else{
                    res.send({status:true,result:result})
                }
            })

        })
        //删除商品（ok）
        app.post('/delcProduct',(req,res)=>{
            console.log(req.body);
            let _id = req.body.id;
            let delsql = `DELETE FROM goods WHERE id = '${_id}'`;  
            
            db.search(delsql).then((result,err)=>{
                if(err){
                    res.send({status:false,error:err});
                }else{
                    res.send({status:true,result:result})
                }
            })

        })
        //修改商品（ok）
        app.post('/updateProduct',(req,res)=>{
            let _id=req.body.id;
            let _name=req.body.name;
            let _price=req.body.price;
            let _brand=req.body.smalltype;
            let _type=req.body.type;
            let _shop=req.body.size;
            console.log(req.body)

            let updatesql=`UPDATE goods SET name= '${_name}',price='${_price}',smalltype='${_brand}' ,type='${_type}',size='${_shop}'  WHERE id ='${_id}' `
            
            db.search(updatesql).then((result,err)=>{
                 if(err){
                    res.send({status:false,error:err});
                }else{
                    res.send({status:true,result:result})
                }
            })

        })
        //模糊查询+排序（ok）
        app.post('/fuzzySearchPro',(req,res)=>{
            let _colName=req.body.colName?req.body.colName:'id';
            let _sort = req.body.sort?req.body.sort:'asc';
            let fuzzyParams = req.body.name;
            console.log(req.body,)
            let fuzzySql = `select * from goods where name like '%${fuzzyParams}%' or smalltype like '%${fuzzyParams}%' or type like '%${fuzzyParams}%' order by ${_colName}+0 ${_sort}`;
            // console.log(req);
            db.search(fuzzySql).then((result,err)=>{
                console.log(6666)
                if(err){
                    res.send({status:false,error:err})
                }else{
                    res.send({status:true,result:result})
                }
            })
        })
        //多字段模糊查询(ok)
        app.post('/muchSearchPro',(req,res)=>{
            let _type=req.body.type;
            let _brand=req.body.brand;
            let _name=req.body.name;
            let _shop=req.body.shop;
    
            let muchSearchSql=`select * from goods where instr(name,'${_name}')>0 and instr(brand,'${_brand}')>0 and instr(type,'${_type}')>0 and instr(shop,'${_shop}')>0`
             db.search(muchSearchSql).then((result,err)=>{
                
                if(err){
                    res.send({status:false,error:err})
                }else{
                    res.send({status:true,result:result})
                }
            })
        })

 


        //人气推荐（ok）
        app.post('/popularity',(req,res)=>{
            let _minnum = req.body.minnum;
            let _maxnum = req.body.maxnum;
            let _col=req.body.col;
            let popSql=`select * from goods where ${_col} >= '${_minnum}' and ${_col} <= '${_maxnum}'`
            db.search(popSql).then((result,err)=>{
                if(err){
                    res.send({status:false,error:err});
                }else{
                    res.send({status:true,result:result})
                }
            })
        })

        //分页(ok)
        app.post('/paging',(req,res)=>{
            let _page=req.body.page;
            let _pagenum=req.body.pagenum;
            let per=(_page-1)*_pagenum;
            let pagingSql = `select * from goods limit ${per},${_pagenum}`;

            db.search(pagingSql).then((result,err)=>{
                if(err){
                    res.send({status:false,error:err});
                }else{
                    res.send({status:true,result:result})
                }
            })
        })
        //请求大小分类
        app.post('/category1',(req,res)=>{
                    let _parentcategory = req.body.parentcategory;
                    let cateSql=`select * from categorytable where parentcategory ='${_parentcategory}'`;
                    db.search(cateSql).then((result,err)=>{
                        if(err){
                            res.send({status:false,error:err});
                        }else{
                            res.send({status:true,result:result})
                        }
                    })
        })
        //请求大分类
        app.post('/category2',(req,res)=>{
            let cateSql=`select * from parentcategory`;
            db.search(cateSql).then((result,err)=>{
                if(err){
                    res.send({status:false,error:err});
                }else{
                    res.send({status:true,result:result})
                }
            })
        })
        //种类筛选
        app.post('/getgoodsbycategory', (req, res) => {
            let _type = req.body.type;
            console.log(_type)
            var typesql = `select * from goods where type = '${_type}'`;
            db.search(typesql).then((result,err)=>{
                if(err){
                    res.send({status:false,error:err});
                }else{
                    res.send({status:true,result:result})
                }
            })
        });


     


    }
}

