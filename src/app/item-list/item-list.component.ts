import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items = [
    {"id":1,"name":"article 1","label":"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","price":25},
    {"id":2,"name":"article 2","label":"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","price":35},
    {"id":3,"name":"article 3","label":"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","price":45}
  ]

  constructor(public cartService: CartService) { }
  addToCart(id:number){
    this.cartService.addtoCart(id);
  }
  ngOnInit() {
  }

}
