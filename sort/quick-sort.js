var quickItems = [4, 2, 6, 5, 3, 9];


// for swapping two elements int the array
function swap(items, firstIndex, secondIndex) {
    const temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

// for finding the center dot
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


// final function
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

console.log(quickSort(quickItems));