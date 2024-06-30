// Find Middle of the Linked List
class node {
    constructor(data){
        this.data = data
        this.next = null;

    }
}
class  linklist{
    constructor(){
        this.head = null
    }
    append(data){
        let  newlist = new  node(data)
        if(this.head===null){
            this.head = newlist
        }
        else{
            newlist.next =  this.head
            this.head = newlist
        }
    }


    // findmiddle data 
    findMiddle(){
        let  current = this.head;
        let  result = []
        while(current.next!==null){
            result.push(current.data)
            current = current.next
        }
        return result
    }
}
function middlenumber(array){
    let data = array;
   let lengrhofArry = data.flat(Infinity).length+1
   if(lengrhofArry%2===0){
     let  data1 = Math.floor(lengrhofArry/2)+1;
     console.log(data[data1])
   }
   else{
    let data2 =  Math.floor(lengrhofArry/2)

    console.log(data[data2])
   }

}
let  middle = new linklist()
middle.append(20)
middle.append(40)
middle.append(260)
middle.append(220)
middle.append(120)
let storeData = middle.findMiddle()
let a = (storeData.length)+1;
console.log(a)
middlenumber(storeData)