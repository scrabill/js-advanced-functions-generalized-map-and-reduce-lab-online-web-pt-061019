// Add your functions here

// function whomp(array) {
//   return array * -1
// }

function map(array, callback) {

  let newArray = []

  array.forEach((item, i) => {
    newArray.push(callback(item))
  });

  return newArray
}

function reduce(array, cb, startingValue) {

  let total = 0

  if (!!startingValue) {
    total = startingValue
  }

  array.forEach((item, i) => {
    total = total + item
  });

  return total

}
