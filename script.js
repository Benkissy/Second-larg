// function to find the second largest number.
const arr = [12,38,5,13,26,10,48]
function getSecondLargest(arr) {
    let n = arr.length;

    arr.sort((a, b) => a - b);

    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] !== arr[n - 1]) {
            return arr[i];
        }
    }
    //if no second largest number was found,return -1.
    
    return -1;

}
console.log(getSecondLargest(arr));
document.getElementById('demo').innerHTML = getSecondLargest(arr);