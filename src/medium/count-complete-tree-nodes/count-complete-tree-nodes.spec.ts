import { toTreeNode } from "lc/tools/tree-node";
import { countNodes } from "./count-complete-tree-nodes";

test.each`
    root                  | expectedOutput
    ${[1, 2, 3, 4, 5, 6]} | ${6}
    ${[]}                 | ${0}
    ${[1]}                | ${1}
`("_($root) -> $expectedOutput", ({ root, expectedOutput }: any) => {
    let tRoot = toTreeNode(root);
    let result = countNodes(tRoot);
    expect(result).toBe(expectedOutput);
});
