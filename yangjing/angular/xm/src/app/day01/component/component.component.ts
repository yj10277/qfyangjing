import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

    dataset:Array<any> = [
            {name:'yang',age:28},
            {name:'jing',age:30}
    ]
    ngOnInit(){console.log(88888)}
   
    
}
