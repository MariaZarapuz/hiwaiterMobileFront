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

  private item$ = new Subject<null>();
  tickets: any;
  private tickets$ = new Subject<any>();


  constructor(private httpClient: HttpClient) { }

  changeStatus(id) {
    return this.httpClient.put(`${this.urlTables}/editState`, { id, status: 'ocupada' }).toPromise();

  }

  quantityTickets(quantity, id, arrayName) {
    console.log(id, arrayName, quantity)
    return this.httpClient.post(`${this.urlTicket}/add`, { quantity, id, arrayName }).toPromise();
  }

  getProduct() {
    return this.item$.asObservable();
  }

  postProduct(product) {
    this.item$.next(product)
    this.product = product;
  }

  getTickets(table) {
    return this.httpClient.get(`${this.urlTicket}/table/${table}`).toPromise();
  }

  pushOrder(order) {
    this.arrayOrder.push(order);
  }

  sendOrder() {
    this.httpClient.post(`${this.urlOrder}/add`, { order: this.arrayOrder }).toPromise();
  }

  getTicketsObservable() {
    return this.tickets$.asObservable();
  }
  postTickets(tickets) {
    this.tickets$.next(tickets)
    this.tickets = tickets;
  }
}
