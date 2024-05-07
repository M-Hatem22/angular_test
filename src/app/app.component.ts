import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'e-commerce';

  elements
  // :[{name:string,price:number,description:string,Image:string}]
  =
  [{name:"product 1",price:30,description:"product 1 description",Image:"string"},
  {name:"product 2",price:30,description:"product 2 description",Image:"string"},
  {name:"product 3",price:30,description:"product 3 description",Image:"string"}
  ];

  letsAddElemnt(item:{name:string,price:number,description:string,Image:string}){
    this.elements.push(item);
  }
}
