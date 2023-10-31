// Day 4

// arr = [1,2,5,8,6,7,10]

// arr.pop()
// arr.unshift(10)
// arr.pop()
// arr.shift()
// arr.push(10)
// arr.push(20)
// arr.unshift(30)
// arr.pop()
// arr.shift()
// arr.push(9)
// arr.shift()

// console.log(arr)

// Objects

// var student = {
//     name: "Nikhil",
//     age : 20 ,
//     city: "Pune"
// }
// console.log(student.age)

// var a = parseInt("69"); or // var a = Number("69")
// console.log(typeof(a))

// Arrays (Day 4)

// var arr = [1,2,3,4,5,6,7,8,9,10];
// for(let i=0;i<arr.length;i++){
//     var sum="";
//     if(i%2!=0){
//         console.log(sum)
//     }
// }

// var hero = {
//   name: "ironman",
//   power: 20,
//   weapon: "sword",
//   sleep: function () {
//     console.log("Sleeping & recharging ");
//     this.power += 20;
//   },
//   attack: function () {
//     if (this.power <= 0) {
//       console.log("Cancel attack, I need sleep");
//       return;
//     }
//     console.log(
//       "Attacking with " + this.weapon + " and power is " + this.power
//     );
//     this.power -= 10;
//   },
// };
// hero.attack();
// hero.attack();
// hero.attack();
// hero.sleep();
// hero.attack();

// var movies = [
//   {
//     moviename: "Tiger",
//     Rating: 8,
//   },
//   {
//     moviename: "ABCD",
//     Rating: 9,
//   },
// ];
// // console.log(movies[0].Rating);
// for(let i=0;i<movies.length;i++){
//     console.log(movies[i].Rating);
// }