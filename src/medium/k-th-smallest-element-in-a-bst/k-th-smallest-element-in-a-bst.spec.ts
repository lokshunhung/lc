import { toTreeNode, TreeNode } from "lc/tools/tree-node";
import { kthSmallest, kthSmallestIterative } from "./k-th-smallest-element-in-a-bst";

describe.each`
    name                      | fn
    ${"kthSmallest"}          | ${kthSmallest}
    ${"kthSmallestIterative"} | ${kthSmallestIterative}
`("$name", ({ fn }: Record<"fn", (root: TreeNode | null, k: number) => number>) => {
    test.each`
        root                              | k    | expectedOutput
        ${[3, 1, 4, null, 2]}             | ${1} | ${1}
        ${[5, 3, 6, 2, 4, null, null, 1]} | ${3} | ${3}
    `("_($root, $k) -> $expectedOutput", ({ root, k, expectedOutput }: any) => {
        let tRoot = toTreeNode(root);
        let result = fn(tRoot, k);
        expect(result).toBe(expectedOutput);
    });
});
