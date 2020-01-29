import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart/cart.service';
import { Item } from '../shared/item.module';
import { ItemListService } from './item-list.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  providers: [ItemListService]
})
export class ItemListComponent implements OnInit {
  items: Item[];

  constructor(public cartService: CartService, public itemListService: ItemListService ) { 
    this.items = this.itemListService.getItems();
  }

  addToCart(id:number){
    this.cartService.addtoCart(id);
  }
  ngOnInit() {
  }

}
