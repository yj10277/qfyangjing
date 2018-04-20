import { Component, OnInit ,OnChanges} from '@angular/core';
import {Http} from '@angular/http'
import {HttpclientService} from '../../ajax/httpclient.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpclientService){}
      
  ngOnInit() {
      
      $('.btn-primary')[0].onclick = ()=>{
            //console.log($('.yhm').val(),$('.mm').val())
            this.http.post("http://10.3.136.235:9090/checkLogin",{username:$('.yhm').val(),password:$('.mm').val()}).then((res)=>{
                            console.log(res);
                            if(res.status){
                              //let storage = window.localStorage
                              //storage.a = $('.yhm').val();
                              sessionStorage.setItem('a',$('.yhm').val())
                              
                              location.href = 'http://localhost:4200/index'
                            }else{
                              alert('登录信息错误')
                            }
            })
            
            
      }
      
      
  }

      
  


}
