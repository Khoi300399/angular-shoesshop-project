import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
})
export class BrandComponent {
  images: string[] = [
    '../../../assets/images/brand-1.webp',
    '../../../assets/images/brand-2.webp',
    '../../../assets/images/brand-3.webp',
    '../../../assets/images/brand-4.webp',
    '../../../assets/images/brand-5.webp',
  ];
  owlBrand: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    navSpeed: 600,
    dots: false,
    nav: false,
    animateIn: 'animate__animated animate__fadeIn',
    responsive: {
      0: { items: 2, margin: 20 },
      576: { items: 3, margin: 30 },
      768: {
        items: 4,
        margin: 40,
      },
      992: {
        items: 5,
        margin: 50,
      },
    },
  };
}
