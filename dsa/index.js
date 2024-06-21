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
// console.log("  bubble sorting ", bubbleArray)
//   selection sort 
let selectionArray = [2,5,1,6,8]
for(let i =0; i<selectionArray.length-1; i++){
    let index = i//  asume that first elelent is min element
    for(let j=i+1; j<selectionArray.length;j++){
        if(selectionArray[i]>selectionArray[j]){
            index = j
        }
    }
    if(index!==i){
        let temp = selectionArray[i];
        selectionArray[i] = selectionArray[index]
        selectionArray[index] = temp
    }
}
// console.log(" selection sort ",selectionArray)
//  insertion sort 
let insertionSort = [2,3,1,3]
for(let i =1; i<insertionSort.length; i++){
    let key = insertionSort[i]
    let j = i-1;
    while(j>=0 && insertionSort[j]>key){
        insertionSort[j+1] = insertionSort[j]
    }
    insertionSort[j+1] = key
}

console.log(" insertion sort ", insertionSort)