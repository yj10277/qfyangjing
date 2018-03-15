const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
//让req.query || req.body可以得到值
const bp = require('body-parser');
app.use(bp.urlencoded({extended:false})); 

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



const userRouter = require('./users.js')


const productRouter = require('./product.js');
const orderRouter = require('./order.js');

module.exports = {
    start(a){
        userRouter.register(app);
        productRouter.register(app);
        orderRouter.register(app);

        http.listen(a || 8080);
    }
}