import { toTreeNode } from "lc/tools/tree-node";
import { isSameTree } from "./same-tree";

test.each`
    p            | q               | expectedOutput
    ${[1, 2, 3]} | ${[1, 2, 3]}    | ${true}
    ${[]}        | ${[]}           | ${true}
    ${[1, 2]}    | ${[1, null, 2]} | ${false}
    ${[1, 2, 1]} | ${[1, 1, 2]}    | ${false}
`("_($p, $q) -> $expectedOutput", ({ p, q, expectedOutput }: any) => {
    let tp = toTreeNode(p);
    let tq = toTreeNode(q);
    let result = isSameTree(tp, tq);
    expect(result).toBe(expectedOutput);
});
