import axios from 'axios';

const baseUrl="http://10.3.136.63:7070"

export default {
    get(_url,_params){
        var url = _url&& _url.startsWith('http') ? _url :`${baseUrl}/${_url}`;
        return new Promise((resolve,reject)=>{
            axios({
                url:url,
                params:_params || {},
                headers:{
                    Authorization:window.sessionStroage.getItem('ffztoken')
                }
            }).then(res=>{
                console.log(res);
                if(!res.data.status&&res.data.error=="unanthorized"){
                    router.push('login');
                    return false;
                }
                resolve(res)
            }).catch(error=>{
                reject(error)
            })
        })
    },
    post(_url,_params){
        var url = _url && _url.startsWith('http') ? _url : `${baseUrl}/${_url}`;
        return new Promise((resolve, reject) => {
            axios({
                url: url,
                method: 'post',
                data: _params || {},
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: window.sessionStorage.getItem('ffztoken')
                },
                transformRequest: [function (data) {
                    let ret = ''
                    for (let it in data) {
                      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                    }
                    return ret
                  }], 
            }).then(res => {
                if(!res.data.status && res.data.error == "unauthorized"){
                    router.push('login');
                    return false;
                }               
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        }) 
    }
}