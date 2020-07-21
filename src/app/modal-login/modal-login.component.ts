import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';
declare var $;

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {

  @Input() table;
  item: any;
  number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  listTicket: any;
  form: FormGroup;



  constructor(
    private orderservice: OrderService,
    private router: Router) {
    this.form = new FormGroup({
      note: new FormControl(''),
      quantity: new FormControl(''),
      ticket: new FormControl('')

    });
  }

  ngOnInit(): void {

    this.getProduct();
    console.log(this.table)
    if (this.table) {
      this.getTickets();
    }

  }

  getProduct() {
    this.orderservice.getProduct().subscribe(arg => this.item = arg);
  }

  async getTickets() {
    this.listTicket = await this.orderservice.getTickets(this.table);
  }

  pushOrder() {
    console.log(this.form.value, this.item.id, this.item.category)
    const order = {
      description: this.form.value.note,
      quantity: this.form.value.quantity,
      ticket: this.form.value.ticket,
      fk: this.item.id,
      category: this.item.category

    };
    this.orderservice.pushOrder(order);
    $('[data-dismiss = modal]').trigger({ type: 'click' });
    this.form.reset();
  }



}


