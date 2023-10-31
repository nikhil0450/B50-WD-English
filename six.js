// slice -- Day 6
// var arr = [2,4,6,1,3,5];
// var odd = arr.slice(3,6);
// var even = arr.slice(0,3);
// console.log(odd)
// console.log(even)

// var arr = [1,3,5,2,4,6]
// arr.splice(4,2,47,25)
// arr.splice(3,2)
// arr.splice(2,3)
// console.log(arr)

// Slice & substring in String 
// slice substring substr is nothing but extracting the characters by targeting their indexes
// var str = "NikhilKulkarni";
// var newstr = str.slice(6,9);  
// console.log(newstr);
// newstr = str.substring(6,1);
// console.log(newstr);
// // slice & substring are almost same but slice cannot get -ve indexs, whereas substring can!
// newstr = str.substr(3,7)
// console.log(newstr)

// class Hero{
//     constructor(n,p,w){
//         this.name=n;
//         this.power=p;
//         this.weapon=w;
//         this.sleep= function(){
//             console.log("Sleeping & Recharging");
//             this.power +=20;
//         }
//         this.attack = function (){
//             if(this.power>0){
//                 console.log("Attacking with " + this.weapon + " & power is " + this.power);
//                 this.power-=10;
//                 return
//             }
//             console.log("Cancel attack, I need sleep");
//         }
//     }
    
// }


// var Hero1 = new Hero("Ironman",20,"Arc")
// Hero1.attack()
// Hero1.attack()
// Hero1.sleep()

class car{
    constructor(n,b,c){
        this.name=n;
        this.brand=b;
        this.color=c;
        this.tyrecondition = function(){
            if(this.tyrecondition>=70){
                console.log("Tyre condition is 70")
                return
            }
            console.log("Tyre condition is"+this.tyrecondition+"/100")
        }
    }
}

var car1 = new car("XUV","Mahindra","Blue")
// console.log(car1)
car1.tyrecondition()