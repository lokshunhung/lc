function swap(arr: Array<number>, i: number, j: number): void {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

export function selectionSort(arr: Array<number>): void {
    for (let i = 0; i < arr.length; ++i) {
        let minI = i;
        for (let j = i; j < arr.length; ++j) {
            if (arr[j] < arr[minI]) {
                minI = j;
            }
        }
        swap(arr, i, minI);
    }
}
