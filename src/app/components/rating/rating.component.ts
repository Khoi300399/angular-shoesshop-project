import { Component } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent {
  rating: number = 0;
  hoverRating: number = 0;
  stars: number[] = [1, 2, 3, 4, 5];
  onRate(index: number) {
    this.rating = index + 1;
  }
  onHover(index: number) {
    this.hoverRating = index + 1;
  }

  onMouseLeave() {
    this.hoverRating = 0;
  }
}
