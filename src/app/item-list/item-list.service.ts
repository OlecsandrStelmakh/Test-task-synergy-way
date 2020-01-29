import { Injectable } from '@angular/core';
import { Item } from '../shared/item.module';

@Injectable({
  providedIn: 'root'
})
export class ItemListService {
  private items: Item[] = [
    {"id":1,"name":"article 1","label":"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","price":25},
    {"id":2,"name":"article 2","label":"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","price":35},
    {"id":3,"name":"article 3","label":"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","price":45}
  ]

  constructor() { }

  getItems(){
    return this.items;
  }
}
