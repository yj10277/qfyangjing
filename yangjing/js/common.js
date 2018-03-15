// 得到某个范围内的随机数
// @param  {Number} min [最小数]
// @param  {Number} max [最大数]
// @return {Number}     [返回值]
function randomNumber(min,max){
    
    return parseInt(Math.random()*(max-min+1)) + min;

}





// 得到4位随机整数验证码
// @return {String} 4位随机整数验证码(字符串)  [返回值]
function vCode(){
      var res = '';
      
      for(var i=0;i<4;i++){
          var s = parseInt(Math.random()*10);
            res += s;
          
      }
      return res;
}   

// 得到4位随机整数或者字母(大小写)验证码
// @return {String} 4位随机整数或者字母(大小写)  [返回值]
function vCode2(){
                
    var str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWSYZ';
    var k ='';
    for(var i=0;i<4;i++){
            var sj = parseInt(Math.random()*62)
            k += str[sj]
    }
    return k;
} 




// 数组的去重函数
// 传进去一个数组
function norepeat(arr){
        for(var j=0;j<arr.length;j++){
            for(var i=j+1;i<arr.length;i++){
                    if(arr[j]===arr[i]){
                        arr.splice(i,1);
                        i--;
                    }
                    
            }
        }
        return arr;
}




// 得到一个随机数颜色
// @return {string}  [返回rgb格式颜色]
function randomColor(){
    var r = randomNumber(0,255);
    var g = randomNumber(0,255);
    var b = randomNumber(0,255);
    return 'rgb('+ r + ',' + g + ',' + b + ')';
}



// 得到一个#ffffff 6位格式的随机数颜色
function getColor(){
    var str = '0123456789abcdef';
    var res = '#';
    for(var i=0;i<6;i++){
        res += str.charAt(randomNumber(0,15));
    }
    return res;
}




// 得到某个日期n天后的日期
function afterDay(date,n){
    //根据传入的日期创建日期对象
    //2017-11-23
       date = new Date(date);
    //获取当前的日期年月日后面的日
    var day = date.getDate();//23
    date.setDate(day+n);//设置
    //第一种方法输出
    //return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
    //另一种方法输出
    return date.toLocaleDateString().split('/').join('-');
}






var element = {
// 获取元素节点
    get:function(nodes){
        var res = [];
        for(var i=0;i<nodes.length;i++){
            if(nodes[i].nodeType === 1){
                res.push(nodes[i]);
            }
        }
        return res;
    },
// 获取一个元素下的所有子元素节点
    children:function(element){
            var sy = element.childNodes;
            return  this.get(sy);
    },
// 获取一个元素的下一个元素
    next:function(element){
            if(element.nextSibling.nodeType===3){
                return element.nextSibling.nextSibling;
            }else{
                return element.nextSibling;
            }
    },
// 获取一个元素的上一个元素
    prev:function(element){
            if(element.previousSibling.nodeType===3){
                return element.previousSibling.previousSibling;
            }else{
                return element.previousSibling;
            }
    }
    


}
//element.get(nodes);
//element.children(element)






// 获取css样式兼容ie8-
// @param  {Element} ys [元素]
// @param  {String} sx [css属性]
// @return {String}     [返回css属性值]
function getCss(ys,sx){
    if (window.getComputedStyle){
        return  getComputedStyle(ys)[sx];
    }else if(ys.currentStyle){
        return  ys.currentStyle[sx];
    }else{
        return ys.style[sx];
    }
    

}
//getCss(box,'font-size');得到 16px;








// 事件绑定函数，支持冒泡捕获
// @param  {Node}     ele  [元素]
// @param  {String}   sj   [事件]
// @param  {Function} zxhs [执行函数]
// @param  {Boolean}  sfbh [是否捕获]
function sjbd(ele,sj,zxhs,sfbh){
    if (ele.addEventListener){
        ele.addEventListener(sj,zxhs,sfbh);
    }else if(ele.attachEvent){
        ele.attachEvent('on'+sj,zxhs);
    }else{
        ele['on'+sj] = zxhs;
    }
}
//bind(box,'click',function(){},true)







// 移除事件绑定函数，支持冒泡捕获
// @param  {Node}     ele  [元素]
// @param  {String}   sj   [事件]
// @param  {Function} zxhs [执行函数]
// @param  {Boolean}  sfbh [是否捕获]
function sjyc(ele,sj,zxhs,sfbh){
    if (ele.removeEventListener){
        ele.removeEventListener(sj,zxhs,sfbh);
    }else if(ele.detachEvent){
        ele.detachEvent('on'+sj,zxhs);
    }else{
        ele['on'+sj] = null;
    }
}
//bind(box,'click',function(){},true)









/*
    cookie操作
        * 增
        * 删
        * 查
        * 改
 */
var cookie = {

    
      // [读取cookie]
      // @param  {String} name [cookie名]
      // @return {String}      [返回name对应的cookie值]
    get:function(name){
            var cookies = document.cookie;
            var res = '';
            if(cookies.length){
                cookies = cookies.split('; ');//[]
                for(var i=0,len=cookies.length;i<len;i++){
                        // 拆分cookie名、cookie值
                        var arr = cookies.split('=');
                        if(arr[0] === name){
                            res = arr[1];
                        }
                }


            }

            return res;

        },
    
      // [添加cookie]
      // @param {String} name    [cookie名]
      // @param {String} val     [cookie值]
      // @param {[Date]} expires [有效期]
      // @param {[String]} path    [路径]
    set:function(name,val,expires,path){
        var str = name + '=' + val;
        if(expires){
            str += ';expires=' + expires.toUTCString();
        }
        if(path){
            str += ';path' + path;
        }
        document.cookie = str ;
    },

    /**
     * [删除cookie]
     * @param  {String} name [cookie名]
     */
    remove:function(name){
        var now = new Date();
        now.setDate(now.getDate()-10);
        document.cookie = name + '=null;expires=' + now.toUTCString();
        //简写
        //this.set(name,'null',now);
    }

}
// cookie.get('carlistabcdefg');//[{}]
// cookie.set('carlist',JSON.stingify(carlist),now);//[{}]
// cookie.remove('carlist');










function animate(ele,opt,callback){
    // opt= {left:100,top:200,fontSize:40}

    // 属性（动画）数量
    ele.timerLen = 0;

    // 遍历设置定时器（动画）
    for(var attr in opt){
        // 遍历过程设定动画数量
        ele.timerLen++;

        // 匿名函数传递attr
        (function(attr){
            var timername = attr + 'timer';
            var target = opt[attr];

            // 清除同名timer
            clearInterval(ele[timername]);

            ele[timername] = setInterval(function(){
                // 获取当前值
                var current = getCss(ele,attr);//100px,45deg,0.3

                // 提取单位
                var unit = current.match(/[a-z]+$/);//[px],[deg],null

                unit = unit ? unit[0] : '';

                // 提取值
                current = parseFloat(current);

                // 计算缓冲速度
                var speed = (target-current)/10;//-0.5,10,0.2

                // 避免速度变成0

                // 有单位
                speed = speed<0 ? Math.floor(speed) : Math.ceil(speed);

                if(attr === 'opacity'){
                    speed = speed<0 ? -0.02 : 0.02;
                }

                current += speed;

                // 当到达目标值时
                if(current === target || speed === 0){
                    clearInterval(ele[timername]);
                    current = target;

                    ele.timerLen--;

                    // 执行回到函数
                    // if(typeof callback === 'function'){
                    //  callback();
                    // }


                    // 动画完成后执行回掉函数
                    if(ele.timerLen === 0){
                        typeof callback === 'function' && callback();
                    }
                }
                ele.style[attr] = current + unit;
            },30);

        })(attr);
    }
}

















// [通过类名获取到元素节点，兼容ie8-]
// @param  {String} className [要获取的元素的类名'yangjing']
// @param  {element} ele [父元素]
// @return {Array}       [获取到的元素节点组成的数组]

function  getClassName(className,ele){
      if(document.getElementsByClassName){
          return (ele || document).getElementsByClassName(className);
      }else{
              var arr = [];
              var nodes = (ele || document).getElementsByTagName('*');
              var kong = '';
              for(var j = 0; j < nodes.length;j++){
                  kong = nodes[j];
                  var sx = nodes[j].className.split(' ');
                  for(var i = 0;i < sx.length;i++){
                      if(sx[i] == className){
                          arr.push(kong);
                          break;
                        }
                    }
                }
            return arr;
        }
}






/**
 * [数据类型判断]
 * @param  {All} data [数据类型]
 * @return {String}      [返回数据类型字符串]
 */
function  type(data){
           return Object.prototype.toString.call(data).slice(8,-1);
    
}

    
    
