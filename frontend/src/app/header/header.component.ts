import { Select } from '@ngxs/store';
import { CartState } from '../cart/cart.state';
import { Component } from '@angular/core';
import { SearchEngineComponent } from '../search-engine/search-engine.component';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchEngineComponent , CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Select(CartState.numberOfProductsInCart) declare numberOfProductsInCart$: Observable<number>;
}
