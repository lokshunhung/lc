import { countAndSay } from "./count-and-say";

test.each`
    n    | expectedOutput
    ${1} | ${"1"}
    ${4} | ${"1211"}
`("_($n) -> $expectedOutput", ({ n, expectedOutput }: any) => {
    let result = countAndSay(n);
    expect(result).toBe(expectedOutput);
});
