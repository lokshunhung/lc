import { toTreeNode } from "lc/tools/tree-node";
import { levelOrderBottom } from "./binary-tree-level-order-traversal-ii";

test.each`
    root                             | expectedOutput
    ${[3, 9, 20, null, null, 15, 7]} | ${[[15, 7], [9, 20], [3]]}
    ${[1]}                           | ${[[1]]}
    ${[]}                            | ${[]}
`("_($root) -> $expectedOutput", ({ root, expectedOutput }: any) => {
    let tRoot = toTreeNode(root);
    let result = levelOrderBottom(tRoot);
    expect(result).toStrictEqual(expectedOutput);
});
