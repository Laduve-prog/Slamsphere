import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ CommonModule , CartSummaryComponent ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(){}
}
