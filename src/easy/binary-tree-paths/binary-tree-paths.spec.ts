import { toTreeNode } from "lc/tools/tree-node";
import { binaryTreePaths } from "./binary-tree-paths";

test.each`
    root                  | expectedOutput
    ${[1, 2, 3, null, 5]} | ${["1->2->5", "1->3"]}
    ${[1]}                | ${["1"]}
    ${[]}                 | ${[]}
`("_($root) -> $expectedOutput", ({ root, expectedOutput }: any) => {
    let tRoot = toTreeNode(root);
    let result = binaryTreePaths(tRoot);
    expect(result).toStrictEqual(expectedOutput);
});
