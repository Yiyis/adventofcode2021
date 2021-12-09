var fs = require("fs");
var text = fs.readFileSync("./input.txt").toString('utf-8');
var array = text
  .split("\n")
  .filter((x) => Boolean(x));

var new_array = [];
var singular_array = [];
var gamma_array = [];
var epsilon_array = [];

for (var i = 0; i < array.length; i++) {
 new_array[i] = array[i].toString().split('');
}

var single_length = new_array[0].length;

const res = new_array.map(x => x.map(a => a[0])).flat(2);

for (var i = 0; i < single_length; i++) {
 singular_array[i] = res.filter((element, index) => {
   return index % single_length === i;
 })
}


function mode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}

for (var i = 0; i < singular_array.length; i++) {
 gamma_array[i]=mode(singular_array[i])
}

var gamma_rate = gamma_array.join("");

for (var i = 0; i < gamma_array.length; i++) {
 epsilon_array[i] = 1 - parseInt(gamma_array[i]);
}

var epsilon_rate = epsilon_array.join("");

console.log(parseInt(gamma_rate, 2)*parseInt(epsilon_rate, 2));
