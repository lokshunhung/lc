function swap(arr: Array<number>, i: number, j: number): void {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

export function insertionSort(arr: Array<number>): void {
    for (let i = 1; i < arr.length; ++i) {
        let val = arr[i];
        let j: number;
        for (j = i - 1; j >= 0 && arr[j] > val; --j) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = val;
    }
}
