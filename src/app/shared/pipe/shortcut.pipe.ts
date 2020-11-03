import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortcut', // tên sử dụng trong file html
})
export class ShortcutPipe implements PipeTransform {
  transform(value: string, limit = 30): string {
    return value.length > limit ? value.substr(0, limit) + '...' : value;
  }
}
