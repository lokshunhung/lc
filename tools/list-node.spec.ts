import { ListNode, toArray, toListNode } from "lc/tools/list-node";

test("toListNode", () => {
    let input1: number[] = [];
    let result1 = toListNode(input1);
    let expected1 = null;
    expect(result1).toBe(expected1);

    let input2 = [1];
    let result2 = toListNode(input2);
    let expected2 = new ListNode(1);
    expect(result2).toStrictEqual(expected2);

    let input3 = [1, 2, 3];
    let result3 = toListNode(input3);
    let expected3 = new ListNode(1, new ListNode(2, new ListNode(3)));
    expect(result3).toStrictEqual(expected3);
});

test("toArray", () => {
    let input1 = null;
    let result1 = toArray(input1);
    let expected1: number[] = [];
    expect(result1).toStrictEqual(expected1);

    let input2 = new ListNode(1);
    let result2 = toArray(input2);
    let expected2 = [1];
    expect(result2).toStrictEqual(expected2);

    let input3 = new ListNode(1, new ListNode(2, new ListNode(3)));
    let result3 = toArray(input3);
    let expected3 = [1, 2, 3];
    expect(result3).toStrictEqual(expected3);
});
