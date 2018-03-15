//文件直接读取(http://localhost:88/3wjdq.txt 或者 http://localhost:88/2post.html 或者 http://localhost:88/2post)
var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer((request,response)=>{
    var urlobj = url.parse(request.url,true);
    var pathname = urlobj.pathname;
   

    //路由映射规则(只需要在数组里面添加对象规则就可以了这样就可以替换下面的switch)
    var arr = [
                {reg:/\*.html/,event:function(data){
                    var ht = fs.readFileSync(data);
                    response.end(ht);
                }}
              ];
    for(let item of arr){
        if(item.reg.test(pathname)){
            item.event(data.replace('/',''));
        }
    }

    

    //路由（通过url映射到不同的功能实现）
    switch(pathname){
        case '/2post.html':
            //同步读取
            var html = fs.readFileSync('2post.html');
            response.end(html);
            break;
        //适用没后缀名
        case '/2post':
            //同步读取
            var html2 = fs.readFileSync('2post.html');
            response.end(html2);
            break;
            
        case '/3wjdq.txt':
            //异步读取
            fs.readFile('3wjdq.txt',(err,data)=>{
                response.end(data);
            });
            break;

        case '/4':
            var img = fs.readFileSync('1.jpg');
            response.end(img);
            break;

        default:
            response.end('wrong number');
            break;
    }
    
}).listen(88);