import { Component } from '@angular/core';
import { SearchEngineComponent } from '../search-engine/search-engine.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchEngineComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
