import { mergeSort } from "./merge-sort";

test("mergeSort", () => {
    let input1 = [3, 8, 5, 2, 5, 7, 4, 1];
    let expected1 = Array.from(input1).sort();
    let result1 = mergeSort(input1);
    expect(result1).toStrictEqual(expected1);

    let input2 = [4, 1, 1, 2, 5, 4, 3, 6, 7, 8, 4, 4, 2];
    let expected2 = Array.from(input2).sort();
    let result2 = mergeSort(input2);
    expect(result2).toStrictEqual(expected2);

    let input3 = [4, 2, 5, 6, 1, 8, 4, 3];
    let expected3 = Array.from(input3).sort();
    let result3 = mergeSort(input3);
    expect(result3).toStrictEqual(expected3);
});
