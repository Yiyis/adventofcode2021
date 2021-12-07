var fs = require("fs");
var text = fs.readFileSync("./input.txt").toString('utf-8');
var array = text
  .split("\n")
  .filter((x) => Boolean(x))
  .map((x) => parseInt(x));


let counter = 0;

for (var i = 1; i < array.length; i++) {
  const prev = array[i-1];
  const next = array[i];
  if (next>prev) {
    counter++;
  }
}

console.log(counter);
