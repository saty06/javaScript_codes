
class node{
    constructor(data){
      this.data = data;
      this.next = null
    }
  }
  class LinkList{
    constructor(){
      this.head = null
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
  let  single = new LinkList()
//   single.addfirstData(23)
//   single.addfirstData(267)
//   single.addfirstData(789)
//   single.addfirstData(345)
//   single.print()
  

  let a = [true,false,true,false]
  let count = 0
 for(let i =0; i<a.length; i++){
    if(a[i]===true){
       count++
    }
 }
 console.log(count)
   