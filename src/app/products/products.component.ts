import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  
  @Input()Product : {name:string,
              Image:string,
              price:number,
              description:string
            };


}
