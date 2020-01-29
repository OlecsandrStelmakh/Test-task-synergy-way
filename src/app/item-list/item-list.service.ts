import { Injectable } from '@angular/core';
import { Item } from '../shared/item.module';

@Injectable({
  providedIn: 'root'
})
export class ItemListService {
  private items: Item[] = [
    new Item (1,"article 1","Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",25),
    new Item (2,"article 2","Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",35),
    new Item (3,"article 3","Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",45)
  ]

  constructor() { }

  getItems(){
    return this.items;
  }
}
