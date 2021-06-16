import { toTreeNode } from "lc/tools/tree-node";
import { isSymmetric, isSymmetricIterative } from "./symmetric-tree";

test.each`
    root                           | expectedOutput
    ${[]}                          | ${true}
    ${[1, 2, 2, 3, 4, 4, 3]}       | ${true}
    ${[1, 2, 2, null, 3, null, 3]} | ${false}
    ${[1, 2, 2, 3, null, null, 3]} | ${true}
`("_($root) -> $expectedOutput", ({ root, expectedOutput }: any) => {
    let tRoot = toTreeNode(root);
    let result = isSymmetric(tRoot);
    expect(result).toBe(expectedOutput);
});

test.each`
    root                           | expectedOutput
    ${[]}                          | ${true}
    ${[1, 2, 2, 3, 4, 4, 3]}       | ${true}
    ${[1, 2, 2, null, 3, null, 3]} | ${false}
    ${[1, 2, 2, 3, null, null, 3]} | ${true}
`("_2($root) -> $expectedOutput", ({ root, expectedOutput }: any) => {
    let tRoot = toTreeNode(root);
    let result = isSymmetricIterative(tRoot);
    expect(result).toBe(expectedOutput);
});
