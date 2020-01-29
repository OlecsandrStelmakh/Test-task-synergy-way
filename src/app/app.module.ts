import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ItemListComponent } from './item-list/item-list.component';
import { CartService } from './cart/cart.service';

const appRoutes: Routes = [
  {path: '', redirectTo: '/item-list', pathMatch: 'full'},
  {path: "item-list", component: ItemListComponent}, 
  {path: "cart", component: CartComponent}, 
];

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
