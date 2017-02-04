'use strict'

function selectionSort(arrays){
  let min = 0

  for (let i = 0; i < arrays.length; i++) {
    min = i
    for (let j = i + 1; j < arrays.length; j++) {
      if (arrays[j] < arrays[min]) {
        min = j
      }
    }

    let resultTemp = ""
    if (i != min) {
      let resultTemp  = arrays[i]
          arrays[i]   = arrays[min]
          arrays[min] = resultTemp
    }
  }
  return arrays
}

// var array = [34, 203, 3, 746, 200, 984, 198, 764, 9];
// console.log(selectionSort(array));

// Driver code
function main() {

  sort_from_file('random_wordlist.txt')
  sort_from_file('reversed_wordlist.txt')
  sort_from_file('sorted_wordlist.txt')

}

function sort_from_file(filename) {
  let fs = require('fs')

  fs.readFile(filename, (err, data) => {

    if (err)
      return console.log(err)

    let items = data.toString().split("\r\n")

    console.log(filename)
    console.log("--------")
    console.log(selectionSort(items))

  })
}

main()
