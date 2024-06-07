//  scope of function 
 var data = 30
 let dataFunction = ()=>{// it is return function and access data = 29  becouse var is provid resign data 
     var data = 29
     console.log(data);

 }
 var StringData = "satya "

 let functionToCheck = ()=>{
    var StringData=" shivay "
    console.log(StringData);

 }
 console.log("start data ", StringData);
 console.log("function data ", functionToCheck());
 console.log(dataFunction());

  function varTopHosting(){
console.log("result data top Hosting", topHostging);
  }
   var topHostging = 19
   console.log(varTopHosting());
   // function and var is provid top hosting 
   let Data = 10
    function letData(){
        console.log(Data);
    }
    console.log(letData());// out put is 20
    // note=> var and function provid top hosting but const and let is not provid so  most of time  used let and const 
    // note =>
    function extraPartData(){
        console.log("hello");
    }
    extraPartData.name = "Hello"
    console.log(extraPartData());// it is not provid error becouse  name is extra for this function
    // node each function has a return type  you can define or not 
    