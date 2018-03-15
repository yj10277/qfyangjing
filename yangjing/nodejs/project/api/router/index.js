const express = require('express');
const app = express();
//获取post参数用
const bp = require('body-parser');
//const bpser = bp.urlencoded({extended:false});

const users = require('./users.js');
const products = require('./product.js');

//Express -- 跨域支持
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") {
      res.send(200);/*让options请求快速返回*/
    } else{
      next();
    }
});

//让bp全局都可以用
app.use(bp.urlencoded({extended:false}));


//过滤器(路由首先先进这里)
app.use((req,res,next)=>{
    if(req.query.name || req.body.username || req.body.proname || req.body.id){
        next();
    }else{
        res.send({status:false,error:'unauthbrized',message:"无权限访问"});
    }
})
        


module.exports = {
    start:(_port)=>{
        users.register(app);
        products.register(app);
        app.listen(_port || 8080);
    }
}