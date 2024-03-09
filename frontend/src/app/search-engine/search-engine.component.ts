import { Component  , OnInit} from '@angular/core';
import { Subject } from 'rxjs';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-engine',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-engine.component.html',
  styleUrl: './search-engine.component.css'
})

export class SearchEngineComponent {
  searchTerm: string = '';
  searchTerms = new Subject<string>();

  constructor(private productService: ProductService) {}

  onSearch(term: string) {
    console.log("Search triggered! Emitted term:", term);
    this.productService.setSearchTerm({name : term });
  }
}
