import { twoSum } from "./two-sum";

test.each`
    nums              | target | expectedOutput
    ${[2, 7, 11, 15]} | ${9}   | ${[0, 1]}
    ${[3, 2, 4]}      | ${6}   | ${[1, 2]}
    ${[3, 3]}         | ${6}   | ${[0, 1]}
`("_($nums, $target) -> $expectedOutput", ({ nums, target, expectedOutput }: any) => {
    let result = twoSum(nums, target);
    expect(result).toStrictEqual(expectedOutput);
});
