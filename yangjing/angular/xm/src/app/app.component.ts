import { Component } from '@angular/core';
import { FwService } from './day02/fw/fw.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
              //dic = new FwService();
              title = 'app';
              constructor(private dic:FwService){}
}
