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
