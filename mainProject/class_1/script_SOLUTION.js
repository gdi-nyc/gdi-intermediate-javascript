// Create a function called "randomItem" that takes 1 argument: an array. The function should return a random item from the given array
const randomItem = function (arr) {
    const randNum = Math.random();
    const randIndex = Math.floor(randNum * arr.length);
    return arr[randIndex];
}

// Create a function called "randomizeArray" that takes an array as an argument
// and returns a new array where items from the given array are randomly 
// scattered. This new array should be the same length as the one given.
// For example:
// randomizeArray([1,2,3,4,5]) might return [4,3,1,5,2];

// HINT: consider using Math.random(), Math.floor(), Array.prototype.splice(), Array.prototype.push();
const randomizeArray = arr => {
    const output = [];
    while (arr.length) {
        const randIndex = Math.floor(Math.random() * arr.length);
        output.push(arr.splice(randIndex, 1)[0]);
    }
    return output;
}