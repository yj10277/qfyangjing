const express = require('express');
const app = express();
const user = require('./indexuser.js');
//解决目录下面文件夹里面的文件有可以打开
//const path = require('path');


module.exports = {
    start:(_port)=>{
        app.use(express.static(__dirname + '/'));//使所有的文件可以打开
        //解决目录下面文件夹里面的文件有可以打开
        //app.use(express.static(path.join(path.resolve(__dirname,'../'),'/')));
        user.yz(app);
        app.get('/',(a,b)=>{
            b.send('express');
        })
        app.listen(_port,()=>{
            console.log(12345);
        })
    }
}