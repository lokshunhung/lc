import { toTreeNode } from "lc/tools/tree-node";
import { minDepth } from "./minimum-depth-of-binary-tree";

test.each`
    root                                       | expectedOutput
    ${[3, 9, 20, null, null, 15, 7]}           | ${2}
    ${[2, null, 3, null, 4, null, 5, null, 6]} | ${5}
    ${[]}                                      | ${0}
`("_($root) -> $expectedOutput", ({ root, expectedOutput }: any) => {
    let tRoot = toTreeNode(root);
    let result = minDepth(tRoot);
    expect(result).toBe(expectedOutput);
});
