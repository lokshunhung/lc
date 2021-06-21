import { toTreeNode } from "lc/tools/tree-node";
import { findMode } from "./find-mode-in-binary-search-tree";

test.each`
    root                     | expectedOutput
    ${[1, null, 2, 2]}       | ${[2]}
    ${[0]}                   | ${[0]}
    ${[2, 1, 3, 1, null, 2]} | ${[1, 2]}
    ${[]}                    | ${[]}
`("_($root) -> $expectedOutput", ({ root, expectedOutput }: any) => {
    let tRoot = toTreeNode(root);
    let result = findMode(tRoot);
    expect(result).toStrictEqual(expectedOutput);
});
