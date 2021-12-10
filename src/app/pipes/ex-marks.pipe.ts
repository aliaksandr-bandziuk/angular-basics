import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exMarks'
})
export class ExMarksPipe implements PipeTransform {

  // этот пайп удаляет пробелы и добавляет восклицательные знаки в конце
  transform(str: string): string {
    return `${str.trim()}!!!!`
  }

}
