const NUMS = [1,2,3,4,5];

//myEach

Array.prototype.myEach = function (func) {
  for (let i = 0; i < this.length; i++) {
    func(this[i]);
  }
};

NUMS.myEach((num) => {
  console.log(`square of ${num} is ${num * num}`);
});

// Array#.myMap
Array.prototype.myMap = function (func) {
  const mappedArray = [];

  this.myEach(element => mappedArray.push(func(element)) );

  return mappedArray;
};

console.log(NUMS.myMap( num => num * num ));
//myReduce
