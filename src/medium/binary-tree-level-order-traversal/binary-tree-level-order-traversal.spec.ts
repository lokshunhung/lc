import { toTreeNode } from "lc/tools/tree-node";
import { levelOrder } from "./binary-tree-level-order-traversal";

test.each`
    root                             | expectedOutput
    ${[3, 9, 20, null, null, 15, 7]} | ${[[3], [9, 20], [15, 7]]}
    ${[1]}                           | ${[[1]]}
    ${[]}                            | ${[]}
`("_($root) -> $expectedOutput", ({ root, expectedOutput }: any) => {
    let tRoot = toTreeNode(root);
    let result = levelOrder(tRoot);
    expect(result).toStrictEqual(expectedOutput);
});
