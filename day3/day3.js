var fs = require("fs");
var text = fs.readFileSync("./sampleinput.txt").toString('utf-8');
var array = text
  .split("\n")
  .filter((x) => Boolean(x));

var new_array = [];
var row_1 = [];
var row_2 = [];
var row_3 = [];
var row_4 = [];
var row_5 = [];


for (var i = 0; i < array.length; i++) {
 new_array[i] = array[i].toString().split('');
}

var single_length = new_array[0].length;

for (var i = 0; i < new_array.length; i++) {
  row_1[i] = new_array[i][0];
  row_2[i] = new_array[i][1];
  row_3[i] = new_array[i][2];
  row_4[i] = new_array[i][3];
  row_5[i] = new_array[i][4];
  // for (var j = 0; j < single_length; j++) {
  // }
}

function mode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}

var gamma_rate = mode(row_1) + mode(row_2) + mode(row_3)+ mode(row_4)+  mode(row_5);


console.log(gamma_rate);
