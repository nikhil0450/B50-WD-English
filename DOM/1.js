// document.getElementById("demo").innerHTML="Hello World";

setTimeout(()=>{document.getElementById("demo").innerHTML="Hello there this is setTimeout"},2000);

setInterval(() => {
    document.getElementsByClassName("image").innerHTML="Hello this is setInterval"
    
}, 2000);

// console.log("Hello")

setTimeout(() => {
    var name = prompt("Enter your name: ");
    if(name==null || name==""){
        document.getElementsByClassName("demo")[0].innerHTML="You have not entered the name";
    }
    else{
        document.getElementsByClassName("demo")[0].innerHTML="Hello "+name;
    }
}, 1500);