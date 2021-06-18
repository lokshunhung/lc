import { toTreeNode } from "lc/tools/tree-node";
import { preorderTraversal } from "./binary-tree-preorder-traversal";

test.each`
    root               | expectedOutput
    ${[1, null, 2, 3]} | ${[1, 2, 3]}
    ${[]}              | ${[]}
    ${[1]}             | ${[1]}
    ${[1, 2]}          | ${[1, 2]}
    ${[1, null, 2]}    | ${[1, 2]}
`("_($root) -> $expectedOutput", ({ root, expectedOutput }: any) => {
    let tRoot = toTreeNode(root);
    let result = preorderTraversal(tRoot);
    expect(result).toStrictEqual(expectedOutput);
});
