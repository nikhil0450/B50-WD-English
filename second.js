// Ques 4

// Roman number to number

// function romanToNumber(str){
//     var sum=0
//     for(var i=0;i<str.length;i++){
//         if(str[i]=='I'){
//             if(str[i+1]=='V'){
//                 sum+=4
//                 i++
//             }
//             else if(str[i+1]=='X'){
//                 sum+=9
//                 i++
//             }
//             else{
//                 sum+=1
//             }
//         }
//         else if(str[i]=='V'){
//             sum+=5
//         }
//         else if(str[i]=='X'){
//             if(str[i+1]=='L'){
//                 sum+=40
//                 i++
//             }
//             else if(str[i+1]=='C'){
//                 sum+=90
//                 i++
//             }
//             else{
//                 sum+=10
//             }
//         }
//         else if(str[i]=='L'){
//             sum+=50
//         }
//         else if(str[i]=='C'){
//             if(str[i+1]=='D'){
//                 sum+=400
//                 i++
//             }
//             else if(str[i+1]=='M'){
//                 sum+=900
//                 i++
//             }
//             else{
//                 sum+=100
//             }
//         }
//         else if(str[i]=='D'){
//             sum+=500
//         }
//         else if(str[i]=='M'){
//             sum+=1000
//         }
//     }
//     return sum
// }

// console.log(romanToNumber("MMCM"))

//balanced paranthesis

// function bacalancedparanthesis(str){
//     var stack=[]
//     for(let i=0;i<str.length;i++){
//         if(str[i]=='('||str[i]=='{'||str[i]=='['){
//             stack.push(str[i]);
//             continue;
//         }
//         if(stack.length==0){
//             return false
//         }
//         var check;
//         switch(str[i]){
//             case ')':
//                 check=stack.pop()
//                 if(check=='{'||check=='['){
//                     return false
//                 }
//                 break;
//             case '}':
//                 check=stack.pop()
//                 if(check=='('||check=='['){
//                     return false
//                 }
//                 break;
//             case ']':
//                 check=stack.pop()
//                 if(check=='{'||check=='('){
//                     return false
//                 }
//                 break;
//             default:
//                 return false;
//         }
//     }
//     return (stack.length==0)
// }

// if(bacalancedparanthesis("{()[]}")){
//     console.log("balanced")
// }else{
//     console.log("not balanced")
// }

// Split string question

// function splitString(S) {
//     var S1 = "";
//     var S2 = "";
//     var S3 = "";

//     for (var i = 0; i < S.length; i++) {
//       var char = S[i];

//       if (/[a-zA-Z]/.test(char)) {
//         S1 += char;
//       } else if (/[0-9]/.test(char)) {
//         S2 += char;
//       } else {
//         S3 += char;
//       }
//     }

//     return [S1, S2, S3];
//   }

//   // Example usage:
//   var inputString = "geeks01for02geeks03!!!";
//   var [S1, S2, S3] = splitString(inputString);

//   console.log("S1:", S1); // Output: S1: Abc
//   console.log("S2:", S2); // Output: S2: 123
//   console.log("S3:", S3); // Output: S3: #$%

// Write a function to reverse a number (don’t convert number to string and dont use any inbuilt function))

// var arr = [1,2,3,4]

// var rev = []

// for(let i = arr.length - 1 ; i>=0 ; i--){
//     rev.push(arr[i])
// }
// if(rev==arr){
//     return true
// }
// else{
//     return false
// }
// return rev
// console.log(rev)

// console.log("Hello")