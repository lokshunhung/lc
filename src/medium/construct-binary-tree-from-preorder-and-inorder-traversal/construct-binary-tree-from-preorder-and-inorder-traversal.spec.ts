import { toArray } from "lc/tools/tree-node";
import { buildTree } from "./construct-binary-tree-from-preorder-and-inorder-traversal";

test.each`
    preorder             | inorder              | expectedOutput
    ${[3, 9, 20, 15, 7]} | ${[9, 3, 15, 20, 7]} | ${[3, 9, 20, null, null, 15, 7]}
    ${[-1]}              | ${[-1]}              | ${[-1]}
    ${[]}                | ${[]}                | ${[]}
`("_($preorder, $inorder) -> $expectedOutput", ({ preorder, inorder, expectedOutput }: any) => {
    let result = buildTree(preorder, inorder);
    let resultArr = toArray(result);
    expect(resultArr).toStrictEqual(expectedOutput);
});
