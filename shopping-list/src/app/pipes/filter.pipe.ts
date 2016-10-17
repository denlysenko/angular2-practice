import { Pipe, PipeTransform } from "@angular/core";
import { Item } from "../models/item";
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(value: Item[], ...args: string[]): any {
    if (!value.length) {
      return value;
    }

    let result = [];

    for (let item of value) {
      const re = new RegExp('^.*' + args[0] + '.*$', 'i');
      if (item.name.match(re)) {
        result.push(item);
      }
    }
    return result;
  }
}
