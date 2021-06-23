import { addStrings } from "./add-strings";

test.each`
    num1     | num2     | expectedOutput
    ${"11"}  | ${"123"} | ${"134"}
    ${"456"} | ${"77"}  | ${"533"}
    ${"0"}   | ${"0"}   | ${"0"}
`("_($num1, $num2) -> $expectedOutput", ({ num1, num2, expectedOutput }: any) => {
    let result = addStrings(num1, num2);
    expect(result).toBe(expectedOutput);
});
