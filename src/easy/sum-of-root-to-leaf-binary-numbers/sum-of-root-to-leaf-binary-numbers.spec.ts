import { toTreeNode } from "lc/tools/tree-node";
import { sumRootToLeaf } from "./sum-of-root-to-leaf-binary-numbers";

test.each`
    root                     | expectedOutput
    ${[1, 0, 1, 0, 1, 0, 1]} | ${4 + 5 + 6 + 7}
    ${[0]}                   | ${0}
    ${[1]}                   | ${1}
    ${[1, 1]}                | ${3}
`("_($root) -> $expectedOutput", ({ root, expectedOutput }: any) => {
    let tRoot = toTreeNode(root);
    let result = sumRootToLeaf(tRoot);
    expect(result).toBe(expectedOutput);
});
