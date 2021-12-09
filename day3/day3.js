var fs = require("fs");
var text = fs.readFileSync("./sampleinput.txt").toString('utf-8');
var array = text
  .split("\n")
  .filter((x) => Boolean(x));

var new_array = [];
var text_array = [];
var another_array = [];

for (var i = 0; i < array.length; i++) {
 new_array[i] = array[i].toString().split('');
}

var single_length = new_array[0].length;

const res = new_array.map(x => x.map(a => a[0])).flat(2);

for (var i = 0; i < single_length; i++) {
 text_array[i] = res.filter((element, index) => {
   return index % single_length === i;
 })
}


function mode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}

for (var i = 0; i < text_array.length; i++) {
 another_array[i]=mode(text_array[i])
}

var gamma_rate = another_array.join("");


console.log(gamma_rate);
