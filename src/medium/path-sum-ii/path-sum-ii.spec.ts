import { toTreeNode } from "lc/tools/tree-node";
import { pathSum } from "./path-sum-ii";

test.each`
    root                                                  | targetSum | expectedOutput
    ${[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]} | ${22}     | ${[[5, 4, 11, 2], [5, 8, 4, 5]]}
    ${[1, 2, 3]}                                          | ${5}      | ${[]}
    ${[1, 2]}                                             | ${0}      | ${[]}
`("_($root, $targetSum) -> $expectedOutput", ({ root, targetSum, expectedOutput }) => {
    let tRoot = toTreeNode(root);
    let result = pathSum(tRoot, targetSum);
    expect(result).toStrictEqual(expectedOutput);
});
