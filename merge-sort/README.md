[back to the table of contents](../README.md)

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
