import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  arrayOrder = [];

  urlTables = 'http://localhost:3000/api/tables';
  urlTicket = 'http://localhost:3000/api/tickets';
  urlOrder = 'http://localhost:3000/api/orders';

  product: any;

  private item$ = new Subject<any>();


  constructor(private httpClient: HttpClient) { }

  changeStatus(id) {
    return this.httpClient.put(`${this.urlTables}/editState`, { id, status: 'Solicitud de pedido' }).toPromise();

  }

  quantityTickets(quantity, id) {
    return this.httpClient.post(`${this.urlTicket}/add`, { quantity, id }).toPromise();
  }

  getProduct() {
    return this.item$.asObservable();
  }

  postProduct(product) {
    console.log(product)
    this.item$.next(product)
    this.product = product;
  }

  getTickets(table) {
    return this.httpClient.get(`${this.urlTicket}/table/${table}`).toPromise();
  }

  pushOrder(order) {
    this.arrayOrder.push(order);
    console.log(this.arrayOrder)
  }

  sendOrder() {
    this.httpClient.post(`${this.urlOrder}/add`, { order: this.arrayOrder }).toPromise();
  }
}
