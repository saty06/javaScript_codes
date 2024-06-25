/// single link list 
class node{
    constructor(data){
      this.data = data;
      this.next = null
    }
  }
  class singleLinkList{
    constructor(){
      this.head = null
    }
    append(data){
      let newList = new node(data)
      if(this.head==null){
        this.head = newList
      }
      else{
        // add the last 
        let traver = this.head
        while(traver.next!==null){
          traver = traver.next
        }
        traver.next = newList
      }
    }
  
    // add the  first 
     addfirstData(data){
      let  firstdata = new node(data)
      if(this.head==null){
        this.head = firstdata
      }
       else{
        firstdata.next = this.head
        this.head = firstdata
       }
     }
  
  print(){
    let  currentData = this.head
    while(currentData!==null){
      console.log(currentData.data)
      currentData = currentData.next
    }
  }
  
  }
  let  single = new singleLinkList()
  // single.addfirstData(23)
  // single.addfirstData(267)
  // single.addfirstData(789)
  // single.addfirstData(345)
  // single.print()
  // double link list 
   class nodeDouble{
    constructor(data){
      this.data = data ;
      this.next = null;
      this.tail = null
    }
   }
class doubleLinkList{
  constructor(){
    this.head = null
  }
  append(data){
    let newList = new nodeDouble(data)
    if(this.head===null){
      this.head = newList;
      this.tail = newList

    }
    else{
       this.head.tail = newList;
       newList.next = this.head;
       this.head = newList
    }
  }
   
print(){
   let current = this.head
   while(current!==null){
    console.log(current.data)
    current = current.next
   }
}

}
let double  = new doubleLinkList()
double.append(10);
double.append(11);
double.append(16)
double.append(100)
double.append(1056)
double.print()