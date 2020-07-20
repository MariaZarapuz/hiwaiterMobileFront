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

  changeStatus(id) {
    this.quantityTicket = parseInt(prompt('¿Cuantas cuentas necesita la mesa?'));
    console.log(this.quantityTicket);
    this.quantityTickets();
    this.orderService.changeStatus(id);
  }

  quantityTickets() {
    console.log(this.quantityTicket);
    this.orderService.quantityTickets(this.quantityTicket);
  }
}
