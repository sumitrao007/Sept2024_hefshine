import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding1',
  templateUrl: './eventbinding1.component.html',
  styleUrls: ['./eventbinding1.component.css']
})
export class Eventbinding1Component {

  result:number=0;
  mynum1:number=0;
  mynum2:number=0;

  onClick(){
    console.log("Click Event Occur..")
    
  }

  onImage(){
    console.log("on Image Click");
  }

  onAddition(num1:any,num2:any){

    let n1=+num1;
    let n2=+num2;

   this.result= n1+n2;


  }

  onAddition1(){
      this.result=this.mynum1+this.mynum2;
  }


}
