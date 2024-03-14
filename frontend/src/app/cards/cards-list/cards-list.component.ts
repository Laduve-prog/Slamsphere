import { Component , OnInit} from '@angular/core';
import { Cards } from '../../models/cards';
import { CardService } from '../card.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.css'
})
export class CardsListComponent implements OnInit {
  cards: Cards[] = [];

  constructor(private cardsService: CardService) {}

  ngOnInit(): void {
    this.getCards();
  }

  getCards(): void {
    this.cardsService.getCards()
      .subscribe(cards => this.cards = cards);
  }
}
