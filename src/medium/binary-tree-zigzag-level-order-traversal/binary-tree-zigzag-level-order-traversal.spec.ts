import { toTreeNode } from "lc/tools/tree-node";
import { zigzagLevelOrder } from "./binary-tree-zigzag-level-order-traversal";

test.each`
    root                             | expectedOutput
    ${[3, 9, 20, null, null, 15, 7]} | ${[[3], [20, 9], [15, 7]]}
    ${[1]}                           | ${[[1]]}
    ${[]}                            | ${[]}
    ${[1, 2, 3, 4, 5, 6]}            | ${[[1], [3, 2], [4, 5, 6]]}
`("_($root) -> $expectedOutput", ({ root, expectedOutput }: any) => {
    let tRoot = toTreeNode(root);
    let result = zigzagLevelOrder(tRoot);
    expect(result).toStrictEqual(expectedOutput);
});
