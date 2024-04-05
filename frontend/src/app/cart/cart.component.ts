import { Select } from '@ngxs/store';
import { Component } from '@angular/core';
import { Product } from '../shared/models/product';
import { CommonModule } from '@angular/common';
import { CartState } from '../shared/states/cart-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  @Select(CartState.getCartProducts) declare cartProducts$: Observable<Product[]>;
  @Select(CartState.totalBasketPrice) declare totalBasketPrice$: Observable<number>;
  @Select(CartState.numberOfProductsInCart) declare numberOfProductsInCart$ : Observable<number>; 

  constructor(){}
}
