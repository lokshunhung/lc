import { toTreeNode } from "lc/tools/tree-node";
import { isCousins } from "./cousins-in-binary-tree";

test.each`
    root                           | x    | y    | expectedOutput
    ${[1, 2, 3, 4]}                | ${4} | ${3} | ${false}
    ${[1, 2, 3, null, 4, null, 5]} | ${5} | ${4} | ${true}
    ${[1, 2, 3, null, 4]}          | ${2} | ${3} | ${false}
`("_($root, $x, $y) -> $expectedOutput", ({ root, x, y, expectedOutput }: any) => {
    let tRoot = toTreeNode(root);
    let result = isCousins(tRoot, x, y);
    expect(result).toBe(expectedOutput);
});
