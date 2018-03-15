//第一种方法
// function a(){
//     console.log('function a');
// }
// function b(){
//     console.log('function b');
// }

// module.exports = {a,b};


//第二种方法
module.exports = {  a:function a(){
                                console.log('function a');},
                    b:function b(){
                                console.log('function b');}
                 };