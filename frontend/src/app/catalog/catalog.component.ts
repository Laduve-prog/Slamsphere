import { Component } from '@angular/core';
import { Observable, Subject, pipe } from 'rxjs';
import { ProductService } from '../product.service';
import { Product } from '../models/product';
import { ProductComponent } from "../product/product.component";
import { FilterComponent } from "../filter/filter.component";
import { AsyncPipe, CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [ ProductComponent, FilterComponent , CommonModule , AsyncPipe ],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})

export class CatalogComponent {
  products: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  ngOnInit() {
    this.products = this.productService.term.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(term => this.productService.getProducts()
      )
    );
  }
}
