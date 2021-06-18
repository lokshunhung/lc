import { bubbleSort } from "./bubble-sort";

test("bubbleSort", () => {
    let input1 = [3, 8, 5, 2, 5, 7, 4, 1];
    let expected1 = Array.from(input1).sort();
    bubbleSort(input1);
    expect(input1).toStrictEqual(expected1);

    let input2 = [4, 1, 1, 2, 5, 4, 3, 6, 7, 8, 4, 4, 2];
    let expected2 = Array.from(input2).sort();
    bubbleSort(input2);
    expect(input2).toStrictEqual(expected2);

    let input3 = [4, 2, 5, 6, 1, 8, 4, 3];
    let expected3 = Array.from(input3).sort();
    bubbleSort(input3);
    expect(input3).toStrictEqual(expected3);
});
