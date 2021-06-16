import { longestCommonPrefix } from "./longest-common-prefix";

test.each`
    strs                            | expectedOutput
    ${["flower", "flow", "flight"]} | ${"fl"}
    ${["dog", "racecar", "car"]}    | ${""}
    ${["bar", "bard"]}              | ${"bar"}
    ${["foo", "foo"]}               | ${"foo"}
    ${["", ""]}                     | ${""}
`("_($strs) -> $expectedOutput", ({ strs, expectedOutput }: any) => {
    let result = longestCommonPrefix(strs);
    expect(result).toBe(expectedOutput);
});
