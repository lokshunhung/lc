import { toTreeNode } from "lc/tools/tree-node";
import { smallestFromLeaf } from "./smallest-string-starting-from-leaf";

test.each`
    root                                           | expectedOutput
    ${[0, 1, 2, 3, 4, 3, 4]}                       | ${"dba"}
    ${[25, 1, 3, 1, 3, 0, 2]}                      | ${"adz"}
    ${[2, 2, 1, null, 1, 0, null, 0]}              | ${"abc"}
    ${[]}                                          | ${""}
    ${[0, null, 1]}                                | ${"ba"}
    ${[25, 1, null, 0, 0, 1, null, null, null, 0]} | ${"ababz"}
`("_($root) -> $expectedOutput", ({ root, expectedOutput }: any) => {
    let tRoot = toTreeNode(root);
    let result = smallestFromLeaf(tRoot);
    expect(result).toBe(expectedOutput);
});
