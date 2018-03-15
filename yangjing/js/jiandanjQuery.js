
class Jquery{
    constructor(a){
        this.init(a);
    }
    init(a){
        //获取页面所有的节点
        try{

            this.ele = document.querySelectorAll(a);
        }catch(e){
            var b = a.slice(1);
            if(/^#/.test(a)){
                   this.ele = document.getElementById(b); 
            }else if(/^\./.test(a)){
                try{

                this.ele = document.getElementsByClassName(b);
                }catch(ee){
                    this.ele = [];
                    var res = document.getElementsByTagName('*');
                    for(var i=0;i<res.length;i++){
                        var b = res[i].className.split(' ');
                        if(b.indexOf(b) != -1){
                            this.ele.push(res[i]);
                        }
                    }

                }

            }else{
                this.ele = document.getElementsByTagName(a);
            }


        }
        //添加ele长度属性
        this.len = this.ele.length;
        //返回实例
        return this;
    }

    show(){
        for(var i=0;i<this.len;i++){
            this.ele[i].style.display = 'block';
        }
        return this;
    }
    hide(){

    }
}








function jq(a){
    return new Jquery(a);
}