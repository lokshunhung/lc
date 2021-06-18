function merge(arr: Array<number>, lo: number, mid: number, hi: number): void {
    let a = arr.slice(lo, mid + 1);
    let b = arr.slice(mid + 1, hi + 1);
    let i = 0;
    let j = 0;
    let k = lo;
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            arr[k] = a[i];
            ++i;
            ++k;
        } else {
            arr[k] = b[j];
            ++j;
            ++k;
        }
    }
    while (i < a.length) {
        arr[k] = a[i];
        ++i;
        ++k;
    }
    while (j < b.length) {
        arr[k] = b[j];
        ++j;
        ++k;
    }
}

export function mergeSort(arr: Array<number>, lo: number = 0, hi: number = arr.length - 1): void {
    if (lo < hi) {
        let mid = ~~((lo + hi) / 2);
        mergeSort(arr, lo, mid);
        mergeSort(arr, mid + 1, hi);
        merge(arr, lo, mid, hi);
    }
}
