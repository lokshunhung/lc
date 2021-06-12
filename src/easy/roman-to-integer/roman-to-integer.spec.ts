import { romanToInt } from "./roman-to-integer";

test.each`
    s            | expectedOutput
    ${"III"}     | ${3}
    ${"IV"}      | ${4}
    ${"IX"}      | ${9}
    ${"LVIII"}   | ${58}
    ${"MCMXCIV"} | ${1994}
`("_($s) -> $expectedOutput", ({ s, expectedOutput }: any) => {
    let result = romanToInt(s);
    expect(result).toBe(expectedOutput);
});
