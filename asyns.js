// asyns and await is  used when  you are connect the data bases or other application 
// asyns return promise show it is  imporant  that when you run  the program try to handel in catch block or handel promise
//  
async function add( a,b){
    const  data = await (a+b)
    return data
}
add(3,4).then((data)=>console.log(data)).catch((error)=>{
    console.log(error);
})
// asyns means to wait and remain work will  be run 
let dataobject = {
    name:"satya prakash singh"
}
 function regularFunction(){
    console.log(arguments);
 }
 console.log([regularFunction(1,2,3,4,345,6)]);
 const arrayFunction = (...arg)=>{
    console.log(arg);
 }
 console.log(arrayFunction(2,4,5,6,7,8,6,6));
 // this function will run first then add data will print  last du to asyns await