import { toArray } from "lc/tools/tree-node";
import { sortedArrayToBST } from "./convert-sorted-array-to-binary-search-tree";

test.each`
    nums                  | expectedOutput
    ${[-10, -3, 0, 5, 9]} | ${[0, -10, 5, null, -3, null, 9]}
    ${[1, 3]}             | ${[1, null, 3]}
    ${[]}                 | ${[]}
`("_($nums) -> $expectedOutput", ({ nums, expectedOutput }: any) => {
    let result = sortedArrayToBST(nums);
    let resultArr = toArray(result);
    expect(resultArr).toStrictEqual(expectedOutput);
});
