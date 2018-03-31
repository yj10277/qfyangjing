import axios from 'axios'

let baseUrl = 'http://localhost:88/'
function filterUrl(_url){
    if(_url.startsWith('http')){
        return _url;
    }
    return baseUrl + _url;
}
export default {
    get(_url,_params){
        return new Promise((resolve,reject)=>{
            axios.get(filterUrl(_url),{params:_params || {}}).then((res)=>{
                resolve(res)
            }).catch((error)=>{
                reject(error)
            })
        })
    },
    post(_url,_params){
        return new Promise((resolve,reject)=>{
            axios.post(filterUrl(_url),_params || {}).then((res)=>{
                resolve(res)
            }).catch((error)=>{
                reject(error)
            })
        })
    }
}