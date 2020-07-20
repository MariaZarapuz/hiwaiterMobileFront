import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/menu.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  listMenu: any;
  faShoppingCart = faShoppingCart;


  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.getMenu();
  }

  async getMenu() {
    this.listMenu = await this.menuService.getMenu();
  }

}
