import { toTreeNode } from "lc/tools/tree-node";
import { kthSmallest } from "./k-th-smallest-element-in-a-bst";

test.each`
    root                              | k    | expectedOutput
    ${[3, 1, 4, null, 2]}             | ${1} | ${1}
    ${[5, 3, 6, 2, 4, null, null, 1]} | ${3} | ${3}
`("_($root, $k) -> $expectedOutput", ({ root, k, expectedOutput }: any) => {
    let tRoot = toTreeNode(root);
    let result = kthSmallest(tRoot, k);
    expect(result).toBe(expectedOutput);
});
