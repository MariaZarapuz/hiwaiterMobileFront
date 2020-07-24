import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { OrderService } from 'src/app/order.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() token;
  @Input() id;

  faShoppingCart = faShoppingCart;
  quantityTicket: number;
  tickets: any;



  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.getTickets();
    this.orderService.getTicketsObservable().subscribe((res => this.tickets = res))

  }

  async getTickets() {
    this.tickets = await this.orderService.getTickets(this.id);
    this.orderService.postTickets(this.tickets);
  }

}
