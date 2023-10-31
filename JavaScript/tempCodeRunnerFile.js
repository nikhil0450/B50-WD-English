
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