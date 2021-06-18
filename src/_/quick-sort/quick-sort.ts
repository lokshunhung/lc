function swap(arr: Array<number>, i: number, j: number): void {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function partition(arr: Array<number>, lo: number, hi: number): number {
    let pivot = arr[lo];
    // i points to rightmost element with value < pivot
    let i = lo;
    for (let j = lo + 1; j <= hi; ++j) {
        if (arr[j] < pivot) {
            ++i;
            swap(arr, i, j);
        }
    }
    swap(arr, lo, i);
    return i;
}

/**
 * @param arr array to be sorted
 * @param lo start index of array, inclusive
 * @param hi end index of array, inclusive
 */
export function quickSort(arr: Array<number>, lo: number = 0, hi: number = arr.length - 1): void {
    if (lo < hi) {
        let pivotI = partition(arr, lo, hi);
        quickSort(arr, lo, pivotI - 1);
        quickSort(arr, pivotI + 1, hi);
    }
}
