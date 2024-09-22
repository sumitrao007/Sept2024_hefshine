// array is dynamically growable & shrinkable 
// array homogneous as well as hetrogenous 
var a = [10, 20, 30];
var a1 = [];
var a2 = [45, 65];
var a3 = [78, 'sumit'];
var a4 = [45, 'Sumit', true];
// for(let i=0;i<a.length;i++){
//     console.log("Value of array "+a[i]);
// }
// console.log(a);
// console.log(a.join(" "));
// console.log(a.join("#"));
// console.log(a.join());
a4.forEach(function (myvalue, i, arr) {
    console.log(myvalue + " Index as i " + i + " Array is " + arr);
});
