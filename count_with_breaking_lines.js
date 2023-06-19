let line1 = "";
let line2 = "";
let line3 = "";
let line4 = "";
let j = 1;

for (let i = 1; i < 50; i++) {
    if (j === 1) {
        line1 += i + '\t';
    }
    else if (j === 2) {
        line2 += i + '\t';
    }
    else if (j === 3) {
        line3 += i + '\t';
    }
    else if (j === 4) {
        line4 += i + '\t';
        j = 0;
    } 
    j++;
}

console.log(line1);
console.log(line2);
console.log(line3);
console.log(line4);
