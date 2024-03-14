import { Component } from '@angular/core';
import { CardsModule } from './cards.module';
import { CardFormComponent } from './cardForm/cardForm.component';
import { CardsListComponent } from './cards-list/cards-list.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CardsModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

}
