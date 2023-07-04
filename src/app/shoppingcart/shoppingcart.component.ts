import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from '../models/productdata.module'
import { CartService } from '../services/cart-service.service'


@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css'],
  
})
export class ShoppingcartComponent implements OnInit {
  @Output() numberItemsChange = new EventEmitter<number>();
  constructor(private cartService: CartService) {}
  cartempty: boolean = true;
  cartitems: Product[] = [];
  numberItems: number = 0;

  addItem(product: Product) {
    const existingItem = this.cartitems.find(item => item.productName === product.productName);
    if (existingItem) {
      existingItem.productquantity += product.productquantity;
    } else {
      this.cartitems.push(product);
    }
  
    this.cartempty = this.cartitems.length === 0;
    this.numberItem();
  }

  deleteItem(index: number) {
    this.cartitems.splice(index, 1);
    this.cartempty = this.cartitems.length === 0;
    this.numberItem();
  }

  numberItem() {
    this.numberItems = 0;
    for(let i =0; i< this.cartitems.length; i++ ) {
      this.numberItems += this.cartitems[i].productquantity;
    }
    this.numberItemsChange.emit(this.numberItems);
  }

  ngOnInit() {
    this.cartService.itemAdded.subscribe(item => {
      this.addItem(item);
    });
  }

  
}
