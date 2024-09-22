export class Myclass{
   public id:number;
   private lname:string;
   protected fname:string;


    constructor(id:number,f:string,l:string){
        this.id=id;
        this.fname=f;
        this.lname=l;
    }

     display(){
        console.log(`
            ID          :: ${this.id}
            First name  :: ${this.fname}
            Last Name   :: ${this.lname}    
        `)
    }

} 

// let obj=new Myclass(9,"Sumit",'Raokhande');
// obj.display();
