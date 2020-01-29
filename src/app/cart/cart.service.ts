import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartList = [];

  constructor() {
    this.downloadCartList()
  }

  saveCartList(){
    localStorage.setItem('cartList', JSON.stringify(this.cartList));
  }

  downloadCartList(){
    this.cartList = JSON.parse(localStorage.getItem("cartList"));
    if(!this.cartList){
      this.cartList=[];
    }
  }

  getCartList(){
    return this.cartList;
  }

  addtoCart(item){
    let alreadeInCart = this.cartList.find(el => el.id == item.id);
    if (alreadeInCart) {
      alreadeInCart.quantity ++;
    } else {
      this.cartList.push({id: item.id, name: item.name, price: item.price, quantity: 1});
    }
    this.saveCartList();
  }

  changeQuantity(value,index){
    if (value == "+") {
      this.cartList[index].quantity ++
    } else {
      this.cartList[index].quantity --;
      if (this.cartList[index].quantity == 0) {
        this.cartList.splice(index,1);
      }
    }
    this.countSum();
    this.saveCartList();
  }

  countSum(){
    return this.cartList.reduce((sum, item) => sum + item.price*item.quantity, 0);
  }
}
