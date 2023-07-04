import { Component, OnInit, HostListener, ViewChild, ElementRef} from '@angular/core';
import { Product } from '../models/productdata.module';
import { CartService } from '../services/cart-service.service'

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit{

  @ViewChild('imageElement', { static: true }) imageElementRef!: ElementRef<HTMLImageElement>;


  constructor(private cartService: CartService) {}

  product!: Product;

  quantity: number = 0;
  thimages!: string[] ;

  images!: string[];

  imageclicked: boolean = false;
  activeStates!: boolean[]
  activeImage!: string 

  isMobileDevice() {
    return (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }

  handleImageClick(event: MouseEvent) {
    if (this.isMobileDevice()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      this.lightboxtoggle();
    }
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.deactivateClickEventForMobile();
  }

  deactivateClickEventForMobile() {
    const imageElement = this.imageElementRef?.nativeElement;
    if (imageElement) {
      if (this.isMobileDevice()) {
        imageElement.removeEventListener('click', this.handleImageClick);
      } else {
        imageElement.addEventListener('click', this.handleImageClick);
      }
    }
  }

  setActiveImage(index: number) {
    this.activeImage = this.images[index];
    this.activeStates = this.activeStates.map((state, i) => i === index);
  }

  lightboxtoggle() {
    this.imageclicked= !this.imageclicked
  }


  quantityIncrement() {
    if(this.quantity>=20){
      return
    }
    this.quantity++;
  }

  quantitydecrement() {
    if(this.quantity===0){
      return
    }
    this.quantity--;
  }

  addToCart(){
    if(this.quantity != 0) {
      var newproduct: Product = { ...this.product };
      
      newproduct.productquantity = this.quantity
      
      this.cartService.addItemToCart(newproduct);
    }
    
  }

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


  ngOnInit(): void {
    this.product = {
      productName: 'Fall Limited Edition Sneakers',
      productDescription: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
      productPrice: 125.00,
      productImages: [
        '/assets/images/image-product-1.jpg',
        '/assets/images/image-product-2.jpg',
        '/assets/images/image-product-3.jpg',
        '/assets/images/image-product-4.jpg'
      ],
      productThumbnailImages: [
        '/assets/images/image-product-1-thumbnail.jpg',
        '/assets/images/image-product-2-thumbnail.jpg',
        '/assets/images/image-product-3-thumbnail.jpg',
        '/assets/images/image-product-4-thumbnail.jpg'
      ],
      productquantity: 0,
    };
    this.images = this.product.productImages;
    this.thimages = this.product.productThumbnailImages;
    this.activeImage = this.images[0]; 
    this.activeStates = this.thimages.map((_, index) => index === 0);

    
  }
}
