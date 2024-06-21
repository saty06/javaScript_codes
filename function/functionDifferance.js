//  Regular function 
function Regularfunction (){
    console.log("Hello");
}
console.log(Regularfunction);
// array Function
const ArrayFunction = ()=>{
    console.log("Hello");
}
// pass parameter
function RegularPassData( a, b){
return (a*b)
}
console.log(RegularPassData(3,4));
// pass parameter to the array function
 const passDataArrayFunction =(a,b)=>{
    return (a*b)
 }
  console.log(passDataArrayFunction(6,8));
  //  Regular function use this key word
  const regularThisKey = {
    name:"satya prakash singh",
    data:function(){
        console.log(this.name);
    }
  }
  console.log(regularThisKey.data);//  satya prakash singh is out put 
  // you can not use this key in array function
//   const ArrayFunctions = ()=>{
//     name:"satya ",
//     datas:()=>{
//         console.log(this.name);
//     }
//   }
//   console.log("error" ArrayFunctions.datas);  // this code provid error 
// Regular function use new keyword

function Regularthis(name){
    return console.log(this.name=name);
}
const person = new Regularthis("shivay singh")
console.log(person);
// but do not use  new keyword with arrayFunction 
// regular function take argument data 
function RegularArgument(){
    return console.log(arguments);
}
console.log(RegularArgument(1,2,3,4,5));// it is provid array [1,2,3,4,5]
// array function use ...arg 
const ArrayFunctionArgs = ( ...args)=>{
return console.log(args);
}
console.log(ArrayFunctionArgs(1,2,3,4,5,6));// it  is provid array [1,2,3,4,5]
// node=> if one line code the array function is not required return type 
const data = (name)=>(console.log(name));
console.log(data("satya"));
// 
