a = [1,3,5,9,13]
b = [2,3,7]


var merge = function(arr1, arr2) {

  ordered = []

  var smArr = left.length < right.length ? left : right
  var

  // for (var i = 0; i < loops; i++) {
  //   ordered.push(left[i] < right[i] ? left[i] : right[i])
  // }
  var i = 0
  smArr.forEach(function(num, idx) {
    if(num < right[i]) {
      ordered.push(left.splice(0))
    } else {
      ordered.push(right.splice(0))
      i += 1
    }
  })

  return ordered.concat(left).concat(right);

}

// console.log(a);

console.log(merge(a,b));
