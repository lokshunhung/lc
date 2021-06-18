import { toTreeNode } from "lc/tools/tree-node";
import { sumNumbers } from "./sum-root-to-leaf-numbers";

test.each`
    root                     | expectedOutput
    ${[1, 2, 3]}             | ${12 + 13}
    ${[4, 9, 0, 5, 1]}       | ${495 + 491 + 40}
    ${[]}                    | ${0}
    ${[1, 2, 3, 4, null, 5]} | ${124 + 135}
`("_($root) -> $expectedOutput", ({ root, expectedOutput }: any) => {
    let tRoot = toTreeNode(root);
    let result = sumNumbers(tRoot);
    expect(result).toBe(expectedOutput);
});
