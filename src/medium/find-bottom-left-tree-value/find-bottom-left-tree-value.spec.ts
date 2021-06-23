import { toTreeNode } from "lc/tools/tree-node";
import { findBottomLeftValue } from "./find-bottom-left-tree-value";

test.each`
    root                                       | expectedOutput
    ${[2, 1, 3]}                               | ${1}
    ${[1, 2, 3, 4, null, 5, 6, null, null, 7]} | ${7}
    ${[1, null, 1]}                            | ${1}
`("_($root) -> $expectedOutput", ({ root, expectedOutput }: any) => {
    let tRoot = toTreeNode(root);
    let result = findBottomLeftValue(tRoot);
    expect(result).toBe(expectedOutput);
});
