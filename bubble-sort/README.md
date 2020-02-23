[back to the table of contents](../README.md)

## Bubble sort | O(n^2) - linear complexity
1. Bubble sort: first concept
* Go through the entire array and compare the current element with the next one.
* If it is larger than the next one, then rearrange them in places.
* If not more, increase the pointer and compare the following two elements.
* When we reach the end, we know that the largest element of the array is in the last position.
* Repeat the process N times (where N is the length of the array) and each time go through to the last sorted element.
```JavaScript
function bubbleSortConcept1(arr) {
    for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
}
```

2. Bubble sort: second concept
* Go through the entire array and compare the current element with the next one.
* If the current element is larger than the next one, change their places.
* We note that the exchange occurred.
* If the exchange occurred, go through the array from the beginning.
* We know that the array is sorted when there are no more exchanges.
```JavaScript
function bubbleSortConcept2(arr) {
    let swapped;
    do {
        swapped = false;
        arr.forEach((item, index) => {
            if (item > arr[index + 1]) {
                let temp = item;
                arr[index] = arr[index + 1];
                arr[index + 1] = temp;
                swapped = true;
            }
        });
    } while (swapped);

    return arr;
}
```