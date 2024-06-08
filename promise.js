// promise is class which is used for check that the work is done or not 
// promise is used when you are  connect  to other application or data 
//  promise take two parameter  reslove and reject if work is done use reslove and if the work  is not done 
// used   reject but in moden javaScript contain a  other  it's called  pending it is provid that the work is not done or not  reject 
//   most of   time it is used  when i connect databases other applicatioin 
const promiseData = new Promise((reslove , reject)=>{
    // simple program 
   const data = true
   if(data){
   return  reslove(" data  is successful downlod")
   }
   else{
    return reject(" data do not downlod ")
   }

})
  console.log(" promise data Result ", promiseData);
  //  we can used with then  method which is very easy and save data 
  promiseData.then((data)=>{
    console.log(" result data ", data);
  }).catch((error)=>{
    console.log(" error data to fatch ", error);
  })
  // node=> we can used more then one then method for any data 
  promiseData.then((data )=>{
    const indexData =   data || true
    if(indexData){
     return indexData
    }
  }).then((indexData)=>{
if(indexData){
  console.log("then method  is working ");
}
  }).catch((error)=>{
    console.log("error data ");
  })
  // we can used  more then one promise 
  const promise1 = new  Promise((reslove , reject)=>{
    const  data = true
    if(data){
      reslove("  promise1")

    }
    else{
      reject("not  promise1")

    }

   }).catch((error)=>{console.log(error);})
   const promise2 = new Promise(( reject, reslove)=>{
    const data = true;
    if(data){
      reslove("promise2")
    }
    else{
      reject("promise2")
    }

   })
   Promise.all([promise1,promise2]). then((data)=>{
             console.log(data);
  }).catch((error)=>{console.log(error);})