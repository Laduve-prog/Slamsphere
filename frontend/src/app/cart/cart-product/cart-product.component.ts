import { Component, OnInit ,input } from '@angular/core';
import { ProductWrapper } from '../../shared/models/product-wrapper';
import { Store } from '@ngxs/store';
import { RemoveProduct } from '../../shared/actions/cart-action';

@Component({
  selector: 'app-cart-product',
  standalone: true,
  imports: [],
  templateUrl: './cart-product.component.html',
  styleUrl: './cart-product.component.css'
})

export class CartProductComponent implements OnInit {

  product = input.required<ProductWrapper>();

  constructor(private store : Store){}

  ngOnInit(): void {}

  RemoveProduct(){
    this.store.dispatch(new RemoveProduct(this.product().product.id))
  }
}
