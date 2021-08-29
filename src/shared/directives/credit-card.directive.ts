import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[CreditCardNumber]',
})
export class CreditCardDirective {


  constructor(private _control: NgControl) {}

  /**
   * Adds Spaces after every four numbers
   * @param event
   */
  @HostListener('keydown', ['$event'])
  onKeydown(event) {
    let element = event.target.value;
    if (event.keyCode === 8) {
      if (element.length % 5 === 1) {
        this._control.control.setValue(element.substr(0, element.length - 1));
      }
    } else if (element.length % 5 === 4 && element.length < 19) {
      this._control.control.setValue(element + ' ');
    }
  }

}
