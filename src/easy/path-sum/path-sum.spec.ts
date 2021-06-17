import { toTreeNode } from "lc/tools/tree-node";
import { hasPathSum } from "./path-sum";

test.each`
    root                                                     | targetSum | expectedOutput
    ${[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]} | ${22}     | ${true}
    ${[1, 2, 3]}                                             | ${5}      | ${false}
    ${[1, 2]}                                                | ${0}      | ${false}
    ${[]}                                                    | ${0}      | ${false}
    ${[1, 2]}                                                | ${1}      | ${false}
    ${[1, 2, 3]}                                             | ${4}      | ${true}
`("_($root, $targetSum) -> $expectedOutput", ({ root, targetSum, expectedOutput }) => {
    let tRoot = toTreeNode(root);
    let result = hasPathSum(tRoot, targetSum);
    expect(result).toBe(expectedOutput);
});
