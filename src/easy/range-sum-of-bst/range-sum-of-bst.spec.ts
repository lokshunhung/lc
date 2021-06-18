import { toTreeNode } from "lc/tools/tree-node";
import { rangeSumBST } from "./range-sum-of-bst";

test.each`
    root                                     | lo   | hi    | expectedOutput
    ${[10, 5, 15, 3, 7, null, 18]}           | ${7} | ${15} | ${32}
    ${[10, 5, 15, 3, 7, 13, 18, 1, null, 6]} | ${6} | ${10} | ${23}
`("_($root, $lo, $hi) -> $expectedOutput", ({ root, lo, hi, expectedOutput }: any) => {
    let tRoot = toTreeNode(root);
    let result = rangeSumBST(tRoot, lo, hi);
    expect(result).toBe(expectedOutput);
});
