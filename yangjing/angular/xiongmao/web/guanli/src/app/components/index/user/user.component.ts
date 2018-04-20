import { Component, OnInit } from '@angular/core';
import {HttpclientService} from '../../../ajax/httpclient.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private http:HttpclientService) { }

  ngOnInit() {
            this.http.post('http://10.3.136.235:9090/getUsers').then((res)=>{
                  console.log(res.data);
                  $('.user table tbody')[0].innerHTML = res.data.map((item)=>{
                              
                              
                              return `<tr data-id='${item.id}'>
                                          <td>${item.username}</td>
                                          <td>${item.password}</td>
                                         
                                         
                                          <td><button class='btn btn-info'>编辑</button><button class='btn btn-danger'>删除</button></td>
                                      </tr>`
                  }).join('')
            })
  }

}
