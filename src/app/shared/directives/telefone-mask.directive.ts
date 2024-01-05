import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTelefoneMask]'
})
export class TelefoneMaskDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInput(event: any) {
    const inputValue: string = event.target.value.replace(/\D/g, '');
    if (inputValue.length <= 10) {
      // Formata como (XX) XXXX-XXXX
      event.target.value = this.formatarTelefone(inputValue);
    } else {
      // Formata como (XX) XXXXX-XXXX
      event.target.value = this.formatarTelefone(inputValue);
    }
  }

  private formatarTelefone(numero: string): string {
    if (numero.length === 11) {
      return `(${numero.substring(0, 2)}) ${numero.substring(2, 7)}-${numero.substring(7)}`;
    } else if (numero.length === 10) {
      return `(${numero.substring(0, 2)}) ${numero.substring(2, 6)}-${numero.substring(6)}`;
    } else {
      return numero;
    }
  }

}
