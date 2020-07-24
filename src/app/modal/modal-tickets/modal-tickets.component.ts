import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from 'src/app/order.service';
import { FormGroup, FormControl } from '@angular/forms';

declare var $;

@Component({
  selector: 'app-modal-tickets',
  templateUrl: './modal-tickets.component.html',
  styleUrls: ['./modal-tickets.component.css']
})
export class ModalTicketsComponent implements OnInit {
  @Input() id;

  @Input() tickets;
  form: FormGroup;
  quantityTicket: any;

  constructor(private orderService: OrderService) {
    this.form = new FormGroup({
      numberTickets: new FormControl(''),
      input0: new FormControl(''),
      input1: new FormControl(''),
      input2: new FormControl(''),
      input3: new FormControl(''),
      input4: new FormControl(''),

    });
  }

  ngOnInit(): void {
    this.orderService.getTicketsObservable().subscribe((res => {
      this.tickets = res;
    }))
  }

  howManyTickets() {
    this.quantityTicket = Array(this.form.value.numberTickets).fill(1);
    console.log(this.quantityTicket)
  }

  generateArrayName() {
    const array = [];
    const form = this.form.value;
    for (const key in form) {
      if (key !== 'numberTickets' && form[key] !== '') {
        array.push(form[key]);
      }
    }
    return array;
  }

  async sendQuantityandChangeStatus() {
    $('#exampleModalTickets').modal('hide');
    await this.quantityTickets();
    this.getTickets();
  }

  async quantityTickets() {
    await this.orderService.quantityTickets(this.form.value.numberTickets, this.id, this.generateArrayName());



  }

  async getTickets() {
    this.tickets = await this.orderService.getTickets(this.id);
    this.orderService.postTickets(this.tickets);
  }
}
