var fs = require("fs");
var text = fs.readFileSync("./input.txt").toString('utf-8');
var array = text
  .split("\n")
  .filter((x) => Boolean(x))
  .map((x) => parseInt(x));


let counter = 0;
let sum = [];

for (var i = 2; i < array.length; i++) {
  sum[i+1] = array[i-2] + array[i-1] + array[i]
}

for (var j = 4; j < sum.length; j++) {
  const prev = sum[j-1];
  const next = sum[j];
  if (next>prev) {
    counter++;
  }
}

console.log(counter);
