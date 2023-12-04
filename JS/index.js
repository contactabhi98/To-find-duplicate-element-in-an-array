function findDuplicateElement(arr) {
    let duplicateElement = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] === arr[j] && !duplicateElement.includes(arr[j])) {
                duplicateElement.push(arr[j]);
            }
        }
    }
    return duplicateElement;
}
const myArray = [5, 2, 15, 10, 4, 1, 16, 17, 15];
console.log(findDuplicateElement(myArray));