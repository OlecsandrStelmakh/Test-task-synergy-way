import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList = [];
  sum:number = 0;

  constructor(public cartService: CartService) {}
  
  changeQuantity(value,index) {
    this.cartService.changeQuantity(value,index);
    this.sum = this.cartService.countSum();
  }

  ngOnInit() {
    this.cartList = this.cartService.getCartList();
    this.sum = this.cartService.countSum();
  }
}
