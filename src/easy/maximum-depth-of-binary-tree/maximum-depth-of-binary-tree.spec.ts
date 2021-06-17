import { toTreeNode } from "lc/tools/tree-node";
import { maxDepth } from "./maximum-depth-of-binary-tree";

test.each`
    root                             | expectedOutput
    ${[3, 9, 20, null, null, 15, 7]} | ${3}
    ${[1, null, 2]}                  | ${2}
    ${[]}                            | ${0}
    ${[0]}                           | ${1}
`("_($root) -> $expectedOutput", ({ root, expectedOutput }: any) => {
    let tRoot = toTreeNode(root);
    let result = maxDepth(tRoot);
    expect(result).toBe(expectedOutput);
});
