import { Component } from '@angular/core';
import { CatalogComponent } from '../catalog/catalog.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CatalogComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
