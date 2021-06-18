function swap(arr: Array<number>, i: number, j: number): void {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

export function bubbleSort(arr: Array<number>): void {
    for (let i = 0; i < arr.length - 1; ++i) {
        for (let j = i; j < arr.length; ++j) {
            if (arr[i] > arr[j]) {
                swap(arr, i, j);
            }
        }
    }
}
