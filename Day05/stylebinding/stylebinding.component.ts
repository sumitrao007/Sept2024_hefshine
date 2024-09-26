import { Component } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent {

  mycolor:string='red';
  rating:number=21;


  jsonObj={
    color:'blue',
    fontSize:'32px',
    'font-family':'Courier New'
  }

}
