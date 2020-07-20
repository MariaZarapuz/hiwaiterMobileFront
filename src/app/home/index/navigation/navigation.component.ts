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


  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }
  changeStatus(id) {
    this.orderService.changeStatus(id);
  }
}
