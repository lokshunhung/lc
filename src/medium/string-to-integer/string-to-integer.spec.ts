import { myAtoi } from "./string-to-integer";

test.each`
    s                    | expectedOutput
    ${"42"}              | ${42}
    ${"   -42"}          | ${-42}
    ${"4193 with words"} | ${4193}
    ${"words and 987"}   | ${0}
    ${"-91283472332"}    | ${-2147483648}
`("_($s) -> $expectedOutput", ({ s, expectedOutput }: any) => {
    let result = myAtoi(s);
    expect(result).toBe(expectedOutput);
});
