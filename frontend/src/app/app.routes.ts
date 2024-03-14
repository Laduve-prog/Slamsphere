import { Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { SignupComponent } from './signup/signup.component';
import { HeroComponent } from './hero/hero.component';
import { CardsComponent } from './cards/cards.component';

export const routes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: HeroComponent },
  { path: 'cb', component: CardsComponent}
];
