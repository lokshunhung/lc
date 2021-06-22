import { toArray, toTreeNode } from "lc/tools/tree-node";
import { increasingBST } from "./increasing-order-search-tree";

test.each([
    [
        [5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9],
        [1, null, 2, null, 3, null, 4, null, 5, null, 6, null, 7, null, 8, null, 9],
    ],
    [
        [5, 1, 7],
        [1, null, 5, null, 7],
    ],
])("_($root) -> $expectedOutput", (root, expectedOutput) => {
    let tRoot = toTreeNode(root);
    let result = increasingBST(tRoot);
    let resultArr = toArray(result);
    expect(resultArr).toStrictEqual(expectedOutput);
});
