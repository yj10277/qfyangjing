var http = require('http');
var url = require('url');
module.exports = {
    start:function(a){
        http.createServer((request,response)=>{
            var urlobj = url.parse(request.url,true);
            var pathname = urlobj.pathname;
            response.end('1234567');
        }).listen(a);
    }
}