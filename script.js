const ainmals = ["Dog", "Cat", "Lion"];
const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];

function removeItem(array, index) {
  if (index > 0) {
    const arrayCopy = structuredClone(array);
    arrayCopy.splice(index - 1, 1);
    return arrayCopy;
  } else {
    console.log("Index must be greater than 0");
    return array;
  }
}
console.log(removeItem(ainmals, 1));
// result should be: ["Cat", "Lion"]

console.log(ainmals);
// result should be still: ["Dog", "Cat", "Lion"]

console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]
