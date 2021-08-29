import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:"cardNumber"
})

export class CardNumberPipe implements PipeTransform {

  regex = /[0-9]/;

  transform(value: any, ...args: any[]) {
    let cardNumber = "";
    for(let i=0; i<value.length; i++){
      if(i > 4 && i < 15 && this.regex.test(value[i])) {
        cardNumber += "X";
      }else {
        cardNumber += value[i];
      }
    }
    return cardNumber;
  }

}
