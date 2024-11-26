let values = [62, 31, 84, 96, 19, 47];
let count = new Array(values.length).fill(0); 

for (let i = 0; i < values.length - 1; i++) {
  for (let j = i + 1; j < values.length; j++) {
    if (values[i] < values[j]) {
      count[i] += 1; 
    } else {
      count[j] += 1;
    }
  }
}

let s = new Array(values.length);
for (let i = 0; i < values.length; i++) {
  s[count[i]] = values[i];
}

console.log(s);


