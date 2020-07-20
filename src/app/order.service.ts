import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  urlTables = 'http://localhost:3000/api/tables';


  constructor(private httpClient: HttpClient) { }

  changeStatus(id) {
    return this.httpClient.put(`${this.urlTables}/editState`, { id, status: 'Solicitud de pedido' }).toPromise();

  }
}
