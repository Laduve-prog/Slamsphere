import { Component } from '@angular/core';
import { RouterOutlet , RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardsModule } from './cards/cards.module';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { CatalogComponent } from './catalog/catalog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , HeaderComponent, FooterComponent, SignupComponent , CommonModule , CatalogComponent , CardsModule , RouterLink], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SlamSphere';
}
