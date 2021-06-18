import { toTreeNode } from "lc/tools/tree-node";
import { postorderTraversal } from "./binary-tree-postorder-traversal";

test.each`
    root               | expectedOutput
    ${[1, null, 2, 3]} | ${[3, 2, 1]}
    ${[]}              | ${[]}
    ${[1]}             | ${[1]}
    ${[1, 2]}          | ${[2, 1]}
    ${[1, null, 2]}    | ${[2, 1]}
    ${[1, 2, 3, 4, 5]} | ${[4, 5, 2, 3, 1]}
`("_($root) -> $expectedOutput", ({ root, expectedOutput }: any) => {
    let tRoot = toTreeNode(root);
    let result = postorderTraversal(tRoot);
    expect(result).toStrictEqual(expectedOutput);
});
