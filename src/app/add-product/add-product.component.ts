import { Component, ElementRef, EventEmitter, Output, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  @Output() productemitter = new EventEmitter<{ name: string, price: number, description: string, Image: string }>;
  name: string; 
  price: number;
  description: string;
  Image: string;

  @ViewChild('productDescription',{static : true}) productDescription :ElementRef;

  // file:File = event.target?.files[0];

  productCreated(productName :HTMLInputElement){
    this.productemitter.emit({
      name : productName.value,
      price: this.price,
      description: this.productDescription.nativeElement.value,
      Image: this.Image})
  }
}
