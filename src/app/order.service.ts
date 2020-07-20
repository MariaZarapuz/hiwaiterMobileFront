import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  urlTables = 'http://localhost:3000/api/tables';
  urlTicket = 'http://localhost:3000/api/tickets';



  constructor(private httpClient: HttpClient) { }

  changeStatus(id) {
    return this.httpClient.put(`${this.urlTables}/editState`, { id, status: 'Solicitud de pedido' }).toPromise();

  }

  quantityTickets(quantity, id) {
    return this.httpClient.post(`${this.urlTicket}/add`, { quantity, id }).toPromise();
  }
}
