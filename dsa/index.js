// bubble sort
let bubbleArray = [2,4,1,3,5,6]
for(let i =0; i<bubbleArray.length;i++){
    for(let j = 0; j<bubbleArray.length-i-1; j++){
        if(bubbleArray[j]>bubbleArray[j+1]){
            let temp = bubbleArray[j];
        bubbleArray[j+1] = bubbleArray[j]
        bubbleArray[j+1] = temp
        }
    }
}
console.log("  bubble sorting ", bubbleArray)