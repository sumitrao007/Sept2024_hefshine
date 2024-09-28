import { Component } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent {

  arrObj=[
    {
      name:'OnePlus',
      price:45000,
      qty:1
    },
    {
      name:'Samsung',
      price:25000,
      qty:1
    },
    {
      name:'RealMe',
      price:18000,
      qty:1
    },
    {
      name:'Motorolla',
      price:30000,
      qty:1
    },
    {
      name:'iPhone',
      price:100000,
      qty:1
    }
  ]

}
