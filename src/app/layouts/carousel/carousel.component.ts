import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  products: any;
  constructor(private app: AppService) {}
  ngOnInit(): void {
    this.app.products().subscribe((result: any) => {
      this.products = result.content.slice(6, 10);
      console.log(this.products);
    });
  }
  owlCarousel: OwlOptions = {
    items: 1,
    margin: 10,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    nav: false,
    navSpeed: 600,
    navText: [
      '<span class="btn-prev"><i class="bi bi-arrow-left-short"></i></span>',
      '<span class="btn-next"><i class="bi bi-arrow-right-short"></i></span>',
    ],
    animateIn: 'animate__animated animate__fadeIn',
    responsive: {
      767.98: {
        margin: 20,
        nav: true,
      },
      991.98: {
        margin: 30,
        dots: true,
        nav: true,
      },
    },
  };
}
