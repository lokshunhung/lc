import { decodeString } from "./decode-string";

test.each`
    s                  | expectedOutput
    ${"3[a]2[bc]"}     | ${"aaabcbc"}
    ${"3[a2[c]]"}      | ${"accaccacc"}
    ${"2[abc]3[cd]ef"} | ${"abcabccdcdcdef"}
    ${"abc3[cd]xyz"}   | ${"abccdcdcdxyz"}
    ${"10[a]"}         | ${"aaaaaaaaaa"}
    ${"abc"}           | ${"abc"}
    ${"2[a]"}          | ${"aa"}
`("_($s) -> $expectedOutput", ({ s, expectedOutput }: any) => {
    let result = decodeString(s);
    expect(result).toBe(expectedOutput);
});
