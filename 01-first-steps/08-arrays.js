let shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping)

console.log(shopping[0])
shopping[0] = 'tahini'
console.log(shopping)
let random = ['tree', 795, [0, 1, 2]]
console.log(random[2][2])

console.log(shopping.length)
let sequence = [1, 1, 2, 3, 5, 8, 13]
for (let i = 0; i < sequence.length; i++) {
  console.log(sequence[i]);
}

let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
let myArray = myData.split(',')
console.log(myArray)
console.log(myArray.length, myArray[0], myArray[1], myArray[myArray.length - 1])
let myNewString = myArray.join(',')
console.log(myNewString)
let dogNames = ['Rocket','Flash','Bella','Slugger'];
console.log(dogNames.toString())

myArray.push('Cardiff')
console.log(myArray)
myArray.push('Bradford', 'Brighton')
console.log(myArray)
let newLength = myArray.push('Bristol');
console.log(myArray, newLength)
let removedItem = myArray.pop();
console.log(myArray, removedItem)
myArray.unshift('Edinburgh')
console.log(myArray)
removedItem = myArray.shift()
console.log(myArray, removedItem)
