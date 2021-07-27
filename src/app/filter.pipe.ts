import { Pipe, PipeTransform } from '@angular/core';
import { IProject } from './menu/menu.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(product: IProject[], searchvalue:string): IProject[] {
    if (!searchvalue){
      return product

    }
   else  {
      return product.filter( prod => `${prod.name} `.toLowerCase().includes(searchvalue.toLowerCase()))
    }
  }

}
