# Array sorting algorithms

## Quick sort | O(log n) - logarithmic complexity
1. Select the reference element. You can choose it randomly, mark it as the last or middle one — this will not affect the efficiency.
```JavaScript
    var centerDot = items[Math.floor(Math.random() * items.length)];
```
2. Set the pointer (left pointer) from the first element in the array.
3. Set the pointer (right pointer) from the last element in the array.
4. On each iteration, we perform the following actions:
    4. Calculate the index of the middle reference element;
    4. Select two indexes `left` and `right` equal to the leftmost and rightmost elements of the input array;
    4. Increment `left` sequentially until the element with index `left` is greater than or equal to the reference element;
    4. Reduce `right` sequentially until the element with index `right` is less than or equal to the reference element;
    4. If the `right` pointer is less than or equal to the `left` pointer, change the values in these places in the array.
    4. Move the `left` pointer to the `right` one position and the right pointer one position to the left
    4. If the `left` pointer and `right` pointer do not meet, go to step 1.
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
5. If there are two or more elements in an array, it is "split". If `left` is less than the returned `index` minus one, then there are still elements to sort on the left, and the quickSort()function is called for them recursively.
6. Similarly, if `index` is smaller than the right pointer, the items on the right are sorted. Once all this is done, the array is returned as a result.
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
}
```