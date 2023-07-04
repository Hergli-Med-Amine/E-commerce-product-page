import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition('void => *', animate('300ms')),
      transition('* => void', animate('300ms'))
    ]),
    trigger('slideleft2right', [
      state('void', style({ transform: 'translateX(-100%)' })),
      state('*', style({ transform: 'translateX(0)' })),
      transition('void => *', animate('300ms')),
      transition('* => void', animate('300ms'))
    ])
  ]

})
export class NavbarComponent {
  cartclicked: boolean = true;
  cartempty: boolean = true;
  togglemobilenavbar: boolean = true;

  numberItems: number = 0;

  togglemobilemenu() {
    this.togglemobilenavbar = !this.togglemobilenavbar 
  }

  onNumberItemsChange(event: number) {
    this.numberItems = event;
    this.cartempty = this.numberItems > 0 ? false : true;
  }
  
  carttoggle() {
    this.cartclicked = !this.cartclicked
  }

}
