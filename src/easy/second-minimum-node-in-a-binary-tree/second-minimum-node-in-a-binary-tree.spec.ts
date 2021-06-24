import { toTreeNode } from "lc/tools/tree-node";
import { findSecondMinimumValue } from "./second-minimum-node-in-a-binary-tree";

test.each`
    root                                                               | expectedOutput
    ${[2, 2, 5, null, null, 5, 7]}                                     | ${5}
    ${[2, 2, 2]}                                                       | ${-1}
    ${[]}                                                              | ${-1}
    ${[5, 8, 5]}                                                       | ${8}
    ${[1, 1, 3, 1, 1, 3, 4, 3, 1, 1, 1, 3, 8, 4, 8, 3, 3, 1, 6, 2, 1]} | ${2}
`("_($root) -> $expectedOutput", ({ root, expectedOutput }: any) => {
    let tRoot = toTreeNode(root);
    let result = findSecondMinimumValue(tRoot);
    expect(result).toBe(expectedOutput);
});
