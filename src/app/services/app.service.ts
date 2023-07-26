import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl = 'https://shop.cyberlearn.vn/api';
@Injectable({ providedIn: 'root' })
export class AppService {
  constructor(private http: HttpClient) {}
  products() {
    return this.http.get(`${baseUrl}/Product`);
  }
}
