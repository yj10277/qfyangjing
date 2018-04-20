import { Component, OnInit } from '@angular/core';
import {HttpclientService} from '../../../ajax/httpclient.service'

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {

  constructor(private http:HttpclientService) { }
  getkeys(a){return Object.keys(a)};
  ngOnInit() {
            
            
      this.http.post('http://10.3.136.235:9090/product').then((res)=>{
                  //console.log(res.data);
                  $('.table2 tbody')[0].innerHTML = res.data.map((item,idx)=>{
                              
                              
                              return `<tr data-id='${item.id}'>
                                          <td>${item.id}</td>
                                          <td>${item.name}</td>
                                          <td>${item.type}</td>
                                          <td>${item.smalltype}</td>
                                          <td>${item.size}</td>
                                          <td>${item.price}</td>
                                         
                                          <td><button data-id='${idx}' class='btn btn-info'>编辑</button><button class='btn btn-danger'>删除</button></td>
                                      </tr>`
                  }).join('')
                  $('.goods .foot .table2 tbody tr td:nth-last-child(1)').each(function(){
                        $(this).css('width','150px')
                  })
                  //点击编辑
                  $('.btn-info').each(function(){
                        $(this).on('click',function(){

                              $('.bianji').show();$('.zzc').show();
                              
                              $('.bj0 input')[0].value = this.parentNode.parentNode.children[0].innerText;
                              $('.bj2 input')[0].value = this.parentNode.parentNode.children[1].innerText;
                              $('.bj3 input')[0].value = this.parentNode.parentNode.children[2].innerText;
                              $('.bj4 input')[0].value = this.parentNode.parentNode.children[3].innerText;
                              $('.bj5 input')[0].value = this.parentNode.parentNode.children[4].innerText;
                              $('.bj6 input')[0].value = this.parentNode.parentNode.children[5].innerText;

                        })
                  })
                  //点击删除
                  $('.btn-danger').each(function(){
                        $(this).on('click',function(){
                                if(confirm('你确认要删除这条数据吗？，请谨慎操作！')){
                                    $.post('http://10.3.136.235:9090/delcProduct',{id:this.parentNode.parentNode.children[0].innerText}).then((res)=>{
                                          //console.log(res);
                                          if(res.status){alert('删除成功');location.reload();
                                    })
                                }
                        })
                  })
      
      })
            $('.bianji').hide();
            $('.guanbi').on('click',function(){$('.bianji').hide();$('.zzc').hide()})
            //确认编辑
            $('.bj7 button')[0].onclick = ()=>{
                if(confirm('你确定要保存修改吗？')){
                    this.http.post('http://10.3.136.235:9090/updateProduct',{id:$('.bj0 input')[0].value,name:$('.bj2 input')[0].value,type:$('.bj3 input')[0].value,smalltype:$('.bj4 input')[0].value,size:$('.bj5 input')[0].value,price:$('.bj6 input')[0].value}).then((res)=>{
                                //console.log(res)
                                if(res.status){alert('编辑成功');location.reload();}
                    });
                }    
                    
            }
            //添加商品
            $('.head .btn1')[0].onclick = ()=>{
                this.http.post('http://10.3.136.235:9090/addProduct',{id:$('#in1').val(),name:$('#in2').val(),price:$('#in3').val(),type:$('#in4').val(),gender:$('#in5').val(),sales:$('#in6').val(),color:$('#in7').val(),size:$('#in8').val(),newest:$('#in9').val(),images:$('#in10').val(),cut:$('#in11').val(),smalltype:$('#in12').val(),hot:$('#in13').val()}).then((res,err)=>{
                      //console.log(res,err)
                      if(res.status){alert('商品添加成功');//location.reload();
                              this.http.post('http://10.3.136.235:9090/product').then((res)=>{
                                    //console.log(res.data);
                                    $('.table2 tbody')[0].innerHTML = res.data.map((item,idx)=>{
                                                
                                                
                                                return `<tr data-id='${item.id}'>
                                                            <td>${item.id}</td>
                                                            <td>${item.name}</td>
                                                            <td>${item.type}</td>
                                                            <td>${item.smalltype}</td>
                                                            <td>${item.size}</td>
                                                            <td>${item.price}</td>
                                                           
                                                            <td style='width:150px'><button data-id='${idx}' class='btn btn-info'>编辑</button><button class='btn btn-danger'>删除</button></td>
                                                        </tr>`
                                    }).join('')
                              })
                      }
                })
            }
            //搜索商品
            $('.head .sous')[0].oninput = ()=>{
                $('.fy span').each(function(){$(this).css('background','')});
                $('.fy span').eq(1).css('background','pink')
                this.http.post('http://10.3.136.235:9090/fuzzySearchPro',{name:$('.sous').val()}).then((res,err)=>{
                      console.log(res.result)
                      $('.foot tbody')[0].innerHTML = res.result.map((item,idx)=>{
                                return `<tr data-id='${item.id}'>
                                            <td>${item.id}</td>
                                            <td>${item.name}</td>
                                            <td>${item.type}</td>
                                            <td>${item.smalltype}</td>
                                            <td>${item.size}</td>
                                            <td>${item.price}</td>
                                           
                                            <td style='width:150px'><button data-id='${idx}' class='btn btn-info'>编辑</button><button class='btn btn-danger'>删除</button></td>
                                        </tr>`
                      }).join('')
                      //点击编辑
                      $('.btn-info').each(function(){
                            $(this).on('click',function(){

                                  $('.bianji').show();$('.zzc').show();
                                  
                                  $('.bj0 input')[0].value = this.parentNode.parentNode.children[0].innerText;
                                  $('.bj2 input')[0].value = this.parentNode.parentNode.children[1].innerText;
                                  $('.bj3 input')[0].value = this.parentNode.parentNode.children[2].innerText;
                                  $('.bj4 input')[0].value = this.parentNode.parentNode.children[3].innerText;
                                  $('.bj5 input')[0].value = this.parentNode.parentNode.children[4].innerText;
                                  $('.bj6 input')[0].value = this.parentNode.parentNode.children[5].innerText;

                            })
                      }) 
                      
                })
            }
            $('.fy span').eq(0).css('background','pink')
            //分页
            $('.fy span').each(function(){
              this.onclick = function(){
                  $(this).css('background','pink').siblings().css('background','#48171f1a');
                  $.post('http://10.3.136.235:9090/paging',{page:$(this).text(),pagenum:20}).then((res)=>{
                    console.log(res)
                    $('.foot tbody')[0].innerHTML = res.result.map((item,idx)=>{
                              return `<tr data-id='${item.id}'>
                                          <td>${item.id}</td>
                                          <td>${item.name}</td>
                                          <td>${item.type}</td>
                                          <td>${item.smalltype}</td>
                                          <td>${item.size}</td>
                                          <td>${item.price}</td>
                                         
                                          <td style='width:150px'><button data-id='${idx}' class='btn btn-info'>编辑</button><button class='btn btn-danger'>删除</button></td>
                                      </tr>`
                    }).join('')
                    //点击编辑
                    $('.btn-info').each(function(){
                          $(this).on('click',function(){

                              $('.bianji').show();$('.zzc').show();
                              
                              $('.bj0 input')[0].value = this.parentNode.parentNode.children[0].innerText;
                              $('.bj2 input')[0].value = this.parentNode.parentNode.children[1].innerText;
                              $('.bj3 input')[0].value = this.parentNode.parentNode.children[2].innerText;
                              $('.bj4 input')[0].value = this.parentNode.parentNode.children[3].innerText;
                              $('.bj5 input')[0].value = this.parentNode.parentNode.children[4].innerText;
                              $('.bj6 input')[0].value = this.parentNode.parentNode.children[5].innerText;

                          })
                    }) 


              })
            })
            //点击全部
            $('.fy span')[0].addEventListener('click',function(){
                    
                    $.post('http://10.3.136.235:9090/product').then((res)=>{
                          console.log(res,99999)
                          $('.foot tbody')[0].innerHTML = res.data.map((item)=>{
                                    return `<tr data-id='${item.id}'>
                                                <td>${item.id}</td>
                                                <td>${item.name}</td>
                                                <td>${item.type}</td>
                                                <td>${item.smalltype}</td>
                                                <td>${item.size}</td>
                                                <td>${item.price}</td>
                                               
                                                <td style='width:150px'><button class='btn btn-info'>编辑</button><button class='btn btn-danger'>删除</button></td>
                                            </tr>`
                          }).join('')
                          //点击编辑
                          $('.btn-info').each(function(){
                                $(this).on('click',function(){

                                      $('.bianji').show();$('.zzc').show();
                                      
                                      $('.bj0 input')[0].value = this.parentNode.parentNode.children[0].innerText;
                                      $('.bj2 input')[0].value = this.parentNode.parentNode.children[1].innerText;
                                      $('.bj3 input')[0].value = this.parentNode.parentNode.children[2].innerText;
                                      $('.bj4 input')[0].value = this.parentNode.parentNode.children[3].innerText;
                                      $('.bj5 input')[0].value = this.parentNode.parentNode.children[4].innerText;
                                      $('.bj6 input')[0].value = this.parentNode.parentNode.children[5].innerText;

                                })
                          }) 
                    })
            })
            //点击搜索
            $('.fy span')[1].addEventListener('click',function(){alert('请在搜索框输入内容');$('.sous').focus();})
            $('.sous')[0].addEventListener('click',function(){$('.fy span').eq(1).css('background','pink').siblings().css('background','')})
    

  }
  

}


