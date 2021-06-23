import { reverseWords } from "./reverse-words-in-a-string-iii";

test.each`
    s                                | expectedOutput
    ${"Let's take LeetCode contest"} | ${"s'teL ekat edoCteeL tsetnoc"}
    ${"God Ding"}                    | ${"doG gniD"}
`("_($s) -> $expectedOutput", ({ s, expectedOutput }: any) => {
    let result = reverseWords(s);
    expect(result).toBe(expectedOutput);
});
