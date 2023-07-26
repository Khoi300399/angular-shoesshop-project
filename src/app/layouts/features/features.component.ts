import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Product } from '../../../global/types';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
  products: Product[] = [];
  constructor(private app: AppService) {}
  ngOnInit(): void {
    this.app.products().subscribe((result: any) => {
      this.products = result.content.filter((prod: Product) => prod.feature);
    });
  }
}
