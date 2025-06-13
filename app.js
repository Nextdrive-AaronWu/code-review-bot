const { sortArray } = require("./src/utils/sort.js");

function main() {
    const arr = [5, 3, 8, 4, 2];
    console.log("Original array:", arr);
    
    const sortedArr = sortArray(arr);
    console.log("Sorted array:", sortedArr);
}

main();
