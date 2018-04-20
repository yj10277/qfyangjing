const express = require('express');
const app = express();
const http = require('http').Server(app);
const bp = require('body-parser');
const io = require('socket.io')(http);
const path = require('path');

const productRouter = require('./products');
const userRouter = require('./user');
const orderRouter = require('./order');
const addressRouter = require('./address');
const buycarRouter = require('./buycar');

app.use(bp.urlencoded({extended: false}));
app.use(express.static(path.join(path.resolve(__dirname,'../'),'/')));
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") {
      res.sendStatus(200);/*让options请求快速返回*/
    } else{
      next();
    }
});


module.exports={
    start(_port){
        productRouter.reg(app);
        userRouter.reg(app);
        orderRouter.reg(app);
        addressRouter.reg(app);
        buycarRouter.reg(app);
        
        http.listen(_port || 8080);
    }
}