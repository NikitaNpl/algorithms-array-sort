const arrMerge = [1, 4, 5, 2, 5, 7, 3, 10, 6];

const merge = (arrFirst, arrSecond) => {
    const arrSort = [];
    let i = j = 0;

    //  compare two arrays of alternately shifting the pointers
    while (i < arrFirst.length && j < arrSecond.length) {
        arrSort.push(
            (arrFirst[i] < arrSecond[j]) ?
                arrFirst[i++] : arrSecond[j++]
        );
    }

    // processing the last element with different array lengths
    // and return a single sorted array
    return [
        ...arrSort,
        ...arrFirst.slice(i),
        ...arrSecond.slice(j)
    ];
};

const mergeSort = arr => {
    if(!arr || !arr.length) return null;

    if(arr.length <= 1) return arr;

    // find the middle of the array and divide it into two
    const middle = Math.floor(arr.length / 2);
    const arrLeft = arr.slice(0, middle);
    const arrRight = arr.slice(middle);

    // for new arrays, call sorting again,
    // merge them and return a single array again
    return merge(mergeSort(arrLeft), mergeSort(arrRight));
};

console.log(mergeSort(arrMerge));