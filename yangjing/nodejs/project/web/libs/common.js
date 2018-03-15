var common = common || {};
common.baseUrl = 'http://localhost:8080/';

common.a = function(res){
    if(!res.status && res.error=='unauthbrized'){
        location.href = 'login.html';
    }
}
//二次封装代替common.a封装
common.http = {
    get(_api,_params,_cb){
        //show up loading(遮罩层显示)防止用户不断的点击发请求
        _api = _api.startsWith('http') ? _api : common.baseUrl+_api;
        $.get(_api,_params||{},function(res){
                if(!res.status && res.error=='unauthbrized'){
                    location.href = 'login.html';
                }else{
                    _cb(res);
                }
                //hide.loading(遮罩层隐藏)防止用户不断的点击发请求
        })
    },
    post(_api,_params,_cb){
        //show up loading(遮罩层显示)防止用户不断的点击发请求
        _api = _api.startsWith('http') ? _api : common.baseUrl+_api;
        $.post(_api,_params||{},function(res){
                if(!res.status && res.error=='unauthbrized'){
                    // location.href = 'login.html';
                    _cb(res);
                }else{
                    _cb(res);
                }
                //hide.loading(遮罩层隐藏)防止用户不断的点击发请求
        })
    }

}



common.loading = {
    //show()
    //hide()  字体图标显示隐藏
}