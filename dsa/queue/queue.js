  class queue{
    constructor(){
        this.item = []
    }
    append(data){
        return this.item.push(data)
    }
    isEmpty(){
        return this.item.length===0
    }
    delete(){
        if(this.isEmpty()){
            console.log("empaty data ")
            return null
        }
        return this.item.shift()
    }
    print(){
        return this.item.join('   ')
    }
  }
  let data = new queue()
  data.append(12);
  data.append(147);
  data.append(124);
  data.append(122);
 let result  = data.print()
 console.log("  "+ result+"  ")
 result = data.delete()

 console.log("  "+ result+"  ")
 result  = data.print()
 console.log("  "+ result+"  ")