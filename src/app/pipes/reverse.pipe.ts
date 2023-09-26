import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transformOld(value: any, ...args: any[]): any {
    return null;
  }

  transform(ch:string): any {
    let newch=""

    for (let i = 0; i <ch.length; i++) {
      
      newch=ch[i] + newch
    }
    
    return newch;
  }

}
