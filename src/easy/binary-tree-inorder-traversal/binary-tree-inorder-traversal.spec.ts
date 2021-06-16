import { toTreeNode } from "lc/tools/tree-node";
import { inorderTraversal } from "./binary-tree-inorder-traversal";

test.each`
    root                           | expectedOutput
    ${[1, null, 2, null, null, 3]} | ${[1, 3, 2]}
    ${[]}                          | ${[]}
    ${[1]}                         | ${[1]}
    ${[1, 2]}                      | ${[2, 1]}
    ${[1, null, 2]}                | ${[1, 2]}
`("_($root) -> $expectedOutput", ({ root, expectedOutput }: any) => {
    let tRoot = toTreeNode(root);
    let result = inorderTraversal(tRoot);
    expect(result).toStrictEqual(expectedOutput);
});
