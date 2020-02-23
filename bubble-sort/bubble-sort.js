var bubbleItems1 = [4, 2, 6, 5, 3, 9];
var bubbleItems2 = [10, 3, 2, 5, 3, 9];

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

console.log(bubbleSortConcept1(bubbleItems1));
console.log(bubbleSortConcept2(bubbleItems2));