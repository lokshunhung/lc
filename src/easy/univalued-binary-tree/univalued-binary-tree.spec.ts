import { toTreeNode } from "lc/tools/tree-node";
import { isUnivalTree } from "./univalued-binary-tree";

test.each`
    root                        | expectedOutput
    ${[1, 1, 1, 1, 1, null, 1]} | ${true}
    ${[2, 2, 2, 5, 2]}          | ${false}
    ${[]}                       | ${true}
`("_($root) -> $expectedOutput", ({ root, expectedOutput }: any) => {
    let tRoot = toTreeNode(root);
    let result = isUnivalTree(tRoot);
    expect(result).toBe(expectedOutput);
});
