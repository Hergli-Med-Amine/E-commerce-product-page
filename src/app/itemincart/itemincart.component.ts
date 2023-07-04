import { Component, Input, EventEmitter, Output} from '@angular/core';
import { Product } from '../models/productdata.module';

@Component({
  selector: 'app-itemincart',
  templateUrl: './itemincart.component.html',
  styleUrls: ['./itemincart.component.css']
})
export class ItemincartComponent {
  @Input() cartItem!: Product;
  @Output() itemDeleted = new EventEmitter<void>();

  deleteItem() {
    this.itemDeleted.emit();
  }

  

}
