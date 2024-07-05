class queue{
    constructor(){
        this.data =[]
    }
    // add data 
    addData(data){
        this.data.push(data)
    }
    // delete data 
    deletData(){
        if(this.data.length<=0){
            return console.log("empaty")
        }
        return this.data.shift()
    }
    printData(){
        for(let i =0; i<this.data.length; i++){
            console.log(this.data[i], "=>")
        }
    }
}
let data = new queue()
data.addData(234)
data.addData(224)
data.addData(204)
data.printData()
console.log("=> delete data ")
data.deletData()
data.printData()
