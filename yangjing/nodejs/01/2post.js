var http = require('http');
var qs = require('querystring');
http.createServer((request,response)=>{
        var str = '';
        //请求体
        request.on('data',(_data) => {
            console.log(_data);
            str += _data;
        });
        
        //响应体
        request.on('end',() => {
            console.log(str);
            var obj = qs.parse(str);//把字符串转成对象
            console.log(obj);
            response.end(str);
        });
        
}).listen(444);