/// bubble short 
let bubble =[2,1,3,4]
for(let i =0; i<bubble.length-1; i++){
    for(let j=0; j<bubble.length-i-1; j++){
        if(bubble[j]>bubble[j+1]){
            let temp = bubble[j]
        bubble[j] = bubble[j+1]
        bubble[j+1] = temp
        }
    }
}
// console.log(bubble)
// selection sort 
let selection = [2,1,3,45,5]
for(let i=0; i<selection.length-1; i++){
    let index  = i;
    for(let j = i+1; j<selection.length; j++){
        if(selection[index]>selection[j]){
            index = j;
        }
    }
    let temp = selection[i];
    selection[i] = selection[index]
    selection[index] = temp
}
// console.log(selection)
// insertion sort 
let insertion = [2,1,4,5,6]
for(let i =1; i<insertion.length; i++){
    let index = insertion[i];
    let j = i-1;
    while(j>=0 && insertion[j]>index){
        insertion[j+1] = insertion[j]
        j--
    }
    insertion[j+1] = index
}
// console.log(insertion)
// merge sort 
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let mid = Math.floor(array.length / 2);
    let leftArray = array.slice(0, mid);
    let rightArray = array.slice(mid);

    return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
    let leftIndex = 0;
    let rightIndex = 0;
    let result = [];

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
            result.push(leftArray[leftIndex]); 
            leftIndex++;
        } else {
            result.push(rightArray[rightIndex]);
            rightIndex++;
        }
    }

    while (leftIndex < leftArray.length) {
        result.push(leftArray[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < rightArray.length) {
        result.push(rightArray[rightIndex]);
        rightIndex++;
    }

    return result;
}

let data = [2, 4, 1, 5, 6];
let mergeData = mergeSort(data);
console.log(mergeData);
function printData(data){
    let result = new Promise(( reslove , reject)=>{
        if(data){
            let data2 = data.sort((a,b)=>{
                return a>b
            })
            reslove(data2)
        }
        else{
            reject("sorry")
        }

    }).then((data2)=>{
        if(data2){
            let data3 = data2.map(index=>index*2);
            return data3
        }
        
    }).then((data3)=>{
        if(data3){
            let data4 = data3.map(index=>index>10);
            return data4
        }
    }).catch((error)=>console.log("error data ", error))
    return result

}
printData(data).then((data)=>console.log(data)).catch((error)=>console.log(error))
