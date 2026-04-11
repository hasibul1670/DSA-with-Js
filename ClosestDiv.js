// Given two integers n and m (m != 0). Find the number closest to n and divisible by m. If there is more than one such number, then output the one having maximum absolute value.
// Input: n = 13, m = 4
// Output: 12
// Explanation: 12 is the closest to 13, divisible by 4.

// Input: n = -15, m = 6
// Output: -18
// Explanation: Both -12 and -18 are closest to -15, but -18 has the maximum absolute value.
function ClosestDiv(n, m) {
    const a = n - (n % m);
    const b1 = a + m;
    const b2 = a - m;

    const d1 = Math.abs(n - a);
    const d2 = Math.abs(b1 - n);
    const d3 = Math.abs(n - b2);

    if (d1 < d2 && d1 < d3) {
        return a;
    } else if (d2 < d1 && d2 < d3) {
        return b1;
    } else {
        return b2;
    }
}

console.log(ClosestDiv(13, 4));


// START
//   ↓
// Input n, m
//   ↓
// Compute r = n % m
//   ↓
// Compute a = n - r   (first multiple)
//   ↓
// Compute b1 = a + m
// Compute b2 = a - m
//   ↓
// Compute distances:
// d1 = |n - a|
// d2 = |n - b1|
// d3 = |n - b2|
//   ↓
// Find minimum distance among d1, d2, d3
//   ↓
// Is only ONE number having minimum distance?
//   ↓           ↓
//  YES          NO (tie)
//  ↓             ↓
// Return that   Among tied numbers,
// number        choose one with
//               maximum |value|
//                  ↓
//               Return it
//   ↓
// END