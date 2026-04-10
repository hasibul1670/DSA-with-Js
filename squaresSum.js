function squaresSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i * i;
    }
    return sum;
}
console.log(squaresSum(8));