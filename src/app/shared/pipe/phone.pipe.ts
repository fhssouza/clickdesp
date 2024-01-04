import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  // transform(tel: string, args?: any): any {
  //   var value = tel.toString().trim().replace(/^\+/, "");

  //   if (value.match(/[^0-9]/)) {
  //     return tel;
  //   }

  //   var country, city, number;

  //   switch (value.length) {
  //     case 10: // +1PPP####### -> C (PPP) ###-####
  //       country = 1;
  //       city = value.slice(0, 3);
  //       number = value.slice(3);
  //       break;

  //     case 11: // +CPPP####### -> CCC (PP) ###-####
  //       country = value[0];
  //       city = value.slice(1, 4);
  //       number = value.slice(4);
  //       break;

  //     case 12: // +CCCPP####### -> CCC (PP) ###-####
  //       country = value.slice(0, 3);
  //       city = value.slice(3, 5);
  //       number = value.slice(5);
  //       break;

  //     default:
  //       return tel;
  //   }

  //   if (country == 1) {
  //     country = "";
  //   }

  //   number = number.slice(0, 3) + "-" + number.slice(3);

  //   return (country + " (" + city + ") " + number).trim();
  // }

  transform(tel: string, args?: any): any {
    if (tel) {
      const value = tel.toString().replace(/\D/g, '');

      let foneFormatado = '';

      if (value.length > 12) {
        foneFormatado = value.replace(/(\d{2})?(\d{2})?(\d{5})?(\d{4})/, '+$1 ($2) $3-$4');

      } else if (value.length > 11) {
        foneFormatado = value.replace(/(\d{2})?(\d{2})?(\d{4})?(\d{4})/, '+$1 ($2) $3-$4');

      } else if (value.length > 10) {
        foneFormatado = value.replace(/(\d{2})?(\d{5})?(\d{4})/, '($1) $2-$3');

      } else if (value.length > 9) {
        foneFormatado = value.replace(/(\d{2})?(\d{4})?(\d{4})/, '($1) $2-$3');

      } else if (value.length > 5) {
        foneFormatado = value.replace(/^(\d{2})?(\d{4})?(\d{0,4})/, '($1) $2-$3');

      } else if (value.length > 1) {
        foneFormatado = value.replace(/^(\d{2})?(\d{0,5})/, '($1) $2');
      } else {
        if (tel !== '') { foneFormatado = value.replace(/^(\d*)/, '($1'); }
      }
      return foneFormatado;
    }
  }
}

