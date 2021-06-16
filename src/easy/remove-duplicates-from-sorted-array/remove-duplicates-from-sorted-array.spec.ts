import { removeDuplicates } from "./remove-duplicates-from-sorted-array";

test.each`
    nums                              | expectedK | expectedNums
    ${[]}                             | ${0}      | ${[]}
    ${[1, 2, 3]}                      | ${3}      | ${[1, 2, 3]}
    ${[1, 1, 2]}                      | ${2}      | ${[1, 2]}
    ${[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]} | ${5}      | ${[0, 1, 2, 3, 4]}
`("_($nums) -> $expectedK, $expectedNums", ({ nums, expectedK, expectedNums }: any) => {
    let result = removeDuplicates(nums);
    expect(nums).toStrictEqual(expectedNums);
    expect(result).toBe(expectedK);
});
