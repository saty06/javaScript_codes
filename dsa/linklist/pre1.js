// single linkmlist 
class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}
class singleLinkList{
    constructor(){
        this.head = null
    }
    appendData(data){
        let newList = new Node(data);
        if(this.head==null){
            this.head = newList
        }
        // add the   last data 
        else{
            let currten = this.head;
            while(currten.next!==null){
                currten = currten.next
            }
            currten.next = newList
        }
    }
    //  add the first 
    addfirstData(data){
        let newList = new Node(data)
        if(this.head===null){
            this.head = newList
        }
        else{
            newList.next = this.head
            this.head = newList
        }
    }


    print(){
        let current= this.head
        while(current!==null){
            console.log(current.data)
            current = current.next
        }
    }

// delete the first  data
delete(){
    let current = null
   current = this.head.next
    this.head = current
    
}

}
let data = new singleLinkList()
data.appendData(12)
data.appendData(120)
data.appendData(102)
data.appendData(129)
data.appendData(1256)
console.log("add the last data ")
data.print()
data.addfirstData(20)
data.addfirstData(30)
data.addfirstData(70)
console.log("add  the first ")
data.print()
console.log("delete data ")
data.delete()
console.log(" remain data ")
data.print()