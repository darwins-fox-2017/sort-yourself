'use strict'

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr
  }

  let middleValues = Math.floor(arr.length)/2
  let left         = arr.slice(0, middleValues)
  let right        = arr.slice(middleValues, arr.length)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let result = []

  while (left.length && right.length) {
    if(left[0] <= right[0]){
      result.push(left.shift())
    }else {
      result.push(right.shift())
    }
  }
  while (left.length ) {
    result.push(left.shift())
  }

  while (right.length) {
    result.push(right.shift())
  }
  return result
}
var array = [34, 203, 3, 746, 200, 984, 198, 764, 9];
console.log(mergeSort(array));

// Driver code
// function main() {
//
//   sort_from_file('random_wordlist.txt')
//   sort_from_file('reversed_wordlist.txt')
//   sort_from_file('sorted_wordlist.txt')
//
// }
//
// function sort_from_file(filename) {
//   let fs = require('fs')
//
//   fs.readFile(filename, (err, data) => {
//
//     if (err)
//       return console.log(err)
//
//     let items = data.toString()
//       .split("\r\n")
//
//     console.log(filename)
//     console.log("--------")
//     console.log(mergeSort(items))
//
//   })
// }

// main()
