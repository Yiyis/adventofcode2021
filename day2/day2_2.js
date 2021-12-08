var fs = require("fs");
var text = fs.readFileSync("./input.txt").toString('utf-8');
var array = text
  .split("\n")
  .filter((x) => Boolean(x));

let h_pos = 0;
let depth = 0;
let aim = 0;
let store_aim = [];
store_aim[-1] = 0;

for (var i = 0; i < array.length; i++) {
 let new_array = array[i].split(" ").join("").split(/([0-9]+)/).filter(Boolean);
 new_number = parseInt(new_array[1]);
 switch(new_array[0]) {
   case "forward":
     h_pos += new_number;
     store_aim[i] = store_aim[i-1];
     increase = parseInt(store_aim[i]) * new_number;
     depth += increase;
     break;
   case "down":
     aim += new_number;
     store_aim[i] = aim;
     break;
   case "up":
     aim -= new_number;
     store_aim[i] = aim;
     break;
   default:
 }
}
console.log(h_pos*depth);
