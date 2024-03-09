import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Output() filterChange = new EventEmitter<{ brand: string; priceRange: { min: number; max: number }; sizes: string[]; rating: number }>();

  // UI logic properties
  availableBrands: string[] = ['Brand 1', 'Brand 2', 'Brand 3'];
  minPrice: number = 0;
  maxPrice: number = 1000;
  availableRatings: number[] = [1, 2, 3, 4, 5];

  // Filter selection properties
  selectedBrand: string = '';
  selectedPriceRange: { min: number; max: number } = { min: 0, max: 1000 };
  selectedSizes: string[] = [];
  selectedRating: number = 0;

  // Method to handle brand selection changes
  onBrandChange(brand: string) {
    this.selectedBrand = brand;
    this.emitFilterSelections(); // Emit updated selections
  }

  // Method to handle price range changes
  onPriceRangeChange(range: { min: number; max: number }) {
    this.selectedPriceRange = range;
    this.emitFilterSelections();
  }

  // Method to handle size selection changes
  onSizeChange(size: string, isChecked: boolean) {
    if (isChecked) {
      this.selectedSizes.push(size);
    } else {
      const index = this.selectedSizes.indexOf(size);
      if (index > -1) {
        this.selectedSizes.splice(index, 1);
      }
    }
    this.emitFilterSelections(); // Emit updated selections
  }

  // Method to handle rating selection changes
  onRatingChange(rating: number) {
    this.selectedRating = rating;
    this.emitFilterSelections(); // Emit updated selections
  }

  emitFilterSelections() {
    const selectedBrand = this.selectedBrand; // Access selected brand from filter component logic
    const selectedPriceRange = this.selectedPriceRange; // Access selected price range from filter component logic
    const selectedSizes = this.selectedSizes; // Access selected sizes from filter component logic
    const selectedRating = this.selectedRating; // Access selected rating from filter component logic

    this.filterChange.emit({
      brand: selectedBrand,
      priceRange: selectedPriceRange,
      sizes: selectedSizes,
      rating: selectedRating
    });
  }
}
