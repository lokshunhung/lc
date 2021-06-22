import { toArray, toTreeNode } from "lc/tools/tree-node";
import { searchBST } from "./search-in-a-binary-search-tree";

test.each`
    root               | val  | expectedOutput
    ${[4, 2, 7, 1, 3]} | ${2} | ${[2, 1, 3]}
    ${[4, 2, 7, 1, 3]} | ${5} | ${[]}
`("_($root, $val) -> $expectedOutput", ({ root, val, expectedOutput }: any) => {
    let tRoot = toTreeNode(root);
    let result = searchBST(tRoot, val);
    let resultArr = toArray(result);
    expect(resultArr).toStrictEqual(expectedOutput);
});
