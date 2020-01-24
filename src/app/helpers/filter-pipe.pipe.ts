import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipePipe implements PipeTransform {

  transform(items: any[], searchByPrice: number): any[] {
    if(!items) return [];
    if(!searchByPrice) return items;
    return items.filter( it => {return it.price <= searchByPrice});
  }

}
