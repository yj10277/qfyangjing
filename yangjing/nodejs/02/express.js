//加载express模块（取代http,url模块复杂写法）
const express = require('express');
const app = express();

app.get('/',(a,b)=>{
    b.send({status:true,mess:'1707'});
})

app.get('/4',(a,b)=>{
    b.send('4');
})

app.post('/post',(a,b)=>{
    b.send('post');
})

app.get('/post',(a,b)=>{
    b.send('post');
})

app.listen(777);