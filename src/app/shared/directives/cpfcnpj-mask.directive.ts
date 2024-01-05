import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCpfcnpjMask]'
})
export class CpfcnpjMaskDirective {

  constructor(public el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: any) {
    const inputValue: string = event.target.value.replace(/\D/g, '');

    if (inputValue.length <= 11) {
      event.target.value = this.format(inputValue);;
    } else{
      event.target.value = this.format(inputValue);
    }
  }

  private format(numero: string): string {
    if (numero.length === 11) {
      return `${numero.substring(0, 3)}.${numero.substring(3, 6)}.${numero.substring(6,9)}-${numero.substring(9,11)}`;
    } else if (numero.length === 14) {
      return `${numero.substring(0, 2)}.${numero.substring(2, 5)}.${numero.substring(5,8)}/${numero.substring(8,12)}-${numero.substring(12,14)}`;
    } else {
      return numero;
    }
  }

}
