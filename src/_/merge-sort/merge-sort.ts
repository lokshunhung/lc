function merge(a: Array<number>, b: Array<number>): Array<number> {
    let result: Array<number> = [];
    let i = 0;
    let j = 0;
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            result.push(a[i]);
            ++i;
        } else {
            result.push(b[j]);
            ++j;
        }
    }
    while (i < a.length) {
        result.push(a[i]);
        ++i;
    }
    while (j < b.length) {
        result.push(b[j]);
        ++j;
    }
    return result;
}

export function mergeSort(arr: Array<number>): Array<number> {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = ~~(arr.length / 2);
    let a = mergeSort(arr.slice(0, mid));
    let b = mergeSort(arr.slice(mid, arr.length));
    return merge(a, b);
}
