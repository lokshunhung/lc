import { toTreeNode } from "lc/tools/tree-node";
import { sumOfLeftLeaves } from "./sum-of-left-leaves";

test.each`
    root                             | expectedOutput
    ${[3, 9, 20, null, null, 15, 7]} | ${9 + 15}
    ${[1]}                           | ${0}
    ${[]}                            | ${0}
`("_($root) -> $expectedOutput", ({ root, expectedOutput }: any) => {
    let tRoot = toTreeNode(root);
    let result = sumOfLeftLeaves(tRoot);
    expect(result).toBe(expectedOutput);
});
