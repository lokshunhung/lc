import { threeSum } from "./three-sum";

test.each`
    nums                     | expectedOutput
    ${[-1, 0, 1, 2, -1, -4]} | ${[[-1, -1, 2], [-1, 0, 1]]}
    ${[]}                    | ${[]}
    ${[0]}                   | ${[]}
`("_($nums) -> $expectedOutput", ({ nums, expectedOutput }: any) => {
    let result = threeSum(nums);
    expect(result).toBe(expectedOutput);
});
