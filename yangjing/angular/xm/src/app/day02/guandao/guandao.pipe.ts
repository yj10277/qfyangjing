//管道
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'guandao'
})
export class GuandaoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
