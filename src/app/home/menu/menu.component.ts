import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from 'src/app/menu.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { OrderService } from 'src/app/order.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() id;
  @Input() token;
  listMenu: any;
  faShoppingCart = faShoppingCart;
  item: any;
  tickets: any;



  constructor(
    private orderService: OrderService,
    private menuService: MenuService) { }

  async ngOnInit() {
    this.getMenu();
    await this.orderService.getTicketsObservable().subscribe((res => {
      this.tickets = res
      console.log(this.tickets.length)
    }))

  }

  async getMenu() {
    this.listMenu = await this.menuService.getMenu();
  }

  sendProduct(order) {
    this.orderService.postProduct(order);
  }

  onSubmit(item) {
    this.sendProduct(item);

  }

  sendOrder() {
    this.orderService.sendOrder();
  }

}
