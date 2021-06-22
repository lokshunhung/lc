import { toTreeNode } from "lc/tools/tree-node";
import { leafSimilar } from "./leaf-similar-trees";

test.each`
    root1                                      | root2                                                              | expectedOutput
    ${[3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]} | ${[3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8]} | ${true}
    ${[1]}                                     | ${[1]}                                                             | ${true}
    ${[1]}                                     | ${[2]}                                                             | ${false}
    ${[1, 2]}                                  | ${[2, 2]}                                                          | ${true}
    ${[1, 2, 3]}                               | ${[1, 3, 2]}                                                       | ${false}
`("_($root1, $root2) -> $expectedOutput", ({ root1, root2, expectedOutput }: any) => {
    let tRoot1 = toTreeNode(root1);
    let tRoot2 = toTreeNode(root2);
    let result = leafSimilar(tRoot1, tRoot2);
    expect(result).toBe(expectedOutput);
});
