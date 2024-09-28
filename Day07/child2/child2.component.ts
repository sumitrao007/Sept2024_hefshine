import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

 @Output() childStrEvent=new EventEmitter();

 @Output() childJsonEvent=new EventEmitter();

 strData:string="Hopes So u R Enjoying This Angular Module";

 jsonObj={
    id:9,
    fname:'Sumit',
    lname:'Raokhande'
 }

  onSend(){
    this.childStrEvent.emit(this.strData);
    this.childJsonEvent.emit(this.jsonObj)
  }

}
