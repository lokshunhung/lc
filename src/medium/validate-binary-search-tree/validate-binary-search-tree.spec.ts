import { toTreeNode } from "lc/tools/tree-node";
import { isValidBST } from "./validate-binary-search-tree";

test.each`
    root                                                                      | expectedOutput
    ${[2, 1, 3]}                                                              | ${true}
    ${[5, 1, 4, null, null, 3, 6]}                                            | ${false}
    ${[]}                                                                     | ${true}
    ${[120, 70, 140, 50, 100, 130, 160, 20, 55, 75, 110, 119, 135, 150, 200]} | ${false}
`("_($root) -> $expectedOutput", ({ root, expectedOutput }: any) => {
    let tRoot = toTreeNode(root);
    let result = isValidBST(tRoot);
    expect(result).toBe(expectedOutput);
});
