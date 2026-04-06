// [12, 5, 8, 3, 15, 7]
// 📌 Task:
// Apply the Insertion Sort algorithm to sort the array in ascending order.
// Show the array after each pass/iteration of the algorithm.
// Clearly indicate:
// Which element you are inserting
// Where it is being placed

// Pass 1: [5, 12, 8, 3, 15, 7]
// Pass 2: [5, 8, 12, 3, 15, 7]


// start from index 1

// for each element in array:
//     take current element

//     compare it with left side elements

//     while left element is bigger:
//         shift left element to right

//     place current element in correct position


// FOR i = 1 to n-1:
//     current = arr[i]
//     j = i - 1

//     WHILE j >= 0 AND arr[j] > current:
//         arr[j + 1] = arr[j]
//         j = j - 1

//     arr[j + 1] = current


const arr = [12, 5, 8, 3, 15, 7];

console.log("Start:", arr.join(" "));

for (let i = 1; i < arr.length; i++) {
    let current = arr[i];   // number we want to place
    let j = i - 1;

    // move bigger elements one step right
    while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
    }

    // place the number in correct position
    arr[j + 1] = current;

    console.log("Pass", i, ":", arr.join(" "));
}
