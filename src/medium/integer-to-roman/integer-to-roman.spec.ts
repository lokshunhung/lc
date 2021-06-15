import { intToRoman } from "./integer-to-roman";

test.each`
    num     | expectedOutput
    ${3}    | ${"III"}
    ${4}    | ${"IV"}
    ${9}    | ${"IX"}
    ${58}   | ${"LVIII"}
    ${1994} | ${"MCMXCIV"}
`("_($num) -> $expectedOutput", ({ num, expectedOutput }: any) => {
    let result = intToRoman(num);
    expect(result).toBe(expectedOutput);
});
