var fs = require("fs");
var text = fs.readFileSync("./input.txt").toString('utf-8');
var array = text
  .split("\n")
  .filter((x) => Boolean(x));

let h_pos = 0;
let depth = 0;


for (var i = 0; i < array.length; i++) {
 let new_array = array[i].split(" ").join("").split(/([0-9]+)/).filter(Boolean);
 new_number = parseInt(new_array[1]);
 switch(new_array[0]) {
   case "forward":
     h_pos += new_number;
     break;
   case "down":
     depth += new_number;
     break;
   case "up":
     depth -= new_number;
     break;
   default:
 }
}
console.log(h_pos*depth);
