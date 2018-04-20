//指令
import { Directive,ElementRef,HostListener,HostBinding,Input } from '@angular/core';

@Directive({
  selector: '[hl]'
})                  
export class HighlightDirective {
            ////添加指令后获取自定义属性
            @Input() a1:string;
            @Input() a2:string;
            //添加指令后执行的函数
            constructor(el:ElementRef) { 
                  console.log(el,6666);
                  el.nativeElement.style.background = 'red';
            }
            //添加指令后执行的事件函数
            @HostListener('click',['$event']) aa(e){
                  console.log(e,777777);
                  console.log(this.a1,this.a2)
            }
            //添加指令后执行的添加自定义属性
            @HostBinding('attr.age') age = 28;

}
