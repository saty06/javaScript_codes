let a = 4;
let b = 35
// console.table([a,b])  // print data in table from 
// dif between  array and refular function

function regularFunction1(){
    console.log("hello")
}
let arrayFunction1 = ()=>{
    console.log("hello")
}
regularFunction1()
arrayFunction1()
// 2
function regularFunction2( ){
    // data store in object from 
    console.log(arguments)

}
let arrayFunction2=(...arg)=>{
    // do not pass argument but uesed spred operator  and data store in array form 
 console.log(arg)
}
// regularFunction2(2,3,4,5,6,7,)
// arrayFunction2(2,3,4,5,6,7)
// do  not use this key word in array function 
let arrayFunction3 = ()=>{
    let ob ={
        name:"satya prakash singh",
        id:39,
        action:()=> {
            console.log( this.id)
        }

    }
    // console.log(ob.action())
}
// arrayFunction3()
// // do not use new key word in array  function
// let arrayFunction4 = new arrayFunction3()
// console.log(arrayFunction4)// do not used key becouse this is not a constructer 
// high ordr function 
let mapData = [2,3,4,5,6,29,47]
// console.log(mapData.map(( index)=>(index*3)))
// sync the function will run a lines form  or run program one by one 


// async function => the function will  wait  and run after  any async function contain a call back  return a promise 
async function abc (){
     let wait =  await  Date.now()
     console.log(wait) 

}
abc().then().catch(()=>console.log("error")); 

