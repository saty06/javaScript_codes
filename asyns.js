// asyns and await is  used when  you are connect the data bases or other application 
async function add( a,b){
    const  data = await (a+b)
    return data
}
add(3,4).then((data)=>console.log(data)).catch((error)=>{
    console.log(error);
})