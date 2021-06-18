import { toTreeNode } from "lc/tools/tree-node";
import { flatten } from "./flatten-binary-tree-to-linked-list";

test.each`
    root                        | expectedOutput
    ${[1, 2, 5, 3, 4, null, 6]} | ${[1, null, 2, null, 3, null, 4, null, 5, null, 6]}
    ${[1, null, 2, 3]}          | ${[1, null, 2, null, 3]}
    ${[]}                       | ${[]}
    ${[0]}                      | ${[0]}
`("_($root) -> $expectedOutput", ({ root, expectedOutput }: any) => {
    let tRoot = toTreeNode(root);
    flatten(tRoot);
    let tExpectedOutput = toTreeNode(expectedOutput);
    expect(tRoot).toStrictEqual(tExpectedOutput);
});
