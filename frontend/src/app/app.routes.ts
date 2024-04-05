import { Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { SignupComponent } from './signup/signup.component';
import { HeroComponent } from './hero/hero.component';
import { CardsComponent } from './cards/cards.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  { path: 'catalog', loadComponent: () =>import('./catalog/catalog.component').then((catalog)=> catalog.CatalogComponent),},
  { path: 'signup', component: SignupComponent },
  { path: '', component: HeroComponent },
  { path: 'cb', component: CardsComponent},
  { path: 'cart', component: CartComponent}
];
