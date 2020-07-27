import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/order.service';
declare var $;

@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {

  @Input() table;
  @Input() token;
  @Input() tickets;
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
    this.getTicketsObservable()
  }

  getProduct() {
    this.orderservice.getProduct().subscribe(arg => this.item = arg);
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

  getTicketsObservable() {
    this.orderservice.getTicketsObservable().subscribe(arg => {
      this.tickets = arg;
    });
  }


}
