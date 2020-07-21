import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  id: any;
  token: any;

  constructor(private activatedRouter: ActivatedRoute) { }

  ngOnInit() {

  }

}
