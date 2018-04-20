import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';
import {Hero} from '../../utils/hero'
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent  {
        //接受传递过来的动态属性
        @Input() hero:Hero;
         //接受传递过来的自定义事件
        @Output() aa = new EventEmitter<number>();
        //执行单机事件
        Child(n){
            //执行传递过来的自定义事件
            this.aa.emit(n);
        }

}
