import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-productgallery',
  templateUrl: './productgallery.component.html',
  styleUrls: ['./productgallery.component.css']
})
export class ProductgalleryComponent implements OnInit {
  @Output() lightboxToggle: EventEmitter<void> = new EventEmitter<void>();
  thimages: string[] = [
    '/assets/images/image-product-1-thumbnail.jpg',
    '/assets/images/image-product-2-thumbnail.jpg',
    '/assets/images/image-product-3-thumbnail.jpg',
    '/assets/images/image-product-4-thumbnail.jpg',
    
  ];

  images: string[] = [
    '/assets/images/image-product-1.jpg',
    '/assets/images/image-product-2.jpg',
    '/assets/images/image-product-3.jpg',
    '/assets/images/image-product-4.jpg',

  ];

  @Input() arrayFromParent!: boolean[];
  activeStates!: boolean[];
  activeImage!: string ; 

  slideNextActiveImage() {
    if(this.activeStates.findIndex((state: boolean) => state === true) === 3) {
      this.setActiveImage(0)
    }
    else {
          this.setActiveImage(this.activeStates.findIndex((state: boolean) => state === true)+1)

    }
  }

  slidePreviousActiveImage() {
    if(this.activeStates.findIndex((state: boolean) => state === true) === 0) {
      this.setActiveImage(3)
    }
    else {
          this.setActiveImage(this.activeStates.findIndex((state: boolean) => state === true)-1)

    }
  }

  setActiveImage(index: number) {
    this.activeImage = this.images[index];
    this.activeStates = this.activeStates.map((state, i) => i === index);
  }

  lightboxtoggle() {
    this.lightboxToggle.emit();
  }

  ngOnInit(): void {
    this.activeStates = this.arrayFromParent;
    this.activeImage = this.images[this.activeStates.findIndex((state: boolean) => state === true)]
  }
}
