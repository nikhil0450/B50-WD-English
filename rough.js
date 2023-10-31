// Slice & substring in String 
// slice substring substr is nothing but extracting the characters by targeting their indexes
var str = "NikhilKulkarni";
// var newstr = str.slice(6,9);  
// console.log(newstr);
// newstr = str.substring(6,1);
// console.log(newstr);
// slice & substring are almost same but slice cannot get -ve indexs, whereas substring can!
// newstr = str.substr(3,7)
// console.log(newstr)

// var replaced = str.replace("Kulkarni",".N.Kulkarni")
// console.log(str);
// console.log(replaced);

let a = 0, b = 0;
const N = 10; // Replace 10 with the desired number of random numbers in the first loop
const M = 15; // Replace 15 with the desired number of random numbers in the second loop

for (let i = 0; i < N; i++) {
  a = a + Math.random();
}

for (let j = 0; j < M; j++) {
  b = b + Math.random();
}

console.log("Sum of random numbers in the first loop (a):", a);
console.log("Sum of random numbers in the second loop (b):", b);


