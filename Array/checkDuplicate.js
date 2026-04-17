function checkDuplicate(arr, k) {

    let map = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in map) {
            if (i - map[arr[i]] <= k) {
                return "Yes"
            }

        }
        map[arr[i]] = i;

    }
    return "No"
}
console.log(checkDuplicate([1, 2, 3, 1, 4, 5], 3)); 