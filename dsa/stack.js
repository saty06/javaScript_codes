class stack{
    constructor(){
        this.data = []
    }
    addData(data){
        this.data.push(data)
    }
    deletData(){
        if(this.data.length<=0){
            return console.log("Empaty")
        }
        return this.data.pop()
    }
    printData(){
        if(this.data.length==0){
             return console.log("empaty")
        }
        for(let i=0;i<this.data.length; i++){
            console.log(this.data[i], " => ")
        }
    }
}
let  data = new stack()
data.addData(23)
data.addData(253)
data.addData(233)
data.addData(236)
data.addData(213)
data.printData()
console.log("delete  data ")
data.deletData()
data.printData()