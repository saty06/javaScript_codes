// class abc {
//     constructor(data) {
//         this.data = data;
//     }
// }

// let data = new abc("hello");

// // Inheritance
// class abc1 {
//     constructor(id, data) {
//         this.id = id;
//         this.data = data;
//     }

//     print() {
//         console.log(`this is id ${this.id}, this is data ${this.data}`);
//     }
// }

// class xyz extends abc1 {
//     constructor(id, data, name, address) {
//         super(id, data);
//         this.name = name;
//         this.address = address;
//     }

//     printInfo() {
//         console.log(`id=> ${this.id}, data=> ${this.data}, name=> ${this.name}, address=> ${this.address}`);
//     }
// }

// let dataInfo = new xyz(1, "hello", "satya", "mumbai");
// dataInfo.printInfo();
let array = [1,2,2,3,3,5,6,7]
let result = []

for( let i =0; i<array.length-1; i++){
    let count  = 1;
    for(let j = i ; j<array.length; j++){
        if(array[i]==array[j]){
            count++;
        }
        
            
    }
    if(count==1){
        result.push(array[i])
    }

}