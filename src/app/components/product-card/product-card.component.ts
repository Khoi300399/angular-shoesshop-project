import { Component, Input } from '@angular/core';
import { Product } from '../../../global/types';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() prod!: Product;
  // price: number | any = this.prod?.price + 100;

  sizes: number[] = [36, 37, 38, 39, 40, 41, 42];
  stars: number[] = [1, 2, 3, 4, 5];
  rating: number = 4;
}
