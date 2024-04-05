import { Select } from '@ngxs/store';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartState } from '../../shared/states/cart-state';
import { Observable } from 'rxjs';
import { CartProductComponent } from '../cart-product/cart-product.component';
import { ProductWrapper } from '../../shared/models/product-wrapper';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [CommonModule , CartProductComponent],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent {
  @Select(CartState.getCartProducts) declare cartProducts$: Observable<ProductWrapper[]>;
  @Select(CartState.totalBasketPrice) declare totalBasketPrice$: Observable<number>;
  @Select(CartState.numberOfProductsInCart) declare numberOfProductsInCart$ : Observable<number>; 
}
