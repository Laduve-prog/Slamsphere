import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFormComponent } from './cardForm/cardForm.component';
import { CardService } from './card.service';
import { CardsListComponent } from './cards-list/cards-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CardFormComponent,
    CardsListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    CardService
  ],
  exports: [CardFormComponent, CardsListComponent]
})
export class CardsModule { }
