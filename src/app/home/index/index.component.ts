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
  compare: Object;

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
  async tokenAndIdCheck(id, token) {
    this.compare = await this.tableService.tokenAndIdCheck(id, token);
    console.log(this.compare)
  }

}
