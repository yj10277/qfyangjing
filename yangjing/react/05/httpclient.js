import http from 'superagent'
const apiBaseUrl = 'http://localhost:5555/';
function filterUrl(url){
    if(url.startsWith('http')){
        return url;
    }else{
        return apiBaseUrl + url;
    }
}
export default {
    get(url,params){
        return new Promise((resole,reject)=>{
            http.get(filterUrl(url)).query(params || {}).end((error,res)=>{
                if(error){
                    reject(error)
                }else{
                    resole(res.body)
                }
            })
        })
    }
}