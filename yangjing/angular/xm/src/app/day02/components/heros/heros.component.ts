import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,ParamMap} from '@angular/router'
import {Hero} from '../../utils/hero'
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit{
      currentHero:Hero;
      //根据引进来的文件定义对象属性，属性必须一样否则报错
      Heros:Hero[] = [
            {id:13,name:'jing',age:30},
            {id:14,name:'yang',age:29},
            {id:15,name:'yj',age:19},
          
      ]
      //点击事件
      select(item:Hero){
            this.currentHero = item;
      }
      //自定义事件
      pe(a){
            console.log(a)
      }

      get(arg){
            console.log(arg)
      }
      constructor(private route:ActivatedRoute){}
      //接收参数
      ngOnInit(){
          this.route.params.subscribe((res)=>{
              console.log(res)
          })
          //单个接收
          console.log(this.route.snapshot.paramMap.get('name'))
      }

}
