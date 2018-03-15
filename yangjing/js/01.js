/* 
* @Author: Marte
* @Date:   2018-02-01 11:46:40
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-01 17:59:55
*/
//设置小名
require.config({
    paths:{
        
        'jq':'jquery-3.2.1',
        'cm':'common'
    },
    //依赖
    shim:{
        //common依赖jq
        'cm':['jq']
    }
});
//使用小名
require(['jq','cm','03'],function(a,b,c){
    console.log(getColor(),c);
});