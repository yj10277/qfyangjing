import { Component, OnInit,OnChanges } from '@angular/core';
import {Http} from '@angular/http'
import {FwService} from '../../fw/fw.service'

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit{
            //生成列表实现控制显示列
           
            dataset:Array<any>;
            lie:Array<string> = [];
            fixedTimezone = '2015-06-15T09:03:01+0900';
            constructor(private http:Http,private lan:FwService){}
            ngOnInit(){
                  this.http.get('assets/common.json').subscribe((res)=>{
                        console.log(res.json())
                        this.dataset = res.json().data.slice(0,10);
                  })
                  //请求配置文件
                  this.http.get('http://localhost:4200/assets/student/student.txt').subscribe((res)=>{
                        console.log(res.json());
                        this.lie = res.json().cols.split(',');
                  })
            }

            getkeys(a){
                  return a ? Object.keys(a):[];
            }

      

}
