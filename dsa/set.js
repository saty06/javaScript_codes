let data = [2,3,4,5,6,12,2,3,]
let newData = new Set(data)
console.log(newData)
/// add data
newData.add(0)// add the data i the set 
/// has to return data boolen data true and false
console.log(newData.has(2))
newData.delete(2)
console.log(newData)
newData.clear()
console.log(newData)
