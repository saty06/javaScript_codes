// bubble sort
let bubbleArray = [2,4,5,1]
for(let i = 0; i<bubbleArray.length-1; i++){
    for(let j = 0; j<bubbleArray.length-i-1; j++){
        if(bubbleArray[j]>bubbleArray[j+1]){
            let temp = bubbleArray[j]
            bubbleArray[j] = bubbleArray[j+1]
            bubbleArray[j+1] = temp
        }
    }
}
console.log(bubbleArray)
/// selection sort
let selectionArry = [3,5,1,3,4]
for(let  i =0; i<selectionArry.length-1; i++){
    let index = i;
    for(let j = i+1; j<selectionArry.length;j++){
        if(selectionArry[index]>selectionArry[j]){
            index = j
        }
    }
    let temp = selectionArry[index];
    selectionArry[index] = selectionArry[i]
    selectionArry[i] = temp
}
console.log(selectionArry)
// insertion sort
let insertionArry = [2,5,1,6,7]
for(let i =1; i<insertionArry.length; i++){
    let key = insertionArry[i]
    let j = i-1;
    while(j>=0 && insertionArry[j]>key){
        insertionArry[j+1] = insertionArry[j]
    }
    insertionArry[j+1] = key
}
console.log(insertionArry)
// merge sort 
 function  merge(array){
    if(array.length<=1){
        return array
    }
    let mid = Math.floor(array.length/2);
    let leftArray = mid.slice(0, mid);
    let rightArray = mid.slice(mid)
       return margeSort(merge(leftArray),merge(rightArray))
 }
 function margeSort( leftArray, rightArray){
    let leftIndex = 0;
    let rightIndex = 0;
    let res = []
    while(leftIndex<leftArray.length && rightIndex<rightArray.length){
        if(leftArray[leftIndex]<rightArray[rightIndex]){
           res.push(leftArray[leftIndex])
           leftIndex++
        }
        else{
            res.push(rightArray[rightIndex])
            rightIndex++

        }
    }
     while(leftIndex<leftArray.length){
        res.push(leftArray[leftIndex])
        leftIndex++
     }
     while(rightIndex<rightArray.length){
        res.push(rightArray[rightIndex])
        rightIndex++
     }
    

 }