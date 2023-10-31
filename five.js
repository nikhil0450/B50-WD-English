// Array methods 

// map reduce filter 

// a function is known as higher order function if it takes another function in it

// function myfunc(){
//   // body
// }
// function solve(myfunc){
//   // body
// }
// solve(myfunc)

// Map(myfunc) // map is inbuilt funtion, myfunc is user defined function
// function myfunc(){
// }

// map function traverses through all the elements of an array and then performs some work on it 
// work - whatever the body of the function that map takes in 

// var arr = [1,2,3,4]
// Map() creates a new array containing the changes wiht each and every item 
// var newarr = arr.map(myfunc)
// function myfunc(item){
//     return item+1;
// }
// console.log(newarr)

// var arr = [2,5,6,8,9] 

// var newarr = arr.map(myfunc)
// function myfunc(item){
//     return item*10;
// }
// console.log(newarr)

// var s = 0;
// function sum(item){
//     if(item%2==0){
//         s = s+item
//     }
// }
// var newarr = arr.map(sum)
// console.log(s)

// var m =1;
// function mulodd(item){
//     if(item%2!=0){
//         m = m*item
//     }
// }
// var newarr = arr.map(mulodd);
// console.log(m)

// var arr = [20,30,10,5,50]
// var adult_ages = arr.filter(myfunc)
// function myfunc(val){
//     if(val>=18){
//         return true;
//     }
//     return false;
// }
// console.log(adult_ages)

// var arrr = [2,4,3,1,5,6]
// var even = arrr.filter(myfucn)
// function myfucn(val){
//     if(val%2==0){
//         return true;
//     }
//     return false;
// }
// console.log(even)


// var arr =[1,2,3,4]
// var iv=0;
// var mul = arr.reduce((curr,acc)->{
//     return curr+acc
// })

// var arr = [1,2,3,4,5]
// var arr1 =  [6,7,8,9,10]
// var joined = arr.concat(arr1)
// console.log(joined);

// var a = "abcdefgh";
// var arr = a.split("");
// console.log(arr);