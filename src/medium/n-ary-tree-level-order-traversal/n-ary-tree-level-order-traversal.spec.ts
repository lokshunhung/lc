import { levelOrder } from "./n-ary-tree-level-order-traversal";

test.todo("n-ary-tree-level-order-traversal");
// test.each([
//     [
//         [1, null, 3, 2, 4, null, 5, 6],
//         [[1], [3, 2, 4], [5, 6]],
//     ],
//     [
//         // prettier-ignore
//         [1, null, 2, 3, 4, 5, null, null, 6, 7, null, 8, null, 9, 10, null, null, 11, null, 12, null, 13, null, null, 14],
//         [[1], [2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13], [14]],
//     ],
// ])("_($root) -> $expectedOutput", ({ root, expectedOutput }: any) => {
//     let tRoot = toNode(root);
//     let result = levelOrder(tRoot);
//     expect(result).toStrictEqual(expectedOutput);
// });
