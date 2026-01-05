const a = [4, 1, 2];

for (let i = 0; i < a.length; i++) {
    // console.log(a[i]);
}
//Access 
// console.log("access", a[4]);

// update
// a[4] = 12;
// console.log("update", a[4]);

a.push(100); // add in end = 1,2,3,100
for (let i = 0; i < a.length; i++) {
    // console.log(a[i]);
}

a.pop(); // remove from end = 1,2,3
for (let i = 0; i < a.length; i++) {
    // console.log(a[i]);
}
a.unshift(4);// add in start = 11,1,2,3
for (let i = 0; i < a.length; i++) {
    // console.log(a[i]);
}
console.log('----------------');
a.shift()// remove from  start
// console.log(a.join(" "));


let res = '';
for (let i = 0; i < a.length; i++) {
res = Number(res) + a[i];
// res = res + " ";
}
console.log(res);