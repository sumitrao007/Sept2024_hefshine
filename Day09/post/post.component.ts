import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any[]=[];
  id!:number;
  title!:string;
  body:string='';
  isHidden:boolean=true;

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
      
    },(myerror)=>{
        alert("Something is went wrong");
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

  onEdit(item:any){
    this.id=item.id;
    this.title=item.title;
    this.body=item.body;
    this.isHidden=false;
  }

  onUpdate(){
    let obj={
      id:this.id,
      title:this.title,
      body:this.body
    }

    this.service.updateData(obj)
    .subscribe((response)=>{
      console.log(response)
    })

  }

  onDelete(id:any){
    this.service.deletData(id)
    .subscribe((response)=>{
        console.log(response);
    })
  }

}
