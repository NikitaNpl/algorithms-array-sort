# Array sorting algorithms

## Quick sort | O(n log n) - logarithmic complexity
1. Select the reference element. You can choose it randomly, mark it as the last or middle one — this will not affect the efficiency.
```JavaScript
    var centerDot = items[Math.floor(Math.random() * items.length)];
```
2. Set the pointer (left pointer) from the first element in the array.
3. Set the pointer (right pointer) from the last element in the array.
4. On each iteration, we perform the following actions: 
    1. Calculate the index of the middle reference element; 
    2. Select two indexes `left` and `right` equal to the leftmost and rightmost elements of the input array;
    3. Increment `left` sequentially until the element with index `left` is greater than or equal to the reference element;
    4. Reduce `right` sequentially until the element with index `right` is less than or equal to the reference element;
    5. If the `right` pointer is less than or equal to the `left` pointer, change the values in these places in the array.
    6. Move the `left` pointer to the `right` one position and the right pointer one position to the left;
    7. If the `left` pointer and `right` pointer do not meet, go to step 1.
```JavaScript
function partition(items, left, right) {

    var centerDot = items[Math.floor(Math.random() * items.length)],
        i         = left,
        j         = right;

    while(i <= j) {

        while(items[i] < centerDot) i++;
        while(items[j] > centerDot) j--;

        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}
```
5. If there are two or more elements in an array, it is "split". If `left` is less than the returned `index` minus one, then there are still elements to sort on the left, and the quickSort()function is called for them recursively. 5
6. Similarly, if `index` is smaller than the right pointer, the items on the right are sorted. Once all this is done, the array is returned as a result. 5
```JavaScript
function quickSort(items, left = 0, right = items.length - 1) {

    var index;

    if(items.length > 1) {
        index = partition(items, left, right);
        if(left < index - 1)
            quickSort(items, left, index - 1);
        if(index < right) 
            quickSort(items, index, right);
    }

    return items;
}
```

## Bubble sort | O(n^2) - quadratic complexity
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


## Merge Sort | O((n log n) + 1) - logarithmic complexity
1. Splitting the input data array into smaller ones, then splitting them again, and so on until there are no parts of the same element left;
```JavaScript
const mergeSort = arr => {
    if(!arr || !arr.length) return null;

    if(arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2);
    const arrLeft = arr.slice(0, middle);
    const arrRight = arr.slice(middle);

    return merge(mergeSort(arrLeft), mergeSort(arrRight));
};
```
2. Merging in the correct order (by default, we consider ascending sorting) all the small parts again into larger and larger ones and getting a single sorted array as a result.
```JavaScript
const merge = (arrFirst, arrSecond) => {
    const arrSort = [];
    let i = j = 0;

    while (i < arrFirst.length && j < arrSecond.length) {
        arrSort.push(
            (arrFirst[i] < arrSecond[j]) ?
                arrFirst[i++] : arrSecond[j++]
        );
    }

    return [
        ...arrSort,
        ...arrFirst.slice(i),
        ...arrSecond.slice(j)
    ];
};
```
