//加载ws模块 端口号8080
const Wsserver = require('ws').Server;
const wss = new Wsserver({
    port:8080
});


wss.on('connection',(client)=>{
    console.log('有人上线');
    //断开监听
    client.on('close',function(){
        console.log('有人下线');
    })
    //接受前段传过来的数据
    client.on('message',function(res){
        console.log(res);
        //把接受到的数据传给所有已连接上的前端
        wss.clients.forEach((item)=>{
            item.send(res);
        })
    })

})