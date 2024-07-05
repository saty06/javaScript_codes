// single linkmlist 
class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}
class singleLinkList{
    constructor(){
        this.head = null;
    }
    // add the first data 
    addData(data){
        let newList = new Node(data);
     
        if(this.head==null){
            this.head = newList
        }
        else{
            newList.next = this.head
            this.head = newList
        }
    }

    addTheLast(data){
        let newList = new Node(data);
        if(this.head==null){
            this.head = newList
        }
        else{
            let current = this.head
            while(current.next!==null){
                current = current.next
            }
            current.next = newList
        }
    }
    print(){
        let current = this.head
        while(current!==null){
            console.log(current.data," => ")
            current = current.next
        }
    }

deletAtFirst(){
    if(this.head==null){
        return console.log("empaty")
    }
    else{
       this.head = this.head.next
    }
}

}
let single = new singleLinkList()
// single.addData(10)
// single.addData(12)
// single.addData(100)
// single.addData(103)
// single.addData(1230)
single.addTheLast(12)
single.addTheLast(142)
single.addTheLast(1232)
single.addTheLast(1234)
single.print()
single.deletAtFirst()
console.log("=> .........")
single.print()

