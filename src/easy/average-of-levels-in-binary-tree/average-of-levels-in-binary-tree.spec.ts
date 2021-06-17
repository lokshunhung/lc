import { toTreeNode } from "lc/tools/tree-node";
import { averageOfLevels } from "./average-of-levels-in-binary-tree";

test.each`
    root                       | expectedOutput
    ${[3, 9, 20, null, 15, 7]} | ${[3.0, 14.5, 11.0]}
    ${[3, 9, 20, 15, 7]}       | ${[3.0, 14.5, 11.0]}
    ${[]}                      | ${[]}
`("_($root) -> $expectedOutput", ({ root, expectedOutput }: any) => {
    let tRoot = toTreeNode(root);
    let result = averageOfLevels(tRoot);
    expect(result).toStrictEqual(expectedOutput);
});
