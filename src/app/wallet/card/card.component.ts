import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cardDetails } from 'src/shared/models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardDetails: cardDetails;
  @Output() removedCard:EventEmitter<cardDetails> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Method to remove selected Card
   */
  removeCard() {
    this.removedCard.emit(this.cardDetails);
  }

}
