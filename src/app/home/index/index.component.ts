import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableService } from 'src/app/table.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
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
