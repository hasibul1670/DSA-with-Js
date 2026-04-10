function naturalNumberR(n) {
    if (n == 0) {
        return 0;
    }
    return n + naturalNumberR(n - 1);

}

console.log(naturalNumberR(5));