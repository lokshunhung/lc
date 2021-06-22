import { Node, toNode } from "./n-ary-tree-node";

test("toNode", () => {
    let input1: number[] = [];
    let result1 = toNode(input1);
    let expected1 = null;
    expect(result1).toBe(expected1);

    let input2 = [1];
    let result2 = toNode(input2);
    let expected2 = new Node(1);
    expect(result2).toStrictEqual(expected2);

    let input3 = [1, null, 2, 3];
    let result3 = toNode(input3);
    let expected3 = new Node(1);
    expected3.children.push(new Node(2), new Node(3));
    expect(result3).toStrictEqual(expected3);
});
