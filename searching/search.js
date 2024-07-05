 ///  linear serach
 let linearArray = [2,5,9,6,7];
 let serachKey = 76;
  let count = 0;
  for(let i=0; i<linearArray.length; i++){
    if(linearArray[i]===serachKey){
      count++;
      break
    }
  }
  if(count>0){
    console.log(" key is present ");

  }
  else{
    console.log("sorry for that ")
  }
 
  // binary seach 
// this search work when data is assending and sort way
let data = [1,2,3,4,5,6,7]
let key = 5;
let left = 0;
let counte = 0
let right = data.length-1;
while(left<=right){
  let mid = Math.floor((left+right)/2);
  if(data[mid]===key){
        counte++
        break
  }
  else if(data[mid]>key){
   right= mid+1

  }
  else if(data[mid]<=key){
    left = mid-1
  }
}
if(counte>0){
  console.log("key is find")
}
else{
  console.log("sorry ")
}


