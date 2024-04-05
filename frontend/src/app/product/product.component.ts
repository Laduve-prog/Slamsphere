import { Component , Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddProduct } from '../shared/actions/cart-action';
import { Product } from '../shared/models/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input() product: Product= {
    id: 0,
    name: "plapla",
    brand: "plapla",
    price: 1,
    description: "aaa",
    imageUrl: "/lalal/lalal",
    category: "shooes",
    stock: 1,
    featured: true,
    active: true,
    rating: 0,
    size: ['S', 'M', 'L'],
  }

  constructor(private store: Store) {}

  addProduct(product : Product){
    this.store.dispatch(new AddProduct(product));
  }
}
