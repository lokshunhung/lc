import { toTreeNode } from "lc/tools/tree-node";
import { largestValues } from "./find-largest-value-in-each-tree-row";

test.each`
    root                        | expectedOutput
    ${[1, 3, 2, 5, 3, null, 9]} | ${[1, 3, 9]}
    ${[1, 2, 3]}                | ${[1, 3]}
    ${[1]}                      | ${[1]}
    ${[1, null, 2]}             | ${[1, 2]}
    ${[]}                       | ${[]}
`("_($root) -> $expectedOutput", ({ root, expectedOutput }: any) => {
    let tRoot = toTreeNode(root);
    let result = largestValues(tRoot);
    expect(result).toStrictEqual(expectedOutput);
});
