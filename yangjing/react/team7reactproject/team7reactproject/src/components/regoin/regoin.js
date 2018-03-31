import React,{Component} from 'react'
import './regoin.css'
class RegoinComponent extends Component {
    componentDidMount(){
        function city(){
            var sh=document.querySelector('#sheng');
            var city=document.querySelector('#city');
            var xian=document.querySelector('#xian');
            var arr=[200,304];
            let Promise_p=new Promise((resolve,reject)=>{
                var xhr_P=new XMLHttpRequest();
                xhr_P.onload=function(){
                    if(arr.indexOf(xhr_P.status)>=0){
                        var res=JSON.parse(xhr_P.responseText);
                       
                        var options='';
                       for(var i=0;i<res.regions.length;i++){
                            var option=document.createElement('option');
                            option.setAttribute('data-id', res.regions[i].id);
                            option.innerHTML=res.regions[i].name;
                            sh.appendChild(option);
                            }
                            resolve(res);

                        }
                    }
                xhr_P.open('get','src/libs/json/region.json');
                xhr_P.send();
            })
            .then(res=>{
            
                let Promise_C=new Promise((resolve,reject)=>{
                  sh.onclick=function(){
                   
                    for(var i=0;i<res.regions.length;i++){
                        if(this.value==res.regions[i].name){
                           
                                city.innerHTML='';

                            for(var j=0;j<res.regions[i].regions.length;j++){
                                var option=document.createElement('option');
                                option.setAttribute('data-id', res.regions[i].regions[j].id);
                                option.innerHTML=res.regions[i].regions[j].name;
                                city.appendChild(option);
                            }
                            resolve(res);
                        } 
                    }
                   
                  }

                })
                return Promise_C;
            }).then(res=>{
                 city.onclick=function(){
                        var cy=sh.value;
                    for(var i=0;i<res.regions.length;i++){
                   
              
                        if(cy==res.regions[i].name){

                            for(var j=0;j<res.regions[i].regions.length;j++){
                                if(this.value==res.regions[i].regions[j].name){
                                            xian.innerHTML='';

                                    for(var k=0;k<res.regions[i].regions[j].regions.length;k++){
                                            var option=document.createElement('option');
                                            option.setAttribute('data-id', res.regions[i].regions[j].regions[k].id);
                                            option.innerHTML=res.regions[i].regions[j].regions[k].name;
                                            xian.appendChild(option);
                                    }
                                }
                            } 
                        }
                            
                    }
                   
                  }
                
            })
        }
        city();
        // $('#sheng').on('mousedown',function(){
        //     this.size=6;
        // })
    }
    render(){
        return (
            <div >
                <select name="sheng" id="sheng"  className="easyui-combobox"></select>
                <select name="city" id="city"  ></select>
                <select name="xian" id="xian"  ></select>
            </div>
        )

    }
}
export default RegoinComponent;