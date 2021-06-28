import { lengthOfLongestSubstring } from "./longest-substring-without-repeating-characters";

test.each`
    s             | expectedOutput
    ${"abcabcbb"} | ${3}
    ${"bbbbb"}    | ${1}
    ${"pwwkew"}   | ${3}
    ${""}         | ${0}
`("_($s) -> $expectedOutput", ({ s, expectedOutput }: any) => {
    let result = lengthOfLongestSubstring(s);
    expect(result).toBe(expectedOutput);
});
