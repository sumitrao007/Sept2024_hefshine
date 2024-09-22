// anonymous function 
// function does not any name 
// function execute there itself 
var func1 = function () {
    console.log("anonymous function  is called ");
};
// func1();
var temp2 = function (a, b) {
    return (a + b);
};
// let res= temp2(10,5);
// console.log("Result is "+res);
// fat arrow function / Arrow function 
var temp3 = function () {
    console.log("Fat arrow function is called");
};
// temp3();
var temp4 = function (a, b) {
    return (a + b);
};
var res = temp4(10, 20);
console.log("\n        Result :: ".concat(res, "\n    "));
console.log("\n        Result :: ".concat(temp4(70, 8), "\n    "));
