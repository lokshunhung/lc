import { toArray, toTreeNode } from "lc/tools/tree-node";
import { deleteNode } from "./delete-node-in-a-bst";

test.each`
    root                              | key   | expectedOutput
    ${[5, 3, 6, 2, 4, null, 7]}       | ${3}  | ${[5, 4, 6, 2, null, null, 7]}
    ${[5, 3, 6, 2, 4, null, 7]}       | ${0}  | ${[5, 3, 6, 2, 4, null, 7]}
    ${[]}                             | ${0}  | ${[]}
    ${[50, 30, 70, null, 40, 60, 80]} | ${50} | ${[60, 30, 70, null, 40, null, 80]}
`("_($root, $key) -> $expectedOutput", ({ root, key, expectedOutput }: any) => {
    let tRoot = toTreeNode(root);
    let result = deleteNode(tRoot, key);
    let resultArr = toArray(result);
    expect(resultArr).toStrictEqual(expectedOutput);
});
