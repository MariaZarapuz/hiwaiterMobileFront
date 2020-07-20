import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  urlMenu = 'http://localhost:3000/api/menu';


  constructor(private httpClient: HttpClient) { }

  getMenu() {
    return this.httpClient.get(`${this.urlMenu}/`).toPromise();
  }
}
