import { toArray, toTreeNode } from "lc/tools/tree-node";
import { invertTree } from "./invert-binary-tree";

test.each`
    root                     | expectedOutput
    ${[4, 2, 7, 1, 3, 6, 9]} | ${[4, 7, 2, 9, 6, 3, 1]}
    ${[2, 1, 3]}             | ${[2, 3, 1]}
    ${[]}                    | ${[]}
`("_($root) -> $expectedOutput", ({ root, expectedOutput }: any) => {
    let tRoot = toTreeNode(root);
    let result = invertTree(tRoot);
    let resultArr = toArray(result);
    expect(resultArr).toStrictEqual(expectedOutput);
});
