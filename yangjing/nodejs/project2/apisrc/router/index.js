const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
//让req.query || req.body可以得到值
const bp = require('body-parser');
app.use(bp.urlencoded({extended:false})); 

//加载session(像cookie)一样 不同的页面都可以访问
const session = require('express-session');
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}));

const userRouter = require('./users.js')
//让websrc文件夹下面的文件可以（跨越）访问
app.use(express.static(path.join(path.resolve(__dirname,'../../'),'websrc')));

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