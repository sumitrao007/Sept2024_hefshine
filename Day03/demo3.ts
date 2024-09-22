// array is dynamically growable & shrinkable 
// array homogneous as well as hetrogenous 

let a:number[]=[10,20,30];
let a1:number[]=[];
let a2=[45,65];
let a3=[78,'sumit'];
let a4:any[]=[45,'Sumit',true];

// for(let i=0;i<a.length;i++){
//     console.log("Value of array "+a[i]);
// }
// console.log(a);

// console.log(a.join(" "));
// console.log(a.join("#"));
// console.log(a.join());

// let arr=[45,63]
a4.forEach((myvalue,i,arr)=>{
    console.log(myvalue+" Index as i "+i+" Array is "+arr)
});



