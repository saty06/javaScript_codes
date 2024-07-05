let data =[1,2,3,4,2,4,4,3]
let newData = new Map();
for(let i=0; i<data.length; i++){
    newData.set(data[i], data[i])
}
let res = Array.from(newData.keys())
 
console.log(newData)