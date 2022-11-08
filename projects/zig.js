let row = 3;

let name = "Advait";
let ch = name.length;
let i = 0;
let j = 0;
let top = true;
let bot = false;
let pos = []; // ch number of arrays is present here
while (ch > 0) {
  if (top) {
    pos[ch - 1] = [i, j];
    ch--;
    if (j == row - 1) {
      bot = true;
      top = false;
      j--;
      i++;
    } else {
      j++;
    }
  } else if (bot) {
    pos[ch - 1] = [i, j];
    ch--;
    if (j == 0) {
      bot = false;
      top = true;
      j++;
    } else {
      j--;
      i++;
    }
  }
}
col = j+1;
pos = pos.reverse();
console.log(pos);
let outputstr = '';

// for(let m = 0; m < row; m++){
//   for(let n = 0; n < col; n++){
//     matrix.push([n , m]);
//   }
// }
// console.log(matrix);
for(let m = 0; m < row; m++){
  for(let n = 0; n < col; n++){
    for(let o = 0; o < pos.length; o++){
      if( JSON.stringify([n, m]) === JSON.stringify(pos[o])){
        outputstr += name[o];
      }
    }
  }
}
console.log(outputstr);