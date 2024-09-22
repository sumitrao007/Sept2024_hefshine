// anonymous function 
// function does not any name 
// function execute there itself 

let func1= function (){
    console.log("anonymous function  is called ")
}

// func1();

let temp2= function (a:number,b:number):number{
    return (a+b);
}

// let res= temp2(10,5);
// console.log("Result is "+res);

// fat arrow function / Arrow function 

let temp3= ()=>{
    console.log("Fat arrow function is called");
}

// temp3();

let temp4=(a:number,b:number):number=>{
    return (a+b);
}

let res= temp4(10,20);
console.log(`
        Result :: ${res}
    `);
    console.log(`
        Result :: ${temp4(70,8)}
    `);

    


