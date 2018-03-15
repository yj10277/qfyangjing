module.exports = {
    yz:(app)=>{
        app.get('/index',(a,b)=>{
            b.send('get index');
        })
    }
}