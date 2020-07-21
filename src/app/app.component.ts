import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableService } from './table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hiwainterMobile';
  id: any;
  token: any;

  constructor(
    private tableService: TableService,
    private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      console.log(params)
      this.id = params.id;
      this.token = params.token;
      if (this.token !== undefined) {
        this.tokenAndIdCheck(this.id, this.token);
      }
    });

  }


  tokenAndIdCheck(id, token) {
    this.tableService.tokenAndIdCheck(id, token);
  }

}
