import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) {
          //let storage = window.localStorage;
          //if(!storage.a){
              //location.href = 'http://localhost:4200/login';
          //}
          if(!sessionStorage.getItem('a')){
              location.href = 'http://localhost:4200/login';
          }  
   }

  ngOnInit() {
          $('.goods').addClass('ys')
          $('.nav').on('click','li',function(){
              $(this).addClass('ys').siblings().removeClass('ys')
          })
          //let storage = window.localStorage;
          $('.header h2 span')[0].innerText = sessionStorage.getItem('a')//storage.a;
          $('.header h2 span')[1].onclick = ()=>{
                  //storage.removeItem('a');
                  sessionStorage.clear();
                  location.href = 'http://localhost:4200/login';
          }
          
                  
          
          $('.icon-fanhuidingbu')[0].onclick = function(){
          
              $('html,body,.container').animate({scrollTop:0}, 500);
          }
          $('.container')[0].onscroll = function(){
                  //console.log(this.scrollTop)
                  if(this.scrollTop >= 200){
                     $('.head')[0].style.position = 'fixed';
                     $('.head')[0].style.left = '200px';
                     $('.head')[0].style.top = '48px';
                    

                  }else if(this.scrollTop <= 185){
                     $('.head')[0].style.position = '';
                  }
          }

  }
  goods(){
            this.router.navigate(['/index/goods'])
  }
  user(){
            this.router.navigate(['/index/user'])
  }

}
