//获取get参数(http://localhost:333/?user=admin&pwd=123)
var http = require('http');//加载http模块
var url = require('url');//加载url模块
http.createServer((request,response)=>{
    var obj = url.parse(request.url,true);//把obj.query变成对象
    console.log(obj.query);
    response.write('333');//echo 333
    response.end('123');//echo 123
}).listen(333);
console.log(33);