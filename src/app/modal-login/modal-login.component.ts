import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
declare var $;

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {



  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }



}


