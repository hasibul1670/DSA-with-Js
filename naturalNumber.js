function naturalNumber(n) {
    var sum;
    for (let i = 1; i <= n; i++) {
        sum = +i;
    }
    return sum;
}

console.log(naturalNumber(5));