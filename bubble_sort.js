'use strict'

function bubbleSort(items) {
  var length = items.length;
   for (let i = (length - 1); i >= 0; i--) {
       //Number of passes
       for (let j = (length - i); j > 0; j--) {
           //Compare the adjacent positions
           if (items[j] < items[j - 1]) {
               //Swap the numbers
               let tmp = items[j];
               items[j] = items[j - 1];
               items[j - 1] = tmp;
           }
       }
   }
   return items
}
// var array = [34, 203, 3, 746, 200, 984, 198, 764, 9];
// console.log(bubbleSort(array));

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

    let items = data.toString()
      .split("\r\n")

    console.log(filename)
    console.log("--------")
    console.log(bubbleSort(items))

  })
}

main()
