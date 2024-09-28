import { Component } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component {

  strData:string="Welcome to angular Module By Sumit";
  dateData:string='';

  ChildStrDataReceived:string='';

  childJsonData:any={};

  onSend(dateValue:string){
    this.dateData=dateValue;
  }

}
