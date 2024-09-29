import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any[]=[];

  constructor(private service:HttpService){
  }
  ngOnInit(): void {
    this.getdataFromBackend();
  }

  getdataFromBackend(){
    this.service.getData()
    .subscribe((myresponse:any)=>{
      console.log(myresponse);
      this.posts=myresponse
    
    })
  }



  onSend(mytitle:any,mybody:any){
    let jsonObj={
      title:mytitle,
      body:mybody
    }

      this.service.PostData(jsonObj)
      .subscribe((response)=>{
          console.log(response);
      })

  }

}
