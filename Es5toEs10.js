// Es5 is intro in 2015   which is conation many method  asyns function return  promise return 
// "use strict" is define that all code will run in new way
// string trim()=> remove the extra space 
let strimName = "     satya      "
console.log(strimName.trim());
// array have a method isArray which is return true or flase 
let isArrayMethod = {
    name:"satya "
}
console.log(Array.isArray(isArrayMethod));//  out put is false
//array  contain foreach method which is contain  function and return aray
let forEachMethod = [1,2,3,4]
let forEachMethodResult = forEachMethod.forEach(function( data){
console.log(data*2);
})
console.log(forEachMethodResult);
//arrays take a map method which is provid array after that
let mapMethod = [3,4,5,6]
let mapMethodResult = mapMethod.map( function(data){
    return data*data
})
console.log(mapMethodResult);
//array  contain filter method which is return true valu 
let filterMethod = [2,3,4,5,6]
let filterMethodResult = filterMethod.filter(( data)=>{
    return data>2
})
 console.log(filterMethodResult);// out put [3,4,5,6]
 //every method is provid true or false or it is  check all array values
 let everyMethod = [2,3,4,5,6,7]
 let everyMethodResult = everyMethod.every((data)=>{
    if(data>19){
        return true
    }
    else{
        return false
    }
 })
 console.log(everyMethodResult);//  output false
 // some method is  return true or false it is check any one data in array'condision is true
 let someMethod = [2,3,4,5,6]
 let someMethodResult = someMethod.some((data)=>{
    return data>10
 })
 console.log(someMethodResult);// false
 // indexOf method return index of string otherwise -1 
 let indexofMethod = " satya prakash  singh"
 console.log(indexofMethod.indexOf("z"));// out put is -1
 // JSON.parse() method => it is  convert JSON data into object 
 // JSON.stringfy()=> it is convert object in string
 //Date.now() it is provid time in  mili second
 let DataMethod =  Date.now()
 console.log(DataMethod);
 // object.create()=> create new object 
 let  person = {
 }
 let objectMethod = Object.create(person)
 objectMethod.name = "satya"
 console.log(objectMethod);
 // object.key() it is provid key of object  and object.value() is provid value of object
// bind() method bind the object
let bindMethod = {
    name:"satya"
}
function bindFunction(){
    console.log(this.name);
}
bindFunction.bind(bindMethod)
// end of Es5 
// Es6 it is introduce in 2016 
// 1=> let is keyword which is assign the value it is block of code 
// const is into in Es6 
// Arrow function  is  intro in Es6
// object de structures
let objectData = {name:"satya"}
const{name} = objectData
console.log(objectData);
// you can assion own  value
const{name:data} = objectData
console.log(data);
// aray destructure
let arrayDestructure = [1,2,3,4]
const[a,b,c] = arrayDestructure
console.log(a,b,c);
//spred operator it  called ...
function spredFunction(...arg){
    console.log(arg);
}
spredFunction(1,2,3,3,4,5,56,6)// it is return array 
// if you  want add more the two object then used it 
let ob1 = {
    name1:"a"
}
let ob2 = {
name2:"b"
}
let ob3 = {name3:"c"}
let obResult =[ {...ob1,...ob2}] 
console.log(obResult);
// set is a class which is store  unique value 
let data1 = [1,2,3,4,5,2,3]
let setdata = new Set(data1)
console.log(setdata);
//class and constructor is define in  Es6
class abc{
    constructor(a){
        this.a = a
    }
}
let classData = new abc(3)
console.log("result data ", classData);
//promise =>  it  takes two parameter reslove and reject is problem is slove return reslove 
// otherwise  reject 
let  promiseData = new Promise((reslove, reject)=>{
    const data = true
    if(data){
        reslove("slove")
    }
    else{
        reject("unslove")
    }
})
console.log(promiseData);
// default parameter
function defaultParameter(name="string pass  data "){
    console.log(name);
}
defaultParameter("satya")
defaultParameter()
//  include method provid true and  false
let includData = "abcdef"
console.log(includData.includes('g'));//  false
// startwith()// it is check the data will start in the first ot not in the  endwith()
// check the data will end in the last or not
//Es6 is end 
// Es7
//padstart and padend add the data   first and last
let padstartData = "hello"
console.log(padstartData.padStart(8 ,"o"));
let padEndData = "hii"
console.log(padEndData.padEnd(8,"o"));
// object.value and object.key ==> this is return object value  and key
let obData = {
    name:"bx"
}
 let re = Object.entries(obData)
 console.log(re);
 console.log(Object.keys(obData));
 console.log(Object.values(obData));
 //asyns await => it is return promise  so  used try catch or promise  
 async function dataprint( a,b){

    try {
        return await(a+b)
        
    } catch (error) {
        console.log(error);
        
    }
 }
 dataprint(3,4).then((data)=>{
    console.log("data print ", data )
 }).catch((error)=>{
    console.log(error);
 })
 // Es7 is end here 
 // Es8
 //promise with finaly
  let finalydata = new Promise((reslove, reject)=>{
    const data = true
    if(data){
        reslove("reslove data ")
    }
      else{
        reject("reject data ")
      }
      
  }).finally(()=>{
    console.log("finaly work");
  })
  console.log(finalydata);
  // Es8 is end 
  //Es9 
  //trimstart(), trimend() this  method used in string to remove left and right space 
  let stringdata = "  shdjhsgdjhd    "
   console.log(stringdata.trimEnd());
   console.log(stringdata.trimStart());
   // try  catch
   function trycatch(){
      try {
        const data = true
        if(data){
            console.log(" true data ");
        }
      } catch (error) {
        console.log(error);
        
      }
   }
   trycatch()
   // Es9 is end 
   // Es10
   // it is conatin ?? => it is same to or operator
   let a1;
   let  a2 = a1??"hello"
   console.log(a2);// if a1 is  absent then i  will get hello
