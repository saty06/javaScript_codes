class node {
    constructor(data){
        this.data = data;
        this.next = null
        this. tail = null
    }
}
  class double {
    constructor(){
        this.head = null;
        this.pre = null
    }
    append(data){
        let newlist = new  node(data)
        if(this.head===null){
            this.head = newlist;
            this.tail = newlist
        }
        else{
            this.tail.next = newlist
            newlist.pre = this.tail
            this.tail = newlist

        }
    }


     prit(){
        let current = this.head
        let result = [];
        while(current!==null){
           console.log(current.data)
            current = current.next
        }
      
     }
  }
  let doubleData = new double()
  doubleData.append(28)
  doubleData.append(48)
  doubleData.append(78)
  doubleData.append(328)
 doubleData.prit()
 