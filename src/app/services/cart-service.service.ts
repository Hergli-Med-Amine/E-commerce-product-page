import { Injectable, EventEmitter  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  itemAdded: EventEmitter<any> = new EventEmitter<any>();

  addItemToCart(item: any) {
    this.itemAdded.emit(item);
  }
}
