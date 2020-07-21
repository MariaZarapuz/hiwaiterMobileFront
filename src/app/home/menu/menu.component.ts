import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/menu.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { OrderService } from 'src/app/order.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  numberTable = 25;
  listMenu: any;
  faShoppingCart = faShoppingCart;
  item: any;
  show: boolean;


  constructor(
    private orderService: OrderService,
    private menuService: MenuService) { }

  ngOnInit(): void {
    this.getMenu();
  }

  async getMenu() {
    this.listMenu = await this.menuService.getMenu();
  }

  sendProduct(order) {
    this.orderService.postProduct(order);
  }
  sendOrder() {
    this.orderService.sendOrder();
  }
}
