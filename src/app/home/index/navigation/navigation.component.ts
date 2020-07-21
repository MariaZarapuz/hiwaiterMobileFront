import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { OrderService } from 'src/app/order.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  faShoppingCart = faShoppingCart;
  quantityTicket: number;


  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }

  sendQuantityandChangeStatus(id) {
    this.changeStatus(id);
    this.quantityTickets(id)
  }

  changeStatus(id) {
    this.quantityTicket = parseInt(prompt('¿Cuantas cuentas necesita la mesa?'));
    this.orderService.changeStatus(id);
  }

  quantityTickets(id) {
    this.orderService.quantityTickets(this.quantityTicket, id);
  }
}
