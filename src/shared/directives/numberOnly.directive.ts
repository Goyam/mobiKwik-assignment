import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[NumberOnly]"
})

export class NumberOnlyDirective {

  /**
   * Regex String for Accepting Numbers Less than Two Decimal Places
   */
   regex = /[0-9]/;

   constructor(private _elRef: ElementRef) {}

   /**
   * Filters Input and accepts only Numbers
   * @param event
   */
  @HostListener('keydown', ['$event'])
  onKeydown(event) {
    if (
      !this.regex.test(event.key) &&
      !(
        event.ctrlKey ||
        (event.ctrlKey && event.keyCode === 86) ||
        event.keyCode === 8 ||
        event.keyCode === 46
      )
    ) {
      event.preventDefault();
    }
}
}
