import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  urlTables = 'http://localhost:3000/api/tables';

  constructor(private httpClient: HttpClient) {

  }

  tokenAndIdCheck(id, token) {
    return this.httpClient.get(`${this.urlTables}/check/${id}/${token}`).toPromise();
  }
}
