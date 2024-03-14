import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cards } from '../models/cards';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private cartes: Cards[] = [];

  constructor() { }

  addCard(carte: Cards): void {
    this.cartes.push(carte);
  }

  getCards(): Observable<Cards[]> {
    return of(this.cartes);
  }
}