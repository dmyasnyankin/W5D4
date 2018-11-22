// Array method unique

Array.prototype.uniq = function() {
  let uniqArr = [];

  for (let i = 0; i < this.length; i++) {
    if (uniqArr.indexOf(this[i]) === -1) {
      uniqArr.push(this[i]);
    }
  }
  return uniqArr
}
const a = [1,2,3,3]
console.log(a.uniq())

// Array method twoSum
Array.prototype.twoSum = function() {
    const pairs = [];

    for (let i = 0; i < this.length; i++) {
      for (let j = (i + 1); j < this.length; j++) {
        if (this[i] + this[j] === 0) {
          pairs.push([i, j]);
        }
      }
    }

    return pairs;
  };


console.log([1, 0, -1, 3, 2, 4, -3, 0].twoSum ())
// function dubSum(num1, num2) {
//   return num1 + num2;
// }
//
// for (let i = 0; i < this.length; i++) {
//   for (let j = this.length - 1; i >= 0; i--) {
//     if dubSum(this[i], this[j]) === 0 {
//       pairs.push([this[i], this[j]])
//     }
//   }
// }
// return pairs
// Array method transpose


// let dog = 'Rex'
//
// if (dog) {
//   let dog = 'Matt'
//   console.log(`${dog} barks`)
//   console.log(dog)
// }
//
// console.log(dog)
