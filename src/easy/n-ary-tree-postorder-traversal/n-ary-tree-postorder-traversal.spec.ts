import { postorder } from "./n-ary-tree-postorder-traversal";

test.todo("n-ary-tree-postorder-traversal");
// test.each`
//     root                                                                                                                 | expectedOutput
//     ${[1, null, 3, 2, 4, null, 5, 6]}                                                                                    | ${[5, 6, 3, 2, 4, 1]}
//     ${[1, null, 2, 3, 4, 5, null, null, 6, 7, null, 8, null, 9, 10, null, null, 11, null, 12, null, 13, null, null, 14]} | ${[2, 6, 14, 11, 7, 3, 12, 8, 4, 13, 9, 10, 5, 1]}
// `("_($root) -> $expectedOutput", ({ root, expectedOutput }: any) => {
//     let tRoot = toNode(root);
//     let result = postorder(tRoot);
//     expect(result).toStrictEqual(expectedOutput);
// });
