import { toTreeNode } from "lc/tools/tree-node";
import { isBalanced } from "./balanced-binary-tree";

test.each`
    root                                 | expectedOutput
    ${[3, 9, 20, null, null, 15, 7]}     | ${true}
    ${[1, 2, 2, 3, 3, null, null, 4, 4]} | ${false}
    ${[]}                                | ${true}
`("_($root) -> $expectedOutput", ({ root, expectedOutput }: any) => {
    let tRoot = toTreeNode(root);
    let result = isBalanced(tRoot);
    expect(result).toBe(expectedOutput);
});
