function compareNumbers(a,b) {
  return a-b;
}

var ages = [83, 53, 37,
            29, 60, 30,
            66, 19, 59,
            41, 9, 64,
            19, 80, 24,
            53, 70, 1,
            53, 40, 92,
            4, 71, 65,
            8, 2, 51,
            80, 94, 37,
            80, 64, 19,
            6, 14];

ages.sort(compareNumbers)

console.log(ages);

var median = ages[(ages.length-1)/2]
console.log(median);
