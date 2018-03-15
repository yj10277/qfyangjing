//过滤器
const apiResult = require('./apiResult.js')
module.exports = function(req,res,next){
        if(req.session.username){
            next();
        }else{
            res.send(apiResult(false,null,null,'unauthorized'))
        }
}

