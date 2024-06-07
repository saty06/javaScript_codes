// data 
// use let var const 
// var it is data  it is provid global data
var global = 10

// var is provid top hosting
console.log(VarData)

var VarData = 10
// in javascript there is 7 type  data type 
// var provid dublicate elemebnt 
var varData = 23
console.log(varData)
//  let is block code it is not provid to recreate element 
let LetData = 20
// let LetData = 49  do`t do that 
const constData = 20
// const data this is not correct way   const take define and declair both 
// 1 number
let a = 19
let b, c = 20  // it means the  and c=20 and b is not  define

console.table([a, b, c])// this  table print data in table from 
console.log(a, b, c)// this is console property to add space between them 
// (2) string  in java script string is a data type but in java it is consider a class
//  string is collection of char so any one can breck it in array
let str = "saty"
// string have many method so 
// 1 .length find the length of string the length counts 1 to n but index start  0 to n-1
console.log("String length", str.length)
// trim  to  remove the space 
let dataTrim = "    jay    "
console.log(" Trim", dataTrim.trim())
// trimEnd to remove left  space 
let strLeftTrim = " mumbai        "
console.log("leftTrim", strLeftTrim.trimEnd())
// trimRight
let strRighttrim = "      mumbai"
console.log(strRighttrim.trimStart())
// indexOf retun the index is the index is not present it return -1
let indexOfData = "mumbai"
let dataIndex = indexOfData.indexOf("t")// return - 1 becouse t is not present 
console.log(dataIndex)
// many method are there like replace reverse concat toLowerCase toUpperCase slice split splice
// null  data type 
let NullData = null// if check  data type , i will get object
console.log(typeof NullData);
// if you dont know data plese asign null data 
// boolen
let boolendata = true // boolen provid true and flase  it is work on 0 1  0 = flase 1  = true
// node if any  data will be worked with number boolen  return  true if data  is not zero
let ZeroData = 3
let BollenDataCheck = Boolean(ZeroData)
console.log(BollenDataCheck);// return true if i will work with string it return  true if string is not empaty
//  object
 let ObjectData = {
  name:" satya prakash singh",
  id: 144,
  company:"abc",
  salary:35000
 }
 console.log(ObjectData);