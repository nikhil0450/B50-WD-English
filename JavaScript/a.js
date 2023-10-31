// callback

// function show(some){
//     console.log(some);
// }
// function mycalc(num1,num2,callback){
//     let result = num1 + num2 ;
//     callback(result)
// }
// mycalc(2,3,show)

let mypromise = new Promise(function (resolve, reject) {
  let c = "bought chocolate";
  if (c == "bought chocolate") {
    resolve("thank you");
  } else {
    reject("Gaddari korbe");
  }
});

mypromise.then(function (value) {
  console.log(value),
    function (error) {
      console.log(error);
    };
});

let mypromise1 = new Promise(function(resolve,reject){
    let c ="chocolate"
    setTimeout(() => {
        if(c=="chocolate"){
            resolve("I love chocolate")
        }
        else{
            reject("I hate chocolate")
        }
    }, 3000);
})

mypromise1.then(function (value) {
  console.log(value),
    function (error) {
      console.log(error);
    };
});

let mypromise2 = new Promise(function(resolve,reject){
    let show = "Hello World";
    setTimeout(() => {
            resolve("Hello World is printed")
    }, 3000);
})

mypromise2.then(
    function(value){console.log(value);}
)

